"use client"
import { useState, useEffect } from 'react';
import { Menu, X, Shield, Bell, User, Search, ChevronDown, Home, FileText, Users, Settings, Phone, Info, Building, MapPin, Clock, Globe } from 'lucide-react';

export default function StateAgencyHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setCurrentTime(new Date());
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: 'Home', 
      href: '/', 
      icon: Home
    },
    { 
      name: 'Services', 
      href: '/services', 
      icon: FileText,
      hasDropdown: true,
      dropdownItems: [
        { name: 'Citizen Services', href: '/services/citizen' },
        { name: 'Business Services', href: '/services/business' },
        { name: 'Online Applications', href: '/services/applications' },
        { name: 'Document Verification', href: '/services/verification' },
        { name: 'Fee Payments', href: '/services/payments' }
      ]
    },
    { 
      name: 'Departments', 
      href: '/departments', 
      icon: Building,
      hasDropdown: true,
      dropdownItems: [
        { name: 'Revenue Department', href: '/departments/revenue' },
        { name: 'Health Department', href: '/departments/health' },
        { name: 'Education Department', href: '/departments/education' },
        { name: 'Transport Department', href: '/departments/transport' },
        { name: 'Public Works', href: '/departments/public-works' }
      ]
    },
    { 
      name: 'Information', 
      href: '/information', 
      icon: Info,
      hasDropdown: true,
      dropdownItems: [
        { name: 'Public Notices', href: '/information/notices' },
        { name: 'Tender Notifications', href: '/information/tenders' },
        { name: 'Policy Documents', href: '/information/policies' },
        { name: 'Annual Reports', href: '/information/reports' }
      ]
    },
    { 
      name: 'Contact', 
      href: '/contact', 
      icon: Phone
    }
  ];

  const NavLink = ({ item, isMobile = false }) => {
    const Icon = item.icon;
    const isActive = activeDropdown === item.name;
    
    return (
      <div className="relative group">
        <button
          onClick={() => {
            if (item.hasDropdown) {
              setActiveDropdown(isActive ? null : item.name);
            }
          }}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            isMobile 
              ? 'w-full text-left text-white hover:bg-blue-700' 
              : 'text-white hover:bg-blue-700 hover:shadow-lg'
          }`}
        >
          <Icon className="w-4 h-4" />
          <span>{item.name}</span>
          {item.hasDropdown && (
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`} />
          )}
        </button>

        {/* Dropdown Menu */}
        {item.hasDropdown && isActive && (
          <div className={`absolute ${isMobile ? 'relative mt-1' : 'top-full mt-1 left-0'} bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50 min-w-64`}>
            <div className="py-2">
              {item.dropdownItems.map((dropdownItem, index) => (
                <a
                  key={index}
                  href={dropdownItem.href}
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors duration-200 border-l-4 border-transparent hover:border-blue-600"
                >
                  {dropdownItem.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-blue-900/95 backdrop-blur-md shadow-xl' 
        : 'bg-blue-900 shadow-lg'
    }`}>
      {/* Top Government Bar */}
      <div className="bg-blue-800 text-white py-2 px-4 border-b border-blue-700">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Government Portal Online</span>
            </span>
            <span className="flex items-center space-x-1">
              <Phone className="w-3 h-3" />
              <span>Helpline: 1800-XXX-XXXX</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <Globe className="w-3 h-3" />
              <span>State Government</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span className="font-mono text-xs">
                {mounted && currentTime ? currentTime.toLocaleTimeString() : '--:--:--'}
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* Government Logo and Title */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                  <Shield className="w-7 h-7 text-blue-800" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white">
                  <div className="w-full h-full bg-red-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">State Agency Portal</h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <NavLink key={index} item={item} />
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-3">
              {/* Search */}
              <div className="hidden md:flex items-center bg-blue-800 rounded-lg px-3 py-2 border border-blue-700">
                <Search className="w-4 h-4 text-blue-300" />
                <input 
                  type="text" 
                  placeholder="Search services..." 
                  className="bg-transparent border-none outline-none text-white placeholder-blue-300 ml-2 w-36 text-sm"
                />
              </div>

              {/* Notifications */}
              <button className="relative p-2 bg-blue-800 rounded-lg hover:bg-blue-700 transition-colors border border-blue-700">
                <Bell className="w-4 h-4 text-white" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border border-white">
                  <span className="sr-only">New notifications</span>
                </div>
              </button>

              {/* User Account */}
              <button className="flex items-center space-x-2 bg-blue-800 rounded-lg px-3 py-2 hover:bg-blue-700 transition-colors border border-blue-700">
                <User className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium hidden sm:block">Login</span>
                <ChevronDown className="w-3 h-3 text-blue-300" />
              </button>

              {/* Mobile Menu */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-blue-800 hover:bg-blue-700 transition-colors border border-blue-700"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-blue-800 px-4 py-4 space-y-1 border-t border-blue-700">
          {/* Mobile Search */}
          <div className="flex items-center bg-blue-700 rounded-lg px-3 py-2 mb-3">
            <Search className="w-4 h-4 text-blue-300" />
            <input 
              type="text" 
              placeholder="Search government services..." 
              className="bg-transparent border-none outline-none text-white placeholder-blue-300 ml-2 flex-1 text-sm"
            />
          </div>

          {navItems.map((item, index) => (
            <NavLink key={index} item={item} isMobile={true} />
          ))}

          {/* Mobile Footer */}
          <div className="pt-4 mt-4 border-t border-blue-700">
            <div className="text-blue-200 text-xs text-center">
              <p>© 2025 State Government</p>
              <p className="mt-1">Serving Citizens with Transparency</p>
            </div>
          </div>
        </div>
      </div>

      {/* Government Identity Strip */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-white to-green-500"></div>
    </header>
  );
}