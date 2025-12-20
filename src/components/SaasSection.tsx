import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutPanelLeft, Users2, BarChart3, MessageSquare, Globe } from 'lucide-react';

const SaasSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    const saasProducts = [
        {
            id: 0,
            name: 'Digital Joy Studio',
            icon: <LayoutPanelLeft size={24} />,
            title: '클라우드 네이티브 콘텐츠 관리 플랫폼',
            description: '콘텐츠 제작자가 비디오를 편집하고, 메타데이터를 관리하며, 다양한 디지털 플랫폼에 원클릭으로 게시할 수 있는 통합 솔루션입니다.',
            features: ['실시간 비디오 편집 및 렌더링', '멀티 플랫폼 동시 송출', '지능형 콘텐츠 자산 관리(DAM)', '협업 워크플로우 자동화'],
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 1,
            name: 'Digital Joy Engage',
            icon: <Users2 size={24} />,
            title: '실시간 청중 상호작용 솔루션',
            description: '라이브 방송이나 이벤트 중 실시간 투표, 퀴즈, 콘테스트를 통해 청중의 참여를 극대화하고 즉각적인 피드백을 수집합니다.',
            features: ['실시간 투표 및 결과 시각화', '대화형 퀴즈 및 랭킹 시스템', '사용자 경험 맞춤형 UI 제공', '데이터 기반 참여도 분석'],
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 2,
            name: 'INSIGHT',
            icon: <BarChart3 size={24} />,
            title: '멀티 클라우드 거버넌스 플랫폼',
            description: 'GCP, AWS, Azure 등 흩어진 클라우드 자원을 한곳에서 관리하고 비용을 최적화하여 운영 효율성을 높이는 거버넌스 솔루션입니다.',
            features: ['클라우드 비용 통합 모니터링', '리소스 낭비 탐지 및 자동 배분', '보안 규정 준수 체크리스트', 'AI 기반 비용 예측 리포트'],
            image: 'https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 3,
            name: 'Digital Joy Events / Chat',
            icon: <MessageSquare size={24} />,
            title: '가상 이벤트 및 보안 채팅 시스템',
            description: '브랜드 가상 이벤트를 개최하고, 안전하고 강력한 채팅 시스템을 통해 참가자 간의 연결성을 강화합니다.',
            features: ['맞춤형 가상 이벤트 홀 구축', '그룹 및 1:1 암호화 채팅', '실시간 방송 화질 최적화', '참가자 행동 데이터 수집'],
            image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800'
        }
    ];

    return (
        <section id="saas" style={{ padding: '100px 0', backgroundColor: '#fff' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <span style={{
                        color: 'var(--primary)',
                        fontWeight: 700,
                        letterSpacing: '2px',
                        fontSize: '0.9rem',
                        textTransform: 'uppercase'
                    }}>Cloud & SaaS Solution</span>
                    <h2 style={{ fontSize: '2.5rem', marginTop: '1rem', marginBottom: '1.5rem' }}>온라인 서비스 SaaS</h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        디지털조이의 지능형 클라우드 기술을 바탕으로 기업의 디지털 전환을 가속화하는 전문 SaaS 제품군을 소개합니다.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '10px',
                    marginBottom: '4rem',
                    backgroundColor: '#f8fafc',
                    padding: '8px',
                    borderRadius: '16px',
                    width: 'fit-content',
                    margin: '0 auto 4rem auto'
                }}>
                    {saasProducts.map((product) => (
                        <button
                            key={product.id}
                            onClick={() => setActiveTab(product.id)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '12px 24px',
                                borderRadius: '12px',
                                border: 'none',
                                backgroundColor: activeTab === product.id ? 'white' : 'transparent',
                                color: activeTab === product.id ? 'var(--primary)' : 'var(--text-muted)',
                                fontWeight: 600,
                                cursor: 'pointer',
                                boxShadow: activeTab === product.id ? '0 4px 12px rgba(0,0,0,0.05)' : 'none',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {product.icon}
                            <span>{product.name}</span>
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div style={{ minHeight: '400px' }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                gap: '4rem',
                                alignItems: 'center'
                            }}
                        >
                            <div>
                                <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: '#1a1a1a' }}>
                                    {saasProducts[activeTab].title}
                                </h3>
                                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                                    {saasProducts[activeTab].description}
                                </p>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                                    {saasProducts[activeTab].features.map((feature, index) => (
                                        <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <div style={{ color: 'var(--primary)' }}>
                                                <Globe size={20} />
                                            </div>
                                            <span style={{ fontWeight: 500, color: '#333' }}>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <motion.div
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    style={{
                                        borderRadius: '24px',
                                        overflow: 'hidden',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                                    }}
                                >
                                    <img
                                        src={saasProducts[activeTab].image}
                                        alt={saasProducts[activeTab].name}
                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                    />
                                </motion.div>
                                {/* Decorative dots */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-20px',
                                    right: '-20px',
                                    width: '100px',
                                    height: '100px',
                                    backgroundImage: 'radial-gradient(var(--primary) 2px, transparent 2px)',
                                    backgroundSize: '15px 15px',
                                    zIndex: -1
                                }} />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default SaasSection;
