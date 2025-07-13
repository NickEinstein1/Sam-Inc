import Link from 'next/link'
import { Calculator, Shield, TrendingUp, Brain, ArrowRight, CheckCircle } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Calculator,
      title: 'Tax Consultancy',
      description: 'Comprehensive tax planning, preparation, and compliance services for individuals and businesses.',
      features: [
        'Tax planning and strategy',
        'Tax return preparation',
        'IRS representation',
        'Tax compliance audits',
        'International tax services',
        'Estate and gift tax planning'
      ],
      href: '/services/tax-consultancy',
      color: 'primary'
    },
    {
      icon: Shield,
      title: 'Financial Auditing',
      description: 'Independent auditing services ensuring accuracy, compliance, and transparency in financial reporting.',
      features: [
        'Financial statement audits',
        'Internal control assessments',
        'Compliance auditing',
        'Risk assessment',
        'Fraud detection',
        'Regulatory compliance'
      ],
      href: '/services/financial-auditing',
      color: 'secondary'
    },
    {
      icon: TrendingUp,
      title: 'Data Analytics',
      description: 'Transform your business data into actionable insights for strategic decision-making.',
      features: [
        'Business intelligence',
        'Predictive analytics',
        'Data visualization',
        'Performance metrics',
        'Market analysis',
        'Custom reporting'
      ],
      href: '/services/data-analytics',
      color: 'accent'
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions to automate processes and enhance efficiency.',
      features: [
        'Process automation',
        'Machine learning models',
        'Natural language processing',
        'Computer vision',
        'Chatbot development',
        'AI strategy consulting'
      ],
      href: '/services/ai-solutions',
      color: 'primary'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Services
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Comprehensive solutions designed to meet your business needs with expertise, 
            reliability, and cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 card-shadow border border-gray-100"
              >
                <div className={`w-16 h-16 bg-${service.color}-600 rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className={`w-5 h-5 text-${service.color}-600 flex-shrink-0`} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  href={service.href}
                  className={`inline-flex items-center px-6 py-3 bg-${service.color}-600 hover:bg-${service.color}-700 text-white font-semibold rounded-lg transition-colors duration-200`}
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose SAM INC?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expertise, technology, and personalized service to deliver 
              exceptional results for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trusted Expertise</h3>
              <p className="text-gray-600">
                15+ years of experience with certified professionals delivering reliable results.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-600">
                500+ satisfied clients with 98% satisfaction rate and measurable business growth.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation Focus</h3>
              <p className="text-gray-600">
                Cutting-edge technology and AI solutions to keep your business ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how our services 
            can transform your business.
          </p>
          <Link href="/contact" className="btn-secondary">
            Schedule Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
