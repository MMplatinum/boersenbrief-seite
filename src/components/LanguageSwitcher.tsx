import { useLocation, Link } from 'react-router-dom';

const LanguageSwitcher = () => {
  const location = useLocation();
  
  // Bestimme die aktuelle Sprache basierend auf der URL
  const isEnglish = location.pathname.startsWith('/en');
  
  // Generiere die entsprechende andere Sprach-URL
  const getAlternateUrl = () => {
    if (isEnglish) {
      // Von EN zu DE: Entferne /en Prefix
      if (location.pathname === '/en') return '/';
      if (location.pathname === '/en/starter-guide') return '/starter-guide';
      if (location.pathname === '/en/download/syncea') return '/download/syncea';
      if (location.pathname === '/en/ea') return '/ea';
      if (location.pathname === '/en/partners') return '/partners';
      return '/'; // Fallback für andere EN Seiten
    } else {
      // Von DE zu EN: Füge /en Prefix hinzu
      if (location.pathname === '/') return '/en';
      if (location.pathname === '/starter-guide') return '/en/starter-guide';
      if (location.pathname === '/download/syncea') return '/en/download/syncea';
      if (location.pathname === '/ea') return '/en/ea';
      if (location.pathname === '/partners') return '/en/partners';
      return '/en'; // Fallback für andere DE Seiten
    }
  };

  return (
    <Link
      to={getAlternateUrl()}
      className="flex items-center justify-center w-10 h-10 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-lg shadow-sm hover:shadow-md hover:bg-white hover:border-gray-300 transition-all duration-300 hover:scale-105 group overflow-hidden"
      title={isEnglish ? 'Switch to German' : 'Switch to English'}
    >
      {isEnglish ? (
        // Deutsche Flagge
        <div className="w-6 h-4 relative group-hover:scale-110 transition-transform duration-300">
          <div className="w-full h-full bg-gradient-to-b from-black via-red-600 to-yellow-400 rounded-sm">
            <div className="w-full h-1/3 bg-black"></div>
            <div className="w-full h-1/3 bg-red-600"></div>
            <div className="w-full h-1/3 bg-yellow-400"></div>
          </div>
        </div>
      ) : (
        // US Flagge
        <div className="w-6 h-4 relative group-hover:scale-110 transition-transform duration-300">
          <div className="w-full h-full bg-white rounded-sm overflow-hidden">
            {/* Streifen */}
            <div className="w-full h-full">
              <div className="w-full h-[7.7%] bg-red-600"></div>
              <div className="w-full h-[7.7%] bg-white"></div>
              <div className="w-full h-[7.7%] bg-red-600"></div>
              <div className="w-full h-[7.7%] bg-white"></div>
              <div className="w-full h-[7.7%] bg-red-600"></div>
              <div className="w-full h-[7.7%] bg-white"></div>
              <div className="w-full h-[7.7%] bg-red-600"></div>
              <div className="w-full h-[7.7%] bg-white"></div>
              <div className="w-full h-[7.7%] bg-red-600"></div>
              <div className="w-full h-[7.7%] bg-white"></div>
              <div className="w-full h-[7.7%] bg-red-600"></div>
              <div className="w-full h-[7.7%] bg-white"></div>
              <div className="w-full h-[7.7%] bg-red-600"></div>
            </div>
            {/* Blaues Feld */}
            <div className="absolute top-0 left-0 w-[40%] h-[53.8%] bg-blue-800"></div>
          </div>
        </div>
      )}
    </Link>
  );
};

export default LanguageSwitcher; 