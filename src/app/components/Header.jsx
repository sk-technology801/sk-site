"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, TrendingUp, Target, Users, Zap, Shield, Globe, Cpu, Database, Network, Lock, Eye, Layers } from 'lucide-react';

const NavLink = ({ href, children, className, ...props }) => (
  <a href={href} className={className} {...props}>
    {children}
  </a>
);

const BusinessStrategiesHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [time, setTime] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [glitchActive, setGlitchActive] = useState(false);
  const canvasRef = useRef(null);
  const headerRef = useRef(null);

  // Matrix-style background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const chars = '01█▓▒░ABCDEF0123456789$@#%&*';
    const charArray = chars.split('');
    const fontSize = 12;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00ff88';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillStyle = i % 3 === 0 ? '#ff0080' : i % 2 === 0 ? '#00ffff' : '#00ff88';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 100);
    return () => clearInterval(interval);
  }, []);

  // Time animation for dynamic effects
  useEffect(() => {
    const timer = setInterval(() => setTime(prev => prev + 0.1), 50);
    return () => clearInterval(timer);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Glitch effect trigger
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    }, 5000);
    return () => clearInterval(glitchInterval);
  }, []);

  const strategiesData = [
    { 
      name: 'Quantum Computing Strategy', 
      href: '/quantum-strategy',
      icon: <Cpu className="w-6 h-6" />,
      desc: 'Revolutionary quantum algorithms for business optimization',
      color: 'from-purple-600 to-blue-600'
    },
    { 
      name: 'Neural Network Analysis', 
      href: '/neural-analysis',
      icon: <Network className="w-6 h-6" />,
      desc: 'AI-powered predictive business intelligence',
      color: 'from-green-500 to-teal-600'
    },
    { 
      name: 'Blockchain Integration', 
      href: '/blockchain',
      icon: <Lock className="w-6 h-6" />,
      desc: 'Decentralized business model transformation',
      color: 'from-orange-500 to-red-600'
    },
    { 
      name: 'Metaverse Commerce', 
      href: '/metaverse',
      icon: <Eye className="w-6 h-6" />,
      desc: 'Virtual reality business environments',
      color: 'from-pink-500 to-purple-600'
    }
  ];

  const servicesData = [
    { 
      name: 'Data Architecture', 
      href: '/data-architecture',
      icon: <Database className="w-6 h-6" />,
      desc: 'Advanced data pipeline optimization',
      color: 'from-blue-600 to-indigo-700'
    },
    { 
      name: 'System Integration', 
      href: '/system-integration',
      icon: <Layers className="w-6 h-6" />,
      desc: 'Enterprise-level system unification',
      color: 'from-emerald-600 to-teal-700'
    },
    { 
      name: 'Performance Engineering', 
      href: '/performance',
      icon: <Zap className="w-6 h-6" />,
      desc: 'Ultra-high performance optimization',
      color: 'from-yellow-500 to-orange-600'
    },
    { 
      name: 'Security Framework', 
      href: '/security',
      icon: <Shield className="w-6 h-6" />,
      desc: 'Military-grade security protocols',
      color: 'from-red-600 to-rose-700'
    }
  ];

  const HyperDropdown = ({ items, isOpen, title }) => (
    <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-8 transition-all duration-700 ease-out ${
      isOpen 
        ? 'opacity-100 translate-y-0 visible scale-100 rotate-0' 
        : 'opacity-0 -translate-y-12 invisible scale-75 -rotate-12'
    }`}>
      <div className="relative w-[500px] bg-black/98 backdrop-blur-3xl rounded-3xl shadow-2xl border-2 border-transparent p-8">
        {/* Animated holographic border */}
        <div 
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-0.5"
          style={{
            background: `conic-gradient(from ${time * 50}deg, #00ffff, #ff00ff, #ffff00, #00ff00, #00ffff)`,
          }}
        >
          <div className="w-full h-full bg-black/98 rounded-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse"></div>
            <h3 className="text-2xl font-black text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text tracking-wider">
              {title}
            </h3>
            <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full animate-pulse"></div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {items.map((item, index) => (
              <NavLink
                key={index}
                href={item.href}
                className={`group relative p-6 rounded-2xl bg-gradient-to-r ${item.color} bg-opacity-10 hover:bg-opacity-20 transition-all duration-500 border border-gray-700/50 hover:border-transparent hover:scale-105 hover:rotate-1`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} text-white shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-12`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 text-lg">
                        {item.name}
                      </h4>
                    </div>
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Scan line effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12`}></div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative">
      {/* Matrix background canvas */}
      <canvas
        ref={canvasRef}
        width={1920}
        height={200}
        className="fixed top-0 left-0 w-full h-48 pointer-events-none z-0 opacity-20"
      />

      {/* Floating geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-spin"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${10 + Math.random() * 20}s`,
              animationDirection: i % 2 ? 'reverse' : 'normal',
            }}
          >
            <div 
              className={`w-${4 + (i % 4)} h-${4 + (i % 4)} bg-gradient-to-r ${
                i % 4 === 0 ? 'from-cyan-500/20 to-purple-500/20' :
                i % 4 === 1 ? 'from-purple-500/20 to-pink-500/20' :
                i % 4 === 2 ? 'from-green-500/20 to-blue-500/20' :
                'from-orange-500/20 to-red-500/20'
              } ${i % 3 === 0 ? 'rounded-full' : 'rounded-lg'} blur-sm`}
            />
          </div>
        ))}
      </div>

      <header 
        ref={headerRef}
        className={`fixed w-full z-50 transition-all duration-1000 ${glitchActive ? 'animate-pulse' : ''} ${
          scrolled 
            ? 'bg-black/95 backdrop-blur-3xl shadow-2xl border-b-2 border-cyan-400/30' 
            : 'bg-gradient-to-b from-black/98 via-gray-900/95 to-black/90 backdrop-blur-2xl'
        }`}
        style={{
          boxShadow: scrolled ? `0 0 50px rgba(0, 255, 255, 0.2)` : 'none',
          transform: glitchActive ? `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)` : 'none'
        }}
      >
        {/* Dynamic laser grid background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 98%, rgba(0, 255, 255, 0.5) 99%, transparent 100%),
              linear-gradient(0deg, transparent 98%, rgba(255, 0, 255, 0.5) 99%, transparent 100%)
            `,
            backgroundSize: `50px 50px`,
            backgroundPosition: `${time * 2}px ${time}px`
          }}
        />

        {/* Holographic scan line */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              rgba(0, 255, 255, 0.1) ${(Math.sin(time) * 50) + 50}%, 
              transparent 100%)`
          }}
        />

        <nav className="relative max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between h-28">
            
            {/* Futuristic Logo */}
            <div className="flex items-center space-x-8">
              <div className="relative group cursor-pointer">
                {/* Outer rotating rings */}
                <div 
                  className="absolute inset-0 w-20 h-20 rounded-full border-2 border-cyan-400/50 animate-spin"
                  style={{ animationDuration: '20s' }}
                />
                <div 
                  className="absolute inset-1 w-18 h-18 rounded-full border border-purple-500/50 animate-spin"
                  style={{ animationDuration: '15s', animationDirection: 'reverse' }}
                />
                <div 
                  className="absolute inset-2 w-16 h-16 rounded-full border border-pink-500/50 animate-spin"
                  style={{ animationDuration: '10s' }}
                />
                
                {/* Core logo */}
                <div className="relative w-20 h-20 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-full p-1 group-hover:scale-110 transition-all duration-500">
                  <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                    <TrendingUp className="w-10 h-10 text-cyan-400 animate-pulse" />
                  </div>
                </div>

                {/* Pulsing aura */}
                <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse" />
              </div>
              
              <div className="hidden md:block">
                <div className={`transition-all duration-300 ${glitchActive ? 'animate-bounce' : ''}`}>
                  <h1 className="text-4xl font-black tracking-tight">
                    <span className="text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text">
                      ΨENTERPRISE
                    </span>
                  </h1>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-pulse" />
                    <p className="text-sm text-gray-300 font-bold tracking-[0.4em] font-mono">
                      [QUANTUM_STRATEGIES_DIVISION]
                    </p>
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-16">
              {[
                { name: 'HOME', href: '/' },
                { name: 'STRATEGIES', href: '/strategies', dropdown: 'strategies' },
                { name: 'SERVICES', href: '/services', dropdown: 'services' },
                { name: 'RESEARCH', href: '/research' },
                { name: 'CONTACT', href: '/contact' }
              ].map((item, index) => (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.dropdown)}
                  onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <button className="group relative text-white hover:text-cyan-300 font-black text-xl transition-all duration-700 cursor-pointer font-mono tracking-wider">
                      <span className="relative z-10 flex items-center space-x-2">
                        <span>{item.name}</span>
                        <ChevronDown className={`w-6 h-6 transition-all duration-700 ${
                          activeDropdown === item.dropdown ? 'rotate-180 text-cyan-400' : ''
                        }`} />
                      </span>
                      
                      {/* Holographic underline */}
                      <div className="absolute -bottom-3 left-0 w-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-700 rounded-full" 
                           style={{ boxShadow: '0 0 10px currentColor' }} />
                      
                      {/* Background glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-500 -z-10" />
                    </button>
                  ) : (
                    <NavLink 
                      href={item.href}
                      className="group relative text-white hover:text-cyan-300 font-black text-xl transition-all duration-700 cursor-pointer font-mono tracking-wider"
                    >
                      <span className="relative z-10">{item.name}</span>
                      
                      {/* Holographic underline */}
                      <div className="absolute -bottom-3 left-0 w-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-700 rounded-full" 
                           style={{ boxShadow: '0 0 10px currentColor' }} />
                      
                      {/* Background glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-500 -z-10" />
                    </NavLink>
                  )}
                  
                  {/* Mega Dropdowns */}
                  {item.dropdown === 'strategies' && (
                    <HyperDropdown items={strategiesData} isOpen={activeDropdown === 'strategies'} title="QUANTUM STRATEGIES" />
                  )}
                  {item.dropdown === 'services' && (
                    <HyperDropdown items={servicesData} isOpen={activeDropdown === 'services'} title="NEURAL SERVICES" />
                  )}
                </div>
              ))}
            </div>

            {/* Revolutionary CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              <button className="group relative px-10 py-5 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-2xl font-black text-white text-xl tracking-widest transition-all duration-700 hover:scale-110 hover:rotate-1 overflow-hidden">
                {/* Animated border */}
                <div 
                  className="absolute inset-0 rounded-2xl p-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-spin"
                  style={{ animationDuration: '3s' }}
                >
                  <div className="w-full h-full bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-xl" />
                </div>
                
                {/* Button content */}
                <span className="relative z-10 flex items-center space-x-3">
                  <span>INITIATE</span>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                </span>
                
                {/* Scan effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative p-4 rounded-2xl bg-gradient-to-r from-cyan-900/70 to-purple-900/70 backdrop-blur-xl border-2 border-cyan-400/50 text-white hover:border-purple-400/70 transition-all duration-500 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {isMenuOpen ? <X className="w-8 h-8 relative z-10" /> : <Menu className="w-8 h-8 relative z-10" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-700 ease-out ${
            isMenuOpen 
              ? 'max-h-screen opacity-100 translate-y-0' 
              : 'max-h-0 opacity-0 -translate-y-8 overflow-hidden'
          }`}>
            <div className="py-12 space-y-8 border-t-2 border-cyan-400/30 bg-gradient-to-b from-black/98 to-gray-900/98 backdrop-blur-xl rounded-b-3xl">
              {['HOME', 'STRATEGIES', 'SERVICES', 'RESEARCH', 'CONTACT'].map((item, index) => (
                <NavLink 
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="group block px-8 py-6 text-white hover:text-cyan-300 font-black text-2xl transition-all duration-500 relative overflow-hidden font-mono tracking-wider"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-2xl" />
                  <span className="relative z-10">{item}</span>
                  
                  {/* Mobile scan effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </NavLink>
              ))}

              <button className="w-full mx-8 mt-12 px-10 py-6 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-2xl font-black text-white text-2xl tracking-widest transition-all duration-700 hover:scale-105 relative overflow-hidden">
                <span className="relative z-10">INITIATE</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default BusinessStrategiesHeader;