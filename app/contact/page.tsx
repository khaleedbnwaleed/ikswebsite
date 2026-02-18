'use client';

import React from "react"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useState } from 'react';
import Header from '@/components/header';
import { MessageCircle, Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Twitter, FileText } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setIsLoading(false);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="w-full">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">Contact Us</h1>
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
              Get in touch with IKS Nigeria Limited. We're ready to discuss your project requirements and provide expert solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Cards */}
            <Card className="p-8 border border-border bg-white">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Location</h3>
                  <p className="text-muted-foreground">No 33 Umar Abdullahi Tsauri Road, Unguwan Dosa, Kaduna, Nigeria</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border border-border bg-white">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
                  <a href="mailto:info@iksnigeria.ng" className="text-primary hover:underline">
                    iksnigerialimited@gmail.com
                  </a><br></br>
                  <a href="info@iksnigeria.ng" className="text-primary hover:underline">
                    info@iksnigeria.ng
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-8 border border-border bg-white">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">WhatsApp</h3>
                  <a href="https://wa.me/2348037260684" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Chat with us
                  </a>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 border border-border bg-white">
              <h2 className="text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
              {submitted ? (
                <div className="bg-primary/10 border border-primary rounded-lg p-6 text-center">
                  <p className="text-primary font-semibold mb-2">Message Sent Successfully!</p>
                  <p className="text-muted-foreground">Thank you for contacting IKS Nigeria Limited. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-foreground mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-foreground mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-2">
                      Service of Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a service</option>
                      <option value="building">General Building & Construction</option>
                      <option value="environmental">Environmental Management</option>
                      <option value="geotechnical">Geotechnical Services</option>
                      <option value="borehole">Borehole Drilling</option>
                      <option value="solar">Solar Installation</option>
                      <option value="transport">Transport & Logistics</option>
                      <option value="training">Training Services</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-primary text-white hover:bg-primary/90"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </Card>

            {/* Additional Information */}
            <div className="space-y-8">
              <Card className="p-8 border border-border bg-white">
                <h3 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Whether you have questions about our services, want to discuss your project, or need a quote, our team is here to help. Fill out the form and we'll respond promptly.
                </p>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-primary font-bold">→</span>
                    <p className="text-muted-foreground"><strong>Response Time:</strong> Within 24 hours</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold">→</span>
                    <p className="text-muted-foreground"><strong>Service Hours:</strong> Monday - Friday, 8 AM - 5 PM</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold">→</span>
                    <p className="text-muted-foreground"><strong>Urgent Matters:</strong> Contact via WhatsApp</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border border-border bg-white">
                <h3 className="text-2xl font-bold text-foreground mb-4">Why Contact Us</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-muted-foreground">Free consultation and project assessment</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-muted-foreground">Customized solutions for your needs</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-muted-foreground">Transparent pricing and estimates</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-muted-foreground">Professional and dedicated support team</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">Quick Contact Options</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-primary bg-white">
              <h3 className="text-2xl font-bold text-primary mb-4">Send an Email</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                For detailed inquiries and proposals, email us with your project details. We'll review and respond within one business day.
              </p>
              <a href="mailto:info@iksnigeria.ng">
                <Button className="w-full bg-primary text-white hover:bg-primary/90">
                  Email Us
                </Button>
              </a>
            </Card>

            <Card className="p-8 border-2 border-secondary bg-white">
              <h3 className="text-2xl font-bold text-secondary mb-4">Chat on WhatsApp</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                For quick questions and immediate responses, connect with us on WhatsApp. We're usually available for fast communication.
              </p>
              <a href="https://wa.me/2348037260684" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-secondary text-white hover:bg-secondary/90">
                  Start WhatsApp Chat
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">Our Location</h2>
          <Card className="border border-border overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31377.040302483863!2d7.418617326485793!3d10.568995895955446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b2b573c6321911%3A0xb6158b3969eb1ea5!2sUnguwan%20Dosa%20800283%2C%20Kaduna!5e0!3m2!1sen!2sng!4v1769350045493!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Discuss Your Project?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            We're excited to learn more about your requirements and how we can contribute to your success.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">IKS Nigeria</h3>
              <p className="text-white/70 text-sm mb-6">Construction & Engineering Excellence</p>
              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
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
                <a href="https://wa.me/2348037260684" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 mt-2 text-sm text-white/70 hover:text-white transition">
                  <MessageCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span>WhatsApp</span>
                </a>
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
