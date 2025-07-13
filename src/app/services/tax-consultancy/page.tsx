import Link from 'next/link'
import { Calculator, CheckCircle, ArrowRight, FileText, Users, Shield } from 'lucide-react'

export default function TaxConsultancyPage() {
  const services = [
    {
      title: 'Tax Planning & Strategy',
      description: 'Comprehensive tax planning to minimize liabilities and maximize savings.',
      features: ['Strategic tax planning', 'Year-round tax advice', 'Tax-efficient investments', 'Retirement planning']
    },
    {
      title: 'Tax Return Preparation',
      description: 'Professional preparation of individual and business tax returns.',
      features: ['Individual tax returns', 'Business tax returns', 'Amended returns', 'Multi-state filings']
    },
    {
      title: 'IRS Representation',
      description: 'Expert representation for IRS audits and tax disputes.',
      features: ['Audit representation', 'Appeals process', 'Penalty abatement', 'Installment agreements']
    },
    {
      title: 'Business Tax Services',
      description: 'Specialized tax services for businesses of all sizes.',
      features: ['Corporate tax planning', 'Payroll tax compliance', 'Sales tax consulting', 'Tax structure optimization']
    }
  ]

  const benefits = [
    'Maximize tax savings and deductions',
    'Ensure compliance with tax regulations',
    'Reduce risk of audits and penalties',
    'Strategic planning for future tax years',
    'Expert guidance on complex tax matters',
    'Peace of mind with professional support'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Calculator className="w-12 h-12 text-accent-200" />
                <h1 className="text-4xl md:text-5xl font-bold">Tax Consultancy</h1>
              </div>
              <p className="text-xl text-gray-100 leading-relaxed">
                Expert tax planning and compliance services designed to optimize your 
                financial strategy while ensuring full regulatory compliance.
              </p>
              <Link href="/contact" className="btn-secondary inline-flex items-center">
                Get Free Tax Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent-200 flex-shrink-0" />
                    <span className="text-gray-100">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Tax Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tax solutions tailored to your specific needs and circumstances.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 card-shadow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ensure accurate and efficient tax services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Consultation</h3>
              <p className="text-gray-600">
                Initial meeting to understand your tax situation and goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analysis</h3>
              <p className="text-gray-600">
                Thorough review of your financial documents and tax history.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategy</h3>
              <p className="text-gray-600">
                Development of customized tax strategy and recommendations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600">
                Execution of tax strategy and ongoing support throughout the year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Tax Services?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 card-shadow text-center">
                <FileText className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Experts</h3>
                <p className="text-gray-600">CPA-certified professionals with extensive experience</p>
              </div>
              <div className="bg-white rounded-xl p-6 card-shadow text-center">
                <Users className="w-12 h-12 text-secondary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Service</h3>
                <p className="text-gray-600">Dedicated support tailored to your specific needs</p>
              </div>
              <div className="bg-white rounded-xl p-6 card-shadow text-center">
                <Shield className="w-12 h-12 text-accent-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Guaranteed Accuracy</h3>
                <p className="text-gray-600">100% accuracy guarantee with error protection</p>
              </div>
              <div className="bg-white rounded-xl p-6 card-shadow text-center">
                <Calculator className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Maximum Savings</h3>
                <p className="text-gray-600">Identify all deductions and credits available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Optimize Your Taxes?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our tax experts and discover how much you could save.
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
