import React from 'react';
import { motion } from 'framer-motion';
import { useKeenSlider } from 'keen-slider/react';
import { Check } from 'lucide-react';
import 'keen-slider/keen-slider.min.css';

interface Props { 
  language?: 'de' | 'en'; 
}

const InstrumentsSlider = ({ language = 'de' }: Props) => {
  const instruments = language === 'de' 
    ? ['Aktien', 'Forex', 'Krypto', 'CFD', 'Optionen', 'Futures']
    : ['Stocks', 'Forex', 'Crypto', 'CFDs', 'Options', 'Futures'];

  const animation = { 
    duration: window.innerWidth < 768 ? 4000 : 6000, 
    easing: (t: number) => t 
  };

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: 'performance',
    drag: false,
    slides: { perView: 'auto', spacing: 32 },
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

  // Duplicate instruments for seamless loop
  const duplicatedInstruments = [...instruments, ...instruments, ...instruments];

  return (
    <section className="py-8 md:py-12 relative overflow-hidden bg-gradient-to-r from-blue-50/20 via-white to-purple-50/20">
      <div className="relative">
        {/* Slider */}
        <div ref={sliderRef} className="keen-slider overflow-hidden">
          {duplicatedInstruments.map((instrument, idx) => (
            <div key={idx} className="keen-slider__slide" style={{ flex: '0 0 auto', width: 'auto' }}>
              <div className="flex items-center space-x-2 md:space-x-3 px-2 md:px-8">
                <Check size={16} className="text-green-500 flex-shrink-0 md:w-5 md:h-5" />
                <span className="text-gray-800 font-medium text-sm md:text-base whitespace-nowrap">
                  {instrument}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstrumentsSlider; 