import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Users, MessageSquare, FileText, TrendingUp, Handshake, Target, Flame, Lightbulb } from 'lucide-react'
import Img from '../components/Img'
import cover from '../assets/cover.jpg'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.webp'
import image9 from '../assets/image9.jpg'
import image10 from '../assets/image10.jpg'
import image11 from '../assets/image11.jpg'
import VolunteerModal from '../components/VolunteerModal'

const stats = [
  { number: '5,200+', label: 'Youth directly engaged in dialogues & trainings', icon: Users },
  { number: '47', label: 'Structured dialogues facilitated across 12 counties', icon: MessageSquare },
  { number: '28', label: 'Policy recommendations submitted to governments', icon: FileText },
  { number: '63%', label: 'Participants reporting increased public confidence', icon: TrendingUp },
]

const programmes = [
  {
    title: 'Structured Dialogues',
    summary: 'Facilitated conversations that bridge ethnic, economic, and generational divides – turning conflict into collaboration.',
    icon: Handshake,
    image: image9,
  },
  {
    title: 'Civic Education Programs',
    summary: 'Empowering youth with knowledge on the Constitution, devolution, budgeting, and their rights as citizens.',
    icon: Target,
    image: image10,
  },
  {
    title: 'Youth Leadership & Inclusion',
    summary: 'Mentorship and training that places young people in decision-making tables – from school boards to county assemblies.',
    icon: Flame,
    image: image11,
  },
]

const values = [
  { icon: Users, heading: 'Youth-led, youth-first', text: 'Our board and facilitators are under 35. We design programs with young people, not for them.' },
  { icon: FileText, heading: 'Constitutionally grounded', text: 'Every activity links to Article 10, Article 118, and the County Governments Act.' },
  { icon: Target, heading: 'Marginalized at the centre', text: 'We actively recruit from informal settlements, rural areas, and youth with disabilities.' },
  { icon: Lightbulb, heading: 'Sustainable change', text: 'We train community dialogue champions who continue the work independently.' },
]

const gallery = [
  { src: image1, caption: 'Register. Vote. Follow up.' },
  { src: image2, caption: 'Inclusive decision-making tools' },
  { src: image3, caption: 'Promising to co-create a youth caucus' },
]

const staggeredContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function Home() {
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false)

  return (
    <div className="overflow-x-hidden">
      <VolunteerModal isOpen={isVolunteerModalOpen} onClose={() => setIsVolunteerModalOpen(false)} />
      {/* Section 1 – Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-10">
        <div className="absolute inset-0 z-0">
          <Img src={cover} className="w-full h-full" alt="Diverse Kenyan youth in a circle laughing" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center flex flex-col items-center justify-center h-full">
          <motion.div
            variants={staggeredContainer}
            initial="hidden"
            animate="show"
            className="max-w-4xl mx-auto flex flex-col items-center"
          >

            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white drop-shadow-md">
              Putting <span className="text-secondary">young voices</span> at the heart of decision-making
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl md:max-w-2xl text-gray-200 mb-10 leading-relaxed font-medium drop-shadow-sm">
              Dialogues 254 is a youth-led community organization that brings together young Kenyans,
              especially from marginalized backgrounds, to shape policies, promote peace, and claim their
              constitutional right to public participation.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center w-full">
              <Link to="/programmes" className="group relative bg-secondary text-primary font-bold px-8 py-4 rounded-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center gap-2 overflow-hidden">
                <span className="relative z-10">Join a dialogue</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0" />
              </Link>
              <Link to="/about" className="bg-white/10 backdrop-blur-md text-white font-bold px-8 py-4 rounded-xl hover:bg-white/20 border border-white/20 transition-all duration-300 shadow-sm">
                Our impact
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 2 – Quick Stats */}
      <section className="relative py-12 bg-white text-primary overflow-hidden border-b border-gray-100">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary">Our Impact by Numbers</h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto mt-6 rounded-full" />
          </motion.div>

          <motion.div
            variants={staggeredContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-extrabold text-primary mb-3">{s.number}</div>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed">{s.label}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Section 3 – Core Programmes */}
      <section className="py-12 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-primary mb-4">Our Core Programmes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Three interconnected pillars that drive our mission forward</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {programmes.map((p, i) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden group border border-gray-100"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Img src={p.image} className="w-full h-full transition-transform duration-700 group-hover:scale-110" alt={p.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60" />
                  </div>
                  <div className="p-8 relative">
                    <div className="absolute -top-10 left-8 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mt-6 mb-3">{p.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{p.summary}</p>
                    <Link to="/programmes" className="inline-flex items-center text-primary font-bold hover:text-secondary bg-primary/5 hover:bg-primary hover:text-white px-4 py-2 rounded-full transition-colors group/link mt-2">
                      Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 4 – Featured Dialogue Story */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-bottom-left" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary to-primary opacity-30 blur-2xl rounded-[3rem]" />
              <Img src={image4} className="h-[400px] w-full rounded-[2rem] shadow-2xl relative z-10" alt="Kasarani youth holding budget priorities banner" />

              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[200px] border-l-4 border-secondary hidden md:block">
                <p className="text-3xl font-extrabold text-primary mb-1">2/5</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Projects Approved</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold tracking-wide mb-6">
                <Flame size={16} /> Impact Story
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 leading-tight">How a single dialogue changed a ward's development plan</h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                In Kasarani, young people felt ignored during the county's participatory budgeting process.
                Dialogues 254 organized three consecutive weekend forums where 120 youth drafted a list of
                five priority projects. They presented it to the Ward Administrator, and two of those projects
                – a public library and a youth skills hub – were included in the final budget.
              </p>
              <blockquote className="bg-gray-50 border-l-4 border-secondary p-6 rounded-r-2xl shadow-sm italic text-gray-700 text-lg relative">
                <span className="absolute top-2 left-2 text-4xl text-gray-200">"</span>
                <p className="relative z-10">We realized our voices actually carry weight if we organize.</p>
                <footer className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">J</div>
                  <span className="text-sm font-bold text-primary not-italic">– James, 24, local youth leader</span>
                </footer>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5 – Why Dialogues 254 */}
      <section className="py-12 bg-white text-primary relative overflow-hidden border-t border-gray-100">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-primary">Why Dialogues 254?</h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={staggeredContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {values.map((v, i) => {
                const Icon = v.icon
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ scale: 1.03 }}
                    className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <Icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2 text-primary">{v.heading}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{v.text}</p>
                  </motion.div>
                )
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[450px]"
            >
              <Img src={image1} className="absolute inset-0 w-full h-full rounded-3xl shadow-2xl z-10" alt="Young facilitator and rural community meeting" />
              <div className="absolute -inset-4 bg-secondary/20 rounded-[2.5rem] -z-10 animate-pulse" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6 – Photo Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <h2 className="text-4xl font-extrabold text-primary mb-4">Recent Moments</h2>
              <div className="w-24 h-1.5 bg-secondary rounded-full" />
            </div>
          </motion.div>

          <motion.div
            variants={staggeredContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {gallery.map((g, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="group rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden bg-white"
              >
                <div className="relative h-72 overflow-hidden">
                  <Img src={g.src} className="w-full h-full transition-transform duration-700 group-hover:scale-110" alt={g.caption} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000438]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10">
                    <p className="text-sm text-white font-bold tracking-wide">{g.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 7 – CTA */}
      <section className="relative py-16 overflow-hidden bg-gray-50">
        <div className="absolute inset-0 z-0 opacity-10">
          <Img src={image2} className="w-full h-full" alt="Young woman addressing a lively crowd" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-primary">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="bg-white/80 backdrop-blur-md p-10 md:p-16 rounded-[3rem] border border-gray-200 shadow-xl"
          >
            <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-8">
              <MessageSquare className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">The next dialogue could be in your community</h2>
            <p className="text-lg md:text-xl mb-12 text-gray-600 font-medium max-w-3xl mx-auto">
              Whether you are a student, a bodaboda rider, a teacher, or an unemployed graduate – we need your voice.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button onClick={() => setIsVolunteerModalOpen(true)} className="w-full sm:w-auto bg-primary text-white font-bold px-10 py-5 rounded-xl hover:bg-[#000438] transition-all duration-300 text-lg shadow-lg">
                Volunteer with us
              </button>
              <Link to="/contact" className="w-full sm:w-auto bg-gray-100 text-primary font-bold px-10 py-5 rounded-xl hover:bg-gray-200 transition-all duration-300 text-lg border border-gray-200 shadow-sm">
                Partner with us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
