import { motion } from 'framer-motion';
import { Smartphone, Shield, Share2, ClipboardCheck, FileCode, Search } from 'lucide-react';

const DmmsSection = () => {
    const detailedProcess = [
        { title: '01. 문서 분류', desc: '전처리 및 밴딩처리', icon: <FileCode size={20} /> },
        { title: '02. 신뢰 스캔', desc: '무결성 정보 추가', icon: <Smartphone size={20} /> },
        { title: '03. 품질 검사', desc: '자동 무결성 검증', icon: <ClipboardCheck size={20} /> },
        { title: '04. 교정·내용검사', desc: '색인 입력 및 검사', icon: <Search size={20} /> },
        { title: '05. 검증·서명', desc: '타임스탬프 첨부', icon: <Share2 size={20} /> },
        { title: '06. 보관·열람', desc: '공인센터 이관 보관', icon: <Shield size={20} /> }
    ];

    return (
        <section id="dmms" style={{ backgroundColor: '#f8fafc', padding: '100px 0', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                        <div style={{ padding: '8px', backgroundColor: 'var(--primary)', color: 'white', borderRadius: '10px' }}>
                            <Smartphone size={22} />
                        </div>
                        <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '1px' }}>MOBILE SOLUTIONS</span>
                    </div>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, lineHeight: 1.2 }}>
                        디지털 전환의 완성, <span className="gradient-text">DMMS 공정 시스템</span>
                    </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem', alignItems: 'center' }}>

                    {/* Left: Pipeline cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                        {detailedProcess.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                style={{
                                    backgroundColor: 'white',
                                    padding: '1.5rem',
                                    borderRadius: '20px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                                    border: '1px solid #f0f0f0',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                <div style={{ color: 'var(--primary)', marginBottom: '0.75rem' }}>{step.icon}</div>
                                <h4 style={{ fontSize: '0.95rem', marginBottom: '4px', fontWeight: 700 }}>{step.title}</h4>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Dynamic Scanning Visual */}
                    <div style={{ position: 'relative' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            style={{
                                position: 'relative',
                                borderRadius: '30px',
                                overflow: 'hidden',
                                boxShadow: '0 40px 80px rgba(0,0,0,0.12)',
                                border: '8px solid white',
                                backgroundColor: 'white'
                            }}
                        >
                            <img
                                src={`${import.meta.env.BASE_URL}dmms_doc.png`}
                                alt="DMMS Scanning Process"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                            {/* Scanning beam effect */}
                            <motion.div
                                animate={{ top: ['0%', '100%', '0%'] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    height: '3px',
                                    background: 'linear-gradient(to right, transparent, var(--primary), transparent)',
                                    boxShadow: '0 0 15px var(--primary)',
                                    zIndex: 2,
                                    opacity: 0.5
                                }}
                            />
                        </motion.div>

                        {/* Legal compliance badge */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            style={{
                                position: 'absolute',
                                bottom: '-20px',
                                right: '-10px',
                                backgroundColor: 'var(--secondary)',
                                color: 'white',
                                padding: '15px 25px',
                                borderRadius: '16px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                                zIndex: 10
                            }}
                        >
                            <div style={{ fontSize: '0.75rem', opacity: 0.8, marginBottom: '2px' }}>KISA Standard</div>
                            <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>공인전자문서 가이드 준수</div>
                        </motion.div>
                    </div>

                </div>

                {/* Performance stats row */}
                <div style={{
                    marginTop: '5rem',
                    padding: '40px',
                    borderRadius: '30px',
                    background: 'linear-gradient(135deg, #1a1a1a, #2d2d2d)',
                    color: 'white',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    gap: '2.5rem',
                    textAlign: 'center'
                }}>
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '5px' }}>High-Res</div>
                        <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>신뢰 스캔 이미지화</div>
                    </div>
                    <div style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.1)', alignSelf: 'stretch' }} />
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '5px' }}>AI Logic</div>
                        <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>자동 무결성 검증</div>
                    </div>
                    <div style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.1)', alignSelf: 'stretch' }} />
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '5px' }}>Legal 100%</div>
                        <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>전자문서 법적 검증</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DmmsSection;
