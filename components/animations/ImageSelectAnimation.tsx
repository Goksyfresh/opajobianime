'use client';
import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import photo1 from '../../public/images/poster1.jpg'
import photo2 from '../../public/images/poster2.jpg'
import photo3 from '../../public/images/poster3.jpg'
import photo4 from '../../public/images/poster1.jpg'
import photo5 from '../../public/images/poster5.jpg'
import photo6 from '../../public/images/poster6.jpg'
import photo7 from '../../public/images/poster7.jpg'
import photo8 from '../../public/images/poster8.jpg'
import photo9 from '../../public/images/poster9.jpg'
import photo10 from '../../public/images/poster10.jpg'
import photo11 from '../../public/images/poster11.jpg'
import photo12 from '../../public/images/poster12.jpg'
import photo13 from '../../public/images/poster13.jpg'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);



export default function ImageSelect() {
  const [time, setTime] = useState(new Date());

  const [active, setActive] = useState<number | null>(null)
  

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

   
const onHover = (id: number) => {
  setActive(id)
}

const onHoverOut = () => {
  setActive(null)
}
  const formatTime = (date:any) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: 'Africa/Lagos'
    }).toUpperCase();
  };
const containerRef = useRef(null)
  const archives = [
    { id: 1, img: photo1, color: '#e74c3c', alt: 'Fashion Archive 1' },
    { id: 2, img: photo2, color: '#e67e22', alt: 'Fashion Archive 2' },
    { id: 3, img: photo3, color: '#3498db', alt: 'Fashion Archive 3' },
    { id: 4, img: photo10, color: '#e74c3c', alt: 'Fashion Archive 4' },
    { id: 5, img: photo5, color: '#2c3e50', alt: 'Fashion Archive 5' },
    { id: 6, img: photo6, color: '#e74c3c', alt: 'Fashion Archive 6' },
    { id: 7, img: photo7, color: '#00bcd4', alt: 'Fashion Archive 7' },
    { id: 8, img: photo8, color: '#ff9800', alt: 'Fashion Archive 8' },
    { id: 9, img: photo9, color: '#4caf50', alt: 'Fashion Archive 9' },
    { id: 10, img: photo10, color: '#ffd700', alt: 'Fashion Archive 10' },
    { id: 11, img: photo11, color: '#8b4513', alt: 'Fashion Archive 11' },
    { id: 12, img: photo12, color: '#1a1a2e', alt: 'Fashion Archive 12' },
    { id: 13, img: photo13, color: '#0f3460', alt: 'Fashion Archive 13' },
    { id: 14, img:photo10, color: '#16213e', alt: 'Fashion Archive 14' },
    { id: 15, img: photo5, color: '#c0392b', alt: 'Fashion Archive 15' },
  ];
const activeImage = archives.find(item => item.id === active)?.img
useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        setActive(prev => {
          if (prev === null) return 1;
          return prev > 1 ? prev - 1 : archives.length;
        });
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        setActive(prev => {
          if (prev === null) return 1;
          return prev < archives.length ? prev + 1 : 1;
        });
      } else if (e.key === 'Escape') {
        setActive(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [archives.length]);
  useGSAP(() => {
    if (active !== null && containerRef.current) {
      const container = containerRef.current;
      const activeIndex = active - 1;
      const itemHeight = 96 + 4; // h-24 (96px) + gap-1 (4px)
      const scrollPosition = activeIndex * itemHeight;
      const containerHeight = container.clientHeight;
      const currentScroll = Math.abs(parseFloat(getComputedStyle(container).transform.split(',')[5]) || 0);
      
      // Calculate if item is out of view
      if (scrollPosition < currentScroll) {
        // Scroll up to show item at top
        gsap.to(container, {
          y: -scrollPosition,
          duration: 0.3,
          ease: 'power2.out'
        });
      } else if (scrollPosition + itemHeight > currentScroll + containerHeight) {
        // Scroll down to show item at bottom
        gsap.to(container, {
          y: -(scrollPosition - containerHeight + itemHeight),
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    }
  }, [active]);
useGSAP(()=>{
  gsap.fromTo('.activate',{
    scale:0.93,
    opacity:0.5
  },{
    opacity:1,
    scale:1,
    duration:0.2,
    ease:'power2.inOut'
  })

    // const timeline = gsap.timeline({
    //     scrollTrigger:{
    //         trigger: '.shake',
    //         start:'top top',
    //         end:'1000px',
    //         pin:true,
    //         scrub:1,
    //         pinSpacing:true,
    //         markers:true,
            
    //     }
    // })
},[activeImage])
// useGSAP(()=>{
//      ScrollTrigger.create({
//                 trigger: "main",
//                 start: "top-=200 top",
//                 end: `+=${window.innerHeight * 2}`,
//                 markers:true,
//                 pin: true,
//                 pinSpacing: true,
//                 scrub: 1,
//                 onUpdate: (self) => {
//                      const progress = self.progress
//                      const container = containerRef.current
                     
                    
//                     if (container) {
//  const maxScroll = container.scrollHeight - container.clientHeight
//                         const scrollAmount = progress * maxScroll

//                         gsap.to(container, {
//                             y: -scrollAmount,
//                          opacity:1
                        
//                         })
//                     }
        
//                  }
//             })
// },[])
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
     <div className="shake min-h-screen overflow-y-hidden font-mono text-sm"  style={{
        backgroundColor: 'var(--background-color)',
        color: 'var(--text-color)'
      }}>
      {/* Header */}
      <header className="border-b border-black px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg text-black opacity-0 font-bold">OPAJOBI©</h1>
            <p className="text-xs">{formatTime(time)} GMT+1</p>
          </div>
          
          <nav className="flex gap-8 text-xs">
            <Link href="/work" className="hover:opacity-50">WORK(10)</Link>
            <Link href="/about" className="hover:opacity-50 opacity-0">ABOUT</Link>
            <Link href="/archive" className="hover:opacity-50 opacity-0">ARCHIVE</Link>
            <Link href="/vibe-check" className="hover:opacity-50 opacity-0">VIBE-CHECK</Link>
            <div className='opacity-0'>
              <div>CONTACT</div>
              <Link href="mailto:opajobioyegokeoyebola@gmail.com" className="hover:opacity-50">OPAJOBI.COM</Link>
            </div>
            <div>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 opacity-0">LINKEDIN</Link>
              <Link href="https://are.na" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 opacity-0">ARE.NA</Link>
            </div>
            <div className="flex items-center gap-2">
              <div>SOUND [OFF]</div>
            </div>
          </nav>

          {/* Barcode */}
          <div className="flex flex-col opacity-0 items-center">
            <svg width="50" height="60" viewBox="0 0 50 60">
              {[2, 6, 9, 11, 15, 18, 22, 25, 28, 32, 35, 38, 42, 46].map((x, i) => (
                <rect key={i} x={x} y="0" width={i % 3 === 0 ? "3" : "2"} height="50" fill="black" />
              ))}
            </svg>
            <span className="text-xs mt-1 rotate-90 origin-center">CREDIT</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-14 overflow-hidden">
        {/* Archive Section */}
        <div className='main'>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-base"> ARCHIVE [14]</h2>
 
              {active && activeImage &&(
          <div className='activate fixed top-1/2 left-1/2 -translate-x-1/2 pointer-events-none -translate-y-1/2 '>
      <Image
        src={activeImage}
                  alt='photo1'
                  className="object-cover w-90 h-110 mix-blend-multiply"
                  style={{zIndex:9999}}
      />

      </div>
      )}
            <div ref={containerRef} className="flex flex-col h-[50vh] gap-1 pb-4 "
               >
            {archives.map((item) => (
              <div
                key={item.id}
               
                className="flex-shrink-0 w-20 h-24 rounded overflow-hidden cursor-pointer hover:scale-105 transition-transform relative"
       
              >
                <Image
                  src={item.img}
                  alt={item.alt}
                  onClick={()=>onHover(item.id)}
                  onMouseOver={()=>onHover(item.id)}
                 onMouseLeave={onHoverOut}
                  fill
                  sizes="64px"
                  className={active === item.id? "border-2 border-amber-500 p-2": "object-cover mix-blend-multiply"}
                />
                 {active !== null && active !== item.id && (
                  <div className="absolute inset-0 bg-[var(--background-color)]/70 transition-opacity duration-300" />
                )}
              </div>
            ))}
          </div>
          </div>
          
         
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 border-t border-black bg-white px-6 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">OPAJOBI©</h2>
          
          <nav className="flex gap-8 opacity-0 text-xs">
            <Link href="mailto:opajobioyegokeoyebola@gmail.com" className="hover:opacity-50">HELLO@OPAJOBI.COM</Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-50">LINKEDIN</Link>
            <Link href="https://are.na" target="_blank" rel="noopener noreferrer" className="hover:opacity-50">ARE.NA</Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-50">TWITTER</Link>
            <Link href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-50">SPOTIFY</Link>
          </nav>

          <button onClick={scrollToTop} className="flex items-center gap-2 text-xs hover:opacity-50">
            BACK TO TOP
            <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white">
              ↑
            </div>
          </button>
        </div>
      </footer>
   
    
    </div>
  );
}
