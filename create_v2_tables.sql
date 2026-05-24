-- =====================================================
-- 归元AI v2.1 数据库建表SQL
-- 在Supabase SQL Editor中执行
-- =====================================================

-- 1. 健康计划模板
CREATE TABLE IF NOT EXISTS health_plan_templates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  category TEXT, -- 分类：更年期管理/肠道修复/抗炎/运动/中医外治等
  duration_days INTEGER NOT NULL DEFAULT 30,
  tasks JSONB DEFAULT '[]', -- 预置任务项 [{title, frequency, description}]
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. 健康计划
CREATE TABLE IF NOT EXISTS health_plans (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_name TEXT NOT NULL,
  patient_phone TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  template_id UUID REFERENCES health_plan_templates(id),
  status TEXT DEFAULT 'active', -- active/completed/expired/paused
  start_date DATE,
  end_date DATE,
  duration_days INTEGER DEFAULT 30,
  completion_rate NUMERIC(5,2) DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. 健康任务（打卡项）
CREATE TABLE IF NOT EXISTS health_tasks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  plan_id UUID NOT NULL REFERENCES health_plans(id) ON DELETE CASCADE,
  patient_name TEXT NOT NULL,
  patient_phone TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  frequency TEXT DEFAULT 'daily', -- daily/weekly/custom
  custom_frequency TEXT, -- 自定义频率描述
  category TEXT, -- 营养/运动/生活方式/药物/外治法
  is_completed BOOLEAN DEFAULT FALSE,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. 打卡记录
CREATE TABLE IF NOT EXISTS checkin_records (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  task_id UUID NOT NULL REFERENCES health_tasks(id) ON DELETE CASCADE,
  plan_id UUID NOT NULL REFERENCES health_plans(id) ON DELETE CASCADE,
  patient_name TEXT NOT NULL,
  patient_phone TEXT NOT NULL,
  checkin_date DATE NOT NULL DEFAULT CURRENT_DATE,
  note TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. AI对话记录
CREATE TABLE IF NOT EXISTS ai_conversations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_name TEXT,
  patient_phone TEXT,
  conversation_id TEXT, -- 扣子会话ID
  title TEXT, -- 对话标题/摘要
  messages JSONB DEFAULT '[]', -- [{role, content, timestamp}]
  source TEXT DEFAULT 'workspace', -- workspace/patient_detail
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. 客户记录/随访
CREATE TABLE IF NOT EXISTS customer_records (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_name TEXT NOT NULL,
  patient_phone TEXT NOT NULL,
  record_type TEXT DEFAULT 'followup', -- followup/phone/visit/note
  title TEXT,
  content TEXT NOT NULL,
  followup_date DATE,
  next_followup_date DATE,
  operator_name TEXT, -- 操作人
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ========== 索引 ==========
CREATE INDEX IF NOT EXISTS idx_health_plans_patient ON health_plans(patient_name, patient_phone);
CREATE INDEX IF NOT EXISTS idx_health_plans_status ON health_plans(status);
CREATE INDEX IF NOT EXISTS idx_health_tasks_plan ON health_tasks(plan_id);
CREATE INDEX IF NOT EXISTS idx_health_tasks_patient ON health_tasks(patient_name, patient_phone);
CREATE INDEX IF NOT EXISTS idx_checkin_records_task ON checkin_records(task_id);
CREATE INDEX IF NOT EXISTS idx_checkin_records_plan ON checkin_records(plan_id);
CREATE INDEX IF NOT EXISTS idx_checkin_records_date ON checkin_records(checkin_date);
CREATE INDEX IF NOT EXISTS idx_checkin_records_patient ON checkin_records(patient_name, patient_phone);
CREATE INDEX IF NOT EXISTS idx_ai_conversations_patient ON ai_conversations(patient_name, patient_phone);
CREATE INDEX IF NOT EXISTS idx_ai_conversations_source ON ai_conversations(source);
CREATE INDEX IF NOT EXISTS idx_customer_records_patient ON customer_records(patient_name, patient_phone);
CREATE INDEX IF NOT EXISTS idx_customer_records_type ON customer_records(record_type);
CREATE INDEX IF NOT EXISTS idx_customer_records_date ON customer_records(followup_date);

-- ========== RLS策略 ==========
ALTER TABLE health_plan_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE health_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE health_tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE checkin_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE customer_records ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anon all on health_plan_templates" ON health_plan_templates FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow anon all on health_plans" ON health_plans FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow anon all on health_tasks" ON health_tasks FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow anon all on checkin_records" ON checkin_records FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow anon all on ai_conversations" ON ai_conversations FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow anon all on customer_records" ON customer_records FOR ALL USING (true) WITH CHECK (true);

-- ========== 预置计划模板 ==========
INSERT INTO health_plan_templates (name, description, category, duration_days, tasks) VALUES
('更年期抗衰管理', '针对围绝经期及更年期女性的综合抗衰管理方案，涵盖激素平衡、骨密度维护、心血管保护及情绪调节。', '更年期管理', 30, 
 '[{"title":"服用维生素D3 2000IU","frequency":"daily","description":"每日早餐后服用，促进钙吸收","category":"营养"},{"title":"服用钙片600mg","frequency":"daily","description":"每日晚餐后服用","category":"营养"},{"title":"大豆异黄酮120mg","frequency":"daily","description":"每日随餐服用","category":"营养"},{"title":"每日步行30分钟","frequency":"daily","description":"中等强度有氧运动","category":"运动"},{"title":"凯格尔运动","frequency":"daily","description":"每日3组，每组15次","category":"运动"},{"title":"冥想放松15分钟","frequency":"daily","description":"睡前进行深呼吸冥想","category":"生活方式"},{"title":"记录症状日记","frequency":"daily","description":"记录潮热、情绪、睡眠等变化","category":"生活方式"},{"title":"瑜伽课","frequency":"weekly","description":"每周2次阴瑜伽或修复瑜伽","category":"运动"},{"title":"复查激素六项","frequency":"custom","description":"第30天复查FSH/LH/E2等","category":"药物"}]'::jsonb),

('POI/卵巢早衰调理', '针对早发性卵巢功能不全（POI）患者的90天系统调理方案，分三个阶段逐步改善卵巢功能。', '卵巢调理', 90,
 '[{"title":"服用辅酶Q10 200mg","frequency":"daily","description":"每日早餐后服用，改善卵子质量","category":"营养"},{"title":"服用DHEA 25mg","frequency":"daily","description":"每日晨起空腹服用（需医生指导）","category":"营养"},{"title":"服用维生素E 400IU","frequency":"daily","description":"每日随餐服用，抗氧化","category":"营养"},{"title":"Omega-3鱼油1000mg","frequency":"daily","description":"每日随餐服用","category":"营养"},{"title":"八段锦练习20分钟","frequency":"daily","description":"每日清晨练习","category":"运动"},{"title":"泡脚15分钟","frequency":"daily","description":"睡前温水泡脚，可加艾叶","category":"生活方式"},{"title":"早睡（22:30前）","frequency":"daily","description":"保证8小时睡眠","category":"生活方式"},{"title":"针灸治疗","frequency":"weekly","description":"每周2次针灸调理","category":"中医"},{"title":"复查AMH和激素","frequency":"custom","description":"第30/60/90天各复查一次","category":"药物"}]'::jsonb),

('5R肠道修复', '功能医学5R肠道修复方案：Remove(去除)-Replace(替代)-Reinoculate(再接种)-Repair(修复)-Rebalance(再平衡)，30天分5阶段。', '肠道修复', 30,
 '[{"title":"去除敏感食物","frequency":"daily","description":"第1-6天：停食麸质、乳制品、糖、咖啡因","category":"营养"},{"title":"服用消化酶","frequency":"daily","description":"随餐服用，辅助消化","category":"营养"},{"title":"服用益生菌","frequency":"daily","description":"第7-18天：每日空腹服用100亿CFU","category":"营养"},{"title":"服用L-谷氨酰胺5g","frequency":"daily","description":"第13-24天：修复肠黏膜","category":"营养"},{"title":"骨汤一碗","frequency":"daily","description":"每日饮用，含胶原蛋白","category":"营养"},{"title":"抗炎饮食","frequency":"daily","description":"全阶段遵循抗炎饮食原则","category":"营养"},{"title":"腹式呼吸练习","frequency":"daily","description":"每日10分钟，调节迷走神经","category":"生活方式"},{"title":"益生菌增量","frequency":"daily","description":"第19-24天：增加至200亿CFU","category":"营养"},{"title":"冥想放松","frequency":"daily","description":"第25-30天：每日15分钟正念冥想","category":"生活方式"},{"title":"记录排便和症状","frequency":"daily","description":"每日记录肠道症状变化","category":"生活方式"}]'::jsonb),

('抗炎饮食计划', '14天抗炎饮食方案，通过饮食调整降低体内炎症水平，改善慢性低度炎症状态。', '抗炎饮食', 14,
 '[{"title":"服用姜黄素500mg","frequency":"daily","description":"随餐服用，配合黑胡椒素增效","category":"营养"},{"title":"服用Omega-3 2000mg","frequency":"daily","description":"分两次随餐服用","category":"营养"},{"title":"饮用绿茶2杯","frequency":"daily","description":"富含儿茶素抗氧化","category":"营养"},{"title":"深色蔬菜3份","frequency":"daily","description":"菠菜/紫甘蓝/西兰花等","category":"营养"},{"title":"优质蛋白1份","frequency":"daily","description":"三文鱼/鸡胸/豆腐","category":"营养"},{"title":"30分钟有氧运动","frequency":"daily","description":"快走/游泳/骑行","category":"运动"},{"title":"记录饮食和炎症症状","frequency":"daily","description":"记录每日饮食及身体感受","category":"生活方式"},{"title":"断食12小时","frequency":"daily","description":"晚8点到早8点不进食","category":"生活方式"}]'::jsonb),

('运动处方基础版', '30天运动处方基础方案，适合久坐人群和运动初学者，循序渐进提升体能。', '运动处方', 30,
 '[{"title":"晨起拉伸10分钟","frequency":"daily","description":"全身主要肌群拉伸","category":"运动"},{"title":"步行6000步","frequency":"daily","description":"第1-10天目标","category":"运动"},{"title":"步行8000步","frequency":"daily","description":"第11-20天目标","category":"运动"},{"title":"步行10000步","frequency":"daily","description":"第21-30天目标","category":"运动"},{"title":"核心训练15分钟","frequency":"daily","description":"平板支撑/死虫/鸟狗式","category":"运动"},{"title":"力量训练","frequency":"weekly","description":"每周3次，上肢/下肢/全身轮替","category":"运动"},{"title":"运动后补充蛋白质","frequency":"daily","description":"运动后30分钟内补充20g蛋白质","category":"营养"},{"title":"记录运动量和感受","frequency":"daily","description":"记录步数、训练内容、身体反馈","category":"生活方式"}]'::jsonb),

('中医外治法疗程', '基于中医外治法决策树制定的外治法综合疗程，包括艾灸、拔罐、刮痧、推拿等。', '中医外治', 30,
 '[{"title":"足三里艾灸15分钟","frequency":"daily","description":"每日交替双侧，温补脾胃","category":"中医"},{"title":"关元穴艾灸15分钟","frequency":"daily","description":"温补下焦，调理冲任","category":"中医"},{"title":"泡脚+按摩涌泉穴","frequency":"daily","description":"睡前温水泡脚20分钟","category":"中医"},{"title":"背部拔罐","frequency":"weekly","description":"每周1次，沿膀胱经走罐","category":"中医"},{"title":"腹部推拿","frequency":"weekly","description":"每周2次顺时针摩腹","category":"中医"},{"title":"刮痧","frequency":"weekly","description":"每周1次，颈肩或背部","category":"中医"},{"title":"服用中药汤剂","frequency":"daily","description":"遵医嘱每日2次","category":"药物"},{"title":"记录症状变化","frequency":"daily","description":"记录疼痛/寒热/睡眠等变化","category":"生活方式"}]'::jsonb);
