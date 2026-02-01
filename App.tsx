import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './constants';
import { SlideRenderer } from './components/SlideRenderer';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, SLIDES.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
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

  const currentSlide = SLIDES[currentSlideIndex];
  const progress = ((currentSlideIndex + 1) / SLIDES.length) * 100;

  return (
    <div className="h-screen w-screen bg-[#0a192f] text-slate-200 overflow-hidden flex flex-col font-sans">
      
      {/* Top Bar */}
      <div className="h-12 border-b border-white/5 flex items-center justify-between px-6 bg-navy-900/50 backdrop-blur-sm z-50">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-4 text-xs font-mono text-slate-500">FLOWMIND_AGENCY_PROP_V2.0</span>
        </div>
        <button onClick={toggleFullScreen} className="text-slate-400 hover:text-white transition-colors">
          {isFullScreen ? <X size={18} /> : <Maximize2 size={18} />}
        </button>
      </div>

      {/* Main Slide Area */}
      <div className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-800 via-navy-900 to-black pointer-events-none" />
        
        {/* Render Slide */}
        <div key={currentSlide.id} className="h-full w-full max-w-7xl mx-auto relative z-10">
           <SlideRenderer data={currentSlide} />
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="h-16 border-t border-white/5 bg-navy-900/80 backdrop-blur-md flex items-center justify-between px-6 md:px-12 z-50">
        <div className="text-sm text-slate-500 hidden md:block w-32">
          {currentSlideIndex + 1} / {SLIDES.length}
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={prevSlide}
            disabled={currentSlideIndex === 0}
            className={`p-3 rounded-full border border-slate-700 transition-all ${currentSlideIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gold-500 hover:text-navy-900 hover:border-gold-500'}`}
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={nextSlide}
            disabled={currentSlideIndex === SLIDES.length - 1}
            className={`p-3 rounded-full border border-slate-700 transition-all ${currentSlideIndex === SLIDES.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gold-500 hover:text-navy-900 hover:border-gold-500'}`}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="w-32 hidden md:block">
           <div className="text-xs text-right text-gold-500 mb-1">PROPOSAL STATUS: DRAFT</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-navy-900 w-full">
        <div 
          className="h-full bg-gold-500 transition-all duration-500 ease-out" 
          style={{ width: `${progress}%` }} 
        />
      </div>
    </div>
  );
};

export default App;
