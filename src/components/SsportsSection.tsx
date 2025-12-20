import { motion } from 'framer-motion';
import { Trophy, Layout, Users, MapPin, Calendar } from 'lucide-react';

const SsportsSection = () => {
    const features = [
        {
            icon: <MapPin size={24} />,
            title: '내 주변 인원 매칭',
            desc: 'GPS 기반으로 내 주변의 운동 모임을 찾고 실시간으로 참여하세요.'
        },
        {
            icon: <Calendar size={24} />,
            title: '간편한 일정 관리',
            desc: '번거로운 투표 없이 앱 내에서 운동 스케줄을 생성하고 인원을 모집하세요.'
        },
        {
            icon: <Users size={24} />,
            title: '스포츠 커뮤니티',
            desc: '관심 종목이 같은 사람들과 정보를 공유하고 소통할 수 있는 전용 공간을 제공합니다.'
        },
        {
            icon: <Layout size={24} />,
            title: '대회 운영 솔루션',
            desc: '소규모 모임부터 대규모 대회까지 대진표 작성 및 결과 기록을 자동화합니다.'
        }
    ];

    const screenshots = [
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/9a/50/ce/9a50ce83-f0bc-56ee-b301-314c777f2a73/8143bf23-af1c-4843-bfd1-8589149ca4bb_1284_2778.jpg/1284x2778bb.jpg',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/a1/9b/40/a19b40f0-3cfa-21ab-93bc-9f3e862e3ccc/17c29b50-f783-408e-9f17-937e639ea269_1284_2778-2.jpg/1284x2778bb.jpg',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/2f/5f/66/2f5f6674-11bd-dee5-7e56-64e3fe1b57c2/ca8592d8-3887-4585-83c8-28d0d108caac_1284_2778-3.jpg/1284x2778bb.jpg',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/dc/67/cc/dc67cc57-0a58-4404-a7d8-f73da5f5f527/8c550b77-1421-4109-bbc8-cad3d19d4e8b_1284_2778-4.jpg/1284x2778bb.jpg'
    ];

    // Double the screenshots for seamless infinite loop
    const infiniteScreens = [...screenshots, ...screenshots];

    return (
        <section id="ssports" style={{ backgroundColor: '#f8fafc', padding: '60px 0', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                            <div style={{ padding: '8px', backgroundColor: 'var(--primary)', color: 'white', borderRadius: '10px' }}>
                                <Trophy size={22} />
                            </div>
                            <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '1px' }}>MAIN PRODUCT</span>
                        </div>

                        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1.5rem' }}>
                            대한민국 No.1 <br />
                            <span className="gradient-text">생활스포츠 매칭</span> 플랫폼
                        </h2>

                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                            써포츠(SSPORTS)는 복잡한 절차 없이 누구나 즐겁게 운동할 수 있는 환경을 만듭니다.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
                            {features.map((f, i) => (
                                <div key={i}>
                                    <div style={{ color: 'var(--primary)', marginBottom: '0.6rem' }}>{f.icon}</div>
                                    <h4 style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>{f.title}</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{f.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div style={{ display: 'flex', gap: '15px' }}>
                            <a href="https://play.google.com/store/apps/details?id=com.digitaljoy.supports" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" style={{ height: '50px' }} />
                            </a>
                            <a href="https://apps.apple.com/us/app/%EC%8D%A8%ED%8F%AC%EC%B8%A0-%EC%83%9D%ED%99%9C-%EC%8A%A4%ED%8F%AC%EC%B8%A0-%EB%A7%A4%EC%B9%AD-%ED%94%8C%EB%9E%AB%ED%8F%BC/id1668067684" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" style={{ height: '50px' }} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Infinite Auto-Scrolling Gallery */}
                    <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
                        <motion.div
                            style={{
                                display: 'flex',
                                gap: '15px',
                                padding: '10px 0',
                                width: 'max-content'
                            }}
                            animate={{
                                x: [0, -940], // 4 images * (220px + 15px gap) = 940px
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 15,
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
                                        border: '6px solid #1a1a1a',
                                        backgroundColor: '#1a1a1a',
                                        flexShrink: 0
                                    }}
                                >
                                    <img src={src} alt={`SSPORTS Screenshot ${i + 1}`} style={{ width: '100%', display: 'block' }} />
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
                            background: 'radial-gradient(circle, rgba(0,169,222,0.1) 0%, rgba(255,255,255,0) 70%)',
                            zIndex: -1
                        }} />

                        {/* Fading gradients on edges */}
                        <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '40px', background: 'linear-gradient(to right, #f8fafc, rgba(248,250,252,0))', zIndex: 2 }} />
                        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '40px', background: 'linear-gradient(to left, #f8fafc, rgba(248,250,252,0))', zIndex: 2 }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SsportsSection;
