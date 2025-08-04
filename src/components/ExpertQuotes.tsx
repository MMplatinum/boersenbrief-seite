import React from 'react';
import { motion } from 'framer-motion';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

interface Quote {
  name: string;
  title: string;
  text: string;
}

const quotesEN: Quote[] = [
  {
    name: 'Tom Hougaard',
    title: 'High-Stakes Daytrader',
    text: `If you're not journaling every trade, you're missing the lesson the market is trying to teach you.`,
  },
  {
    name: 'Mark Minervini',
    title: 'U.S. Investing Championship Winner',
    text: `I screenshot and grade every single trade at the close. Journaling is non-negotiable if you want consistency.`,
  },
  {
    name: 'Linda Bradford Raschke',
    title: 'Hedge Fund Manager',
    text: `My trading journal is my best coach: it shows me patterns in my own behaviour faster than any indicator can.`,
  },
  {
    name: 'Paul Tudor Jones',
    title: 'Hedge Fund Manager',
    text: `Before I enter, I write down exactly where I'm wrong. That single line in my journal keeps me honest.`,
  },
  {
    name: 'Toni Hansen',
    title: 'Swing & Day Trader',
    text: `A trading journal is probably the most important – and most often neglected – tool in determining your success or failure.`,
  },
  {
    name: 'Mike Bellafiore',
    title: 'Co-Founder, SMB Capital',
    text: `Elite performance begins in the trading journal. That's where you become a pro.`,
  },
  {
    name: 'Ross Cameron',
    title: 'Momentum Daytrader',
    text: `Maintain a trading journal to record all your trades … Review your journal regularly to learn from your successes and mistakes, and to track your progress.`,
  },
  {
    name: 'Tom Hougaard',
    title: 'High-Stakes Daytrader',
    text: `A trading journal is your most honest teacher. It never lies about your mistakes.`,
  },
  {
    name: 'Ed Seykota',
    title: 'Trend-Following Trader',
    text: `If you can't measure it, you probably can't manage it. Things you measure tend to improve.`,
  },
];

const quotesDE: Quote[] = [
  {
    name: 'Tom Hougaard',
    title: 'High-Stakes Daytrader',
    text: 'Wenn du nicht jeden deiner Trades in einem Journal festhältst, verpasst du die Lektion, die dir der Markt erteilen will.',
  },
  {
    name: 'Mark Minervini',
    title: 'Gewinner U.S. Investing Championship',
    text: 'Ich mache am Tagesende von jedem Trade einen Screenshot und bewerte ihn. Ein Trading-Journal ist ein Muss, wenn du konstante Ergebnisse erzielen willst.',
  },
  {
    name: 'Linda Bradford Raschke',
    title: 'Hedge-Fund-Managerin',
    text: 'Mein Trading-Journal ist mein bester Coach: Es zeigt mir Muster in meinem Verhalten schneller als jeder Indikator es könnte.',
  },
  {
    name: 'Paul Tudor Jones',
    title: 'Hedge-Fund-Manager',
    text: 'Bevor ich einen Trade eingehe, notiere ich exakt, wo ich falsch liegen könnte. Diese eine Zeile in meinem Journal hält mich ehrlich.',
  },
  {
    name: 'Toni Hansen',
    title: 'Swing- & Day-Traderin',
    text: 'Ein Trading-Journal ist wahrscheinlich das wichtigste – und zugleich am häufigsten vernachlässigte – Werkzeug für deinen Erfolg oder Misserfolg.',
  },
  {
    name: 'Mike Bellafiore',
    title: 'Mitgründer von SMB Capital',
    text: 'Spitzenleistung beginnt im Trading-Journal. Dort wirst du zum Profi.',
  },
  {
    name: 'Ross Cameron',
    title: 'Momentum-Daytrader',
    text: 'Führe ein Trading-Journal, in dem du alle Trades festhältst … Überprüfe es regelmäßig, um aus Erfolgen und Fehlern zu lernen und deinen Fortschritt zu verfolgen.',
  },
  {
    name: 'Tom Hougaard',
    title: 'High-Stakes Daytrader',
    text: 'Ein Trading-Journal ist dein ehrlichster Lehrer. Es lügt nie über deine Fehler.',
  },
  {
    name: 'Ed Seykota',
    title: 'Trend-Following-Trader',
    text: 'Was du nicht messen kannst, kannst du vermutlich nicht steuern. Dinge, die du misst, verbessern sich in der Regel.',
  },
];

interface Props { language?: 'de' | 'en'; }

const ExpertQuotes = ({ language = 'de' }: Props) => {
  const headline = language === 'de'
    ? {
        line1: 'Was Top-Trader über',
        line2: 'Trading Journale sagen',
      }
    : {
        line1: 'What Top Traders Say About',
        line2: 'Trading Journals',
      };

  const animation = { duration: 8000, easing: (t: number) => t };

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: 'performance',
    drag: false,
    slides: { perView: 'auto', spacing: 24 },
    created(slider) {
      slider.moveToIdx(slider.track.details.abs + 1, true, animation);
    },
    updated(slider) {
      slider.moveToIdx(slider.track.details.abs + 1, true, animation);
    },
    animationEnded(slider) {
      slider.moveToIdx(slider.track.details.abs + 1, true, animation);
    },
  });

  // choose based on language
  const quotes = language === 'de' ? quotesDE : quotesEN;

  return (
    <section className="py-16 md:py-32 relative overflow-hidden bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30">
      <div className="relative section-container">
        <motion.h2
          initial={window.innerWidth >= 768 ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: window.innerWidth >= 768 ? 0.8 : 0,
            ease: "easeOut"
          }}
          className="text-center text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-12 tracking-tight leading-tight"
        >
          {headline.line1}
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
            {headline.line2}
          </span>
        </motion.h2>

        {/* Marquee */}
        <div ref={sliderRef} className="keen-slider overflow-hidden">
          {quotes.map((q, idx) => (
            <div key={idx} className="keen-slider__slide" style={{ flex: '0 0 18rem', width: '18rem' }}>
              <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-80">
                <blockquote className="text-gray-700 font-light italic mb-4 whitespace-normal flex-1" style={{ minHeight: '140px' }}>
                  “{q.text}”
                </blockquote>
                <div className="h-px bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-30 mb-4" />
                <p className="text-gray-900 font-medium">{q.name}</p>
                <p className="text-sm text-gray-600 font-light">{q.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertQuotes; 