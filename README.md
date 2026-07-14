# Lungomare Attivo - Il Giro delle Onde

Sito GitHub Pages per il progetto **Lungomare Attivo**. Include un questionario interattivo per valutare il livello di preparazione sportiva con 3 livelli e video YouTube consigliati.

## Struttura

- `index.html` - Pagina principale con hero e questionario
- `style.css` - Stili responsive con tema mare/spiaggia
- `script.js` - Logica del questionario e gestione risultati

## Come funziona

1. L'utente risponde a 5 domande sulla preparazione fisica
2. Ogni risposta assegna da 1 a 3 punti
3. In base al punteggio totale (5-15) viene assegnato un livello:
   - **Principiante** (5-8 punti)
   - **Intermedio** (9-12 punti)
   - **Avanzato** (13-15 punti)
4. Per ogni livello vengono mostrati 3 video YouTube consigliati

## Personalizzazione

Per sostituire i video YouTube, modifica l'oggetto `LEVELS` in `script.js` aggiornando gli URL e i titoli dei video.