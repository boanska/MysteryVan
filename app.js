/**
 * ============================================================
 *  DUBA MISTERELOR — app.js
 *  The Mystery Van — Complete Game Logic
 *  Vanilla JS + Firebase Realtime Database
 * ============================================================
 */

/* ── FIREBASE CONFIG ───────────────────────────────────────
   REPLACE with your Firebase project config.
   ─────────────────────────────────────────────────────────── */
const firebaseConfig = {
  apiKey:            "AIzaSyCJ5HmjNEg99jRbWGHC_g6aItOBZRp4-2A",
  authDomain:        "mystery-van.firebaseapp.com",
  databaseURL:       "https://mystery-van-default-rtdb.europe-west1.firebasedatabase.app",
  projectId:         "mystery-van",
  storageBucket:     "mystery-van.firebasestorage.app",
  messagingSenderId: "365600618950",
  appId:             "1:365600618950:web:39f9ba0f47c46bad591ac7"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

/* ── AD MANAGER (isolated, fail-safe) ──────────────────── */
const AdManager = {
  refresh(slotId) {
    if (!document.querySelector('.ad-placeholder')) return;
    const el = slotId ? document.getElementById(slotId) : null;
    // Future: call adsbygoogle.push({}) or refresh banner here
    // Example: if (typeof adsbygoogle !== 'undefined') { adsbygoogle.push({}); }
    void el; // suppress lint
  },
  init() {
    if (!document.querySelector('.ad-placeholder')) return;
    // Future: inject ad scripts here
  }
};

/* ── INTERNATIONALISATION ───────────────────────────────── */
const I18N = {
  en: {
    appTitle:            "Duba Misterelor",
    appSubtitle:         "The Mystery Van",
    tabJoin:             "Join Game",
    tabCreate:           "Create Game",
    labelRoomCode:       "Room Code",
    labelYourName:       "Your Name",
    placeholderName:     "Enter your name…",
    btnJoin:             "🚪 Join Game",
    btnCreate:           "✨ Create Room",
    lobbyTitle:          "🛖 Lobby",
    settingsTitle:       "⚙️ Game Settings",
    labelTheme:          "🎭 Theme",
    placeholderTheme:    "e.g. Victorian murder…",
    labelTime:           "⏱️ Time (min)",
    labelDifficulty:     "🎲 Difficulty",
    diffEasy:            "Easy",
    diffMedium:          "Medium",
    diffHard:            "Hard",
    labelPerps:          "🔪 Perpetrators",
    labelJester:         "🃏 Jester",
    jesterOff:           "❌ Off",
    jesterOn:            "🟢 On",
    jesterRandom:        "🎲 Random",
    jesterHint:          "Requires 5+ players",
    labelPasteJSON:      "📋 Paste Master JSON",
    placeholderJSON:     "Paste AI-generated JSON here…",
    btnGenPrompt:        "✨ Copy AI Prompt",
    btnLoadJSON:         "📋 Load JSON",
    btnStartGame:        "🚀 Start Game",
    btnShowTimer:        "👁️ Timer Visible",
    btnHideTimer:        "🙈 Timer Hidden",
    playersTitle:        "👥 Players",
    premiseTitle:        "📜 The Premise",
    myCharTitle:         "🪪 My Character",
    csRole:              "Role",
    csMotive:            "Motive",
    csSecret:            "Hidden Secret",
    csAccomplices:       "Accomplices",
    csShared:            "Shared Secret",
    btnHoldReveal:       "👁️ Hold to Reveal",
    clueFeedTitle:       "🔍 Investigation Feed",
    btnPause:            "Pause",
    btnRush:             "Rush Clue",
    btnForceVote:        "Force Vote",
    gameIsPaused:        "Game is Paused",
    btnResume:           "▶️ Resume",
    privateClueReceived: "You received a private clue!",
    btnDismiss:          "Dismiss",
    votingTitle:         "🗳️ Blind Vote",
    votingSub:           "All clues are hidden. Trust only your memory.",
    votingInstruction:   "Who do you think is the Perpetrator?",
    btnSubmitVote:       "✅ Submit Vote",
    tallyTitle:          "📊 Counting Votes…",
    resultTitle:         "🏆 Outcome",
    btnBackLobby:        "🚪 Back to Lobby",
    btnConfirm:          "Confirm",
    btnCancel:           "Cancel",
    toastCopied:         "Copied to clipboard! ✅",
    toastJoined:         "Joined room!",
    toastKicked:         "Player kicked.",
    toastStarted:        "Game started!",
    toastVoteSubmitted:  "Vote submitted!",
    toastAdminLeft:      "Admin left. You are now the host!",
    toastResumed:        "Game resumed.",
    toastPaused:         "Game paused.",
    errorNoName:         "Please enter your name.",
    errorNoRoom:         "Please enter a room code.",
    errorRoomNotFound:   "Room not found.",
    errorAlreadyPlaying: "Game already in progress.",
    errorNoJSON:         "Please paste a JSON first.",
    errorBadJSON:        "Invalid JSON format.",
    errorMissingJSON:    "JSON missing required fields.",
    errorNotAdmin:       "Only the host can do this.",
    kickConfirm:         (n) => `Kick ${n} from the game?`,
    perpetratorWins:     "🔪 The Perpetrator Wins!",
    innocentWins:        "🕵️ The Innocents Win!",
    jesterWins:          "🃏 The Jester Wins!",
    tieMessage:          "⚖️ Tie — Perpetrator Wins!",
    roomCodeLabel:       "Room",
    adminBadge:          "HOST",
    sleepIcon:           "💤",
    noCluesYet:          "No clues yet — investigation begins soon…",
    votedLabel:          "✅ Voted",
    waitingVotes:        "Waiting for all votes…",
    perpetratorLabel:    "Perpetrator",
    innocentLabel:       "Innocent",
    jesterLabel:         "Jester",
  },
  ro: {
    appTitle:            "Duba Misterelor",
    appSubtitle:         "The Mystery Van",
    tabJoin:             "Intră în joc",
    tabCreate:           "Creează joc",
    labelRoomCode:       "Cod cameră",
    labelYourName:       "Numele tău",
    placeholderName:     "Introdu numele…",
    btnJoin:             "🚪 Intră în joc",
    btnCreate:           "✨ Creează cameră",
    lobbyTitle:          "🛖 Sală de așteptare",
    settingsTitle:       "⚙️ Setări joc",
    labelTheme:          "🎭 Temă",
    placeholderTheme:    "ex. Crimă victoriană…",
    labelTime:           "⏱️ Timp (min)",
    labelDifficulty:     "🎲 Dificultate",
    diffEasy:            "Ușor",
    diffMedium:          "Mediu",
    diffHard:            "Greu",
    labelPerps:          "🔪 Criminali",
    labelJester:         "🃏 Nebunul",
    jesterOff:           "❌ Dezactivat",
    jesterOn:            "🟢 Activat",
    jesterRandom:        "🎲 Aleatoriu",
    jesterHint:          "Necesită 5+ jucători",
    labelPasteJSON:      "📋 Lipește JSON Master",
    placeholderJSON:     "Lipește JSON-ul generat de AI…",
    btnGenPrompt:        "✨ Copiază prompt AI",
    btnLoadJSON:         "📋 Încarcă JSON",
    btnStartGame:        "🚀 Pornește jocul",
    btnShowTimer:        "👁️ Timer vizibil",
    btnHideTimer:        "🙈 Timer ascuns",
    playersTitle:        "👥 Jucători",
    premiseTitle:        "📜 Premisa",
    myCharTitle:         "🪪 Personajul meu",
    csRole:              "Rol",
    csMotive:            "Mobil",
    csSecret:            "Secret ascuns",
    csAccomplices:       "Complici",
    csShared:            "Secret comun",
    btnHoldReveal:       "👁️ Ține apăsat pentru a citi",
    clueFeedTitle:       "🔍 Feed investigație",
    btnPause:            "Pauză",
    btnRush:             "Grăbește indiciu",
    btnForceVote:        "Forțează vot",
    gameIsPaused:        "Jocul este în pauză",
    btnResume:           "▶️ Continuă",
    privateClueReceived: "Ai primit un indiciu privat!",
    btnDismiss:          "Închide",
    votingTitle:         "🗳️ Vot orb",
    votingSub:           "Toate indiciile sunt ascunse. Ai încredere doar în memorie.",
    votingInstruction:   "Cine crezi că este criminalul?",
    btnSubmitVote:       "✅ Trimite vot",
    tallyTitle:          "📊 Numărare voturi…",
    resultTitle:         "🏆 Rezultat",
    btnBackLobby:        "🚪 Înapoi în sală",
    btnConfirm:          "Confirmă",
    btnCancel:           "Anulează",
    toastCopied:         "Copiat în clipboard! ✅",
    toastJoined:         "Ai intrat în cameră!",
    toastKicked:         "Jucător eliminat.",
    toastStarted:        "Jocul a început!",
    toastVoteSubmitted:  "Vot trimis!",
    toastAdminLeft:      "Gazda a plecat. Ești acum gazda!",
    toastResumed:        "Jocul a continuat.",
    toastPaused:         "Jocul este în pauză.",
    errorNoName:         "Te rugăm să introduci un nume.",
    errorNoRoom:         "Te rugăm să introduci codul camerei.",
    errorRoomNotFound:   "Camera nu a fost găsită.",
    errorAlreadyPlaying: "Jocul este deja în desfășurare.",
    errorNoJSON:         "Te rugăm să lipești un JSON mai întâi.",
    errorBadJSON:        "Format JSON invalid.",
    errorMissingJSON:    "JSON-ului îi lipsesc câmpuri obligatorii.",
    errorNotAdmin:       "Doar gazda poate face asta.",
    kickConfirm:         (n) => `Elimini pe ${n} din joc?`,
    perpetratorWins:     "🔪 Criminalul câștigă!",
    innocentWins:        "🕵️ Nevinovații câștigă!",
    jesterWins:          "🃏 Nebunul câștigă!",
    tieMessage:          "⚖️ Egalitate — Criminalul câștigă!",
    roomCodeLabel:       "Cameră",
    adminBadge:          "GAZDĂ",
    sleepIcon:           "💤",
    noCluesYet:          "Niciun indiciu deocamdată — investigația începe în curând…",
    votedLabel:          "✅ A votat",
    waitingVotes:        "Se așteaptă toate voturile…",
    perpetratorLabel:    "Criminal",
    innocentLabel:       "Nevinovat",
    jesterLabel:         "Nebunul",
  }
};

/* ── STATE ──────────────────────────────────────────────── */
const State = {
  lang:          'en',
  roomId:        null,
  playerName:    null,
  isAdmin:       false,
  gameData:      null,   // parsed master JSON
  timerVisible:  true,
  listeners:     [],     // Firebase listener refs for cleanup
  seenClues:     new Set(),
  myVote:        null,
  serverTimeOffset: 0,
  timerInterval: null,
  pausedRemaining: null, // ms remaining when paused
  privateClueQueue: [],
};

/* ── LANGUAGE HELPERS ───────────────────────────────────── */
function t(key, ...args) {
  const d = I18N[State.lang] || I18N.en;
  const val = d[key] ?? I18N.en[key] ?? key;
  return typeof val === 'function' ? val(...args) : val;
}

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (key) el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (key) el.placeholder = t(key);
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.dataset.i18nTitle;
    if (key) el.title = t(key);
  });
  // Select option texts
  document.querySelectorAll('[data-i18n-opt]').forEach(el => {
    const key = el.dataset.i18nOpt;
    if (key) el.textContent = t(key);
  });
  // Update lang label
  const lbl = document.getElementById('lang-label');
  if (lbl) lbl.textContent = State.lang.toUpperCase();
}

function setLang(lang) {
  State.lang = lang;
  localStorage.setItem('dmLang', lang);
  applyI18n();
}

function detectLang() {
  const saved = localStorage.getItem('dmLang');
  if (saved) return setLang(saved);
  const nav = navigator.language || '';
  if (nav === 'ro' || nav.startsWith('ro-')) return setLang('ro');
  setLang('en');
}

/* ── SCREEN MANAGER ─────────────────────────────────────── */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) {
    el.classList.add('active');
    el.scrollTop = 0;
  }
  // Refresh ads on lobby and resolution
  if (id === 'screen-lobby') {
    AdManager.refresh('ad-lobby-top');
    AdManager.refresh('ad-lobby-bottom');
  }
  if (id === 'screen-resolution') {
    AdManager.refresh('ad-resolution-top');
    AdManager.refresh('ad-resolution-bottom');
  }
}

/* ── TOAST / MODAL ──────────────────────────────────────── */
let toastTimer = null;
function showToast(msg, duration = 2800) {
  const el = document.getElementById('global-toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.add('hidden'), duration);
}

function showModal(msg, onConfirm, onCancel) {
  const overlay = document.getElementById('modal-overlay');
  const msgEl   = document.getElementById('modal-msg');
  const conf    = document.getElementById('modal-confirm');
  const can     = document.getElementById('modal-cancel');
  if (!overlay) return;
  msgEl.textContent = msg;
  conf.textContent  = t('btnConfirm');
  can.textContent   = t('btnCancel');
  overlay.classList.remove('hidden');
  const close = () => overlay.classList.add('hidden');
  conf.onclick = () => { close(); onConfirm && onConfirm(); };
  can.onclick  = () => { close(); onCancel  && onCancel();  };
}

function showStatus(id, msg, type = '') {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = msg;
  el.className = `status-msg${type ? ' ' + type : ''}`;
  el.classList.remove('hidden');
}

/* ── UTILS ──────────────────────────────────────────────── */
function genRoomCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

function nowServer() {
  return Date.now() + State.serverTimeOffset;
}

function fmtTime(ms) {
  if (ms <= 0) return '00:00';
  const s = Math.floor(ms / 1000);
  const m = Math.floor(s / 60);
  const ss = s % 60;
  return `${String(m).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
}

function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => showToast(t('toastCopied')));
  } else {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
    showToast(t('toastCopied'));
  }
}

function cleanListeners() {
  State.listeners.forEach(({ ref, event, fn }) => {
    if (ref && typeof ref.off === 'function') ref.off(event, fn);
  });
  State.listeners = [];
}

function addListener(ref, event, fn) {
  ref.on(event, fn);
  State.listeners.push({ ref, event, fn });
}

/* ── SERVER TIME SYNC ───────────────────────────────────── */
async function syncServerTime() {
  return new Promise(resolve => {
    const offsetRef = db.ref('/.info/serverTimeOffset');
    offsetRef.once('value', snap => {
      State.serverTimeOffset = snap.val() || 0;
      resolve();
    });
  });
}

/* ── ROOM CODE COPY ─────────────────────────────────────── */
function initRoomCodeBadgeClick() {
  ['room-code-display', 'room-pill'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', () => copyToClipboard(State.roomId || ''));
  });
}

/* ── JSON VALIDATION & SPLIT ────────────────────────────── */
function validateMasterJSON(raw) {
  const required = ['game_data', 'players', 'investigation_events'];
  for (const key of required) {
    if (!raw[key]) return `Missing field: ${key}`;
  }
  if (!raw.game_data.initial_premise)  return 'Missing game_data.initial_premise';
  if (!raw.game_data.final_resolution) return 'Missing game_data.final_resolution';
  if (!Array.isArray(raw.players))     return 'players must be an array';
  if (!Array.isArray(raw.investigation_events)) return 'investigation_events must be an array';
  return null;
}

/**
 * Split master JSON into per-player private data + public data
 * so no player can inspect network traffic to find the killer.
 */
function splitJSON(raw, settings) {
  const publicData = {
    initial_premise: raw.game_data.initial_premise,
    final_resolution: raw.game_data.final_resolution,
    status: 'lobby',
    timer_visible: settings.timerVisible,
    theme: settings.theme,
    time_minutes: settings.timeMinutes,
    difficulty: settings.difficulty,
    perps_setting: settings.perps,
    jester_setting: settings.jester,
    public_clues: [],
    triggered_events: [],
  };

  const playerMap = {};
  for (const p of raw.players) {
    playerMap[p.name] = {
      role:          p.role          || 'Innocent',
      motive:        p.motive        || '',
      hidden_secret: p.hidden_secret || '',
      accomplices:   p.accomplices   || [],
      shared_secret: p.shared_secret || [],
      is_online:     false,
      joined_at:     firebase.database.ServerValue.TIMESTAMP,
      private_clues: [],
    };
  }

  // Attach private clues to correct player entries
  for (const ev of raw.investigation_events) {
    if (ev.type === 'private' && ev.targeted_player && playerMap[ev.targeted_player]) {
      const clue = {
        trigger_at_remaining_minutes: ev.trigger_at_remaining_minutes,
        truth:             ev.truth            || '',
        killer_directive:  ev.killer_directive || '',
        content:           ev.content          || ev.truth || '',
        delivered:         false,
        event_id:          `priv_${ev.trigger_at_remaining_minutes}_${ev.targeted_player}`,
      };
      if (!playerMap[ev.targeted_player].private_clues) {
        playerMap[ev.targeted_player].private_clues = [];
      }
      playerMap[ev.targeted_player].private_clues.push(clue);
    }
  }

  // Public events only
  const publicEvents = raw.investigation_events
    .filter(ev => ev.type !== 'private')
    .map(ev => ({
      trigger_at_remaining_minutes: ev.trigger_at_remaining_minutes,
      content:   ev.content || '',
      delivered: false,
      event_id:  `pub_${ev.trigger_at_remaining_minutes}_${Math.random().toString(36).slice(2, 6)}`,
    }));

  return { publicData, playerMap, publicEvents };
}

/* ── FIREBASE: CREATE ROOM ──────────────────────────────── */
async function createRoom(playerName) {
  await syncServerTime();
  const roomId = genRoomCode();
  const roomRef = db.ref(`rooms/${roomId}`);

  await roomRef.set({
    public_data: {
      status:       'lobby',
      timer_visible: true,
      public_clues: [],
      triggered_events: [],
    },
    admin: playerName,
    created_at: firebase.database.ServerValue.TIMESTAMP,
  });

  await db.ref(`rooms/${roomId}/players/${playerName}`).set({
    is_online:  true,
    joined_at:  firebase.database.ServerValue.TIMESTAMP,
    private_clues: [],
  });

  // onDisconnect — mark offline
  db.ref(`rooms/${roomId}/players/${playerName}/is_online`)
    .onDisconnect().set(false);

  return roomId;
}

/* ── FIREBASE: JOIN ROOM ────────────────────────────────── */
async function joinRoom(roomId, playerName) {
  const publicSnap = await db.ref(`rooms/${roomId}/public_data`).once('value');
  if (!publicSnap.exists()) throw new Error(t('errorRoomNotFound'));

  const publicData = publicSnap.val();
  if (publicData.status !== 'lobby') {
    // Allow rejoin
    const playerSnap = await db.ref(`rooms/${roomId}/players/${playerName}`).once('value');
    if (!playerSnap.exists()) throw new Error(t('errorAlreadyPlaying'));
  }

  await db.ref(`rooms/${roomId}/players/${playerName}`).update({
    is_online: true,
    joined_at: firebase.database.ServerValue.TIMESTAMP,
  });

  db.ref(`rooms/${roomId}/players/${playerName}/is_online`)
    .onDisconnect().set(false);

  return publicData;
}

/* ── FIREBASE: UPLOAD GAME DATA ─────────────────────────── */
async function uploadGameData(roomId, splitData, timeMinutes) {
  const { publicData, playerMap, publicEvents } = splitData;
  const updates = {};

  updates[`rooms/${roomId}/public_data`] = {
    ...publicData,
    public_events: publicEvents,
    status: 'lobby',
  };

  for (const [name, data] of Object.entries(playerMap)) {
    // Only update role data for players already in room
    const snap = await db.ref(`rooms/${roomId}/players/${name}`).once('value');
    if (snap.exists()) {
      updates[`rooms/${roomId}/players/${name}/role`]          = data.role;
      updates[`rooms/${roomId}/players/${name}/motive`]        = data.motive;
      updates[`rooms/${roomId}/players/${name}/hidden_secret`] = data.hidden_secret;
      updates[`rooms/${roomId}/players/${name}/accomplices`]   = data.accomplices;
      updates[`rooms/${roomId}/players/${name}/shared_secret`] = data.shared_secret;
      updates[`rooms/${roomId}/players/${name}/private_clues`] = data.private_clues || [];
    }
  }

  await db.ref().update(updates);
  showStatus('json-status', '✅ JSON loaded!', 'success');
}

/* ── LOBBY SCREEN ───────────────────────────────────────── */
function enterLobby(roomId, playerName, isAdmin) {
  State.roomId    = roomId;
  State.playerName = playerName;
  State.isAdmin   = isAdmin;

  localStorage.setItem('dmRoom', roomId);
  localStorage.setItem('dmPlayer', playerName);

  document.getElementById('room-code-display').textContent = roomId;
  document.getElementById('room-pill').textContent = roomId;
  initRoomCodeBadgeClick();

  // Show or hide host settings
  const hostSettings = document.getElementById('host-settings');
  if (hostSettings) {
    hostSettings.classList.toggle('hidden', !isAdmin);
  }

  showScreen('screen-lobby');
  AdManager.refresh('ad-lobby-top');

  listenLobby(roomId, playerName, isAdmin);
}

function listenLobby(roomId, playerName, isAdmin) {
  cleanListeners();

  // Players list
  const playersRef = db.ref(`rooms/${roomId}/players`);
  const playersFn = snap => {
    const players = snap.val() || {};
    renderLobbyPlayers(players, playerName, isAdmin, roomId);

    // Enable/disable jester based on player count
    const count = Object.keys(players).length;
    const jesterSel = document.getElementById('setting-jester');
    if (jesterSel) jesterSel.disabled = count < 5;
  };
  addListener(playersRef, 'value', playersFn);

  // Public data (status changes)
  const pubRef = db.ref(`rooms/${roomId}/public_data/status`);
  const pubFn = snap => {
    const status = snap.val();
    if (status === 'playing' || status === 'paused') {
      enterPlayingScreen(roomId, playerName, isAdmin);
    } else if (status === 'voting_blind') {
      enterVotingScreen(roomId, playerName);
    } else if (status === 'resolution') {
      enterResolutionScreen(roomId, playerName);
    }
  };
  addListener(pubRef, 'value', pubFn);

  // Admin transfer
  const adminRef = db.ref(`rooms/${roomId}/admin`);
  const adminFn = snap => {
    const newAdmin = snap.val();
    if (newAdmin && newAdmin !== playerName && State.isAdmin) {
      State.isAdmin = false;
      document.getElementById('host-settings')?.classList.add('hidden');
    }
    if (newAdmin === playerName && !State.isAdmin) {
      State.isAdmin = true;
      document.getElementById('host-settings')?.classList.remove('hidden');
      showToast(t('toastAdminLeft'));
    }
    State.isAdmin = (newAdmin === playerName);
  };
  addListener(adminRef, 'value', adminFn);
}

function renderLobbyPlayers(players, myName, isAdmin, roomId) {
  const list = document.getElementById('player-list');
  if (!list) return;
  list.innerHTML = '';
  const adminName = State.isAdmin ? myName : null;

  // Sort by join time
  const sorted = Object.entries(players).sort((a, b) =>
    (a[1].joined_at || 0) - (b[1].joined_at || 0)
  );

  for (const [name, data] of sorted) {
    const row = document.createElement('div');
    row.className = 'player-row';

    const dot = document.createElement('span');
    dot.className = `player-status-dot${data.is_online === false ? ' offline' : ''}`;

    const label = document.createElement('span');
    label.className = 'player-name-label';
    label.appendChild(dot);

    const sleep = data.is_online === false ? ` ${t('sleepIcon')}` : '';
    label.append(` ${name}${sleep}`);

    row.appendChild(label);

    // Admin badge
    const adminSnap = db.ref(`rooms/${roomId}/admin`);
    // We check via State
    const isThisAdmin = (name === (State.isAdmin ? myName : null));
    db.ref(`rooms/${roomId}/admin`).once('value').then(snap => {
      if (snap.val() === name) {
        const badge = document.createElement('span');
        badge.className = 'player-admin-badge';
        badge.textContent = t('adminBadge');
        row.insertBefore(badge, row.firstChild.nextSibling);
      }
    });

    // Kick button (admin only, not self)
    if (isAdmin && name !== myName) {
      const kickBtn = document.createElement('button');
      kickBtn.className = 'btn-kick';
      kickBtn.textContent = '🚪';
      kickBtn.title = 'Kick';
      kickBtn.addEventListener('click', () => {
        showModal(t('kickConfirm', name), () => kickPlayer(roomId, name));
      });
      row.appendChild(kickBtn);
    }

    list.appendChild(row);
  }
}

async function kickPlayer(roomId, playerName) {
  const playerRef = db.ref(`rooms/${roomId}/players/${playerName}`);
  const snap = await playerRef.once('value');
  if (!snap.exists()) return;

  const playerData = snap.val();
  const role = (playerData.role || '').toLowerCase();

  if (role === 'perpetrator') {
    // Perpetrator kicked → Innocent Victory
    await db.ref(`rooms/${roomId}/public_data`).update({
      status: 'resolution',
      resolution_type: 'perpetrator_kicked',
      kicked_player: playerName,
    });
  } else {
    // Innocent kicked → reveal their secret
    const secret = playerData.hidden_secret || '';
    if (secret) {
      const clueText = `💀 ${playerName} was removed. Their secret: "${secret}"`;
      const clueRef = db.ref(`rooms/${roomId}/public_data/public_clues`).push();
      await clueRef.set({ content: clueText, ts: firebase.database.ServerValue.TIMESTAMP });
    }
  }

  await playerRef.remove();
  showToast(t('toastKicked'));
  await handleAdminMigration(roomId);
}

async function handleAdminMigration(roomId) {
  const adminSnap = await db.ref(`rooms/${roomId}/admin`).once('value');
  const currentAdmin = adminSnap.val();
  const playersSnap  = await db.ref(`rooms/${roomId}/players`).once('value');
  const players      = playersSnap.val() || {};

  // Check if current admin is still in players
  if (players[currentAdmin] && players[currentAdmin].is_online !== false) return;

  // Find oldest online player
  const sorted = Object.entries(players)
    .filter(([, d]) => d.is_online !== false)
    .sort((a, b) => (a[1].joined_at || 0) - (b[1].joined_at || 0));

  if (sorted.length > 0) {
    await db.ref(`rooms/${roomId}/admin`).set(sorted[0][0]);
  }
}

/* ── START GAME ─────────────────────────────────────────── */
async function startGame(roomId) {
  const settings = getSettings();
  const timeMs = settings.timeMinutes * 60 * 1000;
  const now = nowServer();

  await db.ref(`rooms/${roomId}/public_data`).update({
    status:       'playing',
    end_timestamp: now + timeMs,
    paused_remaining: null,
    started_at:   firebase.database.ServerValue.TIMESTAMP,
    timer_visible: settings.timerVisible,
  });

  showToast(t('toastStarted'));
}

function getSettings() {
  return {
    theme:        (document.getElementById('setting-theme')?.value || '').trim(),
    timeMinutes:  parseInt(document.getElementById('setting-time')?.value || '30', 10),
    difficulty:   document.getElementById('setting-difficulty')?.value || 'Medium',
    perps:        document.getElementById('setting-perps')?.value || '1',
    jester:       document.getElementById('setting-jester')?.value || 'off',
    timerVisible: State.timerVisible,
  };
}

/* ── PLAYING SCREEN ─────────────────────────────────────── */
function enterPlayingScreen(roomId, playerName, isAdmin) {
  cleanListeners();
  showScreen('screen-playing');

  document.getElementById('room-pill').textContent = roomId;

  const adminControls = document.getElementById('admin-play-controls');
  if (adminControls) adminControls.classList.toggle('hidden', !isAdmin);

  // My character data
  db.ref(`rooms/${roomId}/players/${playerName}`).once('value').then(snap => {
    const data = snap.val() || {};
    renderCharacterSheet(data);
    // Check for any pending private clues
    if (Array.isArray(data.private_clues)) {
      data.private_clues.filter(c => !c.delivered).forEach(c => {
        State.privateClueQueue.push(c);
      });
    }
  });

  // Premise
  db.ref(`rooms/${roomId}/public_data/initial_premise`).once('value').then(snap => {
    const el = document.getElementById('premise-text');
    if (el) el.textContent = snap.val() || '—';
  });

  // Listen for status changes
  const statusRef = db.ref(`rooms/${roomId}/public_data/status`);
  const statusFn = snap => {
    const status = snap.val();
    if (status === 'voting_blind') enterVotingScreen(roomId, playerName);
    else if (status === 'resolution') enterResolutionScreen(roomId, playerName);
    else if (status === 'paused') showPauseOverlay(true);
    else if (status === 'playing') showPauseOverlay(false);
  };
  addListener(statusRef, 'value', statusFn);

  // Timer
  const timerRef = db.ref(`rooms/${roomId}/public_data`);
  const timerFn = snap => {
    const pd = snap.val() || {};
    State.timerVisible = pd.timer_visible !== false;
    updateTimerDisplay(pd);
    // Trigger clue delivery check
    if (isAdmin && pd.status === 'playing') {
      checkAndDeliverClues(roomId, pd);
    }
  };
  addListener(timerRef, 'value', timerFn);

  // Public clues
  const cluesRef = db.ref(`rooms/${roomId}/public_data/public_clues`);
  const cluesFn = snap => {
    const clues = snap.val() || {};
    renderClueFeed(clues);
  };
  addListener(cluesRef, 'value', cluesFn);

  // My private clues listener
  const privRef = db.ref(`rooms/${roomId}/players/${playerName}/private_clues`);
  const privFn = snap => {
    const clues = snap.val() || [];
    const arr = Array.isArray(clues) ? clues : Object.values(clues);
    const pending = arr.filter(c => !c.delivered);
    if (pending.length > 0) {
      pending.forEach(c => {
        if (!State.seenClues.has(c.event_id)) {
          State.seenClues.add(c.event_id);
          showPrivateClue(c);
        }
      });
    }
  };
  addListener(privRef, 'value', privFn);

  // Players online status
  const playersRef = db.ref(`rooms/${roomId}/players`);
  const playFn = snap => {
    renderMiniPlayerList(snap.val() || {}, playerName, isAdmin, roomId);
  };
  addListener(playersRef, 'value', playFn);

  // Admin: handle own disconnect → migration
  if (isAdmin) {
    db.ref(`rooms/${roomId}/players/${playerName}/is_online`)
      .onDisconnect().set(false);
    // Trigger admin migration check on disconnect
    db.ref(`rooms/${roomId}/admin`)
      .onDisconnect().transaction(current => {
        // Will be handled by reconnect logic
        return current;
      });
  }

  // Start local timer loop
  startTimerLoop(roomId, playerName, isAdmin);
}

function startTimerLoop(roomId, playerName, isAdmin) {
  clearInterval(State.timerInterval);
  State.timerInterval = setInterval(() => {
    db.ref(`rooms/${roomId}/public_data`).once('value').then(snap => {
      const pd = snap.val() || {};
      if (pd.status === 'playing') {
        const rem = pd.end_timestamp - nowServer();
        updateTimerUI(rem, pd.timer_visible !== false);
        if (rem <= 0 && isAdmin) {
          clearInterval(State.timerInterval);
          db.ref(`rooms/${roomId}/public_data/status`).set('voting_blind');
        }
      }
    });
  }, 1000);
}

function updateTimerDisplay(pd) {
  if (pd.status === 'playing') {
    const rem = pd.end_timestamp - nowServer();
    updateTimerUI(rem, pd.timer_visible !== false);
  } else if (pd.status === 'paused' && pd.paused_remaining != null) {
    updateTimerUI(pd.paused_remaining, pd.timer_visible !== false);
  }
}

function updateTimerUI(remainingMs, visible) {
  const display = document.getElementById('timer-display');
  const val     = document.getElementById('timer-value');
  if (!val) return;
  val.textContent = visible ? fmtTime(remainingMs) : '??:??';
  if (display) {
    display.classList.toggle('hidden-timer', !visible);
    display.classList.toggle('warning', visible && remainingMs <= 5 * 60 * 1000 && remainingMs > 0);
  }
}

function showPauseOverlay(show) {
  const overlay = document.getElementById('pause-overlay');
  if (overlay) overlay.classList.toggle('hidden', !show);
}

/* ── CLUE DELIVERY (Admin only) ─────────────────────────── */
async function checkAndDeliverClues(roomId, pd) {
  if (!pd.end_timestamp || !pd.public_events) return;
  const remMin = (pd.end_timestamp - nowServer()) / 60000;

  const events = Array.isArray(pd.public_events) ? pd.public_events : Object.values(pd.public_events || {});
  const triggered = Array.isArray(pd.triggered_events) ? pd.triggered_events : [];

  for (const ev of events) {
    if (triggered.includes(ev.event_id)) continue;
    if (remMin <= ev.trigger_at_remaining_minutes) {
      // Deliver public clue
      const clueRef = db.ref(`rooms/${roomId}/public_data/public_clues`).push();
      await clueRef.set({
        content: ev.content,
        ts:      firebase.database.ServerValue.TIMESTAMP,
        event_id: ev.event_id,
      });
      // Mark as triggered
      await db.ref(`rooms/${roomId}/public_data/triggered_events`).transaction(curr => {
        const arr = Array.isArray(curr) ? curr : [];
        if (!arr.includes(ev.event_id)) arr.push(ev.event_id);
        return arr;
      });
    }
  }

  // Private clues — check per player
  const playersSnap = await db.ref(`rooms/${roomId}/players`).once('value');
  const players = playersSnap.val() || {};
  for (const [pName, pData] of Object.entries(players)) {
    const privClues = Array.isArray(pData.private_clues) ? pData.private_clues : Object.values(pData.private_clues || {});
    let changed = false;
    const updated = privClues.map(c => {
      if (!c.delivered && remMin <= c.trigger_at_remaining_minutes) {
        changed = true;
        return { ...c, delivered: true };
      }
      return c;
    });
    if (changed) {
      await db.ref(`rooms/${roomId}/players/${pName}/private_clues`).set(updated);
    }
  }
}

function renderClueFeed(clues) {
  const feed = document.getElementById('clue-feed');
  if (!feed) return;
  const arr = Object.values(clues || {}).sort((a, b) => (a.ts || 0) - (b.ts || 0));
  if (arr.length === 0) {
    feed.innerHTML = `<p class="hint">${t('noCluesYet')}</p>`;
    return;
  }
  const existing = new Set(Array.from(feed.querySelectorAll('.clue-item')).map(e => e.dataset.id));
  for (const clue of arr) {
    const id = clue.event_id || clue.ts;
    if (existing.has(String(id))) continue;
    const item = document.createElement('div');
    item.className = 'clue-item new';
    item.dataset.id = id;
    const time = document.createElement('span');
    time.className = 'clue-time';
    time.textContent = clue.ts ? new Date(clue.ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
    item.appendChild(time);
    item.append(clue.content || '');
    feed.appendChild(item);
  }
  feed.scrollTop = feed.scrollHeight;
}

function renderCharacterSheet(data) {
  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val || '—';
  };
  set('cs-role',    data.role);
  set('cs-motive',  data.motive);
  set('cs-secret',  data.hidden_secret);

  const acc = Array.isArray(data.accomplices) ? data.accomplices.join(', ') : '';
  const accRow = document.getElementById('cs-accomplices-row');
  if (accRow) accRow.style.display = acc ? 'flex' : 'none';
  set('cs-accomplices', acc);

  const shared = Array.isArray(data.shared_secret) ? data.shared_secret.join('; ') : '';
  const shRow = document.getElementById('cs-shared-row');
  if (shRow) shRow.style.display = shared ? 'flex' : 'none';
  set('cs-shared', shared);
}

function renderMiniPlayerList(players, myName, isAdmin, roomId) {
  const list = document.getElementById('players-mini-list');
  if (!list) return;
  list.innerHTML = '';
  for (const [name, data] of Object.entries(players)) {
    const chip = document.createElement('div');
    chip.className = `mini-player-chip${data.is_online === false ? ' offline' : ''}`;
    chip.textContent = name;
    if (data.is_online === false) {
      const sleep = document.createElement('span');
      sleep.className = 'sleep-icon';
      sleep.textContent = t('sleepIcon');
      chip.appendChild(sleep);
    }
    list.appendChild(chip);
  }
}

function showPrivateClue(clue) {
  const toast  = document.getElementById('private-clue-toast');
  const content = document.getElementById('private-clue-content');
  if (!toast || !content) return;
  content.textContent = clue.content || clue.truth || '';
  content.classList.add('blurred');
  toast.classList.remove('hidden');
}

/* ── PAUSE / RESUME ─────────────────────────────────────── */
async function pauseGame(roomId) {
  const snap = await db.ref(`rooms/${roomId}/public_data`).once('value');
  const pd   = snap.val() || {};
  if (pd.status !== 'playing') return;
  const rem = pd.end_timestamp - nowServer();
  await db.ref(`rooms/${roomId}/public_data`).update({
    status: 'paused',
    paused_remaining: rem,
    end_timestamp: null,
  });
  showToast(t('toastPaused'));
}

async function resumeGame(roomId) {
  const snap = await db.ref(`rooms/${roomId}/public_data`).once('value');
  const pd   = snap.val() || {};
  if (pd.status !== 'paused') return;
  const rem = pd.paused_remaining || 0;
  await db.ref(`rooms/${roomId}/public_data`).update({
    status: 'playing',
    end_timestamp: nowServer() + rem,
    paused_remaining: null,
  });
  showToast(t('toastResumed'));
}

/* ── RUSH CLUE ──────────────────────────────────────────── */
async function rushClue(roomId) {
  const snap = await db.ref(`rooms/${roomId}/public_data`).once('value');
  const pd   = snap.val() || {};
  if (pd.status !== 'playing') return;
  // Subtract 2 minutes
  const newEnd = pd.end_timestamp - (2 * 60 * 1000);
  await db.ref(`rooms/${roomId}/public_data/end_timestamp`).set(newEnd);
  // Force deliver next pending clue
  await checkAndDeliverClues(roomId, { ...pd, end_timestamp: newEnd });
}

/* ── VOTING SCREEN ──────────────────────────────────────── */
function enterVotingScreen(roomId, playerName) {
  cleanListeners();
  clearInterval(State.timerInterval);
  showScreen('screen-voting');
  State.myVote = null;

  const submitBtn = document.getElementById('btn-submit-vote');
  if (submitBtn) submitBtn.disabled = true;

  // Load player list
  db.ref(`rooms/${roomId}/players`).once('value').then(snap => {
    const players = snap.val() || {};
    renderVotingList(players, playerName, roomId);
  });

  // Listen for vote completion
  const votesRef = db.ref(`rooms/${roomId}/votes`);
  const votesFn = snap => {
    const votes = snap.val() || {};
    const voteStatus = document.getElementById('vote-status');
    const total = Object.keys(votes).length;
    db.ref(`rooms/${roomId}/players`).once('value').then(pSnap => {
      const players = pSnap.val() || {};
      const playerCount = Object.keys(players).length;
      if (total >= playerCount) {
        // All voted
        if (voteStatus) voteStatus.classList.add('hidden');
        tallyVotes(roomId, votes, players);
      } else {
        showStatus('vote-status', `${t('waitingVotes')} (${total}/${playerCount})`);
      }
    });
  };
  addListener(votesRef, 'value', votesFn);
}

function renderVotingList(players, myName, roomId) {
  const list = document.getElementById('voting-player-list');
  if (!list) return;
  list.innerHTML = '';
  for (const [name] of Object.entries(players)) {
    if (name === myName) continue; // Can't vote for self
    const opt = document.createElement('div');
    opt.className = 'vote-option';
    opt.dataset.name = name;

    const radio = document.createElement('div');
    radio.className = 'vote-radio';
    const nameSpan = document.createElement('span');
    nameSpan.textContent = name;

    opt.appendChild(radio);
    opt.appendChild(nameSpan);
    opt.addEventListener('click', () => selectVote(opt, name));
    list.appendChild(opt);
  }
}

function selectVote(opt, name) {
  document.querySelectorAll('.vote-option').forEach(o => o.classList.remove('selected'));
  opt.classList.add('selected');
  State.myVote = name;
  const submitBtn = document.getElementById('btn-submit-vote');
  if (submitBtn) submitBtn.disabled = false;
}

async function submitVote(roomId, playerName) {
  if (!State.myVote) return;
  await db.ref(`rooms/${roomId}/votes/${playerName}`).set(State.myVote);
  const submitBtn = document.getElementById('btn-submit-vote');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = t('votedLabel');
  }
  showToast(t('toastVoteSubmitted'));
}

async function tallyVotes(roomId, votes, players) {
  // Count votes
  const tally = {};
  for (const voted of Object.values(votes)) {
    tally[voted] = (tally[voted] || 0) + 1;
  }

  // Show tally overlay
  const overlay = document.getElementById('vote-tally-overlay');
  const barsEl  = document.getElementById('tally-bars');
  if (overlay && barsEl) {
    overlay.classList.remove('hidden');
    barsEl.innerHTML = '';
    const maxVotes = Math.max(...Object.values(tally), 1);
    for (const [name, count] of Object.entries(tally)) {
      const row = document.createElement('div');
      row.className = 'tally-bar-row';
      const label = document.createElement('div');
      label.className = 'tally-bar-label';
      label.textContent = name;
      const track = document.createElement('div');
      track.className = 'tally-bar-track';
      const fill = document.createElement('div');
      fill.className = 'tally-bar-fill';
      fill.textContent = count;
      track.appendChild(fill);
      row.appendChild(label);
      row.appendChild(track);
      barsEl.appendChild(row);
      // Animate after short delay
      setTimeout(() => {
        fill.style.width = `${(count / maxVotes) * 100}%`;
      }, 400);
    }
  }

  // Determine winner after cinematic delay
  setTimeout(async () => {
    // Find most voted
    let maxCount = 0;
    let topVoted = [];
    for (const [name, count] of Object.entries(tally)) {
      if (count > maxCount) { maxCount = count; topVoted = [name]; }
      else if (count === maxCount) topVoted.push(name);
    }

    let resType = 'innocent_wins';
    let votedOut = topVoted[0];

    if (topVoted.length > 1) {
      // Tie — Perpetrator wins
      resType = 'tie_perpetrator_wins';
    } else {
      const playerData = players[votedOut];
      const role = (playerData?.role || '').toLowerCase();
      if (role === 'perpetrator')   resType = 'innocent_wins';
      else if (role === 'jester')   resType = 'jester_wins';
      else                          resType = 'perpetrator_wins';
    }

    await db.ref(`rooms/${roomId}/public_data`).update({
      status: 'resolution',
      resolution_type: resType,
      voted_out: votedOut,
    });

    if (overlay) overlay.classList.add('hidden');
  }, 5000);
}

/* ── RESOLUTION SCREEN ──────────────────────────────────── */
async function enterResolutionScreen(roomId, playerName) {
  cleanListeners();
  clearInterval(State.timerInterval);
  showScreen('screen-resolution');

  const pd = (await db.ref(`rooms/${roomId}/public_data`).once('value')).val() || {};
  const players = (await db.ref(`rooms/${roomId}/players`).once('value')).val() || {};

  // Headline
  let headline = '🎉 Resolution';
  const resType = pd.resolution_type || '';
  if (resType === 'innocent_wins')          headline = t('innocentWins');
  else if (resType === 'perpetrator_wins')  headline = t('perpetratorWins');
  else if (resType === 'jester_wins')       headline = t('jesterWins');
  else if (resType === 'tie_perpetrator_wins') headline = t('tieMessage');
  else if (resType === 'perpetrator_kicked') headline = t('innocentWins') + ' (kicked)';

  const headlineEl = document.getElementById('resolution-headline');
  if (headlineEl) headlineEl.textContent = headline;

  // Resolution text
  const resText = document.getElementById('resolution-text');
  if (resText) resText.textContent = pd.final_resolution || '—';

  // Player results
  const resultContent = document.getElementById('result-content');
  if (resultContent) {
    resultContent.innerHTML = '';
    for (const [name, data] of Object.entries(players)) {
      const row = document.createElement('div');
      row.className = 'result-row';
      const nameEl = document.createElement('span');
      nameEl.style.fontWeight = '700';
      nameEl.style.fontFamily = "'Fredoka', sans-serif";
      nameEl.textContent = name;

      const badge = document.createElement('span');
      const role = (data.role || 'innocent').toLowerCase();
      badge.className = `result-role-badge ${role}`;
      let roleLabel = data.role || 'Innocent';
      if (role === 'perpetrator') roleLabel = t('perpetratorLabel');
      else if (role === 'jester') roleLabel = t('jesterLabel');
      else roleLabel = t('innocentLabel');
      badge.textContent = roleLabel;

      const secret = document.createElement('span');
      secret.style.fontSize = '0.8rem';
      secret.style.color = 'var(--wood-mid)';
      secret.style.marginLeft = 'auto';
      secret.textContent = data.hidden_secret || '';

      row.appendChild(nameEl);
      row.appendChild(badge);
      row.appendChild(secret);
      resultContent.appendChild(row);
    }
  }

  localStorage.removeItem('dmRoom');
  localStorage.removeItem('dmPlayer');
}

/* ── GENERATE AI PROMPT ─────────────────────────────────── */
function generatePrompt() {
  const settings = getSettings();
  const playerNames = [];
  document.querySelectorAll('.player-name-label').forEach(el => {
    const text = el.textContent.trim().replace(t('sleepIcon'), '').trim();
    if (text) playerNames.push(text);
  });

  const langName = State.lang === 'ro' ? 'Romanian' : 'English';
  const perpLogic = settings.perps === 'random'
    ? 'Choose 1 or 2 perpetrators randomly. Add accomplices array if 2.'
    : settings.perps === '2'
    ? '2 perpetrators with an accomplices array linking them.'
    : '1 perpetrator with no accomplices.';

  const jesterLogic = settings.jester === 'off'
    ? 'No Jester.'
    : settings.jester === 'on'
    ? 'Include exactly one Jester (role: "Jester"). Jester wins if they are voted out.'
    : 'Randomly include or exclude a Jester (50/50). If included, role: "Jester". Jester wins if voted out.';

  const sharedSecretRule = settings.difficulty === 'Hard' || settings.difficulty === 'Greu'
    ? '4. For Hard difficulty: add a shared_secret array to 2 innocent players — a secret only they both know. This creates trust bonds and possible deception.'
    : '';

  const prompt = `You are a master mystery novelist generating a party game in ${langName}.
Theme: ${settings.theme || 'Classic murder mystery'}.
Difficulty: ${settings.difficulty}.
Total Game Time: ${settings.timeMinutes} minutes.
Players: [${playerNames.join(', ')}].

Rules:
1. Perpetrators: ${perpLogic}
2. The Jester: ${jesterLogic}
3. Create deep, messy character backgrounds. Every Innocent must have a hidden_secret — something embarrassing or suspicious they are hiding, unrelated to the crime.
${sharedSecretRule}
5. Pacing: Generate clues in an investigation_events array. Each event has trigger_at_remaining_minutes (how many minutes left when it fires). Mix public clues (seen by all) and private clues (sent only to targeted_player).
6. Lie Traps: At least one private clue must be sent early (targeted_player gets a truth to confess or lie about). A LATER public clue must expose whether they lied. Mark private clues with killer_directive for the perpetrator's strategy.

Output MUST be strictly valid JSON, no markdown, no extra text:
{
  "game_data": {
    "initial_premise": "string — opening scene description",
    "final_resolution": "string — full resolution narrative"
  },
  "players": [
    {
      "name": "ExactPlayerName",
      "role": "Perpetrator | Innocent | Jester",
      "accomplices": [],
      "motive": "string",
      "hidden_secret": "string",
      "shared_secret": []
    }
  ],
  "investigation_events": [
    {
      "trigger_at_remaining_minutes": 20,
      "type": "public",
      "content": "string — clue text visible to all"
    },
    {
      "trigger_at_remaining_minutes": 15,
      "type": "private",
      "targeted_player": "ExactPlayerName",
      "truth": "string — what really happened",
      "killer_directive": "string — instruction for the perpetrator (empty for innocents)",
      "content": "string — the private clue text shown to this player"
    }
  ]
}`;

  copyToClipboard(prompt);
}

/* ── SESSION RESTORE ────────────────────────────────────── */
async function tryRestoreSession() {
  const roomId     = localStorage.getItem('dmRoom');
  const playerName = localStorage.getItem('dmPlayer');
  if (!roomId || !playerName) return false;

  try {
    await syncServerTime();
    const snap = await db.ref(`rooms/${roomId}`).once('value');
    if (!snap.exists()) {
      localStorage.removeItem('dmRoom');
      localStorage.removeItem('dmPlayer');
      return false;
    }

    const room = snap.val();
    const status = room.public_data?.status;
    const playerExists = room.players?.[playerName];
    if (!playerExists) {
      localStorage.removeItem('dmRoom');
      localStorage.removeItem('dmPlayer');
      return false;
    }

    // Re-mark online
    await db.ref(`rooms/${roomId}/players/${playerName}/is_online`).set(true);
    db.ref(`rooms/${roomId}/players/${playerName}/is_online`).onDisconnect().set(false);

    const isAdmin = room.admin === playerName;
    State.roomId = roomId;
    State.playerName = playerName;
    State.isAdmin = isAdmin;

    if (status === 'lobby')           enterLobby(roomId, playerName, isAdmin);
    else if (status === 'playing' || status === 'paused') enterPlayingScreen(roomId, playerName, isAdmin);
    else if (status === 'voting_blind') enterVotingScreen(roomId, playerName);
    else if (status === 'resolution')   enterResolutionScreen(roomId, playerName);

    return true;
  } catch (e) {
    console.warn('Session restore failed:', e);
    return false;
  }
}

/* ── HOLD-TO-REVEAL LOGIC ───────────────────────────────── */
function initHoldReveal(btnId, targetId) {
  const btn    = document.getElementById(btnId);
  const target = document.getElementById(targetId);
  if (!btn || !target) return;

  const reveal  = () => target.classList.remove('blurred');
  const conceal = () => target.classList.add('blurred');

  btn.addEventListener('mousedown',  reveal);
  btn.addEventListener('touchstart', reveal, { passive: true });
  btn.addEventListener('mouseup',    conceal);
  btn.addEventListener('touchend',   conceal);
  btn.addEventListener('mouseleave', conceal);
  btn.addEventListener('touchcancel', conceal);
}

/* ── DOM READY ──────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', async () => {
  // Language
  detectLang();

  // Language toggle button
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      setLang(State.lang === 'en' ? 'ro' : 'en');
    });
  }

  // Tabs
  document.getElementById('tab-join')?.addEventListener('click', () => {
    document.getElementById('tab-join')?.classList.add('active');
    document.getElementById('tab-create')?.classList.remove('active');
    document.getElementById('tab-panel-join')?.classList.add('active');
    document.getElementById('tab-panel-create')?.classList.remove('active');
  });
  document.getElementById('tab-create')?.addEventListener('click', () => {
    document.getElementById('tab-create')?.classList.add('active');
    document.getElementById('tab-join')?.classList.remove('active');
    document.getElementById('tab-panel-create')?.classList.add('active');
    document.getElementById('tab-panel-join')?.classList.remove('active');
  });

  // JOIN GAME
  document.getElementById('btn-join-game')?.addEventListener('click', async () => {
    const roomCode = document.getElementById('join-room-code')?.value.trim().toUpperCase();
    const name     = document.getElementById('join-player-name')?.value.trim();
    if (!name)     { showToast(t('errorNoName'));   return; }
    if (!roomCode) { showToast(t('errorNoRoom'));   return; }
    try {
      await syncServerTime();
      await joinRoom(roomCode, name);
      State.roomId = roomCode;
      State.playerName = name;
      const adminSnap = await db.ref(`rooms/${roomCode}/admin`).once('value');
      State.isAdmin = (adminSnap.val() === name);
      enterLobby(roomCode, name, State.isAdmin);
      showToast(t('toastJoined'));
    } catch (e) {
      showToast(e.message || t('errorRoomNotFound'));
    }
  });

  // CREATE GAME
  document.getElementById('btn-create-game')?.addEventListener('click', async () => {
    const name = document.getElementById('create-player-name')?.value.trim();
    if (!name) { showToast(t('errorNoName')); return; }
    try {
      const roomId = await createRoom(name);
      State.roomId = roomId;
      State.playerName = name;
      State.isAdmin = true;
      enterLobby(roomId, name, true);
    } catch (e) {
      showToast(e.message || 'Error creating room');
    }
  });

  // LOAD JSON
  document.getElementById('btn-load-json')?.addEventListener('click', async () => {
    const raw = document.getElementById('json-paste-area')?.value.trim();
    if (!raw) { showStatus('json-status', t('errorNoJSON'), 'error'); return; }
    let parsed;
    try { parsed = JSON.parse(raw); }
    catch { showStatus('json-status', t('errorBadJSON'), 'error'); return; }
    const err = validateMasterJSON(parsed);
    if (err) { showStatus('json-status', t('errorMissingJSON') + ': ' + err, 'error'); return; }
    if (!State.isAdmin) { showStatus('json-status', t('errorNotAdmin'), 'error'); return; }

    State.gameData = parsed;
    const settings  = getSettings();
    const splitData = splitJSON(parsed, settings);
    await uploadGameData(State.roomId, splitData, settings.timeMinutes);
    document.getElementById('btn-start-game').disabled = false;
  });

  // GEN PROMPT
  document.getElementById('btn-gen-prompt')?.addEventListener('click', () => generatePrompt());

  // START GAME
  document.getElementById('btn-start-game')?.addEventListener('click', async () => {
    if (!State.isAdmin) return;
    await startGame(State.roomId);
  });

  // TIMER VISIBILITY TOGGLE
  document.getElementById('btn-toggle-timer-vis')?.addEventListener('click', async () => {
    if (!State.isAdmin) return;
    State.timerVisible = !State.timerVisible;
    const btn = document.getElementById('btn-toggle-timer-vis');
    if (btn) btn.textContent = State.timerVisible ? t('btnShowTimer') : t('btnHideTimer');
    await db.ref(`rooms/${State.roomId}/public_data/timer_visible`).set(State.timerVisible);
  });

  // PAUSE
  document.getElementById('btn-pause')?.addEventListener('click', async () => {
    if (!State.isAdmin) return;
    const snap = await db.ref(`rooms/${State.roomId}/public_data/status`).once('value');
    if (snap.val() === 'playing') await pauseGame(State.roomId);
  });

  // RESUME
  document.getElementById('btn-resume')?.addEventListener('click', async () => {
    if (!State.isAdmin) return;
    await resumeGame(State.roomId);
  });

  // RUSH
  document.getElementById('btn-rush')?.addEventListener('click', async () => {
    if (!State.isAdmin) return;
    await rushClue(State.roomId);
  });

  // FORCE VOTE
  document.getElementById('btn-force-vote')?.addEventListener('click', async () => {
    if (!State.isAdmin) return;
    showModal('Force voting phase now?', async () => {
      await db.ref(`rooms/${State.roomId}/public_data/status`).set('voting_blind');
      clearInterval(State.timerInterval);
    });
  });

  // HOLD TO REVEAL (character sheet)
  initHoldReveal('btn-hold-reveal', 'character-sheet');

  // HOLD TO REVEAL (private clue)
  initHoldReveal('btn-hold-reveal-private', 'private-clue-content');

  // DISMISS PRIVATE TOAST
  document.getElementById('btn-dismiss-toast')?.addEventListener('click', () => {
    document.getElementById('private-clue-toast')?.classList.add('hidden');
    // Mark clue as acknowledged in Firebase
    if (State.roomId && State.playerName) {
      db.ref(`rooms/${State.roomId}/players/${State.playerName}/private_clues`).once('value').then(snap => {
        const clues = snap.val();
        if (!clues) return;
        const arr = Array.isArray(clues) ? clues : Object.values(clues);
        const updated = arr.map(c => ({ ...c, delivered: true }));
        db.ref(`rooms/${State.roomId}/players/${State.playerName}/private_clues`).set(updated);
      });
    }
  });

  // SUBMIT VOTE
  document.getElementById('btn-submit-vote')?.addEventListener('click', () => {
    if (!State.myVote || !State.roomId || !State.playerName) return;
    submitVote(State.roomId, State.playerName);
  });

  // BACK TO LOBBY
  document.getElementById('btn-back-lobby')?.addEventListener('click', async () => {
    localStorage.removeItem('dmRoom');
    localStorage.removeItem('dmPlayer');
    cleanListeners();
    clearInterval(State.timerInterval);
    State.roomId    = null;
    State.playerName = null;
    State.isAdmin   = false;
    State.gameData  = null;
    State.myVote    = null;
    State.seenClues = new Set();
    showScreen('screen-entry');
  });

  // ADMIN DISCONNECT WATCH
  window.addEventListener('beforeunload', () => {
    if (State.roomId && State.playerName) {
      db.ref(`rooms/${State.roomId}/players/${State.playerName}/is_online`).set(false);
    }
  });

  // Visibility change (phone lock / tab switch)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && State.roomId && State.playerName) {
      db.ref(`rooms/${State.roomId}/players/${State.playerName}/is_online`).set(false);
    } else if (!document.hidden && State.roomId && State.playerName) {
      db.ref(`rooms/${State.roomId}/players/${State.playerName}/is_online`).set(true);
      syncServerTime();
    }
  });

  // Firebase reconnect handling
  db.ref('.info/connected').on('value', async snap => {
    if (snap.val() === true && State.roomId && State.playerName) {
      await db.ref(`rooms/${State.roomId}/players/${State.playerName}/is_online`).set(true);
      db.ref(`rooms/${State.roomId}/players/${State.playerName}/is_online`)
        .onDisconnect().set(false);
      // Re-check admin
      handleAdminMigration(State.roomId);
    }
  });

  // Init ad manager
  AdManager.init();

  // Try session restore, otherwise show entry
  const restored = await tryRestoreSession();
  if (!restored) showScreen('screen-entry');
});
