import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/header';
import { MapPin, Mail, Phone, FileText } from 'lucide-react';
import ProjectCarousel from '@/components/project-carousel';

export default function Home() {
  return (
    <div className="w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 min-h-[520px] md:min-h-[640px] bg-gradient-to-br from-primary via-primary to-primary/95 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/build.png"
            alt="Construction background"
            fill
            className="object-cover opacity-30"
            priority
            aria-hidden
          />
          <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
        </div>
        <div className="absolute inset-0 opacity-10 z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-secondary text-lg font-semibold tracking-wider uppercase">Welcome to Excellence</p>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight text-balance">
                  Building Excellence in Construction & Engineering
                </h1>
              </div>
              <p className="text-xl text-white/85 leading-relaxed text-balance max-w-lg">
                IKS Nigeria Limited delivers comprehensive construction and engineering solutions across Nigeria. With a team of skilled professionals, we're committed to quality, safety, and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link href="/contact">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-semibold px-8 py-6 text-base w-full sm:w-auto">
                    Get Started
                  </Button>
                </Link>
                <Link href="#services">
                  <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/15 w-full sm:w-auto bg-white/5 font-semibold px-8 py-6 text-base backdrop-blur-sm">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="relative h-96 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl backdrop-blur-sm">
                <Image
                  src="/images/T4.jpg"
                  alt="IKS Nigeria Limited team members"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-28 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-secondary text-lg font-semibold tracking-wider uppercase mb-4">Our Team</p>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">Meet Our Experts</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              A dedicated team of 34 skilled professionals committed to delivering excellence in every project
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden border-2 border-border/60 shadow-xl hover:shadow-2xl transition-all duration-300">
            <Image
              src="/images/T.jpg"
              alt="IKS Nigeria Limited team members"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-28 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-secondary text-lg font-semibold tracking-wider uppercase mb-4">What We Offer</p>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">Our Core Services</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Delivering specialized solutions across construction, engineering, and environmental services with precision and excellence
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'General Building & Construction',
                description: 'Complete construction solutions from planning to execution with quality assurance.',
                image: '/images/navy-accommodation-1.jpg'
              },
              {
                title: 'Environmental Management',
                description: 'Professional environmental consultancy and sustainable management practices.',
                images: ['/images/E1.JPEG', '/images/E2.jpeg', '/images/E3.jpeg']
              },
              {
                title: 'Geotechnical Services',
                description: 'Expert geotechnical analysis and solutions for complex projects.',
                image: '/images/kagarko-school-1.jpg'
              },
              {
                title: 'Borehole Drilling',
                description: 'Professional borehole drilling and maintenance services across Nigeria.',
                images: ['/images/Drill.JPG', '/images/B1.jpeg', '/images/B2.jpeg', '/images/B3.jpeg']
              },
              {
                title: 'Solar Installation',
                description: 'Modern solar grid installation and maintenance solutions for energy efficiency.',
                image: '/images/solar.jpeg'
              },
            
            ].map((service, idx) => (
              <Card key={idx} className="overflow-hidden border border-border/60 hover:border-accent hover:shadow-lg transition-all duration-300 flex flex-col group bg-white">
                <div className="relative h-56 w-full overflow-hidden">
                  {service.images && service.images.length ? (
                    <ProjectCarousel images={service.images} alt={service.title} />
                  ) : (
                    <>
                      <Image
                        src={typeof service.image === 'string' ? service.image : "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </>
                  )}
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-foreground/70 leading-relaxed flex-grow">{service.description}</p>
                  <Link href="/services" className="text-accent font-semibold mt-4 inline-flex items-center group/link hover:gap-2 transition-all">
                    Learn More
                    <span className="ml-2 opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section id="about" className="py-28 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-secondary text-lg font-semibold tracking-wider uppercase mb-4">Why Partner With Us</p>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-12 text-balance">Why Choose IKS Nigeria?</h2>
              <div className="space-y-6">
                {[
                  { title: 'Established Credibility', desc: 'Incorporated in 2021, registered with CAC (RC 1782400)' },
                  { title: 'Skilled Workforce', desc: '34 experienced professionals dedicated to excellence' },
                  { title: 'Quality Assurance', desc: 'Rigorous quality control and safety standards' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-primary font-bold text-lg">✓</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-foreground/70 leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Card className="p-10 border border-border/60 bg-gradient-to-br from-primary/5 to-accent/5 hover:border-primary hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl"></span>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-foreground/75 leading-relaxed text-lg">
                  To deliver exceptional construction and engineering services that exceed client expectations while maintaining the highest standards of quality, safety, and environmental responsibility.
                </p>
              </Card>
              <Card className="p-10 border border-border/60 bg-gradient-to-br from-accent/5 to-secondary/5 hover:border-accent hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl"></span>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-foreground/75 leading-relaxed text-lg">
                  To be the leading construction and engineering company in Nigeria, recognized for innovation, reliability, and sustainable development practices.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 md:py-40 bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-80 h-80 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 left-20 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-secondary text-lg font-semibold tracking-wider uppercase mb-6">Get Started Today</p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 text-balance leading-tight">Ready to Start Your Project?</h2>
          <p className="text-xl md:text-2xl text-white/85 mb-12 max-w-3xl mx-auto leading-relaxed">
            Contact IKS Nigeria Limited today for expert construction and engineering solutions tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-semibold px-10 py-6 text-base w-full sm:w-auto">
                Get in Touch
              </Button>
            </Link>
            <a href="https://wa.me/2348037260684" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="border-2 border-white/50 text-white hover:bg-white/10 w-full sm:w-auto bg-transparent font-semibold px-10 py-6 text-base backdrop-blur-sm transition-all">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-16 md:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">IKS Nigeria</h3>
              <p className="text-white/70 leading-relaxed text-sm">Construction & Engineering Excellence. Delivering quality solutions across Nigeria.</p>
              <div className="flex gap-3 pt-2">
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-secondary flex items-center justify-center transition-colors text-sm">f</a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-secondary flex items-center justify-center transition-colors text-sm">t</a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-secondary flex items-center justify-center transition-colors text-sm">in</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Services</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li><Link href="/services" className="hover:text-white transition-colors">Construction</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Engineering</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Environmental</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Consultancy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                <li><Link href="/why-us" className="hover:text-white transition-colors">Why Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Contact Info</h4>
              <div className="space-y-4 text-sm text-white/70">
                <div className="flex gap-3 items-start">
                  <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">No 33 Umar Abdullahi Tsauri Road, Unguwan Dosa, Kaduna, Nigeria</p>
                </div>
                <div className="flex gap-3 items-center">
                  <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                  <a href="mailto:iksnigerialimited@gmail.com" className="hover:text-white transition-colors">iksnigerialimited@gmail.com</a>
                </div>
                <div className="flex gap-3 items-center">
                  <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                  <a href="tel:+2348037260684" className="hover:text-white transition-colors">08037260684 | 09029436002</a>
                </div>
                <div className="flex gap-3 items-center">
                  <FileText className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>RC: 1782400</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <p className="text-sm text-white/60">
                  © 2026 IKS Nigeria Limited. All rights reserved.
                </p>
                <p className="text-sm text-white/60 mt-2">
                  Portal developed by <a href="https://www.alyaumtech.com.ng" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/90 transition">Alyaum Technology</a>
                </p>
              </div>
              <div className="flex gap-6 text-sm text-white/60">
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
