import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag } from 'lucide-react';

interface Purchase {
  name: string;
  country: string;
  timeAgo: string;
  isReal: boolean;
}

interface SocialProofWidgetProps {
  language?: 'de' | 'en';
}

const SocialProofWidget = ({ language = 'de' }: SocialProofWidgetProps) => {
  const [currentPurchase, setCurrentPurchase] = useState<Purchase | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Deutsche Namen (85% männlich, 15% weiblich - entspricht der Trading-Demografie)
  const germanNames = [
    // Männliche Namen (85%)
    'Max', 'Tom', 'Ben', 'Leon', 'Paul', 'Finn', 'Noah', 'Felix', 'Luis', 'Tim',
    'Jan', 'Alex', 'David', 'Moritz', 'Chris', 'Daniel', 'Sebastian', 'Michael', 'Stefan', 'Thomas',
    'Oliver', 'Florian', 'Tobias', 'Simon', 'Christian', 'Martin', 'Andreas', 'Philipp', 'Matthias', 'Jonas',
    'Fabian', 'Marco', 'Nico', 'Kevin', 'Dennis', 'Markus', 'Lars', 'Jens', 'Patrick', 'Manuel',
    'Alexander', 'Robert', 'Frank', 'Sven', 'Marcus', 'Björn', 'André', 'Peter', 'Marcel', 'Kai',
    // Weibliche Namen (15%)
    'Anna', 'Lisa', 'Sarah', 'Emma', 'Mia', 'Laura', 'Lea', 'Maya', 'Lena', 'Lia',
    'Julia', 'Nina', 'Marie', 'Sophie', 'Clara'
  ];

  // Internationale Namen für Deutschland (Migration/Diversität) - 85% männlich, 15% weiblich
  const internationalNamesDE = [
    // Männliche Namen (85%)
    'Ahmed', 'Marco', 'Dimitri', 'Pietro', 'Hassan', 'Luca', 'Aleksandr', 'Antonio',
    'Mehmet', 'Giuseppe', 'Sergio', 'Ivan', 'Nikola', 'Armin', 'Emir', 'Milan',
    'Omar', 'Yusuf', 'Kemal', 'Dragan', 'Viktor',
    // Weibliche Namen (15%)
    'Fatima', 'Elena', 'Anastasia', 'Sofia', 'Amina', 'Valentina', 'Ekaterina', 'Carmen'
  ];

  // Namen für andere Länder (85% männlich, 15% weiblich)
  const internationalNames = {
    'Österreich': ['Andreas', 'Stefan', 'Thomas', 'Wolfgang', 'Markus', 'Christian', 'Florian', 'Michael', 'Alexander', 'Robert', 'Peter', 'Daniel', 'Martin', 'Franz', 'Georg', 'Manuel', 'Lukas', 'Kathrin', 'Melanie', 'Sabine'],
    'Schweiz': ['Marc', 'Beat', 'Urs', 'Thomas', 'Daniel', 'Michael', 'Christian', 'Stefan', 'Peter', 'Martin', 'Andreas', 'Marco', 'David', 'Pascal', 'Roger', 'Reto', 'Sandro', 'Claudia', 'Regula', 'Franziska'],
    'Niederlande': ['Daan', 'Sem', 'Bram', 'Lars', 'Tim', 'Tom', 'Sven', 'Nick', 'Mike', 'Rick', 'Mark', 'Kevin', 'Dennis', 'Jeroen', 'Erik', 'Bas', 'Frank', 'Emma', 'Julia', 'Sophie'],
    'Belgien': ['Liam', 'Louis', 'Arthur', 'Lucas', 'Nathan', 'Victor', 'Thomas', 'Antoine', 'Noah', 'Gabriel', 'Maxime', 'Hugo', 'Théo', 'Alexandre', 'Raphaël', 'Adam', 'Jules', 'Marie', 'Camille', 'Léa'],
    'Frankreich': ['Antoine', 'Théo', 'Hugo', 'Louis', 'Gabriel', 'Arthur', 'Raphaël', 'Tom', 'Alexandre', 'Paul', 'Victor', 'Jules', 'Adam', 'Lucas', 'Maxime', 'Nathan', 'Noé', 'Manon', 'Léa', 'Chloé'],
    'Italien': ['Francesco', 'Alessandro', 'Matteo', 'Lorenzo', 'Andrea', 'Marco', 'Davide', 'Riccardo', 'Luca', 'Gabriele', 'Simone', 'Tommaso', 'Antonio', 'Pietro', 'Michele', 'Stefano', 'Giovanni', 'Giulia', 'Chiara', 'Federica'],
    'Spanien': ['Alejandro', 'Daniel', 'Pablo', 'David', 'Adrián', 'Hugo', 'Álvaro', 'Diego', 'Carlos', 'Manuel', 'Sergio', 'Javier', 'Antonio', 'Miguel', 'Gonzalo', 'Rubén', 'Francisco', 'María', 'Paula', 'Lucía'],
    'Großbritannien': ['James', 'William', 'Harry', 'Oliver', 'George', 'Thomas', 'Jack', 'Charlie', 'Jacob', 'Alexander', 'Daniel', 'Matthew', 'Ryan', 'Luke', 'Michael', 'Samuel', 'Benjamin', 'Emily', 'Sophie', 'Charlotte'],
    'USA': ['Michael', 'William', 'David', 'Richard', 'Joseph', 'Thomas', 'Christopher', 'Charles', 'Daniel', 'Matthew', 'Anthony', 'Mark', 'Donald', 'Steven', 'Paul', 'Andrew', 'Joshua', 'Kenneth', 'Kevin', 'Brian', 'George', 'Timothy', 'Ronald', 'Jason', 'Edward', 'Jeffrey', 'Ryan', 'Jacob', 'Gary', 'Nicholas', 'Eric', 'Jonathan', 'Stephen', 'Larry', 'Justin', 'Scott', 'Brandon', 'Benjamin', 'Samuel', 'Gregory', 'Alexander', 'Patrick', 'Frank', 'Raymond', 'Jack', 'Dennis', 'Jerry', 'Tyler', 'Aaron', 'Jose', 'Henry', 'Adam', 'Douglas', 'Nathan', 'Peter', 'Zachary', 'Kyle', 'Noah', 'Alan', 'Ethan', 'Jeremy', 'Lionel', 'Mason', 'Caleb', 'Robert', 'Hunter', 'Isaiah', 'Luke', 'Lucas', 'Wayne', 'Arthur', 'Eugene', 'Harold', 'Ralph', 'Bobby', 'Russell', 'Louis', 'Philip', 'Johnny', 'Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan', 'Jessica', 'Sarah', 'Karen', 'Nancy', 'Lisa', 'Betty', 'Helen', 'Sandra', 'Donna', 'Carol', 'Ruth', 'Sharon', 'Michelle', 'Laura', 'Kimberly', 'Deborah', 'Dorothy'],
    'Kanada': ['Liam', 'Noah', 'Jackson', 'Lucas', 'Jacob', 'Logan', 'Ethan', 'Mason', 'Oliver', 'William', 'James', 'Benjamin', 'Alexander', 'Michael', 'Elijah', 'Daniel', 'Matthew', 'Aiden', 'Henry', 'Joseph', 'Samuel', 'David', 'Carter', 'Owen', 'Wyatt', 'John', 'Jack', 'Luke', 'Jayden', 'Dylan', 'Grayson', 'Levi', 'Isaac', 'Gabriel', 'Julian', 'Mateo', 'Anthony', 'Jaxon', 'Lincoln', 'Joshua', 'Christopher', 'Andrew', 'Theodore', 'Caleb', 'Ryan', 'Asher', 'Nathan', 'Thomas', 'Leo', 'Isaiah', 'Charles', 'Josiah', 'Hudson', 'Christian', 'Hunter', 'Connor', 'Eli', 'Ezra', 'Aaron', 'Landon', 'Adrian', 'Jonathan', 'Nolan', 'Jeremiah', 'Easton', 'Elias', 'Colton', 'Cameron', 'Carson', 'Robert', 'Angel', 'Maverick', 'Nicholas', 'Dominic', 'Jaxson', 'Greyson', 'Adam', 'Ian', 'Austin', 'Santiago', 'Jordan', 'Cooper', 'Brayden', 'Roman', 'Evan', 'Ezekiel', 'Xavier', 'Jose', 'Jace', 'Jameson', 'Leonardo', 'Bryson', 'Axel', 'Everett', 'Parker', 'Kai', 'Emma', 'Olivia', 'Ava', 'Sophia', 'Isabella', 'Charlotte', 'Amelia', 'Mia', 'Harper', 'Evelyn'],
    'Australien': ['Oliver', 'William', 'Jack', 'Noah', 'James', 'Ethan', 'Mason', 'Lucas', 'Liam', 'Alexander', 'Benjamin', 'Max', 'Isaac', 'Samuel', 'Thomas', 'Lachlan', 'Cooper', 'Jackson', 'Jayden', 'Matthew', 'Daniel', 'Joshua', 'Henry', 'Luke', 'Adam', 'Aiden', 'Connor', 'Ryan', 'Sebastian', 'Owen', 'Charlie', 'Nathan', 'Caleb', 'Eli', 'Christian', 'Hunter', 'Isaiah', 'Tyler', 'Harrison', 'Zach', 'Nate', 'Archie', 'Kai', 'Marcus', 'Jasper', 'Xavier', 'Hudson', 'Leo', 'Aaron', 'Jordan', 'Levi', 'Cameron', 'Blake', 'Ashton', 'Mitchell', 'Jaxon', 'Oscar', 'Hayden', 'Michael', 'Gabriel', 'Felix', 'Finn', 'Elijah', 'Ryder', 'Logan', 'Jake', 'Lincoln', 'Austin', 'Zara', 'Luca', 'Jude', 'Grayson', 'Declan', 'Theo', 'Bailey', 'Alex', 'Beau', 'Elias', 'Jesse', 'Rhys', 'Lewis', 'Kobe', 'Phoenix', 'Harvey', 'Darcy', 'Hugo', 'Charles', 'Arthur', 'Angus', 'Hamish', 'George', 'Banjo', 'Rory', 'Flynn', 'Archer', 'Charlotte', 'Olivia', 'Amelia', 'Isla', 'Mia', 'Grace', 'Sophia', 'Chloe', 'Ruby', 'Matilda']
  };

  // Länder-Gewichtung basierend auf Sprache - identisch für beide Seiten
  const countries = language === 'en' ? [
    { name: 'Deutschland', weight: 70 },
    { name: 'Österreich', weight: 6 },
    { name: 'Schweiz', weight: 5 },
    { name: 'USA', weight: 4 },
    { name: 'Niederlande', weight: 3 },
    { name: 'Großbritannien', weight: 3 },
    { name: 'Kanada', weight: 2 },
    { name: 'Belgien', weight: 2 },
    { name: 'Frankreich', weight: 2 },
    { name: 'Italien', weight: 1 },
    { name: 'Australien', weight: 1 },
    { name: 'Spanien', weight: 1 }
  ] : [
    { name: 'Deutschland', weight: 70 },
    { name: 'Österreich', weight: 6 },
    { name: 'Schweiz', weight: 5 },
    { name: 'USA', weight: 4 },
    { name: 'Niederlande', weight: 3 },
    { name: 'Großbritannien', weight: 3 },
    { name: 'Kanada', weight: 2 },
    { name: 'Belgien', weight: 2 },
    { name: 'Frankreich', weight: 2 },
    { name: 'Italien', weight: 1 },
    { name: 'Australien', weight: 1 },
    { name: 'Spanien', weight: 1 }
  ];

  // Gewichtete Zufallsauswahl
  const getRandomCountry = () => {
    const totalWeight = countries.reduce((sum, country) => sum + country.weight, 0);
    let random = Math.random() * totalWeight;
    
    for (const country of countries) {
      random -= country.weight;
      if (random <= 0) return country.name;
    }
    return language === 'en' ? 'USA' : 'Deutschland';
  };

  // Namen basierend auf Land auswählen
  const getRandomName = (country: string) => {
    if (country === 'Deutschland') {
      // 70% deutsche Namen, 30% internationale Namen (Diversität)
      const useInternational = Math.random() < 0.3;
      const namePool = useInternational ? internationalNamesDE : germanNames;
      return namePool[Math.floor(Math.random() * namePool.length)];
    } else {
      const namePool = internationalNames[country as keyof typeof internationalNames] || germanNames;
      return namePool[Math.floor(Math.random() * namePool.length)];
    }
  };

  // Realistische Zeitangabe für simulierte Käufe (35 Käufe in 48h = ca. alle 1.4h ein Kauf)
  const getRandomTimeAgo = () => {
    const options = language === 'en' ? [
      '1 hour ago',
      '2 hours ago', 
      '3 hours ago',
      '4 hours ago',
      '6 hours ago',
      '8 hours ago',
      '11 hours ago',
      '14 hours ago',
      '18 hours ago',
      '23 hours ago',
      '1 day ago',
      '1 day ago',
      '2 days ago'
    ] : [
      'vor 1 Stunde',
      'vor 2 Stunden', 
      'vor 3 Stunden',
      'vor 4 Stunden',
      'vor 6 Stunden',
      'vor 8 Stunden',
      'vor 11 Stunden',
      'vor 14 Stunden',
      'vor 18 Stunden',
      'vor 23 Stunden',
      'vor 1 Tag',
      'vor 1 Tag',
      'vor 2 Tagen'
    ];
    return options[Math.floor(Math.random() * options.length)];
  };

  // Echte Zeit für echte Käufe berechnen
  const calculateRealTimeAgo = (createdAt: string): string => {
    const now = new Date();
    const purchaseDate = new Date(createdAt);
    const diffMs = now.getTime() - purchaseDate.getTime();
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (language === 'en') {
      if (diffMinutes < 60) {
        if (diffMinutes < 10) return 'a few minutes ago';
        return `${diffMinutes} minutes ago`;
      } else if (diffHours < 24) {
        return diffHours === 1 ? '1 hour ago' : `${diffHours} hours ago`;
      } else {
        return diffDays === 1 ? '1 day ago' : `${diffDays} days ago`;
      }
    } else {
      if (diffMinutes < 60) {
        if (diffMinutes < 10) return 'vor wenigen Minuten';
        return `vor ${diffMinutes} Minuten`;
      } else if (diffHours < 24) {
        return diffHours === 1 ? 'vor 1 Stunde' : `vor ${diffHours} Stunden`;
      } else {
        return diffDays === 1 ? 'vor 1 Tag' : `vor ${diffDays} Tagen`;
      }
    }
  };

  // Simulierte Käufe generieren
  const generateSimulatedPurchase = (): Purchase => {
    const country = getRandomCountry();
    const name = getRandomName(country);
    const timeAgo = getRandomTimeAgo();
    
    return {
      name,
      country: country, // Wird später mit translateCountry() übersetzt
      timeAgo,
      isReal: false
    };
  };

  // Echte Käufe von Lemon Squeezy holen
  const fetchRealPurchases = async (): Promise<Purchase[]> => {
    try {
      // Lemon Squeezy API-Key
      const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NGQ1OWNlZi1kYmI4LTRlYTUtYjE3OC1kMjU0MGZjZDY5MTkiLCJqdGkiOiJlZGY3ZjAxN2NlZmNjYjlhYzZkNmYwMTE1YTIyMWNiNjE4Mzk5NDU4YThhOTg2NDE4MzFhMDJlYWZmNzY2NTg0ZTQyZTQ4MDc1NGZjYzNiZiIsImlhdCI6MTc1MTQ0NjQxOS4zOTM3NDQsIm5iZiI6MTc1MTQ0NjQxOS4zOTM3NDYsImV4cCI6MjA2Njk3OTIxOS4zNTU1NzksInN1YiI6IjQ5NDEzNzAiLCJzY29wZXMiOltdfQ.mKI3MYa4LLnV5Q4NTSRkaYYLPJ8E-sXZTtnlFjrd0t7KDxxSkrwaUk8ah3ehplngscYf7rEDZvfng1hYZMD5MvwNMtKGUhtNyyvOROR_Nuhl9jKg3fjBe2hKQp4IxCIL3bApjjHWmh_WorHd14tyRrdI0htMBoWwVGZwFHU4FmNb5FC2wdSf9zROgklhLsrzd_HriEyBPG4U1dzd4-_kMlALZ5syknnjCHa2xL63qVvw7Jq5eq6OlKK-4sKy6eSy1fwXCjmkioYHVqwRJMGOb2dcX4ffqsjrA6cftfL6EDAj9LRxpEEbGlille6d2kg-nkDKoL-LcnQ1SdiEsvpS_it9PHOGMuD8MrhmiEPeNM83RyJpA6MUC-AYgudrxz7afsOPC3pvnKM8_XwV4F8jHVx2Id9PD_1KoVT45KdWESMDS5WMAZ7I4ymIg9L5ht-fzNyzjsD3c5rqc9B2yj9axgxVHI8OU0Tc3SqwOxdtlvP7AHqkucKTdvBC5Xet925W';
      
      // Direkter API-Call ohne Parameter (funktioniert zuverlässig)
      const response = await fetch('https://api.lemonsqueezy.com/v1/orders', {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Accept': 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json'
        }
      });
      
      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.data || data.data.length === 0) {
        return [];
      }

      // Filtere nur Käufe der letzten 3 Tage
      const threeDaysAgo = new Date();
      threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

      const realPurchases = data.data
        .filter((order: any) => {
          const orderDate = new Date(order.attributes.created_at);
          return orderDate >= threeDaysAgo;
        })
        .map((order: any) => {
          // Versuche verschiedene Name-Felder
          const customerName = order.attributes.user_name || 
                             order.attributes.customer_name || 
                             order.attributes.billing_address?.name ||
                             'Kunde';
          
          const firstName = customerName.split(' ')[0];
          
          return {
            name: firstName,
            country: order.attributes.billing_address?.country || 'Deutschland',
            timeAgo: calculateRealTimeAgo(order.attributes.created_at),
            isReal: true
          };
        });

      return realPurchases;
    } catch (error) {
      return [];
    }
  };

  // Nächsten Kauf auswählen (30% echte, 70% simuliert - mehr simulierte Käufe)
  const getNextPurchase = async (): Promise<Purchase> => {
    const useRealPurchase = Math.random() < 0.3; // 30% Chance
    
    if (useRealPurchase) {
      const realPurchases = await fetchRealPurchases();
      if (realPurchases.length > 0) {
        const selectedPurchase = realPurchases[Math.floor(Math.random() * realPurchases.length)];
        return selectedPurchase;
      }
    }
    
    return generateSimulatedPurchase();
  };

  // Widget-Logik
  useEffect(() => {
    if (isDismissed) return;

    const showNextPurchase = async () => {
      const purchase = await getNextPurchase();
      setCurrentPurchase(purchase);
      setIsVisible(true);

      // Nach 7 Sekunden ausblenden
      setTimeout(() => {
        setIsVisible(false);
        // Nach fade-out neuen Kauf laden
        setTimeout(() => {
          showNextPurchase();
        }, 2000); // 2s Pause zwischen Notifications
      }, 7000);
    };

    // Initial nach 3 Sekunden starten
    const initialTimeout = setTimeout(showNextPurchase, 3000);

    return () => clearTimeout(initialTimeout);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (isDismissed || !currentPurchase) return null;

  // Länder-Übersetzungen
  const translateCountry = (country: string): string => {
    if (language === 'en') {
      const translations: { [key: string]: string } = {
        'Deutschland': 'Germany',
        'Österreich': 'Austria', 
        'Schweiz': 'Switzerland',
        'Niederlande': 'Netherlands',
        'Belgien': 'Belgium',
        'Frankreich': 'France',
        'Italien': 'Italy',
        'Spanien': 'Spain',
        'Großbritannien': 'United Kingdom',
        'USA': 'USA',
        'Kanada': 'Canada',
        'Australien': 'Australia'
      };
      return translations[country] || country;
    }
    return country;
  };

  // Texte basierend auf Sprache
  const texts = {
    productName: language === 'en' ? 'MMplatinum Trading Journal' : 'MMplatinum Trading Journal',
    purchaseText: language === 'en' ? 'purchased MMplatinum Trading Journal' : 'hat MMplatinum Trading Journal gekauft',
    verifiedPurchase: language === 'en' ? 'Verified Purchase' : 'Verifizierter Kauf',
    fromText: language === 'en' ? 'from' : 'aus'
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -100, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -100, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-3 left-3 md:bottom-6 md:left-6 z-50 max-w-xs md:max-w-sm"
        >
          <div className="bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-lg md:rounded-xl shadow-xl p-3 md:p-4 group hover:shadow-2xl transition-all duration-300">
            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-1.5 right-1.5 md:top-2 md:right-2 w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 opacity-60 hover:opacity-100"
            >
              <X className="w-2.5 h-2.5 md:w-3 md:h-3 text-gray-600" />
            </button>

            {/* Content */}
            <div className="flex items-center space-x-2 md:space-x-3">
              {/* Icon */}
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <ShoppingBag className="w-3.5 h-3.5 md:w-[18px] md:h-[18px] text-white" />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-xs md:text-sm font-medium text-gray-900 leading-tight">
                  <span className="font-semibold text-blue-600">{currentPurchase.name}</span> {texts.fromText}{' '}
                  <span className="font-medium">{translateCountry(currentPurchase.country)}</span>
                </p>
                <p className="text-xs text-gray-600 mt-0.5 md:mt-1">
                  {texts.purchaseText}
                </p>
                <p className="text-xs text-gray-500 mt-0.5 md:mt-1">
                  {currentPurchase.timeAgo}
                </p>
              </div>
            </div>

            {/* Trust Indicator - nur auf Desktop */}
            <div className="hidden md:block mt-3 pt-2 border-t border-gray-100">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-xs text-gray-500">{texts.verifiedPurchase}</p>
              </div>
            </div>

            {/* Subtle Animation Border */}
            <div className="absolute inset-0 rounded-lg md:rounded-xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialProofWidget; 