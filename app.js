/**
 * DailyLaws.IN - Main Application Controller
 * Handles search, category filtering, bookmarks, emergency SOS modal,
 * Text-to-Speech citizen script, theme switching, and copy citations.
 */

document.addEventListener('DOMContentLoaded', () => {
  // State
  let currentCategory = 'all';
  let searchQuery = '';
  let bookmarks = JSON.parse(localStorage.getItem('dailylaws_bookmarks') || '[]');
  let showOnlyBookmarks = false;

  // DOM Elements
  const searchInput = document.getElementById('searchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const lawsGrid = document.getElementById('lawsGrid');
  const lawsCountText = document.getElementById('lawsCountText');
  const categoryFilters = document.getElementById('categoryFilters');
  const mythsGrid = document.getElementById('mythsGrid');
  const helplinesGrid = document.getElementById('helplinesGrid');
  const glossaryGrid = document.getElementById('glossaryGrid');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');

  // SOS Modal Elements
  const sosModal = document.getElementById('sosModal');
  const openSosBtn = document.getElementById('openSosBtn');
  const closeSosBtn = document.getElementById('closeSosBtn');
  const sosScenarioList = document.getElementById('sosScenarioList');
  const sosScriptDisplay = document.getElementById('sosScriptDisplay');
  const sosStepsDisplay = document.getElementById('sosStepsDisplay');
  const sosSpeakBtn = document.getElementById('sosSpeakBtn');

  // Bookmarks Modal Elements
  const bookmarksFilterBtn = document.getElementById('bookmarksFilterBtn');
  const printGuideBtn = document.getElementById('printGuideBtn');

  // Initialize Theme
  initTheme();

  // Initialize Data Renders
  renderCategories();
  renderLaws();
  renderMyths();
  renderHelplines();
  renderGlossary();
  initSosModal();

  // Search Input Event
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    searchClearBtn.classList.toggle('active', searchQuery.length > 0);
    renderLaws();
  });

  searchClearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClearBtn.classList.remove('active');
    searchInput.focus();
    renderLaws();
  });

  // Quick Search Chips
  document.querySelectorAll('.quick-tag-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const tag = chip.getAttribute('data-tag');
      searchInput.value = tag;
      searchQuery = tag.toLowerCase();
      searchClearBtn.classList.add('active');
      renderLaws();
      searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });

  // Print Guide Event
  if (printGuideBtn) {
    printGuideBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Bookmarks Filter Toggle
  if (bookmarksFilterBtn) {
    bookmarksFilterBtn.addEventListener('click', () => {
      showOnlyBookmarks = !showOnlyBookmarks;
      bookmarksFilterBtn.classList.toggle('active', showOnlyBookmarks);
      renderLaws();
    });
  }

  // Theme Toggle Event
  themeToggleBtn.addEventListener('click', toggleTheme);

  // SOS Modal Listeners
  if (openSosBtn) {
    openSosBtn.addEventListener('click', () => openModal(sosModal));
  }
  if (closeSosBtn) {
    closeSosBtn.addEventListener('click', () => closeModal(sosModal));
  }
  sosModal.addEventListener('click', (e) => {
    if (e.target === sosModal) closeModal(sosModal);
  });

  // ESC key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sosModal.classList.contains('active')) {
      closeModal(sosModal);
    }
  });

  // ==========================================
  // RENDER FUNCTIONS
  // ==========================================

  function renderCategories() {
    const categories = [
      { id: 'all', name: 'All Laws', icon: '⚖️' },
      { id: 'traffic', name: 'Traffic & Vehicles', icon: '🚗' },
      { id: 'protest', name: 'Protests & Assembly', icon: '✊' },
      { id: 'arrest', name: 'Arrests & Police', icon: '🚨' },
      { id: 'women_child', name: 'Women & Seniors', icon: '🛡️' },
      { id: 'real_estate', name: 'Real Estate & Rent', icon: '🏠' },
      { id: 'finance_consumer', name: 'Finance & Consumer', icon: '💳' },
      { id: 'civic_rights', name: 'Civic & Fundamental', icon: '🇮🇳' },
      { id: 'cyber_privacy', name: 'Digital & Cyber', icon: '🔒' }
    ];

    categoryFilters.innerHTML = categories.map(cat => {
      const count = cat.id === 'all' 
        ? DAILY_LAWS_DATA.length 
        : DAILY_LAWS_DATA.filter(l => l.category === cat.id).length;

      return `
        <button class="cat-btn ${cat.id === currentCategory ? 'active' : ''}" data-cat="${cat.id}">
          <span class="cat-icon">${cat.icon}</span>
          <span class="cat-name">${cat.name}</span>
          <span class="cat-count">${count}</span>
        </button>
      `;
    }).join('');

    // Bind click events to category buttons
    categoryFilters.querySelectorAll('.cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        categoryFilters.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-cat');
        renderLaws();
      });
    });
  }

  function renderLaws() {
    let filtered = DAILY_LAWS_DATA.filter(law => {
      // Category filter
      if (currentCategory !== 'all' && law.category !== currentCategory) {
        return false;
      }

      // Bookmark filter
      if (showOnlyBookmarks && !bookmarks.includes(law.id)) {
        return false;
      }

      // Search filter
      if (searchQuery) {
        const titleMatch = law.title.toLowerCase().includes(searchQuery);
        const actMatch = law.lawAct.toLowerCase().includes(searchQuery);
        const summaryMatch = law.summary.toLowerCase().includes(searchQuery);
        const tagsMatch = law.tags.some(t => t.toLowerCase().includes(searchQuery));
        const newLawMatch = law.newLaw && law.newLaw.toLowerCase().includes(searchQuery);
        const oldLawMatch = law.oldLaw && law.oldLaw.toLowerCase().includes(searchQuery);
        const stepsMatch = law.whatToDo.some(step => step.toLowerCase().includes(searchQuery));
        const landmarkMatch = law.landmarkCase && law.landmarkCase.toLowerCase().includes(searchQuery);

        return titleMatch || actMatch || summaryMatch || tagsMatch || newLawMatch || oldLawMatch || stepsMatch || landmarkMatch;
      }

      return true;
    });

    // Update count display
    lawsCountText.textContent = `Showing ${filtered.length} of ${DAILY_LAWS_DATA.length} legal rights`;

    if (filtered.length === 0) {
      lawsGrid.innerHTML = `
        <div class="empty-state">
          <span style="font-size: 3rem;">🔍</span>
          <h3>No matching laws found</h3>
          <p>Try searching for terms like "keys", "challan", "bail", "rent", "deposit", "cheque", "cyber", or "zero fir".</p>
          <button class="btn btn-outline" id="resetSearchBtn">Clear Filters</button>
        </div>
      `;
      const resetBtn = document.getElementById('resetSearchBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          searchInput.value = '';
          searchQuery = '';
          currentCategory = 'all';
          showOnlyBookmarks = false;
          if (bookmarksFilterBtn) bookmarksFilterBtn.classList.remove('active');
          renderCategories();
          renderLaws();
        });
      }
      return;
    }

    lawsGrid.innerHTML = filtered.map(law => {
      const isBookmarked = bookmarks.includes(law.id);
      
      let lawTransitionHtml = '';
      if (law.newLaw || law.oldLaw) {
        lawTransitionHtml = `
          <div class="act-comparison">
            ${law.newLaw ? `<span class="law-pill-new">2024 Code: ${escapeHtml(law.newLaw)}</span>` : ''}
            ${law.oldLaw ? `<span class="law-pill-old">Formerly: ${escapeHtml(law.oldLaw)}</span>` : ''}
          </div>
        `;
      }

      return `
        <article class="law-card" id="card-${law.id}">
          <div>
            <div class="law-card-top">
              <span class="verdict-badge ${law.verdictType}">
                ${escapeHtml(law.verdict)}
              </span>
              <div class="card-actions-top">
                <button class="bookmark-btn ${isBookmarked ? 'active' : ''}" 
                        data-id="${law.id}" 
                        title="${isBookmarked ? 'Remove Bookmark' : 'Bookmark this Law'}">
                  ${isBookmarked ? '★' : '☆'}
                </button>
              </div>
            </div>

            <h3 class="law-title">${escapeHtml(law.title)}</h3>

            <div class="law-act-banner">
              <span class="act-name">📜 ${escapeHtml(law.lawAct)}</span>
              ${lawTransitionHtml}
            </div>

            <p class="law-summary">${escapeHtml(law.summary)}</p>

            <div class="what-to-do-box">
              <div class="what-to-do-title">
                <span>🛡️</span> What You Should Do
              </div>
              <ul class="what-to-do-list">
                ${law.whatToDo.map(step => `<li>${escapeHtml(step)}</li>`).join('')}
              </ul>
            </div>

            ${law.landmarkCase ? `
              <div class="landmark-box">
                <strong>🏛️ Landmark Authority:</strong> ${escapeHtml(law.landmarkCase)}
              </div>
            ` : ''}
          </div>

          <div class="card-footer">
            <button class="copy-btn" data-id="${law.id}">
              📋 Copy Citation
            </button>
            ${law.sosScript ? `
              <button class="sos-speak-btn" data-script="${encodeURIComponent(law.sosScript)}">
                🔊 Play Script
              </button>
            ` : ''}
          </div>
        </article>
      `;
    }).join('');

    // Bind event listeners on newly generated cards
    lawsGrid.querySelectorAll('.bookmark-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lawId = btn.getAttribute('data-id');
        toggleBookmark(lawId);
      });
    });

    lawsGrid.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lawId = btn.getAttribute('data-id');
        copyCitation(lawId);
      });
    });

    lawsGrid.querySelectorAll('.sos-speak-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const script = decodeURIComponent(btn.getAttribute('data-script'));
        speakText(script);
      });
    });
  }

  function renderMyths() {
    mythsGrid.innerHTML = MYTHS_DATA.map(m => `
      <div class="myth-card">
        <div class="myth-header">
          <span>${escapeHtml(m.category)}</span>
          <span>Legal Clarification</span>
        </div>
        <div class="myth-part">
          <div class="myth-part-label">❌ Myth</div>
          <div class="myth-part-text">${escapeHtml(m.myth)}</div>
        </div>
        <div class="fact-part">
          <div class="fact-part-label">✅ Reality & Law</div>
          <div class="fact-part-text">${escapeHtml(m.fact)}</div>
        </div>
      </div>
    `).join('');
  }

  function renderHelplines() {
    helplinesGrid.innerHTML = HELPLINES_DATA.map(h => `
      <div class="helpline-card">
        <div class="helpline-top">
          <span class="helpline-badge">${escapeHtml(h.badge)}</span>
          <h4 class="helpline-title">${escapeHtml(h.title)}</h4>
          <p class="helpline-desc">${escapeHtml(h.desc)}</p>
          <div style="font-size: 0.75rem; color: var(--text-subtle); margin-top: 0.5rem;">⏱️ ${escapeHtml(h.timing)}</div>
        </div>
        <div class="helpline-footer">
          <span class="helpline-number">${escapeHtml(h.number)}</span>
          <a href="${h.action}" class="helpline-call-btn">
            📞 Call
          </a>
        </div>
      </div>
    `).join('');
  }

  function renderGlossary() {
    glossaryGrid.innerHTML = GLOSSARY_DATA.map(g => `
      <div class="glossary-item">
        <h4 class="glossary-term">📖 ${escapeHtml(g.term)}</h4>
        <p class="glossary-def">${escapeHtml(g.meaning)}</p>
      </div>
    `).join('');
  }

  // ==========================================
  // SOS EMERGENCY MODAL LOGIC
  // ==========================================

  function initSosModal() {
    // Prioritize high-urgency scenarios: Gyanesh Kumar protest rights, Bus detention, Traffic stop, Phone seizure, Cyber fraud, DK Basu
    const priorityOrder = [
      'protest-gyanesh-kumar-sc-2026',
      'protest-bus-detention-rights',
      'protest-phone-seizure',
      'traffic-keys',
      'arrest-dk-basu',
      'finance-unauthorized-upi',
      'cyber-digital-arrest-scam',
      'protest-sec163-court-access'
    ];

    const sortedSos = [...DAILY_LAWS_DATA.filter(l => l.isSOS)].sort((a, b) => {
      const idxA = priorityOrder.indexOf(a.id);
      const idxB = priorityOrder.indexOf(b.id);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;
      return 0;
    });

    sosScenarioList.innerHTML = sortedSos.slice(0, 8).map((law, index) => `
      <button class="sos-scenario-btn ${index === 0 ? 'active' : ''}" data-id="${law.id}">
        <strong>${escapeHtml(law.title)}</strong>
        <span>${escapeHtml(law.lawAct)}</span>
      </button>
    `).join('');

    // Load first scenario by default
    if (sortedSos.length > 0) {
      loadSosScenario(sortedSos[0]);
    }

    sosScenarioList.querySelectorAll('.sos-scenario-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        sosScenarioList.querySelectorAll('.sos-scenario-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const law = DAILY_LAWS_DATA.find(l => l.id === btn.getAttribute('data-id'));
        if (law) loadSosScenario(law);
      });
    });

    sosSpeakBtn.addEventListener('click', () => {
      const activeScript = sosScriptDisplay.textContent;
      speakText(activeScript);
    });
  }

  function loadSosScenario(law) {
    sosScriptDisplay.textContent = law.sosScript || law.summary;
    sosStepsDisplay.innerHTML = law.whatToDo.map(step => `<li>${escapeHtml(step)}</li>`).join('');
  }

  // ==========================================
  // BOOKMARK MANAGEMENT
  // ==========================================

  function toggleBookmark(lawId) {
    if (bookmarks.includes(lawId)) {
      bookmarks = bookmarks.filter(id => id !== lawId);
      showToast('Removed from saved bookmarks');
    } else {
      bookmarks.push(lawId);
      showToast('Saved to bookmarks');
    }
    localStorage.setItem('dailylaws_bookmarks', JSON.stringify(bookmarks));
    renderLaws();
  }

  // ==========================================
  // COPY CITATION
  // ==========================================

  function copyCitation(lawId) {
    const law = DAILY_LAWS_DATA.find(l => l.id === lawId);
    if (!law) return;

    let citation = `[DailyLaws.IN Citizen Legal Reference]\n`;
    citation += `Subject: ${law.title}\n`;
    citation += `Verdict: ${law.verdict}\n`;
    citation += `Statutory Act: ${law.lawAct}\n`;
    if (law.newLaw) citation += `New Criminal Code (2024): ${law.newLaw}\n`;
    if (law.oldLaw) citation += `Pre-2024 Code: ${law.oldLaw}\n`;
    if (law.landmarkCase) citation += `Landmark Case: ${law.landmarkCase}\n`;
    citation += `\nLearn your rights at https://dailylaws.in`;

    navigator.clipboard.writeText(citation).then(() => {
      showToast('Legal citation copied to clipboard!');
    }).catch(() => {
      showToast('Failed to copy. Please allow clipboard access.');
    });
  }

  // ==========================================
  // TEXT-TO-SPEECH
  // ==========================================

  function speakText(text) {
    if (!('speechSynthesis' in window)) {
      showToast('Speech synthesis not supported in this browser.');
      return;
    }

    window.speechSynthesis.cancel(); // Stop any ongoing speech

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95; // Slightly slower for clarity
    utterance.pitch = 1.0;
    utterance.lang = 'en-IN'; // Indian English accent if available

    utterance.onstart = () => showToast('Playing legal audio script...');
    utterance.onerror = () => showToast('Audio playback error.');

    window.speechSynthesis.speak(utterance);
  }

  // ==========================================
  // TOAST NOTIFICATIONS
  // ==========================================

  let toastTimeout;
  function showToast(message) {
    clearTimeout(toastTimeout);
    toastMessage.textContent = message;
    toast.classList.add('show');
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // ==========================================
  // MODAL CONTROLS
  // ==========================================

  function openModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  // ==========================================
  // THEME SWITCHER
  // ==========================================

  function initTheme() {
    const savedTheme = localStorage.getItem('dailylaws_theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      updateThemeIcon(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
      updateThemeIcon('dark');
    }
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('dailylaws_theme', next);
    updateThemeIcon(next);
  }

  function updateThemeIcon(theme) {
    themeToggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    themeToggleBtn.title = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  }

  // Helper
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
});
