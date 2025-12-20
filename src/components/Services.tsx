import { motion } from 'framer-motion';
import { ShieldCheck, FileCode, Smartphone, Activity, BookOpen, Tablet } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <BookOpen size={32} />,
            title: 'BookGPT',
            desc: '전문 지식 데이터를 기반으로 한 GPTs 제작 및 단순 작업 자동화 솔루션을 제공합니다.',
            tag: 'AI Solution'
        },
        {
            icon: <Smartphone size={32} />,
            title: 'AI Auction',
            desc: '실시간 경매 시스템과 AI 분석을 결합한 지능형 경매 플랫폼 솔루션을 제공합니다.',
            tag: 'Platform'
        },
        {
            icon: <Activity size={32} />,
            title: 'SSPORTS',
            desc: '생활스포츠 매칭 및 커뮤니티 플랫폼. Flutter를 이용한 크로스플랫폼 앱 개발 기술을 적용합니다.',
            tag: 'Mobile'
        },
        {
            icon: <ShieldCheck size={32} />,
            title: 'AI OCR & Masking',
            desc: '문서 인식 및 개인정보 마스킹 솔루션. 딥러닝 기술로 고정밀 데이터 추출 및 보안을 강화합니다.',
            tag: 'Enterprise'
        },
        {
            icon: <Tablet size={32} />,
            title: 'DMMS',
            desc: '모바일 신뢰 스캔 및 전자화 공정 시스템. 법적 효력을 갖춘 디지털 전환 솔루션입니다.',
            tag: 'System'
        },
        {
            icon: <FileCode size={32} />,
            title: 'AI HTML System',
            desc: '생성형 AI를 통한 HTML 전자문서 시스템 구축. 통일된 디자인과 일관성 있는 문서 환경을 제공합니다.',
            tag: 'Digital'
        }
    ];

    return (
        <section id="services">
            <div className="container">

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            style={{
                                padding: '2.5rem',
                                borderRadius: '24px',
                                backgroundColor: 'white',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
                                border: '1px solid #f0f0f0',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem'
                            }}
                        >
                            <div style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '16px',
                                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {service.icon}
                            </div>
                            <div>
                                <span style={{
                                    fontSize: '0.8rem',
                                    fontWeight: 700,
                                    color: 'var(--primary)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    {service.tag}
                                </span>
                                <h3 style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>{service.title}</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{service.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
