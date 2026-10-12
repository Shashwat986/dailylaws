# DailyLaws.IN 🇮🇳
> **Know Your Everyday Rights. Navigate Modern India.**

`DailyLaws.IN` is a fast, responsive, citizen-first static web platform designed to simplify Indian laws for ordinary individuals. It equips citizens with clear statutory rights, landmark Supreme Court precedents, conversational emergency scripts, and official helplines to handle daily situations with confidence.

---

## 🌟 Key Features

1. **Updated for 2024–2026 Criminal Law Transition**:
   - Cross-references the new criminal codes:
     - **Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023** (replaced CrPC 1973)
     - **Bharatiya Nyaya Sanhita (BNS), 2023** (replaced IPC 1860)
     - **Bharatiya Sakshya Adhiniyam (BSA), 2023** (replaced Indian Evidence Act 1872)
   - Every criminal law card displays both the **New Code** and the **Pre-2024 Equivalent** so citizens can comprehend both new filings and ongoing older cases.

2. **Categorical Scenarios Covered**:
   - 🚗 **Traffic Police & Motor Vehicles**: Key snatching illegality, constable vs SI challan powers, DigiLocker validity, breathalyzer protocols, towing rules with occupants inside, 15-day document grace period, right to video record police on duty, license impound restrictions.
   - ✊ **Protesting & Peaceful Assembly (with Gyanesh Kumar / CJP 2026 Focus)**:
     - **Supreme Court October 2026 Directives** (Bench of Justices Joymalya Bagchi & V. Mohana): Absolute bar on illegal/arbitrary detention of peaceful protesters; prohibition against weaponizing transit shutdowns (Delhi Metro/rail closures) or blanket internet bans against peaceful citizens.
     - **Section 163 BNSS Prohibitory Signage Near Courts**: SC ruling banning police from blocking citizen access to court complexes under Section 163 BNSS / 144 CrPC.
     - **Rights in 'Bus Detentions'**: Custodial rights, destination disclosure, and 24-hr magistrate rules when detained inside police buses en route to Nirvachan Sadan/Delhi borders.
     - **Constitutional Critique of CEC & SIR**: Freedom under Article 19(1)(a) to peacefully demand accountability/resignation from constitutional appointees like Chief Election Commissioner Gyanesh Kumar over the Special Intensive Revision (SIR) voter roll dispute.
     - **Designated Protest Spaces**: Freedom Park (Bengaluru) & Jantar Mantar (Delhi) protections (*MKSS v. UOI 2018*).
     - **Assembly Rights**: Article 19(1)(b) fundamental rights, lathi-charge de-escalation protocols, and campus protections under the Juvenile Justice Act.
   - 🚨 **Arrests & Criminal Procedure**: 11 Landmark D.K. Basu guidelines, Arnesh Kumar 7-year notice rule, mandatory 24-hour magistrate production, strict handcuffing restrictions, Zero FIR nationwide mandate, Article 20(3) Right to Silence, Free Legal Aid (Article 39A / NALSA), and Anticipatory Bail basics.
   - 🛡️ **Rights of Women, Children & Seniors**: Sunset-to-sunrise arrest ban for female citizens (Section 43(5) BNSS), electronic/virtual FIR filing, POSH Act workplace safety, protection against eviction from shared household under DV Act, and Senior Citizens Act property gift revocation (Section 23).
   - 🏠 **Real Estate, Tenancy & Housing**: RERA Section 18 builder delay compensation (SBI MCLR + 2%), Model Tenancy Act security deposit cap & 30-day refund, landlord ban on cutting essential water/power, 24-hour inspection notice, and housing society discrimination bans (pets/bachelors).
   - 💳 **Banking, Financial & Consumer**: RBI Zero Liability circular for unauthorized UPI/bank fraud (3-day rule), recovery agent harassment bans (no calls before 8 AM / after 7 PM), failed ATM ₹100/day penalty, Section 138 Cheque Bounce procedures, restaurant service charge voluntary status, and Dark Patterns regulations.
   - 🇮🇳 **Civic Protections & Fundamental Rights**: Section 134A Good Samaritan legal immunity for road crash helpers, Parmanand Katara emergency medical treatment mandate (no upfront payment delay), RTI 30-day / 48-hour life-and-liberty deadlines, and internet shutdown proportionality rules.
   - 🔒 **Digital Rights & Cyber Crime**: Debunking "Digital Arrest" video scam fraud, DPDP Act 2023 data erasure rights, SIM Swap attack defense, and TRAI 1909 Do Not Disturb (DND) spam call reporting.

3. **Field Emergency SOS Mode**:
   - Immediate 1-tap modal tailored for high-stress encounters (traffic pullover, police detention, cyber fraud Golden Hour, landlord dispute).
   - Provides exact conversational scripts to recite politely and firmly to officials.
   - Built-in **Text-to-Speech (Audio)** button using Web Speech API to read the legal script aloud.

4. **Interactive Features**:
   - **Instant Search**: Instant fuzzy filter by legal topic, act name, section, landmark case, or keywords.
   - **Myth vs. Fact Carousel**: Debunking 8 common legal falsehoods.
   - **24/7 Helplines Directory**: Click-to-dial emergency numbers (112, 1930, 1091, 1098, 1915, 14448, 15100, 14567).
   - **Saved Bookmarks**: LocalStorage-persisted bookmarks for easy offline reference.
   - **Print-Optimized Pocket Guide**: Generates a clean physical cheat-sheet via standard print dialog (`Cmd + P` / `Ctrl + P`).
   - **Dark & Light Mode**: Accessible, high-contrast Indian legal aesthetic.

---

## 🚀 How to Run / View the Website

Since DailyLaws.IN is built with modern, zero-dependency HTML5, CSS3, and Vanilla JavaScript, it runs instantly in any browser.

### Option 1: Direct File Open
Open `index.html` directly in your favorite browser:
```bash
open /Users/shashwat/.gemini/antigravity/scratch/dailylaws-in/index.html
```

### Option 2: Local HTTP Server (Python)
Run a local development server:
```bash
cd /Users/shashwat/.gemini/antigravity/scratch/dailylaws-in
python3 -m http.server 8080
```
Then visit [http://localhost:8080](http://localhost:8080) in your browser.

### Option 3: Local Server (Node.js)
```bash
npx serve /Users/shashwat/.gemini/antigravity/scratch/dailylaws-in
```

---

## 📁 Project Architecture

```
dailylaws-in/
├── index.html       # Semantic single-page structure, navigation, SOS modal & sections
├── styles.css       # Responsive styling, Indian legal palette, dark/light theme, print CSS
├── data.js          # Comprehensive statutory dataset, Supreme Court cases, myths & helplines
├── app.js           # Live search, category filters, bookmarks, speech synthesis & modal handlers
└── README.md        # Documentation and guide
```

---

## ⚖️ Civic Disclaimer
*DailyLaws.IN is designed solely for public legal literacy and civic empowerment. It references statutory codes and Supreme Court decisions but does not constitute formal legal advice. For active litigation or criminal proceedings, consult a qualified advocate or contact the National Legal Services Authority (NALSA Helpline: 15100).*
