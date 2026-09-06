const EXERCISES = [
  { id: "march", name: "Marcia sul posto", category: "cardio", description: "Attivazione generale e aumento graduale della frequenza cardiaca.", objective: "Cardio dolce", levels: { start: ["time", 40], active: ["time", 30], pro: ["time", 40], all: ["time", 45] } },
  { id: "squat", name: "Squat", category: "legs", description: "Scendi con controllo mantenendo il petto aperto.", objective: "Gambe e glutei", video: "https://www.youtube.com/shorts/iGKMsgCLTVI", levels: { start: ["reps", 10], active: ["reps", 15], pro: ["reps", 20], all: ["reps", 10] } },
  { id: "lunges", name: "Affondi alternati", category: "legs", description: "Passo indietro, ginocchio morbido e spinta dal piede anteriore.", objective: "Gambe ed equilibrio", levels: { start: ["reps", 8], active: ["reps", 10], pro: ["reps", 10], all: ["reps", 8] } },
  { id: "incline-pushup", name: "Push-up facilitato", category: "upper", description: "Usa un supporto stabile e mantieni il corpo allineato.", objective: "Petto, spalle e braccia", levels: { start: ["reps", 8], all: ["reps", 8] } },
  { id: "pushup", name: "Push-up", category: "upper", description: "Corpo in linea, mani sotto le spalle, movimento controllato.", objective: "Parte superiore", levels: { active: ["reps", 10], pro: ["reps", 15] } },
  { id: "bridge", name: "Glute bridge", category: "legs", description: "Spingi il bacino verso l'alto senza inarcare la schiena.", objective: "Glutei e catena posteriore", levels: { start: ["reps", 12] } },
  { id: "calf", name: "Calf raise", category: "legs", description: "Sali sulle punte e scendi lentamente mantenendo l'equilibrio.", objective: "Polpacci e caviglie", levels: { start: ["reps", 15] } },
  { id: "bird-dog", name: "Bird dog", category: "core", description: "Allunga braccio e gamba opposti mantenendo il busto stabile.", objective: "Core e coordinazione", levels: { start: ["reps", 8] } },
  { id: "plank", name: "Plank", category: "core", description: "Spingi il pavimento e respira mantenendo il tronco solido.", objective: "Addome e stabilità", levels: { start: ["time", 20], active: ["time", 30], pro: ["time", 40], all: ["time", 20] } },
  { id: "jumping-jack", name: "Jumping jack", category: "cardio", description: "Apri e chiudi gambe e braccia a ritmo regolare.", objective: "Cardio e coordinazione", levels: { active: ["time", 30], pro: ["time", 40] } },
  { id: "mountain", name: "Mountain climber", category: "cardio", description: "Porta le ginocchia al petto mantenendo le spalle forti.", objective: "Cardio e core", levels: { active: ["reps", 20], pro: ["reps", 30] } },
  { id: "superman", name: "Superman", category: "core", description: "Sollevamento leggero di braccia e gambe, senza forzare il collo.", objective: "Schiena e controllo", levels: { active: ["reps", 12] } },
  { id: "squat-calf", name: "Squat + calf raise", category: "legs", description: "Unisci forza delle gambe e stabilità in un movimento fluido.", objective: "Gambe e stabilità", levels: { active: ["reps", 12] } },
  { id: "burpee", name: "Burpee", category: "cardio", description: "Adatta il salto e il ritmo alle tue capacità.", objective: "Potenza totale", levels: { pro: ["reps", 10] } },
  { id: "jump-squat", name: "Jump squat", category: "legs", description: "Atterra morbido e mantieni le ginocchia allineate.", objective: "Forza esplosiva", levels: { pro: ["reps", 12] } },
  { id: "high-knees", name: "High knees", category: "cardio", description: "Corri sul posto portando le ginocchia alte e il busto stabile.", objective: "Cardio", levels: { pro: ["time", 40] } },
  { id: "shoulder-tap", name: "Plank shoulder tap", category: "core", description: "Tocca la spalla opposta senza oscillare con il bacino.", objective: "Core e spalle", levels: { pro: ["reps", 20] } },
  { id: "knee-lift", name: "Sollevamento delle ginocchia", category: "all", description: "Da seduti o in piedi, scegli l'ampiezza più comoda.", objective: "Movimento accessibile", levels: { all: ["time", 30] } },
  { id: "torso", name: "Rotazione del busto", category: "mobility", description: "Ruota dolcemente seguendo il respiro.", objective: "Mobilità", levels: { all: ["time", 30] } },
  { id: "sky", name: "Tocca il cielo", category: "mobility", description: "Allunga le braccia verso l'alto, in piedi o da seduti.", objective: "Mobilità e postura", levels: { all: ["time", 30] } }
];

EXERCISES.forEach((item) => {
  if (!item.video) {
    item.video = `https://www.youtube.com/results?search_query=${encodeURIComponent(`${item.name} esercizio fitness`)}`;
  }
});

const WORKOUTS = {
  start: { label: "START", icon: "●", color: "green", subtitle: "Per chi comincia", rounds: 2, exercises: ["march", "squat", "lunges", "incline-pushup", "bridge", "calf", "bird-dog", "plank"] },
  active: { label: "ACTIVE", icon: "●", color: "yellow", subtitle: "Per chi ha già una buona preparazione", rounds: 2, exercises: ["jumping-jack", "squat", "lunges", "pushup", "mountain", "superman", "plank", "squat-calf"] },
  pro: { label: "PRO", icon: "●", color: "red", subtitle: "Per chi è allenato", rounds: 2, exercises: ["burpee", "jump-squat", "pushup", "lunges", "mountain", "shoulder-tap", "pushup", "high-knees"] },
  all: { label: "LUNGOMARE PER TUTTI", icon: "♿", color: "teal", subtitle: "Movimento adattato a diverse capacità", rounds: 1, exercises: ["march", "knee-lift", "torso", "sky", "squat", "knee-lift", "torso", "sky"] }
};

const CHALLENGES = {
  "siponto-sprint": { title: "Siponto Sprint", icon: "01", type: "stopwatch", duration: "circa 10 min", description: "Completa il circuito nel minor tempo possibile mantenendo una buona tecnica.", steps: ["500 m", "10 squat", "10 push-up", "20 mountain climber", "10 squat jump", "500 m"] },
  "siponto-express": { title: "Siponto Express", icon: "02", type: "rounds", duration: "5 min", description: "Alterna lavoro e recupero. Conta quanti round completi riesci a fare.", steps: ["30″ jumping jack", "10 squat", "30″ recupero"] },
  "siponto-warrior": { title: "Siponto Warrior", icon: "03", type: "rounds", duration: "8–10 min", description: "Un circuito intenso: scegli il tuo ritmo e resta preciso.", steps: ["10 burpees", "15 squat jump", "10 push-up", "20 mountain climber"] },
  "siponto-duo": { title: "Siponto Duo", icon: "04", type: "rounds", duration: "5 round a persona", description: "Una persona si muove mentre l'altra recupera. Il traguardo è condiviso.", steps: ["10 squat", "10 push-up", "20 mountain climber"] },
  "family": { title: "Family Challenge", icon: "05", type: "rounds", duration: "3 round insieme", description: "Non conta chi arriva prima: conta completare la sfida insieme.", steps: ["Scegli 4 esercizi", "Adatta il ritmo", "3 round insieme"] },
  "la-sfida-del-mare": { title: "La sfida del mare", icon: "06", type: "rounds", duration: "2 min", description: "Scegli la variante più adatta alle tue capacità e resta in movimento.", steps: ["30″ braccia", "30″ ginocchia", "30″ rotazioni", "30″ tocca il cielo"] },
  "insieme": { title: "Insieme sul lungomare", icon: "07", type: "rounds", duration: "percorso condiviso", description: "Non c'è un vincitore. Il traguardo è completare il percorso insieme.", steps: ["30″ jumping jack", "10 burpees", "20 sumo squat", "20 piegamenti", "1 km corsa"] }
};

const STORAGE_KEY = "lungomare-attivo-progress";
const DEFAULT_PROGRESS = { workoutsCompleted: [], challengesCompleted: [], personalRecords: {}, totalMinutes: 0, streak: { current: 0, best: 0, lastDate: null }, currentLevel: null };
let progress = loadProgress();
let timerId = null;
let activeWorkout = null;

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved && typeof saved === "object" ? { ...DEFAULT_PROGRESS, ...saved, streak: { ...DEFAULT_PROGRESS.streak, ...(saved.streak || {}) } } : { ...DEFAULT_PROGRESS };
  } catch (error) { return { ...DEFAULT_PROGRESS }; }
}
function saveProgress() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch (error) { /* Storage may be disabled. */ } }
function today() { return new Date().toISOString().slice(0, 10); }
function formatTime(seconds) { return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`; }
function exercise(id) { return EXERCISES.find((item) => item.id === id); }
function workoutItems(level) { return WORKOUTS[level].exercises.map((id) => exercise(id)); }
function setTitle(title) { document.title = `${title} · Lungomare Attivo`; }
function navigate(hash) { window.location.hash = hash; }
function app() { return document.getElementById("app"); }
function button(label, action, className = "button") { return `<button class="${className}" type="button" data-action="${action}">${label}</button>`; }

function renderHome() {
  setTitle("Lungomare Attivo - Siponto");
  const completed = progress.workoutsCompleted.length;
  const hasLevel = progress.currentLevel !== null;
  const workout = hasLevel ? WORKOUTS[progress.currentLevel] : null;
  const workoutsForLevel = hasLevel ? progress.workoutsCompleted.filter(w => w.level === progress.currentLevel).length : 0;
  const canUpgrade = workoutsForLevel >= 3 && progress.currentLevel !== "pro";
  
  app().innerHTML = `<section class="home-page page-wrap"><div class="hero-panel"><div class="eyebrow">SIPONTO · PUGLIA</div><h1>Muoviti.<br><em>Allenati.</em><br>Divertiti.</h1><p>Il tuo allenamento all'aperto, direttamente sul lungomare di Siponto.</p><div class="hero-actions">${hasLevel ? button(`Inizia allenamento ${workout.label} →`, `start-level:${progress.currentLevel}`, "button button-primary") : button("Inizia allenamento →", "choose-level", "button button-primary")}${button("Esplora esercizi", "exercises", "button button-ghost")}</div>${hasLevel ? `<div class="current-level-info"><span class="eyebrow">IL TUO LIVELLO</span><strong>${workout.label}</strong><small>${workout.subtitle}</small>${canUpgrade ? `<button class="upgrade-btn" data-action="upgrade-level">Passa a ${WORKOUTS[getNextLevel(progress.currentLevel)].label} →</button>` : `<span class="workouts-count">${workoutsForLevel} ${workoutsForLevel === 1 ? "allenamento" : "allenamenti"} completati</span>`}</div>` : ""}<div class="hero-stats"><span><strong>${completed}</strong> allenamenti</span><span><strong>${progress.streak.current}</strong> giorni di streak</span></div></div><section class="callout"><span class="callout-icon">♨</span><div><span class="eyebrow">PRIMA DI INIZIARE</span><h3>Ascolta il tuo corpo.</h3><p>Muoviti gradualmente e interrompi l'attività in caso di dolore, vertigini o malessere.</p></div><a href="#before">Leggi</a></section></section>${footer()}`;
}

function getNextLevel(current) {
  const levels = ["start", "active", "pro"];
  const idx = levels.indexOf(current);
  return idx < levels.length - 1 ? levels[idx + 1] : current;
}

function upgradeLevel() {
  progress.currentLevel = getNextLevel(progress.currentLevel);
  saveProgress();
  renderHome();
}

function renderWorkouts() {
  setTitle("Allenamenti");
  if (!progress.currentLevel) {
    chooseLevel();
    return;
  }
  const currentWorkout = WORKOUTS[progress.currentLevel];
  app().innerHTML = `<section class="page-wrap"><div class="page-intro"><span class="eyebrow">ALLENATI</span><h1>Il tuo prossimo<br><em>movimento.</em></h1><p>Quattro percorsi, un solo obiettivo: stare bene.</p></div><div class="my-workout-banner ${currentWorkout.color}"><span class="level-icon">${currentWorkout.icon}</span><div><strong>${currentWorkout.label}</strong><small>${currentWorkout.subtitle}</small></div>${button("Inizia ora →", `start-level:${progress.currentLevel}`, "button button-primary")}</div><div class="workout-list">${Object.entries(WORKOUTS).map(([key, item]) => `<article class="workout-card ${item.color}"><div class="workout-card-top"><span class="level-icon">${item.icon}</span><span class="eyebrow">${item.rounds} ${item.rounds === 1 ? "CIRCUITO" : "CIRCUITI"}</span></div><h2>${item.label}</h2><p>${item.subtitle}</p><div class="workout-meta"><span>${item.exercises.length} esercizi</span><span>·</span><span>15–25 min</span></div>${button("Scegli questo percorso →", `start-level:${key}`, "button button-dark")}</article>`).join("")}</div></section>${footer()}`;
}

function renderExercises() {
  setTitle("Libreria esercizi");
  app().innerHTML = `<section class="page-wrap"><div class="page-intro compact"><span class="eyebrow">LIBRERIA</span><h1>Conosci il<br><em>movimento.</em></h1><p>Gli stessi esercizi dei tuoi allenamenti, raccolti in un unico posto.</p></div><div class="exercise-tools"><label class="search-box"><span>⌕</span><input id="exercise-search" type="search" placeholder="Cerca esercizio" aria-label="Cerca esercizio"></label><div class="filter-row">${["all", "legs", "core", "cardio", "upper", "mobility"].map((filter) => `<button class="filter ${filter === "all" ? "active" : ""}" data-filter="${filter}" type="button">${filter === "all" ? "Tutti" : filter === "upper" ? "Parte superiore" : filter === "mobility" ? "Mobilità" : filter === "cardio" ? "Cardio" : filter === "legs" ? "Gambe" : "Core"}</button>`).join("")}</div></div><div class="exercise-grid" id="exercise-grid"></div></section>${footer()}`;
  renderExerciseGrid();
}

function renderExerciseGrid() {
  const grid = document.getElementById("exercise-grid"); if (!grid) return;
  const filter = document.querySelector(".filter.active")?.dataset.filter || "all";
  const search = document.getElementById("exercise-search")?.value.toLowerCase() || "";
  const list = EXERCISES.filter((item) => (filter === "all" || item.category === filter) && item.name.toLowerCase().includes(search));
  grid.innerHTML = list.map((item) => `<article class="exercise-card"><div class="exercise-symbol">${item.category === "cardio" ? "↗" : item.category === "legs" ? "◒" : item.category === "core" ? "◉" : "✦"}</div><div><span class="exercise-category">${item.objective}</span><h3>${item.name}</h3><p>${item.description}</p><strong>${displayPrescription(item, "active")}</strong><a class="exercise-video" href="${item.video}" target="_blank" rel="noopener noreferrer">&#9654; Guarda il video su YouTube</a></div></article>`).join("") || `<p class="empty-state">Nessun esercizio trovato.</p>`;
}
function displayPrescription(item, level) { const prescription = item.levels[level] || item.levels.start || item.levels.all; return prescription[0] === "time" ? `${prescription[1]} secondi` : `${prescription[1]} ripetizioni`; }

function renderChallenges() {
  setTitle("Sfide del lungomare");
  app().innerHTML = `<section class="page-wrap"><div class="page-intro"><span class="eyebrow">SFIDE DEL LUNGOMARE</span><h1>Un po' di<br><em>energia in più.</em></h1><p>Scegli una sfida. Il record è tuo, il divertimento è di tutti.</p></div><div class="challenge-grid">${Object.entries(CHALLENGES).map(([key, item]) => `<article class="challenge-card"><span class="challenge-number">${item.icon}</span><div><span class="eyebrow">${item.duration}</span><h2>${item.title}</h2><p>${item.description}</p><div class="step-list">${item.steps.map((step) => `<span>${step}</span>`).join("")}</div>${button(item.type === "stopwatch" ? "Avvia cronometro →" : "Inizia sfida →", `challenge:${key}`, "button button-dark")}</div></article>`).join("")}</div></section>${footer()}`;
}

function renderResults() {
  setTitle("I miei risultati");
  const hasData = progress.workoutsCompleted.length || progress.challengesCompleted.length;
  app().innerHTML = `<section class="page-wrap results-page"><div class="page-intro compact"><span class="eyebrow">IL MIO PERCORSO</span><h1>Ogni passo<br><em>conta.</em></h1><p>La tua attività resta sul tuo dispositivo.</p></div>${hasData ? `<div class="metrics"><div><strong>${progress.workoutsCompleted.length}</strong><span>Allenamenti</span></div><div><strong>${progress.totalMinutes}</strong><span>Minuti totali</span></div><div><strong>${progress.challengesCompleted.length}</strong><span>Sfide</span></div><div><strong>${progress.streak.current}</strong><span>Giorni streak</span></div></div><section class="result-section"><span class="eyebrow">RECORD</span><h2>Le tue sfide</h2><div class="record-list">${Object.entries(progress.personalRecords).map(([id, value]) => `<div><span>${CHALLENGES[id]?.title || id}</span><strong>${typeof value === "number" ? formatTime(value) : value + " round"}</strong></div>`).join("") || `<p class="empty-state">Completa una sfida per vedere qui il tuo record.</p>`}</div></section>` : `<div class="empty-results"><span>◎</span><h2>Il tuo percorso<br>inizia qui.</h2><p>Non hai ancora completato un allenamento.</p>${button("Inizia il tuo primo allenamento →", "choose-level", "button button-primary")}</div>`}<button class="reset-link" type="button" data-action="reset-data">Azzera i miei dati</button></section>${footer()}`;
}

function renderBefore() { app().innerHTML = `<section class="page-wrap info-page"><div class="page-intro compact"><span class="eyebrow">PRIMA DI INIZIARE</span><h1>Muoviti con<br><em>consapevolezza.</em></h1></div><div class="notice"><h2>Il tuo corpo decide il ritmo.</h2><p>L'attività fisica deve essere svolta gradualmente e nel rispetto delle proprie capacità. Scegli il livello adeguato e adatta i movimenti quando necessario.</p><h3>Interrompi l'attività in caso di:</h3><ul><li>dolore</li><li>vertigini</li><li>difficoltà respiratoria</li><li>malessere</li></ul><p>In presenza di condizioni particolari o limitazioni funzionali, segui le indicazioni del tuo professionista sanitario.</p></div>${button("Scegli il tuo allenamento →", "choose-level", "button button-primary")}</section>${footer()}`; }
function footer() { return `<footer><strong>🌊 LUNGOMARE ATTIVO · SIPONTO</strong><span>Muoviti. A modo tuo. Il lungomare è di tutti.</span></footer>`; }

function chooseLevel() {
  if (progress.currentLevel) {
    startWorkout(progress.currentLevel);
    return;
  }
  
  app().innerHTML = `
    <section class="page-wrap questionario-section">
      <div class="section-header">
        <span class="eyebrow">PASSO 01 · SCEGLI</span>
        <h1>Questionario Preparazione<br><em>Sportiva</em></h1>
        <p>Rispondi a 5 domande per scoprire il tuo livello e ricevere gli allenamenti consigliati per il Giro delle Onde</p>
      </div>
      <form id="quiz-form">
        <div class="question-card" data-question="1">
          <span class="question-number">1 / 5</span>
          <h3>Quanto spesso fai attività fisica?</h3>
          <div class="options">
            <label class="option-label">
              <input type="radio" name="q1" value="1" required>
              <span class="option-check"></span>
              <span class="option-text">Raramente o mai</span>
            </label>
            <label class="option-label">
              <input type="radio" name="q1" value="2">
              <span class="option-check"></span>
              <span class="option-text">1-2 volte a settimana</span>
            </label>
            <label class="option-label">
              <input type="radio" name="q1" value="3">
              <span class="option-check"></span>
              <span class="option-text">3 o più volte a settimana</span>
            </label>
          </div>
        </div>
        <div class="question-card" data-question="2">
          <span class="question-number">2 / 5</span>
          <h3>Riesci a correre per 30 minuti senza fermarti?</h3>
          <div class="options">
            <label class="option-label">
              <input type="radio" name="q2" value="1" required>
              <span class="option-check"></span>
              <span class="option-text">No, mi fermo dopo pochi minuti</span>
            </label>
            <label class="option-label">
              <input type="radio" name="q2" value="2">
              <span class="option-check"></span>
              <span class="option-text">Riesco con qualche difficoltà</span>
            </label>
            <label class="option-label">
              <input type="radio" name="q2" value="3">
              <span class="option-check"></span>
              <span class="option-text">Sì, senza problemi</span>
            </label>
          </div>
        </div>
        <div class="question-card" data-question="3">
          <span class="question-number">3 / 5</span>
          <h3>Pratichi regolarmente uno sport?</h3>
          <div class="options">
            <label class="option-label">
              <input type="radio" name="q3" value="1" required>
              <span class="option-check"></span>
              <span class="option-text">No, non pratico sport</span>
            </label>
            <label class="option-label">
              <input type="radio" name="q3" value="2">
              <span class="option-check"></span>
              <span class="option-text">Sì, occasionalmente</span>
            </label>
            <label class="option-label">
              <input type="radio" name="q3" value="3">
              <span class="option-check"></span>
              <span class="option-text">Sì, in modo agonistico o strutturato</span>
            </label>
          </div>
        </div>
        <div class="question-card" data-question="4">
          <span class="question-number">4 / 5</span>
          <h3>Come valuti la tua flessibilità?</h3>
          <div class="options">
            <label class="option-label">
              <input type="radio" name="q4" value="1" required>
              <span class="option-check"></span>
              <span class="option-text">Scarsa, faccio fatica a piegarmi</span>
            </label>
            <label class="option-label">
              <input type="radio" name="q4" value="2">
              <span class="option-check"></span>
              <span class="option-text">Discreta, mi alleno ogni tanto</span>
            </label>
            <label class="option-label">
              <input type="radio" name="q4" value="3">
              <span class="option-check"></span>
              <span class="option-text">Buona, faccio stretching regolarmente</span>
            </label>
          </div>
        </div>
        <div class="question-card" data-question="5">
          <span class="question-number">5 / 5</span>
          <h3>Hai mai fatto allenamento in spiaggia o sulla sabbia?</h3>
          <div class="options">
            <label class="option-label">
              <input type="radio" name="q5" value="1" required>
              <span class="option-check"></span>
              <span class="option-text">Mai</span>
            </label>
            <label class="option-label">
              <input type="radio" name="q5" value="2">
              <span class="option-check"></span>
              <span class="option-text">Qualche volta</span>
            </label>
            <label class="option-label">
              <input type="radio" name="q5" value="3">
              <span class="option-check"></span>
              <span class="option-text">Sì, lo faccio spesso</span>
            </label>
          </div>
        </div>
        <button type="submit" class="btn-submit">
          <span>Scopri il tuo Livello</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      </form>
    </section>
  `;
  
  document.getElementById("quiz-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let total = 0;
    for (let i = 1; i <= 5; i++) {
      total += parseInt(formData.get(`q${i}`) || "0");
    }
    let level = "start";
    if (total >= 12) level = "pro";
    else if (total >= 8) level = "active";
    progress.currentLevel = level;
    saveProgress();
    startWorkout(level);
  });
}

function startWorkout(level) {
  if (!progress.currentLevel) {
    chooseLevel();
    return;
  }
  activeWorkout = { level, index: 0, round: 1, phase: "ready", seconds: 0 };
  renderWorkout();
}
function renderWorkout() {
  clearInterval(timerId); const workout = WORKOUTS[activeWorkout.level]; const item = workoutItems(activeWorkout.level)[activeWorkout.index]; const prescription = item.levels[activeWorkout.level] || item.levels.all || item.levels.start; const isTime = prescription[0] === "time";
  app().innerHTML = `<section class="player-page"><div class="player-top"><a href="#workouts">Esci</a><span>${workout.label} ${activeWorkout.round}/${workout.rounds}</span></div><div class="player-progress"><span>ESERCIZIO ${activeWorkout.index + 1} / ${workout.exercises.length}</span><div><i style="width:${((activeWorkout.index + 1) / workout.exercises.length) * 100}%"></i></div></div><div class="player-content"><span class="eyebrow">${activeWorkout.phase === "done" ? "COMPLETATO" : activeWorkout.phase === "rest" ? "RECUPERO" : activeWorkout.phase === "running" ? "MUOVITI" : "PRONTO?"}</span><h1>${activeWorkout.phase === "rest" ? "Respira." : item.name}</h1><p>${activeWorkout.phase === "rest" ? "Recupera e preparati al prossimo round." : item.description}</p>${activeWorkout.phase !== "rest" ? `<a class="exercise-video player-video" href="${item.video}" target="_blank" rel="noopener noreferrer">&#9654; Guarda la dimostrazione su YouTube</a>` : ""}<div class="timer-display">${activeWorkout.phase === "ready" ? (isTime ? formatTime(prescription[1]) : prescription[1]) : activeWorkout.phase === "done" ? "COMPLETATO" : formatTime(activeWorkout.seconds)}</div><strong class="prescription">${activeWorkout.phase === "rest" ? "PROSSIMO ROUND" : isTime ? "SECONDI" : `${prescription[1]} RIPETIZIONI`}</strong>${activeWorkout.phase === "ready" ? button("Inizia", "run-exercise", "button button-primary button-large") : activeWorkout.phase === "rest" ? button("Continua", "next-round", "button button-primary button-large") : activeWorkout.phase === "done" ? button("Salva allenamento", "complete-workout", "button button-primary button-large") : isTime ? button("Pausa", "pause-exercise", "button button-ghost button-large") : button("Completa esercizio", "complete-exercise", "button button-primary button-large")}${activeWorkout.phase === "ready" ? `<button class="skip-link" type="button" data-action="skip-exercise">Salta esercizio</button>` : ""}</div></section>`;
}
function runExercise() { const item = workoutItems(activeWorkout.level)[activeWorkout.index]; const prescription = item.levels[activeWorkout.level] || item.levels.all || item.levels.start; activeWorkout.phase = "running"; activeWorkout.seconds = prescription[0] === "time" ? prescription[1] : 0; renderWorkout(); timerId = setInterval(() => { if (prescription[0] !== "time") return; activeWorkout.seconds -= 1; if (activeWorkout.seconds <= 0) { clearInterval(timerId); nextExercise(); } else { const display = document.querySelector(".timer-display"); if (display) display.textContent = formatTime(activeWorkout.seconds); } }, 1000); }
function nextExercise() { clearInterval(timerId); const workout = WORKOUTS[activeWorkout.level]; if (activeWorkout.index < workout.exercises.length - 1) { activeWorkout.index += 1; activeWorkout.phase = "ready"; renderWorkout(); } else if (activeWorkout.round < workout.rounds) { activeWorkout.phase = "rest"; activeWorkout.seconds = 60; renderWorkout(); } else { activeWorkout.phase = "done"; renderWorkout(); } }
function skipExercise() { nextExercise(); }
function completeWorkout() { progress.workoutsCompleted.push({ level: activeWorkout.level, date: today() }); progress.totalMinutes += activeWorkout.level === "pro" ? 25 : 15; updateStreak(); saveProgress(); activeWorkout = null; navigate("#results"); }
function updateStreak() { const last = progress.streak.lastDate; const current = today(); if (last === current) return; const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1); progress.streak.current = last === yesterday.toISOString().slice(0, 10) ? progress.streak.current + 1 : 1; progress.streak.best = Math.max(progress.streak.best, progress.streak.current); progress.streak.lastDate = current; }

function startChallenge(id) { const challenge = CHALLENGES[id]; app().innerHTML = `<section class="player-page challenge-player"><div class="player-top"><a href="#challenges">← Esci</a><span>${challenge.title}</span></div><div class="player-content"><span class="eyebrow">${challenge.duration}</span><h1>${challenge.title}</h1><p>${challenge.description}</p><div class="timer-display" id="challenge-timer">00:00</div><strong class="prescription">${challenge.type === "stopwatch" ? "CRONOMETRO" : "CONTA I TUOI ROUND"}</strong><div class="challenge-steps">${challenge.steps.map((step, index) => `<span><b>${index + 1}</b>${step}</span>`).join("")}</div>${button("Avvia", `run-challenge:${id}`, "button button-primary button-large")}<div id="challenge-finish"></div></div></section>`; window.challengeState = { id, seconds: 0, rounds: 0, running: false }; }
function runChallenge(id) { const state = window.challengeState; state.running = !state.running; if (state.running) { document.querySelector(`[data-action="run-challenge:${id}"]`).textContent = "Ferma"; timerId = setInterval(() => { state.seconds += 1; const display = document.getElementById("challenge-timer"); if (display) display.textContent = formatTime(state.seconds); }, 1000); } else { finishChallenge(id); } }
function finishChallenge(id) { clearInterval(timerId); const state = window.challengeState; const challenge = CHALLENGES[id]; const value = challenge.type === "stopwatch" ? state.seconds : Math.max(1, Math.floor(state.seconds / 60)); progress.challengesCompleted.push({ id, date: today() }); if (!progress.personalRecords[id] || value < progress.personalRecords[id]) progress.personalRecords[id] = value; saveProgress(); document.getElementById("challenge-finish").innerHTML = `<div class="finish-box"><span>🏆 COMPLETATO</span><strong>${challenge.type === "stopwatch" ? formatTime(value) : `${value} round`}</strong><a href="#results">Vedi i risultati →</a></div>`; }

function route() { const hash = window.location.hash.replace(/^#/, "") || "home"; const [page, id] = hash.split("/"); document.querySelectorAll("[data-nav]").forEach((link) => link.classList.toggle("active", link.dataset.nav === page)); if (page === "home") renderHome(); else if (page === "workouts") renderWorkouts(); else if (page === "exercises") renderExercises(); else if (page === "challenges") renderChallenges(); else if (page === "results") renderResults(); else if (page === "before") renderBefore(); else if (page === "choose") chooseLevel(); else if (page === "workout" && id) startWorkout(id); else if (page === "challenge" && id && CHALLENGES[id]) startChallenge(id); else renderHome(); window.scrollTo(0, 0); }
document.addEventListener("click", (event) => { const target = event.target.closest("[data-action]"); if (!target) return; const [action, value] = target.dataset.action.split(":"); if (action === "choose-level") chooseLevel(); if (action === "exercises") navigate("#exercises"); if (action === "start-level") startWorkout(target.dataset.level || value); if (action === "run-exercise") runExercise(); if (action === "pause-exercise") { clearInterval(timerId); activeWorkout.phase = "ready"; renderWorkout(); } if (action === "complete-exercise") nextExercise(); if (action === "next-round") { activeWorkout.round += 1; activeWorkout.index = 0; activeWorkout.phase = "ready"; renderWorkout(); } if (action === "skip-exercise") skipExercise(); if (action === "complete-workout") completeWorkout(); if (action === "challenge") startChallenge(value); if (action === "run-challenge") runChallenge(value); if (action === "upgrade-level") upgradeLevel(); if (action === "reset-data" && confirm("Azzerare tutti i progressi?")) { progress = { ...DEFAULT_PROGRESS }; saveProgress(); renderResults(); } });
document.addEventListener("input", (event) => { if (event.target.id === "exercise-search") renderExerciseGrid(); });
document.addEventListener("click", (event) => { const filter = event.target.closest("[data-filter]"); if (!filter) return; document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active")); filter.classList.add("active"); renderExerciseGrid(); });
window.addEventListener("hashchange", route);
document.getElementById("header-start").addEventListener("click", () => navigate("#choose"));
if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
route();
