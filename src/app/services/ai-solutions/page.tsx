import Link from 'next/link'
import { Brain, CheckCircle, ArrowRight, Cpu, Zap, Bot } from 'lucide-react'

export default function AISolutionsPage() {
  const services = [
    {
      title: 'Process Automation',
      description: 'Intelligent automation solutions to streamline operations and reduce manual work.',
      features: ['Workflow automation', 'Document processing', 'Task scheduling', 'Quality control']
    },
    {
      title: 'Machine Learning Models',
      description: 'Custom ML models designed to solve specific business challenges and optimize performance.',
      features: ['Predictive modeling', 'Classification systems', 'Recommendation engines', 'Anomaly detection']
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.',
      features: ['Text analytics', 'Sentiment analysis', 'Chatbot development', 'Document extraction']
    },
    {
      title: 'Computer Vision',
      description: 'AI-powered visual recognition and analysis for enhanced decision-making.',
      features: ['Image recognition', 'Quality inspection', 'Pattern detection', 'Visual analytics']
    }
  ]

  const benefits = [
    'Automate repetitive tasks and increase efficiency',
    'Reduce operational costs and human error',
    'Gain insights from unstructured data',
    'Improve customer experience and satisfaction',
    'Scale operations without proportional cost increases',
    'Stay competitive with cutting-edge technology'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Brain className="w-12 h-12 text-accent-200" />
                <h1 className="text-4xl md:text-5xl font-bold">AI Solutions</h1>
              </div>
              <p className="text-xl text-gray-100 leading-relaxed">
                Harness the power of artificial intelligence to automate processes, 
                enhance decision-making, and drive innovation across your organization.
              </p>
              <Link href="/contact" className="btn-secondary inline-flex items-center">
                Explore AI Solutions
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
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence solutions designed to transform your business operations.
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
              Our AI Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A strategic approach to implementing AI solutions that deliver measurable business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-600">
                Evaluate your current processes and identify AI opportunities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Design</h3>
              <p className="text-gray-600">
                Create custom AI solutions tailored to your specific requirements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Development</h3>
              <p className="text-gray-600">
                Build and train AI models using the latest technologies and frameworks.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Deployment</h3>
              <p className="text-gray-600">
                Implement solutions with ongoing monitoring and optimization.
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
                Why Choose Our AI Solutions?
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
                <Cpu className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Latest Technology</h3>
                <p className="text-gray-600">Cutting-edge AI frameworks and cloud platforms</p>
              </div>
              <div className="bg-white rounded-xl p-6 card-shadow text-center">
                <Brain className="w-12 h-12 text-secondary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Expertise</h3>
                <p className="text-gray-600">Team of experienced AI engineers and data scientists</p>
              </div>
              <div className="bg-white rounded-xl p-6 card-shadow text-center">
                <Zap className="w-12 h-12 text-accent-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Deployment</h3>
                <p className="text-gray-600">Fast implementation with minimal business disruption</p>
              </div>
              <div className="bg-white rounded-xl p-6 card-shadow text-center">
                <Bot className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable Solutions</h3>
                <p className="text-gray-600">AI systems that grow and adapt with your business</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform with AI?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Discover how artificial intelligence can revolutionize your business operations and drive growth.
          </p>
          <Link href="/contact" className="btn-secondary">
            Get AI Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
