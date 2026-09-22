(function(){
'use strict';

/* ---------------- i18n ---------------- */
const EN = {
  'nav.about':'About','nav.business':'Business','nav.product':'Products','nav.esg':'ESG','nav.ir':'Investor Relations','nav.contact':'Contact us',
  'ft.tag':'Global independent power provider (IPP) · clean power stations · critical energy materials · intelligent energy infrastructure',
  'ft.hq':'Group headquarters','ft.hq.p':'Ningbo, Zhejiang, China','ft.ops':'Plant operations · EPC','ft.ops.n':'Nanjing Cesun Power Co., Ltd.','ft.ops.p':'Room 501, Building A, Wisdom Valley, 69 Shuangfeng Road, Pukou District, Nanjing, Jiangsu','ft.ir':'Investor relations','ft.ir.p':'New York investor relations office',
  'foot.copy':'© 2026 PN Smart Energy Limited. All rights reserved. NASDAQ: PN',

  /* Home */
  'h.eyebrow':'NASDAQ: PN · Global independent power provider',
  'h.title':'Every factory rooftop,<br>a <em>clean-energy</em> producer.',
  'h.lede':'PN Smart Energy Limited (Nasdaq: PN) is a global independent power provider (IPP) focused on the development of clean power stations, critical energy materials, and intelligent energy infrastructure.',
  'h.cta1':'Power plants','h.cta2':'Products & trade',
  'h.k1':'Owned plants in operation','h.k1u':'plants','h.k2':'Grid-connected capacity','h.k3':'PNTECH annual supply capacity','h.k4':'Countries and regions served',
  'h.in.eyebrow':'About PN','h.in.title':'An integrated energy value chain, from critical energy materials to clean generation assets',
  'h.in.p1':'PN Smart Energy Limited (Nasdaq: PN) is a global independent power provider (IPP) focused on the development of clean power stations, critical energy materials, and intelligent energy infrastructure. Through its PNTECH brand, the Company also manufactures photovoltaic cables and connectors, serving customers across 140 countries and regions.',
  'h.in.p2':'Formerly known as Skycorp Solar Group Limited, the Company officially changed its name to PN Smart Energy Limited on June 12, 2026. The new name, inspired by its Nasdaq ticker symbol “PN,” reflects the Company’s strategic focus on “Power” and “New” — its commitment to new energy, new assets, and new value creation.',
  'h.in.more':'Learn more','h.in.cap':'A Cesun Power C&I rooftop solar plant',
  'h.bz.eyebrow':'Business','h.bz.title':'Plant assets + product trade, two engines','h.bz.more':'Our business',
  'h.t1.tag':'Core business','h.t1.t':'Power station investment & operation','h.t1.p':'Under the EMC model PN fully finances and operates C&I rooftop solar plants across their life cycle — ten grid-connected plants owned in Zhejiang, Jiangsu and Anhui.',
  'h.t.more':'Learn more',
  'h.t2.tag':'Engineering & O&M','h.t2.t':'EPC engineering & smart O&M','h.t2.p':'In-house design and construction teams, an AI design platform and a 7×24 smart O&M system; 1&nbsp;GW of cumulative plant design capacity across 23 provinces.',
  'h.t3.tag':'Products & trade','h.t3.t':'PNTECH manufacturing & global trade','h.t3.p':'Own solar cables and connectors, plus integrated tier-one storage and inverter products, with a sales network covering 60+ countries and regions.',
  'h.cs.eyebrow':'Plant cases','h.cs.title':'Ten C&I rooftop plants, all grid-connected','h.cs.more':'All plants',
  'h.pd.eyebrow':'Products','h.pd.title':'From a single solar cable to a PV-plus-storage system','h.pd.more':'All products',
  'h.p1.t':'Solar DC cable','h.p1.p':'PNTECH · H1Z2Z2-K / PV1-F · TÜV / UL certified',
  'h.p2.t':'MC4 PV connector','h.p2.p':'PNTECH · patented double seal · IP68',
  'h.p3.t':'C&I energy storage','h.p3.p':'15–257&nbsp;kWh modular · peak shaving · backup',
  'h.p4.t':'Residential PV + storage','h.p4.p':'3–25 kW HV / LV architectures · tier-one inverters',
  'h.es.t':'Every kilowatt-hour, accounted for','h.es.p':'The ten plants avoided about 4,983 t of CO₂ in 2026, equivalent to ~6,806 trees; the Board has adopted an ESG governance framework.','h.es.more':'Our ESG',
  'h.ir.eyebrow':'Investor relations','h.ir.p':'Announcements, financial reports, SEC filings and stock information are available on the investor relations website.',
  'h.ir.l1':'Stock information','h.ir.l2':'Press releases','h.ir.l3':'Financial reports','h.ir.l4':'SEC filings','h.ir.more':'Investor relations page',

  /* U.S. presence */
  'us.eyebrow':'U.S. localization','us.title':'Rooted in the North American market: SEIA membership and a New York office','us.more':'Learn more',
  'us.seal':'Member','us.s.eyebrow':'Industry association member','us.s.title':'Member of the Solar Energy Industries Association (SEIA)',
  'us.s.p':'In 2026 PN Smart Energy became a member of the Solar Energy Industries Association (SEIA). Founded in 1974 and headquartered in Washington, D.C., SEIA is the national trade association for the U.S. solar and storage industries, working with more than 1,200 member companies.',
  'ab.seia.p':'In 2026 PN Smart Energy became a member of the Solar Energy Industries Association (SEIA). Founded in 1974 and headquartered in Washington, D.C., SEIA is the national trade association for the U.S. solar and storage industries, working with more than 1,200 member companies. Following the Delaware and Texas subsidiaries and the New York investor relations office, SEIA membership is a further step in PN’s U.S. localization strategy, deepening ties with North American markets, policy and industry partners.',
  'us.n.eyebrow':'Investor relations office','us.n.title':'New York investor relations office','us.n.p':'Opened in August 2026 in Midtown Manhattan; gives North American investors and partners a direct channel during U.S. business hours.','us.n.more':'Contact details',
  'ml3':'Became a member of the Solar Energy Industries Association (SEIA)',

  /* About */
  'ab.eyebrow':'About us','ab.title':'A global independent power provider<br>building an integrated energy value chain',
  'ab.lede':'From critical energy materials to power transmission products to clean generation assets — PN Smart Energy is growing along this value chain from a PV component manufacturer into an owner-operator power producer.',
  'ab.pf.eyebrow':'Company profile','ab.pf.title':'From PV component manufacturer<br>to owner-operator power producer',
  'ab.pf.p1':'PN Smart Energy Limited (Nasdaq: PN) is a global independent power provider (IPP) focused on the development of clean power stations, critical energy materials, and intelligent energy infrastructure. Through its PNTECH brand, the Company also manufactures photovoltaic cables and connectors, serving customers across 140 countries and regions.',
  'ab.pf.p2':'Formerly known as Skycorp Solar Group Limited, the Company was a solar PV product provider principally engaged in the manufacture and sale of solar cables and connectors. Following a shareholder resolution passed on June 10, 2026, the Company officially changed its name to PN Smart Energy Limited on June 12, 2026. The new name, inspired by its Nasdaq ticker symbol “PN,” reflects the Company’s strategic focus on “Power” and “New” — representing its commitment to new energy, new assets, and new value creation.',
  'ab.pf.p3':'In May 2026 the Company completed the 100% acquisition of Nanjing Cesun Power, formally transforming from a manufacturer into an independent power producer that owns and operates its distributed plants. Today we own and operate ten C&I rooftop solar plants across Zhejiang, Jiangsu and Anhui, with subsidiaries in Singapore, Delaware and Texas, an investor relations office in Midtown Manhattan, and, since 2026, membership of the Solar Energy Industries Association (SEIA).',
  'ab.pf.p4':'Our long-term vision is to build an integrated energy value chain, from critical energy materials such as copper, to power transmission products, to clean energy generation assets.',
  'fact.hq':'Headquarters','fact.hq.v':'Ningbo, Zhejiang, China',
  'fact.listing':'Listing','fact.listing.v':'Nasdaq · NASDAQ: PN · March 5, 2025',
  'fact.footprint':'Footprint','fact.footprint.v':'China · Singapore · United States (Delaware, Texas) · New York IR office',
  'fact.ip':'Intellectual property','fact.ip.v':'58 patents (43 utility model, 7 invention, 8 design); Cesun Power also holds 15 software copyrights',
  'fact.cert':'Certifications','fact.cert.v':'47 international certifications incl. TÜV, UL, EN, IEC',
  'fact.people':'Team','fact.people.v':'102 full-time employees, performance-driven incentives',
  'about.cap':'A Cesun Power C&I rooftop solar plant','mission.eyebrow':'Mission','mission.text':'To benefit humanity through clean energy.',
  'str.eyebrow':'Strategy','str.title':'The Pegasus Strategy: 1&nbsp;GW in five years',
  'str.lede':'With Nanjing Cesun Power as the platform, PN aims to grow owned operating capacity to 1&nbsp;GW within five years through in-house development and acquisition of existing assets — a management target, not a guarantee. Four pillars carry the path.',
  'pl1.title':'Expand the generation asset base','pl1.p':'Grow owned, grid-connected capacity through both in-house development and acquisitions, with C&I rooftops as the mainstay.',
  'pl2.title':'Build new manufacturing capacity','pl2.p':'A new PNTECH facility in Nanjing Pukou is under development and targeted to commence production in 2027.',
  'pl3.title':'Deepen international market access','pl3.p':'Continue expanding export relationships across Europe, Southeast Asia and North America; Singapore and U.S. subsidiaries are already in place.',
  'pl4.title':'Flexible access to growth capital','pl4.p':'A $300 million Form F-3 shelf registration, effective April 2026, supports the capital needs of the power station and manufacturing strategies as they scale.',
  'pipe.title':'Pipeline in progress',
  'pipe.p':'In August 2026 Nanjing Cesun Power signed two framework agreements: one for a specific portfolio of operating plants, the other establishing a systematic sourcing engine. Both are framework agreements; any transaction remains subject to due diligence and definitive agreements.',
  'pipe.r1':'Proposed acquisition of six project companies in Ningbo operating a 9.9&nbsp;MW distributed rooftop solar portfolio from Zhejiang Yuntan Technology (framework agreement, August 12, 2026).',
  'pipe.r2':'Sourcing framework agreement with 40%-owned Nanjing Chenxi Construction Technology to identify and screen roughly 200&nbsp;MW of C&I and residential distributed solar targets; PN retains sole investment authority (August 19, 2026).',
  'pipe.r3':'Five-year owned operating capacity target under the Pegasus Strategy (management target; current operating capacity ~15&nbsp;MW).',
  'ab.ml.eyebrow':'Milestones','ab.ml.title':'Fifteen years of steady steps','ab.ml.lede':'From the founding of PNTECH in 2011 to the Nasdaq listing in 2025, and in 2026 the Cesun Power acquisition, the rename and the start of a U.S. localization strategy.',
  'ml1':'PNTECH founded, focused on solar cables and connectors','ml2':'Cesun Power settles in the Nanjing Pukou Economic Development Zone as a key municipal investment project',
  'tl1':'Listed on Nasdaq (NASDAQ: PN)','tl2':'Singapore subsidiary PN Sunshine Pte. Ltd. established','tl3':'$300M Form F-3 shelf registration declared effective','tl4':'100% acquisition of Nanjing Cesun Power completed; transition to IPP','tl5':'Company renamed PN Smart Energy Limited','tl6':'Delaware and Texas subsidiaries incorporated, New York IR office opened; 9.9&nbsp;MW and 200&nbsp;MW framework agreements signed',
  'ab.hn.eyebrow':'Recognition & partnerships','ab.hn.title':'Industry associations and university partnerships',
  'ab.hn.1':'Nanjing Cesun Power is a council member of the Jiangsu PV Industry Association (4th council, 2023–2028)',
  'ab.hn.2':'Industry–academia base with the College of Engineering, Nanjing Agricultural University: electric-vessel power systems and smart-energy AI',
  'ab.hn.3':'Partnership with the College of Electronic and Information Engineering, Nanjing University of Aeronautics and Astronautics: power electronics and intelligent control',
  'ab.hn.4':'National high-tech enterprise; 8 municipal science and technology awards; 58 patents and 15 software copyrights',
  'ab.hn.5':'Founder Weiqi Huang selected for Nanjing’s Zijinshan Talent Program (2024) and the Jiangsu “Shuangchuang” Talent Program (2025)',
  'ab.hn.c1':'Council member, Jiangsu PV Industry Association','ab.hn.c2':'Industry–academia base with Nanjing Agricultural University',
  'ct.eyebrow':'Contact us','ct.title':'Ningbo · Nanjing · Singapore · New York',
  'ct.lede':'Whether you own a factory rooftop, are looking for PV components and system solutions, or follow PN as an investor — we would like to hear from you.',
  'of1.t':'Group headquarters','of1.p':'Ningbo, Zhejiang, China',
  'of2.t':'Plant operations','of2.n':'Nanjing Cesun Power Co., Ltd.','of2.p':'Room 501, Building A, Wisdom Valley, 69 Shuangfeng Road, Qiaolin Street, Pukou District, Nanjing, Jiangsu',
  'of3.t':'Overseas entities','of4.t':'Investor relations','of4.p':'New York investor relations office',
  'ny.eyebrow':'New York investor relations office','ny.title':'PN Smart Energy · New York','ny.p':'Opened in August 2026 in Midtown Manhattan next to Penn Station, the office gives North American investors and partners a direct channel during U.S. business hours and anchors PN’s U.S. localization strategy.',
  'cta.t':'Your rooftop could be a power plant, too.','cta.p':'C&I rooftop EMC partnership: zero investment for the owner, a free roof renovation and 25 years of stable operation, with green power consumed on site and lower electricity bills.','cta.b':'Discuss a rooftop project',

  /* Business */
  'bz.eyebrow':'Business','bz.title':'Power station investment & operation,<br>EPC engineering and energy management contracts',
  'bz.lede':'With Nanjing Cesun Power as its platform, PN combines new-energy power investment, plant engineering and full life-cycle operation, giving C&I owners green-power solutions with zero investment, lower costs and lower emissions.',
  'bz.ov.eyebrow':'Business lines','bz.ov.title':'From investment and development to operation — the full plant life cycle',
  'bz.ov.lede':'Power station investment and operation is PN’s core business. EPC engineering and smart O&M capabilities secure asset quality, while the EMC model lets owners use green power with no upfront investment.',
  'biz1.tag':'Core business','biz1.title':'Power station investment & operation',
  'biz1.p':'Under the EMC (energy management contract) model PN fully finances and operates C&I rooftop solar plants across design, construction, grid connection and smart O&M. Power settles monthly, with no inventory and no customer-acquisition cost; once connected, incremental generation cost is close to zero, producing long-term, stable electricity-sales cash flow.',
  'biz1.s1':'owned plants, all grid-connected','biz1.s2':'enterprises served to date','bz.b1.s2':'grid-connected capacity',
  'bz.b2.tag':'Engineering','bz.b2.title':'EPC contracting & smart O&M',
  'bz.b2.p':'Nanjing Cesun Power Development delivers plants end-to-end — design, procurement, construction and grid connection — with in-house design and construction teams, an AI design platform that produces proposals in minutes, and a smart PV operations platform providing 7×24 monitoring and 48-hour response for owned plants and external owners alike.',
  'cs4.k':'cumulative plant design capacity','cs5.k':'plant capacity built with PN participation',
  'bz.b3.tag':'Partnership model','bz.b3.title':'Energy management contracts (EMC)',
  'bz.b3.p':'For enterprises with idle rooftops or land: PN fully funds construction and operates the plant for 25 years, while the owner uses clean power first at an agreed discounted tariff with no upfront investment — and gains green-power credentials that support ESG targets and export carbon-footprint compliance.',
  'bz.b3.s2':'years of full life-cycle operation',
  'pj.eyebrow':'Our plants','pj.title':'Ten rooftop plants,<br>14,749&nbsp;kWp',
  'pj.lede':'As of August 2026, PN owns and operates ten C&I rooftop solar plants across Zhejiang, Jiangsu and Anhui, all grid-connected. They came online between December 2024 and December 2025 — nine at low voltage and one at 10&nbsp;kV.',
  'pj.ledger.note':'segments sized by capacity — click to open a plant',
  'ov1.k':'Clusters','ov1.v':'Hangzhou 5 · Cixi (Ningbo) 2 · Suzhou 1 · Zhenjiang 1 · Ma’anshan 1','ov2.k':'Grid connection','ov2.v':'9 plants at 400 V low voltage · 1 plant at 10&nbsp;kV (with AGC/AVC)','ov3.k':'Roof systems','ov3.v':'Integrated BIPV on steel roofing, elevated BIPV on concrete roofs, flush-mounted on steel roofing','ov4.k':'Ownership','ov4.v':'9 developed and owned in-house + 1 acquired (Suzhou Gelaihao Textile, September 2025)',
  'prov.zj':'Zhejiang','prov.js':'Jiangsu','prov.ah':'Anhui','filter.all':'All',
  'rec1.k':'Largest single plant','rec1.n':'Hangzhou Hongda Textile','rec2.k':'Highest full-load hours','rec2.n':'Zhenjiang Donghang Pipe','rec3.k':'Highest self-consumption','rec3.n':'Suzhou Gelaihao Textile · the only 10&nbsp;kV plant','rec4.k':'Earliest in operation','rec4.n':'Hangzhou Dantong Machinery · 87.1% self-consumption',
  'bz.ep.eyebrow':'EPC & O&M','bz.ep.title':'Design, procurement, construction, grid connection and O&M — delivered as one',
  'bz.ep.lede':'Nanjing Cesun Power Development is the group’s EPC and O&M entity: 15 project companies cover the high-load regions of Jiangsu, Zhejiang, Shanghai and Anhui, plant business spans 23 provinces and more than 100 enterprises have been served, with a fully in-house AI platform running through design and operations.',
  'cs1.u':'','cs1.k':'project companies covering Jiangsu, Zhejiang, Shanghai and Anhui','cs2.u':'provinces','cs2.k':'nationwide plant business coverage','cs3.u':'','cs3.k':'enterprises served to date',
  'ep1.t':'Design','ep1.p':'The AI design platform assesses needs conversationally and generates 50 kW–5&nbsp;MW plant proposals in minutes, with site-shading accuracy improved by more than 95%',
  'ep2.t':'Procurement','ep2.p':'PNTECH’s own cables and connectors plus Deye, Solis, GoodWe and Sungrow equipment, supplied at low cost through group channels',
  'ep3.t':'Construction & grid connection','ep3.p':'In-house design and construction teams; three roof systems — integrated BIPV, elevated BIPV and flush-mounted — with low-voltage and 10&nbsp;kV grid-connection experience',
  'ep4.t':'Smart O&M','ep4.p':'Smart meters, data collectors and a cloud platform form one metering network: 7×24 real-time monitoring, 48-hour response and 80% of faults fixed remotely',
  'ai1.t':'AI design platform','ai1.s':'Zero cost · 2 minutes · every project','ai1.1':'Conversational needs assessment generates a customised plant proposal in one step','ai1.2':'Full coverage: 50 kW–5&nbsp;MW plant design plus construction and O&M outputs','ai1.3':'Ecosystem routing: matches EPC and equipment partners for fast delivery',
  'ai1.m1':'better site-shading accuracy','ai1.m2':'lower pre-project cost','ai1.m3':'higher lifecycle energy revenue','ai1.m4':'faster AI-driven design',
  'ai2.t':'Smart PV operations platform','ai2.s':'Real-time monitoring · smart dispatch · remote O&M','ai2.1':'Plant-wide IoT sensors and UV monitoring show generation and equipment status at a glance','ai2.2':'Nationwide O&M teams online in real time — remote diagnosis plus local response','ai2.3':'AI analysis of fault history predicts equipment failure before it happens',
  'ai2.m1':'continuous monitoring','ai2.m2':'rapid response','ai2.m3':'of faults fixed remotely','ai2.m4':'higher management efficiency',
  'bz.em.eyebrow':'EMC model','emc.title':'“Full investment + full life-cycle operation”<br>the EMC model','emc.p':'For enterprises with idle rooftops or land, PN fully funds and builds the plant and operates it for 25 years; the owner uses clean power first at an agreed discounted tariff with no upfront investment.',
  'st1.t':'Design','st1.p':'AI design platform delivers a plan in minutes','st2.t':'Full investment','st2.p':'PN funds construction; zero cost to the owner','st3.t':'Construction','st3.p':'In-house professional design and construction teams','st4.t':'Smart O&M','st4.p':'7×24 monitoring, 48-hour response',
  'bz.em.cap':'Construction at the Cixi Qilu Bakelite rooftop plant',
  'bf1.t':'Zero capital outlay','bf1.p':'Puts idle rooftop or land to use without any initial investment or loan burden.','bf2.t':'Lower electricity bills','bf2.p':'Priority use of clean power at an agreed discounted tariff cuts production and operating costs.','bf3.t':'Green-power credentials','bf3.p':'Green electricity rights support ESG targets and export carbon-footprint compliance.','bf4.t':'Free roof renovation','bf4.p':'Integrated BIPV on steel roofing replaces the roof sheets during construction, giving the plant a stable 25-year roof base.',
  'bz.em.cta':'C&I owners, industrial parks and EPC partners are welcome to contact Nanjing Cesun Power.',

  /* Products */
  'pd.eyebrow':'Products & trade','pd.title':'PNTECH manufacturing<br>and global new-energy product trade',
  'pd.lede':'Own solar cables, connectors and combiner kits, plus integrated tier-one storage and inverters — one-stop products and solutions from PV components to PV-plus-storage systems for customers worldwide.',
  'pd.tr.eyebrow':'Trade','pd.tr.title':'Tier-one channel resources, local service capability',
  'pd.tr.p1':'PN’s trade business builds on PNTECH’s own cables and connectors and deep partnerships with leading PV brands — Deye, Solis, GoodWe and Sungrow — linking upstream suppliers to global customers with a portfolio spanning residential PV, C&I storage, PV-plus-storage and PV-storage-charging systems.',
  'pd.tr.p2':'A “local warehousing + regional service centre” footprint covers 60+ countries and regions across Europe, Southeast Asia, South Asia, Africa and North America, pairing in-stock supply with local technical support — and supplies the group’s own plants with low-cost, high-standard equipment.',
  'pd.tr.s1':'countries and regions served by PNTECH products','pd.tr.s2':'countries and regions covered by local warehousing and service','pd.tr.s3':'partners worldwide','pd.tr.s4':'PNTECH annual supply capacity',
  'pd.tr.cap':'Overseas local warehousing and in-stock supply',
  'pa.r1k':'PV modules','pa.r1v':'LONGi, Trina Solar, Jinko, JA Solar, Risen','pa.r2k':'Inverters / storage','pa.r2v':'Deye <small>first-level agent</small>, Solis <small>gold agent</small>, GoodWe <small>first-level agent</small>, Sungrow','pa.r3k':'Charging & storage','pa.r3v':'Xinguang · Deye MC series · GoodWe HCA series','pa.r4k':'Cables & connectors','pa.r4v':'Made by PNTECH',
  'pr.eyebrow':'Product showcase','pr.title':'From a single solar cable<br>to a PV-storage-charging system',
  'pd.ct.lede':'PNTECH’s solar cables, connectors and combiner kits are the veins and joints of every plant. On that base, PN integrates tier-one brand equipment into residential PV and C&I storage, PV-plus-storage and PV-storage-charging solutions.',
  'pd.note':'Inverters, batteries and PV modules are partner-brand products integrated and sold by PN, not manufactured by the company; specifications follow each brand’s latest technical documentation.',

  /* ESG */
  'es.eyebrow':'ESG · Green value','es.title':'Sustainability is<br>at the core of who we are',
  'es.lede':'As a global independent power producer, we develop clean energy assets, manufacture critical energy infrastructure, and operate with integrity — across our projects, our supply chain, and the communities we serve.',
  'esg.eyebrow':'Green value · ESG','esg.title':'Every kilowatt-hour, accounted for',
  'esg.lede':'Environmental benefits of the ten plants are calculated on grid-exported electricity, consistent with the company’s ESG reporting and green-certificate issuance (1 certificate = 1,000&nbsp;kWh). In July 2026 the plants settled 1.87&nbsp;GWh of actual generation, avoiding 582 t of CO₂.',
  'esg.cap':'Cixi Lianhua Wool Textile plant — integrated BIPV on steel roofing',
  'u.ton':'t','u.tree':'trees','u.cert':'certificates',
  'esg.s1':'CO₂ avoided, 2026','esg.s2':'Standard coal saved, 2026','esg.s3':'Equivalent trees planted, 2026','esg.s4':'Green certificates issuable, 2026',
  'esg.note':'Conversion factors reference the national grid average emission factor and GHG Protocol Scope 2 methodology. Operating data is presented for information and does not constitute SEC-mandated disclosure.',
  'esg.e':'E · Environment','esg.e1':'~15&nbsp;MW of owned distributed solar capacity; all ten plants grid-connected','esg.e2':'About 15.34&nbsp;GWh generated in 2026, avoiding ~4,983 t of CO₂','esg.e3':'Five-year target of 1&nbsp;GW (Pegasus Strategy target, not current capacity)',
  'esg.s':'S · Social','esg.s1l':'PNTECH products serve customers in 140+ countries and regions','esg.s2l':'47 international certifications (TÜV, UL, EN, IEC) across 9.3&nbsp;GW of annual supply capacity','es.s3l':'Industry–academia partnerships with Nanjing Agricultural University and Nanjing University of Aeronautics and Astronautics; 58 patents',
  'esg.g':'G · Governance','esg.g1':'ESG framework adopted by Board Resolution No. 17 (July 7, 2026); the Nominating and Corporate Governance Committee holds ESG oversight','esg.g2':'CEO-chaired ESG Working Group reports semiannually; reporting frameworks reference GRI, SASB/ISSB and TCFD','esg.g3':'Three independent directors; auditor Enrome LLP (Singapore, PCAOB-registered)',
  'es.pl.eyebrow':'Green-power assets','es.pl.title':'Ten plants, each a source of avoided emissions',
  'es.more.note':'More ESG information is available on the investor relations website.','es.more.link':'ESG · ir.pnsmartenergy.com',

  /* Investors */
  'ir.eyebrow':'Investor relations',
  'ir.h.lede':'Announcements, financial reports, SEC filings and stock information are disclosed centrally on the investor relations website, ir.pnsmartenergy.com. This page provides a company overview, the management team and a summary of recent developments.',
  'ir.pf.eyebrow':'Company profile','ir.pf.title':'A global independent power provider focused on clean power stations, critical energy materials and intelligent energy infrastructure',
  'ir.pf.p1':'PN Smart Energy Limited (Nasdaq: PN) is a global independent power provider (IPP) focused on the development of clean power stations, critical energy materials, and intelligent energy infrastructure. Through its PNTECH brand, the Company also manufactures photovoltaic cables and connectors, serving customers across 140 countries and regions.',
  'ir.pf.p2':'Formerly known as Skycorp Solar Group Limited, the Company officially changed its name to PN Smart Energy Limited on June 12, 2026, following a shareholder resolution passed on June 10, 2026. Our long-term vision is to build an integrated energy value chain, from critical energy materials such as copper, to power transmission products, to clean energy generation assets.',
  'ir.i1':'Listing date','ir.f2':'SEC file number','ir.i2':'Auditor','ir.i3':'Share structure','ir.i3v':'Class A (1 vote/share) and Class B (35 votes/share) ordinary shares',
  'ir.g1':'About the company','ir.g2':'News & ESG','ir.g3':'Financials & stock',
  'ir.k1':'Company profile','ir.k2':'Management team','ir.k3':'Board of directors','ir.k4':'Corporate governance','ir.k5':'Press releases','ir.k6':'Event calendar','ir.k7':'ESG','ir.k8':'Investor Monthly','ir.k9':'Financial reports','ir.k10':'SEC filings','ir.k11':'Stock information','ir.k12':'Investor FAQs',
  'tm.eyebrow':'Leadership','tm.title':'Operators with deep roots in renewable energy',
  'tm.lede':'The management team combines 15+ years of renewable-energy experience, manufacturing engineering and cross-border finance and capital-markets expertise; three independent directors cover financial institutions, capital markets and corporate governance.',
  'tm1.n':'Weiqi Huang','tm1.r':'Founder, Chairman & CEO · Founder of Cesun Power','tm1.p':'Leads overall operations, strategy and partnership development; 15+ years in renewable energy; dual master’s degrees from Lund University, Sweden. Expert committee member of the Jiangsu PV Industry Association; selected for Nanjing’s Zijinshan Talent Program (2024) and the Jiangsu “Shuangchuang” Talent Program (2025).',
  'tm2.r':'Chief Financial Officer','tm2.p':'In charge of daily finance, year-end accounting, internal control and audit; a versatile finance practitioner with solid experience in accounting, tax compliance and financial reporting.',
  'tm3.r':'Chief Technology Officer','tm3.p':'Oversees the PV business unit, product development, sales and customer management; veteran electrical engineer, EMBA from Fudan University, with deep manufacturing expertise.',
  'tm4.r':'Director & Chief Information Officer','tm4.p':'Aligns IT infrastructure with corporate business objectives; rich European business experience; bachelor’s degree from Anhalt University of Applied Sciences, Germany.',
  'bd.eyebrow':'Independent directors','bd.r':'Independent Director',
  'bd1.p':'10+ years in corporate strategy, risk management and governance; former Risk Director at Ningbo Deye Technology and former Manager at China Export & Credit Insurance Corp. (Sinosure). B.A. Economics, York University; MBA, University of Canberra.',
  'bd2.p':'9+ years of capital-markets experience; Vice President of Nasdaq-listed Zhejiang Nano Technology and supported multiple IPO executions. B.S. Financial Management, Zhejiang Gongshang University.',
  'bd3.p':'25+ years of cross-market financial experience across Greater China; former Head of Corporate Banking at Banco Nacional Ultramarino (Macau) with a deep treasury and investment-management record. B.S. Finance, University of Oregon.',
  'nw.eyebrow':'News','nw.title':'Announcements & progress','nw.lede':'Key corporate developments in 2026, each disclosed through a Form 6-K or press release; full documents are available on the investor relations website and SEC EDGAR.','nw.note':'Source: company press releases and SEC filings; summaries only — the formal disclosures govern.','nw.more':'All announcements',
  'ir.l3':'IR contact','ir.c1':'Investor Relations','ir.c3':'Connie Kang, Partner · ckang@wfsir.com','ir.c4':'New York investor relations office','ir.c4v':'Direct access for North American investors during U.S. business hours','ir.c4n':'Opened August 2026 · Midtown Manhattan',
  'ir.l1':'Disclosures & filings','ir.link1':'Investor relations website','ir.link2':'SEC EDGAR filings · 001-42544','ir.link3':'Investor Monthly',
  'ir.disc2':'Forward-looking statements: this website contains forward-looking statements within the meaning of Section 27A of the Securities Act of 1933 and Section 21E of the Securities Exchange Act of 1934, which involve known and unknown risks and uncertainties that may cause actual results to differ materially. The 1&nbsp;GW Pegasus Strategy target and the framework agreements are statements of current strategic direction as authorized by the Board and do not constitute a commitment to complete execution by any specific date or on any specific terms. This website is not investment advice or a solicitation to buy or sell securities; see the company’s SEC filings, including its annual report on Form 20-F.'
};
const ZH = {};
document.querySelectorAll('[data-i18n]').forEach(el=>{ const k=el.dataset.i18n; if(!(k in ZH)) ZH[k]=el.innerHTML; });
const T = {zh:ZH,en:EN};

const TITLES = {
  index:{zh:'PN Smart Energy | 全球独立发电商（NASDAQ: PN）',en:'PN Smart Energy | Global Independent Power Provider (NASDAQ: PN)'},
  about:{zh:'关于我们 | PN Smart Energy',en:'About | PN Smart Energy'},
  business:{zh:'业务 · 电站投资与 EPC | PN Smart Energy',en:'Business · Power Plants & EPC | PN Smart Energy'},
  product:{zh:'产品与贸易 | PN Smart Energy',en:'Products & Trade | PN Smart Energy'},
  esg:{zh:'ESG | PN Smart Energy',en:'ESG | PN Smart Energy'},
  investors:{zh:'投资者关系 | PN Smart Energy',en:'Investor Relations | PN Smart Energy'}
};
const DESCS = {
  zh:'PN Smart Energy（NASDAQ: PN）：全球独立发电商，专注清洁电站开发、关键能源材料与智能能源基础设施；自持运营 10&nbsp;座工商业屋顶光伏电站，PNTECH 光伏线缆与连接器服务 140&nbsp;个国家和地区。',
  en:'PN Smart Energy (NASDAQ: PN): a global independent power provider focused on clean power stations, critical energy materials and intelligent energy infrastructure; ten owned C&I rooftop solar plants and PNTECH PV cables and connectors serving 140 countries and regions.'
};

/* ---------------- Routing (multi-file site or single-file SPA) ---------------- */
const MAINS = [...document.querySelectorAll('main[data-page]')];
const SPA = MAINS.length > 1;
const LINK = (page, anchor) => SPA ? ('#/'+page+(anchor?'/'+anchor:'')) : (page+'.html'+(anchor?'#'+anchor:''));
let page = SPA ? 'index' : (document.body.dataset.page || (MAINS[0] && MAINS[0].dataset.page) || 'index');

/* ---------------- Project data ---------------- */
const L = {
  zh:{lv:'低压并网（400V）',hv:'高压并网（10kV）',roof:'屋顶形式',grid:'接入方式',eq:'核心设备',cod:'并网时间',cap:'装机容量',site:'地点',data:'2026&nbsp;年度关键数据',gen:'年发电量（万 kWh）',hrs:'等效利用小时（h）',self:'就地消纳率',rev:'电费收入（万元）',co2:'CO₂ 减排（吨）',spec:'电站参数',gallery:'现场',highlight:'项目亮点',of:'共 10&nbsp;座 · 第',prev:'上一座',next:'下一座',close:'关闭',
      r1:'彩钢瓦随坡铺设',r2:'水泥屋面架高 BIPV',r3:'彩钢瓦 BIPV + 水泥屋面架高 BIPV',r4:'彩钢瓦 BIPV',r5:'彩钢瓦 BIPV（为业主更换宝钢瓦）+ 水泥屋面架高 BIPV',r6:'彩钢瓦 BIPV（为业主更换宝钢瓦）',
      c_aerial:'航拍全景',c_site:'施工现场',c_in:'厂房内部',c_roof:'屋顶俯拍',c_team:'团队工作照',c_build:'施工过程',kwp:'kWp'},
  en:{lv:'Low voltage (400 V)',hv:'High voltage (10&nbsp;kV)',roof:'Roof type',grid:'Grid connection',eq:'Key equipment',cod:'Grid connection date',cap:'Installed capacity',site:'Location',data:'Key 2026 figures',gen:'Annual generation (×10⁴ kWh)',hrs:'Full-load hours (h)',self:'Self-consumption',rev:'Electricity revenue (×10⁴ RMB)',co2:'CO₂ avoided (t)',spec:'Plant specifications',gallery:'On site',highlight:'Highlights',of:'Plant',prev:'Previous plant',next:'Next plant',close:'Close',
      r1:'Flush-mounted on steel roofing',r2:'Elevated BIPV on concrete roof',r3:'BIPV on steel roofing + elevated BIPV on concrete roof',r4:'Integrated BIPV on steel roofing',r5:'BIPV on steel roofing (roof sheets replaced for the owner) + elevated BIPV on concrete roof',r6:'Integrated BIPV on steel roofing (roof sheets replaced for the owner)',
      c_aerial:'Aerial view',c_site:'Construction',c_in:'Inside the plant',c_roof:'Rooftop',c_team:'Project team',c_build:'Construction',kwp:'kWp'}
};

const P = [
 {id:'hongda',lat:30.16,lon:120.26,city:{zh:'杭州萧山',en:'Xiaoshan, Hangzhou'},prov:'zj',cap:3799.98,cod:'2025-12-29',grid:'lv',roof:'r3',img:'assets/p10.webp',gallery:[['assets/p10_b.webp','c_roof'],['assets/p10_c.webp','c_team'],['assets/p10.webp','c_aerial']],
  gen:364.75,hrs:973,self:28.4,rev:144.39,co2:2144.59,
  zh:{name:'杭州鸿达纺织',site:'浙江省杭州市萧山区（鸿达纺织院内厂房及宿舍楼）',short:'杭州萧山',eq:'晶科能源 620Wp 单晶组件 6,129&nbsp;块 + 阳光电源 100kW/110kW 逆变器共 31&nbsp;台',badge:'装机最大 · 年发电最高',
      hl:'公司当年最后一个投运、也是容量最大的项目：厂房彩钢瓦 BIPV 与宿舍楼水泥屋面架高 BIPV 双工艺组合，覆盖工业厂房与生活配套的多元屋顶场景；屋顶租金采用递增式设计（前两年免租，第六年起 10 万元/年），体现灵活的商业合作模式。年发电量 364.75 万 kWh、CO₂ 减排 2,144.59&nbsp;吨，均为 10 站最高。'},
  en:{name:'Hangzhou Hongda Textile',site:'Xiaoshan District, Hangzhou, Zhejiang (factory buildings and dormitory)',short:'Xiaoshan, Hangzhou',eq:'6,129 JinkoSolar 620 Wp mono modules + 31 Sungrow 100/110 kW inverters',badge:'Largest plant · highest generation',
      hl:'The last plant commissioned in 2025 and the largest in the portfolio. Two construction methods on one site — integrated BIPV on the factory’s steel roofing and elevated BIPV on the dormitory’s concrete roof — cover both industrial and residential rooftop scenarios. A stepped rent structure (rent-free for two years, RMB 100,000 a year from year six) shows a flexible partnership model. Annual generation of 3.65&nbsp;GWh and 2,144.59 t of CO₂ avoided are both the highest of the ten plants.'}},
 {id:'gelaihao',lat:30.90,lon:120.66,city:{zh:'苏州吴江',en:'Wujiang, Suzhou'},prov:'js',cap:2599.61,cod:'2025-03',grid:'hv',roof:'r3',img:'assets/p08.webp',gallery:[['assets/p08.webp','c_aerial']],
  gen:284.55,hrs:1091,self:94.7,rev:147.42,co2:85.01,co2note:{zh:'余电上网口径；全发电量口径 1,652.90&nbsp;吨',en:'grid-export basis; 1,652.90 t on total-generation basis'},
  zh:{name:'苏州格来好纺织',site:'江苏省苏州市吴江区盛泽镇',short:'苏州吴江',eq:'通威 615Wp 单晶组件 4,227&nbsp;块 + 锦浪 230kW/320kW 逆变器共 9&nbsp;台',badge:'唯一 10kV 高压并网 · 就地消纳率最高',
      hl:'10&nbsp;座电站中唯一的高压（10kV）并网项目，配置升压并网系统与 AGC/AVC 装置，具备接入电网调度的能力。业主喷水织机 24 小时连续运转、用电负荷大且昼夜平稳，就地消纳率高达 94.7%，单站电费收入亦为最高。本项目由公司于 2025&nbsp;年 9&nbsp;月完成股权收购，是公司存量资产收购能力的体现。'},
  en:{name:'Suzhou Gelaihao Textile',site:'Shengze, Wujiang District, Suzhou, Jiangsu',short:'Wujiang, Suzhou',eq:'4,227 Tongwei 615 Wp mono modules + 9 Solis 230/320 kW inverters',badge:'Only 10&nbsp;kV plant · highest self-consumption',
      hl:'The only high-voltage (10&nbsp;kV) plant in the portfolio, equipped with a step-up grid-connection system and AGC/AVC devices for grid-dispatch capability. The owner’s water-jet looms run 24 hours a day with a large, steady load, driving self-consumption to 94.7% and the highest electricity revenue of any single plant. Acquired through an equity purchase in September 2025, it demonstrates the company’s ability to buy operating assets.'}},
 {id:'xwz3',lat:30.25,lon:119.70,city:{zh:'杭州临安',en:'Lin’an, Hangzhou'},prov:'zj',cap:2365.00,cod:'2025-12-24',grid:'lv',roof:'r5',img:'assets/p03.webp',gallery:[['assets/p03.webp','c_aerial']],
  gen:250.88,hrs:1056,self:48.3,rev:96.32,co2:1083.49,
  zh:{name:'浙江临安小王子三厂',site:'浙江省杭州市临安区（小王子食品休闲三厂厂区）',short:'杭州临安',eq:'天合光能 625Wp 单晶组件 3,784&nbsp;块 + 华为 50kW/100kW/110kW 逆变器共 20&nbsp;台',
      hl:'一站两种工艺——彩钢瓦车间采用换瓦式 BIPV（施工同期为业主免费更换宝钢瓦），水泥辅房采用架高 BIPV；20&nbsp;台逆变器按三种功率段配置，精准匹配不同屋面区域，避免容量过大拉低 MPPT 效率。与二厂同属小王子临安园区，两站合计装机 2,993.75&nbsp;kWp。'},
  en:{name:'Lin’an Little Prince Plant 3',site:'Lin’an District, Hangzhou, Zhejiang (Little Prince Foods, Plant 3)',short:'Lin’an, Hangzhou',eq:'3,784 Trina Solar 625 Wp mono modules + 20 Huawei 50/100/110 kW inverters',
      hl:'Two construction methods on one site: roof-replacement BIPV on the steel-roofed workshops (Baosteel sheets installed for the owner at no cost during construction) and elevated BIPV on the concrete auxiliary buildings. Twenty inverters in three power classes are matched precisely to each roof area, avoiding oversizing that would drag down MPPT efficiency. Together with Plant 2 it forms a 2,993.75&nbsp;kWp campus cluster.'}},
 {id:'junke',lat:31.72,lon:118.10,city:{zh:'马鞍山含山',en:'Hanshan, Ma’anshan'},prov:'ah',cap:2351.04,cod:'2025-07-28',grid:'lv',roof:'r1',img:'assets/p01.webp',gallery:[['assets/p01.webp','c_aerial'],['assets/p01_b.webp','c_site']],
  gen:234.83,hrs:981,self:75.5,rev:75.06,co2:465.52,
  zh:{name:'安徽君科机械',site:'安徽省马鞍山市含山县经济开发区（东区）',short:'马鞍山含山',eq:'通威 620Wp 单晶组件 3,792&nbsp;块 + 阳光电源 110kW 组串式逆变器 18&nbsp;台',badge:'安徽区域最大单体项目',
      hl:'公司在安徽区域装机容量最大的单体屋顶光伏项目。彩钢瓦随坡铺设、屋面零穿孔，不破坏防水层；18&nbsp;台组串式逆变器分区管理，业主用电负荷与光伏出力高度匹配，自发自用比例达 75.5%。'},
  en:{name:'Anhui Junke Machinery',site:'Hanshan Economic Development Zone (East), Ma’anshan, Anhui',short:'Hanshan, Ma’anshan',eq:'3,792 Tongwei 620 Wp mono modules + 18 Sungrow 110 kW string inverters',badge:'Largest plant in Anhui',
      hl:'The company’s largest single rooftop plant in Anhui. Modules are flush-mounted along the pitch of the steel roofing with zero roof penetrations, leaving the waterproofing intact. Eighteen string inverters manage the roof in zones, closely matching the owner’s load to solar output for a 75.5% self-consumption rate.'}},
 {id:'xiaotianshi',lat:30.21,lon:119.76,city:{zh:'杭州临安',en:'Lin’an, Hangzhou'},prov:'zj',cap:1799.24,cod:'2025-10-27',grid:'lv',roof:'r6',img:'assets/p04.webp',gallery:[['assets/p04.webp','c_aerial']],
  gen:203.21,hrs:1123,self:69.8,rev:78.23,co2:513.19,
  zh:{name:'浙江小天使食品',site:'浙江省杭州市临安区（小天使食品厂区）',short:'杭州临安',eq:'天合光能 620Wp 单晶组件 2,902&nbsp;块 + 华为 30kW/110kW 逆变器共 16&nbsp;台',
      hl:'全站 BIPV 一体化：业主获得一次免费屋面翻新，电站获得 25&nbsp;年稳定屋面基础。以 2&nbsp;台 30kW 小功率机型收边角零散组串，屋面利用率高；等效利用小时 1,123h，位居公司前列。'},
  en:{name:'Zhejiang Little Angel Foods',site:'Lin’an District, Hangzhou, Zhejiang (Little Angel Foods site)',short:'Lin’an, Hangzhou',eq:'2,902 Trina Solar 620 Wp mono modules + 16 Huawei 30/110 kW inverters',
      hl:'Fully integrated BIPV across the site: the owner receives a free roof renovation and the plant gains a stable 25-year roof base. Two small 30 kW inverters pick up the scattered edge strings for high roof utilization; 1,123 full-load hours rank among the company’s best.'}},
 {id:'xwz2',lat:30.29,lon:119.74,city:{zh:'杭州临安',en:'Lin’an, Hangzhou'},prov:'zj',cap:628.75,cod:'2025-12-24',grid:'lv',roof:'r2',img:'assets/p02.webp',gallery:[['assets/p02.webp','c_aerial'],['assets/p02_b.webp','c_in']],
  gen:69.43,hrs:1106,self:52.4,rev:26.85,co2:275.59,
  zh:{name:'浙江临安小王子二厂',site:'浙江省杭州市临安区（小王子食品休闲二厂厂区）',short:'杭州临安',eq:'天合光能 625Wp 单晶组件 1,006&nbsp;块 + 华为 110kW 组串式逆变器 5&nbsp;台',
      hl:'与休闲三厂同属小王子临安园区，两站合计装机 2,993.75&nbsp;kWp，形成园区级屋顶光伏群；水泥屋面架高 BIPV 支架形成通风散热层，兼顾发电与屋面保护。'},
  en:{name:'Lin’an Little Prince Plant 2',site:'Lin’an District, Hangzhou, Zhejiang (Little Prince Foods, Plant 2)',short:'Lin’an, Hangzhou',eq:'1,006 Trina Solar 625 Wp mono modules + 5 Huawei 110 kW string inverters',
      hl:'Part of the Little Prince campus in Lin’an together with Plant 3 — 2,993.75&nbsp;kWp combined, a campus-scale rooftop cluster. Elevated BIPV racking on the concrete roof creates a ventilation layer that serves both generation and roof protection.'}},
 {id:'dantong',lat:29.95,lon:119.87,city:{zh:'杭州富阳',en:'Fuyang, Hangzhou'},prov:'zj',cap:399.75,cod:'2024-12-12',grid:'lv',roof:'r1',img:'assets/p05.webp',gallery:[['assets/p05.webp','c_aerial']],
  gen:37.93,hrs:952,self:87.1,rev:16.30,co2:53.60,
  zh:{name:'杭州丹通机械',site:'浙江省杭州市富阳区场口镇开发区',short:'杭州富阳',eq:'通威 615Wp 单晶组件 650&nbsp;块 + 华为 110kW/50kW 逆变器共 4&nbsp;台',badge:'最早投运',
      hl:'公司现运维 10&nbsp;座电站中最早并网投运的项目（2024&nbsp;年 12&nbsp;月），已连续稳定运行。自发自用比例 87.1%，为 10 站中最高，几乎全部电量在厂区内就地消纳，单位容量收益质量高。'},
  en:{name:'Hangzhou Dantong Machinery',site:'Changkou Development Zone, Fuyang District, Hangzhou, Zhejiang',short:'Fuyang, Hangzhou',eq:'650 Tongwei 615 Wp mono modules + 4 Huawei 110/50 kW inverters',badge:'Earliest in operation',
      hl:'The earliest of the ten plants to be grid-connected (December 2024) and in continuous stable operation since. Its 87.1% self-consumption rate is the highest in the portfolio: nearly all output is consumed on site, giving high-quality revenue per unit of capacity.'}},
 {id:'donghang',lat:31.99,lon:119.58,city:{zh:'镇江丹阳',en:'Danyang, Zhenjiang'},prov:'js',cap:355.88,cod:'2025-05-16',grid:'lv',roof:'r4',img:'assets/p09.webp',gallery:[['assets/p09.webp','c_aerial'],['assets/p09_b.webp','c_in']],
  gen:40.86,hrs:1142,self:53.8,rev:17.79,co2:156.22,
  zh:{name:'镇江东航制管',site:'江苏省镇江市（丹阳）',short:'镇江丹阳',eq:'通威 620Wp 单晶组件 574&nbsp;块 + 华为 100kW/110kW 逆变器共 3&nbsp;台',badge:'等效利用小时最高',
      hl:'等效利用小时约 1,142h，为公司 10&nbsp;座电站中最高，单位装机发电效率领先；业主结算电价 0.50&nbsp;元/kWh，为低压项目中最高，自用部分收益质量突出。公司在江苏镇江区域布局的首个屋顶分布式光伏项目。'},
  en:{name:'Zhenjiang Donghang Pipe',site:'Danyang, Zhenjiang, Jiangsu',short:'Danyang, Zhenjiang',eq:'574 Tongwei 620 Wp mono modules + 3 Huawei 100/110 kW inverters',badge:'Highest full-load hours',
      hl:'About 1,142 full-load hours — the highest of the ten plants and the best generation per unit of capacity. The owner’s settlement tariff of RMB 0.50/kWh is the highest among the low-voltage plants, giving standout revenue quality on the self-consumed share. PN’s first rooftop plant in the Zhenjiang area.'}},
 {id:'qilu',lat:30.20,lon:121.24,city:{zh:'宁波慈溪',en:'Cixi, Ningbo'},prov:'zj',cap:249.86,cod:'2025-05-29',grid:'lv',roof:'r4',img:'assets/p06.webp',gallery:[['assets/p06.webp','c_aerial'],['assets/p06_b.webp','c_build']],
  gen:26.88,hrs:1080,self:41.0,rev:10.81,co2:132.80,
  zh:{name:'慈溪奇路胶木',site:'浙江省宁波市慈溪市',short:'宁波慈溪',eq:'通威 620Wp 单晶组件 403&nbsp;块 + 阳光电源 110kW 组串式逆变器 2&nbsp;台',
      hl:'与联华毛纺同园区相邻，组成慈溪双站集群，是公司在宁波区域的运维基点；两站共用一套运维体系，体现 PN 区域集群化运维能力。'},
  en:{name:'Cixi Qilu Bakelite',site:'Cixi, Ningbo, Zhejiang',short:'Cixi, Ningbo',eq:'403 Tongwei 620 Wp mono modules + 2 Sungrow 110 kW string inverters',
      hl:'Adjacent to Lianhua Wool Textile in the same industrial park, forming a two-plant cluster that anchors PN’s O&M in the Ningbo area. The two plants share one O&M system — a working example of regional cluster operations.'}},
 {id:'lianhua',lat:30.14,lon:121.30,city:{zh:'宁波慈溪',en:'Cixi, Ningbo'},prov:'zj',cap:200.26,cod:'2025-05-29',grid:'lv',roof:'r4',img:'assets/p07.webp',gallery:[['assets/p07.webp','c_aerial'],['assets/p07_b.webp','c_build']],
  gen:20.63,hrs:1041,self:58.1,rev:8.23,co2:72.76,
  zh:{name:'慈溪联华毛纺',site:'浙江省宁波市慈溪市',short:'宁波慈溪',eq:'通威 620Wp 单晶组件 323&nbsp;块 + 阳光电源 40kW 组串式逆变器 5&nbsp;台',
      hl:'采用 5&nbsp;台 40kW 小功率组串式逆变器分散布置，适配厂房屋面分块小、朝向不一的特点，多路 MPPT 减少组串失配损失；彩钢瓦 BIPV 一体化铺设，组件即屋面。'},
  en:{name:'Cixi Lianhua Wool Textile',site:'Cixi, Ningbo, Zhejiang',short:'Cixi, Ningbo',eq:'323 Tongwei 620 Wp mono modules + 5 Sungrow 40 kW string inverters',
      hl:'Five small 40 kW string inverters are distributed across the roof to suit its small, differently oriented sections; multiple MPPT inputs cut string-mismatch losses. Integrated BIPV on the steel roofing — the modules are the roof.'}}
];
const PROV_COLOR = {zj:'var(--zj)',js:'var(--js)',ah:'var(--ah)'};
const TOTAL = 14749.37;
const fmt = (n,d=2)=> n.toLocaleString('en-US',{minimumFractionDigits:d,maximumFractionDigits:d});
const fmtCap = n => fmt(n,2);
const fmtDateShort = (s,lang)=>{ const [y,m,d]=s.split('-'); if(lang==='zh') return d?`${y}.${m}.${d}`:`${y}.${m}`; const M=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']; return d?`${M[+m-1]} ${+d}, ${y}`:`${M[+m-1]} ${y}`; };
const fmtDate = (s,lang)=>{ const [y,m,d]=s.split('-'); if(lang==='zh') return d?`${y} 年 ${+m} 月 ${+d} 日`:`${y} 年 ${+m} 月`; const M=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']; return d?`${M[+m-1]} ${+d}, ${y}`:`${M[+m-1]} ${y}`; };

/* ---------------- State ---------------- */
let lang = 'zh';
try{ const s=localStorage.getItem('pn-lang'); if(s==='en'||s==='zh') lang=s; else { const nl=(navigator.language||'').toLowerCase(); if(nl && !nl.startsWith('zh')) lang='en'; } }catch(e){}
if(/[?&]lang=(en|zh)/.test(location.search)) lang=RegExp.$1;
let filter = 'all';
let openIndex = -1;

const $ = id => document.getElementById(id);
const site = $('site');
const dialog = $('pjDialog');
const content = $('pjContent');

/* ---------------- Render: capacity ledger ---------------- */
function renderBar(){
  const bar=$('bar'); if(!bar) return;
  bar.innerHTML = P.map((p,i)=>`<button type="button" class="${i===0?'l':(i>=6?'r':'')}" style="flex-grow:${p.cap};background:${PROV_COLOR[p.prov]}" data-i="${i}" aria-label="${p[lang].name} ${fmtCap(p.cap)} kWp"><span class="tip">${p[lang].name} · ${fmtCap(p.cap)} kWp</span></button>`).join('');
  bar.querySelectorAll('button').forEach(b=>{
    b.addEventListener('click',()=>openProject(+b.dataset.i));
    b.addEventListener('mouseenter',()=>{ const c=$('grid')&&$('grid').querySelector(`[data-i="${b.dataset.i}"]`); if(c) c.classList.add('hot'); });
    b.addEventListener('mouseleave',()=>{ document.querySelectorAll('#grid .hot').forEach(c=>c.classList.remove('hot')); });
  });
  updateBarDim();
}
function updateBarDim(){
  const bar=$('bar'); if(!bar) return;
  bar.querySelectorAll('button').forEach((b,i)=>b.classList.toggle('dim', filter!=='all' && P[i].prov!==filter));
}

/* ---------------- Render: grid ---------------- */
function renderGrid(){
  const grid=$('grid'); if(!grid) return;
  const items = P.map((p,i)=>({p,i})).filter(x=>filter==='all'||x.p.prov===filter);
  const rest = items.length-1;
  grid.innerHTML = items.map(({p,i},n)=>{
    const t=p[lang], wide = n===0 || (rest===1);
    return `<button type="button" class="card${wide?' wide':''}" data-i="${i}" aria-haspopup="dialog">
      <div class="ph"><img src="${p.img}" alt="" loading="lazy" decoding="async">${t.badge?`<span class="badge">${t.badge}</span>`:''}</div>
      <div class="body">
        <div class="loc"><i style="background:${PROV_COLOR[p.prov]}"></i>${t.short} · ${p.grid==='hv'?L[lang].hv:L[lang].lv}</div>
        <h3>${t.name}</h3>
        ${wide?`<p class="blurb">${t.hl}</p>`:''}
        <div class="meta"><div><div class="cap num">${fmtCap(p.cap)}<small>kWp</small></div><div class="date num">${L[lang].cod} · ${fmtDate(p.cod,lang)}</div></div><span class="arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></div>
      </div></button>`;
  }).join('');
  grid.querySelectorAll('.card').forEach(c=>c.addEventListener('click',()=>openProject(+c.dataset.i)));
}

/* ---------------- Render: home / ESG showcase ---------------- */
function renderShowcase(){
  const home=$('homePlants');
  if(home){
    const pick=['hongda','gelaihao','xwz3','junke','xiaotianshi'].map(id=>P.find(p=>p.id===id));
    home.innerHTML=pick.map(p=>`<a href="${LINK('business','plant-'+p.id)}" aria-label="${p[lang].name}"><img src="${p.img}" alt="" loading="lazy" decoding="async"><div class="cap"><div><b>${p[lang].name}</b><span>${p[lang].short}${p.grid==='hv'?' · 10&nbsp;kV':''}</span></div><span class="kw num">${fmtCap(p.cap)}<small>kWp</small></span></div></a>`).join('');
  }
  const esg=$('esgPlants');
  if(esg){
    const pick=[...P].sort((a,b)=>b.co2-a.co2).slice(0,4);
    esg.innerHTML=pick.map(p=>`<a href="${LINK('business','plant-'+p.id)}" aria-label="${p[lang].name}"><img src="${p.img}" alt="" loading="lazy" decoding="async"><div class="cap"><div><b>${p[lang].name}</b><span>${fmtCap(p.cap)} kWp · ${p[lang].short}</span></div><span class="kw num">${fmt(p.co2,0)}<small>${lang==='zh'?'吨 CO₂':'t CO₂'}</small></span></div></a>`).join('');
  }
}

/* ---------------- Render: dialog ---------------- */
function renderDialog(i){
  const p=P[i], t=p[lang], l=L[lang];
  const pct = (p.cap/TOTAL*100).toFixed(1);
  content.innerHTML = `
    <div class="pj-hero"><img src="${p.img}" alt=""><button type="button" class="pj-close" id="pjClose" aria-label="${l.close}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>
    <div class="pj-body">
      <div class="pj-head">
        <div><p class="eyebrow">${T[lang]['prov.'+p.prov]||{zj:'浙江',js:'江苏',ah:'安徽'}[p.prov]} · ${p.grid==='hv'?l.hv:l.lv}</p><h3 class="display" id="pjTitle">${t.name}</h3><p class="loc">${t.site}</p></div>
        <div class="pj-kpis"><div><div class="v num">${fmtCap(p.cap)}</div><div class="k">${l.cap} · kWp</div></div><div><div class="v num">${pct}%</div><div class="k">${lang==='zh'?'占组合装机':'of portfolio capacity'}</div></div><div><div class="v num">${fmtDateShort(p.cod,lang)}</div><div class="k">${l.cod}</div></div></div>
      </div>
      <div class="pj-cols">
        <div>
          <p class="pj-spec-title">${l.spec}</p>
          <dl class="pj-spec">
            <div><dt>${l.roof}</dt><dd>${l[p.roof]}</dd></div>
            <div><dt>${l.grid}</dt><dd>${p.grid==='hv'?l.hv:l.lv}</dd></div>
            <div><dt>${l.eq}</dt><dd>${t.eq}</dd></div>
          </dl>
        </div>
        <div class="pj-data">
          <h4>${l.data}</h4>
          <div class="row">
            <div><div class="v num">${fmt(p.gen)}</div><div class="k">${l.gen}</div></div>
            <div><div class="v num">${fmt(p.hrs,0)}</div><div class="k">${l.hrs}</div></div>
            <div><div class="v num">${fmt(p.self,1)}%</div><div class="k">${l.self}</div></div>
            <div><div class="v num">${fmt(p.rev)}</div><div class="k">${l.rev}</div></div>
            <div><div class="v num">${fmt(p.co2)}</div><div class="k">${l.co2}${p.co2note?`<br>${p.co2note[lang]}`:''}</div></div>
          </div>
          <p class="pj-note"><strong>${l.highlight}</strong>${lang==='zh'?'：':' — '}${t.hl}</p>
          ${p.gallery.length>1?`<div class="pj-gallery">${p.gallery.slice(0,2).map(g=>`<figure><img src="${g[0]}" alt="" loading="lazy" decoding="async"><figcaption>${l[g[1]]}</figcaption></figure>`).join('')}</div>`:''}
        </div>
      </div>
      <div class="pj-foot"><span class="num">${lang==='zh'?`共 10&nbsp;座 · 第 ${i+1} 座（按装机排序）`:`Plant ${i+1} of 10, ranked by capacity`}</span><div class="actions"><button type="button" class="pj-link" id="pjLink"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg><span>${lang==='zh'?'复制链接':'Copy link'}</span></button><div class="pj-nav"><button type="button" id="pjPrev" aria-label="${l.prev}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg></button><button type="button" id="pjNext" aria-label="${l.next}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button></div></div></div>
    </div>`;
  content.scrollTop = 0;
  $('pjClose').addEventListener('click',closeProject);
  $('pjPrev').addEventListener('click',()=>openProject((i+P.length-1)%P.length));
  $('pjNext').addEventListener('click',()=>openProject((i+1)%P.length));
  $('pjLink').addEventListener('click',async e=>{
    const url=location.origin+location.pathname+location.search+(SPA?'#/business/plant-'+p.id:'#plant-'+p.id); const b=e.currentTarget;
    try{ await navigator.clipboard.writeText(url); }catch(err){ const ta=document.createElement('textarea'); ta.value=url; document.body.appendChild(ta); ta.select(); try{document.execCommand('copy');}catch(e2){} ta.remove(); }
    b.classList.add('done'); b.querySelector('span').textContent=lang==='zh'?'已复制':'Copied'; setTimeout(()=>{b.classList.remove('done'); b.querySelector('span').textContent=lang==='zh'?'复制链接':'Copy link';},1800);
  });
}
function openProject(i){
  openIndex=i; renderDialog(i);
  try{ history.replaceState(null,'',SPA?'#/business/plant-'+P[i].id:'#plant-'+P[i].id); }catch(e){}
  if(!dialog.open){ if(typeof dialog.showModal==='function') dialog.showModal(); else dialog.setAttribute('open',''); document.body.style.overflow='hidden'; }
}
function closeProject(){ if(dialog.open){ dialog.close(); } openIndex=-1; document.body.style.overflow=''; if(/plant-/.test(location.hash)){ try{ history.replaceState(null,'',location.pathname+location.search+(SPA?'#/business':'#plants')); }catch(e){} } }
dialog.addEventListener('click',e=>{ if(e.target===dialog) closeProject(); });
dialog.addEventListener('close',()=>{ openIndex=-1; document.body.style.overflow=''; if(/plant-/.test(location.hash)){ try{ history.replaceState(null,'',location.pathname+location.search+(SPA?'#/business':'#plants')); }catch(e){} } });
dialog.addEventListener('keydown',e=>{ if(e.key==='ArrowRight'&&openIndex>-1) openProject((openIndex+1)%P.length); if(e.key==='ArrowLeft'&&openIndex>-1) openProject((openIndex+P.length-1)%P.length); });


/* ---------------- Products & solutions ---------------- */
const PT = {
 zh:{
  tabs:[['pntech','PNTECH 线缆与连接器'],['home','户用光储系统'],['ci','工商业储能系统']],
  pn_h:'品恩泰克 PNTECH · 智能制造品牌',
  pn_p:'品恩泰克成立于 2011&nbsp;年，是 PN Smart Energy 旗下核心智能制造品牌、国家级高新技术企业，专注太阳能光伏直流电缆、光伏连接器、光伏线束、汇流套件及安装工具的研发、生产与销售。通过 ISO 9001 / 14001 / 45001 管理体系认证，产品持有 TÜV、UL、CQC、CE 等国际认证，中国首批获得光伏线缆 TÜV 认证的企业之一。',
  pn_tags:['ISO 9001 / 14001 / 45001','TÜV · UL · CQC · CE','IP68 防护','标准化 / 定制化','国家级高新技术企业'],
  mfg:[['6','条','光伏电缆专业生产线'],['10','条','自动化生产线'],['15','台','注塑机'],['1.6','万㎡','标准化厂房'],['105','名','专业员工'],['9.3','GW','年供应能力']],
  capc:'产能规模：光伏电缆日产 8–10 万米、月产 2,000 万米（20,000 千米）；光伏连接器月产 200 万套；光伏线束月产 30 万套。',
  prods:[
   {img:'pr_cable',t:'光伏直流电缆',sub:'H1Z2Z2-K · PV1-F',p:'高纯度无氧镀锡铜导体，低烟无卤阻燃交联聚烯烃（XLPO）绝缘与护套，耐紫外老化、耐高低温、阻燃。',specs:['DC 1.8&nbsp;kV','1.5–10 mm²','-40 ℃ ~ +90 ℃','导体 120 ℃','TÜV · UL · CQC · CE']},
   {img:'pr_connector',t:'MC4 光伏连接器',sub:'双密封专利设计',p:'接触电阻较传统产品降低 20%，IP68 防护可浸没水下 1 米持续工作；镀锡铜导体，抗老化、耐紫外，兼容市面主流连接器。',specs:['1000 V DC','16–30 A','IP68','UL94-V0','≤ 0.5 mΩ']},
   {img:'pr_harness',t:'汇流套件',sub:'六路一出',p:'镀锡铜导体与 MC4 接口，六路光伏组串高效汇流为单路输出，简化阵列布线、提升安装效率、降低线缆用量与系统成本。',specs:['1000 V DC','20–30 A','IP67','TÜV 认证','支持定制']},
   {img:'pr_toolkit',t:'光伏安装工具箱',sub:'全套专用工具',p:'压接钳、剥线钳、剪线钳、连接器扳手等，与 MC4 连接器及光伏电缆规格精准匹配，耐用材质与人体工学设计。',specs:['压接 / 剥线 / 剪线','连接器扳手','适配多线径']}
  ],
  home_h:'为全球家庭提供一站式光储解决方案',
  home_p:'整合全球一线品牌核心设备与 PNTECH 自研线缆，覆盖高压、低压两种架构，适配不同户型与用电需求。',
  home:[
   {t:'低压户用光储系统',scene:'中小户型住宅、公寓；标准家庭用电，安装空间紧凑，单相电网为主。',adv:['低压架构安全性高、运行噪音低','模块化电池壁挂安装，占地小','峰谷电价智能管理，6 段可编程充放电','性价比优化，适配标准家庭用电'],brands:[
     {img:'deye_lv',b:'德业 Deye',pw:'3–12 kW',ft:'单相 / 三相低压，97.6% 效率；6&nbsp;个充放电时段；IP65；最多 16&nbsp;台并离网运行'},
     {img:'solis_lv',b:'锦浪 Solis',pw:'3–12 kW',ft:'无感并离网切换 < 10 ms；适配 40–60 V 任意电池；7 英寸工业级大屏'},
     {img:'goodwe_lv',b:'固德威 GoodWe',pw:'3–12 kW',ft:'超低噪声 < 45 dB；智能 EMS，支持发电机接入；IP66，直流拉弧保护'}]},
   {t:'高压户用光储系统',scene:'大户型住宅、别墅；用电负荷较高，对效率与扩展性要求高，三相电网为主。',adv:['高压架构转换效率更高，适合大功率场景','支持更大容量电池扩展','支持 100% 三相不平衡输出','自发自用率可达 85% 以上'],brands:[
     {img:'deye_hv',b:'德业 Deye',pw:'12–25 kW',ft:'三相高压，100% 三相不平衡输出；最多 10&nbsp;台并机；支持交流耦合改造与柴发充电'},
     {img:'solis_hv',b:'锦浪 Solis',pw:'15–20 kW',ft:'4 路 MPPT，160% 光伏输入；内置 SG Ready 热泵控制；支持柴发接入'},
     {img:'goodwe_hv',b:'固德威 GoodWe',pw:'12–20 kW',ft:'6 段充放电，智能 EMS；毫秒级无缝切换；发电机 / 备用电源 / 智能负载三合一端口'}]}
  ],
  ci_h:'为工厂、园区、商业楼宇与充电站提供一站式储能方案',
  ci_p:'覆盖纯储能、光储融合、光储充一体化三大应用场景，帮助企业降低用电成本、提升绿电占比、保障电力稳定。',
  ci:[
   {t:'储能系统',eq:'储能逆变器 + 储能电池 + PNTECH 线缆',scene:'工业园区、大型商超、数据中心、充电站；峰谷价差大、需量电费高、关键负载需备电。',adv:['削峰填谷，利用峰谷价差降低电费','需量实时监控，避免超标罚款','断电毫秒级切换，保障关键负载','模块化扩容，单系统可至 MW 级','动态无功补偿，优化功率因数'],brands:[
     {img:'deye_bosb',b:'德业 BOS-B Pro',pw:'257&nbsp;kWh 大容量',ft:'314 Ah 电芯，180 A 充放电，支持 5–16 模块串联'},
     {img:'deye_bosa',b:'德业 BOS-A',pw:'54–161&nbsp;kWh',ft:'7.68&nbsp;kWh / 模块，7–21 组串联，160 A，< 10 ms 切换'},
     {img:'deye_bosg',b:'德业 BOS-G',pw:'15–61&nbsp;kWh',ft:'5.12&nbsp;kWh / 模块，3–12 组串联，19 英寸机架式'}]},
   {t:'光储融合系统',eq:'组件 + 逆变器 + 储能电池 + PNTECH 线缆',scene:'拥有屋顶或空地的工业园区、商业综合体、制造工厂，希望光伏与储能结合、最大化自发自用。',adv:['光储协同，自发自用率提升至 90% 以上','智能防逆流，避免反送电罚款','6 时段充放电策略调度','夜间 SVG 无功补偿','支持交流耦合改造存量电站'],brands:[
     {img:'deye_sun125',b:'德业 SUN-100/125K',pw:'三相高压储能逆变器',ft:'最高效率 98.7%，10 路 MPPT；最多 10&nbsp;台并机至 1.25&nbsp;MW；IP65'},
     {img:'solis_g6',b:'锦浪 G6-EH3P 125K',pw:'三相高压储能逆变器',ft:'2 倍光伏输入，10 路 MPPT；2 路电池接口 100 A + 100 A；并联扩容至 1.25&nbsp;MW'},
     {img:'goodwe_125',b:'固德威 GW125K-GT',pw:'三相高压并网逆变器',ft:'最高效率 99%，10 路 MPPT；1.5 倍直流超配；IP66，AFCI 3.0 电弧保护'}]},
   {t:'光储充一体化系统',eq:'组件 + 逆变器 + 储能电池 + 充电桩 + PNTECH 线缆',scene:'充电站运营商、商业综合体、交通枢纽、园区停车场；充电负荷波动大、需量电费高、变压器容量不足。',adv:['光伏发电 + 储能 + 充电桩，构建绿电闭环','储能补充充电高峰，避免变压器增容','储能平抑需量峰值，降低需量电费','支持离网备电，保障充电桩关键供电'],photo:'ess_station',brands:[
     {img:'deye_mclc',b:'德业 MC-LC430 系列',pw:'PCS / BMS / EMS 一体化',ft:'云互联平台，模块化可扩展；3+3 多层保护与 5 级消防防护；10 ms 无缝并网切换'},
     {img:'xg_sl125',b:'信光 SL125/257CP3-W',pw:'光储充直流母线一体机',ft:'光储充共用直流母线，减少 AC/DC 转换损耗；支持快充 / 超充与 V2G / V2X'},
     {img:'goodwe_22k',b:'固德威 GW22K-HCA',pw:'7 / 11 / 22 kW 充电桩',ft:'光储充深度联动，100% 光伏余电充电；SEMS 平台一站式管理；IP66'}]}
  ]
 },
 en:{
  tabs:[['pntech','PNTECH cables & connectors'],['home','Residential PV + storage'],['ci','C&I energy storage']],
  pn_h:'PNTECH · the group’s smart-manufacturing brand',
  pn_p:'Founded in 2011, PNTECH is PN Smart Energy’s core manufacturing brand and a national high-tech enterprise. It develops, manufactures and sells solar DC cables, PV connectors, harnesses, combiner kits and installation tools. Certified to ISO 9001 / 14001 / 45001, with products holding TÜV, UL, CQC and CE certifications — among the first Chinese manufacturers to obtain TÜV certification for solar cables.',
  pn_tags:['ISO 9001 / 14001 / 45001','TÜV · UL · CQC · CE','IP68 protection','Standard / custom','National high-tech enterprise'],
  mfg:[['6','','solar cable production lines'],['10','','automated production lines'],['15','','injection-moulding machines'],['16,000','m²','standardised plant'],['105','','specialist employees'],['9.3','GW','annual supply capacity']],
  capc:'Capacity: solar cable 80,000–100,000 m per day and 20 million m (20,000 km) per month; connectors 2 million sets per month; harnesses 300,000 sets per month.',
  prods:[
   {img:'pr_cable',t:'Solar DC cable',sub:'H1Z2Z2-K · PV1-F',p:'High-purity oxygen-free tinned copper conductor with low-smoke halogen-free flame-retardant XLPO insulation and sheath; UV-, temperature- and flame-resistant.',specs:['DC 1.8&nbsp;kV','1.5–10 mm²','-40 °C to +90 °C','120 °C conductor','TÜV · UL · CQC · CE']},
   {img:'pr_connector',t:'MC4 PV connector',sub:'Patented double seal',p:'Contact resistance 20% lower than conventional products; IP68 — operates fully submerged at 1 m; tinned copper, ageing- and UV-resistant, compatible with mainstream connectors.',specs:['1000 V DC','16–30 A','IP68','UL94-V0','≤ 0.5 mΩ']},
   {img:'pr_harness',t:'Combiner kit',sub:'Six-in, one-out',p:'Tinned copper conductors with MC4 interfaces combine six PV strings into a single output, simplifying array wiring, speeding installation and cutting cable use and system cost.',specs:['1000 V DC','20–30 A','IP67','TÜV certified','Customisable']},
   {img:'pr_toolkit',t:'PV installation tool kit',sub:'Complete specialist set',p:'Crimping, stripping and cutting pliers plus connector spanners, matched precisely to MC4 connectors and PV cable sizes; durable materials and ergonomic design.',specs:['Crimp / strip / cut','Connector spanner','Multiple cable sizes']}
  ],
  home_h:'One-stop PV-plus-storage solutions for homes worldwide',
  home_p:'Tier-one brand core equipment combined with PNTECH cables, in high-voltage and low-voltage architectures to suit different homes and loads.',
  home:[
   {t:'Low-voltage residential PV + storage',scene:'Small and mid-size homes and apartments; standard household loads, compact installation space, mainly single-phase grids.',adv:['Low-voltage architecture: high safety, low noise','Modular wall-mounted batteries with a small footprint','Smart peak/off-peak management, 6 programmable charge/discharge periods','Cost-optimised for standard household loads'],brands:[
     {img:'deye_lv',b:'Deye',pw:'3–12 kW',ft:'Single/three-phase LV, 97.6% efficiency; 6 charge/discharge periods; IP65; up to 16 units in parallel on/off-grid'},
     {img:'solis_lv',b:'Solis',pw:'3–12 kW',ft:'Seamless on/off-grid switch < 10 ms; works with any 40–60 V battery; 7-inch industrial display'},
     {img:'goodwe_lv',b:'GoodWe',pw:'3–12 kW',ft:'Ultra-low noise < 45 dB; smart EMS with generator input; IP66 with DC arc-fault protection'}]},
   {t:'High-voltage residential PV + storage',scene:'Large homes and villas; higher loads and higher demands on efficiency and expandability, mainly three-phase grids.',adv:['High-voltage architecture for higher conversion efficiency','Larger battery expansion for high self-consumption','100% three-phase unbalanced output','Self-consumption rates above 85%'],brands:[
     {img:'deye_hv',b:'Deye',pw:'12–25 kW',ft:'Three-phase HV with 100% unbalanced output; up to 10 units in parallel; AC coupling for retrofits and generator charging'},
     {img:'solis_hv',b:'Solis',pw:'15–20 kW',ft:'4 MPPTs, 160% PV oversizing; built-in SG Ready heat-pump control; generator input'},
     {img:'goodwe_hv',b:'GoodWe',pw:'12–20 kW',ft:'6 charge/discharge periods, smart EMS; millisecond seamless switching; 3-in-1 generator / backup / smart-load port'}]}
  ],
  ci_h:'One-stop storage solutions for factories, parks, commercial buildings and charging stations',
  ci_p:'Three application scenarios — stand-alone storage, PV-plus-storage and PV-storage-charging — to cut electricity costs, raise the share of green power and secure supply.',
  ci:[
   {t:'Energy storage system',eq:'Storage inverter + battery + PNTECH cables',scene:'Industrial parks, large retail, data centres and charging stations with wide peak/off-peak spreads, high demand charges and critical loads needing backup.',adv:['Peak shaving with peak/off-peak price spreads','Real-time demand monitoring to avoid penalties','Millisecond switching on grid loss for critical loads','Modular expansion to MW scale','Dynamic reactive-power compensation'],brands:[
     {img:'deye_bosb',b:'Deye BOS-B Pro',pw:'257&nbsp;kWh high capacity',ft:'314 Ah cells, 180 A charge/discharge, 5–16 modules in series'},
     {img:'deye_bosa',b:'Deye BOS-A',pw:'54–161&nbsp;kWh',ft:'7.68&nbsp;kWh per module, 7–21 in series, 160 A, < 10 ms switching'},
     {img:'deye_bosg',b:'Deye BOS-G',pw:'15–61&nbsp;kWh',ft:'5.12&nbsp;kWh per module, 3–12 in series, 19-inch rack design'}]},
   {t:'PV-plus-storage system',eq:'Modules + inverter + battery + PNTECH cables',scene:'Industrial parks, commercial complexes and factories with roof or ground space that want to combine PV with storage and maximise self-consumption.',adv:['PV–storage coordination lifts self-consumption above 90%','Smart anti-backflow control avoids export penalties','6-period charge/discharge scheduling','Night-time SVG reactive compensation','AC coupling to upgrade existing plants'],brands:[
     {img:'deye_sun125',b:'Deye SUN-100/125K',pw:'Three-phase HV hybrid inverter',ft:'98.7% peak efficiency, 10 MPPTs; up to 10 units in parallel to 1.25&nbsp;MW; IP65'},
     {img:'solis_g6',b:'Solis G6-EH3P 125K',pw:'Three-phase HV hybrid inverter',ft:'2× PV input, 10 MPPTs; dual battery ports 100 A + 100 A; parallel to 1.25&nbsp;MW'},
     {img:'goodwe_125',b:'GoodWe GW125K-GT',pw:'Three-phase grid-tied inverter',ft:'99% peak efficiency, 10 MPPTs; 1.5× DC oversizing; IP66, AFCI 3.0 arc protection'}]},
   {t:'PV-storage-charging system',eq:'Modules + inverter + battery + chargers + PNTECH cables',scene:'Charging-station operators, commercial complexes, transport hubs and park car parks with volatile charging loads, high demand charges and limited transformer capacity.',adv:['PV generation + storage + chargers form a closed green-power loop','Storage covers charging peaks and avoids transformer upgrades','Storage flattens demand peaks to cut demand charges','Off-grid backup keeps critical chargers running'],photo:'ess_station',brands:[
     {img:'deye_mclc',b:'Deye MC-LC430 series',pw:'Integrated PCS / BMS / EMS',ft:'Cloud-connected, modular and expandable; 3+3 layered protection and 5-level fire safety; 10 ms seamless grid switching'},
     {img:'xg_sl125',b:'Xinguang SL125/257CP3-W',pw:'DC-bus PV-storage-charging unit',ft:'Shared DC bus for PV, storage and charging cuts AC/DC conversion losses; fast/ultra-fast charging, V2G / V2X'},
     {img:'goodwe_22k',b:'GoodWe GW22K-HCA',pw:'7 / 11 / 22 kW EV charger',ft:'Deep PV-storage-charging integration, 100% surplus-PV charging; SEMS platform management; IP66'}]}
  ]
 }
};
const PIMG = {pr_cable:"assets/pr_cable.webp",pr_connector:"assets/pr_connector.webp",pr_harness:"assets/pr_harness.webp",pr_toolkit:"assets/pr_toolkit.webp",deye_lv:"assets/deye_lv.webp",solis_lv:"assets/solis_lv.webp",goodwe_lv:"assets/goodwe_lv.webp",deye_hv:"assets/deye_hv.webp",solis_hv:"assets/solis_hv.webp",goodwe_hv:"assets/goodwe_hv.webp",deye_bosb:"assets/deye_bosb.webp",deye_bosa:"assets/deye_bosa.webp",deye_bosg:"assets/deye_bosg.webp",deye_sun125:"assets/deye_sun125.webp",solis_g6:"assets/solis_g6.webp",goodwe_125:"assets/goodwe_125.webp",deye_mclc:"assets/deye_mclc.webp",xg_sl125:"assets/xg_sl125.webp",goodwe_22k:"assets/goodwe_22k.webp",ess_station:"assets/ess_station.webp"};
let ptab='pntech';
function pimg(k){ return PIMG[k]||''; }
function renderProducts(){
  const tabs=$('ptabs'), pane=$('ppane'); if(!tabs||!pane) return;
  const t=PT[lang];
  tabs.innerHTML=t.tabs.map(([id,label])=>`<button type="button" role="tab" id="tab-${id}" data-tab="${id}" aria-selected="${id===ptab}">${label}</button>`).join('');
  tabs.querySelectorAll('button').forEach((b,idx,all)=>{ b.addEventListener('click',()=>{ptab=b.dataset.tab;renderProducts();}); b.addEventListener('keydown',e=>{ if(e.key==='ArrowRight'||e.key==='ArrowLeft'){ e.preventDefault(); const n=(idx+(e.key==='ArrowRight'?1:all.length-1))%all.length; ptab=all[n].dataset.tab; renderProducts(); document.querySelector(`#ptabs button[data-tab="${ptab}"]`).focus(); } }); });
  let html='';
  if(ptab==='pntech'){
    html+=`<div class="pane-intro"><div><h3>${t.pn_h}</h3><div class="tags">${t.pn_tags.map(x=>`<span>${x}</span>`).join('')}</div></div><p>${t.pn_p}</p></div>`;
    html+=`<div class="mfg-stats">${t.mfg.map(([v,u,k])=>`<div><div class="v num">${v}${u?`<small>${u}</small>`:''}</div><div class="k">${k}</div></div>`).join('')}</div>`;
    html+=`<div class="pgrid">${t.prods.map(p=>`<div class="pcard"><div class="img"><img src="${pimg(p.img)}" alt="" loading="lazy" decoding="async"></div><h4>${p.t}</h4><div class="sub">${p.sub}</div><p>${p.p}</p><div class="specs">${p.specs.map(x=>`<span>${x}</span>`).join('')}</div></div>`).join('')}</div>`;
    html+=`<p class="products-note" style="margin-top:18px">${t.capc}</p>`;
  } else if(ptab==='home'){
    html+=`<div class="pane-intro"><h3>${t.home_h}</h3><p>${t.home_p}</p></div>`;
    html+=`<div class="sys">${t.home.map(sys=>`<div class="pcard"><h4>${sys.t}</h4><p class="scene"><b>${lang==='zh'?'适用场景':'Typical use'}</b> · ${sys.scene}</p><ul>${sys.adv.map(a=>`<li>${a}</li>`).join('')}</ul><div class="brands">${sys.brands.map(b=>`<div class="pbrand"><div class="img"><img src="${pimg(b.img)}" alt="" loading="lazy" decoding="async"></div><div><b>${b.b}</b><div class="pw">${b.pw}</div><div class="ft">${b.ft}</div></div></div>`).join('')}</div></div>`).join('')}</div>`;
  } else {
    html+=`<div class="pane-intro"><h3>${t.ci_h}</h3><p>${t.ci_p}</p></div>`;
    html+=`<div class="sys cols3">${t.ci.map(sys=>`<div class="pcard">${sys.photo?`<div class="img photo"><img src="${pimg(sys.photo)}" alt="" loading="lazy" decoding="async"></div>`:`<div class="img" style="height:170px"><img src="${pimg(sys.brands[0].img)}" alt="" loading="lazy" decoding="async"></div>`}<h4>${sys.t}</h4><div class="sub">${sys.eq}</div><p class="scene"><b>${lang==='zh'?'适用场景':'Typical use'}</b> · ${sys.scene}</p><ul>${sys.adv.map(a=>`<li>${a}</li>`).join('')}</ul><div class="brands">${sys.brands.map(b=>`<div class="pbrand"><div class="img"><img src="${pimg(b.img)}" alt="" loading="lazy" decoding="async"></div><div><b>${b.b}</b><div class="pw">${b.pw}</div><div class="ft">${b.ft}</div></div></div>`).join('')}</div></div>`).join('')}</div>`;
  }
  pane.innerHTML=html;
}


/* ---------------- Plant map (schematic, by coordinates) ---------------- */
const REF = [
 {zh:'上海',en:'Shanghai',lat:31.23,lon:121.47},
 {zh:'南京 · 熙盛电力',en:'Nanjing · Cesun Power',lat:32.06,lon:118.80,hq:true},
 {zh:'宁波 · PN 总部',en:'Ningbo · PN HQ',lat:29.87,lon:121.55,hq:true}
];
function renderMap(){
  const el=$('map'); if(!el) return;
  const W=640,H=480, LON0=117.3,LON1=122.5, LAT0=29.35,LAT1=32.75;
  const X=lon=>((lon-LON0)/(LON1-LON0))*W, Y=lat=>((LAT1-lat)/(LAT1-LAT0))*H;
  let g='';
  for(let lon=118;lon<=122;lon++){ g+=`<line class="grid-line" x1="${X(lon).toFixed(1)}" y1="0" x2="${X(lon).toFixed(1)}" y2="${H}"/><text class="axis" x="${(X(lon)+4).toFixed(1)}" y="${H-6}">${lon}°E</text>`; }
  for(let lat=30;lat<=32;lat++){ g+=`<line class="grid-line" x1="0" y1="${Y(lat).toFixed(1)}" x2="${W}" y2="${Y(lat).toFixed(1)}"/><text class="axis" x="4" y="${(Y(lat)-4).toFixed(1)}">${lat}°N</text>`; }
  const refOff={'上海':[9,4,'start'],'南京 · 熙盛电力':[-9,4,'end'],'宁波 · PN 总部':[9,15,'start']};
  let refs=REF.map(r=>{ const o=refOff[r.zh]; return `<rect class="ref" x="${(X(r.lon)-4).toFixed(1)}" y="${(Y(r.lat)-4).toFixed(1)}" width="8" height="8" transform="rotate(45 ${X(r.lon).toFixed(1)} ${Y(r.lat).toFixed(1)})"/><text class="ref-label${r.hq?' hq':''}" x="${(X(r.lon)+o[0]).toFixed(1)}" y="${(Y(r.lat)+o[1]).toFixed(1)}" text-anchor="${o[2]}">${r[lang]}</text>`; }).join('');
  const clusters={};
  P.forEach((p,i)=>{ const k=p.city.zh; (clusters[k]=clusters[k]||{lat:0,lon:0,n:0,cap:0,city:p.city}); const c=clusters[k]; c.lat+=p.lat; c.lon+=p.lon; c.n++; c.cap+=p.cap; });
  const cityOff={'杭州临安':[-14,-4,'end'],'杭州富阳':[0,22,'middle'],'杭州萧山':[8,22,'start'],'宁波慈溪':[10,-6,'start'],'苏州吴江':[12,4,'start'],'镇江丹阳':[10,-8,'start'],'马鞍山含山':[14,4,'start']};
  let labels=Object.values(clusters).map(c=>{ const lat=c.lat/c.n, lon=c.lon/c.n; const o=cityOff[c.city.zh]||[10,-8,'start'];
    return `<text class="city" x="${(X(lon)+o[0]).toFixed(1)}" y="${(Y(lat)+o[1]).toFixed(1)}" text-anchor="${o[2]}">${c.city[lang]} <tspan class="n">×${c.n} · ${(c.cap/1000).toFixed(1)} MW</tspan></text>`; }).join('');
  let dots=P.map((p,i)=>{ const r=(4+Math.sqrt(p.cap)/6).toFixed(1); return `<circle class="plant${filter!=='all'&&p.prov!==filter?' dim':''}" data-i="${i}" cx="${X(p.lon).toFixed(1)}" cy="${Y(p.lat).toFixed(1)}" r="${r}" fill="${PROV_COLOR[p.prov]}"><title>${p[lang].name} · ${fmtCap(p.cap)} kWp</title></circle>`; }).join('');
  el.innerHTML=`<div class="title"><b>${lang==='zh'?'电站分布':'Plant locations'}</b><span>${lang==='zh'?'圆点大小按装机容量':'Dot size by capacity'}</span></div><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${lang==='zh'?'电站分布示意图':'Schematic plant location map'}">${g}${refs}${dots}${labels}</svg><div class="cap">${lang==='zh'?'按经纬度示意，非精确地理边界':'Positions by coordinates; schematic, not a boundary map'}</div>`;
  el.querySelectorAll('.plant').forEach(c=>{
    c.addEventListener('click',()=>openProject(+c.dataset.i));
    c.addEventListener('mouseenter',()=>{ const k=document.querySelector(`#grid [data-i="${c.dataset.i}"]`); if(k) k.classList.add('hot'); const b=document.querySelector(`#bar [data-i="${c.dataset.i}"]`); if(b) b.classList.add('hot'); });
    c.addEventListener('mouseleave',()=>{ document.querySelectorAll('#grid .hot, #bar .hot').forEach(k=>k.classList.remove('hot')); });
  });
}

/* ---------------- News ---------------- */
const NEWS = [
 {d:'2026-08-19',tag:{zh:'新闻稿 · 6-K',en:'Press release · 6-K'},zh:['签署约 200&nbsp;MW 分布式光伏项目筛选框架协议','南京熙盛电力与持股 40% 的南京晨曦建设科技签署框架协议，系统化筛选工商业及户用分布式光伏收购标的；PN 保留全部投资决策权，未推进的项目不产生费用。'],en:['Sourcing framework agreement targeting ~200&nbsp;MW of distributed solar','Nanjing Cesun Power signed a framework agreement with 40%-owned Nanjing Chenxi Construction Technology to systematically source C&I and residential distributed solar targets; PN retains sole investment authority and owes no fee on projects it declines.']},
 {d:'2026-08-12',tag:{zh:'新闻稿 · 6-K',en:'Press release · 6-K'},zh:['签署 9.9&nbsp;MW 分布式屋顶光伏组合收购框架协议','拟收购浙江云坦科技位于宁波的 6&nbsp;家项目公司 100% 股权；完成以尽职调查、容量核验及正式股权转让协议为准。'],en:['Framework agreement to acquire a 9.9&nbsp;MW rooftop solar portfolio','Proposed acquisition of 100% of six project companies in Ningbo from Zhejiang Yuntan Technology; completion subject to due diligence, capacity verification and a definitive equity transfer agreement.']},
 {d:'2026-08-10',tag:{zh:'6-K · 424B5',en:'6-K · 424B5'},zh:['完成注册直接发行','完成 A 类普通股及预融资权证的注册直接发行，为 F-3 储架注册首次动用；净募集资金用于营运资金及一般公司用途。详情见 SEC 文件。'],en:['Registered direct offering closed','Registered direct offering of Class A ordinary shares and pre-funded warrants completed — the first takedown under the Form F-3 shelf; net proceeds for working capital and general corporate purposes. See SEC filings for details.']},
 {d:'2026-08-06',tag:{zh:'新闻稿',en:'Press release'},zh:['推进美国本地化战略：设立特拉华、得州子公司及纽约 IR 办公室','新设 PN Skycorp Solar Limited（特拉华）与 PN Solar Solutions Limited（得克萨斯），并在纽约设立投资者关系办公室，为北美投资者提供美国工作时间的直接沟通渠道。'],en:['U.S. localization advances: Delaware and Texas subsidiaries, New York IR office','PN Skycorp Solar Limited (Delaware) and PN Solar Solutions Limited (Texas) incorporated, and an investor relations office opened in New York to give North American investors direct access during U.S. business hours.']},
 {d:'2026-08-04',tag:{zh:'6-K · 半年报',en:'6-K · Semiannual'},zh:['发布 2026 财年上半年报告（截至 2026&nbsp;年 3&nbsp;月 31&nbsp;日）','2026 财年上半年财务业绩已通过 Form 6-K 披露，完整报告与财务数据请见投资者关系网站“财务报告”栏目及 SEC EDGAR。'],en:['H1 FY2026 semiannual report furnished (six months ended March 31, 2026)','First-half FY2026 results were furnished on Form 6-K; the full report and financial data are available under Financial Reports on the investor relations website and on SEC EDGAR.']},
 {d:'2026-07-30',tag:{zh:'新闻稿',en:'Press release'},zh:['完成对南京熙盛电力的收购，推进向独立发电商转型','熙盛电力成为公司全资子公司，公司正式从光伏配套制造商转型为自持自营分布式电站的独立发电商。'],en:['Acquisition of Nanjing Cesun Power completed, advancing the transition to an independent power producer','Cesun Power became a wholly owned subsidiary, formally moving the company from PV component manufacturing to owning and operating distributed power plants.']},
 {d:'2026-07-07',tag:{zh:'董事会决议',en:'Board resolution'},zh:['董事会通过第 17 号决议，建立 ESG 治理框架','提名与公司治理委员会负责 ESG 监督，CEO 牵头的 ESG 工作组半年度汇报；报告框架参照 GRI、SASB/ISSB 与 TCFD。'],en:['Board adopts ESG governance framework (Resolution No. 17)','The Nominating and Corporate Governance Committee holds ESG oversight and a CEO-chaired ESG Working Group reports semiannually; reporting references GRI, SASB/ISSB and TCFD.']},
 {d:'2026-06-15',tag:{zh:'新闻稿',en:'Press release'},zh:['公司正式更名为 PN Smart Energy Limited，重申 IPP 战略','原 Skycorp Solar Group Limited 于 2026&nbsp;年 6&nbsp;月 12&nbsp;日完成更名，纳斯达克代码 PN 保持不变。'],en:['Company officially renamed PN Smart Energy Limited, reaffirming its IPP strategy','Formerly Skycorp Solar Group Limited; the rename took effect on June 12, 2026 and the Nasdaq ticker PN is unchanged.']},
 {d:'2026-04-30',tag:{zh:'F-3',en:'F-3'},zh:['3 亿美元 F-3 储架注册生效','为电站与制造战略的规模化提供灵活的融资工具。'],en:['$300 million Form F-3 shelf registration declared effective','Flexible access to growth capital for the power station and manufacturing strategies.']}
];
function renderNews(){
  const el=$('newsList'); if(!el) return;
  el.innerHTML=NEWS.map(n=>`<a class="news-item" href="https://ir.pnsmartenergy.com/News-Releases.html" target="_blank" rel="noopener"><time datetime="${n.d}">${fmtDate(n.d,lang)}</time><div><h3>${n[lang][0]}<span class="tag">${n.tag[lang]}</span></h3><p>${n[lang][1]}</p></div><span class="arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg></span></a>`).join('');
}

/* ---------------- Filters ---------------- */
document.querySelectorAll('#filters .chip').forEach(ch=>ch.addEventListener('click',()=>{
  filter=ch.dataset.filter;
  document.querySelectorAll('#filters .chip').forEach(c=>c.setAttribute('aria-pressed',c===ch?'true':'false'));
  renderGrid(); updateBarDim(); renderMap();
}));

/* ---------------- Language ---------------- */
function setTitle(){
  const t=TITLES[page]||TITLES.index; document.title=t[lang];
  const md=document.querySelector('meta[name="description"]'); if(md) md.setAttribute('content',DESCS[lang]);
}
function applyLang(next){
  lang=next;
  site.dataset.lang=lang;
  document.documentElement.lang = lang==='zh'?'zh-CN':'en';
  document.querySelectorAll('[data-i18n]').forEach(el=>{ const v=T[lang][el.dataset.i18n]; if(v!==undefined) el.innerHTML=v; });
  document.querySelectorAll('[data-set-lang]').forEach(b=>b.setAttribute('aria-pressed', b.dataset.setLang===lang?'true':'false'));
  renderBar(); renderGrid(); renderProducts(); renderMap(); renderNews(); renderShowcase();
  if(openIndex>-1) renderDialog(openIndex);
  setTitle();
  try{ localStorage.setItem('pn-lang',lang); }catch(e){}
}
document.querySelectorAll('[data-set-lang]').forEach(b=>b.addEventListener('click',()=>{ if(b.dataset.setLang!==lang) applyLang(b.dataset.setLang); }));

/* ---------------- Nav ---------------- */
const nav=$('nav');
function topEl(){ return document.querySelector('main:not([hidden]) .hero, main:not([hidden]) .phead'); }
function onScroll(){ const h=topEl(); nav.classList.toggle('solid', !h || window.scrollY > h.offsetHeight - 80); }
window.addEventListener('scroll',onScroll,{passive:true});
const menuBtn=$('menuBtn');
menuBtn.addEventListener('click',()=>{ const open=nav.classList.toggle('open'); menuBtn.setAttribute('aria-expanded',open?'true':'false'); });
document.querySelectorAll('#navLinks a').forEach(a=>a.addEventListener('click',()=>{ nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded','false'); }));
function markNav(){ document.querySelectorAll('#navLinks a').forEach(a=>a.classList.toggle('active', a.dataset.page===page)); }

/* ---------------- Back to top ---------------- */
const totop=$('totop');
function toTopVis(){ totop.classList.toggle('show', window.scrollY>900); }
window.addEventListener('scroll',toTopVis,{passive:true});
totop.addEventListener('click',()=>window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}));

/* ---------------- Anchors, deep links, routing ---------------- */
function handleAnchor(anchor){
  if(!anchor) return false;
  const m=anchor.match(/^plant-([a-z0-9]+)$/);
  if(m){ const i=P.findIndex(p=>p.id===m[1]); if(i>-1){ const s=$('plants'); if(s) s.scrollIntoView({block:'start'}); openProject(i); return true; } }
  if(PT.zh.tabs.some(t=>t[0]===anchor)){ ptab=anchor; renderProducts(); const s=$('catalog'); if(s) s.scrollIntoView({block:'start'}); return true; }
  const el=$(anchor); if(el){ el.scrollIntoView({block:'start'}); return true; }
  return false;
}
function showPage(p){
  if(!SPA) return;
  MAINS.forEach(m=>{ m.hidden = m.dataset.page!==p; });
  page=p; markNav(); setTitle(); onScroll();
}
function route(){
  if(SPA){
    const m=location.hash.match(/^#\/([a-z]+)(?:\/([a-z0-9-]+))?/);
    const p=(m && TITLES[m[1]])?m[1]:'index', anchor=m?(m[2]||''):'';
    const changed = p!==page || !MAINS.find(x=>x.dataset.page===p && !x.hidden);
    showPage(p);
    if(anchor){ setTimeout(()=>handleAnchor(anchor),30); } else if(changed){ window.scrollTo(0,0); }
    if(!anchor && openIndex>-1) closeProject();
  } else {
    const h=location.hash.replace(/^#/,'');
    if(/^plant-/.test(h) || PT.zh.tabs.some(t=>t[0]===h)) setTimeout(()=>handleAnchor(h),30);
  }
}
window.addEventListener('hashchange',route);

/* ---------------- Init ---------------- */
if(SPA){ MAINS.forEach(m=>{ m.hidden = m.dataset.page!=='index'; }); }
applyLang(lang);
markNav(); onScroll(); toTopVis();
route();
})();