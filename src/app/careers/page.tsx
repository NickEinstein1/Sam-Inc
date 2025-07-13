import Link from 'next/link'
import { Users, DollarSign, GraduationCap, Heart, Lightbulb, Award, ArrowRight, Clock } from 'lucide-react'

export default function CareersPage() {



  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and wellness programs'
    },
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Competitive salaries, performance bonuses, and profit-sharing opportunities'
    },
    {
      icon: GraduationCap,
      title: 'Professional Development',
      description: 'Continuing education support, certifications, and conference attendance'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible schedules, remote work options, and generous PTO policy'
    }
  ]

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do and celebrate achievements'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work together as a team and value diverse perspectives'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace new ideas and encourage creative problem-solving'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical standards'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Build your career with SAM INC and be part of a team that's shaping the future 
            of financial services and technology solutions. Discover opportunities to grow, 
            innovate, and make a meaningful impact.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a company that values your growth, innovation, and work-life balance 
              while making a real difference in our clients' success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center card-shadow">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work culture and define what it means to be part of the SAM INC team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center card-shadow">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Growing Team
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            While we don't have any current openings, we're always looking for talented
            individuals to join our team. Send us your resume and we'll keep you in mind
            for future opportunities!
          </p>
          <Link href="/contact" className="btn-secondary">
            Send Your Resume
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
