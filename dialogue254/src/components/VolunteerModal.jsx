import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, User, Mail, Phone, Heart } from 'lucide-react'

export default function VolunteerModal({ isOpen, onClose }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-[#000438]/60 backdrop-blur-sm z-50 transition-opacity"
                    />

                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                            className="w-full max-w-lg bg-white rounded-3xl shadow-2xl pointer-events-auto overflow-hidden flex flex-col max-h-[90vh]"
                        >
                            <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 w-10 h-10 bg-gray-100 text-gray-500 hover:text-primary hover:bg-secondary/20 rounded-full flex items-center justify-center transition-colors"
                                >
                                    <X size={20} />
                                </button>

                                <div className="mb-8">
                                    <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6">
                                        <Heart size={32} className="text-secondary" />
                                    </div>
                                    <h2 className="text-3xl font-extrabold text-primary mb-2">Volunteer With Us</h2>
                                    <p className="text-gray-600">Join our movement. Enter your details and we'll reach out when an opportunity arises in your area.</p>
                                </div>

                                <form action="https://formsubmit.co/hello@dialogues254.org" method="POST" className="space-y-5">
                                    {/* FormSubmit configuration variables */}
                                    <input type="hidden" name="_subject" value="New Volunteer Signup!" />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_template" value="table" />
                                    <input type="hidden" name="_next" value={window.location.href} />

                                    <div className="space-y-1.5">
                                        <label className="text-sm font-bold text-gray-700">Full Name</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <User className="text-gray-400 w-5 h-5" />
                                            </div>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                placeholder="Wafula Kamau"
                                                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-sm font-bold text-gray-700">Email Address</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <Mail className="text-gray-400 w-5 h-5" />
                                            </div>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                placeholder="wafula@example.com"
                                                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-sm font-bold text-gray-700">Phone Number</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <Phone className="text-gray-400 w-5 h-5" />
                                            </div>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                placeholder="+254 7XX XXX XXX"
                                                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-sm font-bold text-gray-700">How would you like to help?</label>
                                        <select
                                            name="interest"
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all outline-none appearance-none"
                                        >
                                            <option value="" disabled selected>Select an area of interest</option>
                                            <option value="Dialogue Facilitation">Dialogue Facilitation</option>
                                            <option value="Community Mobilization">Community Mobilization</option>
                                            <option value="Event Planning">Event Planning</option>
                                            <option value="Media & Communication">Media & Communication</option>
                                            <option value="General Support">General Support</option>
                                        </select>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full mt-6 bg-primary text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#000438] transition-colors shadow-lg shadow-primary/20"
                                    >
                                        Send Details <Send size={18} />
                                    </button>
                                    <p className="text-xs text-center text-gray-500 mt-4 leading-relaxed">
                                        By submitting, you agree to let Dialogues 254 contact you regarding volunteer opportunities.
                                    </p>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}
