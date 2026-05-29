import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How do I join a dialogue?',
    a: 'Check our "Upcoming Dialogues" on the Programmes page. You can also WhatsApp our community line (+254 700 123 456) with your name and location – we will add you to a regional notification group.',
  },
  {
    q: 'Is there a fee to attend?',
    a: 'No. All our dialogues and civic education workshops are completely free. We even provide lunch for full-day events. If you see anyone asking for payment, please report to the above contacts.',
  },
  {
    q: 'Can I invite Dialogues 254 to my school / church / youth group?',
    a: 'Absolutely. Fill out the form on this page (Subject: "Invite to a dialogue") and our outreach team will get back to you within 5 days.',
  },
  {
    q: 'I want to remain anonymous but report an issue. Can I?',
    a: 'Yes. You can use our anonymous tip form – we will never ask for your name, only the issue and location. Email feedback@dialogues254.org',
  },
]

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => {
        const isOpen = openIdx === i

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`overflow-hidden rounded-2xl transition-all duration-300 border ${isOpen ? 'bg-primary/5 border-secondary/30 shadow-md' : 'bg-white border-gray-100 hover:border-gray-200 shadow-sm'}`}
          >
            <button
              className="w-full flex justify-between items-center p-6 text-left"
              onClick={() => setOpenIdx(isOpen ? null : i)}
            >
              <span className={`font-bold text-lg transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-gray-800'}`}>
                {faq.q}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`flex-shrink-0 ml-4 p-1 rounded-full ${isOpen ? 'bg-secondary text-primary' : 'bg-gray-100 text-gray-500'}`}
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed font-light">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}
