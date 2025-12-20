import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const NeuralNetworkBackground = () => {
    return (
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
            <svg width="100%" height="100%" style={{ opacity: 0.6 }}>
                <defs>
                    <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* Animated Connections */}
                {[...Array(20)].map((_, i) => (
                    <motion.line
                        key={i}
                        x1={`${Math.random() * 100}%`}
                        y1={`${Math.random() * 100}%`}
                        x2={`${Math.random() * 100}%`}
                        y2={`${Math.random() * 100}%`}
                        stroke="var(--primary)"
                        strokeWidth="0.8"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1, 0],
                            opacity: [0, 0.4, 0],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}

                {/* Floating Nodes */}
                {[...Array(30)].map((_, i) => (
                    <motion.circle
                        key={i}
                        r={Math.random() * 4 + 2}
                        fill="url(#nodeGradient)"
                        animate={{
                            cx: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                            cy: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                            opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                            duration: Math.random() * 15 + 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </svg>
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, transparent 0%, rgba(10, 25, 47, 0.8) 100%)'
            }} />
        </div>
    );
};

const Hero = () => {
    return (
        <section style={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            padding: 'var(--header-height) 0 100px',
            position: 'relative',
            overflow: 'hidden',
            background: `linear-gradient(rgba(10, 25, 47, 0.5), rgba(10, 25, 47, 0.7)), url("${import.meta.env.BASE_URL}ai_future_hero.png")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white'
        }}>
            <NeuralNetworkBackground />
            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        style={{ marginBottom: '2.5rem' }}
                    >
                        <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="Digital Joy Logo" style={{ width: '110px', height: '110px', borderRadius: '28px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', border: '4px solid rgba(255,255,255,0.2)' }} />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '1.5rem', textShadow: '0 0 20px rgba(0,169,222,0.5)' }}
                    >
                        Innovative AI & Mobile Solutions
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        style={{ fontSize: 'clamp(3rem, 10vw, 5rem)', lineHeight: 1.1, marginBottom: '2rem', fontWeight: 900, textShadow: '0 10px 40px rgba(0,0,0,0.6)' }}
                    >
                        디지털조이 AI 오신것을 <br /><span className="gradient-text" style={{ filter: 'brightness(1.2)' }}>환영합니다</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        style={{ fontSize: '1.35rem', color: 'rgba(255,255,255,0.9)', marginBottom: '3.5rem', marginInline: 'auto', maxWidth: '750px', lineHeight: 1.6, fontWeight: 500 }}
                    >
                        모바일 앱 개발과 AI 기술로 비즈니스의 새로운 가능성을 열어갑니다. <br />
                        실생활의 편리함과 즐거움을 위한 솔루션을 경험해보세요.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}
                    >
                        <a href="#services" className="btn-primary" style={{ padding: '1.2rem 3rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem', boxShadow: '0 15px 35px rgba(0,169,222,0.3)' }}>
                            사업분야 보기 <ChevronRight size={22} />
                        </a>
                        <button style={{
                            padding: '1.2rem 3rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.2)',
                            background: 'rgba(255,255,255,0.1)',
                            color: 'white',
                            fontWeight: 700,
                            fontSize: '1.1rem',
                            cursor: 'pointer',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s ease'
                        }}>
                            회사소개서
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
