import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, Hash, Globe, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-[#000438] text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 blur-[128px] rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 blur-[128px] rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-secondary to-primary/80 flex items-center justify-center text-white font-extrabold text-lg shadow-lg shadow-secondary/20">D</div>
              <span className="font-extrabold text-xl tracking-tight">Dialogues 254</span>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-xs text-sm">
              Putting young voices at the heart of decision-making. Empowering a diverse generation to claim their constitutional right to public participation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white tracking-wide">Quick Links</h3>
            <div className="space-y-3">
              {['Home', 'About', 'Programmes', 'Get Involved', 'Contact'].map((link) => (
                <Link
                  key={link}
                  to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`}
                  className="block text-gray-400 hover:text-secondary hover:translate-x-1 transition-all duration-300 w-fit text-sm"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white tracking-wide">Contact Us</h3>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="text-secondary shrink-0 mt-0.5" size={18} />
                <p>65-Complex View Drive, off Icipe Road<br />Kasarani, Nairobi</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-secondary shrink-0" size={18} />
                <a href="mailto:hello@dialogues254.org" className="hover:text-white transition-colors">hello@dialogues254.org</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-secondary shrink-0" size={18} />
                <a href="tel:+254108669921" className="hover:text-white transition-colors">+254 108 669 921</a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white tracking-wide">Stay Connected</h3>
            <p className="text-gray-400 text-sm mb-4">Follow us on social media for updates and stories from the field.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-[#000438] hover:-translate-y-1 transition-all duration-300">
                <Hash size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-[#000438] hover:-translate-y-1 transition-all duration-300">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-[#000438] hover:-translate-y-1 transition-all duration-300">
                <Globe size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Dialogues 254. All rights reserved.</p>
          <p>Powered by <a href="https://wa.me/254722839617" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Opendesk</a>.</p>
        </div>
      </div>
    </footer>
  )
}
