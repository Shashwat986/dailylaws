/**
 * DailyLaws.IN - Legal Knowledge Base
 * Comprehensive dataset covering citizen rights, statutory acts,
 * new criminal codes (BNSS / BNS / BSA 2024), Supreme Court precedents,
 * and practical citizen scripts.
 */

const DAILY_LAWS_DATA = [
  // ==========================================
  // CATEGORY 1: TRAFFIC POLICE & MOTOR VEHICLES
  // ==========================================
  {
    id: "traffic-keys",
    category: "traffic",
    title: "Can traffic police snatch or remove your vehicle keys from the ignition?",
    verdict: "STRICTLY ILLEGAL",
    verdictType: "danger",
    lawAct: "Central Motor Vehicles Rules, 1989 & State Police Standing Orders",
    newLaw: null,
    oldLaw: null,
    summary: "No police officer, regardless of rank, has the legal authority to reach into your vehicle and snatch or remove your ignition keys. Key confiscation is considered arbitrary force and endangers road safety.",
    whatToDo: [
      "Keep calm and politely state: 'Officer, please do not pull out my keys. It is against police standing orders and safety guidelines.'",
      "Do not physically resist, but turn off the engine yourself and keep the keys in your pocket.",
      "If the officer insists or uses force, note their name tag, buckle/badge number, and vehicle number, or politely take a video.",
      "You can file a formal complaint with the Traffic Police Commissioner or State Police Complaints Authority."
    ],
    landmarkCase: "Delhi Traffic Police Standing Order & Andhra Pradesh High Court directives on citizen dignity during vehicle checks.",
    tags: ["traffic", "keys", "ignition", "bike", "car", "police harassment", "scooter", "pull over"],
    isSOS: true,
    sosScript: "Officer, under Traffic Police guidelines and CMV Rules, you are not authorized to remove the ignition keys. I will cooperate fully with the documents."
  },
  {
    id: "traffic-rank-challan",
    category: "traffic",
    title: "Can a Traffic Constable issue a challan or seize your vehicle?",
    verdict: "CONDITIONAL / LIMITED RANK",
    verdictType: "warning",
    lawAct: "Motor Vehicles Act, 1988 (Section 130 & Section 200)",
    newLaw: null,
    oldLaw: null,
    summary: "A traffic police constable (wearing white uniform without star insignia) CANNOT issue an on-the-spot compounding challan or seize your driving license unless an officer of the rank of Assistant Sub-Inspector (ASI) or Sub-Inspector (SI) is present on duty.",
    whatToDo: [
      "Check the stars on the officer's shoulder epaulet: 1 star is ASI, 2 stars is SI, 3 stars is Inspector. A constable has no stars.",
      "A constable can only stop your vehicle to ask for documents or regulate traffic flow.",
      "Ask politely: 'Sir/Madam, may I speak with the Sub-Inspector or ASI in charge to issue the official receipt/challan?'",
      "Always demand an official electronic e-Challan receipt or printed carbon-copy receipt with an official serial number."
    ],
    landmarkCase: "Section 200, Motor Vehicles Act empowers only gazetted officers or designated officers not below the rank of ASI/SI to compound offences.",
    tags: ["traffic", "challan", "constable", "rank", "fine", "sub inspector", "asi", "police stars"],
    isSOS: true,
    sosScript: "Sir, as per Section 200 MVA, only an officer of rank ASI or above is authorized to issue spot fines. Please direct me to the officer in-charge."
  },
  {
    id: "traffic-digilocker",
    category: "traffic",
    title: "Are DigiLocker and mParivahan digital documents legally valid for traffic checks?",
    verdict: "ABSOLUTE LEGAL RIGHT",
    verdictType: "success",
    lawAct: "Rule 139 of Central Motor Vehicles Rules, 1989 & IT Act 2000 Section 9A",
    newLaw: null,
    oldLaw: null,
    summary: "Digital Driving License, RC, Insurance, and PUC stored in the official DigiLocker or mParivahan apps are legally equivalent to physical original documents. Police cannot penalize you or demand physical cards.",
    whatToDo: [
      "Open your DigiLocker or mParivahan app and show the verified QR code and document details.",
      "Screenshots or ordinary photos are NOT accepted; the document must be inside the official DigiLocker or mParivahan app.",
      "If an officer insists on physical papers, cite the Ministry of Road Transport & Highways (MoRTH) circular No. RT-11036/64/2017-MVL dated 08.08.2018.",
      "The officer can verify the document electronically on their mParivahan/e-Challan terminal."
    ],
    landmarkCase: "MoRTH Notification No. RT-11036/64/2017-MVL and IT Act Section 9A (Electronic Records validity).",
    tags: ["traffic", "digilocker", "mparivahan", "documents", "rc", "driving license", "puc", "insurance"],
    isSOS: true,
    sosScript: "Under Rule 139 of CMV Rules and MoRTH Circular 2018, DigiLocker digital documents are recognized at par with original physical certificates."
  },
  {
    id: "traffic-breathalyzer",
    category: "traffic",
    title: "What are your rights during a Breathalyzer (Drunk Driving) test?",
    verdict: "MANDATORY WITH PROTOCOL",
    verdictType: "warning",
    lawAct: "Section 185 & Section 203, Motor Vehicles Act, 1988",
    newLaw: null,
    oldLaw: null,
    summary: "The permissible blood alcohol limit in India is 30 mg per 100 ml of blood. Police have the right to administer a breathalyzer test. However, you have the right to request a fresh, unopened sterile pipe/straw to protect hygiene.",
    whatToDo: [
      "Always request the officer to unwrap a fresh, sealed plastic mouthpiece in front of you before blowing.",
      "If the breath test registers above 30mg/100ml, police can arrest you without a warrant and take you to a registered medical practitioner within 2 hours for a blood test.",
      "Refusing a breath test without valid medical reason gives police grounds for arrest under Section 203(6) MVA.",
      "Never drive under the influence. Penalties include ₹10,000 fine and/or imprisonment up to 6 months for first offence."
    ],
    landmarkCase: "Sections 185, 203, 204 Motor Vehicles Act 1988 (Breath tests and medical examination procedures).",
    tags: ["traffic", "drunk driving", "breathalyzer", "alcohol", "blood test", "section 185"],
    isSOS: false,
    sosScript: "Officer, I am willing to take the test. Please unseal a fresh, sterile mouthpiece in front of me."
  },
  {
    id: "traffic-towing-occupant",
    category: "traffic",
    title: "Can a towing crane tow your car while you or a passenger is sitting inside?",
    verdict: "STRICTLY ILLEGAL",
    verdictType: "danger",
    lawAct: "Motor Vehicles (Driving) Regulations, 2017 & Municipal Traffic Guidelines",
    newLaw: null,
    oldLaw: null,
    summary: "Under safety guidelines issued across all Indian metro police departments, towing a vehicle while any human or pet is inside is strictly forbidden and constitutes criminal endangerment of human life.",
    whatToDo: [
      "If you arrive before the towing vehicle drives away, the police must unhook your car and issue a spot parking violation challan instead of towing.",
      "Towing charges cannot be levied if the vehicle has not yet been lifted and transported.",
      "If police attempt to tow while you are inside, honk, alert bystanders, and immediately dial 112 to report safety endangerment."
    ],
    landmarkCase: "Standing Orders of Delhi, Mumbai, and Bengaluru Traffic Police on Towing SOPs.",
    tags: ["traffic", "towing", "crane", "parking", "towing charges", "passenger inside", "safety"],
    isSOS: true,
    sosScript: "Under traffic safety SOPs, you cannot tow a vehicle with an occupant inside. Since I am present, please issue the standard parking challan."
  },
  {
    id: "traffic-15-day-rule",
    category: "traffic",
    title: "Forgot your physical documents at home? Do you have time to produce them?",
    verdict: "15-DAY GRACE PERIOD",
    verdictType: "info",
    lawAct: "Rule 139, Central Motor Vehicles Rules, 1989",
    newLaw: null,
    oldLaw: null,
    summary: "If you do not possess your physical Driving License, Registration Certificate, or Insurance on the spot, you are entitled to present them within 15 days to the designated authority instead of paying full heavy missing document penalties.",
    whatToDo: [
      "Inform the officer that under CMV Rule 139 you are entitled to 15 days to produce the original documents at the traffic branch or court.",
      "Show digital verification on DigiLocker/mParivahan instantly to avoid the hassle altogether.",
      "If challaned under Section 130/177, visit the Traffic Superintendent/Virtual Court within 15 days with original documents to cancel or reduce the fine to a nominal fee."
    ],
    landmarkCase: "Central Motor Vehicles (Amendment) Rules, 2018 (Production of license and certificates within 15 days).",
    tags: ["traffic", "forgot license", "15 days", "grace period", "cmv rule 139", "documents"],
    isSOS: false,
    sosScript: "Sir, under Rule 139 of CMV Rules, I have 15 days to produce original documents. Please record this in the notice."
  },
  {
    id: "traffic-record-police",
    category: "traffic",
    title: "Can you video record traffic police officers during vehicle checks?",
    verdict: "LEGAL RIGHT IN PUBLIC",
    verdictType: "success",
    lawAct: "Article 19(1)(a) Constitution & Various High Court Directives",
    newLaw: null,
    oldLaw: null,
    summary: "Recording police officers conducting checks on public roads is legal provided you do not physically obstruct them from performing their official duties. Police officers are public servants operating in public spaces.",
    whatToDo: [
      "Hold your camera or phone without stepping into the officer's personal space or physical path.",
      "Do not shout or touch the officer; simply capture audio and video quietly.",
      "If the officer threatens to charge you with 'obstructing a public servant' (Sec 221 BNS / old Sec 186 IPC), calmly state: 'Recording for personal legal safety in a public street does not constitute physical obstruction.'",
      "Do not delete video footage under police intimidation."
    ],
    landmarkCase: "High Courts of Madras, Kerala, and Delhi upholding citizens' right to record public officials on public duty.",
    tags: ["traffic", "video recording", "phone recording", "public duty", "police harassment", "camera"],
    isSOS: true,
    sosScript: "Under Article 19(1)(a), peaceful video recording in a public place for my own safety does not obstruct official duty."
  },
  {
    id: "traffic-impound-license",
    category: "traffic",
    title: "When can an officer seize or impound your Driving License?",
    verdict: "RESTRICTED TO 5 SPECIFIC OFFENCES",
    verdictType: "warning",
    lawAct: "Section 206(4), Motor Vehicles Act, 1988 (Amended 2019)",
    newLaw: null,
    oldLaw: null,
    summary: "Police cannot arbitrarily seize your Driving License for minor infractions. Under Section 206(4) MVA, physical seizure for license suspension is restricted to: Drunk driving, jumping red lights, over-speeding, driving while using a mobile phone, and overloading passengers/goods.",
    whatToDo: [
      "If stopped for a minor issue (e.g. wrong parking or missing seatbelt), police cannot seize your DL.",
      "If your DL is seized for one of the 5 designated violations, the police officer MUST issue a temporary acknowledgment slip allowing you to drive temporarily.",
      "The DL must be forwarded to the licensing authority (RTO) for formal suspension proceedings."
    ],
    landmarkCase: "Supreme Court Committee on Road Safety directives on Section 206(4) impoundment triggers.",
    tags: ["traffic", "seize license", "impound dl", "section 206", "red light", "mobile while driving"],
    isSOS: false,
    sosScript: "Section 206(4) MVA restricts license impoundment to specific severe violations. Please issue the statutory acknowledgment slip."
  },

  // ==========================================
  // CATEGORY 2: ARRESTED WHILE PROTESTING & PUBLIC ASSEMBLY
  // ==========================================
  {
    id: "protest-article-19",
    category: "protest",
    title: "Is peaceful protesting a constitutional right in India?",
    verdict: "FUNDAMENTAL RIGHT",
    verdictType: "success",
    lawAct: "Article 19(1)(a) & Article 19(1)(b) of the Constitution of India",
    newLaw: null,
    oldLaw: null,
    summary: "Every Indian citizen possesses the fundamental right to assemble peaceably and without arms, and to express their dissent through peaceful assembly, marches, and demonstrations, subject to reasonable public order restrictions under Article 19(3).",
    whatToDo: [
      "Ensure the assembly is non-violent, does not obstruct emergency vehicles (ambulances/fire engines), and adheres to peaceful methods.",
      "Whenever possible, designate organizers to liaise with local administration for prior assembly permissions/intimations.",
      "If police issue dispersal orders, ask for the legal grounds and whether an official Executive Magistrate order has been passed.",
      "Document everything peacefully; recording police in public spaces during public duty is constitutionally permissible."
    ],
    landmarkCase: "Supreme Court in Ramlila Maidan Incident (2012) 5 SCC 1 & Mazdoor Kisan Shakti Sangathan (MKSS) v. Union of India (2018).",
    tags: ["protest", "article 19", "peaceful protest", "fundamental right", "dissent", "constitution", "assembly"],
    isSOS: false,
    sosScript: "Under Article 19(1)(b) of the Constitution, citizens have a fundamental right to assemble peaceably without arms."
  },
  {
    id: "protest-section-144",
    category: "protest",
    title: "How does Section 144 / Section 163 BNSS work during protests?",
    verdict: "EXECUTIVE RESTRICTION",
    verdictType: "warning",
    lawAct: "Section 163 of Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023",
    newLaw: "Section 163 BNSS",
    oldLaw: "Section 144 CrPC",
    summary: "Section 163 BNSS (formerly Section 144 CrPC) empowers an Executive Magistrate to prohibit the assembly of 4 or more persons in an urgent case of nuisance or apprehended danger. It CANNOT be used routinely or permanently to suppress legitimate democratic dissent.",
    whatToDo: [
      "Check if an official written gazette order has been passed by the District Magistrate/Sub-Divisional Magistrate stating specific geographic boundaries.",
      "The Supreme Court ruled that Section 144 cannot be used as a repetitive or blanket tool to stifle democratic opposition without concrete evidence of impending violence.",
      "If caught in an area under Sec 163 BNSS, do not resist violently. Peaceful non-compliance can lead to detention under Sec 223 BNS (old Sec 188 IPC - disobedience to public order), which is bailable."
    ],
    landmarkCase: "Anuradha Bhasin v. Union of India (2020) 3 SCC 637 & Madhu Limaye v. SDM Monghyr (1970).",
    tags: ["protest", "section 144", "section 163 bnss", "unlawful assembly", "curfew", "magistrate"],
    isSOS: true,
    sosScript: "Has an official written order under Section 163 BNSS been promulgated with specific geographic coordinates for this area?"
  },
  {
    id: "protest-phone-seizure",
    category: "protest",
    title: "Can police arbitrarily seize your smartphone or force you to unlock it?",
    verdict: "PROTECTED BY PRIVACY & LAW",
    verdictType: "danger",
    lawAct: "Article 20(3) (Self-Incrimination), Article 21 & Section 105 BNSS (old Sec 102 CrPC)",
    newLaw: "Section 105 BNSS",
    oldLaw: "Section 102 CrPC",
    summary: "Police cannot casually seize your mobile phone or demand your biometric/password passcode during a protest without an official seizure memo stating reasonable suspicion that the device was used in a specific cognizable criminal offence.",
    whatToDo: [
      "Article 20(3) protects against self-incrimination: You cannot be compelled to provide passwords to incriminate yourself.",
      "If the device is seized, demand a written Seizure Memo (Panchnama) signed by independent witnesses on the spot.",
      "The seizure memo must record the exact IMEI number, phone model, condition, and timestamp.",
      "Under Section 105 BNSS, search and seizure procedures must now ideally be audio-video recorded by police."
    ],
    landmarkCase: "Justice K.S. Puttaswamy v. Union of India (2017) (Right to Privacy) & Virendra Khanna v. State of Karnataka (Karnataka HC 2021).",
    tags: ["protest", "smartphone", "phone seizure", "passcode", "privacy", "panchnama", "article 20(3)"],
    isSOS: true,
    sosScript: "Under Article 20(3) and Section 105 BNSS, I cannot be compelled to unlock my phone without a written warrant or formal seizure memo."
  },
  {
    id: "protest-preventive-detention",
    category: "protest",
    title: "What are your rights if detained preventively during a demonstration?",
    verdict: "MANDATORY PROTECTIONS",
    verdictType: "warning",
    lawAct: "Section 170 & 172 BNSS (old Sec 151 CrPC) & Article 22",
    newLaw: "Section 170 BNSS",
    oldLaw: "Section 151 CrPC",
    summary: "Preventive detention allows police to detain a person only if there is credible apprehension that they intend to commit a cognizable offence. Detention CANNOT exceed 24 hours without producing before a Magistrate, and detainees must be treated humanely.",
    whatToDo: [
      "Detention is NOT a conviction. You must be accommodated in a safe facility, not a criminal lockup, if detained preventively.",
      "Police must enter your name in the General Diary (GD) / Station Diary immediately upon arrival.",
      "You have an immediate right to make a phone call to your family or a lawyer.",
      "You must be released at the end of the day or produced before a Magistrate within 24 hours."
    ],
    landmarkCase: "Ahmed Noor Mohamad Bhatti v. State of Gujarat (2005) 3 SCC 747 on Section 151 CrPC detention limitations.",
    tags: ["protest", "detention", "preventive arrest", "section 151", "section 170 bnss", "bus detention"],
    isSOS: true,
    sosScript: "Under Section 170 BNSS and Article 22, my preventive detention cannot exceed 24 hours. Please log my entry into the General Diary."
  },
  {
    id: "protest-lathicharge-protocol",
    category: "protest",
    title: "What is the mandatory police protocol before a Lathi Charge or tear gas?",
    verdict: "STRICT PROGRESSIVE FORCE PROTOCOL",
    verdictType: "warning",
    lawAct: "Section 148-151 BNSS (old Sec 129-132 CrPC) & Police Manuals",
    newLaw: "Section 148 BNSS",
    oldLaw: "Section 129 CrPC",
    summary: "Police cannot immediately jump to baton charges or lathi charge. The law mandates progressive de-escalation: 1) Verbal warning through loudspeakers, 2) Clear warning to disperse, 3) Water cannons/tear gas, 4) Lathi charge directed strictly below the waist, under supervision of an Executive Magistrate.",
    whatToDo: [
      "Move away immediately if a formal dispersal warning is broadcasted over megaphone.",
      "Police are strictly barred from targeting strikes to the head, face, or chest.",
      "If you sustain injuries, demand an immediate medical MLC (Medico-Legal Case) at the nearest government hospital; this is vital legal evidence for rights violation petitions."
    ],
    landmarkCase: "Supreme Court in Ramlila Maidan incident (2012) on excessive police force and nighttime dispersals.",
    tags: ["protest", "lathi charge", "tear gas", "water cannon", "police brutality", "dispersal", "magistrate"],
    isSOS: false,
    sosScript: "Under BNSS Section 148, force must be preceded by formal warnings to disperse, directed by an Executive Magistrate."
  },
  {
    id: "protest-student-rights",
    category: "protest",
    title: "Can police enter a university or college campus without permission to arrest students?",
    verdict: "RESTRICTED PROTOCOL",
    verdictType: "warning",
    lawAct: "University Statutes & State Police Manuals",
    newLaw: null,
    oldLaw: null,
    summary: "Standard law enforcement convention and university statutes require police to obtain permission from the Vice Chancellor, Proctor, or University Registrar before entering campus premises, except in hot pursuit of violent armed felons.",
    whatToDo: [
      "If police enter campus during a student rally, students should immediately alert the University Proctor and Student Union representatives.",
      "If any student is a minor (under 18), they CANNOT be placed in a standard police lockup under the Juvenile Justice Act, 2015.",
      "Demand that the University Legal Aid Cell or Proctorial board representative accompany detained students to the police station."
    ],
    landmarkCase: "Delhi High Court directions following Jamia Millia Islamia campus incident (2019) regarding law enforcement inside educational institutions.",
    tags: ["protest", "students", "campus", "university", "lockup", "juvenile", "police on campus"],
    isSOS: false,
    sosScript: "Campus regulations require coordination with the Proctorial board. Please allow our faculty and legal counsel to be informed."
  },
  {
    id: "protest-gyanesh-kumar-sc-2026",
    category: "protest",
    title: "What did the Supreme Court rule regarding mass detentions during the Gyanesh Kumar (CJP) protests?",
    verdict: "BINDING APEX COURT PROTECTION",
    verdictType: "success",
    lawAct: "Supreme Court Directives (Bench of Justices Joymalya Bagchi & V. Mohana, October 2026)",
    newLaw: "Proportionality Mandate under BNSS Section 163 & 170",
    oldLaw: null,
    summary: "In landmark October 2026 directives concerning protests by the Cockroach Janta Party (CJP), student unions, and opposition groups against Chief Election Commissioner Gyanesh Kumar over the Special Intensive Revision (SIR) voter roll controversy, the Supreme Court ruled that authorities cannot arbitrarily detain peaceful protesters, must immediately resume halted public transit (Delhi Metro/rail), restore internet connectivity, and remove Section 163 BNSS barricades blocking court access.",
    whatToDo: [
      "If detained while participating peacefully, cite the Supreme Court October 2026 ruling (Justices Bagchi & Mohana): Peaceful protesters cannot be illegally detained.",
      "Police cannot use crowd-control pretexts to shut down entire transit systems or suspend fundamental rights.",
      "If police invoke Section 163 BNSS (old 144 CrPC), remember the Supreme Court clarified that regulation of public order cannot amount to outright prohibition of peaceful assembly.",
      "Carry legal aid helpline numbers (NALSA 15100 or designated CJP legal volunteer hotlines)."
    ],
    landmarkCase: "Supreme Court of India Directives in Gyanesh Kumar / ECI Protest Petitions (Bench of Justices Joymalya Bagchi & V. Mohana, October 2026).",
    tags: ["gyanesh kumar", "cjp", "protest", "supreme court 2026", "bagchi bench", "special intensive revision", "sir", "metro shutdown", "cockroach janta party", "election commission", "cec"],
    isSOS: true,
    sosScript: "Under the October 2026 Supreme Court directives (Justices Bagchi & Mohana), peaceful assembly is protected and arbitrary detention of peaceful citizens is illegal."
  },
  {
    id: "protest-transit-metro-shutdown",
    category: "protest",
    title: "Can police shut down metro stations or public transit to stop citizens from joining protests?",
    verdict: "UNCONSTITUTIONAL OVERREACH",
    verdictType: "danger",
    lawAct: "Article 19(1)(d) (Freedom of Movement), Article 21 & Supreme Court Directives (Oct 2026)",
    newLaw: null,
    oldLaw: null,
    summary: "Closing dozens of metro stations, sealing railway platforms, or diverting public buses solely to prevent citizens from gathering for a peaceful demonstration violates Article 19(1)(d) (Freedom of Movement) and was explicitly reprimanded by the Supreme Court in the 2026 Gyanesh Kumar protest petitions, where authorities were ordered to resume normal metro operations immediately.",
    whatToDo: [
      "If transit is blocked, commuters and protesters have the right to seek alternative public routes without police criminalizing their presence.",
      "Transit shutdowns causing public paralysis violate the doctrine of proportionality.",
      "Citizens stranded by arbitrary metro closures can report service denial and submit evidence in ongoing public interest litigations."
    ],
    landmarkCase: "Supreme Court Directives to Delhi Metro Rail Corporation (DMRC) & Police (October 2026) ordering immediate resumption of transit.",
    tags: ["metro shutdown", "delhi metro", "dmrc", "transit closure", "gyanesh kumar", "cjp", "freedom of movement", "article 19(1)(d)"],
    isSOS: false,
    sosScript: "Under the Supreme Court October 2026 order, public transit cannot be shut down arbitrarily to thwart peaceful citizens."
  },
  {
    id: "protest-bus-detention-rights",
    category: "protest",
    title: "What are your legal rights if police force you into detention buses during protests ('Bus Detentions')?",
    verdict: "MANDATORY CUSTODIAL SAFEGUARDS",
    verdictType: "warning",
    lawAct: "Section 170 & 172 BNSS (Preventive Custody), Article 21 & D.K. Basu Guidelines",
    newLaw: "Section 170 BNSS",
    oldLaw: "Section 151 CrPC",
    summary: "Police frequently load protestors into DTC or police buses and drive them to border stations (such as Bawana, Narela) to clear protest sites. Under law, a moving bus is legally a place of custody. Police CANNOT keep detainees on buses indefinitely, must provide water, washroom breaks, and must either formally release detainees before sunset or produce them before a Magistrate.",
    whatToDo: [
      "Demand the destination police station name from the escorting Sub-Inspector immediately.",
      "Keep your phone active and send your live location and bus registration number to legal aid groups, friends, or family.",
      "Ask officers: 'Is this preventive detention under Section 170 BNSS? Please note our details in the General Diary.'",
      "Police cannot withhold food, water, or medication while holding citizens in buses."
    ],
    landmarkCase: "D.K. Basu guidelines applied to transit custody & Section 170 BNSS statutory maximum 24-hour detention limit.",
    tags: ["bus detention", "police bus", "preventive detention", "dtc bus", "gyanesh kumar", "cjp", "bawana", "lockup on wheels", "transit custody"],
    isSOS: true,
    sosScript: "Officer, detention inside a bus is legally custodial detention. Please inform us of our destination station and allow us to inform our lawyers."
  },
  {
    id: "protest-cec-eci-accountability",
    category: "protest",
    title: "Can citizens legally demonstrate against the Chief Election Commissioner (CEC) and demand resignation?",
    verdict: "ABSOLUTE DEMOCRATIC RIGHT",
    verdictType: "success",
    lawAct: "Article 19(1)(a), Article 19(1)(b), Article 324 Constitution & RPA 1950",
    newLaw: null,
    oldLaw: null,
    summary: "The Election Commission of India (ECI) is a constitutional body accountable to the republic. Demonstrating peacefully against the Chief Election Commissioner (such as the CJP movement demanding Gyanesh Kumar's resignation) and challenging the Special Intensive Revision (SIR) of voter lists is protected free speech. Questioning electoral integrity or voter roll deletions does NOT constitute an anti-national act.",
    whatToDo: [
      "Carrying placards, chanting peaceful slogans, and distributing flyers criticizing the CEC or the SIR exercise is protected speech.",
      "Citizens whose names were deleted during the Special Intensive Revision (SIR) have the statutory right under Section 24 of the Representation of the People Act, 1950 to file an appeal before the District Magistrate/CEO.",
      "Delegations have the right to submit memorandums to Nirvachan Sadan or Chief Electoral Officers (CEOs) peacefully."
    ],
    landmarkCase: "Anoop Baranwal v. Union of India (2023) (ECI independence & democratic accountability) & Supreme Court October 2026 Directives.",
    tags: ["gyanesh kumar", "cec", "election commission", "eci", "cjp", "resignation", "vote theft", "sir", "special intensive revision", "voter deletion"],
    isSOS: false,
    sosScript: "Under Article 19(1)(a) and the Anoop Baranwal ruling, peaceful critique of the Election Commission and demands for accountability are fully constitutional."
  },
  {
    id: "protest-freedom-park-designated-sites",
    category: "protest",
    title: "What are your rights when assembling at designated protest venues like Freedom Park (Bengaluru) or Jantar Mantar?",
    verdict: "PROTECTED PROTEST VENUES",
    verdictType: "success",
    lawAct: "Supreme Court in Mazdoor Kisan Shakti Sangathan (MKSS) v. UOI (2018) & Karnataka HC Directives",
    newLaw: null,
    oldLaw: null,
    summary: "Venues like Freedom Park in Bengaluru and Jantar Mantar in New Delhi are legally recognized designated protest sites. Gatherings here (such as CJP's mass rallies attended by Prakash Raj and Dhruv Rathee) cannot be dispersed arbitrarily by police if peaceful and organized within designated hours.",
    whatToDo: [
      "Ensure event intimations/permissions are filed with the local police commissionerate.",
      "Police cannot confiscate megaphones, banners, or sound equipment if within prescribed municipal decibel limits and daytime hours.",
      "Citizens attending speeches or participating in solidarity at Freedom Park have full protection against preventive arrest while inside the designated venue."
    ],
    landmarkCase: "Mazdoor Kisan Shakti Sangathan (MKSS) v. Union of India (2018) 17 SCC 324 (Establishing designated protest spaces as constitutional safety valves).",
    tags: ["freedom park", "bengaluru", "jantar mantar", "cjp", "prakash raj", "dhruv rathee", "protest venue", "designated site"],
    isSOS: false,
    sosScript: "Under the Supreme Court's MKSS ruling, Freedom Park is a designated protest space and peaceful assemblies within it are constitutionally protected."
  },
  {
    id: "protest-sec163-court-access",
    category: "protest",
    title: "Can police use Section 163 BNSS (prohibitory orders) to block citizens from accessing the Supreme Court or High Courts?",
    verdict: "STRICTLY UNLAWFUL / STRUCK DOWN BY SC",
    verdictType: "danger",
    lawAct: "Supreme Court Directives (October 2026) & Article 32 Constitution",
    newLaw: "Section 163 BNSS",
    oldLaw: "Section 144 CrPC",
    summary: "During the October 2026 protests, authorities erected Section 163 BNSS prohibitory signage and barricades around the Supreme Court of India. The Apex Court bench ordered the immediate removal of such boards, ruling that executive prohibitory orders cannot block citizens, lawyers, or petitioners from entering courts to seek constitutional justice under Article 32.",
    whatToDo: [
      "Police cannot cite Section 163 BNSS or Section 144 to prevent you from entering a court complex, filing a petition, or meeting your advocate.",
      "Article 32 (Right to Constitutional Remedies) is the 'heart and soul' of the Constitution and cannot be extinguished by an Executive Magistrate order.",
      "If stopped at a court perimeter, state clearly: 'The Supreme Court in October 2026 ordered unhindered citizen access to judicial premises.'"
    ],
    landmarkCase: "Supreme Court Bench (Justices Joymalya Bagchi & V. Mohana, October 2026) directing removal of Section 163 BNSS boards near apex court.",
    tags: ["section 163 bnss", "section 144", "supreme court access", "court barrier", "gyanesh kumar", "cjp", "article 32"],
    isSOS: true,
    sosScript: "The Supreme Court in October 2026 strictly ruled that Section 163 BNSS cannot be used to block citizens from accessing court complexes."
  },

  // ==========================================
  // CATEGORY 3: ARRESTS & GENERAL CRIMINAL PROCEDURE
  // ==========================================
  {
    id: "arrest-dk-basu",
    category: "arrest",
    title: "What are the 11 Landmark D.K. Basu Guidelines during any police arrest?",
    verdict: "ABSOLUTE CONSTITUTIONAL MANDATE",
    verdictType: "success",
    lawAct: "Supreme Court of India (D.K. Basu v. State of West Bengal, 1997) & Section 36-58 BNSS",
    newLaw: "Section 36, 38, 47, 53 BNSS",
    oldLaw: "Section 41B, 41D, 50A, 54 CrPC",
    summary: "The Supreme Court laid down binding guidelines to prevent custodial torture and illegal arrests: visible officer identification, mandatory arrest memo, informing a relative, legal counsel access, medical examination, and 24-hr magistrate production.",
    whatToDo: [
      "1. Clear Identification: The arresting officer must wear a clear name tag with designation.",
      "2. Arrest Memo: Must be prepared on the spot, specifying time and date, signed by at least one witness and the arrestee.",
      "3. Inform Relative: Police must notify your designated family member or friend within 8-12 hours.",
      "4. Inspection Memo: Note down any pre-existing injuries on your body before entering custody.",
      "5. Medical Exam: Mandatory medical checkup by an authorized medical officer every 48 hours in custody."
    ],
    landmarkCase: "D.K. Basu v. State of West Bengal (1997) 1 SCC 416 (Custodial violence and rights of arrestees).",
    tags: ["arrest", "dk basu", "arrest memo", "medical exam", "lockup", "rights", "torture prevention"],
    isSOS: true,
    sosScript: "Under the Supreme Court D.K. Basu guidelines and Section 36 BNSS, please prepare my arrest memo and allow me to notify my family."
  },
  {
    id: "arrest-arnesh-kumar",
    category: "arrest",
    title: "Can police arrest you immediately for offences with punishment under 7 years?",
    verdict: "NO AUTOMATIC ARREST",
    verdictType: "danger",
    lawAct: "Section 35(3) BNSS (old Section 41A CrPC) & Arnesh Kumar Guidelines",
    newLaw: "Section 35(3) BNSS",
    oldLaw: "Section 41A CrPC",
    summary: "For any offence where the maximum punishment is imprisonment of 7 years or less, arrest is NOT automatic. Police MUST first serve a Section 35(3) BNSS notice directing you to appear for questioning, unless specific flight-risk/evidence-tampering reasons are recorded in writing.",
    whatToDo: [
      "Ask the investigating officer: 'Has a Section 35(3) BNSS / 41A notice been issued for this allegation?'",
      "If you receive a Notice to Appear, you must comply and cooperate with the investigation. As long as you comply, you cannot be arrested without magistrate permission.",
      "Police officers who effect arbitrary arrests without following Arnesh Kumar guidelines face departmental inquiry and contempt of court proceedings."
    ],
    landmarkCase: "Arnesh Kumar v. State of Bihar (2014) 8 SCC 273 (Reiterated in Satender Kumar Antil v. CBI, 2022).",
    tags: ["arrest", "arnesh kumar", "notice to appear", "section 41a", "section 35(3) bnss", "bailable"],
    isSOS: false,
    sosScript: "Under Arnesh Kumar v. State of Bihar and Section 35(3) BNSS, a notice of appearance is mandatory before any arrest for offences under 7 years."
  },
  {
    id: "arrest-24-hours",
    category: "arrest",
    title: "Can police detain you for more than 24 hours without going to court?",
    verdict: "STRICT MAXIMUM 24 HOURS",
    verdictType: "danger",
    lawAct: "Article 22(2) Constitution & Section 58 BNSS (old Section 57 CrPC)",
    newLaw: "Section 58 BNSS",
    oldLaw: "Section 57 CrPC",
    summary: "No person arrested by police can be detained in custody for more than 24 hours without being physically produced before the nearest Judicial Magistrate (excluding travel time). Detention beyond 24 hours without a remand order is illegal confinement.",
    whatToDo: [
      "Calculate the exact timestamp of your arrest as recorded in the Arrest Memo or General Diary.",
      "If 24 hours are approaching and you are not being taken to a Magistrate, insist on contacting your lawyer.",
      "Your lawyer or family can immediately file a Habeas Corpus petition before the High Court or a petition before the Chief Judicial Magistrate for illegal confinement."
    ],
    landmarkCase: "Article 22(2) Constitution of India & State of Punjab v. Ajaib Singh (1953 AIR 10).",
    tags: ["arrest", "24 hours", "magistrate", "remand", "habeas corpus", "illegal detention", "police custody"],
    isSOS: true,
    sosScript: "Under Article 22(2) and Section 58 BNSS, detaining anyone beyond 24 hours without producing before a Judicial Magistrate is illegal confinement."
  },
  {
    id: "arrest-handcuffing",
    category: "arrest",
    title: "Can police routinely put handcuffs on an accused person during arrest?",
    verdict: "STRICTLY RESTRICTED",
    verdictType: "warning",
    lawAct: "Supreme Court Guidelines & Section 43(3) BNSS",
    newLaw: "Section 43(3) BNSS",
    oldLaw: "Judicial Precedents (Prem Shankar Shukla)",
    summary: "The Supreme Court has repeatedly held that routine handcuffing is dehumanizing and violates Article 21. Handcuffs can only be used if there is recorded, clear evidence that the accused is exceptionally violent, prone to suicide, or an escape risk, and magistrate permission is required.",
    whatToDo: [
      "Politely remind the officer: 'Supreme Court guidelines forbid routine handcuffing unless special risk is recorded.'",
      "If handcuffs are used unjustly, report it to the Magistrate during your initial production; magistrates take serious note of unauthorized handcuffing.",
      "Under Section 43(3) BNSS, handcuffing is restricted primarily to heinous/repeat/organized crimes."
    ],
    landmarkCase: "Prem Shankar Shukla v. Delhi Administration (1980) & Citizens for Democracy v. State of Assam (1995).",
    tags: ["arrest", "handcuffs", "dignity", "article 21", "prem shankar shukla", "human rights"],
    isSOS: false,
    sosScript: "As per the Supreme Court ruling in Prem Shankar Shukla, handcuffing without a specific magistrate order or proven escape risk is illegal."
  },
  {
    id: "arrest-zero-fir",
    category: "arrest",
    title: "Can a police station refuse to register your FIR citing 'Jurisdiction'?",
    verdict: "MANDATORY ZERO FIR",
    verdictType: "success",
    lawAct: "Section 173(1) BNSS (old Section 154 CrPC) & Ministry of Home Affairs Advisory",
    newLaw: "Section 173(1) BNSS",
    oldLaw: "Section 154 CrPC",
    summary: "A police station CANNOT refuse to register a complaint of a cognizable offence simply because the incident occurred outside their territorial jurisdiction. They are legally mandated to register a 'Zero FIR' and immediately transfer it to the concerned station.",
    whatToDo: [
      "If an officer says: 'This is not our police station area, go there', tell them: 'Please register a Zero FIR as mandated by law.'",
      "A Zero FIR is numbered as serial '0' and initiated immediately without delay to preserve critical evidence.",
      "If the station still refuses, Section 173(4) BNSS allows you to send the complaint in writing or by email to the Superintendent of Police (SP) or Commissioner.",
      "Refusal to register an FIR in cases of serious violence carries criminal penalties against police officers under Section 199 BNS (old Sec 166A IPC)."
    ],
    landmarkCase: "Lalita Kumari v. Govt of UP (2014) 2 SCC 1 & MHA Circular No. 15011/35/2013-SC/ST-W.",
    tags: ["arrest", "zero fir", "fir refusal", "jurisdiction", "cognizable", "lalita kumari", "complaint"],
    isSOS: true,
    sosScript: "Officer, under Lalita Kumari v. Govt of UP and Section 173 BNSS, you are legally bound to register a Zero FIR regardless of territorial jurisdiction."
  },
  {
    id: "arrest-right-to-silence",
    category: "arrest",
    title: "Do you have the right to remain silent during police interrogation?",
    verdict: "ABSOLUTE CONSTITUTIONAL RIGHT",
    verdictType: "success",
    lawAct: "Article 20(3) of Constitution of India & Bharatiya Sakshya Adhiniyam, 2023",
    newLaw: "Section 22 BSA 2023",
    oldLaw: "Section 25 Indian Evidence Act",
    summary: "No person accused of an offence can be compelled to be a witness against themselves. You have the full right to decline to answer questions that might incriminate you. Confessions made to police officers in custody are inadmissible as evidence in court.",
    whatToDo: [
      "You must provide basic identification (name, address, age), but you have the legal right to remain silent regarding questions about the alleged crime.",
      "State clearly: 'I prefer to speak with my legal advocate before answering any questions.'",
      "Never sign blank papers or confession statements under pressure; confessions signed before police hold zero evidentiary weight in court under Section 22 BSA."
    ],
    landmarkCase: "Nandini Satpathy v. P.L. Dani (1978) 2 SCC 424 & Selvi v. State of Karnataka (2010) (Narco-analysis and self-incrimination).",
    tags: ["arrest", "right to silence", "interrogation", "article 20(3)", "confession", "selvi case", "lawyer"],
    isSOS: true,
    sosScript: "Under Article 20(3) of the Constitution and Nandini Satpathy v. Dani, I have the right to remain silent until I consult my advocate."
  },
  {
    id: "arrest-free-legal-aid",
    category: "arrest",
    title: "Are you entitled to a free lawyer if you cannot afford one upon arrest?",
    verdict: "CONSTITUTIONAL MANDATE",
    verdictType: "success",
    lawAct: "Article 39A Constitution & Section 340 BNSS (old Section 304 CrPC)",
    newLaw: "Section 340 BNSS",
    oldLaw: "Section 304 CrPC",
    summary: "Under Article 39A and Section 340 BNSS, the state is under a constitutional obligation to provide free legal representation to any accused person who cannot afford an advocate, right from the moment of first remand before the Magistrate.",
    whatToDo: [
      "When produced before the Judicial Magistrate, state immediately: 'Sir/Madam, I cannot afford a private lawyer; please appoint a Legal Aid Defence Counsel (LADC) through NALSA/DLSA.'",
      "The Magistrate is legally obligated to inform the accused of this right. Failure to provide legal aid vitiates the remand process.",
      "You can also call the National Legal Services Authority helpline at 15100."
    ],
    landmarkCase: "Khatri (II) v. State of Bihar (1981) 1 SCC 627 & Suk Das v. Union Territory of Arunachal Pradesh (1986).",
    tags: ["arrest", "free lawyer", "legal aid", "nalsa", "article 39a", "magistrate remand"],
    isSOS: false,
    sosScript: "Your Honour, under Article 39A and Section 340 BNSS, I request the appointment of a free Legal Aid Defence Counsel."
  },
  {
    id: "arrest-anticipatory-bail",
    category: "arrest",
    title: "What is Anticipatory Bail and how can you protect yourself from false arrest?",
    verdict: "JUDICIAL PRE-ARREST PROTECTION",
    verdictType: "info",
    lawAct: "Section 482 BNSS, 2023 (old Section 438 CrPC)",
    newLaw: "Section 482 BNSS",
    oldLaw: "Section 438 CrPC",
    summary: "If you have reasonable apprehension that you may be arrested on false or fabricated allegations in a non-bailable offence, you can apply for Anticipatory Bail before the Sessions Court or High Court. If granted, police cannot arrest you in custody upon registration of the FIR.",
    whatToDo: [
      "Approach an advocate immediately upon learning of a false threat, complaint, or impending FIR.",
      "File an application under Section 482 BNSS demonstrating absence of criminal intent and readiness to cooperate with investigation.",
      "The Supreme Court ruled that Anticipatory Bail can continue even until the conclusion of the trial unless revoked by the court for violation of conditions."
    ],
    landmarkCase: "Sushila Aggarwal v. State (NCT of Delhi) (2020) 5 SCC 1 (Constitution Bench on Anticipatory Bail duration).",
    tags: ["arrest", "anticipatory bail", "section 482 bnss", "pre-arrest bail", "sessions court", "false fir"],
    isSOS: false,
    sosScript: "Under Section 482 BNSS, citizens fearing false arrest have the right to seek pre-arrest protection from Sessions Court."
  },

  // ==========================================
  // CATEGORY 4: RIGHTS OF WOMEN, CHILDREN & SENIORS
  // ==========================================
  {
    id: "women-sunset-sunrise",
    category: "women_child",
    title: "Can a woman be arrested after sunset and before sunrise?",
    verdict: "STRICT BAN WITH JUDICIAL EXCEPTION",
    verdictType: "danger",
    lawAct: "Section 43(5) BNSS, 2023 (old Section 46(4) CrPC)",
    newLaw: "Section 43(5) BNSS",
    oldLaw: "Section 46(4) CrPC",
    summary: "No woman can be arrested after sunset and before sunrise (between 6:00 PM and 6:00 AM). In exceptional cases involving grave emergency, an arrest can ONLY be carried out by a woman police officer after obtaining prior written permission from a Judicial Magistrate First Class.",
    whatToDo: [
      "Politely refuse to accompany male officers after sunset.",
      "Demand to see the signed, written prior authorization order from the Judicial Magistrate First Class specifically permitting night arrest.",
      "If officers attempt force, dial 112 immediately and alert neighbors and relatives.",
      "Search of a woman can only be conducted by another woman with strict regard to decency."
    ],
    landmarkCase: "Christian Community Welfare Council of India v. Govt of Maharashtra (2003) & Section 43(5) BNSS.",
    tags: ["women", "night arrest", "sunset", "sunrise", "section 46(4)", "section 43(5) bnss", "female officer"],
    isSOS: true,
    sosScript: "Under Section 43(5) of BNSS, 2023, no woman can be arrested after sunset without prior written permission from a Judicial Magistrate."
  },
  {
    id: "women-virtual-fir",
    category: "women_child",
    title: "Can a woman report crimes via email/registered post if unable to visit a station?",
    verdict: "PERMITTED BY LAW",
    verdictType: "success",
    lawAct: "Delhi Police Standing Order / Ministry of Home Affairs Directives & Section 173 BNSS",
    newLaw: "Section 173 BNSS (e-FIR)",
    oldLaw: "MHA Guidelines 2013",
    summary: "A woman has the right to file a complaint via email or registered post if she cannot physically visit a police station. Under Section 173 BNSS, electronic FIR (e-FIR) is now formally recognized across India.",
    whatToDo: [
      "Send a detailed, signed complaint via registered email or speed post to the Senior Superintendent of Police (SSP) or Commissioner.",
      "Under Section 173 BNSS, if information is given electronically, it must be signed within 3 days by the informant.",
      "In sexual offence cases, the statement must be recorded by a woman police officer at the victim's residence or a place of her choice."
    ],
    landmarkCase: "State of Punjab v. Gurmit Singh (1996) on victim protection and dignified statement recording procedures.",
    tags: ["women", "e-fir", "email complaint", "women safety", "posh", "zero fir"],
    isSOS: false,
    sosScript: "Under Section 173 BNSS, electronic complaints and home recordings by female officers are statutorily recognized."
  },
  {
    id: "women-posh-act",
    category: "women_child",
    title: "What are your rights under POSH at the workplace?",
    verdict: "STATUTORY PROTECTION",
    verdictType: "success",
    lawAct: "Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013",
    newLaw: null,
    oldLaw: null,
    summary: "Every organization with 10 or more employees MUST establish an Internal Complaints Committee (ICC) headed by a senior woman. Women have 3 months to file a complaint, and the committee must conclude inquiry within 90 days with strict confidentiality.",
    whatToDo: [
      "File a written complaint to your organization's ICC within 3 months of the incident (extendable by another 3 months upon reasonable grounds).",
      "During inquiry, you can request interim relief such as transfer of yourself or the respondent, or up to 3 months paid leave.",
      "The identity of the complainant and witnesses CANNOT be disclosed to the public or press (penalty up to ₹5,000 for breach of privacy).",
      "If the employer fails to constitute an ICC, they face a ₹50,000 statutory fine and license cancellation for repeat violations."
    ],
    landmarkCase: "Vishaka v. State of Rajasthan (1997) 6 SCC 241 & POSH Act Rules 2013.",
    tags: ["women", "posh", "workplace", "harassment", "internal complaints committee", "icc"],
    isSOS: false,
    sosScript: "Under the POSH Act 2013, the organization is legally mandated to refer this to the Internal Committee with strict confidentiality."
  },
  {
    id: "women-domestic-violence",
    category: "women_child",
    title: "Can a woman be thrown out of her matrimonial home during domestic disputes?",
    verdict: "PROTECTED RIGHT TO RESIDE",
    verdictType: "success",
    lawAct: "Protection of Women from Domestic Violence Act, 2005 (Section 17 & 19)",
    newLaw: null,
    oldLaw: null,
    summary: "Under Section 17 of the DV Act, every woman in a domestic relationship has the right to reside in the 'shared household', irrespective of whether she has any legal right, title, or beneficial interest in the property. In-laws or husbands cannot dispossess or lock her out.",
    whatToDo: [
      "Approach the Protection Officer appointed in your district or file directly before the Judicial Magistrate.",
      "The Magistrate can issue an immediate interim Residence Order under Section 19 preventing eviction, or ordering the respondent to secure alternative accommodation.",
      "Dial Women Helpline 1091 or 181 for emergency intervention."
    ],
    landmarkCase: "Satish Chander Ahuja v. Sneha Ahuja (2020 SC) & Prabha Tyagi v. Kamlesh Devi (2022 SC).",
    tags: ["women", "domestic violence", "dv act", "shared household", "residence order", "protection officer"],
    isSOS: false,
    sosScript: "Under Section 17 of the DV Act 2005, a woman cannot be dispossessed from the shared household without due court process."
  },
  {
    id: "senior-citizens-act",
    category: "women_child",
    title: "Can senior citizens reclaim property gifted to children who neglect them?",
    verdict: "STATUTORY RIGHT TO REVOKE",
    verdictType: "success",
    lawAct: "Maintenance and Welfare of Parents and Senior Citizens Act, 2007 (Section 23)",
    newLaw: null,
    oldLaw: null,
    summary: "Under Section 23 of the Senior Citizens Act, if a parent transfers property as a gift or subject to the condition that the child provides basic amenities, and the child subsequently neglects or abuses them, the Maintenance Tribunal has the power to declare the transfer VOID.",
    whatToDo: [
      "Approach the Maintenance Tribunal presided by the Sub-Divisional Magistrate (SDM) in your district.",
      "File an application for cancellation of the transfer deed and an order for monthly maintenance (up to ₹10,000+).",
      "Lawyers are not required; senior citizens can present their grievance directly or through an authorized welfare officer.",
      "The Tribunal must dispose of the application within 90 days."
    ],
    landmarkCase: "Supreme Court in S. Vanitha v. Deputy Commissioner (2020) and various High Court rulings upholding Section 23 clawback.",
    tags: ["seniors", "parents", "senior citizens act", "gift deed", "revocation", "maintenance tribunal", "elderly"],
    isSOS: false,
    sosScript: "Under Section 23 of the Senior Citizens Act 2007, property transfers can be declared void by the Tribunal if basic care is denied."
  },

  // ==========================================
  // CATEGORY 5: REAL ESTATE, RENT & HOUSING
  // ==========================================
  {
    id: "realestate-rera-delay",
    category: "real_estate",
    title: "What compensation are you entitled to if a builder delays flat possession?",
    verdict: "MONTHLY INTEREST OR FULL REFUND",
    verdictType: "success",
    lawAct: "Section 18, Real Estate (Regulation and Development) Act, 2016 (RERA)",
    newLaw: null,
    oldLaw: null,
    summary: "If a builder fails to complete or give possession of an apartment by the date specified in the agreement, the buyer has the absolute right to either withdraw and get 100% refund with interest (SBI MCLR + 2%), or stay in the project and receive monthly interest for every month of delay.",
    whatToDo: [
      "Check your registered Agreement for Sale for the agreed possession date including the grace period.",
      "File a complaint on your state's online RERA portal (e.g. MahaRERA, HRERA, UP-RERA, K-RERA) under Section 18.",
      "The builder cannot force you into unilateral cancellation or deduct arbitrary forfeiture charges.",
      "The statutory interest rate is typically SBI Highest Marginal Cost of Lending Rate (MCLR) + 2% per annum."
    ],
    landmarkCase: "Imperia Structures Ltd v. Anil Patni (2020) & Newtech Promoters and Developers v. State of UP (2021 SC).",
    tags: ["real estate", "rera", "builder delay", "possession", "flat refund", "interest", "homebuyer"],
    isSOS: false,
    sosScript: "Under Section 18 of RERA Act 2016, buyers are legally entitled to monthly interest at SBI MCLR + 2% for every month of possession delay."
  },
  {
    id: "realestate-tenant-deposit",
    category: "real_estate",
    title: "How much security deposit can a landlord charge and when must it be returned?",
    verdict: "CAPPED & 30-DAY RETURN",
    verdictType: "info",
    lawAct: "Model Tenancy Act, 2021 & State Tenancy Acts",
    newLaw: null,
    oldLaw: null,
    summary: "Under the Model Tenancy Act, the security deposit for residential premises is capped at a maximum of 2 months' rent (6 months for commercial). The landlord must refund the deposit within 30 days after tenant vacates, deducting only mutually agreed damages.",
    whatToDo: [
      "Always document the apartment's condition with photos/videos on your move-in and move-out days.",
      "Landlords CANNOT deduct money for normal wear and tear (e.g., natural paint fading, normal aging of fixtures).",
      "If the landlord fails to refund within 30 days, you can approach the Rent Authority/Civil Court for recovery along with interest."
    ],
    landmarkCase: "Model Tenancy Act, 2021 Provisions adopted across state rental frameworks.",
    tags: ["real estate", "rent", "security deposit", "landlord", "tenant rights", "wear and tear", "model tenancy"],
    isSOS: false,
    sosScript: "Under the Model Tenancy Act guidelines, security deposit deductions must be itemized and refunded within 30 days of vacating."
  },
  {
    id: "realestate-essential-services",
    category: "real_estate",
    title: "Can a landlord cut off your water or electricity during a dispute or rent delay?",
    verdict: "STRICTLY ILLEGAL",
    verdictType: "danger",
    lawAct: "Section 20 Model Tenancy Act & State Rent Control Acts",
    newLaw: null,
    oldLaw: null,
    summary: "A landlord CANNOT withhold or cut off essential supply services (water, electricity, elevator, sanitation) under any circumstance, even if there is an ongoing dispute or non-payment of rent. Doing so is an actionable civil and criminal offence.",
    whatToDo: [
      "Send an immediate written notice/WhatsApp to the landlord: 'Cutting essential services violates Section 20 of the Tenancy Act.'",
      "Approach the local Rent Authority or SDM court; the Rent Authority can issue an interim order restoring supply within 24-48 hours and penalize the landlord.",
      "In severe cases, you can file a police complaint for criminal intimidation and wrongful restraint under Section 126 BNS (old Sec 341 IPC)."
    ],
    landmarkCase: "Section 20 of Model Tenancy Act 2021 & Delhi Rent Control Act Section 45 (Restoration of Essential Services).",
    tags: ["real estate", "water cut", "electricity cut", "landlord harassment", "essential services", "tenant"],
    isSOS: true,
    sosScript: "Cutting water or electricity to a tenant is strictly prohibited under Tenancy Law. The Rent Authority can order immediate restoration and fines."
  },
  {
    id: "realestate-landlord-entry",
    category: "real_estate",
    title: "Can a landlord enter your rented house without prior notice?",
    verdict: "24-HOUR PRIOR NOTICE REQUIRED",
    verdictType: "warning",
    lawAct: "Model Tenancy Act, 2021 & Right to Quiet Enjoyment",
    newLaw: null,
    oldLaw: null,
    summary: "A tenant has the right to quiet enjoyment and privacy. A landlord or their representative MUST provide at least 24 hours prior written or digital notice before entering the premises for inspections or repairs, and visits must take place during reasonable daytime hours (7 AM to 8 PM).",
    whatToDo: [
      "Ensure your rental agreement has a clear clause requiring 24-hour advance notice for any inspection.",
      "You have the full right to decline entry if the landlord shows up unannounced or at unreasonable hours.",
      "Repeated unauthorized trespass can be reported as criminal trespass under Section 329 BNS (old Sec 441 IPC)."
    ],
    landmarkCase: "Right to Privacy (Puttaswamy 2017) and Section 21 of Model Tenancy Act, 2021.",
    tags: ["real estate", "tenant privacy", "landlord inspection", "24 hour notice", "trespass"],
    isSOS: false,
    sosScript: "Under standard tenancy laws, a minimum 24-hour advance notice is required before inspecting rented premises."
  },
  {
    id: "realestate-society-discrimination",
    category: "real_estate",
    title: "Can a Housing Society (RWA) ban bachelors, pets, or tenants of certain dietary habits?",
    verdict: "UNENFORCEABLE & ILLEGAL",
    verdictType: "danger",
    lawAct: "Cooperative Societies Act, Article 19(1)(e) & Animal Welfare Board Guidelines",
    newLaw: null,
    oldLaw: null,
    summary: "Resident Welfare Associations (RWAs) or housing societies DO NOT have the statutory power to enact bylaws banning bachelors, single women, non-vegetarians, or pet owners. Bye-laws that infringe upon fundamental rights or property owner lease rights are null and void.",
    whatToDo: [
      "Remind the RWA managing committee that their bylaws cannot override municipal and constitutional freedoms.",
      "Regarding pets: Animal Welfare Board of India (AWBI) guidelines strictly prohibit RWAs from banning companion pets or charging illegal pet maintenance fees.",
      "If harassed, approach the Registrar of Cooperative Societies or Consumer Forum for unfair trade practice."
    ],
    landmarkCase: "Bombay High Court in Sanjeev Kokil v. RWA & AWBI circular on pet rights in apartments.",
    tags: ["real estate", "rwa", "housing society", "bachelors", "pets", "discrimination", "society bylaws"],
    isSOS: false,
    sosScript: "RWA bylaws cannot violate fundamental rights or AWBI pet guidelines. Arbitrary bans are legally unenforceable."
  },

  // ==========================================
  // CATEGORY 6: FINANCIAL, BANKING & CONSUMER
  // ==========================================
  {
    id: "finance-unauthorized-upi",
    category: "finance_consumer",
    title: "What is your liability if you lose money in an unauthorized UPI/bank fraud?",
    verdict: "ZERO LIABILITY (IF REPORTED IN 3 DAYS)",
    verdictType: "success",
    lawAct: "RBI Master Circular: Customer Protection - Limiting Liability in Unauthorized Electronic Banking Transactions",
    newLaw: null,
    oldLaw: null,
    summary: "Under RBI guidelines (2017/2021), if an unauthorized electronic banking/UPI transaction occurs through third-party breach or phishing, you have ZERO liability if you notify your bank within 3 working days. The bank MUST shadow-credit the amount within 10 working days.",
    whatToDo: [
      "Immediately freeze your account / UPI via net banking or official helpline (SBI, HDFC, ICICI, etc.).",
      "Call the National Cyber Crime Helpline '1930' immediately within the 'Golden Hour' to freeze funds in the scammer's beneficiary account.",
      "Lodge a formal written dispute with your bank within 3 working days and obtain an acknowledgment / token number.",
      "If reported between 4 to 7 days, your liability is capped (₹5,000 for basic savings, ₹10,000 for standard savings, ₹25,000 for credit cards). Beyond 7 days, bank board policy applies."
    ],
    landmarkCase: "RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18 dated July 6, 2017.",
    tags: ["finance", "upi scam", "bank fraud", "unauthorized transaction", "zero liability", "rbi circular", "1930"],
    isSOS: true,
    sosScript: "Under RBI Circular DBR.No.Leg.BC.78/2017-18, reporting an unauthorized transaction within 3 days grants ZERO customer liability. Please log this dispute."
  },
  {
    id: "finance-recovery-agents",
    category: "finance_consumer",
    title: "Can loan recovery agents call you at odd hours or harass your family?",
    verdict: "STRICTLY PROHIBITED BY RBI",
    verdictType: "danger",
    lawAct: "RBI Circular on Recovery Agents: Fair Practices Code (Aug 12, 2022)",
    newLaw: null,
    oldLaw: null,
    summary: "RBI strictly prohibits banks, NBFCs, and loan recovery agents from calling borrowers before 8:00 AM or after 7:00 PM. They are banned from harassing your contacts, family, employer, using abusive language, or publicly shaming you.",
    whatToDo: [
      "Record call audio or take screenshots of abusive messages.",
      "Inform the agent: 'Your conduct violates RBI Circular DOR.ORG.REC.65/21.04.158/2022-23 dated August 12, 2022.'",
      "File a formal grievance with the Principal Nodal Officer of the bank/NBFC.",
      "If not resolved in 30 days, escalate to the RBI Integrated Ombudsman (cms.rbi.org.in or dial 14448). RBI regularly fines banks millions for recovery harassment."
    ],
    landmarkCase: "Supreme Court in ICICI Bank v. Prakash Kaur (2007) 2 SCC 711 (Condemning muscular tactics by recovery agents).",
    tags: ["finance", "loan", "recovery agent", "harassment", "rbi ombudsman", "threatening calls", "emi"],
    isSOS: true,
    sosScript: "Under RBI Master Circular of August 2022, calling outside 8 AM to 7 PM or harassing third parties is an explicit violation punishable by the Ombudsman."
  },
  {
    id: "finance-atm-failed-refund",
    category: "finance_consumer",
    title: "What is the compensation if an ATM fails to dispense cash but debits your account?",
    verdict: "₹100/DAY PENALTY ON BANK",
    verdictType: "success",
    lawAct: "RBI Harmonisation of Turn Around Time (TAT) and Customer Compensation Framework",
    newLaw: null,
    oldLaw: null,
    summary: "If an ATM fails to dispense cash but your account is debited, the bank is legally required to auto-reverse the transaction within T+5 calendar days. If the bank delays beyond T+5 days, it MUST pay the customer compensation of ₹100 per day of delay automatically.",
    whatToDo: [
      "Keep the ATM transaction receipt or SMS alert with the ATM ID, timestamp, and transaction sequence number.",
      "Log a complaint through your bank's mobile app or customer service immediately.",
      "Check your statement on day 6: If credited after 5 days, calculate ₹100 x delay days. If not credited, escalate to the RBI Ombudsman."
    ],
    landmarkCase: "RBI Circular DPSS.CO.PD No.629/02.01.014/2019-20 on TAT customer compensation.",
    tags: ["finance", "atm failed", "cash debit", "rbi compensation", "100 rupees penalty", "tat circular"],
    isSOS: false,
    sosScript: "Under RBI TAT guidelines, banks must auto-compensate ₹100 per day for ATM debit reversals delayed past T+5 days."
  },
  {
    id: "finance-cheque-bounce",
    category: "finance_consumer",
    title: "What is the procedure and timeline for Cheque Bounce in India?",
    verdict: "CRIMINAL OFFENCE (STRICT TIMELINES)",
    verdictType: "warning",
    lawAct: "Section 138, Negotiable Instruments Act, 1881",
    newLaw: null,
    oldLaw: null,
    summary: "A bounced cheque due to insufficient funds is a criminal offence punishable by up to 2 years imprisonment and double the cheque amount in fine. However, the complainant must follow strict statutory deadlines to maintain a valid case.",
    whatToDo: [
      "Step 1: The cheque must be presented within 3 months of its date.",
      "Step 2: When the bank issues a Return Memo, the payee MUST send a formal Legal Notice within 30 days of receiving the memo.",
      "Step 3: The notice must grant the drawer 15 days to pay the amount.",
      "Step 4: If the drawer fails to pay within 15 days, the payee must file a criminal complaint before the Magistrate within 1 month."
    ],
    landmarkCase: "MSR Leathers v. S. Palaniappan (2013) & Meters and Instruments Pvt Ltd v. Kanchan Mehta (2018 SC).",
    tags: ["finance", "cheque bounce", "section 138", "ni act", "legal notice", "insufficient funds"],
    isSOS: false,
    sosScript: "Section 138 NI Act requires serving a statutory demand notice within 30 days of cheque dishonour, giving 15 days to cure."
  },
  {
    id: "finance-restaurant-service-charge",
    category: "finance_consumer",
    title: "Can a restaurant force you to pay a mandatory 'Service Charge' on your food bill?",
    verdict: "VOLUNTARY TIP ONLY",
    verdictType: "info",
    lawAct: "Central Consumer Protection Authority (CCPA) Guidelines, July 2022",
    newLaw: null,
    oldLaw: null,
    summary: "A service charge added automatically to a restaurant bill is NOT a government tax (unlike GST). Under CCPA guidelines, levying a service charge by default is an unfair trade practice. It is completely voluntary, and consumers have the full right to have it removed.",
    whatToDo: [
      "Check your food bill for 'Service Charge' (distinguish it from GST, which is 5% or 18% government tax).",
      "Politely request the manager: 'Please remove the service charge from my bill; it is optional as per CCPA guidelines.'",
      "If the restaurant refuses, lodge a complaint on the National Consumer Helpline (NCH) App or dial 1915, or message on WhatsApp 8860001915."
    ],
    landmarkCase: "CCPA Guidelines for Prevention of Unfair Trade Practices and Protection of Consumer Interest (F. No. J-25/4/2020-CCPA).",
    tags: ["consumer", "restaurant", "service charge", "ccpa", "food bill", "gst", "tip"],
    isSOS: false,
    sosScript: "Under CCPA guidelines, service charge cannot be added automatically without consumer consent. Please remove it from the bill."
  },
  {
    id: "finance-dark-patterns",
    category: "finance_consumer",
    title: "Are hidden airline/e-commerce charges ('Dark Patterns') illegal?",
    verdict: "BANNED UNFAIR TRADE PRACTICE",
    verdictType: "danger",
    lawAct: "Guidelines for Prevention and Regulation of Dark Patterns, 2023 (CCPA)",
    newLaw: null,
    oldLaw: null,
    summary: "The Ministry of Consumer Affairs banned 13 dark patterns in online retail, flight bookings, and apps, including 'Basket Sneaking' (auto-adding travel insurance), 'Drip Pricing' (revealing prices only at checkout), and 'False Urgency' ('only 1 room left').",
    whatToDo: [
      "Carefully inspect the pre-checked boxes on booking apps (uncheck auto-added insurance, donations, or seat selections).",
      "If an e-commerce platform forces hidden drip pricing or refuses refunds for misleading offers, report it on consumerhelpline.gov.in or CCPA portal.",
      "Companies engaging in dark patterns face penalty orders and mandatory refunds from the Consumer Forum."
    ],
    landmarkCase: "CCPA Notification No. CP-08/1/2023-CCPA (Guidelines for Prevention of Dark Patterns).",
    tags: ["consumer", "dark patterns", "e-commerce", "hidden charges", "flight booking", "ccpa"],
    isSOS: false,
    sosScript: "Under CCPA Dark Patterns Guidelines 2023, auto-adding items to baskets and drip pricing are prohibited unfair trade practices."
  },

  // ==========================================
  // CATEGORY 7: CIVIC PROTECTIONS & FUNDAMENTAL RIGHTS
  // ==========================================
  {
    id: "civic-good-samaritan",
    category: "civic_rights",
    title: "What are your protections if you help an accident victim (Good Samaritan)?",
    verdict: "100% LEGAL IMMUNITY",
    verdictType: "success",
    lawAct: "Section 134A, Motor Vehicles Act (amended 2019) & Supreme Court Guidelines",
    newLaw: null,
    oldLaw: null,
    summary: "A Good Samaritan who rushes a road crash victim to the hospital has COMPLETE legal immunity from civil or criminal liability. Hospitals cannot demand money or refuse emergency treatment, and police CANNOT force you to reveal your identity or become a witness.",
    whatToDo: [
      "Never hesitate to save a life. Rush the injured person to the nearest government or private hospital.",
      "You are not required to provide your name, address, or phone number to the hospital or police unless you voluntarily choose to be an eyewitness.",
      "Hospitals CANNOT detain you or demand an admission deposit before starting emergency resuscitation.",
      "If you choose to give a police statement, it must be recorded at a time and place of your convenience, or via video conference."
    ],
    landmarkCase: "SaveLIFE Foundation v. Union of India (2016) 7 SCC 194 & Section 134A Motor Vehicles Act.",
    tags: ["civic", "good samaritan", "accident victim", "road crash", "emergency help", "police witness", "immunity"],
    isSOS: false,
    sosScript: "Under Section 134A MVA and SaveLIFE Foundation SC guidelines, I have Good Samaritan immunity and cannot be detained or forced to pay deposits."
  },
  {
    id: "civic-emergency-medical",
    category: "civic_rights",
    title: "Can a private hospital refuse emergency treatment if you can't pay upfront?",
    verdict: "STRICTLY ILLEGAL",
    verdictType: "danger",
    lawAct: "Article 21 (Right to Health and Life) & Supreme Court Directives",
    newLaw: null,
    oldLaw: null,
    summary: "Every medical practitioner and hospital (private or government) has a constitutional and ethical duty to provide immediate life-saving emergency medical treatment to critically injured patients or medical emergencies without waiting for police clearance or upfront financial payment.",
    whatToDo: [
      "Remind hospital emergency staff of the Supreme Court ruling in Parmanand Katara: 'Preservation of human life is paramount; procedural formalities can wait.'",
      "Hospitals cannot withhold emergency resuscitation, CPR, stabilization, or life-saving surgery awaiting police MLC (Medico-Legal Case) registration.",
      "Refusal to provide emergency care can result in cancellation of hospital clinical establishment registration and medical council action."
    ],
    landmarkCase: "Parmanand Katara v. Union of India (1989) 4 SCC 286 & Paschim Banga Khet Mazdoor Samity (1996).",
    tags: ["civic", "hospital", "emergency treatment", "article 21", "medical negligence", "parmanand katara"],
    isSOS: true,
    sosScript: "Under the Supreme Court ruling in Parmanand Katara, hospitals are duty-bound to stabilize emergency patients without upfront payment."
  },
  {
    id: "civic-rti-deadlines",
    category: "civic_rights",
    title: "What are the statutory deadlines and penalties under the RTI Act, 2005?",
    verdict: "30 DAYS (48 HOURS FOR LIFE & LIBERTY)",
    verdictType: "info",
    lawAct: "Right to Information Act, 2005 (Section 7 & Section 20)",
    newLaw: null,
    oldLaw: null,
    summary: "Public authorities must provide information within 30 days of receiving an RTI application. Crucially, if the information sought concerns the 'Life or Liberty' of a person, it MUST be provided within 48 hours. Officers face a ₹250/day penalty up to ₹25,000 for delays.",
    whatToDo: [
      "File your application online at rtionline.gov.in for Central ministries or through state RTI portals.",
      "Pay the nominal fee (₹10 for Central authorities; free for Below Poverty Line citizens).",
      "If concerning detention, hospital emergency, or immediate threat to life, clearly write in bold: 'INFORMATION SOUGHT CONCERNS LIFE OR LIBERTY (SECTION 7(1) - 48 HOUR TIMELINE)'.",
      "If unanswered after 30 days, file a First Appeal before the First Appellate Authority within 30 days."
    ],
    landmarkCase: "Section 7(1) and Section 20 of RTI Act, 2005; Central Information Commission rulings.",
    tags: ["civic", "rti", "right to information", "transparency", "48 hours", "public authority"],
    isSOS: false,
    sosScript: "Under Section 7(1) RTI Act, information concerning life or liberty must be provided within 48 hours."
  },
  {
    id: "civic-internet-shutdowns",
    category: "civic_rights",
    title: "What are the legal limits on arbitrary mobile internet shutdowns?",
    verdict: "STRICT PROPORTIONALITY MANDATE",
    verdictType: "warning",
    lawAct: "Temporary Suspension of Telecom Services Rules, 2017 & Supreme Court Directives",
    newLaw: null,
    oldLaw: null,
    summary: "The Supreme Court in Anuradha Bhasin ruled that freedom of speech and trade over the internet is protected under Article 19(1)(a) and 19(1)(g). Indefinite or blanket internet shutdowns are unconstitutional. Orders must be published publicly and reviewed periodically by a competent committee.",
    whatToDo: [
      "Orders must be issued exclusively by the Union Home Secretary or State Home Secretary.",
      "Every shutdown order must state clear reasons and must be reviewed by the Review Committee within 5 working days.",
      "The administration cannot impose indefinite internet bans; periodic review and proportional least-restrictive measures are constitutionally mandated."
    ],
    landmarkCase: "Anuradha Bhasin v. Union of India (2020) 3 SCC 637 & Telecom Suspension Amendment Rules 2020.",
    tags: ["civic", "internet shutdown", "article 19", "anuradha bhasin", "telecom suspension", "digital rights"],
    isSOS: false,
    sosScript: "Under the Supreme Court ruling in Anuradha Bhasin, indefinite internet bans without published reasoned orders violate Article 19."
  },

  // ==========================================
  // CATEGORY 8: DIGITAL, CYBER & DATA PRIVACY
  // ==========================================
  {
    id: "cyber-digital-arrest-scam",
    category: "cyber_privacy",
    title: "Is 'Digital Arrest' real? What to do if someone threatens you on video call?",
    verdict: "COMPLETE FRAUD / ZERO LEGALITY",
    verdictType: "danger",
    lawAct: "Information Technology Act, 2000 & BNS Fraud Provisions",
    newLaw: "Section 318 BNS (Cheating), Section 204 BNS (Impersonation)",
    oldLaw: "Section 420 IPC, Section 419 IPC",
    summary: "THERE IS NO SUCH THING AS 'DIGITAL ARREST' IN INDIAN LAW. Law enforcement agencies (CBI, ED, Police, Customs, Telecom Department) NEVER conduct interrogations or issue arrest warrants via WhatsApp/Skype video calls or ask you to transfer funds to 'RBI verification accounts'.",
    whatToDo: [
      "IMMEDIATELY DISCONNECT THE CALL. Do not panic or stay on video.",
      "Never transfer any money. Indian courts, CBI, or police never ask citizens to deposit 'security bonds' or 'clearance deposits'.",
      "Immediately report the phone number and video handle on the National Cyber Crime Portal (cybercrime.gov.in) or call Helpline 1930.",
      "Block the contact and report the incident to your local cyber cell."
    ],
    landmarkCase: "Ministry of Home Affairs (I4C) & Prime Minister's Public Advisory on Digital Arrest Frauds (2024).",
    tags: ["cyber", "digital arrest", "scam", "skype call", "cbi scam", "police impersonation", "cyber fraud", "1930"],
    isSOS: true,
    sosScript: "Indian law does not recognize 'Digital Arrest'. Real police or courts never hold arrests over video calls or demand money transfers."
  },
  {
    id: "cyber-dpdp-rights",
    category: "cyber_privacy",
    title: "What are your rights over personal data under the DPDP Act, 2023?",
    verdict: "RIGHT TO ERASURE & CONSENT WITHDRAWAL",
    verdictType: "success",
    lawAct: "Digital Personal Data Protection Act, 2023 (Section 11, 12, 13)",
    newLaw: null,
    oldLaw: null,
    summary: "Under the DPDP Act 2023, citizens (Data Principals) have the right to know what personal data is processed, seek correction or complete erasure of their data, withdraw consent easily, and seek grievance redressal from Data Fiduciaries.",
    whatToDo: [
      "Send a written or digital Data Subject Request (DSR) to the company's designated Data Protection Officer (DPO).",
      "Companies must give an option to withdraw consent as easily as consent was given.",
      "If a company suffers a data breach compromising your personal details, they are legally obligated to notify the Data Protection Board of India and affected individuals.",
      "Penalties for failure to take reasonable security safeguards against breaches range up to ₹250 Crores."
    ],
    landmarkCase: "Justice K.S. Puttaswamy (Retd.) v. Union of India (2017) 10 SCC 1 & DPDP Act 2023 statutory mandate.",
    tags: ["cyber", "privacy", "dpdp act", "data protection", "right to erasure", "personal data", "dpo"],
    isSOS: false,
    sosScript: "Under the DPDP Act 2023, I have the statutory right to withdraw consent and request erasure of my personal data."
  },
  {
    id: "cyber-sim-swap-frauds",
    category: "cyber_privacy",
    title: "What is the telecom protocol if your SIM card suddenly loses network signal?",
    verdict: "POTENTIAL SIM SWAP ATTACK",
    verdictType: "danger",
    lawAct: "TRAI Telecom Regulations & IT Act, 2000 (Section 43A)",
    newLaw: null,
    oldLaw: null,
    summary: "If your mobile phone suddenly shows 'No Service' or 'Emergency Calls Only' without reason, you might be a victim of a SIM Swap fraud, where criminals clone your SIM to intercept 2-Factor Authentication banking OTPs.",
    whatToDo: [
      "Check with friends or family on the same telecom operator to see if it's a general network outage.",
      "If it's only your phone, immediately contact your telecom operator from another phone or store to check if a duplicate SIM was issued.",
      "Log into your internet banking and temporarily disable net banking, UPI, and card transactions.",
      "Dial 1930 if you spot unauthorized SMS notifications in your email."
    ],
    landmarkCase: "TRAI regulations on mandatory 24-hour SMS notification before processing duplicate/replacement SIM issuance.",
    tags: ["cyber", "sim swap", "telecom", "otp theft", "banking fraud", "no service"],
    isSOS: true,
    sosScript: "If your SIM card loses signal unexpectedly, check immediately for unauthorized duplicate SIM issuance to prevent OTP hijacking."
  },
  {
    id: "cyber-spam-telemarketing",
    category: "cyber_privacy",
    title: "What can you do against pesky spam loan/credit card telemarketing calls?",
    verdict: "STATUTORY DND PROTECTION",
    verdictType: "info",
    lawAct: "Telecom Commercial Communications Customer Preference Regulations (TCCCPR, 2018)",
    newLaw: null,
    oldLaw: null,
    summary: "Under TRAI regulations, unsolicited commercial calls from unregistered telemarketers (UTMs) or registered entities to numbers on the Do Not Disturb (DND) registry are illegal. Telecom providers can disconnect lines and blacklist persistent spammers.",
    whatToDo: [
      "Register on DND by sending an SMS 'START 0' to 1909.",
      "To report an offending spam call/SMS, send SMS to 1909 within 3 days in format: 'The brief complaint, Telephone Number, DD/MM/YY' or report via TRAI DND 3.0 App.",
      "TRAI imposes financial penalties on access providers and requires disconnection of repeated spamming numbers."
    ],
    landmarkCase: "TRAI Master Directions on Telecom Commercial Communications Regulations 2018/2023.",
    tags: ["cyber", "dnd", "spam calls", "telemarketing", "1909", "trai", "harassment calls"],
    isSOS: false,
    sosScript: "Under TRAI TCCCPR Regulations, promotional calls to numbers enrolled in the 1909 DND registry are prohibited."
  }
];

// ==========================================
// MYTH VS FACT DATABASE
// ==========================================
const MYTHS_DATA = [
  {
    id: "myth-keys",
    category: "Traffic Police",
    myth: "Traffic police can confiscate your car or motorcycle ignition keys on the spot.",
    fact: "False. Traffic police rules and state standing orders explicitly forbid snatching ignition keys from moving or stopped vehicles. You have the right to switch off the vehicle yourself."
  },
  {
    id: "myth-fir-location",
    category: "Criminal Procedure",
    myth: "You can only file an FIR at the police station where the crime physically took place.",
    fact: "False. Under the 'Zero FIR' doctrine affirmed by the Supreme Court in Lalita Kumari and Section 173 BNSS, any police station in India must register your FIR and transfer it later."
  },
  {
    id: "myth-recovery-time",
    category: "Banking & Finance",
    myth: "Loan recovery agents can call or visit your house whenever they want until you repay.",
    fact: "False. Under RBI's August 2022 Fair Practices Code, calls or visits before 8:00 AM or after 7:00 PM are strictly prohibited, as is harassing your family or workplace."
  },
  {
    id: "myth-digilocker-paper",
    category: "Digital Rights",
    myth: "Police can reject DigiLocker and demand physical original documents for driving or vehicle checks.",
    fact: "False. Under Rule 139 of the Central Motor Vehicles Rules and MoRTH 2018 notifications, documents in DigiLocker and mParivahan are legally binding at par with physical originals."
  },
  {
    id: "myth-night-arrest-women",
    category: "Women's Rights",
    myth: "Police can arrest any female suspect at night if they have an active warrant.",
    fact: "False. Section 43(5) BNSS (old Sec 46(4) CrPC) prohibits arresting women between sunset and sunrise except under extraordinary emergency and with prior written judicial magistrate clearance."
  },
  {
    id: "myth-good-samaritan",
    category: "Civic Rights",
    myth: "If you help an accident victim, you will be trapped in police interrogations and hospital bills.",
    fact: "False. Section 134A of the Motor Vehicles Act provides complete civil and criminal immunity. You cannot be forced to give your name, become a witness, or pay hospital bills."
  },
  {
    id: "myth-service-charge",
    category: "Consumer Law",
    myth: "A 'Service Charge' on a restaurant bill is a mandatory government tax that must be paid.",
    fact: "False. Service Charge is not a tax. It is an optional tip. Under CCPA guidelines 2022, restaurants cannot impose it automatically and must remove it if requested."
  },
  {
    id: "myth-digital-arrest",
    category: "Cyber Crime",
    myth: "'Digital Arrest' via WhatsApp/Skype video call by police or CBI is an official legal process.",
    fact: "False. 'Digital Arrest' is 100% cyber fraud. No Indian court, police station, or investigative agency has any legal provision to arrest anyone over video calls or demand security deposits."
  },
  {
    id: "myth-protest-transit-shutdown",
    category: "Protest Rights & Assembly",
    myth: "Authorities can indefinitely shut down metro stations, mobile internet, and detain citizens on buses to stop protests against the Election Commission.",
    fact: "False. In the October 2026 Gyanesh Kumar protest hearings, the Supreme Court (Justices Joymalya Bagchi & V. Mohana) explicitly ruled that public transit (Delhi Metro/rail) cannot be weaponized against peaceful citizens, ordered resumption of normal transport and internet, and prohibited arbitrary detention of peaceful demonstrators."
  },
  {
    id: "myth-protest-cec",
    category: "Constitutional Protections",
    myth: "Protesting against constitutional appointees like the Chief Election Commissioner (CEC) is unlawful or amounts to anti-national activity.",
    fact: "False. Under Article 19(1)(a) and 19(1)(b), citizens have the inviolable constitutional right to question, critique, and peacefully protest against any constitutional functionary or electoral roll revision (like the Special Intensive Revision - SIR). Supreme Court precedent affirms that free speech and electoral accountability are part of the Basic Structure."
  }
];

// ==========================================
// ESSENTIAL HELPLINES & PORTALS
// ==========================================
const HELPLINES_DATA = [
  {
    number: "112",
    title: "National Emergency Number",
    desc: "Single emergency number across India for Police, Fire, and Ambulance services.",
    timing: "24/7 Toll-Free",
    action: "tel:112",
    badge: "Police / Medical / Fire"
  },
  {
    number: "1930",
    title: "Cyber Financial Fraud Helpline",
    desc: "Crucial 'Golden Hour' helpline to immediately freeze stolen funds in bank / UPI accounts.",
    timing: "24/7 Toll-Free",
    action: "tel:1930",
    badge: "Cyber & UPI Fraud"
  },
  {
    number: "1091",
    title: "Women in Distress Helpline",
    desc: "Emergency police assistance and safety support for women facing violence or harassment.",
    timing: "24/7 Toll-Free",
    action: "tel:1091",
    badge: "Women Safety"
  },
  {
    number: "1098",
    title: "Childline India",
    desc: "Emergency outreach service for children in need of care, protection, and legal aid.",
    timing: "24/7 Toll-Free",
    action: "tel:1098",
    badge: "Child Protection"
  },
  {
    number: "1915",
    title: "National Consumer Helpline",
    desc: "Ministry of Consumer Affairs helpline for dark patterns, e-commerce, and service issues.",
    timing: "8 AM - 8 PM (Except Gazetted Holidays)",
    action: "tel:1915",
    badge: "Consumer Disputes"
  },
  {
    number: "14448",
    title: "RBI Integrated Ombudsman",
    desc: "Reserve Bank of India contact center for complaints against banks, NBFCs, and recovery agents.",
    timing: "9:30 AM - 5:15 PM",
    action: "tel:14448",
    badge: "Banking & Loans"
  },
  {
    number: "15100",
    title: "National Legal Services (NALSA)",
    desc: "Free legal aid for eligible citizens, marginalized communities, women, and prisoners in custody.",
    timing: "24/7 Toll-Free",
    action: "tel:15100",
    badge: "Free Legal Aid"
  },
  {
    number: "14567",
    title: "Elderline (Senior Citizens)",
    desc: "National helpline for senior citizens offering emotional support, abuse rescue, and legal advice.",
    timing: "8 AM - 8 PM",
    action: "tel:14567",
    badge: "Senior Citizens"
  }
];

// ==========================================
// LEGAL GLOSSARY (CRIMINAL & CIVIL)
// ==========================================
const GLOSSARY_DATA = [
  {
    term: "BNSS / BNS / BSA (2024)",
    meaning: "The new criminal codes of India effective July 1, 2024: Bharatiya Nagarik Suraksha Sanhita (replaces CrPC 1973), Bharatiya Nyaya Sanhita (replaces IPC 1860), and Bharatiya Sakshya Adhiniyam (replaces Indian Evidence Act 1872)."
  },
  {
    term: "Zero FIR",
    meaning: "An FIR registered at any police station in India irrespective of where the crime took place. It is numbered as '0' and transferred to the competent territorial police station."
  },
  {
    term: "Cognizable Offence",
    meaning: "A serious offence (e.g. murder, theft, serious fraud) where police have legal authority to arrest without an arrest warrant from a Magistrate and initiate an investigation without court order."
  },
  {
    term: "Non-Cognizable Offence",
    meaning: "A less severe offence (e.g. simple assault, defamation) where police cannot arrest without a judicial warrant and cannot investigate without Magistrate permission."
  },
  {
    term: "Bailable vs Non-Bailable",
    meaning: "In bailable offences, bail is a matter of statutory right granted by the police officer or court. In non-bailable offences, bail is not a right; the Magistrate or Judge exercises judicial discretion."
  },
  {
    term: "Section 35(3) BNSS (old 41A CrPC)",
    meaning: "Mandatory Notice of Appearance issued before arresting anyone in offences carrying punishment of 7 years or less. Arrest is prohibited if the person cooperates with the notice."
  },
  {
    term: "Panchnama / Seizure Memo",
    meaning: "A formal written legal document prepared by police recording the search and seizure of property (e.g., phones, vehicles, documents) in the presence of independent witnesses."
  },
  {
    term: "Compounding Offence",
    meaning: "Settling a minor dispute or traffic violation out of court or through an official fine, avoiding full trial and conviction."
  }
];
