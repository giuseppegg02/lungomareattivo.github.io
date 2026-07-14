const LEVELS = {
  principiante: {
    title: "Principiante",
    icon: "🌱",
    description: "Sei all'inizio del tuo percorso sportivo. Non preoccuparti, con costanza e i giusti esercizi puoi migliorare rapidamente!",
    range: "5 - 8 punti",
    videos: [
      {
        title: "Allenamento Base per Principianti",
        url: "https://www.youtube.com/watch?v=ING1gEhMVOs",
        desc: "Esercizi semplici per iniziare"
      },
      {
        title: "Stretching per Principianti",
        url: "https://www.youtube.com/watch?v=QOVaHwm-Q6U",
        desc: "Migliora la tua flessibilità"
      },
      {
        title: "Camminata Attiva in Spiaggia",
        url: "https://www.youtube.com/watch?v=njeZ29umqVE",
        desc: "Primi passi verso il movimento"
      }
    ]
  },
  intermedio: {
    title: "Intermedio",
    icon: "💪",
    description: "Hai una buona base di preparazione. Con gli allenamenti giusti puoi fare il salto di qualità!",
    range: "9 - 12 punti",
    videos: [
      {
        title: "Allenamento Funzionale a Corpo Libero",
        url: "https://www.youtube.com/watch?v=UBMk30rjy0o",
        desc: "Potenzia tutto il corpo"
      },
      {
        title: "HIIT Spiaggia - 20 Minuti",
        url: "https://www.youtube.com/watch?v=cZnsLVArIt8",
        desc: "Cardio intenso sulla sabbia"
      },
      {
        title: "Esercizi di Mobilità Articolare",
        url: "https://www.youtube.com/watch?v=SedzsuE4hQQ",
        desc: "Prevenzione infortuni"
      }
    ]
  },
  avanzato: {
    title: "Avanzato",
    icon: "🏆",
    description: "Ottimo! Hai un livello di preparazione eccellente. Sei pronto per sfide ad alta intensità!",
    range: "13 - 15 punti",
    videos: [
      {
        title: "Allenamento Esplosivo Beach Workout",
        url: "https://www.youtube.com/watch?v=ml6cT4AZdqI",
        desc: "Massima intensità sulla sabbia"
      },
      {
        title: "Circuit Training Avanzato",
        url: "https://www.youtube.com/watch?v=UItWltVZZmE",
        desc: "Forza e resistenza combinati"
      },
      {
        title: "Yoga Dinamico per Atleti",
        url: "https://www.youtube.com/watch?v=v7AYKMP6rOE",
        desc: "Recupero attivo e flessibilità"
      }
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("quiz-form");
  const risultato = document.getElementById("risultato");
  const btnRetry = document.getElementById("btn-retry");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    let total = 0;
    let allAnswered = true;

    for (let i = 1; i <= 5; i++) {
      const val = formData.get(`q${i}`);
      if (!val) {
        allAnswered = false;
        break;
      }
      total += parseInt(val);
    }

    if (!allAnswered) {
      alert("Rispondi a tutte le domande prima di procedere!");
      return;
    }

    let level;
    if (total <= 8) {
      level = LEVELS.principiante;
    } else if (total <= 12) {
      level = LEVELS.intermedio;
    } else {
      level = LEVELS.avanzato;
    }

    showResult(level, total);
  });

  btnRetry.addEventListener("click", () => {
    form.reset();
    risultato.style.display = "none";
    form.style.display = "block";
    document.getElementById("questionario").scrollIntoView({ behavior: "smooth" });
  });
});

function showResult(level, score) {
  const risultato = document.getElementById("risultato");
  const badge = document.getElementById("level-badge");
  const title = document.getElementById("level-title");
  const desc = document.getElementById("level-description");
  const scoreEl = document.getElementById("level-score");
  const grid = document.getElementById("videos-grid");

  badge.className = "level-badge " + level.title.toLowerCase();
  badge.querySelector(".level-icon").textContent = level.icon;
  title.textContent = level.title;
  desc.textContent = level.description;
  scoreEl.textContent = `Punteggio: ${score}/15 — ${level.range}`;

  grid.innerHTML = "";
  level.videos.forEach((video) => {
    const videoId = extractVideoId(video.url);
    const thumbnailUrl = videoId
      ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
      : "";

    const card = document.createElement("a");
    card.className = "video-card";
    card.href = video.url;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.innerHTML = `
      <div class="video-thumbnail">
        ${thumbnailUrl ? `<img src="${thumbnailUrl}" alt="${video.title}" loading="lazy">` : ""}
        <div class="play-icon"></div>
      </div>
      <div class="video-info">
        <h5>${video.title}</h5>
        <p>${video.desc}</p>
      </div>
    `;
    grid.appendChild(card);
  });

  risultato.style.display = "block";
  risultato.scrollIntoView({ behavior: "smooth", block: "center" });
}

function extractVideoId(url) {
  const match = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}
