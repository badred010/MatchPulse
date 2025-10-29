import { Github, Heart } from 'lucide-react';


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Branding */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-2xl">⚽</span>
            <span className="font-semibold">MatchPulse</span>
            <span>© {currentYear}</span>
          </div>

          {/* Info */}
          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p className="flex items-center gap-2 justify-center md:justify-end">
              Entwickelt mit
              <Heart className="w-4 h-4 text-destructive fill-destructive" />
              für Fußball-Fans
            </p>
            <p className="mt-1">
              Live-Ergebnisse der Top 5 europäischen Ligen
            </p>
          </div>
        </div>

        {/* Demo notice */}
        <div className="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            🎯 Demo-Modus aktiv - Verwendet simulierte Daten mit Live-Updates
          </p>
          <p className="mt-1">
            Für echte API-Integration siehe README.md
          </p>
        </div>
      </div>
    </footer>
  );
}
