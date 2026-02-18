'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/header';
import { MapPin, Mail, Phone } from 'lucide-react';
import ProjectCarousel from '@/components/project-carousel';

export default function Projects() {
  const completedProjects = [
    {
      id: 1,
      title: 'Kaduna Smart City Solar Initiative',
      category: 'Solar Installation',
      location: 'Kaduna State',
      description: 'Led solar grid installation across 13 public schools as part of the Kaduna Smart City Project. Employed 10+ youths and trained numerous individuals in renewable energy solutions for sustainable development.',
      status: 'Completed',
      year: '2024',
      images: ['/images/kaduna-smart-city-1.jpg', '/images/kaduna-smart-city-2.jpg'],
      featured: true,
      highlights: ['13 Public Schools', '10+ Youth Employment', 'Renewable Energy Training']
    },
    
    {
      id: 3,
      title: 'Youth Training & Outreach Program',
      category: 'Skills Training & Development',
      location: 'Kaduna State Communities',
      description: 'Comprehensive training initiative for youths, fresh graduates, interns, and students across Kaduna State communities. The program combines classroom-based theoretical training with hands-on practical construction site experience, covering construction techniques, safety protocols, blueprint reading, and engineering fundamentals.',
      status: 'Completed',
      year: '2025',
      images: ['/images/training-outreach-1.jpg', '/images/training-outreach-2.jpg', '/images/training-outreach-3.jpg', '/images/training-outreach-4.jpg', '/images/training-outreach-5.jpg', '/images/training-outreach-6.jpg'],
      highlights: ['100+ Participants', 'Practical Training', 'Community Empowerment']
    },
    {
      id: 4,
      title: 'Nigerian Navy Officers Accommodation Block',
      category: 'Military Infrastructure',
      location: 'Kachia, Kaduna State',
      description: 'Construction of 2x16 accommodation block for Nigerian Navy Officers at Kachia. The project encompasses complete structural works including foundation, reinforced concrete columns, flooring systems, protective coverings, window installations, and comprehensive infrastructure development.',
      status: 'Completed',
      year: '2025',
      images: ['/images/navy-accommodation-1.jpg', '/images/navy-accommodation-2.jpg', '/images/navy-accommodation-3.jpg', '/images/navy-accommodation-4.jpg', '/images/navy-accommodation-5.jpg', '/images/navy-accommodation-6.jpg', '/images/navy-accommodation-7.jpg', '/images/navy-accommodation-8.jpg'],
      highlights: ['32 Units', 'Military Grade', 'Complete Infrastructure']
    },
    {
      id: 5,
      title: 'Construction of 2 VIP ',
      category: 'Building & Construction',
      location: 'Kagarko LGA of Kaduna State',
      description: 'Construction of 2 VIP Latrines at Primary Healthcare Center.',
      status: 'Completed',
      year: '2021',
      images: ['/images/VIP1.jpeg','/images/VIP2.jpeg','/images/VIP3.jpeg','/images/VIP4.jpeg','/images/VIP5.jpeg',]
    },
    {
      id: 6,
      title: 'Water Well Development',
      category: 'Borehole Drilling',
      location: 'Kaduna State',
      description: 'Deep borehole drilling and water well development for community access.',
      status: 'Completed',
      year: '2023',
      images: ['/images/water-systems.jpg']
    },
    {
      id: 7,
      title: 'Environmental Assessment',
      category: 'Environmental Consultancy',
      location: 'Kaduna',
      description: 'Comprehensive environmental impact assessment and management plan.',
      status: 'Completed',
      year: '2022',
      images: ['/images/environmental-management.jpg']
    }
  ];

  const ongoingProjects = [
    {
      id: 11,
      title: 'Construction of Retaining Wall',
      category: 'Civil Engineering',
      location: 'Kaduna State',
      description: 'Ongoing construction of a reinforced concrete retaining wall to prevent soil erosion and provide structural support. Project includes excavation, formwork, reinforcement, and concrete works.',
      status: 'Ongoing',
      progress: 40,
      images: [
        '/images/K1.jpeg',
        '/images/K2.jpeg',
        '/images/K3.jpeg',
        '/images/K4.jpeg',
        '/images/K5.jpeg',
        '/images/K6.jpeg'
      ]
    },
    {
      id: 12,
      title: 'Construction of 20 Units 5 Bedrooms Terrace',
      category: 'Building Construction (Consultancy)',
      location: 'Kaduna State',
      description: 'Ongoing construction of 20 units of 5-bedroom terrace houses. IKS Nigeria is acting as the project consultant, overseeing quality, compliance, and project management.',
      status: 'Ongoing',
      progress: 25,
      images: [
        '/images/L1.jpeg',
        '/images/L2.jpeg',
        '/images/L3.jpeg',
        '/images/L4.jpeg'
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
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">Our Projects</h1>
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
              Showcasing our expertise through successfully completed projects and ongoing initiatives across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Completed Projects</h2>
            <p className="text-lg text-muted-foreground">Successfully delivered projects demonstrating our expertise and commitment to quality.</p>
          </div>
          <div className="space-y-8">
            {completedProjects.map((project) => (
              <Card 
                key={project.id} 
                className="border border-accent/40 overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <ProjectCarousel images={project.images || []} alt={project.title} featured={true} />
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-foreground text-2xl">{project.title}</h3>
                        <p className="text-accent font-semibold mt-2 text-base">{project.category}</p>
                      </div>
                      <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold whitespace-nowrap ml-2">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-foreground/70 leading-relaxed mb-6 text-base">{project.description}</p>
                    {project.highlights && (
                      <div className="grid grid-cols-3 gap-3 mb-6">
                        {project.highlights.map((highlight, idx) => (
                          <div key={idx} className="bg-accent/10 rounded-lg p-3 text-center">
                            <p className="text-foreground font-semibold text-sm">{highlight}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="flex justify-between items-center text-sm text-foreground/60">
                      <span>📍 {project.location}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Ongoing Projects</h2>
            <p className="text-lg text-muted-foreground">Current initiatives showcasing our active involvement across diverse sectors.</p>
          </div>
          <div className="space-y-8">
            {ongoingProjects.map((project) => (
              <Card key={project.id} className="border border-accent/40 overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="grid md:grid-cols-2 gap-0">
                  <ProjectCarousel images={project.images || []} alt={project.title} featured={true} />
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                        <p className="text-accent font-semibold mt-2 text-base">{project.category}</p>
                      </div>
                      <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-semibold whitespace-nowrap ml-2">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-foreground/70 leading-relaxed mb-6 text-base">{project.description}</p>
                    <div className="mb-6">
                      <div className="flex justify-between items-center text-sm mb-3">
                        <span className="text-foreground/70 font-medium">Progress</span>
                        <span className="text-secondary font-semibold">{project.progress}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-secondary to-accent rounded-full transition-all duration-500" 
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-sm text-foreground/60">
                      <span>📍 {project.location}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Track Record</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '5', label: 'Completed Projects' },
              { number: '3', label: 'Ongoing Projects' },
              { number: '6', label: 'Service Areas' },
              { number: '34', label: 'Team Members' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-3">{stat.number}</div>
                <p className="text-white/90 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">Featured Highlights</h2>
          <div className="space-y-8">
            <Card className="p-8 border border-border bg-white">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/project-infrastructure.jpg"
                    alt="Multi-sector expertise in construction and engineering"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Multi-Sector Expertise</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Our portfolio spans construction, engineering, environmental management, and specialized services. Each project reflects our commitment to quality, safety, and innovation.
                  </p>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-foreground">Quality Assured</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-foreground">Safety Focused</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Contact our team to discuss how we can help bring it to life.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-secondary hover:bg-white/90">
              Start Your Project
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
