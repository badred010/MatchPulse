# ⚽ MatchPulse

Ein moderner, responsiver Fußball-Spielstand-Tracker für die Top 5 europäischen Ligen.

![MatchPulse Demo](./demo-placeholder.gif)

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
- npm oder yarn

### Installation & Start

```bash
# Repository klonen
git clone <repository-url>
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
- **Live**: Lebendiges Grün für Live-Spiele
- **Alert**: Warmes Orange für Highlights
- **Cards**: Sanfte Schatten und Hover-Effekte
- **Animationen**: Pulse-Effekte für Live-Badges

Alle Farben und Styles sind in `src/index.css` definiert und nutzen CSS-Variablen für konsistentes Theming.

## 🔌 API-Integration (Optional)

Standardmäßig verwendet MatchPulse simulierte Daten. Für echte Live-Daten:

1. Registriere dich bei [API-Football](https://www.api-football.com/)
2. Erstelle eine `.env`-Datei:
   ```
   VITE_FOOTBALL_API_KEY=dein_api_key_hier
   ```
3. Implementiere die Fetch-Logik in `src/hooks/useMatches.js`

**Hinweis**: Die API-Integration ist als separate Feature geplant und aktuell nicht implementiert.

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

3. **Umgebungsvariablen** (optional für API):
   - In Vercel-Projekt-Settings
   - `VITE_FOOTBALL_API_KEY` hinzufügen

### Andere Plattformen
- **Netlify**: Drag & Drop des `dist/` Ordners
- **GitHub Pages**: Mit `gh-pages` Package
- **Cloudflare Pages**: GitHub-Integration

## 🛠 Entwicklung

### Verfügbare Scripts
- `npm run dev` - Entwicklungsserver mit Hot Reload
- `npm run build` - Production Build
- `npm run preview` - Preview des Production Builds
- `npm run lint` - Code-Linting (optional)

### Code-Konventionen
- Functional Components mit Hooks
- PropTypes für Type-Checking (optional)
- Komponenten-Kommentare auf Englisch
- UI-Text auf Deutsch
- Tailwind für alle Styles

## 🤝 Beitragen

Vorschläge und Pull Requests sind willkommen!

### Commit-Vorschläge
```
feat: Initial project setup with React + Tailwind
feat: Add design system and color tokens
feat: Create Header and FilterBar components
feat: Implement MatchCard and MatchesGrid
feat: Add match detail modal
feat: Implement mock data with live simulation
feat: Add search and filter functionality
docs: Add comprehensive README
style: Add animations and hover effects
refactor: Optimize component structure
```

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

### Deploy
Ready for Vercel, Netlify, or any static hosting platform.

---

**Entwickelt mit ❤️ für Fußball-Fans**
