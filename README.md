# Lungomare Attivo - Siponto

Web app fitness mobile-first per allenarsi all'aperto sul lungomare di Siponto. Il progetto resta completamente statico e compatibile con GitHub Pages.

## Funzionalita

- Home operativa con percorsi START, ACTIVE, PRO e Lungomare per tutti.
- Workout player con progress bar, timer, recupero tra circuiti e avanzamento manuale per le ripetizioni.
- Libreria esercizi con dati centralizzati, ricerca e filtri.
- Sette challenge con cronometro o conteggio dei round.
- Risultati, record, minuti totali e streak salvati in `localStorage`.
- Navigazione hash-based compatibile con hosting statico e deep link come `#challenge/siponto-sprint`.
- Manifest e service worker per un uso PWA con connessione debole.
- Interfaccia responsive, tastiera-friendly e supporto `prefers-reduced-motion`.

## Struttura

- `index.html` - shell, metadata SEO e navigazione.
- `script.js` - modello dati, viste, player, challenge e storage locale.
- `style.css` - sistema visuale responsive.
- `manifest.webmanifest`, `sw.js`, `icon.svg` - supporto PWA.

## Sviluppo locale

Il sito non richiede installazione o build. Apri `index.html` direttamente oppure avvia un server statico locale, ad esempio:

```bash
python -m http.server 8080
```

Poi visita `http://localhost:8080`.

I progressi si possono azzerare dalla pagina **I miei risultati**. I video esterni già presenti nel progetto precedente non vengono duplicati nel player e nessun URL video nuovo viene inventato.
