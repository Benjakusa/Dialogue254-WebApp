import { motion } from 'framer-motion'

const SEED = 42

export default function Img({ src, alt, className = '', overlay, seed }) {
  if (src && !src.startsWith('http') && src !== '') {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <motion.img
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {overlay && <div className="absolute inset-0" style={{ backgroundColor: overlay }} />}
      </div>
    )
  }

  const generatedSrc = `https://picsum.photos/seed/${seed || SEED}/800/600`

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className={`relative overflow-hidden bg-gray-100 ${className}`}
    >
      <img
        src={generatedSrc}
        alt={alt || 'Placeholder image'}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {overlay && <div className="absolute inset-0" style={{ backgroundColor: overlay }} />}
    </motion.div>
  )
}
