import React, { useState, useEffect, useCallback, useRef } from 'react';
import { SLIDES } from './constants';
import { SlideRenderer } from './components/SlideRenderer';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  
  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => {
      const nextIndex = Math.min(prev + 1, SLIDES.length - 1);
      window.location.hash = `slide-${nextIndex + 1}`;
      return nextIndex;
    });
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => {
      const nextIndex = Math.max(prev - 1, 0);
      window.location.hash = `slide-${nextIndex + 1}`;
      return nextIndex;
    });
  }, []);

  // Keyboard Nav
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Hash Sync (Load)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const slideNum = parseInt(hash.replace('#slide-', ''), 10);
      if (!isNaN(slideNum) && slideNum > 0 && slideNum <= SLIDES.length) {
        setCurrentSlideIndex(slideNum - 1);
      }
    }
  }, []);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    }
  };

  const currentSlide = SLIDES[currentSlideIndex];
  const progress = ((currentSlideIndex + 1) / SLIDES.length) * 100;

  return (
    <div 
      className="h-screen w-screen bg-[#0a192f] text-slate-200 overflow-hidden flex flex-col font-sans"
    >
      
      {/* Top Bar */}
      <div className="h-12 border-b border-white/5 flex items-center justify-between px-4 md:px-6 bg-navy-900/50 backdrop-blur-sm z-40 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
          <span className="ml-2 md:ml-4 text-[10px] md:text-xs font-mono text-slate-500 truncate max-w-[150px] md:max-w-none">GRAHA_KOST_V2.0_PROP</span>
        </div>
        <button onClick={toggleFullScreen} className="text-slate-400 hover:text-white transition-colors">
          {isFullScreen ? <X size={18} /> : <Maximize2 size={18} />}
        </button>
      </div>

      {/* Main Slide Area */}
      <div className="flex-1 relative overflow-y-auto overflow-x-hidden scroll-smooth">
        <div className="fixed inset-x-0 top-12 bottom-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-800 via-navy-900 to-black pointer-events-none" />
        
        {/* Render Slide - Padding bottom adjusted for mobile nav bar */}
        <div key={currentSlide.id} className="min-h-full w-full max-w-7xl mx-auto relative z-10 pb-32 md:pb-20">
           <SlideRenderer data={currentSlide} />
        </div>
      </div>

      {/* Navigation Bar (Responsive) */}
      
      {/* Mobile: Full Width Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-[70px] bg-navy-900 border-t border-gold-500/30 flex items-center justify-between px-4 z-50 pb-safe">
        <button 
          onClick={prevSlide}
          disabled={currentSlideIndex === 0}
          className={`w-12 h-12 flex items-center justify-center rounded-lg bg-gold-500 text-navy-900 shadow-lg active:scale-95 transition-all ${currentSlideIndex === 0 ? 'opacity-50 cursor-not-allowed bg-slate-700 text-slate-400' : ''}`}
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>
        
        <span className="text-gold-400 font-mono font-bold text-sm">
          {currentSlideIndex + 1} / {SLIDES.length}
        </span>

        <button 
          onClick={nextSlide}
          disabled={currentSlideIndex === SLIDES.length - 1}
          className={`w-12 h-12 flex items-center justify-center rounded-lg bg-gold-500 text-navy-900 shadow-lg active:scale-95 transition-all ${currentSlideIndex === SLIDES.length - 1 ? 'opacity-50 cursor-not-allowed bg-slate-700 text-slate-400' : ''}`}
           aria-label="Next Slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Desktop: Floating Navigation */}
      <div className="hidden md:flex fixed bottom-6 left-1/2 -translate-x-1/2 items-center gap-4 z-50">
        <button 
          onClick={prevSlide}
          disabled={currentSlideIndex === 0}
          className={`w-12 h-12 flex items-center justify-center rounded-full bg-navy-800 border border-gold-500 text-gold-500 shadow-lg transition-all active:scale-95 ${currentSlideIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gold-500 hover:text-navy-900'}`}
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>
        
        <span className="bg-navy-900/80 px-4 py-2 rounded-full border border-gold-500/30 text-gold-400 font-mono text-sm backdrop-blur-sm">
          Slide {currentSlideIndex + 1} of {SLIDES.length}
        </span>
        
        <button 
          onClick={nextSlide}
          disabled={currentSlideIndex === SLIDES.length - 1}
          className={`w-12 h-12 flex items-center justify-center rounded-full bg-navy-800 border border-gold-500 text-gold-500 shadow-lg transition-all active:scale-95 ${currentSlideIndex === SLIDES.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gold-500 hover:text-navy-900'}`}
           aria-label="Next Slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-navy-900 w-full shrink-0 fixed top-12 left-0 right-0 z-50">
        <div 
          className="h-full bg-gold-500 transition-all duration-500 ease-out" 
          style={{ width: `${progress}%` }} 
        />
      </div>
    </div>
  );
};

export default App;