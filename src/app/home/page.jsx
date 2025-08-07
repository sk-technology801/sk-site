"use client"
import { useState, useEffect } from 'react';
import { 
  Shield, Bell, User, Search, ChevronDown, Home, FileText, Users, Phone, Info, Building, 
  ArrowRight, Clock, MapPin, Globe, Star, CheckCircle, AlertCircle, TrendingUp,
  Calendar, Download, ExternalLink, Mail, Facebook, Twitter, Youtube, Zap, Sparkles,
  CreditCard, Briefcase, GraduationCap, Heart, Car, Hammer, Eye, Menu, X, Rocket,
  Cpu, Database, Wifi, Award, Target, Layers, Moon, Sun
} from 'lucide-react';

export default function StateAgencyHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('popular');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    setMounted(true);
    setCurrentTime(new Date());
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const quickServices = [
    { name: 'Smart Certificates', icon: Sparkles, gradient: 'from-pink-600 to-rose-600', link: '/services/certificate', glow: 'shadow-pink-600/40' },
    { name: 'Instant Tax Pay', icon: Zap, gradient: 'from-emerald-600 to-teal-600', link: '/services/tax-payment', glow: 'shadow-emerald-600/40' },
    { name: 'Digital Business', icon: Rocket, gradient: 'from-purple-600 to-indigo-600', link: '/services/business-license', glow: 'shadow-purple-600/40' },
    { name: 'EduConnect', icon: GraduationCap, gradient: 'from-orange-600 to-red-600', link: '/services/education', glow: 'shadow-orange-600/40' },
    { name: 'HealthHub', icon: Heart, gradient: 'from-red-600 to-pink-600', link: '/services/health', glow: 'shadow-red-600/40' },
    { name: 'AutoRegistry', icon: Car, gradient: 'from-blue-600 to-cyan-600', link: '/services/vehicle', glow: 'shadow-blue-600/40' },
    { name: 'BuildPro', icon: Hammer, gradient: 'from-yellow-600 to-orange-600', link: '/services/permits', glow: 'shadow-yellow-600/40' },
    { name: 'DataVault', icon: Database, gradient: 'from-indigo-600 to-purple-600', link: '/services/records', glow: 'shadow-indigo-600/40' }
  ];

  const featuredServices = [
    {
      title: 'AI Tax Assistant',
      description: 'Revolutionary AI-powered tax filing with real-time guidance and instant calculations',
      icon: Cpu,
      gradient: 'from-cyan-500 to-blue-700',
      status: 'Beta Launch',
      users: '2.1M users',
      link: '/services/ai-tax',
      badge: 'NEW',
      features: ['AI Guidance', 'Auto-fill', 'Real-time Support']
    },
    {
      title: 'Quantum ID System',
      description: 'Next-generation digital identity with biometric security and blockchain verification',
      icon: Shield,
      gradient: 'from-purple-500 to-pink-700',
      status: 'Revolutionary',
      users: '845K users',
      link: '/services/quantum-id',
      badge: 'ADVANCED',
      features: ['Biometric Auth', 'Blockchain', 'Zero-wait']
    },
    {
      title: 'Smart Business Hub',
      description: 'All-in-one business platform with AI compliance checking and automated approvals',
      icon: Zap,
      gradient: 'from-emerald-500 to-teal-700',
      status: 'Featured',
      users: '156K users',
      link: '/services/smart-business',
      badge: 'POPULAR',
      features: ['AI Compliance', 'Auto-approval', '24/7 Support']
    }
  ];

  const departments = [
    { name: 'Digital Revenue', icon: CreditCard, services: 23, color: 'from-green-500 to-blue-600', link: '/departments/revenue' },
    { name: 'Smart Health', icon: Heart, services: 18, color: 'from-red-500 to-pink-600', link: '/departments/health' },
    { name: 'EduTech Hub', icon: GraduationCap, services: 15, color: 'from-orange-500 to-red-600', link: '/departments/education' },
    { name: 'TransportAI', icon: Car, services: 12, color: 'from-blue-500 to-indigo-600', link: '/departments/transport' },
    { name: 'UrbanTech', icon: Building, services: 20, color: 'from-purple-500 to-pink-600', link: '/departments/public-works' },
    { name: 'HousingPro', icon: Home, services: 14, color: 'from-teal-500 to-cyan-600', link: '/departments/housing' }
  ];

  const innovations = [
    {
      title: 'Blockchain Voting System Activated',
      date: '12 hours ago',
      summary: 'Revolutionary secure voting platform now live for municipal elections with quantum encryption.',
      type: 'Innovation',
      icon: Award,
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      title: 'AI Chatbot Serves 1M+ Citizens',
      date: '2 days ago',
      summary: 'Our intelligent assistant has successfully resolved over 1 million citizen queries with 98% satisfaction.',
      type: 'Milestone',
      icon: Cpu,
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Digital Twin City Platform',
      date: '1 week ago',
      summary: 'Launch of immersive 3D city planning platform allowing citizens to visualize urban development.',
      type: 'Launch',
      icon: Layers,
      gradient: 'from-emerald-600 to-teal-600'
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900' : 'bg-gradient-to-br from-gray-100 via-blue-100 to-gray-100'} relative overflow-hidden transition-colors duration-500`} role="main">
      {/* Custom Cursor */}
      <div 
        className="fixed pointer-events-none z-50"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className={`w-8 h-8 rounded-full border-2 ${isDarkMode ? 'border-cyan-400/50 bg-cyan-400/20' : 'border-blue-600/50 bg-blue-600/20'} blur-sm animate-pulse`}></div>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${isDarkMode ? 'bg-purple-600/20' : 'bg-blue-400/20'} rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute top-3/4 right-1/4 w-96 h-96 ${isDarkMode ? 'bg-cyan-600/20' : 'bg-teal-400/20'} rounded-full blur-3xl animate-pulse delay-1000`}></div>
        <div className={`absolute top-1/2 left-1/2 w-96 h-96 ${isDarkMode ? 'bg-pink-600/20' : 'bg-orange-400/20'} rounded-full blur-3xl animate-pulse delay-2000`}></div>
        
        {/* Moving particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 ${isDarkMode ? 'bg-cyan-400' : 'bg-blue-600'} rounded-full animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <header className={`relative z-50 ${isDarkMode ? 'bg-black/30' : 'bg-white/30'} backdrop-blur-xl border-b ${isDarkMode ? 'border-white/10' : 'border-gray-200/20'}`}>
        {/* Futuristic Top Bar */}
        <div className={`bg-gradient-to-r ${isDarkMode ? 'from-cyan-600/20 to-purple-600/20' : 'from-blue-400/20 to-teal-400/20'} backdrop-blur-md ${isDarkMode ? 'text-white' : 'text-gray-900'} py-3 px-4 border-b ${isDarkMode ? 'border-cyan-500/30' : 'border-blue-400/30'}`}>
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-4 sm:gap-0">
            <div className="flex items-center space-x-8">
              <span className="flex items-center space-x-2">
                <div className={`w-2 h-2 ${isDarkMode ? 'bg-green-400' : 'bg-green-600'} rounded-full animate-pulse shadow-lg ${isDarkMode ? 'shadow-green-400/50' : 'shadow-green-600/50'}`}></div>
                <span className={isDarkMode ? 'text-cyan-100' : 'text-blue-800'}>Neural Network: ONLINE</span>
              </span>
              <span className="flex items-center space-x-2">
                <Wifi className={`w-4 h-4 ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
                <span className={isDarkMode ? 'text-cyan-100' : 'text-blue-800'}>Support AI: 24/7 Active</span>
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <span className="flex items-center space-x-2">
                <Globe className={`w-4 h-4 ${isDarkMode ? 'text-purple-400' : 'text-blue-600'}`} />
                <span className={isDarkMode ? 'text-purple-100' : 'text-blue-800'}>Global Access</span>
              </span>
              <span className="flex items-center space-x-2">
                <Clock className={`w-4 h-4 ${isDarkMode ? 'text-pink-400' : 'text-orange-600'}`} />
                <span className={`font-mono text-xs ${isDarkMode ? 'text-pink-100' : 'text-orange-800'}`}>
                  {mounted && currentTime ? currentTime.toLocaleTimeString() : '--:--:--'}
                </span>
              </span>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${isDarkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-200/50 hover:bg-gray-300/50'} transition-colors`}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-blue-600" />}
              </button>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center space-x-4">
                <div className="relative group">
                  <div className={`w-16 h-16 bg-gradient-to-br ${isDarkMode ? 'from-cyan-500 to-purple-700' : 'from-blue-400 to-teal-600'} rounded-2xl flex items-center justify-center shadow-2xl ${isDarkMode ? 'shadow-cyan-500/30' : 'shadow-blue-400/30'} group-hover:shadow-purple-500/30 transition-all duration-500 rotate-3 group-hover:rotate-0`}>
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div className={`absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r ${isDarkMode ? 'from-pink-500 to-red-600' : 'from-orange-500 to-red-500'} rounded-full border-2 border-white flex items-center justify-center animate-bounce`}>
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <h1 className={`text-2xl font-bold bg-gradient-to-r ${isDarkMode ? 'from-cyan-400 via-purple-400 to-pink-400' : 'from-blue-600 via-teal-600 to-blue-400'} bg-clip-text text-transparent`}>
                    NextGov Portal
                  </h1>
                  <p className={isDarkMode ? 'text-cyan-200 text-sm font-medium' : 'text-blue-700 text-sm font-medium'}>Future of Digital Government</p>
                </div>
              </div>

              <nav className="hidden lg:flex items-center space-x-8">
                {['Home', 'Services', 'Departments', 'Innovation', 'Contact'].map((item, index) => (
                  <a
                    key={index}
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-semibold relative group`}
                    aria-label={`${item} page`}
                  >
                    {item}
                    <div className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r ${isDarkMode ? 'from-cyan-400 to-purple-400' : 'from-blue-600 to-teal-600'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                  </a>
                ))}
              </nav>

              <div className="flex items-center space-x-4">
                <button className={`bg-gradient-to-r ${isDarkMode ? 'from-cyan-500 to-purple-600' : 'from-blue-500 to-teal-600'} text-white px-6 py-3 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg ${isDarkMode ? 'shadow-cyan-500/30' : 'shadow-blue-500/30'} hover:shadow-purple-500/30 hover:scale-105`} aria-label="Login to portal">
                  Neural Login
                </button>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`lg:hidden p-3 rounded-xl ${isDarkMode ? 'bg-white/10 hover:bg-white/20 border-white/20' : 'bg-gray-200/50 hover:bg-gray-300/50 border-gray-300/20'} transition-colors border`}
                  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                >
                  {isMenuOpen ? <X className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} /> : <Menu className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`lg:hidden ${isDarkMode ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-xl border-t ${isDarkMode ? 'border-white/10' : 'border-gray-200/20'} px-4 sm:px-6 lg:px-8 py-6`}>
            <nav className="flex flex-col space-y-4">
              {['Home', 'Services', 'Departments', 'Innovation', 'Contact'].map((item, index) => (
                <a
                  key={index}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={`${isDarkMode ? 'text-white hover:text-cyan-400' : 'text-gray-900 hover:text-blue-600'} font-semibold text-lg transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-label={`${item} page`}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${isDarkMode ? 'from-cyan-600/20 to-purple-600/20' : 'from-blue-400/20 to-teal-400/20'} backdrop-blur-md border ${isDarkMode ? 'border-cyan-500/30' : 'border-blue-400/30'} mb-8`}>
              <Rocket className={`w-5 h-5 ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'} mr-2`} />
              <span className={isDarkMode ? 'text-cyan-100 font-medium' : 'text-blue-800 font-medium'}>Powered by Next-Gen AI Technology</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className={`bg-gradient-to-r ${isDarkMode ? 'from-cyan-400 via-purple-400 to-pink-400' : 'from-blue-600 via-teal-600 to-blue-400'} bg-clip-text text-transparent`}>
                Government
              </span>
              <br />
              <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>Reimagined</span>
            </h1>
            
            <p className={`text-xl md:text-2xl mb-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} max-w-4xl mx-auto leading-relaxed`}>
              Experience the future of digital governance with AI-powered services, 
              quantum security, and instantaneous processing. Welcome to tomorrow.
            </p>
            
            {/* Futuristic Search */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-r ${isDarkMode ? 'from-cyan-500 to-purple-600' : 'from-blue-500 to-teal-600'} rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300`}></div>
                <div className={`relative flex items-center ${isDarkMode ? 'bg-black/40' : 'bg-white/40'} backdrop-blur-xl rounded-2xl border ${isDarkMode ? 'border-white/20' : 'border-gray-200/20'} overflow-hidden`}>
                  <div className="flex-1 flex items-center">
                    <Search className={`w-6 h-6 ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'} ml-6`} />
                    <input
                      type="text"
                      placeholder="Ask our AI anything about government services..."
                      className={`w-full px-6 py-6 bg-transparent ${isDarkMode ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'} focus:outline-none text-lg`}
                      aria-label="Search government services"
                    />
                    <Cpu className={`w-6 h-6 ${isDarkMode ? 'text-purple-400' : 'text-teal-600'} mr-6`} />
                  </div>
                  <button className={`bg-gradient-to-r ${isDarkMode ? 'from-cyan-500 to-purple-600' : 'from-blue-500 to-teal-600'} text-white px-8 py-6 hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-semibold`} aria-label="Submit AI search">
                    Ask AI
                  </button>
                </div>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {[
                { number: '3.2M+', label: 'Neural Users', icon: Users, color: isDarkMode ? 'from-cyan-500 to-blue-600' : 'from-blue-500 to-teal-600' },
                { number: '500+', label: 'AI Services', icon: Cpu, color: isDarkMode ? 'from-purple-500 to-pink-600' : 'from-teal-500 to-blue-600' },
                { number: '99.99%', label: 'Quantum Uptime', icon: Zap, color: isDarkMode ? 'from-emerald-500 to-teal-600' : 'from-green-500 to-teal-600' },
                { number: '<1s', label: 'AI Response', icon: Zap, color: isDarkMode ? 'from-orange-500 to-red-600' : 'from-orange-500 to-red-500' }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="group">
                    <div className={`relative p-6 ${isDarkMode ? 'bg-white/5' : 'bg-gray-100/50'} backdrop-blur-md rounded-2xl border ${isDarkMode ? 'border-white/10 hover:border-white/20' : 'border-gray-200/20 hover:border-gray-300/30'} transition-all duration-300 group-hover:scale-105`} role="region" aria-label={stat.label}>
                      <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>{stat.number}</div>
                      <div className={isDarkMode ? 'text-gray-300 font-medium' : 'text-gray-700 font-medium'}>{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services - Reimagined */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold bg-gradient-to-r ${isDarkMode ? 'from-cyan-400 to-purple-400' : 'from-blue-600 to-teal-600'} bg-clip-text text-transparent mb-6`}>
              Quantum Services
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Lightning-fast access to next-generation government services</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {quickServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <a
                  key={index}
                  href={service.link}
                  className={`group relative p-6 ${isDarkMode ? 'bg-white/5' : 'bg-gray-100/50'} backdrop-blur-md rounded-2xl border ${isDarkMode ? 'border-white/10 hover:border-white/20' : 'border-gray-200/20 hover:border-gray-300/30'} transition-all duration-500 hover:scale-110 hover:-translate-y-2`}
                  aria-label={service.name}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl ${isDarkMode ? 'from-cyan-500 to-purple-600' : 'from-blue-500 to-teal-600'}`}></div>
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-2xl ${service.glow} group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`font-bold ${isDarkMode ? 'text-white group-hover:text-cyan-400' : 'text-gray-900 group-hover:text-blue-600'} text-sm text-center transition-colors`}>
                    {service.name}
                  </h3>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Services - Revolutionary Design */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold bg-gradient-to-r ${isDarkMode ? 'from-purple-400 to-pink-400' : 'from-blue-600 to-teal-600'} bg-clip-text text-transparent mb-6`}>
              Revolutionary AI Services
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Experience the cutting-edge of digital governance</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-r opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500 rounded-3xl ${isDarkMode ? 'from-cyan-500 to-purple-600' : 'from-blue-500 to-teal-600'}`}></div>
                  <div className={`relative ${isDarkMode ? 'bg-white/5' : 'bg-gray-100/50'} backdrop-blur-xl rounded-3xl border ${isDarkMode ? 'border-white/10 hover:border-white/20' : 'border-gray-200/20 hover:border-gray-300/30'} overflow-hidden transition-all duration-500 group-hover:scale-105`} role="region" aria-label={service.title}>
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center shadow-2xl`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <span className={`px-4 py-2 rounded-full text-xs font-bold text-white ${
                          service.badge === 'NEW' ? (isDarkMode ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gradient-to-r from-green-400 to-emerald-500') :
                          service.badge === 'ADVANCED' ? (isDarkMode ? 'bg-gradient-to-r from-purple-500 to-pink-600' : 'bg-gradient-to-r from-purple-400 to-pink-500') :
                          (isDarkMode ? 'bg-gradient-to-r from-orange-500 to-red-600' : 'bg-gradient-to-r from-orange-400 to-red-500')
                        }`}>
                          {service.badge}
                        </span>
                      </div>
                      
                      <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>{service.title}</h3>
                      <p className={isDarkMode ? 'text-gray-300 mb-6 leading-relaxed' : 'text-gray-700 mb-6 leading-relaxed'}>{service.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <span key={idx} className={`px-3 py-1 ${isDarkMode ? 'bg-white/10 text-cyan-300 border-cyan-400/30' : 'bg-gray-200/50 text-blue-600 border-blue-400/30'} rounded-full text-xs border`}>
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className={isDarkMode ? 'text-sm text-gray-400' : 'text-sm text-gray-600'}>{service.users}</span>
                        <a
                          href={service.link}
                          className={`flex items-center space-x-2 bg-gradient-to-r ${isDarkMode ? 'from-cyan-500 to-purple-600' : 'from-blue-500 to-teal-600'} text-white px-6 py-3 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg group-hover:shadow-cyan-500/30`}
                          aria-label={`Launch ${service.title}`}
                        >
                          <span>Launch</span>
                          <Rocket className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Departments - Futuristic Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold bg-gradient-to-r ${isDarkMode ? 'from-emerald-400 to-cyan-400' : 'from-blue-600 to-teal-600'} bg-clip-text text-transparent mb-6`}>
              Smart Departments
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>AI-powered government departments of the future</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <a
                  key={index}
                  href={dept.link}
                  className={`group relative p-8 ${isDarkMode ? 'bg-white/5' : 'bg-gray-100/50'} backdrop-blur-xl rounded-3xl border ${isDarkMode ? 'border-white/10 hover:border-white/20' : 'border-gray-200/20 hover:border-gray-300/30'} transition-all duration-500 hover:scale-105`}
                  aria-label={dept.name}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl ${isDarkMode ? 'from-cyan-500 to-purple-600' : 'from-blue-500 to-teal-600'}`}></div>
                  <div className="flex items-center space-x-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${dept.color} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white group-hover:text-cyan-400' : 'text-gray-900 group-hover:text-blue-600'} transition-colors`}>{dept.name}</h3>
                      <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{dept.services} neural services</p>
                    </div>
                    <ArrowRight className={`w-6 h-6 ${isDarkMode ? 'text-gray-400 group-hover:text-cyan-400' : 'text-gray-600 group-hover:text-blue-600'} group-hover:translate-x-2 transition-all duration-300`} />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Innovation Updates */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className={`text-4xl font-bold bg-gradient-to-r ${isDarkMode ? 'from-pink-400 to-orange-400' : 'from-orange-500 to-red-500'} bg-clip-text text-transparent mb-4`}>
                Innovation Feed
              </h2>
              <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Latest breakthroughs in digital governance</p>
            </div>
            <a href="/innovation" className={`flex items-center space-x-2 bg-gradient-to-r ${isDarkMode ? 'from-pink-500 to-orange-500' : 'from-orange-500 to-red-500'} text-white px-6 py-3 rounded-xl hover:from-pink-600 hover:to-orange-600 transition-all duration-300 font-semibold`} aria-label="View all innovations">
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovations.map((innovation, index) => {
              const Icon = innovation.icon;
              return (
                <div key={index} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500 rounded-3xl ${isDarkMode ? 'from-pink-500 to-orange-500' : 'from-orange-400 to-red-500'}`}></div>
                  <div className={`relative ${isDarkMode ? 'bg-white/5' : 'bg-gray-100/50'} backdrop-blur-xl rounded-3xl border ${isDarkMode ? 'border-white/10 hover:border-white/20' : 'border-gray-200/20 hover:border-gray-300/30'} p-8 transition-all duration-500 group-hover:scale-105`} role="region" aria-label={innovation.title}>
                    <div className="flex items-center justify-between mb-6">
                      <span className={`px-4 py-2 bg-gradient-to-r ${innovation.gradient} rounded-full text-white text-xs font-bold`}>
                        {innovation.type}
                      </span>
                      <span className={isDarkMode ? 'text-sm text-gray-400' : 'text-sm text-gray-600'}>{innovation.date}</span>
                    </div>
                    
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${innovation.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white group-hover:text-cyan-400' : 'text-gray-900 group-hover:text-blue-600'} transition-colors`}>{innovation.title}</h3>
                    </div>
                    
                    <p className={isDarkMode ? 'text-gray-300 mb-6 leading-relaxed' : 'text-gray-700 mb-6 leading-relaxed'}>{innovation.summary}</p>
                    
                    <button className={`font-semibold text-sm flex items-center space-x-1 ${isDarkMode ? 'text-pink-400 hover:text-pink-300' : 'text-orange-500 hover:text-orange-400'} group-hover:translate-x-2 transition-transform duration-300`} aria-label={`Explore ${innovation.title}`}>
                      <span>Explore Innovation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer - Futuristic */}
      <footer className={`relative py-20 ${isDarkMode ? 'bg-black/20' : 'bg-white/20'} backdrop-blur-xl border-t ${isDarkMode ? 'border-white/10' : 'border-gray-200/20'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${isDarkMode ? 'from-cyan-500 to-purple-600' : 'from-blue-500 to-teal-600'} rounded-2xl flex items-center justify-center shadow-2xl`}>
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className={`text-2xl font-bold bg-gradient-to-r ${isDarkMode ? 'from-cyan-400 to-purple-400' : 'from-blue-600 to-teal-600'} bg-clip-text text-transparent`}>
                    NextGov Portal
                  </span>
                  <p className={isDarkMode ? 'text-cyan-200 text-sm' : 'text-blue-700 text-sm'}>Future of Digital Government</p>
                </div>
              </div>
              <p className={isDarkMode ? 'text-gray-300 mb-6 leading-relaxed max-w-md' : 'text-gray-700 mb-6 leading-relaxed max-w-md'}>
                Pioneering the next generation of government services with AI, quantum security, 
                and neural networks. Building a smarter, more connected future for all citizens.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, gradient: isDarkMode ? 'from-blue-500 to-cyan-500' : 'from-blue-400 to-teal-500' },
                  { icon: Twitter, gradient: isDarkMode ? 'from-purple-500 to-pink-500' : 'from-purple-400 to-pink-400' },
                  { icon: Youtube, gradient: isDarkMode ? 'from-red-500 to-orange-500' : 'from-red-400 to-orange-400' }
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href="#"
                      className={`w-10 h-10 bg-gradient-to-r ${social.gradient} rounded-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer`}
                      aria-label={`Visit our ${social.icon.name} page`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Quantum Services</h3>
              <ul className="space-y-3">
                {[
                  { name: 'All AI Services', icon: Zap, link: '/services' },
                  { name: 'Smart Departments', icon: Cpu, link: '/departments' },
                  { name: 'Innovation Hub', icon: Rocket, link: '/innovation' },
                  { name: 'Neural Support', icon: Target, link: '/help' }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={index}>
                      <a href={item.link} className={`${isDarkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-blue-600'} transition-colors flex items-center space-x-2`} aria-label={item.name}>
                        <Icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Connect</h3>
              <div className="space-y-4">
                {[
                  { icon: Phone, gradient: isDarkMode ? 'from-green-500 to-emerald-500' : 'from-green-400 to-emerald-400', label: 'Emergency', value: '911' },
                  { icon: Cpu, gradient: isDarkMode ? 'from-blue-500 to-cyan-500' : 'from-blue-400 to-teal-400', label: 'AI Support', value: '24/7 Neural' },
                  { icon: Mail, gradient: isDarkMode ? 'from-purple-500 to-pink-500' : 'from-purple-400 to-pink-400', label: 'Quantum Mail', value: 'ai@nextgov.tech' }
                ].map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <div key={index} className={`flex items-center space-x-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <div className={`w-8 h-8 bg-gradient-to-r ${contact.gradient} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className={isDarkMode ? 'text-sm text-gray-400' : 'text-sm text-gray-600'}>{contact.label}</p>
                        <p className="font-semibold">{contact.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={`border-t ${isDarkMode ? 'border-white/10' : 'border-gray-200/20'} mt-16 pt-8`}>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-center md:text-left mb-4 md:mb-0`}>
                <p>© 2025 NextGov Portal. All rights reserved.</p>
                <p className="text-sm mt-1">
                  Powered by <span className={isDarkMode ? 'text-cyan-400' : 'text-blue-600'}>Quantum AI</span> • 
                  Secured by <span className={isDarkMode ? 'text-purple-400' : 'text-teal-600'}>Neural Blockchain</span> • 
                  Built for <span className={isDarkMode ? 'text-pink-400' : 'text-orange-500'}>Tomorrow</span>
                </p>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                {['Privacy Shield', 'Quantum Terms', 'Neural Access'].map((item, index) => (
                  <a
                    key={index}
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className={`${isDarkMode ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
                    aria-label={item}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className={`absolute top-10 left-10 w-20 h-20 ${isDarkMode ? 'bg-cyan-600/10' : 'bg-blue-400/10'} rounded-full blur-xl animate-pulse`}></div>
        <div className={`absolute bottom-10 right-10 w-32 h-32 ${isDarkMode ? 'bg-purple-600/10' : 'bg-teal-400/10'} rounded-full blur-xl animate-pulse delay-1000`}></div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(-20px); opacity: 0.8; }
          100% { transform: translateY(0); opacity: 0.5; }
        }
        .animate-float {
          animation: float infinite;
        }
      `}</style>
    </div>
  );
}