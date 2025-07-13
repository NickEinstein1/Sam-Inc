import Link from 'next/link'
import { Shield, CheckCircle, ArrowRight, FileText, Users, Award } from 'lucide-react'

export default function FinancialAuditingPage() {
  const services = [
    {
      title: 'Financial Statement Audits',
      description: 'Comprehensive audits of financial statements to ensure accuracy and compliance.',
      features: ['Independent verification', 'GAAP compliance review', 'Risk assessment', 'Management letter recommendations']
    },
    {
      title: 'Internal Control Assessment',
      description: 'Evaluation of internal controls to identify weaknesses and improvement opportunities.',
      features: ['Control testing', 'Process documentation', 'Risk identification', 'Remediation planning']
    },
    {
      title: 'Compliance Auditing',
      description: 'Specialized audits to ensure adherence to regulatory requirements and standards.',
      features: ['Regulatory compliance', 'Industry standards review', 'Policy adherence', 'Documentation verification']
    },
    {
      title: 'Fraud Detection & Prevention',
      description: 'Advanced techniques to identify and prevent fraudulent activities.',
      features: ['Forensic analysis', 'Red flag identification', 'Prevention strategies', 'Investigation support']
    }
  ]

  const benefits = [
    'Ensure financial statement accuracy and reliability',
    'Meet regulatory compliance requirements',
    'Identify operational inefficiencies and risks',
    'Enhance stakeholder confidence and trust',
    'Improve internal controls and processes',
    'Protect against fraud and financial misconduct'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Shield className="w-12 h-12 text-accent-200" />
                <h1 className="text-4xl md:text-5xl font-bold">Financial Auditing</h1>
              </div>
              <p className="text-xl text-gray-100 leading-relaxed">
                Independent and comprehensive financial auditing services that ensure accuracy, 
                transparency, and regulatory compliance while building stakeholder confidence.
              </p>
              <Link href="/contact" className="btn-secondary inline-flex items-center">
                Get Audit Consultation
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
              Our Auditing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive auditing solutions designed to meet your specific compliance and assurance needs.
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
                      <CheckCircle className="w-5 h-5 text-secondary-600 flex-shrink-0" />
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
              Our Audit Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic and thorough approach to ensure comprehensive and accurate auditing results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Planning</h3>
              <p className="text-gray-600">
                Comprehensive audit planning and risk assessment to define scope and objectives.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fieldwork</h3>
              <p className="text-gray-600">
                Detailed examination of financial records, controls, and supporting documentation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analysis</h3>
              <p className="text-gray-600">
                Thorough analysis of findings and identification of any issues or recommendations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reporting</h3>
              <p className="text-gray-600">
                Comprehensive audit report with findings, recommendations, and management responses.
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
                Why Choose Our Auditing Services?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-secondary-600 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 card-shadow text-center">
                <FileText className="w-12 h-12 text-secondary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Auditors</h3>
                <p className="text-gray-600">Licensed CPAs with extensive auditing experience</p>
              </div>
              <div className="bg-white rounded-xl p-6 card-shadow text-center">
                <Users className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Expertise</h3>
                <p className="text-gray-600">Deep knowledge across multiple industries and sectors</p>
              </div>
              <div className="bg-white rounded-xl p-6 card-shadow text-center">
                <Shield className="w-12 h-12 text-accent-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                <p className="text-gray-600">Rigorous quality control and peer review processes</p>
              </div>
              <div className="bg-white rounded-xl p-6 card-shadow text-center">
                <Award className="w-12 h-12 text-secondary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">Track record of successful audits and client satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for a Professional Audit?
          </h2>
          <p className="text-xl text-secondary-100 mb-8 max-w-2xl mx-auto">
            Contact our certified auditors today to discuss your auditing needs and ensure compliance.
          </p>
          <Link href="/contact" className="btn-primary">
            Schedule Audit Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
