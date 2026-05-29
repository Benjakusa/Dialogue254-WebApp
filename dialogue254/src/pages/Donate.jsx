import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, Building, CheckCircle2, ShieldCheck, Mail, Phone, ChevronRight } from 'lucide-react'

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

export default function Donate() {
    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left Column: Context */}
                    <motion.div
                        variants={staggeredContainer}
                        initial="hidden"
                        animate="show"
                        className="flex flex-col"
                    >
                        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-bold tracking-wide mb-6 w-fit">
                            <Heart size={16} /> Support our mission
                        </motion.div>

                        <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-primary mb-6 leading-tight">
                            Invest in the next generation of Kenyan leaders
                        </motion.h1>

                        <motion.p variants={fadeUp} className="text-lg text-gray-600 mb-10 leading-relaxed">
                            To remain completely independent and non-partisan, Dialogues 254 relies on community support. Your contribution directly funds civic education manuals, dialogue facilitation expenses, and transportation for marginalized youth to reach decision-making tables.
                        </motion.p>

                        <motion.div variants={staggeredContainer} className="space-y-6">
                            {[
                                "Every 1,000 KES prints 5 civic education manuals.",
                                "Every 5,000 KES sponsors a local youth dialogue session.",
                                "100% of your donation strictly funds field operations."
                            ].map((text, i) => (
                                <motion.div key={i} variants={fadeUp} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="text-primary w-5 h-5" />
                                    </div>
                                    <p className="text-gray-700 font-medium">{text}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div variants={fadeUp} className="mt-12 flex items-center gap-4 bg-primary/5 p-6 rounded-2xl">
                            <ShieldCheck className="text-primary w-8 h-8 shrink-0" />
                            <p className="text-sm text-gray-600">
                                <strong className="text-primary block mb-1">Registered & Accountable</strong>
                                We are legally registered with the State Department for Social Services. Annual impact and financial reports are available upon request.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Donation Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-primary/5 border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-[50px] rounded-full" />

                            <h2 className="text-2xl font-bold text-primary mb-2">Pledge your support</h2>
                            <p className="text-gray-600 mb-8 text-sm">Please provide your details below. Our team will contact you securely to facilitate the final donation transfer via MPESA or Bank.</p>

                            <form action="https://formsubmit.co/hello@dialogues254.org" method="POST" className="space-y-6 relative z-10">
                                {/* FormSubmit Config */}
                                <input type="hidden" name="_subject" value="New Donation Pledge!" />
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_next" value={window.location.href} />
                                <input type="hidden" name="_template" value="table" />

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Pledge Amount (KES)</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">KSh</span>
                                        <input
                                            type="number"
                                            name="amount"
                                            required
                                            placeholder="5000"
                                            className="w-full pl-14 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all outline-none text-lg font-bold text-primary"
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            placeholder="Jane Doe"
                                            className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            placeholder="07XX XXX XXX"
                                            className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="jane@example.com"
                                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all outline-none"
                                    />
                                    <p className="text-xs text-gray-500 mt-2">To send you your donation receipt and updates.</p>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Message (Optional)</label>
                                    <textarea
                                        name="message"
                                        rows={3}
                                        placeholder="I am supporting youth governance in the community..."
                                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all outline-none resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white font-bold px-8 py-5 rounded-xl flex items-center justify-center gap-2 hover:bg-[#000438] transition-all shadow-xl shadow-primary/20 hover:-translate-y-1"
                                >
                                    Confirm Pledge & Proceed <ChevronRight size={20} />
                                </button>

                                <div className="flex items-center justify-center gap-6 mt-4">
                                    <Building className="text-gray-300 w-8 h-8" />
                                    <div className="w-10 h-6 bg-gray-200 rounded-sm flex items-center justify-center text-[8px] font-black text-gray-400">MPESA</div>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
