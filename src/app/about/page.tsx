import { CheckCircle, Award, Users, Target, Heart, Lightbulb } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We conduct business with the highest ethical standards and transparency in all our interactions.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every service we provide, ensuring superior quality and results.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and innovative solutions to stay ahead of industry trends.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We build long-term partnerships with our clients, understanding their unique needs and goals.'
    }
  ]

  const team = [
    {
      name: 'Samuel Wanyoike',
      role: 'CEO & Founder',
      experience: 'Visionary Leader',
      specialization: 'Strategic Business Development'
    }
  ]

  const achievements = [
    'Trusted by clients and companies across all industries',
    'Innovative technology solutions that drive efficiency',
    'Customized approaches tailored to unique business needs',
    'Proven track record of delivering optimal results',
    'Cutting-edge AI and data analytics capabilities',
    'Comprehensive service integration for maximum value'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About SAM INC
          </h1>
          <p className="text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
            Trusted by clients and companies worldwide, SAM INC delivers innovative
            financial and technology solutions. We combine deep expertise with
            cutting-edge innovation to provide optimal solutions that drive
            sustainable business success and growth.
          </p>
        </div>
      </section>

      {/* Our Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  SAM INC delivers innovative financial and technology solutions that are
                  trusted by clients and companies across all industries. Our approach
                  combines deep expertise with cutting-edge innovation to provide optimal
                  solutions tailored to each client's unique needs.
                </p>
                <p>
                  Through continuous innovation, we transform traditional services into
                  powerful business tools. Our tax strategies optimize financial outcomes,
                  auditing services ensure precision and compliance, data analytics unlock
                  hidden opportunities, and AI solutions revolutionize operational efficiency.
                </p>
                <p>
                  Trusted by clients and companies worldwide, we focus on delivering optimal
                  solutions that drive sustainable growth. Our commitment to innovation ensures
                  that every client receives forward-thinking strategies designed to exceed
                  expectations and achieve measurable success.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Innovation & Excellence</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Service Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Service Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four specialized service areas that work together to provide comprehensive
              business solutions for sustainable growth and success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white rounded-xl p-6 card-shadow text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tax Consultancy</h3>
              <p className="text-gray-600 leading-relaxed">Strategic tax planning, compliance, and optimization services to maximize savings and ensure regulatory adherence.</p>
            </div>

            <div className="bg-white rounded-xl p-6 card-shadow text-center">
              <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Financial Auditing</h3>
              <p className="text-gray-600 leading-relaxed">Independent auditing services ensuring accuracy, transparency, and compliance in financial reporting and operations.</p>
            </div>

            <div className="bg-white rounded-xl p-6 card-shadow text-center">
              <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Analytics</h3>
              <p className="text-gray-600 leading-relaxed">Transform raw data into actionable insights through advanced analytics, reporting, and business intelligence solutions.</p>
            </div>

            <div className="bg-white rounded-xl p-6 card-shadow text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Solutions</h3>
              <p className="text-gray-600 leading-relaxed">Cutting-edge artificial intelligence and automation solutions to optimize processes and enhance operational efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our relationships 
              with clients, partners, and team members.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 card-shadow text-center">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionary leader who founded SAM INC and drives our
              commitment to excellence and innovation.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="max-w-sm">
              {team.map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 text-center card-shadow">
                  <div className="w-32 h-32 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-3xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3 text-lg">{member.role}</p>
                  <p className="text-gray-600 mb-2">{member.experience}</p>
                  <p className="text-gray-500">{member.specialization}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Goals */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center lg:text-left">
              <Target className="w-16 h-16 text-accent-200 mx-auto lg:mx-0 mb-6" />
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-primary-100 leading-relaxed">
                To empower businesses with comprehensive financial services, innovative
                technology solutions, and expert guidance that drives sustainable growth
                and success in an ever-evolving marketplace.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <Lightbulb className="w-16 h-16 text-accent-200 mx-auto lg:mx-0 mb-6" />
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-primary-100 leading-relaxed">
                To be the leading provider of integrated financial and technology
                services, recognized for our innovation, integrity, and unwavering
                commitment to client success across all industries.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <Award className="w-16 h-16 text-accent-200 mx-auto lg:mx-0 mb-6" />
              <h2 className="text-3xl font-bold mb-6">Our Goals</h2>
              <div className="text-lg text-primary-100 leading-relaxed space-y-3">
                <p>• Deliver optimal solutions through innovative approaches</p>
                <p>• Pioneer cutting-edge technology in financial services</p>
                <p>• Provide customized strategies that exceed expectations</p>
                <p>• Build lasting partnerships trusted by clients worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Numbers that reflect our commitment to excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Client Retention</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Expert Team Members</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
