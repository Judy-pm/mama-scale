-- =====================================================
-- 归元AI 全量建表SQL（三合一）
-- 包含：patients + tcm_consultations + v2.1六表 + 体检管理三表
-- 在Supabase SQL Editor中一次性粘贴执行
-- =====================================================

-- =====================================================
-- 第一部分：基础表（patients + tcm_consultations）
-- =====================================================

-- 1. 患者档案表
CREATE TABLE IF NOT EXISTS patients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  age INTEGER,
  gender TEXT,
  id_number TEXT,
  chief_complaint TEXT,
  medical_history TEXT,
  allergy_history TEXT,
  family_history TEXT,
  notes TEXT,
  tags JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_patients_name ON patients(name);
CREATE INDEX IF NOT EXISTS idx_patients_phone ON patients(phone);

ALTER TABLE patients ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='patients' AND policyname='Allow anonymous select') THEN
    CREATE POLICY "Allow anonymous select" ON patients FOR SELECT TO anon USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='patients' AND policyname='Allow anonymous insert') THEN
    CREATE POLICY "Allow anonymous insert" ON patients FOR INSERT TO anon WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='patients' AND policyname='Allow anonymous update') THEN
    CREATE POLICY "Allow anonymous update" ON patients FOR UPDATE TO anon USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='patients' AND policyname='Allow anonymous delete') THEN
    CREATE POLICY "Allow anonymous delete" ON patients FOR DELETE TO anon USING (true);
  END IF;
END $$;

-- 2. 中医问诊记录表
CREATE TABLE IF NOT EXISTS tcm_consultations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_name TEXT NOT NULL,
  patient_phone TEXT NOT NULL,
  visit_type TEXT DEFAULT 'initial',
  chief_complaint TEXT,
  present_illness TEXT,
  medical_history TEXT,
  medication_history TEXT,
  lab_results TEXT,
  past_history TEXT,
  surgical_history TEXT,
  allergy_history TEXT,
  family_history TEXT,
  menstrual_history TEXT,
  emotional_status JSONB,
  dietary_habits JSONB,
  sleep_quality JSONB,
  living_environment TEXT,
  work_stress JSONB,
  exercise_habits JSONB,
  other_notes TEXT,
  tongue JSONB,
  pulse JSONB,
  ai_summary JSONB,
  syndrome_differentiation JSONB,
  ai_diagnosis JSONB,
  diagnosis_confirmed BOOLEAN DEFAULT FALSE,
  followup_data JSONB,
  transcript TEXT,
  status TEXT DEFAULT 'submitted',
  doctor_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_tcm_name ON tcm_consultations(patient_name);
CREATE INDEX IF NOT EXISTS idx_tcm_phone ON tcm_consultations(patient_phone);
CREATE INDEX IF NOT EXISTS idx_tcm_created ON tcm_consultations(created_at DESC);

ALTER TABLE tcm_consultations ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='tcm_consultations' AND policyname='Allow anonymous select') THEN
    CREATE POLICY "Allow anonymous select" ON tcm_consultations FOR SELECT TO anon USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='tcm_consultations' AND policyname='Allow anonymous insert') THEN
    CREATE POLICY "Allow anonymous insert" ON tcm_consultations FOR INSERT TO anon WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='tcm_consultations' AND policyname='Allow anonymous update') THEN
    CREATE POLICY "Allow anonymous update" ON tcm_consultations FOR UPDATE TO anon USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='tcm_consultations' AND policyname='Allow anonymous delete') THEN
    CREATE POLICY "Allow anonymous delete" ON tcm_consultations FOR DELETE TO anon USING (true);
  END IF;
END $$;

-- =====================================================
-- 第二部分：v2.1新增表（健康计划+AI对话+客户记录）
-- =====================================================

-- 3. 健康计划模板
CREATE TABLE IF NOT EXISTS health_plan_templates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  category TEXT,
  duration_days INTEGER NOT NULL DEFAULT 30,
  tasks JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. 健康计划
CREATE TABLE IF NOT EXISTS health_plans (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_name TEXT NOT NULL,
  patient_phone TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  template_id UUID REFERENCES health_plan_templates(id),
  status TEXT DEFAULT 'active',
  start_date DATE,
  end_date DATE,
  duration_days INTEGER DEFAULT 30,
  completion_rate NUMERIC(5,2) DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. 健康任务（打卡项）
CREATE TABLE IF NOT EXISTS health_tasks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  plan_id UUID NOT NULL REFERENCES health_plans(id) ON DELETE CASCADE,
  patient_name TEXT NOT NULL,
  patient_phone TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  frequency TEXT DEFAULT 'daily',
  custom_frequency TEXT,
  category TEXT,
  is_completed BOOLEAN DEFAULT FALSE,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. 打卡记录
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

-- 7. AI对话记录
CREATE TABLE IF NOT EXISTS ai_conversations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_name TEXT,
  patient_phone TEXT,
  conversation_id TEXT,
  title TEXT,
  messages JSONB DEFAULT '[]',
  source TEXT DEFAULT 'workspace',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. 客户记录/随访
CREATE TABLE IF NOT EXISTS customer_records (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_name TEXT NOT NULL,
  patient_phone TEXT NOT NULL,
  record_type TEXT DEFAULT 'followup',
  title TEXT,
  content TEXT NOT NULL,
  followup_date DATE,
  next_followup_date DATE,
  operator_name TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- v2.1 索引
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

-- v2.1 RLS策略
ALTER TABLE health_plan_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE health_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE health_tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE checkin_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE customer_records ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='health_plan_templates' AND policyname='Allow anon all on health_plan_templates') THEN
    CREATE POLICY "Allow anon all on health_plan_templates" ON health_plan_templates FOR ALL USING (true) WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='health_plans' AND policyname='Allow anon all on health_plans') THEN
    CREATE POLICY "Allow anon all on health_plans" ON health_plans FOR ALL USING (true) WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='health_tasks' AND policyname='Allow anon all on health_tasks') THEN
    CREATE POLICY "Allow anon all on health_tasks" ON health_tasks FOR ALL USING (true) WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='checkin_records' AND policyname='Allow anon all on checkin_records') THEN
    CREATE POLICY "Allow anon all on checkin_records" ON checkin_records FOR ALL USING (true) WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='ai_conversations' AND policyname='Allow anon all on ai_conversations') THEN
    CREATE POLICY "Allow anon all on ai_conversations" ON ai_conversations FOR ALL USING (true) WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='customer_records' AND policyname='Allow anon all on customer_records') THEN
    CREATE POLICY "Allow anon all on customer_records" ON customer_records FOR ALL USING (true) WITH CHECK (true);
  END IF;
END $$;

-- v2.1 预置计划模板
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

-- =====================================================
-- 第三部分：体检管理表（checkup_persons + checkup_reports + conversion_records）
-- =====================================================

-- 9. 体检人员表（独立于patients，体量和字段不同）
CREATE TABLE IF NOT EXISTS checkup_persons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  gender TEXT,
  age INTEGER,
  phone TEXT,
  id_card TEXT,
  checkup_date DATE,
  checkup_package TEXT,
  risk_level TEXT DEFAULT 'green',
  risk_summary JSONB DEFAULT '{}',
  conversion_status TEXT DEFAULT 'none',
  converted_patient_id UUID,
  conversion_notes TEXT,
  last_report_id UUID,
  total_reports INTEGER DEFAULT 0,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. 体检报告表
CREATE TABLE IF NOT EXISTS checkup_reports (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  person_id UUID REFERENCES checkup_persons(id),
  person_name TEXT NOT NULL,
  person_phone TEXT,
  report_date DATE,
  package_name TEXT,
  file_url TEXT,
  file_type TEXT,
  raw_text TEXT,
  ai_extracted JSONB DEFAULT '{}',
  ai_conclusion TEXT,
  ai_recommendation TEXT,
  risk_level TEXT DEFAULT 'green',
  dimension_scores JSONB DEFAULT '{}',
  abnormal_items JSONB DEFAULT '[]',
  package_recommendation TEXT,
  is_deep_analyzed BOOLEAN DEFAULT FALSE,
  deep_analysis TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 11. 转化跟进记录
CREATE TABLE IF NOT EXISTS conversion_records (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  person_id UUID REFERENCES checkup_persons(id),
  person_name TEXT,
  action TEXT NOT NULL,
  notes TEXT,
  operator_name TEXT,
  next_action TEXT,
  next_action_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 体检管理 索引
CREATE INDEX IF NOT EXISTS idx_checkup_persons_name ON checkup_persons(name);
CREATE INDEX IF NOT EXISTS idx_checkup_persons_phone ON checkup_persons(phone);
CREATE INDEX IF NOT EXISTS idx_checkup_persons_risk ON checkup_persons(risk_level);
CREATE INDEX IF NOT EXISTS idx_checkup_persons_conversion ON checkup_persons(conversion_status);
CREATE INDEX IF NOT EXISTS idx_checkup_persons_date ON checkup_persons(checkup_date);
CREATE INDEX IF NOT EXISTS idx_checkup_reports_person ON checkup_reports(person_id);
CREATE INDEX IF NOT EXISTS idx_checkup_reports_date ON checkup_reports(report_date);
CREATE INDEX IF NOT EXISTS idx_checkup_reports_risk ON checkup_reports(risk_level);
CREATE INDEX IF NOT EXISTS idx_conversion_records_person ON conversion_records(person_id);
CREATE INDEX IF NOT EXISTS idx_conversion_records_action ON conversion_records(action);
CREATE INDEX IF NOT EXISTS idx_conversion_records_date ON conversion_records(created_at);

-- 体检管理 RLS策略
ALTER TABLE checkup_persons ENABLE ROW LEVEL SECURITY;
ALTER TABLE checkup_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversion_records ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='checkup_persons' AND policyname='Allow anon all on checkup_persons') THEN
    CREATE POLICY "Allow anon all on checkup_persons" ON checkup_persons FOR ALL USING (true) WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='checkup_reports' AND policyname='Allow anon all on checkup_reports') THEN
    CREATE POLICY "Allow anon all on checkup_reports" ON checkup_reports FOR ALL USING (true) WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='conversion_records' AND policyname='Allow anon all on conversion_records') THEN
    CREATE POLICY "Allow anon all on conversion_records" ON conversion_records FOR ALL USING (true) WITH CHECK (true);
  END IF;
END $$;

-- =====================================================
-- 完成！共11张表 + 索引 + RLS + 6条预置模板
-- =====================================================
