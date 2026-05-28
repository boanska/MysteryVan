/**
 * ============================================================
 * DUBA MISTERELOR — app.js
 * ============================================================
 */

/* ── FIREBASE CONFIG ─────────────────────────────────────── */
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

/* ── AD MANAGER ────────────────────────────────────────── */
const AdManager = {
  refresh(slotId) {
    if (!document.querySelector('.ad-placeholder')) return;
    const el = slotId ? document.getElementById(slotId) : null;
    void el; 
  },
  init() {
    if (!document.querySelector('.ad-placeholder')) return;
  }
};

/* ── INTERNATIONALISATION ───────────────────────────────── */
const I18N = {
  en: {
    appTitle:            "Duba Misterelor",
    appSubtitle:         "The Mystery Van",
    tabJoin:             "Join Game",
    tabCreate:           "Create Game",
    labelYourName:       "Your Name",
    placeholderName:     "Enter your name…",
    labelActiveRooms:    "Active Rooms",
    labelRoomName:       "Room Name",
    labelPasswordOpt:    "Password (Optional)",
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
    labelPrivClues:      "🔒 Private Clues",
    on:                  "🟢 On",
    off:                 "❌ Off",
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
    btnShowDetails:      "👁️ Show Details",
    btnHideDetails:      "🙈 Hide Details",
    clueFeedTitle:       "🔍 Investigation",
    btnPause:            "⏸️ Pause",
    btnResume:           "▶️ Resume",
    btnForceVote:        "🗳️ Vote",
    btnRush:             "🔎 Rush",
    btnLeaveGame:        "🚪 Abandon Game",
    menuTitle:           "Menu",
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
    enterPassword:       "Enter Room Password:",
    errorHardTime:       "Hard mode requires at least 20 minutes.",
    errorMediumTime:     "Medium mode requires at least 10 minutes.",
    errorNoRooms:        "No active rooms. Create one!",
    toastCopied:         "Copied to clipboard! ✅",
    toastJoined:         "Joined room!",
    toastKicked:         "Player kicked.",
    toastStarted:        "Game started!",
    toastVoteSubmitted:  "Vote submitted!",
    errorNoName:         "Please enter your name.",
    errorWrongPass:      "Incorrect password.",
    errorRoomNotFound:   "Room not found.",
    errorAlreadyPlaying: "Game already in progress.",
    errorNoJSON:         "Please paste a JSON first.",
    kickConfirm:         (n) => `Kick ${n} from the game?`,
    perpetratorWins:     "🔪 The Perpetrator Wins!",
    innocentWins:        "🕵️ The Innocents Win!",
    jesterWins:          "🃏 The Jester Wins!",
    tieMessage:          "⚖️ Tie — Perpetrator Wins!",
    adminBadge:          "HOST",
    sleepIcon:           "💤",
    noCluesYet:          "No clues yet — investigation begins soon…",
    votedLabel:          "✅ Voted",
    waitingVotes:        "Waiting for all votes…",
  },
  ro: {
    appTitle:            "Duba Misterelor",
    appSubtitle:         "The Mystery Van",
    tabJoin:             "Intră în joc",
    tabCreate:           "Creează joc",
    labelYourName:       "Numele tău",
    placeholderName:     "Introdu numele…",
    labelActiveRooms:    "Camere Active",
    labelRoomName:       "Nume Cameră",
    labelPasswordOpt:    "Parolă (Opțional)",
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
    labelPrivClues:      "🔒 Indicii Secrete",
    on:                  "🟢 Activat",
    off:                 "❌ Dezactivat",
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
    btnShowDetails:      "👁️ Arată detalii",
    btnHideDetails:      "🙈 Ascunde detalii",
    clueFeedTitle:       "🔍 Investigație",
    btnPause:            "⏸️ Pauză",
    btnResume:           "▶️ Continuă",
    btnForceVote:        "🗳️ Vot",
    btnRush:             "🔎 Grăbește",
    btnLeaveGame:        "🚪 Părăsește Jocul",
    menuTitle:           "Meniu",
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
    enterPassword:       "Introdu Parola Camerei:",
    errorHardTime:       "Dificultatea Greu necesită minim 20 de minute.",
    errorMediumTime:     "Dificultatea Mediu necesită minim 10 minute.",
    errorNoRooms:        "Nicio cameră activă. Creează tu una!",
    toastCopied:         "Copiat în clipboard! ✅",
    toastJoined:         "Ai intrat în cameră!",
    toastKicked:         "Jucător eliminat.",
    toastStarted:        "Jocul a început!",
    toastVoteSubmitted:  "Vot trimis!",
    errorNoName:         "Te rugăm să introduci un nume.",
    errorWrongPass:      "Parolă incorectă.",
    errorRoomNotFound:   "Camera nu a fost găsită.",
    errorAlreadyPlaying: "Jocul este deja în desfășurare.",
    errorNoJSON:         "Te rugăm să lipești un JSON mai întâi.",
    kickConfirm:         (n) => `Elimini pe ${n} din joc?`,
    perpetratorWins:     "🔪 Criminalul câștigă!",
    innocentWins:        "🕵️ Nevinovații câștigă!",
    jesterWins:          "🃏 Nebunul câștigă!",
    tieMessage:          "⚖️ Egalitate — Criminalul câștigă!",
    adminBadge:          "GAZDĂ",
    sleepIcon:           "💤",
    noCluesYet:          "Niciun indiciu deocamdată — investigația începe în curând…",
    votedLabel:          "✅ A votat",
    waitingVotes:        "Se așteaptă toate voturile…",
  }
};

/* ── STATE ──────────────────────────────────────────────── */
const State = {
  lang:          'en',
  roomId:        null,
  playerName:    null,
  isAdmin:       false,
  gameData:      null,
  timerVisible:  true,
  listeners:     [],
  seenClues:     new Set(),
  myVote:        null,
  serverTimeOffset: 0,
  timerInterval: null,
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
  document.querySelectorAll('[data-i18n-opt]').forEach(el => {
    const key = el.dataset.i18nOpt;
    if (key) el.textContent = t(key);
  });
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

/* ── UTILS ──────────────────────────────────────────────── */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) { el.classList.add('active'); el.scrollTop = 0; }
  
  if (id === 'screen-lobby') {
    AdManager.refresh('ad-lobby-top');
    AdManager.refresh('ad-lobby-bottom');
  }
  if (id === 'screen-resolution') {
    AdManager.refresh('ad-resolution-top');
    AdManager.refresh('ad-resolution-bottom');
  }
}

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
  if (!overlay) return;
  document.getElementById('modal-msg').textContent = msg;
  overlay.classList.remove('hidden');
  
  document.getElementById('modal-confirm').onclick = () => { overlay.classList.add('hidden'); onConfirm?.(); };
  document.getElementById('modal-cancel').onclick = () => { overlay.classList.add('hidden'); onCancel?.(); };
}

function genRoomCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

function nowServer() { return Date.now() + State.serverTimeOffset; }

function fmtTime(ms) {
  if (ms <= 0) return '00:00';
  const s = Math.floor(ms / 1000);
  return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
}

function copyToClipboard(text) {
  navigator.clipboard?.writeText(text).then(() => showToast(t('toastCopied')))
  .catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
    showToast(t('toastCopied'));
  });
}

function cleanListeners() {
  State.listeners.forEach(({ ref, event, fn }) => ref.off?.(event, fn));
  State.listeners = [];
}
function addListener(ref, event, fn) { ref.on(event, fn); State.listeners.push({ ref, event, fn }); }

async function syncServerTime() {
  return new Promise(resolve => {
    db.ref('/.info/serverTimeOffset').once('value', snap => {
      State.serverTimeOffset = snap.val() || 0; resolve();
    });
  });
}

/* ── UI VISIBILITY HELPERS ──────────────────────────────── */
function toggleInGameUI(isPlaying) {
  document.querySelectorAll('.hide-in-game').forEach(el => {
    if (isPlaying) { el.classList.add('hidden'); } 
    else { el.classList.remove('hidden'); }
  });
  document.querySelectorAll('.admin-only').forEach(el => {
    if(State.isAdmin) el.classList.remove('hidden');
    else el.classList.add('hidden');
  });
}

/* ── ROOM BROWSER ───────────────────────────────────────── */
function listenRooms() {
  db.ref('rooms').on('value', snap => {
    if(State.roomId) return; // Don't refresh if already in a room
    const list = document.getElementById('room-browser-list');
    if(!list) return;
    list.innerHTML = '';
    const rooms = snap.val() || {};
    
    let activeCount = 0;
    for(const [id, data] of Object.entries(rooms)) {
      if(!data.public_data) continue;
      
      const rName = data.public_data.room_name || id;
      const status = data.public_data.status;
      const hasPass = !!data.public_data.password;
      
      const item = document.createElement('div');
      item.className = 'room-item';
      
      const nameEl = document.createElement('span');
      nameEl.className = 'room-item-name';
      nameEl.textContent = `${hasPass ? '🔒 ' : ''}${rName}`;
      
      const statEl = document.createElement('span');
      statEl.className = 'room-item-status';
      statEl.textContent = status === 'lobby' ? t('lobbyTitle') : (status === 'playing' ? 'In Game' : status);
      
      item.appendChild(nameEl);
      item.appendChild(statEl);
      item.addEventListener('click', () => attemptJoinRoom(id, hasPass));
      list.appendChild(item);
      activeCount++;
    }
    
    if(activeCount === 0) {
      list.innerHTML = `<p style="text-align:center; color: var(--wood-mid); font-style: italic;">${t('errorNoRooms')}</p>`;
    }
  });
}

async function attemptJoinRoom(roomId, hasPass) {
  const name = document.getElementById('global-player-name')?.value.trim();
  if (!name) { showToast(t('errorNoName')); return; }
  
  if (hasPass) {
    const modal = document.getElementById('password-modal');
    const passInput = document.getElementById('join-room-pass-input');
    passInput.value = '';
    modal.classList.remove('hidden');
    
    document.getElementById('pass-modal-confirm').onclick = async () => {
      const pass = passInput.value.trim();
      modal.classList.add('hidden');
      processJoin(roomId, name, pass);
    };
    document.getElementById('pass-modal-cancel').onclick = () => modal.classList.add('hidden');
  } else {
    processJoin(roomId, name, '');
  }
}

async function processJoin(roomId, playerName, passwordAttempt) {
  try {
    await syncServerTime();
    const publicSnap = await db.ref(`rooms/${roomId}/public_data`).once('value');
    if (!publicSnap.exists()) throw new Error(t('errorRoomNotFound'));
    
    const publicData = publicSnap.val();
    if (publicData.password && publicData.password !== passwordAttempt) {
      throw new Error(t('errorWrongPass'));
    }
    
    if (publicData.status !== 'lobby') {
      const playerSnap = await db.ref(`rooms/${roomId}/players/${playerName}`).once('value');
      if (!playerSnap.exists()) throw new Error(t('errorAlreadyPlaying'));
    }

    await db.ref(`rooms/${roomId}/players/${playerName}`).update({
      is_online: true, joined_at: firebase.database.ServerValue.TIMESTAMP
    });
    db.ref(`rooms/${roomId}/players/${playerName}/is_online`).onDisconnect().set(false);
    
    State.roomId = roomId;
    State.playerName = playerName;
    const adminSnap = await db.ref(`rooms/${roomId}/admin`).once('value');
    State.isAdmin = (adminSnap.val() === playerName);
    
    enterLobby(roomId, playerName, State.isAdmin);
    showToast(t('toastJoined'));
  } catch(e) {
    showToast(e.message);
  }
}

/* ── CREATE ROOM ────────────────────────────────────────── */
async function createRoom(playerName, roomName, password) {
  await syncServerTime();
  const roomId = genRoomCode();
  
  await db.ref(`rooms/${roomId}`).set({
    public_data: {
      status: 'lobby', timer_visible: true, room_name: roomName || roomId, password: password || ''
    },
    admin: playerName, created_at: firebase.database.ServerValue.TIMESTAMP,
  });

  await db.ref(`rooms/${roomId}/players/${playerName}`).set({
    is_online: true, joined_at: firebase.database.ServerValue.TIMESTAMP
  });
  db.ref(`rooms/${roomId}/players/${playerName}/is_online`).onDisconnect().set(false);

  return roomId;
}

/* ── JSON PARSING ───────────────────────────────────────── */
function splitJSON(raw, settings) {
  const publicData = {
    initial_premise: raw.game_data.initial_premise,
    final_resolution: raw.game_data.final_resolution,
    timer_visible: settings.timerVisible,
    theme: settings.theme, time_minutes: settings.timeMinutes, difficulty: settings.difficulty
  };

  const playerMap = {};
  for (const p of raw.players) {
    playerMap[p.name] = {
      role: p.role || 'Innocent', motive: p.motive || '', hidden_secret: p.hidden_secret || '',
      accomplices: p.accomplices || [], shared_secret: p.shared_secret || [],
      is_online: false, joined_at: firebase.database.ServerValue.TIMESTAMP, private_clues: [],
    };
  }

  for (const ev of raw.investigation_events) {
    if (ev.type === 'private' && ev.targeted_player && playerMap[ev.targeted_player]) {
      if (!playerMap[ev.targeted_player].private_clues) playerMap[ev.targeted_player].private_clues = [];
      playerMap[ev.targeted_player].private_clues.push({
        trigger_at_remaining_minutes: ev.trigger_at_remaining_minutes,
        content: ev.content || ev.truth || '', delivered: false,
        event_id: `priv_${ev.trigger_at_remaining_minutes}_${ev.targeted_player}`,
      });
    }
  }

  const publicEvents = raw.investigation_events
    .filter(ev => ev.type !== 'private')
    .map(ev => ({
      trigger_at_remaining_minutes: ev.trigger_at_remaining_minutes, content: ev.content || '',
      delivered: false, event_id: `pub_${ev.trigger_at_remaining_minutes}_${Math.random().toString(36).slice(2, 6)}`,
    }));

  return { publicData, playerMap, publicEvents };
}

/* ── LOBBY SCREEN ───────────────────────────────────────── */
function enterLobby(roomId, playerName, isAdmin) {
  localStorage.setItem('dmRoom', roomId);
  localStorage.setItem('dmPlayer', playerName);
  
  document.getElementById('room-code-display').textContent = roomId;
  document.getElementById('room-pill').textContent = roomId;
  document.getElementById('host-settings')?.classList.toggle('hidden', !isAdmin);
  
  toggleInGameUI(false);
  showScreen('screen-lobby');
  listenLobby(roomId, playerName, isAdmin);
}

function listenLobby(roomId, playerName, isAdmin) {
  cleanListeners();
  
  const playersRef = db.ref(`rooms/${roomId}/players`);
  addListener(playersRef, 'value', snap => {
    const players = snap.val() || {};
    renderLobbyPlayers(players, playerName, isAdmin, roomId);
    const count = Object.keys(players).length;
    if(document.getElementById('setting-jester')) document.getElementById('setting-jester').disabled = count < 5;
  });

  const pubRef = db.ref(`rooms/${roomId}/public_data/status`);
  addListener(pubRef, 'value', snap => {
    const status = snap.val();
    if (status === 'playing' || status === 'paused') enterPlayingScreen(roomId, playerName, isAdmin);
    else if (status === 'voting_blind') enterVotingScreen(roomId, playerName);
    else if (status === 'resolution') enterResolutionScreen(roomId, playerName);
  });

  const adminRef = db.ref(`rooms/${roomId}/admin`);
  addListener(adminRef, 'value', snap => {
    const newAdmin = snap.val();
    State.isAdmin = (newAdmin === playerName);
    document.getElementById('host-settings')?.classList.toggle('hidden', !State.isAdmin);
  });
}

function renderLobbyPlayers(players, myName, isAdmin, roomId) {
  const list = document.getElementById('lobby-player-list');
  if (!list) return; list.innerHTML = '';
  const sorted = Object.entries(players).sort((a, b) => (a[1].joined_at || 0) - (b[1].joined_at || 0));

  for (const [name, data] of sorted) {
    const row = document.createElement('div');
    row.className = 'player-row';
    const label = document.createElement('span');
    label.className = 'player-name-label';
    label.innerHTML = `<span class="player-status-dot${data.is_online === false ? ' offline' : ''}"></span> ${name} ${data.is_online === false ? t('sleepIcon') : ''}`;
    row.appendChild(label);
    
    db.ref(`rooms/${roomId}/admin`).once('value').then(snap => {
      if (snap.val() === name) row.innerHTML += `<span class="player-admin-badge">${t('adminBadge')}</span>`;
    });
    list.appendChild(row);
  }
}

/* ── KICK SYSTEM (Admin instant, Players 50%+1) ─────────── */
async function castKickVote(roomId, myName, targetName) {
  const adminSnap = await db.ref(`rooms/${roomId}/admin`).once('value');
  
  if (adminSnap.val() === myName) {
    // Admin instant kick
    executeKick(roomId, targetName);
  } else {
    // Player vote
    await db.ref(`rooms/${roomId}/kick_votes/${targetName}/${myName}`).set(true);
    const votesSnap = await db.ref(`rooms/${roomId}/kick_votes/${targetName}`).once('value');
    const playersSnap = await db.ref(`rooms/${roomId}/players`).once('value');
    
    const voteCount = Object.keys(votesSnap.val() || {}).length;
    const playerTotal = Object.keys(playersSnap.val() || {}).length;
    
    if (voteCount >= Math.floor(playerTotal / 2) + 1) {
      executeKick(roomId, targetName);
    } else {
      showToast(`Voted to kick ${targetName} (${voteCount}/${Math.floor(playerTotal/2)+1})`);
    }
  }
}

async function executeKick(roomId, targetName) {
  const pSnap = await db.ref(`rooms/${roomId}/players/${targetName}`).once('value');
  if(!pSnap.exists()) return;
  const pData = pSnap.val();
  
  if ((pData.role || '').toLowerCase() === 'perpetrator') {
    await db.ref(`rooms/${roomId}/public_data`).update({ status: 'resolution', resolution_type: 'perpetrator_kicked', kicked_player: targetName });
  } else if (pData.hidden_secret) {
    await db.ref(`rooms/${roomId}/public_data/public_clues`).push().set({
      content: `💀 ${targetName} was removed. Their secret: "${pData.hidden_secret}"`, ts: firebase.database.ServerValue.TIMESTAMP
    });
  }
  await db.ref(`rooms/${roomId}/players/${targetName}`).remove();
  showToast(t('toastKicked'));
}

/* ── PLAYING SCREEN ─────────────────────────────────────── */
function enterPlayingScreen(roomId, playerName, isAdmin) {
  cleanListeners();
  showScreen('screen-playing');
  toggleInGameUI(true);

  db.ref(`rooms/${roomId}/players/${playerName}`).once('value').then(snap => {
    const data = snap.val() || {};
    ['role', 'motive', 'secret'].forEach(k => {
      document.getElementById(`cs-${k}`).textContent = data[k === 'secret' ? 'hidden_secret' : k] || '—';
    });
    document.getElementById('cs-accomplices-row').style.display = data.accomplices?.length ? 'flex' : 'none';
    document.getElementById('cs-accomplices').textContent = data.accomplices?.join(', ') || '';
    document.getElementById('cs-shared-row').style.display = data.shared_secret?.length ? 'flex' : 'none';
    document.getElementById('cs-shared').textContent = data.shared_secret?.join('; ') || '';
  });

  db.ref(`rooms/${roomId}/public_data/initial_premise`).once('value').then(snap => {
    document.getElementById('premise-text').textContent = snap.val() || '—';
  });

  addListener(db.ref(`rooms/${roomId}/public_data/status`), 'value', snap => {
    const st = snap.val();
    if (st === 'voting_blind') enterVotingScreen(roomId, playerName);
    else if (st === 'resolution') enterResolutionScreen(roomId, playerName);
    else if (st === 'paused') document.getElementById('pause-overlay').classList.remove('hidden');
    else if (st === 'playing') document.getElementById('pause-overlay').classList.add('hidden');
  });

  addListener(db.ref(`rooms/${roomId}/public_data`), 'value', snap => {
    const pd = snap.val() || {};
    State.timerVisible = pd.timer_visible !== false;
    if(pd.status === 'playing') updateTimerUI(pd.end_timestamp - nowServer(), State.timerVisible);
    if(isAdmin && pd.status === 'playing') checkAndDeliverClues(roomId, pd);
  });

  addListener(db.ref(`rooms/${roomId}/public_data/public_clues`), 'value', snap => {
    renderClueFeed(snap.val() || {});
  });

  addListener(db.ref(`rooms/${roomId}/players/${playerName}/private_clues`), 'value', snap => {
    const pending = (snap.val() || []).filter(c => !c.delivered);
    if (pending.length > 0) {
      pending.forEach(c => {
        if (!State.seenClues.has(c.event_id)) {
          State.seenClues.add(c.event_id);
          document.getElementById('private-clue-content').textContent = c.content || c.truth;
          document.getElementById('private-clue-content').classList.add('blurred');
          document.getElementById('btn-toggle-reveal-private').textContent = t('btnShowDetails');
          document.getElementById('private-clue-toast').classList.remove('hidden');
        }
      });
    }
  });

  addListener(db.ref(`rooms/${roomId}/players`), 'value', snap => {
    renderMenuPlayers(snap.val() || {}, playerName, roomId);
  });

  clearInterval(State.timerInterval);
  State.timerInterval = setInterval(() => {
    db.ref(`rooms/${roomId}/public_data`).once('value').then(snap => {
      const pd = snap.val() || {};
      if (pd.status === 'playing') {
        const rem = pd.end_timestamp - nowServer();
        updateTimerUI(rem, pd.timer_visible !== false);
        if (rem <= 0 && isAdmin) db.ref(`rooms/${roomId}/public_data/status`).set('voting_blind');
      }
    });
  }, 1000);
}

function updateTimerUI(rem, visible) {
  const val = document.getElementById('timer-value');
  const display = document.getElementById('timer-display');
  val.textContent = visible ? fmtTime(rem) : '??:??';
  display.classList.toggle('hidden-timer', !visible);
  display.classList.toggle('warning', visible && rem <= 300000 && rem > 0);
}

/* ── SIDE MENU ──────────────────────────────────────────── */
function initSideMenu() {
  document.getElementById('btn-open-menu')?.addEventListener('click', () => document.getElementById('side-menu-overlay').classList.remove('hidden'));
  document.getElementById('btn-close-menu')?.addEventListener('click', () => document.getElementById('side-menu-overlay').classList.add('hidden'));
  document.getElementById('side-menu-overlay')?.addEventListener('click', (e) => {
    if(e.target.id === 'side-menu-overlay') e.target.classList.add('hidden');
  });
}

function renderMenuPlayers(players, myName, roomId) {
  const list = document.getElementById('menu-player-list');
  if(!list) return; list.innerHTML = '';
  
  for (const [name, data] of Object.entries(players)) {
    const row = document.createElement('div');
    row.className = 'player-row';
    row.innerHTML = `<span class="player-name-label"><span class="player-status-dot${data.is_online === false ? ' offline' : ''}"></span> ${name}</span>`;
    
    if(name !== myName) {
      const kick = document.createElement('button');
      kick.className = 'btn-kick'; kick.textContent = '🚪';
      kick.onclick = () => showModal(t('kickConfirm', name), () => castKickVote(roomId, myName, name));
      row.appendChild(kick);
    }
    list.appendChild(row);
  }
}

/* ── CLUE DELIVERY ──────────────────────────────────────── */
async function checkAndDeliverClues(roomId, pd) {
  const remMin = (pd.end_timestamp - nowServer()) / 60000;
  const evs = pd.public_events || [];
  const trig = pd.triggered_events || [];

  for (const ev of evs) {
    if (!trig.includes(ev.event_id) && remMin <= ev.trigger_at_remaining_minutes) {
      await db.ref(`rooms/${roomId}/public_data/public_clues`).push().set({ content: ev.content, ts: firebase.database.ServerValue.TIMESTAMP, event_id: ev.event_id });
      await db.ref(`rooms/${roomId}/public_data/triggered_events`).transaction(c => [...(c||[]), ev.event_id]);
    }
  }

  const pSnap = await db.ref(`rooms/${roomId}/players`).once('value');
  const players = pSnap.val() || {};
  for (const [pName, pData] of Object.entries(players)) {
    const updated = (pData.private_clues || []).map(c => {
      if (!c.delivered && remMin <= c.trigger_at_remaining_minutes) return { ...c, delivered: true };
      return c;
    });
    if(JSON.stringify(updated) !== JSON.stringify(pData.private_clues)) {
      await db.ref(`rooms/${roomId}/players/${pName}/private_clues`).set(updated);
    }
  }
}

function renderClueFeed(clues) {
  const feed = document.getElementById('clue-feed');
  const arr = Object.values(clues).sort((a, b) => a.ts - b.ts);
  if(arr.length === 0) { feed.innerHTML = `<p class="hint">${t('noCluesYet')}</p>`; return; }
  
  const exist = new Set(Array.from(feed.querySelectorAll('.clue-item')).map(e => e.dataset.id));
  for (const c of arr) {
    if (exist.has(String(c.event_id || c.ts))) continue;
    const div = document.createElement('div');
    div.className = 'clue-item new'; div.dataset.id = c.event_id || c.ts;
    div.innerHTML = `<span class="clue-time">${new Date(c.ts).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</span>${c.content}`;
    feed.appendChild(div);
  }
  feed.scrollTop = feed.scrollHeight;
}

/* ── TOGGLE REVEAL ──────────────────────────────────────── */
function initToggleReveal(btnId, targetId) {
  const btn = document.getElementById(btnId);
  const target = document.getElementById(targetId);
  if(!btn || !target) return;
  btn.addEventListener('click', () => {
    if(target.classList.contains('blurred')) {
      target.classList.remove('blurred'); btn.textContent = t('btnHideDetails');
    } else {
      target.classList.add('blurred'); btn.textContent = t('btnShowDetails');
    }
  });
}

/* ── VOTING & RESOLUTION ────────────────────────────────── */
function enterVotingScreen(roomId, playerName) {
  cleanListeners(); clearInterval(State.timerInterval);
  showScreen('screen-voting'); State.myVote = null;
  toggleInGameUI(false);
  document.getElementById('side-menu-overlay')?.classList.add('hidden');

  db.ref(`rooms/${roomId}/players`).once('value').then(snap => {
    const list = document.getElementById('voting-player-list');
    list.innerHTML = '';
    for(const name of Object.keys(snap.val()||{})) {
      if(name === playerName) continue;
      const opt = document.createElement('div'); opt.className = 'vote-option';
      opt.innerHTML = `<div class="vote-radio"></div><span>${name}</span>`;
      opt.onclick = () => {
        document.querySelectorAll('.vote-option').forEach(o=>o.classList.remove('selected'));
        opt.classList.add('selected'); State.myVote = name;
        document.getElementById('btn-submit-vote').disabled = false;
      };
      list.appendChild(opt);
    }
  });

  addListener(db.ref(`rooms/${roomId}/votes`), 'value', snap => {
    const votes = snap.val() || {};
    db.ref(`rooms/${roomId}/players`).once('value').then(pSnap => {
      const pCount = Object.keys(pSnap.val() || {}).length;
      if (Object.keys(votes).length >= pCount) tallyVotes(roomId, votes, pSnap.val());
    });
  });
}

async function tallyVotes(roomId, votes, players) {
  const tally = {};
  for (const v of Object.values(votes)) tally[v] = (tally[v] || 0) + 1;
  
  const max = Math.max(...Object.values(tally), 1);
  const bars = document.getElementById('tally-bars'); bars.innerHTML = '';
  document.getElementById('vote-tally-overlay').classList.remove('hidden');

  for (const [name, count] of Object.entries(tally)) {
    bars.innerHTML += `<div class="tally-bar-row"><div class="tally-bar-label">${name}</div><div class="tally-bar-track"><div class="tally-bar-fill" style="width:0">${count}</div></div></div>`;
  }
  setTimeout(() => document.querySelectorAll('.tally-bar-fill').forEach(el => el.style.width = `${(parseInt(el.textContent)/max)*100}%`), 100);

  setTimeout(async () => {
    let top = []; let mx = 0;
    for(const [n, c] of Object.entries(tally)) { if(c>mx) {mx=c; top=[n];} else if(c===mx) top.push(n); }
    let res = top.length > 1 ? 'tie_perpetrator_wins' : ((players[top[0]]?.role||'').toLowerCase() === 'perpetrator' ? 'innocent_wins' : ((players[top[0]]?.role||'').toLowerCase() === 'jester' ? 'jester_wins' : 'perpetrator_wins'));
    
    await db.ref(`rooms/${roomId}/public_data`).update({ status: 'resolution', resolution_type: res, voted_out: top[0] });
    document.getElementById('vote-tally-overlay').classList.add('hidden');
  }, 4000);
}

async function enterResolutionScreen(roomId, playerName) {
  cleanListeners(); clearInterval(State.timerInterval);
  showScreen('screen-resolution'); toggleInGameUI(false);
  
  const pd = (await db.ref(`rooms/${roomId}/public_data`).once('value')).val() || {};
  const pl = (await db.ref(`rooms/${roomId}/players`).once('value')).val() || {};
  
  const types = { innocent_wins: t('innocentWins'), perpetrator_wins: t('perpetratorWins'), jester_wins: t('jesterWins'), tie_perpetrator_wins: t('tieMessage'), perpetrator_kicked: t('innocentWins') };
  document.getElementById('resolution-headline').textContent = types[pd.resolution_type] || 'Resolution';
  document.getElementById('resolution-text').textContent = pd.final_resolution || '';
  
  const resC = document.getElementById('result-content'); resC.innerHTML = '';
  for(const [n, d] of Object.entries(pl)) {
    const role = (d.role||'innocent').toLowerCase();
    resC.innerHTML += `<div class="result-row"><span style="font-weight:700">${n}</span> <span class="result-role-badge ${role}">${d.role}</span> <span style="font-size:0.8rem; margin-left:auto">${d.hidden_secret||''}</span></div>`;
  }
}

/* ── PROMPT & SESSION ───────────────────────────────────── */
function generatePrompt() {
  const set = {
    theme: document.getElementById('setting-theme').value, time: parseInt(document.getElementById('setting-time').value),
    diff: document.getElementById('setting-difficulty').value, perp: document.getElementById('setting-perps').value,
    jester: document.getElementById('setting-jester').value, priv: document.getElementById('setting-private-clues').value
  };

  if(set.diff === 'Hard' && set.time < 20) { showToast(t('errorHardTime')); return; }
  if(set.diff === 'Medium' && set.time < 10) { showToast(t('errorMediumTime')); return; }

  const names = Array.from(document.querySelectorAll('#lobby-player-list .player-name-label')).map(e => e.textContent.replace(t('sleepIcon'),'').trim());
  
  let pRule = set.priv === 'on' ? '5. Space private clues out evenly. DO NOT trigger them immediately at the start. Create at least one Lie Trap (a private clue sent early, and a public clue later that exposes it if they lied).' : '5. NO private clues. Generate ONLY public investigation_events.';

  const prompt = `You are a master mystery novelist generating a game in ${State.lang === 'ro' ? 'Romanian' : 'English'}.
Theme: ${set.theme || 'Classic murder'}. Difficulty: ${set.diff}. Total Game Time: ${set.time} minutes.
Players: [${names.join(', ')}].
Rules:
1. Perpetrators: ${set.perp === 'random' ? 'Choose secretly.' : (set.perp === '2' ? '2 perps with accomplices array.' : '1 perp.')}
2. The Jester: ${set.jester === 'on' ? 'Include 1 Jester.' : (set.jester === 'off' ? 'No Jester.' : '50% chance.')}
3. Innocents must have hidden_secrets. ${set.diff === 'Hard' ? 'Add shared_secret arrays for innocents.' : ''}
${pRule}
Output MUST be strictly valid JSON: { "game_data": {"initial_premise", "final_resolution"}, "players": [{name, role, accomplices, motive, hidden_secret, shared_secret}], "investigation_events": [{trigger_at_remaining_minutes, type, targeted_player, content, truth, killer_directive}] }`;
  copyToClipboard(prompt);
}

async function tryRestoreSession() {
  const r = localStorage.getItem('dmRoom'); const p = localStorage.getItem('dmPlayer');
  if(!r || !p) return false;
  await syncServerTime();
  const snap = await db.ref(`rooms/${r}`).once('value');
  if(!snap.exists() || !snap.val().players?.[p]) { localStorage.removeItem('dmRoom'); localStorage.removeItem('dmPlayer'); return false; }
  
  State.roomId = r; State.playerName = p; State.isAdmin = (snap.val().admin === p);
  await db.ref(`rooms/${r}/players/${p}/is_online`).set(true);
  db.ref(`rooms/${r}/players/${p}/is_online`).onDisconnect().set(false);
  
  const st = snap.val().public_data.status;
  if(st === 'lobby') enterLobby(r, p, State.isAdmin);
  else if(st === 'playing' || st === 'paused') enterPlayingScreen(r, p, State.isAdmin);
  else if(st === 'voting_blind') enterVotingScreen(r, p);
  else if(st === 'resolution') enterResolutionScreen(r, p);
  return true;
}

/* ── DOM READY ──────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', async () => {
  detectLang();
  document.getElementById('lang-toggle')?.addEventListener('click', () => setLang(State.lang === 'en' ? 'ro' : 'en'));

  // Tabs
  document.getElementById('tab-join').onclick = () => { document.getElementById('tab-join').classList.add('active'); document.getElementById('tab-create').classList.remove('active'); document.getElementById('tab-panel-join').classList.add('active'); document.getElementById('tab-panel-create').classList.remove('active'); };
  document.getElementById('tab-create').onclick = () => { document.getElementById('tab-create').classList.add('active'); document.getElementById('tab-join').classList.remove('active'); document.getElementById('tab-panel-create').classList.add('active'); document.getElementById('tab-panel-join').classList.remove('active'); };

  // Create
  document.getElementById('btn-create-game').onclick = async () => {
    const n = document.getElementById('global-player-name').value.trim();
    if(!n) return showToast(t('errorNoName'));
    const r = document.getElementById('create-room-name').value.trim();
    const p = document.getElementById('create-room-pass').value.trim();
    const id = await createRoom(n, r, p);
    State.roomId = id; State.playerName = n; State.isAdmin = true;
    enterLobby(id, n, true);
  };

  // Admin Lobby Actions
  document.getElementById('btn-gen-prompt').onclick = generatePrompt;
  document.getElementById('btn-load-json').onclick = async () => {
    try {
      const parsed = JSON.parse(document.getElementById('json-paste-area').value);
      const set = { timeMinutes: parseInt(document.getElementById('setting-time').value), timerVisible: State.timerVisible, theme: document.getElementById('setting-theme').value, difficulty: document.getElementById('setting-difficulty').value };
      const split = splitJSON(parsed, set);
      
      const updates = {};
      updates[`rooms/${State.roomId}/public_data`] = { ...split.publicData, public_events: split.publicEvents, status: 'lobby' };
      for(const [n, d] of Object.entries(split.playerMap)) {
        if((await db.ref(`rooms/${State.roomId}/players/${n}`).once('value')).exists()) {
          ['role','motive','hidden_secret','accomplices','shared_secret','private_clues'].forEach(k => updates[`rooms/${State.roomId}/players/${n}/${k}`] = d[k]);
        }
      }
      await db.ref().update(updates);
      document.getElementById('json-status').textContent = '✅ JSON loaded!'; document.getElementById('json-status').className = 'status-msg success';
      document.getElementById('btn-start-game').disabled = false;
    } catch(e) { document.getElementById('json-status').textContent = 'Invalid JSON'; document.getElementById('json-status').className = 'status-msg error'; }
  };
  document.getElementById('btn-start-game').onclick = () => {
    db.ref(`rooms/${State.roomId}/public_data`).update({ status: 'playing', end_timestamp: nowServer() + (document.getElementById('setting-time').value * 60000), started_at: firebase.database.ServerValue.TIMESTAMP });
  };

  // In-Game Buttons
  document.getElementById('btn-rush').onclick = async () => {
    const snap = await db.ref(`rooms/${State.roomId}/public_data`).once('value');
    if(snap.val()?.status !== 'playing') return;
    const n = snap.val().end_timestamp - 120000;
    await db.ref(`rooms/${State.roomId}/public_data/end_timestamp`).set(n);
    checkAndDeliverClues(State.roomId, {...snap.val(), end_timestamp: n});
  };
  document.getElementById('btn-pause').onclick = async () => {
    const snap = await db.ref(`rooms/${State.roomId}/public_data`).once('value');
    if(snap.val()?.status === 'playing') db.ref(`rooms/${State.roomId}/public_data`).update({ status: 'paused', paused_remaining: snap.val().end_timestamp - nowServer(), end_timestamp: null });
  };
  document.getElementById('btn-resume').onclick = async () => {
    const snap = await db.ref(`rooms/${State.roomId}/public_data`).once('value');
    if(snap.val()?.status === 'paused') db.ref(`rooms/${State.roomId}/public_data`).update({ status: 'playing', end_timestamp: nowServer() + snap.val().paused_remaining, paused_remaining: null });
  };
  document.getElementById('btn-force-vote').onclick = () => showModal('Force voting phase now?', () => db.ref(`rooms/${State.roomId}/public_data/status`).set('voting_blind'));
  document.getElementById('btn-submit-vote').onclick = () => {
    db.ref(`rooms/${State.roomId}/votes/${State.playerName}`).set(State.myVote);
    document.getElementById('btn-submit-vote').disabled = true; document.getElementById('btn-submit-vote').textContent = t('votedLabel');
  };
  document.getElementById('btn-dismiss-toast').onclick = () => {
    document.getElementById('private-clue-toast').classList.add('hidden');
    db.ref(`rooms/${State.roomId}/players/${State.playerName}/private_clues`).once('value').then(snap => {
      const arr = snap.val()||[]; db.ref(`rooms/${State.roomId}/players/${State.playerName}/private_clues`).set(arr.map(c=>({...c, delivered:true})));
    });
  };
  document.getElementById('btn-leave-game').onclick = () => {
    localStorage.removeItem('dmRoom'); localStorage.removeItem('dmPlayer');
    db.ref(`rooms/${State.roomId}/players/${State.playerName}`).remove();
    location.reload();
  };
  document.getElementById('btn-back-lobby').onclick = () => {
    localStorage.removeItem('dmRoom'); localStorage.removeItem('dmPlayer'); location.reload();
  };

  // Visibility changes
  document.addEventListener('visibilitychange', () => {
    if(State.roomId && State.playerName) db.ref(`rooms/${State.roomId}/players/${State.playerName}/is_online`).set(!document.hidden);
    if(!document.hidden) syncServerTime();
  });
  window.addEventListener('beforeunload', () => { if(State.roomId && State.playerName) db.ref(`rooms/${State.roomId}/players/${State.playerName}/is_online`).set(false); });
  db.ref('.info/connected').on('value', snap => {
    if(snap.val()===true && State.roomId && State.playerName) {
      db.ref(`rooms/${State.roomId}/players/${State.playerName}/is_online`).set(true);
      db.ref(`rooms/${State.roomId}/players/${State.playerName}/is_online`).onDisconnect().set(false);
    }
  });

  // Init
  initToggleReveal('btn-toggle-reveal', 'character-sheet');
  initToggleReveal('btn-toggle-reveal-private', 'private-clue-content');
  initSideMenu();
  listenRooms();
  AdManager.init();

  if(!(await tryRestoreSession())) showScreen('screen-entry');
});