# ⚽ MatchPulse

Ein moderner, responsiver Fußball-Spielstand-Tracker für die Top 5 europäischen Ligen.

MatchPulse : (https://match-pulse-rho.vercel.app/)

## 🌟 Features

- **Live-Spiele**: Echtzeit-Updates für laufende Matches mit animierten Live-Badges
- **Top 5 Ligen**: Bundesliga, Premier League, La Liga, Serie A, Ligue 1
- **Intelligente Filter**: Nach Liga, Team oder Live-Status filtern
- **Responsive Design**: Perfekt auf Desktop, Tablet und Mobile
- **Detailansicht**: Klicke auf ein Spiel für mehr Informationen
- **Demo-Modus**: Funktioniert offline mit simulierten Live-Daten

## 🚀 Schnellstart

### Voraussetzungen
- Node.js (Version 16 oder höher)
- npm

### Installation & Start

```bash
# Repository klonen
git clone <https://github.com/badred010/MatchPulse>
cd matchpulse

# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Die App ist nun unter `http://localhost:8080` verfügbar.

## 📁 Projektstruktur

```
matchpulse/
├── src/
│   ├── components/          # React-Komponenten
│   │   ├── Header.jsx       # Kopfzeile mit Suche
│   │   ├── Easter.jsx       # Klein Easter spiel
│   │   ├── FilterBar.jsx    # Liga-Filter und Live-Toggle
│   │   ├── MatchCard.jsx    # Einzelne Spielkarte
│   │   ├── MatchesGrid.jsx  # Grid-Layout für Spiele
│   │   ├── MatchModal.jsx   # Detailansicht-Modal
│   │   └── Footer.jsx       # Fußzeile
│   ├── data/
│   │   └── mockMatches.js   # Beispieldaten mit Simulationslogik
│   ├── hooks/
│   │   └── useMatches.js    # Custom Hook für Daten-Fetching
│   ├── pages/
│   │   └── Index.jsx        # Hauptseite
│   ├── index.css            # Tailwind + Design System
│   └── main.jsx             # App-Einstiegspunkt
├── tailwind.config.ts       # Tailwind-Konfiguration
└── package.json
```

## 🎨 Design System

MatchPulse nutzt ein sport-inspiriertes Design System mit:
- **Primary**: Kräftiges Blau für Haupt-Elemente
- **Live**: Lebendiges Rot für Live-Spiele
- **Alert**: Warmes Orange für Highlights
- **Cards**: Sanfte Schatten und Hover-Effekte
- **Animationen**: Pulse-Effekte für Live-Badges

Alle Farben und Styles sind in `src/index.css` definiert und nutzen CSS-Variablen für konsistentes Theming.

## 🔌 API-Integration (In Arbeit...)

Standardmäßig verwendet MatchPulse simulierte Daten. Echte Live-Daten folgen bald!


## 🧪 Manuelle Tests

### Funktionalität testen:
1. **Suche**: Team-Namen oder Liga in Suchfeld eingeben
2. **Filter**: Verschiedene Ligen auswählen
3. **Live-Toggle**: "Nur Live" aktivieren/deaktivieren
4. **Details**: Auf Spielkarte klicken für Modal
5. **Live-Updates**: Beobachte Score-Updates alle 10 Sekunden
6. **Responsive**: Browser-Fenster verkleinern

### Erwartete Ergebnisse:
- ✅ Sofortige Filterung bei Eingaben
- ✅ Smooth Animationen und Transitions
- ✅ Live-Badges pulsen
- ✅ Modal öffnet/schließt sauber
- ✅ Layout funktioniert auf allen Bildschirmgrößen

## 📦 Build & Deployment

### Production Build
```bash
npm run build
```

Erstellt optimierte Dateien im `dist/` Ordner.

### Deployment auf Vercel

1. **Via CLI**:
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Via GitHub**:
   - Repository mit GitHub verbinden
   - Projekt in Vercel importieren
   - Build Command: `npm run build`
   - Output Directory: `dist`


## 🛠 Entwicklung

### Verfügbare Scripts
- `npm run dev` - Entwicklungsserver mit Hot Reload
- `npm run build` - Production Build
- `npm run preview` - Preview des Production Builds

### Code-Konventionen
- Functional Components mit Hooks
- PropTypes für Type-Checking
- Komponenten-Kommentare auf Englisch
- UI-Text auf Deutsch
- Tailwind für alle Styles

## 🤝 Beitragen

Vorschläge und Pull Requests sind willkommen!


## 📝 Lizenz

MIT License - frei für private und kommerzielle Nutzung.

---

## 🌍 English Summary

**MatchPulse** is a modern, responsive football match tracker for the top 5 European leagues (Bundesliga, Premier League, La Liga, Serie A, Ligue 1). Built with React and Tailwind CSS, it features live match updates, league filtering, team search, and a clean mobile-friendly UI. The app works offline with simulated data and can be extended with real API integration.

### Quick Start
```bash
npm install
npm run dev
```


**Entwickelt mit ❤️ für Fußball-Fans**
