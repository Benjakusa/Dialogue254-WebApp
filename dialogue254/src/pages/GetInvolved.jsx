import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, Megaphone, Users, Handshake, Building2, Briefcase, GraduationCap, ArrowRight } from 'lucide-react'
import Img from '../components/Img'

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

export default function GetInvolved() {
  return (
    <div className="overflow-hidden">
      {/* Section 1 – Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-white text-primary border-b border-gray-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 blur-[150px] mix-blend-multiply skew-x-12" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-primary font-bold text-sm tracking-wide mb-8 border border-primary/10 shadow-sm">
              Join The Movement
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-8 drop-shadow-sm leading-tight">
              You are not just a bystander <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">you are the dialogue</span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 font-medium leading-relaxed">
              Whether you have two hours a week or a lifetime of experience, there is a place for you in Dialogues 254.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2 – Ways to contribute */}
      <section className="py-12 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-primary mb-4">Ways to Contribute</h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full mb-6" />
          </motion.div>

          <motion.div
            variants={staggeredContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-8 mb-16"
          >
            {[
              { title: 'Become a dialogue facilitator', desc: 'After a 2-day training, you can moderate community dialogues. We provide scripts and support.', icon: Megaphone, seed: 0 },
              { title: 'Join our civic education team', desc: 'Help us translate legal documents into plain Swahili / Sheng, or co-facilitate workshops.', icon: GraduationCap, seed: 1 },
              { title: 'Become a community champion', desc: 'Organize listening sessions in your village or estate and report back to us.', icon: Users, seed: 2 },
            ].map((c, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden group border border-gray-100 flex flex-col h-full"
              >
                <div className="h-48 overflow-hidden relative">
                  <Img className="w-full h-full transition-transform duration-700 group-hover:scale-110 object-cover" alt={c.title} seed={c.seed} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-8 flex-1 flex flex-col relative bg-white">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center absolute -top-10 right-8 border border-gray-50 group-hover:-translate-y-2 transition-transform duration-300">
                    <c.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 mt-2">{c.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">{c.desc}</p>
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary/5 hover:bg-primary text-primary hover:text-white font-bold px-6 py-3 rounded-xl transition-colors duration-300 w-full group/btn">
                    I'm interested
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl relative group"
          >
            <Img className="h-[400px] w-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Two young people talking with clipboard" seed={3} />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            <div className="absolute bottom-10 left-10 text-white">
              <p className="text-2xl font-bold drop-shadow-md">Empowering the grassroots,</p>
              <p className="text-lg text-secondary font-medium">one conversation at a time.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3 – Partnership opportunities */}
      <section className="py-12 bg-white relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-extrabold text-primary mb-6">Partnership Opportunities</h2>
              <p className="text-gray-600 text-lg mb-8 font-light">We are looking for partners who share our values:</p>
              <ul className="space-y-6 text-gray-700 mb-8">
                {[
                  { title: 'NGOs & INGOs', desc: 'Co-host dialogues or provide technical support', icon: Handshake },
                  { title: 'Government agencies', desc: '(e.g., NYS, NGEC, KNCHR) – Amplify our citizen engagement work', icon: Building2 },
                  { title: 'Private sector', desc: 'Sponsor our "Civic Education in Schools" pilot', icon: Briefcase },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
                  >
                    <div className="mt-1 bg-primary/10 p-2 rounded-lg text-primary self-start">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <strong className="block text-primary text-lg mb-1">{item.title}</strong>
                      <span className="text-gray-600 leading-relaxed">{item.desc}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 inline-block">
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Contact for partnerships</p>
                <a href="mailto:partnerships@dialogues254.org" className="text-primary font-bold text-lg hover:text-secondary transition-colors">
                  partnerships@dialogues254.org
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-bl from-secondary/30 to-primary/20 blur-2xl rounded-3xl" />
              <Img className="h-[500px] w-full rounded-3xl shadow-2xl relative z-10" alt="Handshake with Dialogues 254 t-shirt" seed={4} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4 – Donation */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative"
            >
              <Img className="h-[450px] w-full rounded-3xl shadow-xl object-cover" alt="Printed booklet and cup of chai" seed={5} />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block animate-bounce-slow">
                <Heart className="w-12 h-12 text-secondary" fill="#00eff8" fillOpacity={0.2} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl font-extrabold text-primary mb-6">Support Our Work</h2>
              <div className="w-20 h-1.5 bg-secondary rounded-full mb-8" />
              <p className="text-gray-700 text-lg mb-8 leading-relaxed font-light">
                Your contribution helps us buy tea and snacks for dialogues (keeping people engaged!),
                print civic education booklets, and transport community members to county assembly sessions.
              </p>

              <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 flex flex-col md:flex-row items-center gap-8 group hover:shadow-lg transition-shadow">
                <div className="flex-1 text-center md:text-left">
                  <p className="font-bold text-gray-500 uppercase tracking-widest text-xs mb-2">Donate via M-Pesa Paybill</p>
                  <p className="text-5xl font-black text-primary tracking-tight mb-2">123456</p>
                  <p className="text-gray-700 font-medium">Account: <strong className="text-primary">DIALOGUES254</strong></p>
                </div>
                <div className="w-full md:w-px h-px md:h-24 bg-gray-200" />
                <div className="flex-1 text-center md:text-left text-sm text-gray-400">
                  <p className="italic">Every shilling fuels a conversation that could change a policy.</p>
                  <p className="mt-2 text-xs">(Demo mode – integrate actual payment later)</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5 – Volunteer spotlight */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-primary mb-4">Volunteer Spotlight</h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-5xl mx-auto bg-primary/5 rounded-[3rem] p-8 md:p-12 relative">
            <div className="absolute top-0 right-10 -translate-y-1/2 text-9xl text-secondary/20 font-serif leading-none select-none">"</div>
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="rounded-full p-2 bg-white shadow-xl relative z-10 w-48 h-48 mx-auto md:mx-0">
                  <Img className="w-full h-full rounded-full object-cover" alt="Grace volunteer portrait" seed={6} />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <blockquote className="text-2xl text-primary font-medium italic leading-relaxed mb-6">
                  I joined as a note-taker at a dialogue in Githurai 44. Six months later, I am co-facilitating
                  and have been invited to speak at a youth governance conference. Dialogues 254 didn't just
                  use my time – they invested in me.
                </blockquote>
                <p className="text-lg font-bold text-primary">– Grace M., 22</p>
                <p className="text-gray-500 font-medium">Volunteer since 2023</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 – Volunteer orientation CTA */}
      <section className="relative py-16 overflow-hidden bg-gray-50">
        <div className="absolute inset-0 opacity-10">
          <Img className="w-full h-full object-cover" alt="Zoom meeting full of smiling young faces" seed={7} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-primary">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-md p-10 md:p-16 rounded-[3rem] border border-gray-200 shadow-xl"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Next Volunteer Orientation</h2>
            <div className="inline-block bg-primary/5 border border-primary/10 rounded-2xl p-6 mb-8 shadow-sm">
              <p className="text-xl md:text-2xl font-bold text-primary mb-2">Saturday, June 7, 2025</p>
              <p className="text-lg text-gray-600 font-medium">Online • 10:00 AM - 12:00 PM</p>
            </div>

            <p className="text-lg text-gray-600 mb-10 font-medium">
              Sign up today and we'll send you the joining link alongside your volunteer handbook.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => alert('Thank you! You will receive the orientation link shortly. (demo mode)')}
              className="bg-primary text-white font-bold text-lg px-10 py-5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 mx-auto"
            >
              Sign Up For Orientation
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
