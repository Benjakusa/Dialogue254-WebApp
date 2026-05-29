import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ShieldCheck, Users, LineChart, Zap, Handshake, Globe, Target } from 'lucide-react'
import Img from '../components/Img'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.webp'
import image5 from '../assets/image5.webp'
import image6 from '../assets/image6.webp'
import image7 from '../assets/image7.webp'

const values = [
  { title: 'Constitutionalism', desc: 'We uphold the Constitution of Kenya 2010 and all laws. Every dialogue starts with a reminder of Article 10 (national values).', icon: ShieldCheck, seed: 0 },
  { title: 'Inclusivity', desc: 'We actively seek out voices that are usually excluded: young women, persons with disabilities, minority communities, and informal settlement residents.', icon: Globe, seed: 1 },
  { title: 'Integrity', desc: 'We publish our dialogue reports openly, track our promises, and hold ourselves accountable to the communities we serve.', icon: LineChart, seed: 2 },
  { title: 'Empowerment', desc: 'We don\'t speak for youth; we give them tools (knowledge, networks, confidence) to speak for themselves.', icon: Zap, seed: 3 },
  { title: 'Collaboration', desc: 'We work with chiefs, religious leaders, civil society, and even political parties – always staying non-partisan but fiercely pro-participation.', icon: Handshake, seed: 4 },
  { title: 'Sustainability', desc: 'Every dialogue trains local facilitators. Every civic education module is designed to be re-taught by community members.', icon: Users, seed: 5 },
]

const team = [
  { name: 'Nia Wanjiku', role: 'Executive Director', bio: 'Youth governance specialist, former ward youth forum chair. Leads organizational strategy and partnerships.', image: image5 },
  { name: 'James Otieno', role: 'Programmes Lead', bio: 'Peacebuilding trainer with NPI. Oversees all dialogue and civic education programming across 12 counties.', image: image6 },
  { name: 'Fatuma Hassan', role: 'Community Engagement Coordinator', bio: 'Grassroots organizer, GOK scholarship alumni. Manages community outreach and volunteer coordination.', image: image7 },
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

export default function About() {
  return (
    <div className="overflow-hidden">
      {/* Section 1 – Title & Image */}
      <section className="py-12 relative">
        <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-secondary/10 blur-[150px] mix-blend-multiply rounded-full -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold tracking-wide mb-6">
                Our Story
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 leading-tight">
                About Dialogues 254 – we are the bridge between young Kenyans and power
              </h1>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                Registered with the State Department for Social Services, Dialogues 254 began in 2021
                as a small WhatsApp group of university students frustrated by empty promises. Today,
                we are a recognized community-based organization working in 12 counties, with a focus
                on peace, public participation, and democratic accountability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Img src={image1} className="h-[450px] rounded-3xl shadow-2xl relative z-10" alt="Founding members reviewing a document outdoors" />
              <div className="absolute -inset-4 bg-gradient-to-tr from-secondary to-primary/40 opacity-40 blur-2xl rounded-3xl -z-0" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 – Get to Know Us */}
      <section className="py-12 bg-gray-50 relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-1/3 h-full bg-primary/5 skew-x-12 transform origin-bottom-right" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <Img src={image2} className="h-[500px] rounded-3xl shadow-2xl" alt="Young man speaking passionately into a mic" />
              <div className="absolute top-1/2 -translate-y-1/2 -right-8 w-16 h-16 bg-secondary rounded-full shadow-lg hidden md:flex items-center justify-center animate-pulse">
                <Users className="text-primary" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl font-extrabold text-primary mb-8">Get to Know Us</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light">
                <p>
                  Dialogues 254 is a youth-led, youth-focused Community-Based Organization dedicated to
                  promoting peace, social cohesion, and democratic participation – particularly among youth
                  and marginalized groups – through structured dialogues, civic education, and community
                  engagement initiatives.
                </p>
                <p>
                  Inspired by the Constitutional promise of the right to public participation, and cognizant
                  of young people's desire to shape policy, we put young voices at the heart of decision-making.
                  We expand their engagement in the social, economic, civic, and political life of their
                  communities – not as token participants, but as <span className="font-bold text-primary">co-creators</span>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 – Vision & Mission */}
      <section className="relative py-16 overflow-hidden bg-white border-y border-gray-100">
        <div className="absolute inset-0 z-0 opacity-5">
          <Img src={image3} className="w-full h-full object-cover" alt="Crowd at a public rally silhouette" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 border border-gray-200 rounded-3xl p-10 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group shadow-lg"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl transition-colors duration-500" />
              <Globe className="w-14 h-14 text-primary mb-6 relative z-10" />
              <h3 className="text-2xl font-extrabold text-primary mb-4 relative z-10">Our Vision</h3>
              <p className="text-gray-700 font-medium text-lg leading-relaxed relative z-10">
                A society where all individuals, regardless of age, gender or background, actively participate
                in governance and democratic processes, promote peace, and drive positive social change.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 border border-gray-200 rounded-3xl p-10 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group shadow-lg"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl transition-colors duration-500" />
              <Target className="w-14 h-14 text-primary mb-6 relative z-10" />
              <h3 className="text-2xl font-extrabold text-primary mb-4 relative z-10">Our Mission</h3>
              <p className="text-gray-700 font-medium text-lg leading-relaxed relative z-10">
                To foster peaceful coexistence and to put marginalized and young voices at the center of
                governance and democratic participation through inclusive dialogues, civic education, and
                sustainable community-driven initiatives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4 – Our Values */}
      <section className="py-12 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-primary mb-4">Our Values</h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full mb-6" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Six core principles that guide every dialogue, every meeting, and every action we take.
            </p>
          </motion.div>

          <motion.div
            variants={staggeredContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden group"
                >
                  <div className="h-2 w-full bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                  <div className="p-8 relative">
                    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                      <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{v.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{v.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Section 5 – Theory of Change */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-extrabold text-primary mb-6">Our Theory of Change</h2>
              <div className="w-20 h-1.5 bg-secondary rounded-full mb-8" />
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light">
                <p>
                  If young people and marginalized groups gain civic knowledge, safe spaces for dialogue,
                  and direct access to decision-makers, then they will influence local policies, reduce
                  ethnic and political violence, and demand transparent governance.
                </p>
                <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-primary">
                  <p className="font-medium">
                    We measure success not just by attendance, but by actions taken after dialogues
                    (e.g., budget submissions, peace committees formed).
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Img src={image4} className="h-[400px] w-full rounded-3xl shadow-xl" alt="Flowchart: Knowledge → Dialogue → Collective Action → Policy Change" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6 – Governance & Leadership */}
      <section className="py-12 bg-white relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-primary mb-4">Our Team</h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full mb-6" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Young leaders dedicated to building a participatory democracy
            </p>
          </motion.div>

          <motion.div
            variants={staggeredContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {team.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden group border border-gray-100"
              >
                <div className="h-64 overflow-hidden relative">
                  <Img src={t.image} className="w-full h-full transition-transform duration-700 group-hover:scale-110" alt={t.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60" />
                </div>
                <div className="p-8 relative -mt-16 bg-white mx-4 rounded-2xl shadow-lg border border-gray-50 flex flex-col items-center text-center">
                  <h3 className="text-xl font-bold text-primary mb-1">{t.name}</h3>
                  <p className="text-xs font-black uppercase tracking-wider mb-4">
                    <span className="bg-primary text-secondary px-3 py-1.5 rounded-full shadow-inner">{t.role}</span>
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">{t.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
