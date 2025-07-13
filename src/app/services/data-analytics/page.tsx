import Link from 'next/link'
import { TrendingUp, CheckCircle, ArrowRight, BarChart, PieChart, LineChart } from 'lucide-react'

export default function DataAnalyticsPage() {
  const services = [
    {
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable business insights and strategic recommendations.',
      features: ['Dashboard development', 'KPI tracking', 'Performance metrics', 'Executive reporting']
    },
    {
      title: 'Predictive Analytics',
      description: 'Advanced modeling to forecast trends and predict future business outcomes.',
      features: ['Forecasting models', 'Trend analysis', 'Risk prediction', 'Market insights']
    },
    {
      title: 'Data Visualization',
      description: 'Create compelling visual representations of complex data for better understanding.',
      features: ['Interactive dashboards', 'Custom charts', 'Real-time displays', 'Mobile-friendly views']
    },
    {
      title: 'Performance Analytics',
      description: 'Comprehensive analysis of business performance across all key metrics.',
      features: ['ROI analysis', 'Efficiency metrics', 'Benchmarking', 'Goal tracking']
    }
  ]

  const benefits = [
    'Make data-driven decisions with confidence',
    'Identify hidden patterns and opportunities',
    'Optimize operations and reduce costs',
    'Improve customer satisfaction and retention',
    'Gain competitive advantage through insights',
    'Increase revenue through better targeting'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-12 h-12 text-accent-200" />
                <h1 className="text-4xl md:text-5xl font-bold">Data Analytics</h1>
              </div>
              <p className="text-xl text-gray-100 leading-relaxed">
                Transform your business data into powerful insights that drive strategic 
                decisions, optimize operations, and unlock new growth opportunities.
              </p>
              <Link href="/contact" className="btn-secondary inline-flex items-center">
                Get Analytics Consultation
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
              Our Analytics Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive data analytics solutions tailored to unlock the full potential of your business data.
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
                      <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
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
              Our Analytics Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to transform your data into actionable business intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Collection</h3>
              <p className="text-gray-600">
                Gather and consolidate data from multiple sources and systems.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Processing</h3>
              <p className="text-gray-600">
                Clean, validate, and structure data for accurate analysis.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analysis</h3>
              <p className="text-gray-600">
                Apply advanced analytics techniques to uncover insights and patterns.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Visualization</h3>
              <p className="text-gray-600">
                Create compelling dashboards and reports for actionable insights.
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
                Why Choose Our Analytics Services?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-accent-600 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 card-shadow text-center">
                <BarChart className="w-12 h-12 text-accent-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Tools</h3>
                <p className="text-gray-600">Latest analytics platforms and visualization tools</p>
              </div>
              <div className="bg-white rounded-xl p-6 card-shadow text-center">
                <PieChart className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600">Data scientists with deep industry knowledge</p>
              </div>
              <div className="bg-white rounded-xl p-6 card-shadow text-center">
                <LineChart className="w-12 h-12 text-secondary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solutions</h3>
                <p className="text-gray-600">Tailored analytics solutions for your specific needs</p>
              </div>
              <div className="bg-white rounded-xl p-6 card-shadow text-center">
                <TrendingUp className="w-12 h-12 text-accent-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">Measurable improvements in business performance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
            Transform your business with powerful data analytics and actionable insights.
          </p>
          <Link href="/contact" className="btn-primary">
            Start Your Analytics Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
