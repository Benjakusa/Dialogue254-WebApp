import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MessagesSquare, BookOpen, Users, Award, Scale, Calendar, MapPin, ArrowRight } from 'lucide-react'
import Img from '../components/Img'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.webp'
import image5 from '../assets/image5.webp'
import image6 from '../assets/image6.webp'

const pillars = [
  {
    title: 'Structured Dialogues',
    subtitle: 'Pillar 1',
    content: 'We facilitate safe, moderated conversations that bring together youth, local administrators, elders, and business owners. Topics range from "Youth and police relations" to "How to share campaign messages without hate speech." Each dialogue ends with a community action commitment signed by all parties.',
    example: 'In Ruiru, a dialogue between boda boda riders and the local transport department led to a designated parking zone, reducing daily fights.',
    icon: MessagesSquare,
    image: image1,
  },
  {
    title: 'Civic Education Programs',
    subtitle: 'Pillar 2',
    content: 'Our flagship "Sheria na Wewe" (Law & You) workshops break down the Constitution, the Public Finance Management Act, and the County Governments Act into digestible, practical knowledge. Participants learn how to read a county budget, how to submit a memorandum to a committee, and how to recall non-performing MCAs.',
    example: 'Over 2,000 young people have completed the 2-day module.',
    icon: BookOpen,
    image: image2,
  },
  {
    title: 'Citizen / Community Engagements',
    subtitle: 'Pillar 3',
    content: 'We don\'t wait for invitations. Our engagement team goes to markets, bus stops, churches, and social media spaces to listen and document what matters to ordinary people. We then organize town halls where citizens question their elected leaders directly.',
    example: 'In 2024, we facilitated 12 such town halls with an average attendance of 150 people.',
    icon: Users,
    image: image3,
  },
  {
    title: 'Youth Leadership & Inclusion',
    subtitle: 'Pillar 4',
    content: 'A six-month fellowship for young people from marginalized backgrounds. Fellows receive mentorship from former MPs, budget officers, and civil society leaders. They learn facilitation, advocacy, and project management.',
    example: 'Graduates have gone on to become members of County Youth Forums, school board representatives, and even appointed to government committees.',
    icon: Award,
    image: image4,
  },
  {
    title: 'Policy Advocacy & Participatory Governance',
    subtitle: 'Pillar 5',
    content: 'We help communities turn dialogue outcomes into policy briefs, petitions, and budget submissions. Our team tracks county assembly proceedings and alerts citizens when their issues are being debated.',
    example: 'In 2023, our advocacy led to the establishment of two new youth-friendly spaces in Kiambu county libraries.',
    icon: Scale,
    image: image5,
  },
]

const events = [
  { date: 'May 25, 2025', title: 'Youth & climate finance dialogue', location: 'Kasarani Social Hall, 10am', seed: 5 },
  { date: 'June 10, 2025', title: 'Safety without harassment: police-youth engagement', location: 'Icipe Road grounds', seed: 6 },
  { date: 'June 28, 2025', title: 'Public participation 101 (training)', location: 'Online & physical, Ruiru', seed: 7 },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const staggeredContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

export default function Programmes() {
  return (
    <div className="overflow-hidden">
      {/* Section 1 – Intro */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 blur-[180px] rounded-full translate-x-1/3 -translate-y-1/2 z-0" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/3 z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-primary font-bold text-sm tracking-wide mb-8 border border-primary/10 shadow-sm">
              Our Method
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-primary drop-shadow-sm">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Programmes</span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 font-medium leading-relaxed">
              Our five programme pillars are designed to be interlocking – dialogues feed into civic education,
              which feeds into advocacy, which feeds into leadership. All of them are shaped by the communities
              we serve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2-6 – Pillars */}
      <div className="bg-gray-50 py-10 relative">
        {pillars.map((p, i) => {
          const Icon = p.icon
          const isEven = i % 2 === 0

          return (
            <section key={i} className="py-16 md:py-12 relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>

                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`${!isEven ? 'lg:order-2' : ''} order-2 relative`}
                  >
                    <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/20 to-primary/20 blur-2xl rounded-[3rem] -z-10" />
                    <Img
                      className="h-[400px] md:h-[500px] w-full rounded-[2rem] shadow-2xl"
                      alt={p.title}
                      src={p.image}
                    />
                    <div className={`absolute ${isEven ? '-bottom-8 -right-8' : '-bottom-8 -left-8'} z-20 w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center rotate-6 hover:rotate-0 transition-transform duration-300 hidden md:flex`}>
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className={`${!isEven ? 'lg:order-1' : ''} order-1`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-primary font-black tracking-widest uppercase text-sm">{p.subtitle}</span>
                      <div className="h-px bg-gray-300 flex-1" />
                    </div>
                    <h2 className="text-4xl font-extrabold text-primary mb-6 leading-tight">{p.title}</h2>
                    <p className="text-gray-600 leading-relaxed text-lg mb-8 font-light">{p.content}</p>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden group">
                      <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-secondary to-primary group-hover:w-full transition-all duration-500 ease-out z-0 opacity-10" />
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary" />
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2 text-primary font-bold">
                          <Award size={18} />
                          <span>Real Impact</span>
                        </div>
                        <p className="text-gray-700 font-medium pl-6">{p.example}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* Section 7 – Upcoming Dialogues */}
      <section className="py-12 bg-white text-primary relative overflow-hidden border-t border-gray-100">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Upcoming Dialogues</h2>
              <div className="w-20 h-1.5 bg-secondary rounded-full mb-10" />

              <div className="space-y-6">
                {events.map((e, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 relative group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                          <Calendar size={16} />
                          <span>{e.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-2">{e.title}</h3>
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                          <MapPin size={14} />
                          <span>{e.location}</span>
                        </div>
                      </div>

                      <button className="bg-primary/5 border border-primary/10 hover:bg-primary text-primary hover:text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 shrink-0 shadow-sm">
                        Register
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/30 to-primary/30 blur-3xl rounded-full" />
              <Img src={image6} className="h-[600px] w-full rounded-3xl shadow-xl border border-gray-100 relative z-10" alt="Calendar with Tuko Sisi sticker" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
