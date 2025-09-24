import React, { useState } from 'react';
import { useEffect } from 'react';
import { Phone, Mail, MapPin, Star, ArrowRight, CheckCircle, Camera, Hammer, Users, Clock, Play } from 'lucide-react';

function App() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img 
                src="https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68d3710cc508999b84017078.png" 
                alt="Elevated Deck Co. Logo" 
                className={`h-16 w-auto transition-all duration-300 ${
                  isScrolled ? 'brightness-0 saturate-100' : ''
                }`}
                style={isScrolled ? { filter: 'brightness(0) saturate(100%) invert(55%) sepia(85%) saturate(2029%) hue-rotate(4deg) brightness(94%) contrast(89%)' } : {}}
              />
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#gallery" className={`transition-colors font-medium ${
                isScrolled ? 'text-stone-700 hover:text-orange-700' : 'text-white/90 hover:text-white'
              }`}>Gallery</a>
              <a href="#process" className={`transition-colors font-medium ${
                isScrolled ? 'text-stone-700 hover:text-orange-700' : 'text-white/90 hover:text-white'
              }`}>Process</a>
              <a href="#contact" className={`transition-colors font-medium ${
                isScrolled ? 'text-stone-700 hover:text-orange-700' : 'text-white/90 hover:text-white'
              }`}>Contact</a>
              <a href="tel:+15551234567" className="flex items-center space-x-2 bg-orange-700 text-white px-4 py-2 rounded-lg hover:bg-orange-800 transition-colors">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">(555) 123-DECK</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68d34d33ef40ca44a9cbba9f.webp)'}}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Subtle Logo Watermark */}
        <div className="absolute bottom-8 right-8 opacity-20 pointer-events-none">
          <img 
            src="https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68d3710cc508999b84017078.png" 
            alt="Elevated Deck Co. Watermark" 
            className="h-16 w-auto filter brightness-0 invert"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Deck Should Be Your Pride,
              <span className="text-orange-400 block">Not Your Embarrassment</span>
            </h1>
            <p className="text-xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
              Tired of avoiding your backyard because your deck is falling apart? Embarrassed when neighbors see your unsafe, outdated deck? See how we transformed this dangerous eyesore into a stunning family gathering space - and we can do the same for you in just 2 weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowContactForm(true)}
                className="bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Show Me My Deck's Potential
              </button>
              <a 
                href="tel:+15551234567" 
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Get Free Safety Inspection</span>
              </a>
            </div>
            <p className="text-sm text-white/70 mt-4">
              ⚡ Only 3 deck transformations available this month • Free consultation expires in 48 hours
            </p>
          </div>
        </div>
      </section>

      {/* Transformation Video Section */}
      <section className="py-16 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              The 2-Week Transformation That Changes Everything
            </h2>
            <p className="text-xl text-stone-300 max-w-2xl mx-auto">
              Watch this family go from hiding their backyard to hosting every neighborhood BBQ.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
              {!showVideo ? (
                <div className="relative">
                  <img 
                    src="https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68d2d3eeee4bdc822af1836b.webp" 
                    alt="Deck transformation preview"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button
                      onClick={() => setShowVideo(true)}
                      className="bg-orange-700 hover:bg-orange-800 text-white p-6 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                    >
                      <Play className="h-12 w-12 ml-1" />
                    </button>
                  </div>
                </div>
              ) : (
                <video 
                  controls 
                  autoPlay 
                  className="w-full h-96 object-cover"
                  poster="https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68d2d3eeee4bdc822af1836b.webp"
                >
                  <source src="https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68d2d3c0e6849c3d8aa2adfb.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-4">
              The Transformation That Made This Family Fall in Love with Their Backyard Again
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              "We went from never using our backyard to hosting every family gathering. Our kids finally have a safe place to play, and our home value increased by $25,000!" - The Johnson Family
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Before */}
            <div className="relative group">
              <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold z-10">
                BEFORE
              </div>
              <img 
                src="https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68d2d3fb26b7f76ccf593674.png" 
                alt="Old deck before renovation"
                className="w-full h-96 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300"
              />
              <div className="absolute inset-0 bg-black/20 rounded-xl group-hover:bg-black/10 transition-all duration-300"></div>
            </div>

            {/* After */}
            <div className="relative group">
              <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold z-10">
                AFTER
              </div>
              <img 
                src="https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68d2d3eeee4bdc822af1836b.webp" 
                alt="Beautiful new deck after construction"
                className="w-full h-96 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl"></div>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={() => setShowContactForm(true)}
              className="bg-stone-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-stone-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>Get My Free Deck Transformation Quote</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-4">
              The Quality That Makes Neighbors Jealous
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              After 15 years and 500+ deck transformations, we know exactly what makes a deck the neighborhood showpiece.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative group">
              <img 
                src="https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68d2d3ee9c409919e93e8fdd.jpeg" 
                alt="Aerial drone view of completed deck"
                className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <Camera className="h-5 w-5 mb-1" />
                  <p className="text-sm font-semibold">Aerial Overview</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <img 
                src="https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68d2d3ee0f4271d052bb64cc.webp" 
                alt="Premium deck railing detail"
                className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <Camera className="h-5 w-5 mb-1" />
                  <p className="text-sm font-semibold">Premium Railings</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <img 
                src="https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68d2d3ee4b6576a24812184d.webp" 
                alt="Close-up of deck board construction"
                className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <Camera className="h-5 w-5 mb-1" />
                  <p className="text-sm font-semibold">Quality Craftsmanship</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-4">
              From Embarrassing to Amazing in Just 14 Days
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Our proven 4-step process has transformed 500+ backyards. Here's exactly how we'll transform yours:
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <Users className="h-8 w-8 text-orange-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-stone-800 mb-2">Free Safety Inspection</h3>
              <p className="text-stone-600">We identify safety issues and show you exactly what your dream deck will look like (Day 1)</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <CheckCircle className="h-8 w-8 text-orange-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-stone-800 mb-2">3D Design & Approval</h3>
              <p className="text-stone-600">See your exact deck before we build it. No surprises, just your perfect outdoor space (Days 2-3)</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <Hammer className="h-8 w-8 text-orange-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-stone-800 mb-2">Licensed Construction</h3>
              <p className="text-stone-600">Fully licensed, bonded & insured team builds your deck with premium materials (Days 4-12)</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <Star className="h-8 w-8 text-orange-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-stone-800 mb-2">Love It Guarantee</h3>
              <p className="text-stone-600">Final walkthrough with our "Love it or we rebuild it free" guarantee (Day 14)</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-stone-800 mb-6">🏆 Why 500+ Families Trust Us With Their Dream Deck</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="h-8 w-8 text-orange-700" />
                  </div>
                  <p className="font-semibold text-stone-800">15+ Years</p>
                  <p className="text-sm text-stone-600">Experience</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Hammer className="h-8 w-8 text-orange-700" />
                  </div>
                  <p className="font-semibold text-stone-800">500+ Decks</p>
                  <p className="text-sm text-stone-600">Built</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-8 w-8 text-orange-700" />
                  </div>
                  <p className="font-semibold text-stone-800">Fully Licensed</p>
                  <p className="text-sm text-stone-600">& Insured</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="h-8 w-8 text-orange-700" />
                  </div>
                  <p className="font-semibold text-stone-800">10-Year</p>
                  <p className="text-sm text-stone-600">Warranty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              Real Families, Real Transformations
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face" 
                  alt="Sarah & Mike Thompson"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="text-left">
                  <p className="font-semibold text-stone-800">Sarah & Mike Thompson</p>
                  <p className="text-stone-600 text-sm">Deck Transformation - Suburban Heights</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-orange-600 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-lg text-stone-700 leading-relaxed text-left">
                "We went from being embarrassed about our backyard to hosting every family BBQ. Our old deck was actually dangerous - now our kids have a safe place to play and our home value went up $25,000. Best investment we ever made!"
              </blockquote>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face" 
                  alt="Jennifer & David Chen"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="text-left">
                  <p className="font-semibold text-stone-800">Jennifer & David Chen</p>
                  <p className="text-stone-600 text-sm">Multi-Level Deck - Riverside</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-orange-600 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-lg text-stone-700 leading-relaxed text-left">
                "The team was incredibly professional and the quality is outstanding. Our neighbors constantly ask who built our deck because it looks so amazing. We finally have the outdoor entertaining space we always dreamed of!"
              </blockquote>
            </div>
          </div>
          
          <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-stone-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-orange-700">500+</p>
              <p className="text-stone-600">Decks Built</p>
            </div>
            <div className="bg-stone-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-orange-700">15+</p>
              <p className="text-stone-600">Years Experience</p>
            </div>
            <div className="bg-stone-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-orange-700">100%</p>
              <p className="text-stone-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-stone-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Stop Hiding Your Backyard - Get the Deck Your Family Deserves
          </h2>
          <p className="text-xl text-stone-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Don't let another season pass with a deck that embarrasses you. Join 500+ families who transformed their backyards into their favorite space.
          </p>
          
          {/* Urgency Banner */}
          <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/40 rounded-xl p-6 mb-10 max-w-lg mx-auto backdrop-blur-sm">
            <div className="flex items-center justify-center mb-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse mr-2"></div>
              <p className="text-orange-200 font-bold text-lg">🔥 Limited Time: Only 3 spots left this month</p>
            </div>
            <p className="text-orange-300 font-medium">Free consultation expires in 48 hours</p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => setShowContactForm(true)}
              className="bg-orange-700 text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-orange-800 transition-all duration-300 inline-flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 border-2 border-orange-600"
            >
              <span>Book My Free Deck Transformation Consultation</span>
              <ArrowRight className="h-6 w-6" />
            </button>
            <a 
              href="tel:+15551234567" 
              className="bg-transparent text-white px-10 py-5 rounded-xl text-lg font-bold border-2 border-white/80 hover:bg-white hover:text-stone-800 transition-all duration-300 inline-flex items-center justify-center space-x-3 hover:shadow-xl transform hover:-translate-y-1"
            >
              <Phone className="h-6 w-6" />
              <span>(555) 123-DECK</span>
            </a>
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-stone-400">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium">Love it or we rebuild it free</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <Star className="h-4 w-4 text-white fill-current" />
              </div>
              <span className="text-sm font-medium">10-year warranty</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium">Fully licensed & insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-4">
              Ready to Fall in Love with Your Backyard?
            </h2>
            <p className="text-xl text-stone-600">
              Get your free deck transformation consultation and see exactly what your backyard could become.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-stone-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-orange-700" />
                  <div>
                    <p className="font-semibold text-stone-800">Phone</p>
                    <a href="tel:+15551234567" className="text-stone-600 hover:text-orange-700 transition-colors">(555) 123-DECK</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-orange-700" />
                  <div>
                    <p className="font-semibold text-stone-800">Email</p>
                    <a href="mailto:info@elevateddeckco.com" className="text-stone-600 hover:text-orange-700 transition-colors">info@elevateddeckco.com</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-orange-700" />
                  <div>
                    <p className="font-semibold text-stone-800">Service Area</p>
                    <p className="text-stone-600">Greater Metro Area & Surrounding Counties</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-orange-700" />
                  <div>
                    <p className="font-semibold text-stone-800">Hours</p>
                    <p className="text-stone-600">Mon-Fri: 7AM-6PM | Sat: 8AM-4PM</p>
                  </div>
                </div>
              </div>

            {/* Testimonial Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg mt-8">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face" 
                  alt="Robert & Lisa Martinez"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold text-stone-800">Robert & Lisa Martinez</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-orange-600 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-stone-700 leading-relaxed">
                "The consultation was thorough and professional. They showed us exactly what our deck would look like before starting. The whole process was seamless and the results exceeded our expectations!"
              </blockquote>
            </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-stone-800 mb-6">Request a Quote</h3>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                <p className="text-green-800 text-sm font-medium">🎯 Free consultation includes 3D design preview!</p>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-700 focus:border-orange-700 outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-700 focus:border-orange-700 outline-none transition-colors"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-700 focus:border-orange-700 outline-none transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-700 focus:border-orange-700 outline-none transition-colors"
                />
                <textarea
                  placeholder="Tell us about your deck project..."
                  rows={4}
                  className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-700 focus:border-orange-700 outline-none transition-colors resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-orange-700 text-white py-3 rounded-lg font-semibold hover:bg-orange-800 transition-colors"
                >
                  Get My Free 3D Design Preview
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img 
                src="https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68d3710cc508999b84017078.png" 
                alt="Elevated Deck Co. Logo" 
                className="h-8 w-auto"
              />
            </div>
            <div className="text-stone-400 text-center md:text-right">
              <p>&copy; 2025 Elevated Deck Co. All rights reserved.</p>
              <p className="mt-1">Licensed • Bonded • Insured</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-stone-800">Book Your Free Consultation</h3>
              <button
                onClick={() => setShowContactForm(false)}
                className="text-stone-400 hover:text-stone-600 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
              <p className="text-orange-800 text-sm">🎯 Includes free 3D design preview & safety inspection</p>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-700 focus:border-orange-700 outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-700 focus:border-orange-700 outline-none transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-700 focus:border-orange-700 outline-none transition-colors"
              />
              <input
                type="text"
                placeholder="Project Address"
                className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-700 focus:border-orange-700 outline-none transition-colors"
              />
              <textarea
                placeholder="Describe your deck project..."
                rows={3}
                className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-700 focus:border-orange-700 outline-none transition-colors resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-orange-700 text-white py-3 rounded-lg font-semibold hover:bg-orange-800 transition-colors"
              >
                Book My Free Consultation Now
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;