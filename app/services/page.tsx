import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/header';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'General Building & Construction',
      description: 'Complete construction solutions from initial planning and design through to final execution and handover.',
      image: '/images/navy-accommodation-1.jpg',
      highlights: [
        'Architectural planning and design coordination',
        'Structural construction and installation',
        'Interior and exterior finishing',
        'Project management and supervision',
        'Quality control and assurance'
      ]
    },
    {
      id: 2,
      title: 'Environmental Management & Consultancy',
      description: 'Professional environmental assessment and management services ensuring compliance and sustainability.',
      image: '/images/training-outreach-1.jpg',
      highlights: [
        'Environmental impact assessments',
        'Waste management solutions',
        'Pollution control strategies',
        'Sustainability consulting',
        'Regulatory compliance support'
      ]
    },
    {
      id: 3,
      title: 'Geotechnical Services',
      description: 'Expert geotechnical analysis and solutions for complex foundation and ground stability challenges.',
      image: '/images/kagarko-school-1.jpg',
      highlights: [
        'Soil investigation and analysis',
        'Foundation design',
        'Ground stability assessment',
        'Slope stability analysis',
        'Laboratory testing and reporting'
      ]
    },
    {
      id: 4,
      title: 'Borehole Drilling & Maintenance',
      description: 'Professional borehole drilling and comprehensive maintenance services for water access and groundwater solutions.',
      image: '/images/kagarko-school-2.jpg',
      highlights: [
        'Deep borehole drilling',
        'Water well development',
        'Pump installation and testing',
        'Maintenance and rehabilitation',
        'Water quality analysis'
      ]
    },
    {
      id: 5,
      title: 'Solar Grid Installation & Maintenance',
      description: 'Modern solar energy solutions for sustainable and cost-effective power generation across diverse applications.',
      image: '/images/kaduna-smart-city-1.jpg',
      highlights: [
        'Solar panel system design',
        'Professional installation services',
        'Grid connection and integration',
        'Performance monitoring',
        'Maintenance and support services'
      ]
    },
    
    {
      id: 7,
      title: 'Training Services',
      description: 'Comprehensive training programs for skill development in construction, engineering, and specialized technical areas.',
      image: '/images/training-outreach-2.jpg',
      highlights: [
        'Technical skills training',
        'Safety and compliance workshops',
        'Professional development courses',
        'Certification programs',
        'On-site customized training'
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
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">Our Services</h1>
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
              Comprehensive construction and engineering solutions tailored to meet your specific project requirements and industry standards.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, idx) => (
              <Card key={service.id} className="border border-border bg-white hover:border-primary transition overflow-hidden">
                <div className="relative h-56 w-full">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{service.id}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {service.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex gap-3">
                            <span className="text-primary font-bold flex-shrink-0">•</span>
                            <p className="text-muted-foreground">{highlight}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">Our Service Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'We evaluate your project requirements, challenges, and objectives in detail.'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Develop comprehensive plans and strategies tailored to your specific needs.'
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Implement solutions with precision, quality control, and professional management.'
              },
              {
                step: '04',
                title: 'Support',
                description: 'Provide ongoing maintenance, support, and training for long-term success.'
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 border border-border bg-white">
                <div className="text-4xl font-bold text-primary mb-3">{item.step}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">Technical Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border border-border bg-white">
              <h3 className="text-2xl font-bold text-primary mb-6">Equipment & Technology</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <p className="text-muted-foreground">Modern construction and engineering equipment</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <p className="text-muted-foreground">Advanced testing and monitoring instruments</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <p className="text-muted-foreground">CAD and BIM design software</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <p className="text-muted-foreground">Safety equipment and compliance tools</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <p className="text-muted-foreground">Fleet of transport and logistics equipment</p>
                </div>
              </div>
            </Card>
            <Card className="p-8 border border-border bg-white">
              <h3 className="text-2xl font-bold text-primary mb-6">Professional Standards</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <p className="text-muted-foreground">Adherence to international construction codes</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <p className="text-muted-foreground">Environmental management certifications</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <p className="text-muted-foreground">Health and safety compliance protocols</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <p className="text-muted-foreground">Quality management systems and audits</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <p className="text-muted-foreground">Regular staff training and development</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Discuss Your Project?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact our team today to learn how our services can help bring your vision to reality.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Get in Touch
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
