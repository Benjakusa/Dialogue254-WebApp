import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logo from '../assets/DIALOGUES logo.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/programmes', label: 'Our Programs' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, mass: 0.8 }}
      className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img
              whileHover={{ scale: 1.05, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              src={logo}
              alt="Dialogues 254 Logo"
              className="w-12 h-12 object-contain"
            />
            <span className="font-extrabold text-xl tracking-tight text-primary">Dialogues 254</span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {links.map(l => {
              const isActive = pathname === l.to
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary hover:bg-gray-50'}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-secondary rounded-full -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </Link>
              )
            })}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4"
            >
              <Link to="/donate" className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-full shadow-md hover:shadow-primary/40 transition-shadow duration-300 block">
                DONATE
              </Link>
            </motion.div>
          </div>

          <button className="md:hidden p-2 text-primary hover:bg-gray-100 rounded-full transition-colors relative z-50" onClick={() => setOpen(!open)}>
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 250, damping: 30 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden shadow-xl absolute top-full left-0 right-0"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
              }}
              className="px-4 py-6 flex flex-col gap-2"
            >
              {links.map(l => {
                const isActive = pathname === l.to
                return (
                  <motion.div
                    key={l.to}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className={`block px-4 py-3 text-lg font-bold rounded-xl transition-colors ${isActive ? 'bg-primary/5 text-primary' : 'text-gray-800 hover:bg-gray-50'}`}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="mt-4"
              >
                <Link
                  to="/donate"
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 bg-primary text-white text-center font-bold rounded-xl shadow-lg shadow-primary/20"
                >
                  DONATE
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
