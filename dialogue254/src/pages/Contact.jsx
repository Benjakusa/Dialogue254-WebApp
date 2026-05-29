import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquareHeart } from 'lucide-react'
import Img from '../components/Img'
import FAQAccordion from '../components/FAQAccordion'

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

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! (demo mode)')
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    alert('Thank you for subscribing! (demo mode)')
  }

  return (
    <div className="overflow-hidden">
      {/* Section 1 – Header */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-white text-primary border-b border-gray-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 blur-[150px] mix-blend-multiply skew-x-12" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/5 blur-[100px] skew-y-12" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-primary font-bold text-sm tracking-wide mb-8 border border-primary/10 shadow-sm">
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8 drop-shadow-sm leading-tight">
              Reach out – we reply <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">within 48 hours</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 font-medium leading-relaxed">
              Have a question about an upcoming dialogue? Want to bring us to your school or ward?
              Or just want to say hi? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2 – Contact form */}
      <section className="py-12 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-[2rem] shadow-[0_8px_40px_rgb(0,0,0,0.06)] p-8 md:p-12 border border-gray-100">
                <div className="mb-10">
                  <h2 className="text-3xl font-extrabold text-primary mb-2">Send us a message</h2>
                  <p className="text-gray-500 font-light">Fill out the form below and we'll get back to you shortly.</p>
                </div>

                <div className="space-y-6">
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-primary transition-colors">Full name</label>
                    <input type="text" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent focus:bg-white transition-all font-medium text-gray-800" placeholder="Jane Doe" />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-primary transition-colors">Email address</label>
                    <input type="email" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent focus:bg-white transition-all font-medium text-gray-800" placeholder="jane@example.com" />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-primary transition-colors">Phone (optional)</label>
                    <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent focus:bg-white transition-all font-medium text-gray-800" placeholder="+254 700 000 000" />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-primary transition-colors">Subject</label>
                    <div className="relative">
                      <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent focus:bg-white transition-all font-medium text-gray-800 appearance-none">
                        <option>I want to volunteer</option>
                        <option>Partnership inquiry</option>
                        <option>Invite to a dialogue</option>
                        <option>Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-primary transition-colors">Message</label>
                    <textarea rows={5} required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent focus:bg-white transition-all font-medium text-gray-800 resize-none" placeholder="How can we help you?" />
                  </div>

                  <button type="submit" className="w-full bg-primary hover:bg-[#000438] text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl mt-4">
                    Send message
                    <Send size={18} />
                  </button>
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block h-full"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/30 to-primary/20 blur-2xl rounded-3xl" />
              <Img className="w-full h-full object-cover rounded-[2rem] shadow-2xl relative z-10 min-h-[600px]" alt="Young person typing on a laptop" seed={0} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 – Direct contact & Location Map*/}
      <section className="py-12 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            variants={staggeredContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-24"
          >
            {[
              { title: 'Email', icon: Mail, lines: ['hello@dialogues254.org', 'Dialogues254@gmail.com'] },
              { title: 'Phone / WhatsApp', icon: Phone, lines: ['+254 108 669 921 (calls)', '+254 700 123 456 (WhatsApp)'] },
              { title: 'Social Media', icon: MessageSquareHeart, lines: ['Twitter: @Dialogues254', 'Instagram: @dialogues_254', 'Facebook: /Dialogues254'] },
            ].map((contact, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-3xl p-8 text-center hover:bg-primary group transition-colors duration-500 border border-gray-100"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary transition-colors duration-500">
                  <contact.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary group-hover:text-white mb-4 transition-colors duration-500">{contact.title}</h3>
                {contact.lines.map((line, j) => (
                  <p key={j} className="text-gray-600 group-hover:text-gray-200 mb-1 transition-colors duration-500">{line}</p>
                ))}
              </motion.div>
            ))}
          </motion.div>

          {/* Location Map */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-secondary/20 p-3 rounded-xl text-primary">
                  <MapPin size={28} />
                </div>
                <h2 className="text-4xl font-extrabold text-primary">Visit Us</h2>
              </div>
              <div className="w-20 h-1.5 bg-secondary mb-8 rounded-full" />

              <div className="space-y-4 text-lg text-gray-700">
                <p className="leading-relaxed">
                  <strong className="text-primary font-bold">65-Complex View Drive, off Icipe Road</strong>
                </p>
                <p>Kasarani, Nairobi</p>
                <p className="text-gray-500 font-light">(Next to Kasarani Stadium, near the Total petrol station)</p>

                <div className="mt-8 bg-primary/5 p-6 rounded-2xl border-l-4 border-secondary text-primary font-medium italic">
                  From Thika Road, turn at Icipe Road junction – 500m on your left.
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Img className="h-[400px] w-full rounded-[2rem] shadow-xl" alt="Google Maps location with red pin" seed={1} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5 – FAQ */}
      <section className="py-12 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-primary mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full mb-6" />
            <p className="text-gray-600">Everything you need to know about how we work.</p>
          </motion.div>
          <FAQAccordion />
        </div>
      </section>

      {/* Section 6 – Newsletter */}
      <section className="py-12 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-[3rem] overflow-hidden shadow-xl relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-80" />

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <Img className="h-full min-h-[400px] w-full object-cover rounded-l-[3rem] hidden lg:block" alt="Smartphone showing email newsletter" seed={2} />

              <div className="p-10 md:p-16 relative z-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Stay in the loop</h2>
                <p className="text-gray-600 mb-8 max-w-md font-medium leading-relaxed text-lg">
                  We send one email per month with upcoming dialogues, civic education tips, and success stories. <span className="text-primary font-bold">No spam, ever.</span>
                </p>
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    required
                    className="flex-1 bg-white border border-gray-300 text-gray-800 placeholder-gray-400 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-medium shadow-sm transition-all"
                  />
                  <button type="submit" className="bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-[#000438] transition-colors whitespace-nowrap shadow-md hover:shadow-lg">
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 – Feedback */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <MessageSquareHeart size={32} className="text-primary" />
            </div>
            <h2 className="text-3xl font-extrabold text-primary mb-6">We Value Your Feedback</h2>
            <p className="text-gray-600 text-lg mb-4 font-light leading-relaxed">
              Is there something we could do better? We welcome constructive feedback.
            </p>
            <p className="text-gray-600 mb-10 font-light leading-relaxed">
              Use the form above, or simply email <a href="mailto:feedback@dialogues254.org" className="text-primary font-bold hover:text-secondary transition-colors">feedback@dialogues254.org</a> (anonymous allowed).
            </p>
            <div className="inline-flex items-center justify-center gap-3 bg-secondary/10 text-primary font-bold px-8 py-4 rounded-xl border border-secondary/20 shadow-sm">
              <span className="text-xl">🙌</span>
              Asanti sana – your voice shapes our work.
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
