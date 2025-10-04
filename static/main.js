(function(){
  // Dynamic header height -> CSS variable --header-h
  function setHeaderHeight(){
    const header = document.querySelector('.site-header');
    if(!header) return;
    const h = header.getBoundingClientRect().height;
    document.documentElement.style.setProperty('--header-h', h + 'px');
  }

  // Maintain --toc-h for mobile to reserve space when TOC is fixed
  function setTocHeightVar(){
    document.documentElement.style.setProperty('--toc-h', '0px');
  }

  // Compute scroll offset so the heading is fully visible below sticky bars
  function computeScrollOffset(){
    try{
      const header = document.querySelector('.site-header');
      const cssVar = getComputedStyle(document.documentElement).getPropertyValue('--header-h').trim();
      const headerH = cssVar ? parseFloat(cssVar) : (header ? header.getBoundingClientRect().height : 72);
      const isMobile = window.matchMedia('(max-width: 959px)').matches;
      const baseBuffer = isMobile ? 20 : 12;
      return headerH + baseBuffer;
    }catch(_e){
      return 84;
    }
  }

  // Set once early to avoid jump
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setHeaderHeight);
  } else {
    setHeaderHeight();
  }

  // Throttled resize handler for better performance
  let resizeTimeout;
  window.addEventListener('resize', ()=>{
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      setHeaderHeight();
      setTocHeightVar();
    }, 16); // ~60fps
  }, {passive: true});

  const btn = document.getElementById('backToTop');
  if (btn) {
    let scrollTimeout;
    const onScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if(window.scrollY > 300){
          btn.style.display = 'flex';
          btn.style.opacity = '1';
        }else{
          btn.style.opacity = '0';
          setTimeout(() => {
            if (window.scrollY <= 300) {
              btn.style.display = 'none';
            }
      if(e.key === 'Escape'){
        e.preventDefault();
        closeModal({restoreFocus:true, clearInput:false});
        return;
      }
          }, 200);
        }
      }, 16);
    };
    window.addEventListener('scroll', onScroll, {passive:true});
    btn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
  }

  const toc = document.getElementById('toc');
  if(toc){
    toc.addEventListener('click', (e)=>{
      const link = e.target.closest('a[href^="#"]');
      if(!link) return;
      const hash = link.getAttribute('href');
      if(!hash) return;
      const id = hash.slice(1);
      const decoded = decodeURIComponent(id);
      const target = document.getElementById(decoded);
      if(!target) return;
      e.preventDefault();
      const doScroll = ()=>{
        const offset = computeScrollOffset();
        const rect = target.getBoundingClientRect();
        const top = rect.top + window.scrollY - offset;
        try{
          window.scrollTo({top, behavior:'smooth'});
          try{ history.pushState(null, '', '#' + encodeURIComponent(decoded)); }catch(_e){ /* noop */ }
        }catch(_e){
          target.scrollIntoView({behavior:'smooth', block:'start'});
        }
      };
      requestAnimationFrame(() => setTimeout(doScroll, 0));
    });
  }

  // Code copy functionality
  function addCopyButtons() {
    const codeBlocks = document.querySelectorAll('.content pre');
    codeBlocks.forEach(pre => {
      // Skip if already wrapped
      if (pre.parentElement.classList.contains('code-container')) return;
      
      // Wrap pre element
      const container = document.createElement('div');
      container.className = 'code-container';
      pre.parentNode.insertBefore(container, pre);
      container.appendChild(pre);
      
      // Create copy button
      const copyBtn = document.createElement('button');
      copyBtn.className = 'copy-btn';
      copyBtn.textContent = '复制';
      copyBtn.setAttribute('aria-label', '复制代码');
      
      // Add click handler
      copyBtn.addEventListener('click', async () => {
        const code = pre.querySelector('code');
        const text = code ? code.textContent : pre.textContent;
        
        try {
          await navigator.clipboard.writeText(text);
          copyBtn.textContent = '已复制';
          copyBtn.classList.add('copied');
          setTimeout(() => {
            copyBtn.textContent = '复制';
            copyBtn.classList.remove('copied');
          }, 2000);
        } catch (err) {
          // Fallback for older browsers
          const textArea = document.createElement('textarea');
          textArea.value = text;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          
          copyBtn.textContent = '已复制';
          copyBtn.classList.add('copied');
          setTimeout(() => {
            copyBtn.textContent = '复制';
            copyBtn.classList.remove('copied');
          }, 2000);
        }
      });
      
      container.appendChild(copyBtn);
    });
  }

  // Initialize copy buttons when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addCopyButtons);
  } else {
    addCopyButtons();
  }

  // Mobile nav toggle
  function initMenuToggle(){
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('primaryNav');
    if(!toggle || !nav) return;
    const mq = window.matchMedia('(max-width: 800px)');

    function closeMenu(){
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
    }
    function openMenu(){
      nav.classList.add('open');
      toggle.setAttribute('aria-expanded','true');
    }
    toggle.addEventListener('click', ()=>{
      if(nav.classList.contains('open')) closeMenu(); else openMenu();
      // header height may change when nav opens/closes on mobile
      requestAnimationFrame(setHeaderHeight);
    });
    // Close on resize to desktop
    mq.addEventListener('change', e=>{ if(!e.matches) { closeMenu(); requestAnimationFrame(setHeaderHeight);} });
    // Close when clicking a link (for single page feel)
    nav.addEventListener('click', e=>{ if(e.target.closest('a')) { closeMenu(); requestAnimationFrame(setHeaderHeight);} });
  }

  function initSidebarDrawer(){
    const panel = document.querySelector('.sidebar-col');
    const toggle = document.getElementById('sidebarToggle');
    if(!panel || !toggle) return;
    const mq = window.matchMedia('(max-width: 959px)');
    let isMobile = mq.matches;

    function closePanel(){
      panel.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('sidebar-drawer-open');
    }

    function openPanel(){
      panel.classList.add('open');
      toggle.classList.add('active');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('sidebar-drawer-open');
      const tocPanel = document.getElementById('toc');
      const tocToggle = document.getElementById('tocToggle');
      if(tocPanel){
        tocPanel.classList.remove('open');
      }
      if(tocToggle){
        tocToggle.classList.remove('active');
        tocToggle.setAttribute('aria-expanded', 'false');
      }
      document.body.classList.remove('toc-drawer-open');
    }

    function togglePanel(){
      if(panel.classList.contains('open')) closePanel(); else openPanel();
    }

    function sync(){
      isMobile = mq.matches;
      toggle.removeEventListener('click', togglePanel);
      if(isMobile){
        closePanel();
        toggle.addEventListener('click', togglePanel);
      }else{
        panel.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('sidebar-drawer-open');
      }
      setTocHeightVar();
    }

    sync();
    mq.addEventListener('change', sync);

    panel.addEventListener('click', (e)=>{
      if(!isMobile) return;
      if(e.target.closest('a')){
        closePanel();
      }
    });

    document.addEventListener('click', (e)=>{
      if(!isMobile) return;
      if(!panel.classList.contains('open')) return;
      if(panel.contains(e.target) || toggle.contains(e.target)) return;
      closePanel();
    });

    document.addEventListener('keydown', (e)=>{
      if(!isMobile) return;
      if(e.key === 'Escape' && panel.classList.contains('open')){
        closePanel();
        toggle.focus();
      }
    });
  }

  function initTocDrawer(){
    const toc = document.getElementById('toc');
    if(!toc) return;
    const toggle = document.getElementById('tocToggle');
    const mq = window.matchMedia('(max-width: 959px)');
    let isMobile = mq.matches;

    function closePanel(){
      toc.classList.remove('open');
      if(toggle){
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      }
      document.body.classList.remove('toc-drawer-open');
    }

    function openPanel(){
      toc.classList.add('open');
      if(toggle){
        toggle.classList.add('active');
        toggle.setAttribute('aria-expanded', 'true');
      }
      document.body.classList.add('toc-drawer-open');
      const sidebarPanel = document.querySelector('.sidebar-col');
      const sidebarToggle = document.getElementById('sidebarToggle');
      if(sidebarPanel){
        sidebarPanel.classList.remove('open');
      }
      if(sidebarToggle){
        sidebarToggle.classList.remove('active');
        sidebarToggle.setAttribute('aria-expanded', 'false');
      }
      document.body.classList.remove('sidebar-drawer-open');
    }

    function togglePanel(){
      if(toc.classList.contains('open')) closePanel(); else openPanel();
    }

    function sync(){
      isMobile = mq.matches;
      if(toggle){
        toggle.removeEventListener('click', togglePanel);
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      }
      if(isMobile){
        closePanel();
        if(toggle){
          toggle.addEventListener('click', togglePanel);
        }
      }else{
        toc.classList.remove('open');
        document.body.classList.remove('toc-drawer-open');
      }
      setTocHeightVar();
    }

    sync();
    mq.addEventListener('change', sync);

    document.addEventListener('click', (e)=>{
      if(!isMobile) return;
      if(!toc.classList.contains('open')) return;
      if(toc.contains(e.target) || (toggle && toggle.contains(e.target))) return;
      closePanel();
    });

    document.addEventListener('keydown', (e)=>{
      if(!isMobile) return;
      if(e.key === 'Escape' && toc.classList.contains('open')){
        closePanel();
        if(toggle){ toggle.focus(); }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ()=>{
      initMenuToggle();
      initSidebarDrawer();
      initTocDrawer();
      initSearch();
      initContentHighlight();
  initThemeToggle();
      initSidebarScrollMemory();
      setHeaderHeight();
  setTocHeightVar();
      // Offset scroll for initial hash navigation (skip if highlight param is present)
      try{
        const params = new URLSearchParams(window.location.search);
        if(!params.get('highlight') && window.location.hash){
          const id = decodeURIComponent(window.location.hash.slice(1));
          const target = id && document.getElementById(id);
          if(target){
            const doScroll=()=>{
              const offset = computeScrollOffset();
              const rect = target.getBoundingClientRect();
              const top = rect.top + window.scrollY - offset;
              window.scrollTo({top, behavior:'auto'});
            };
            requestAnimationFrame(()=> setTimeout(doScroll, 0));
          }
        }
      }catch(_e){/* noop */}
    });
  } else {
    initMenuToggle();
    initSidebarDrawer();
    initTocDrawer();
    initSearch();
    initContentHighlight();
  initThemeToggle();
    initSidebarScrollMemory();
    setHeaderHeight();
  setTocHeightVar();
    // Same for immediate load state
    try{
      const params = new URLSearchParams(window.location.search);
      if(!params.get('highlight') && window.location.hash){
        const id = decodeURIComponent(window.location.hash.slice(1));
        const target = id && document.getElementById(id);
        if(target){
          const offset = computeScrollOffset();
          const rect = target.getBoundingClientRect();
          const top = rect.top + window.scrollY - offset;
          window.scrollTo({top, behavior:'auto'});
        }
      }
    }catch(_e){/* noop */}
  }
})();

// --- Sidebar scroll position memory ---
function initSidebarScrollMemory(){
  try{
    const el = document.getElementById('sidebar');
    if(!el) return;
    const key = 'sidebar-scrollTop';
    // Restore on load (use rAF to ensure styles applied)
    const saved = sessionStorage.getItem(key);
    if(saved){
      requestAnimationFrame(()=>{
        try{ el.scrollTop = parseInt(saved, 10) || 0; }catch(_e){ el.scrollTop = 0; }
      });
    }
    // Persist on scroll (throttled)
    let ticking = false;
    el.addEventListener('scroll', ()=>{
      if(ticking) return;
      ticking = true;
      requestAnimationFrame(()=>{
        try{ sessionStorage.setItem(key, String(el.scrollTop||0)); }catch(_e){}
        ticking = false;
      });
    }, {passive:true});
    // Also persist right before unload/navigation
    window.addEventListener('beforeunload', ()=>{
      try{ sessionStorage.setItem(key, String(el.scrollTop||0)); }catch(_e){}
    });
  }catch(_e){ /* noop */ }
}

// --- Search ---
function initSearch(){
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  const modal = document.getElementById('searchModal');
  const modalPanel = modal ? modal.querySelector('.search-modal__panel') : null;
  const toggleBtn = document.getElementById('searchToggle');
  const closeBtn = document.getElementById('searchClose');
  const base = (document.body.getAttribute('data-base')||'');
  if(!input || !results || !modal || !toggleBtn) return;

  let index = [];
  let indexPromise = null;
  let active = -1;
  let renderCount = 0;
  let modalOpen = false;
  let lastFocusedElement = null;
  const focusSelector = 'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

  async function ensureIndex(){
    if(index.length) return index;
    if(indexPromise) return indexPromise;
    indexPromise = (async ()=>{
      try{
        const res = await fetch(base + 'search.json', {cache:'no-cache'});
        if(!res.ok){ throw new Error('SEARCH_INDEX_HTTP_' + res.status); }
        index = await res.json();
      }catch(e){
        console.warn('Search index load failed', e);
        index = [];
      }finally{
        indexPromise = null;
      }
      return index;
    })();
    return indexPromise;
  }

  function warmIndex(){
    if(index.length || indexPromise) return;
    ensureIndex().catch(()=>{});
  }

  function scheduleWarmIndex(){
    if(index.length || indexPromise) return;
    if('requestIdleCallback' in window){
      requestIdleCallback(()=>warmIndex(), { timeout: 1500 });
    }else{
      setTimeout(()=>warmIndex(), 800);
    }
  }

  scheduleWarmIndex();
  input.addEventListener('focus', warmIndex);

  function closeResults(){
    results.classList.remove('open');
    results.innerHTML = '';
    results.setAttribute('aria-expanded','false');
    results.setAttribute('aria-busy','false');
    results.removeAttribute('aria-activedescendant');
    active = -1;
  }

  closeResults();

  function trapFocus(e){
    if(!modalOpen || e.key !== 'Tab') return;
    const focusable = modal.querySelectorAll(focusSelector);
    if(!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if(e.shiftKey){
      if(document.activeElement === first){
        e.preventDefault();
        last.focus();
      }
    }else if(document.activeElement === last){
      e.preventDefault();
      first.focus();
    }
  }

  modal.addEventListener('keydown', trapFocus);

  function openModal(){
    if(modalOpen) return;
    modalOpen = true;
    lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.classList.add('search-modal-open');
    modal.classList.add('open');
    toggleBtn.setAttribute('aria-expanded','true');
    closeResults();
    warmIndex();
    requestAnimationFrame(()=>{
      input.focus();
      input.select();
    });
  }

  function closeModal({restoreFocus = true, clearInput = true} = {}){
    if(!modalOpen) return;
    modalOpen = false;
    modal.classList.remove('open');
    document.body.classList.remove('search-modal-open');
    toggleBtn.setAttribute('aria-expanded','false');
    closeResults();
    if(clearInput){
      input.value = '';
    }
    if(restoreFocus && lastFocusedElement && typeof lastFocusedElement.focus === 'function'){
      lastFocusedElement.focus();
    }
    lastFocusedElement = null;
  }

  toggleBtn.addEventListener('click', ()=>{
    if(modalOpen){
      closeModal();
    }else{
      openModal();
    }
  });

  if(closeBtn){
    closeBtn.addEventListener('click', ()=> closeModal());
  }

  if(modal){
    modal.addEventListener('click', (e)=>{
      if(!modalOpen) return;
      if(modalPanel && modalPanel.contains(e.target)) return;
      closeModal();
    });
  }

  function render(items, words){
    // Use DocumentFragment for better performance
    const fragment = document.createDocumentFragment();
    if(!items.length){ 
      closeResults();
      return; 
    }
    
    // Limit results and batch DOM updates
    const itemsToShow = items.slice(0, 30); // Reduced from 50 for better performance
    renderCount += 1;
    const prefix = 'search-item-' + renderCount + '-';
    let idx = 0;
    for(const it of itemsToShow){
      const a = document.createElement('a');
      a.className = 'search-item';
      a.setAttribute('role','option');
      a.id = prefix + (idx++);
      const qParam = words && words.length ? ('?highlight=' + encodeURIComponent(words.join(' '))) : '';
      a.href = base + it.path + qParam;
      const titleHTML = highlightHtml(it.title, words);
      const pathHTML = highlightHtml(it.path, words);
      const snippetText = makeSnippet(it.content||'', words, 30, 100); // Reduced snippet length
      const snippetHTML = snippetText ? `<div class=\"search-item-snippet\">${highlightHtml(snippetText, words)}</div>` : '';
      a.innerHTML = `<div class=\"search-item-title\">${titleHTML}</div><div class=\"search-item-path\">${pathHTML}</div>${snippetHTML}`;
      fragment.appendChild(a);
    }
    
    // Single DOM update
    results.innerHTML = '';
    results.appendChild(fragment);
    results.classList.add('open');
    results.setAttribute('aria-expanded','true');
    results.setAttribute('aria-busy','false');
    active = -1;
    results.removeAttribute('aria-activedescendant');
  }

  function escapeHtml(s){
    return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  function matchItems(q){
    const qs = q.trim().toLowerCase();
    if(!qs) return [];
    const words = Array.from(new Set(qs.split(/\s+/).filter(Boolean))).slice(0, 8);
    return index.filter(it =>{
      const hay = (it.title + ' ' + (it.content||'') + ' ' + (it.tags||'').toString()).toLowerCase();
      return words.every(w => hay.includes(w));
    }).map(it => ({title: it.title, path: it.path, content: it.content||''}));
  }

  let searchTimeout;
  input.addEventListener('input', async () =>{
    clearTimeout(searchTimeout);
    const q = input.value;
    if(!q.trim()){ 
      closeResults();
      return; 
    }
    results.setAttribute('aria-busy','true');
    searchTimeout = setTimeout(async ()=>{
      await ensureIndex();
      const items = matchItems(q);
      const words = Array.from(new Set(q.trim().toLowerCase().split(/\s+/).filter(Boolean))).slice(0, 8);
      render(items, words);
    }, 200); // Increased debounce time for better performance
  });

  input.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){
      e.preventDefault();
      closeModal({restoreFocus:true, clearInput:false});
      return;
    }
    if(!results.classList.contains('open')) return;
    const items = Array.from(results.querySelectorAll('.search-item'));
    if(!items.length) return;
    if(e.key === 'ArrowDown'){
      e.preventDefault(); active = (active + 1) % items.length; setActive(items);
    }else if(e.key === 'ArrowUp'){
      e.preventDefault(); active = (active - 1 + items.length) % items.length; setActive(items);
    }else if(e.key === 'Enter'){
      if(active>=0){ e.preventDefault(); items[active].click(); }
    }
  });

  // Global shortcuts and dismissal
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && modalOpen){
      e.preventDefault();
      closeModal({restoreFocus:true});
    }else if((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)){
      e.preventDefault();
      if(modalOpen){
        input.focus();
        input.select();
      }else{
        openModal();
      }
    }
  });

  document.addEventListener('click', (e)=>{
    if(e.target === input || results.contains(e.target)) return;
    closeResults();
  });

  window.addEventListener('hashchange', ()=>{
    if(modalOpen){
      closeModal({restoreFocus:false});
    }
  });

  function setActive(items){
    items.forEach((el,i)=>{
      if(i===active){
        el.classList.add('active');
        el.setAttribute('aria-selected','true');
        results.setAttribute('aria-activedescendant', el.id || '');
        el.scrollIntoView({block:'nearest'});
      }
      else{
        el.classList.remove('active');
        el.removeAttribute('aria-selected');
      }
    });
    if(active < 0){
      results.removeAttribute('aria-activedescendant');
    }
  }

  function highlightHtml(text, words){
    if(!words || !words.length) return escapeHtml(text);
    let pattern = words.map(escapeRegExp).join('|');
    if(!pattern) return escapeHtml(text);
    const re = new RegExp(`(${pattern})`, 'ig');
    const parts = text.split(re);
    return parts.map((p, i) => i % 2 === 1 ? `<mark>${escapeHtml(p)}</mark>` : escapeHtml(p)).join('');
  }

  function makeSnippet(text, words, ctxBefore=30, ctxLen=120){
    if(!text) return '';
    const lc = text.toLowerCase();
    const ws = (words||[]).filter(Boolean);
    let pos = -1;
    for(const w of ws){
      const i = lc.indexOf(w);
      if(i !== -1){ pos = i; break; }
    }
    if(pos === -1){ pos = 0; }
    const start = Math.max(0, pos - ctxBefore);
    let snippet = text.slice(start, start + ctxLen);
    if(start > 0) snippet = '…' + snippet;
    if(start + ctxLen < text.length) snippet = snippet + '…';
    return snippet;
  }

  function escapeRegExp(s){ return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
}

// --- Theme toggle ---
function initThemeToggle(){
  const btn = document.getElementById('themeToggle');
  if(!btn) return;
  const docEl = document.documentElement;
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const lightColor = '#ffffff';
  const darkColor = '#0f1115';

  function applyIcon(theme){
    // Use simple icons: sun for light, moon for dark, monitor for auto
    if(theme === 'light') btn.textContent = '☀️';
    else if(theme === 'dark') btn.textContent = '🌙';
    else btn.textContent = '🖥️';
  }

  function applyThemeColor(mode){
    if(!themeMeta) return;
    if(mode === 'dark') themeMeta.setAttribute('content', darkColor);
    else if(mode === 'light') themeMeta.setAttribute('content', lightColor);
    else themeMeta.setAttribute('content', getSystemDark() ? darkColor : lightColor);
  }

  function getSystemDark(){
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function currentTheme(){
    try{ const t = localStorage.getItem('theme'); if(t==='light'||t==='dark') return t; }catch(_e){}
    return getSystemDark() ? 'dark' : 'light';
  }

  function setTheme(t){
    if(t === 'light' || t === 'dark'){
      try{ localStorage.setItem('theme', t); }catch(_e){}
      docEl.setAttribute('data-theme', t);
    }else{
      try{ localStorage.removeItem('theme'); }catch(_e){}
      docEl.removeAttribute('data-theme');
    }
    applyIcon(t);
    applyThemeColor(t);
    // Update Mermaid diagrams theme if available
    try{
      if(window.mermaid && mermaid.initialize){
        const theme = (t==='dark') ? 'dark' : (t==='light' ? 'default' : (getSystemDark() ? 'dark' : 'default'));
        mermaid.initialize({ startOnLoad: false, theme });
        if(mermaid.run){ mermaid.run({ querySelector: '.mermaid' }); }
      }
    }catch(_e){}
  }

  // Initialize
  setTheme(currentTheme());

  // Cycle: light -> dark -> auto -> light
  btn.addEventListener('click', ()=>{
    let t;
    try{ t = localStorage.getItem('theme'); }catch(_e){ t = null; }
    if(t === 'light') setTheme('dark');
    else if(t === 'dark') setTheme(null);
    else setTheme('light');
  });

  // React to system scheme changes when in auto mode
  const mql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
  if(mql && mql.addEventListener){
    mql.addEventListener('change', ()=>{
      try{ if(!localStorage.getItem('theme')) setTheme(null); }catch(_e){ setTheme(null); }
    });
  }
}

// Highlight terms on destination page based on ?highlight= query and scroll to first
function initContentHighlight(){
  try{
    const params = new URLSearchParams(window.location.search);
    const q = params.get('highlight');
    if(!q) return;
    const words = Array.from(new Set(q.trim().toLowerCase().split(/\s+/).filter(Boolean)));
    if(!words.length) return;
    const content = document.getElementById('content');
    if(!content) return;
    const first = highlightInElement(content, words);
    if(first){
  const offset = (typeof computeScrollOffset === 'function') ? computeScrollOffset() : (function(){
    const header = document.querySelector('.site-header');
    const cssVar = getComputedStyle(document.documentElement).getPropertyValue('--header-h').trim();
    const headerH = cssVar ? parseFloat(cssVar) : (header ? header.getBoundingClientRect().height : 72);
    return headerH + 8;
  })();
      const go = ()=>{
        const rect = first.getBoundingClientRect();
        const top = rect.top + window.scrollY - offset;
        window.scrollTo({top, behavior:'smooth'});
      };
      // try now and after layout settles
      go();
      requestAnimationFrame(()=> setTimeout(go, 50));
    }
  }catch(e){ /* noop */ }
}

function highlightInElement(root, words){
  if(!root || !words || !words.length) return null;
  const pattern = words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
  if(!pattern) return null;
  const re = new RegExp(`(${pattern})`, 'gi');
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node){
      if(!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      const pe = node.parentElement;
      if(pe && (pe.closest('.MathJax') || pe.closest('mjx-container'))) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  let firstMark = null;
  const nodes = [];
  let n;
  while((n = walker.nextNode())) nodes.push(n);
  for(const textNode of nodes){
    const text = textNode.nodeValue;
    if(!re.test(text)) { re.lastIndex = 0; continue; }
    re.lastIndex = 0;
    const frag = document.createDocumentFragment();
    let lastIndex = 0;
    text.replace(re, (m, _g1, offset)=>{
      if(offset > lastIndex) frag.appendChild(document.createTextNode(text.slice(lastIndex, offset)));
      const mark = document.createElement('mark');
      mark.className = 'hl';
      mark.textContent = m;
      if(!firstMark) firstMark = mark;
      frag.appendChild(mark);
      lastIndex = offset + m.length;
      return m;
    });
    if(lastIndex < text.length) frag.appendChild(document.createTextNode(text.slice(lastIndex)));
    textNode.parentNode.replaceChild(frag, textNode);
  }
  return firstMark;
}
