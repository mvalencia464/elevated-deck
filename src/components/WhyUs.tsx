import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Shield, 
  Award, 
  Users, 
  Clock, 
  Star, 
  CheckCircle, 
  Hammer, 
  TrendingUp, 
  Home,
  DollarSign,
  PhoneCall
} from 'lucide-react';

export default function WhyUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/68d3710cc508999b84017078.png" 
                alt="Elevated Deck Co. Logo" 
                className="h-16 w-auto"
                style={{ filter: 'brightness(0) saturate(100%) invert(55%) sepia(85%) saturate(2029%) hue-rotate(4deg) brightness(94%) contrast(89%)' }}
              />
            </Link>
            <div className="flex items-center space-x-6">
              <Link to="/" className="flex items-center space-x-2 text-stone-700 hover:text-orange-700 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                <span className="font-medium">Back to Home</span>
              </Link>
              <a href="tel:+15551234567" className="bg-orange-700 text-white px-4 py-2 rounded-lg hover:bg-orange-800 transition-colors flex items-center space-x-2">
                <PhoneCall className="h-4 w-4" />
                <span className="font-semibold">(555) 123-DECK</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-stone-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-stone-800 mb-6">
            Why Choose <span className="text-orange-700">Elevated Deck Co?</span>
          </h1>
          <p className="text-xl text-stone-600 mb-8 leading-relaxed">
            After 15+ years and 500+ deck transformations, here's what sets us apart from every other deck contractor in the area.
          </p>
          <div className="flex items-center justify-center space-x-8 text-orange-700">
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm text-stone-600">Decks Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm text-stone-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm text-stone-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* The Real Problem */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-8 text-center">
              The Hidden Cost of Choosing the Wrong Deck Contractor
            </h2>
            <div className="bg-red-50 border border-red-200 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-red-800 mb-4">Here's What Happens When You Don't Choose Carefully:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-red-700"><strong>Safety Hazards:</strong> Unlicensed contractors cut corners on structural integrity, putting your family at risk</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-red-700"><strong>Code Violations:</strong> Non-compliant work leads to failed inspections and expensive do-overs</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-red-700"><strong>Hidden Costs:</strong> "Low" bids turn into expensive nightmares with change orders and delays</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-red-700"><strong>Poor Materials:</strong> Cheap lumber and hardware that warps, splits, and fails within 2-3 years</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-red-700"><strong>No Warranty:</strong> When problems arise, fly-by-night contractors disappear</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-red-700"><strong>Decreased Home Value:</strong> Poor workmanship actually lowers your property value</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Solution */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-8 text-center">
              The Elevated Deck Co. Difference
            </h2>
            <p className="text-xl text-stone-600 text-center mb-12 max-w-3xl mx-auto">
              We've spent 15+ years perfecting our process so you never have to worry about these problems. Here's exactly why 500+ families trust us with their biggest outdoor investment:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Licensing & Insurance */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-stone-200">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3 text-center">Fully Licensed & Insured</h3>
                <p className="text-stone-600 text-center mb-4">
                  State licensed contractor with $2M liability insurance. Your project is protected from day one.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-green-800 text-sm font-medium">✓ State Contractor License #123456</p>
                  <p className="text-green-800 text-sm font-medium">✓ $2M General Liability Insurance</p>
                  <p className="text-green-800 text-sm font-medium">✓ Worker's Compensation Coverage</p>
                </div>
              </div>

              {/* Experience */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-stone-200">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3 text-center">15+ Years of Expertise</h3>
                <p className="text-stone-600 text-center mb-4">
                  We've seen every challenge and perfected every technique. No learning curve on your project.
                </p>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                  <p className="text-orange-800 text-sm font-medium">✓ 500+ Successful Projects</p>
                  <p className="text-orange-800 text-sm font-medium">✓ Master Craftsmen Team</p>
                  <p className="text-orange-800 text-sm font-medium">✓ Continuous Training & Certification</p>
                </div>
              </div>

              {/* Quality Materials */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-stone-200">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3 text-center">Premium Materials Only</h3>
                <p className="text-stone-600 text-center mb-4">
                  We partner with industry leaders to ensure your deck lasts decades, not years.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-green-800 text-sm font-medium">✓ Premium Pressure-Treated Lumber</p>
                  <p className="text-green-800 text-sm font-medium">✓ Stainless Steel Hardware</p>
                  <p className="text-green-800 text-sm font-medium">✓ Weather-Resistant Finishes</p>
                </div>
              </div>

              {/* Customer Service */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-stone-200">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3 text-center">White-Glove Service</h3>
                <p className="text-stone-600 text-center mb-4">
                  From first call to final walkthrough, we treat your property like our own family's home.
                </p>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                  <p className="text-purple-800 text-sm font-medium">✓ Daily Progress Updates</p>
                  <p className="text-purple-800 text-sm font-medium">✓ Clean Job Site Daily</p>
                  <p className="text-purple-800 text-sm font-medium">✓ Direct Access to Project Manager</p>
                </div>
              </div>

              {/* Speed & Efficiency */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-stone-200">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3 text-center">14-Day Completion</h3>
                <p className="text-stone-600 text-center mb-4">
                  Our streamlined process means your deck is ready for summer entertaining in just 2 weeks.
                </p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-red-800 text-sm font-medium">✓ Detailed Project Timeline</p>
                  <p className="text-red-800 text-sm font-medium">✓ Weather Contingency Plans</p>
                  <p className="text-red-800 text-sm font-medium">✓ On-Time Completion Guarantee</p>
                </div>
              </div>

              {/* Warranty */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-stone-200">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3 text-center">10-Year Warranty</h3>
                <p className="text-stone-600 text-center mb-4">
                  We stand behind our work with the industry's best warranty. Your investment is protected.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <p className="text-yellow-800 text-sm font-medium">✓ 10-Year Structural Warranty</p>
                  <p className="text-yellow-800 text-sm font-medium">✓ 5-Year Materials Warranty</p>
                  <p className="text-yellow-800 text-sm font-medium">✓ 1-Year Finish Warranty</p>
                </div>
              </div>
            </div>
          </div>

          {/* ROI Section */}
          <div className="mb-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
                Your Deck Investment Pays for Itself
              </h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                A professionally built deck from Elevated Deck Co. doesn't just improve your lifestyle – it significantly increases your home's value.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-stone-800 mb-2">85% ROI</h3>
                <p className="text-stone-600">Average return on investment for professional deck construction</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Home className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-stone-800 mb-2">$25K+ Value</h3>
                <p className="text-stone-600">Average home value increase from our deck installations</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Clock className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-stone-800 mb-2">30+ Years</h3>
                <p className="text-stone-600">Lifespan of our professionally built decks with proper maintenance</p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-8 text-center">
              What Our Clients Say About Choosing Us
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-stone-200">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face" 
                    alt="Sarah Thompson"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold text-stone-800">Sarah Thompson</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-stone-700 leading-relaxed">
                  "We got quotes from 5 different contractors. Elevated Deck Co. wasn't the cheapest, but they were the only ones who explained exactly what they would do and why. The quality difference is obvious - our neighbors are constantly asking who built our deck!"
                </blockquote>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-stone-200">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face" 
                    alt="Mike Chen"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold text-stone-800">Mike Chen</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-stone-700 leading-relaxed">
                  "After our neighbor's deck was built by another company and started sagging within a year, we knew we needed to choose carefully. Elevated Deck Co.'s 10-year warranty and track record gave us confidence. Three years later, our deck still looks brand new!"
                </blockquote>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 mb-16">
            <div className="text-center">
              <CheckCircle className="h-16 w-16 text-orange-600 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
                Our "Love It or We Rebuild It" Promise
              </h2>
              <p className="text-xl text-stone-700 mb-6 max-w-3xl mx-auto">
                We're so confident in our work that if you're not completely satisfied with your deck at final walkthrough, we'll tear it down and rebuild it at no charge. That's how sure we are that you'll love working with us.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-orange-600" />
                  <span className="font-medium text-stone-800">100% Satisfaction Guaranteed</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-orange-600" />
                  <span className="font-medium text-stone-800">10-Year Comprehensive Warranty</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-orange-600" />
                  <span className="font-medium text-stone-800">Licensed, Bonded & Insured</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-stone-800 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience the Elevated Deck Co. Difference?
            </h2>
            <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
              Join 500+ families who chose quality, reliability, and peace of mind for their deck investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+15551234567" 
                className="bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-800 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <PhoneCall className="h-5 w-5" />
                <span>Call (555) 123-DECK</span>
              </a>
              <Link 
                to="/" 
                className="bg-white text-stone-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-stone-100 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Get Free Consultation</span>
              </Link>
            </div>
            <p className="text-stone-400 text-sm mt-4">
              Free consultation • 3D design preview • No obligation
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}