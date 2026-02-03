import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/header';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Mail, Phone } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">About IKS Nigeria Limited</h1>
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
              Established in April 2021 and registered with the Corporate Affairs Commission (RC 1782400), IKS Nigeria Limited is a trusted construction and engineering company based in Kaduna State.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                IKS Nigeria Limited was founded on the principles of excellence, integrity, and innovation. Since our establishment, we have grown to become a respected player in Nigeria's construction and engineering sector.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                With a dedicated team of 34 skilled professionals, we deliver comprehensive solutions across construction, engineering, environmental management, and specialized services. Every project we undertake reflects our commitment to quality, safety, and client satisfaction.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our approach combines technical expertise with a deep understanding of local market conditions, allowing us to deliver solutions that are both innovative and practical.
              </p>
            </div>
            <div className="space-y-4">
              <Card className="p-8 bg-white border border-border">
                <h3 className="text-3xl font-bold text-primary mb-2">34</h3>
                <p className="text-lg text-muted-foreground">Skilled Professionals</p>
              </Card>
              <Card className="p-8 bg-white border border-border">
                <h3 className="text-3xl font-bold text-primary mb-2">2021</h3>
                <p className="text-lg text-muted-foreground">Year of Incorporation</p>
              </Card>
              <Card className="p-8 bg-white border border-border">
                <h3 className="text-3xl font-bold text-primary mb-2">RC 1782400</h3>
                <p className="text-lg text-muted-foreground">CAC Registration</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">Our Foundation</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white border border-border">
              <h3 className="text-2xl font-bold text-primary mb-4">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional construction and engineering services that exceed client expectations while maintaining the highest standards of quality, safety, and environmental responsibility.
              </p>
            </Card>
            <Card className="p-8 bg-white border border-border">
              <h3 className="text-2xl font-bold text-primary mb-4">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading construction and engineering company in Nigeria, recognized for innovation, reliability, and sustainable development practices.
              </p>
            </Card>
            <Card className="p-8 bg-white border border-border">
              <h3 className="text-2xl font-bold text-primary mb-4">Core Values</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Excellence in execution</li>
                <li>• Integrity in dealings</li>
                <li>• Safety prioritization</li>
                <li>• Environmental care</li>
                <li>• Client satisfaction</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Leadership & Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Meet the experienced professionals leading IKS Nigeria Limited with expertise spanning construction, engineering, environmental management, and project execution.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Engr. Ibrahim Suleiman',
                title: 'Founder/CEO',
                image: '/images/T1.png',
                bio: 'Engr. Ibrahim Suleiman is the visionary founder and Chief Executive Officer of IKS Nigeria Limited 10+ years experience in Building and Construction. With extensive experience in construction and engineering, he leads the company with a commitment to excellence and innovation.',
                social: {
                  linkedin: '#',
                  twitter: '#',
                  facebook: '#',
                  instagram: '#'
                }
              } ,
              {
                name: 'Umar Aliyu',
                title: 'Managing Director',
                image: '/images/T2.png',
                bio: 'Umar Aliyu serves as Managing Director with over 8+ years experience in project management, overseeing day-to-day operations and strategic project management. His expertise ensures seamless coordination across all company operations.',
                social: {
                  linkedin: '#',
                  twitter: '#',
                  facebook: '#',
                  instagram: '#'
                }
              },
              {
                name: 'Hadiza Lawal',
                title: 'Human Resource Manager',
                image: '/images/T3.png',
                bio: 'Hadiza Lawal leads the Human Resources department, managing talent acquisition, development, and retention. She ensures IKS maintains a motivated and skilled workforce.',
                social: {
                  linkedin: '#',
                  twitter: '#',
                  facebook: '#',
                  instagram: '#'
                }
              }
            ].map((member, idx) => (
              <Card key={idx} className="overflow-hidden border border-border hover:border-primary transition bg-white">
                  <div className="flex justify-center mt-8">
                    <div className="relative w-56 h-48 rounded-full overflow-hidden md:w-72 md:h-64">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold text-primary mb-4">{member.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex gap-3">
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={member.social.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <Card className="p-8 border border-border bg-white">
              <h3 className="text-xl font-bold text-foreground mb-4">Technical Expertise</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our engineering and construction teams bring decades of combined experience in structural design, project execution, and quality management.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary font-bold">•</span> Structural Engineering & Design</li>
                <li className="flex gap-2"><span className="text-primary font-bold">•</span> Project Management & Coordination</li>
                <li className="flex gap-2"><span className="text-primary font-bold">•</span> Geotechnical Analysis & Solutions</li>
                <li className="flex gap-2"><span className="text-primary font-bold">•</span> Environmental Assessment</li>
              </ul>
            </Card>
            <Card className="p-8 border border-border bg-white">
              <h3 className="text-xl font-bold text-foreground mb-4">Support Services</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                A dedicated support team ensures smooth project delivery through logistics, administration, and client relationship management.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary font-bold">•</span> Project Administration & Scheduling</li>
                <li className="flex gap-2"><span className="text-primary font-bold">•</span> Quality Assurance & Testing</li>
                <li className="flex gap-2"><span className="text-primary font-bold">•</span> Health & Safety Compliance</li>
                <li className="flex gap-2"><span className="text-primary font-bold">•</span> Client Services & Support</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Commitment</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Quality Excellence</h3>
                    <p className="text-white/80">Every project meets international standards and client specifications</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Safety First</h3>
                    <p className="text-white/80">Comprehensive safety protocols protecting our team and clients</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Sustainability</h3>
                    <p className="text-white/80">Environmentally responsible practices in all operations</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8 bg-white/10 border border-white/20 text-white">
              <h3 className="text-2xl font-bold mb-4">Partner with Us</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                When you choose IKS Nigeria Limited, you're partnering with a company dedicated to delivering excellence on every project. Let's build something great together.
              </p>
              <Link href="/contact">
                <Button className="bg-white text-primary hover:bg-white/90 w-full">
                  Start Your Project
                </Button>
              </Link>
            </Card>
          </div>
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
