'use client'

import { useState } from 'react'
import { Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: ['123 Business Avenue, Suite 100', 'Seattle, Washington 98101', 'United States']
    },

    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['info@saminc.com', 'support@saminc.com', 'careers@saminc.com']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Closed']
    }
  ]

  const services = [
    'Tax Consultancy',
    'Financial Auditing',
    'Data Analytics',
    'AI Solutions',
    'General Inquiry'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="mobile-hero-text mb-6">
            Contact Us
          </h1>
          <p className="mobile-subtitle text-gray-100 max-w-3xl mx-auto">
            Ready to transform your business? Get in touch with our experts for a
            free consultation and discover how SAM INC can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl mobile-card card-shadow">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-700">Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us about your needs and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center"
                >
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We're here to help you succeed. Whether you need immediate assistance 
                  or want to discuss your long-term business goals, our team of experts 
                  is ready to provide the guidance you need.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 card-shadow">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                    </div>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact */}
              <div className="bg-primary-600 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
                <p className="text-primary-100 mb-4">
                  For urgent matters or immediate consultation, please send us an email
                  or use our contact form above. We respond to all inquiries within 24 hours.
                </p>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent-200" />
                  <span className="text-xl font-semibold">info@saminc.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600">
              Located in the heart of the business district, easily accessible by public transport.
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Interactive Map</h3>
              <p className="text-gray-500">
                123 Business Avenue, Suite 100<br />
                Seattle, Washington 98101
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 card-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How quickly can you respond to my inquiry?
              </h3>
              <p className="text-gray-600">
                We typically respond to all inquiries within 24 hours during business days. 
                For urgent matters, please call our hotline for immediate assistance.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 card-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer free consultations?
              </h3>
              <p className="text-gray-600">
                Yes! We offer free initial consultations to understand your needs and 
                explain how our services can benefit your business.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 card-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What industries do you serve?
              </h3>
              <p className="text-gray-600">
                We serve businesses across all industries, from startups to Fortune 500 
                companies, with customized solutions for each sector.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 card-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can you work with remote clients?
              </h3>
              <p className="text-gray-600">
                Absolutely! We work with clients nationwide and internationally, 
                offering secure remote consultations and digital service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
