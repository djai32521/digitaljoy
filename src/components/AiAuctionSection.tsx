import { motion } from 'framer-motion';
import { Sparkles, Mic, MapPinned, FileSearch } from 'lucide-react';

const AiAuctionSection = () => {
    const features = [
        {
            icon: <Sparkles size={24} />,
            title: 'AI 기반 맞춤 매물 추천',
            desc: '사용자의 관심 조건을 분석하여 최적의 경매 물건을 AI가 자동으로 찾아줍니다.'
        },
        {
            icon: <Mic size={24} />,
            title: '드라이빙 음성 검색',
            desc: '운전 중에도 손을 대지 않고 음성 명령만으로 전국 경매 정보를 검색할 수 있습니다.'
        },
        {
            icon: <MapPinned size={24} />,
            title: '위치 기반 실시간 정보',
            desc: 'GPS를 통해 현재 위치 주변의 경매 매물을 지도에서 즉시 확인 가능합니다.'
        },
        {
            icon: <FileSearch size={24} />,
            title: '상세 권리 분석 리포트',
            desc: '복잡한 경매 정보를 초보자도 이해하기 쉬운 시각화된 데이터로 제공합니다.'
        }
    ];

    const screenshots = [
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0f/22/ce/0f22cee9-eee9-40af-489e-7b7bb7d27323/IMG_1201.png/600x1300bb.webp',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/47/31/11/473111b2-7bf2-606a-2f6e-f2edf153615e/IMG_1202.png/600x1300bb.webp',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/7d/8d/0d/7d8d0d2b-4e76-252e-c15c-4a6e1b027760/IMG_1203.png/600x1300bb.webp',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/bf/46/37/bf4637b9-06b6-b83b-7dcb-c6dde997e344/IMG_1204.png/600x1300bb.webp',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/df/9d/eb/df9deb3b-97ed-70c0-4d2a-ffcc37b64ea6/IMG_1205.png/600x1300bb.webp'
    ];

    const infiniteScreens = [...screenshots, ...screenshots];

    return (
        <section id="ai-auction" style={{ backgroundColor: 'white', padding: '60px 0', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>

                    {/* Left: Infinite Auto-Scrolling Gallery (Reversed direction or same) */}
                    <div style={{ position: 'relative', width: '100%', overflow: 'hidden', order: window.innerWidth < 768 ? 2 : 1 }}>
                        <motion.div
                            style={{
                                display: 'flex',
                                gap: '15px',
                                padding: '10px 0',
                                width: 'max-content'
                            }}
                            animate={{
                                x: [-1175, 0], // 5 images * (220px + 15px gap) = 1175px
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 20,
                                    ease: "linear",
                                },
                            }}
                        >
                            {infiniteScreens.map((src, i) => (
                                <div
                                    key={i}
                                    style={{
                                        width: '220px',
                                        borderRadius: '24px',
                                        overflow: 'hidden',
                                        boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                                        border: '6px solid #f0f0f0',
                                        backgroundColor: '#f0f0f0',
                                        flexShrink: 0
                                    }}
                                >
                                    <img src={src} alt={`AI Auction Screenshot ${i + 1}`} style={{ width: '100%', display: 'block' }} />
                                </div>
                            ))}
                        </motion.div>

                        {/* Decorative background element */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '120%',
                            height: '80%',
                            background: 'radial-gradient(circle, rgba(0,169,222,0.05) 0%, rgba(255,255,255,0) 70%)',
                            zIndex: -1
                        }} />

                        {/* Fading gradients on edges */}
                        <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '40px', background: 'linear-gradient(to right, white, rgba(255,255,255,0))', zIndex: 2 }} />
                        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '40px', background: 'linear-gradient(to left, white, rgba(255,255,255,0))', zIndex: 2 }} />
                    </div>

                    {/* Right: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ order: window.innerWidth < 768 ? 1 : 2 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                            <div style={{ padding: '8px', backgroundColor: 'var(--secondary)', color: 'white', borderRadius: '10px' }}>
                                <Sparkles size={22} />
                            </div>
                            <span style={{ color: 'var(--secondary)', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '1px' }}>AI SOLUTION</span>
                        </div>

                        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1.5rem' }}>
                            차세대 AI <br />
                            <span className="gradient-text">부동산 경매</span> 분석 플랫폼
                        </h2>

                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                            AI 옥션은 복잡한 경매 권리 분석부터 최적의 낙찰가 예측까지, AI 기술을 통해 경매의 새로운 기준을 제시합니다.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
                            {features.map((f, i) => (
                                <div key={i}>
                                    <div style={{ color: 'var(--secondary)', marginBottom: '0.6rem' }}>{f.icon}</div>
                                    <h4 style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>{f.title}</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{f.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div style={{ display: 'flex', gap: '15px' }}>
                            <a href="https://play.google.com/store/apps/details?id=com.realestatebc.aiauction" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" style={{ height: '50px' }} />
                            </a>
                            <a href="https://apps.apple.com/us/app/ai-%EC%98%A5%EC%85%98/id6738899811" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" style={{ height: '50px' }} />
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AiAuctionSection;
