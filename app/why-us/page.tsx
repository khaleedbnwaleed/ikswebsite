'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/header';
import { ChevronLeft, ChevronRight, MapPin, Mail, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function WhyUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsPerSlide = isMobile ? 1 : 4;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + itemsPerSlide < reasons.length ? prev + itemsPerSlide : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - itemsPerSlide >= 0 ? prev - itemsPerSlide : Math.max(0, reasons.length - itemsPerSlide)));
  };
  
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide(prev => (prev + itemsPerSlide < reasons.length ? prev + itemsPerSlide : 0));
    }, 3000);
    return () => clearInterval(id);
  }, [itemsPerSlide]);
  const reasons = [
    {
      icon: '01',
      title: 'Experience & Expertise',
      description: 'Our team brings deep technical knowledge and practical experience across construction, engineering, and environmental services.'
    },
    {
      icon: '02',
      title: 'Skilled Workforce',
      description: '34 dedicated professionals with specialized training and continuous professional development in their respective fields.'
    },
    {
      icon: '03',
      title: 'Safety First',
      description: 'Comprehensive safety protocols, compliance with standards, and rigorous training ensure every project meets the highest safety benchmarks.'
    },
    {
      icon: '04',
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes, inspections, and testing at every project stage guarantee exceptional results.'
    },
    {
      icon: '05',
      title: 'Cost Efficiency',
      description: 'Smart resource management and optimized processes deliver outstanding value without compromising on quality.'
    },
    {
      icon: '06',
      title: 'Reliability',
      description: 'Consistent on-time delivery, transparent communication, and accountability are hallmarks of our service.'
    },
    {
      icon: '07',
      title: 'Sustainability',
      description: 'Environmental responsibility integrated into every project, promoting long-term sustainability and eco-friendly practices.'
    },
    {
      icon: '08',
      title: 'Professional Support',
      description: 'Dedicated support team ensures smooth project execution and responsive communication throughout all phases.'
    }
  ];

  const advantages = [
    {
      title: 'Technical Innovation',
      points: [
        'Modern equipment and technology',
        'Advanced design and analysis tools',
        'Industry best practices implementation',
        'Continuous improvement mindset'
      ]
    },
    {
      title: 'Client-Centric Approach',
      points: [
        'Customized solutions for each project',
        'Regular communication and updates',
        'Flexible scheduling and planning',
        'Responsive to client needs'
      ]
    },
    {
      title: 'Compliance & Certifications',
      points: [
        'CAC Registration (RC 1782400)',
        'International construction standards',
        'Environmental management compliance',
        'Health and safety certifications'
      ]
    },
    {
      title: 'Local Market Knowledge',
      points: [
        'Deep understanding of Nigerian context',
        'Established relationships with suppliers',
        'Familiarity with local regulations',
        'Community engagement experience'
      ]
    }
  ];

  return (
    <div className="w-full">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">Why Choose IKS Nigeria?</h1>
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
              Discover what sets IKS Nigeria Limited apart as your trusted partner for construction and engineering excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Key Reasons Carousel */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">Our Key Differentiators</h2>
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * (100 / itemsPerSlide)}%)` }}
              >
                {reasons.map((reason, idx) => (
                  <div 
                    key={idx} 
                    className="flex-shrink-0"
                    style={{ width: `${100 / itemsPerSlide}%` }}
                  >
                    <Card className="p-6 border border-border bg-white hover:border-primary transition m-3">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                        <span className="text-white font-bold text-lg">{reason.icon}</span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{reason.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(reasons.length / itemsPerSlide) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx * itemsPerSlide)}
                  className={`h-2 rounded-full transition ${
                    Math.floor(currentSlide / itemsPerSlide) === idx
                      ? 'bg-primary w-8'
                      : 'bg-border w-2'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimony Section */}
      <section className="py-28 md:py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-secondary text-lg font-semibold tracking-wider uppercase mb-4">Client Testimonials</p>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">What Our Clients Say</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Hear from those who have experienced our dedication, professionalism, and results first-hand.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            <div className="testimonial bg-white p-8 rounded-2xl shadow flex flex-col items-center">
              <img src="/images/Testimony1.png" alt="Jane Doe, CEO of Acme Corp" className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-gray-300" />
              <p className="text-lg italic mb-2 text-center">"IKS Nigeria delivered exceptional service and exceeded our expectations. Highly recommended!"</p>
              <span className="block text-sm font-semibold text-gray-700 mb-2">- Haj. Maimunatu A.G Zakari</span>
              <span className="block text-xs text-gray-500 text-center">Haj. Maimunatu was impressed by our professionalism and timely delivery.</span>
            </div>
            <div className="testimonial bg-white p-8 rounded-2xl shadow flex flex-col items-center">
              <img src="/images/Testimony2.png" alt="John Smith, Project Manager" className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-gray-300" />
              <p className="text-lg italic mb-2 text-center">"Professional, reliable, and innovative. Our project was a great success thanks to IKS Nigeria."</p>
              <span className="block text-sm font-semibold text-gray-700 mb-2">- Abdulrashit Suleiman Makama</span>
              <span className="block text-xs text-gray-500 text-center">Abdulrashit appreciated our innovative approach and support throughout the project.</span>
            </div>
          </div>
        </div>
      </section>
      {/* Competitive Advantages */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">Our Competitive Advantages</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, idx) => (
              <Card key={idx} className="p-8 border border-border bg-white">
                <h3 className="text-2xl font-bold text-primary mb-6">{advantage.title}</h3>
                <ul className="space-y-3">
                  {advantage.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex gap-3">
                      <span className="text-primary font-bold flex-shrink-0">✓</span>
                      <p className="text-muted-foreground">{point}</p>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">What Our Clients Value</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Proven Results',
                description: 'Multiple completed projects across diverse sectors demonstrate our proven capability to deliver.'
              },
              {
                title: 'Transparent Process',
                description: 'Clear communication, documented procedures, and regular updates keep you informed throughout.'
              },
              {
                title: 'Professional Team',
                description: 'Experienced professionals committed to understanding and exceeding your project requirements.'
              },
              {
                title: 'Risk Management',
                description: 'Comprehensive planning and contingency measures minimize project risks and uncertainties.'
              },
              {
                title: 'Value for Money',
                description: 'Competitive pricing without compromising quality, safety, or professional standards.'
              },
              {
                title: 'Long-term Partnership',
                description: 'We build relationships focused on your success and satisfaction beyond project completion.'
              }
            ].map((value, idx) => (
              <Card key={idx} className="p-6 border border-border bg-white">
                <h3 className="text-lg font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Success Metrics</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                metric: '100%',
                label: 'Project Completion Rate',
                description: 'Consistent delivery of projects within scope and timeline'
              },
              {
                metric: '34',
                label: 'Skilled Professionals',
                description: 'Dedicated team with specialized expertise and training'
              },
              {
                metric: '7',
                label: 'Core Service Areas',
                description: 'Comprehensive solutions across multiple sectors'
              },
              {
                metric: '2021',
                label: 'Founded & Registered',
                description: 'Officially incorporated with CAC registration'
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{item.metric}</div>
                <p className="text-lg font-semibold text-white mb-2">{item.label}</p>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">Partnership Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border border-border bg-white">
              <h3 className="text-xl font-bold text-foreground mb-4">For Project Managers</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-muted-foreground">Reliable execution and adherence to schedules</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-muted-foreground">Regular progress reporting and transparency</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-muted-foreground">Professional project management practices</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-muted-foreground">Quick problem-solving and adaptability</span>
                </li>
              </ul>
            </Card>
            <Card className="p-8 border border-border bg-white">
              <h3 className="text-xl font-bold text-foreground mb-4">For Organization Leaders</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-muted-foreground">Cost optimization and budget efficiency</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-muted-foreground">Risk mitigation and safety assurance</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-muted-foreground">Compliance with all standards and regulations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-muted-foreground">Strategic partnership for long-term growth</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience the IKS Difference</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Partner with IKS Nigeria Limited for construction and engineering solutions that deliver excellence, reliability, and results.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-secondary hover:bg-white/90">
              Start Your Project Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">IKS Nigeria</h3>
              <p className="text-white/70 text-sm">Construction & Engineering Excellence</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/services" className="hover:text-white transition">Construction</Link></li>
                <li><Link href="/services" className="hover:text-white transition">Engineering</Link></li>
                <li><Link href="/services" className="hover:text-white transition">Consultancy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/projects" className="hover:text-white transition">Projects</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-white/70 hover:text-white transition-colors">No 33 Umar Abdullahi Tsauri Road, Unguwan Dosa, Kaduna, Nigeria</p>
                </div>
                <div className="flex gap-3 items-center">
                  <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                  <a href="mailto:iksnigerialimited@gmail.com" className="text-sm text-white/70 hover:text-white transition">iksnigerialimited@gmail.com</a>
                </div>
                <div className="flex gap-3 items-center">
                  <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                  <a href="tel:+2348037260684" className="text-sm text-white/70 hover:text-white transition">08037260684 | 09029436002</a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8">
            <p className="text-center text-sm text-white/60">
              © 2026 IKS Nigeria Limited. All rights reserved. RC 1782400
            </p>
            <p className="text-center text-sm text-white/60 mt-2">
              Portal developed by <a href="https://www.alyaumtech.com.ng" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/90 transition">Alyaum Technology</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
