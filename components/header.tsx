'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState, useCallback, memo } from 'react';

const Header = memo(function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/why-us', label: 'Why Us' },
    
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-b from-primary/5 to-primary/3 border-b border-primary/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 flex-shrink-0 group">
            <div className="relative">
              <Image
                src="/images/iks-logo.png"
                alt="IKS Nigeria Limited Logo"
                width={80}
                height={80}
                className="h-25 w-auto transition-transform group-hover:scale-110"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm uppercase tracking-wider relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <Link href="/contact" className="hidden md:block">
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-6 py-2">Contact Us</Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-muted rounded-xl transition-all"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/40 py-6 space-y-2 bg-background/50 backdrop-blur-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-foreground hover:text-primary hover:bg-muted/60 rounded-xl transition-colors font-medium"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="block px-4 py-3">
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">Contact Us</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
});

export default Header;
