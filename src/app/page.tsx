import Link from 'next/link'
import { ArrowRight, CheckCircle, TrendingUp, Shield, Brain, Calculator } from 'lucide-react'

export default function Home() {
  const services = [
    {
      icon: Calculator,
      title: 'Tax Consultancy',
      description: 'Expert tax planning and compliance services to optimize your financial strategy.',
      href: '/services/tax-consultancy'
    },
    {
      icon: Shield,
      title: 'Financial Auditing',
      description: 'Comprehensive auditing services ensuring accuracy and regulatory compliance.',
      href: '/services/financial-auditing'
    },
    {
      icon: TrendingUp,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights for informed business decisions.',
      href: '/services/data-analytics'
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions to automate and optimize operations.',
      href: '/services/ai-solutions'
    }
  ]

  const features = [
    'Certified professionals with diverse experience',
    'Customized solutions for your business needs',
    '24/7 support and consultation',
    'Proven track record with satisfied clients',
    'Latest technology and industry best practices',
    'Competitive pricing with transparent billing'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Professional
                <span className="block text-accent-200">Financial Services</span>
                You Can Trust
              </h1>
              <p className="text-xl text-gray-100 leading-relaxed">
                SAM INC delivers comprehensive tax consultancy, financial auditing, 
                data analytics, and AI solutions to drive your business forward with 
                confidence and precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-secondary">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Why Choose SAM INC?</h3>
                <div className="space-y-4">
                  {features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent-200 flex-shrink-0" />
                      <span className="text-gray-100">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to meet your business needs with 
              expertise, reliability, and cutting-edge technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-white rounded-xl p-6 card-shadow border border-gray-100 hover:border-primary-200 transition-all duration-300"
              >
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-primary-600 group-hover:text-primary-700">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get started with a free consultation and discover how SAM INC can 
            help you achieve your financial and business goals.
          </p>
          <Link href="/contact" className="btn-secondary">
            Schedule Free Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
