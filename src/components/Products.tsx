import { motion } from 'framer-motion';

const Products = () => {
    const products = [
        {
            category: 'service',
            title: 'GPTs 솔루션 / BookGPT',
            desc: '전문 지식 데이터를 기반으로 한 GPTs 제작 및 단순 작업 자동화 솔루션을 제공합니다.',
            tag: 'AI Solution',
            link: 'https://kmong.com/gig/668348',
            image: 'https://static.cdn.kmong.com/gigs/Lxi4j1747301893.jpg'
        },
        {
            category: 'dev',
            title: '모바일 앱 개발 (SSPORTS)',
            desc: 'Flutter를 이용한 생활스포츠 플랫폼 등 안드로이드 및 iOS 크로스플랫폼 앱을 개발합니다.',
            tag: 'Mobile App',
            link: 'https://kmong.com/gig/536303',
            image: 'https://static.cdn.kmong.com/gigs/vaviT1739771985.jpg'
        },
        {
            category: 'service',
            title: 'AI OCR & 마스킹 대행',
            desc: '문서 스캔부터 AI OCR 인식, 민감한 개인정보 마스킹까지 원스톱 대행 서비스를 제공합니다.',
            tag: 'Enterprise',
            link: 'https://kmong.com/gig/669087',
            image: 'https://static.cdn.kmong.com/gigs/RXq2h1747636158.jpg'
        },
        {
            category: 'dev',
            title: 'AI Web/App 서비스 개발',
            desc: 'ChatGPT, DeepSeek 연계 고성능 AI 웹 및 앱 서비스 구축을 지원합니다.',
            tag: 'AI Platform',
            link: 'https://kmong.com/gig/548639',
            image: 'https://static.cdn.kmong.com/gigs/s86Gp1707812339.jpg'
        },
        {
            category: 'dev',
            title: 'AI 연계 모듈 개발',
            desc: '기술적인 AI API 연계 및 데이터 전처리 모듈을 웹/앱 환경에 맞춰 개발합니다.',
            tag: 'AI Module',
            link: 'https://kmong.com/gig/538373',
            image: 'https://static.cdn.kmong.com/gigs/HLWYX1704957502.png'
        },
        {
            category: 'dev',
            title: 'C# / ASP.NET AI 개발',
            desc: '닷넷 환경에서의 AI 인터페이스 개발 및 시스템 통합 전문 서비스를 제공합니다.',
            tag: 'System Integration',
            link: 'https://kmong.com/gig/621847',
            image: 'https://static.cdn.kmong.com/gigs/xRWCq1732694094.jpg'
        }
    ];

    return (
        <section id="products" style={{ backgroundColor: '#fdfdfd', padding: '100px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.2rem', fontWeight: 800 }}>SI 개발</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>디지털조이의 숙련된 기술력으로 완성된 주요 개발 및 서비스 포트폴리오입니다.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {products.map((product, index) => (
                        <motion.div
                            key={product.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                borderRadius: '24px',
                                backgroundColor: 'white',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
                                border: '1px solid #f0f0f0',
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{ width: '100%', height: '240px', overflow: 'hidden', backgroundColor: '#fafafa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                />
                            </div>
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', gap: '8px', marginBottom: '1.2rem' }}>
                                    <span style={{
                                        fontSize: '0.75rem',
                                        fontWeight: 800,
                                        color: 'white',
                                        backgroundColor: 'var(--primary)',
                                        padding: '4px 12px',
                                        borderRadius: '20px',
                                    }}>
                                        {product.tag}
                                    </span>
                                    <span style={{
                                        fontSize: '0.75rem',
                                        fontWeight: 800,
                                        color: 'var(--primary)',
                                        backgroundColor: 'rgba(0,169,222,0.1)',
                                        padding: '4px 12px',
                                        borderRadius: '20px',
                                    }}>
                                        {product.category === 'dev' ? 'Development' : 'Service'}
                                    </span>
                                </div>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 700 }}>{product.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem', flex: 1 }}>{product.desc}</p>
                                <a
                                    href={product.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '1.1rem',
                                        borderRadius: '14px',
                                        backgroundColor: '#FFD400',
                                        color: '#1A1A1A',
                                        fontWeight: 800,
                                        fontSize: '1rem',
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 10px 20px rgba(255, 212, 0, 0.2)'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-3px)';
                                        e.currentTarget.style.boxShadow = '0 15px 30px rgba(255, 212, 0, 0.4)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 10px 20px rgba(255, 212, 0, 0.2)';
                                    }}
                                >
                                    크몽 상세페이지 바로가기
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
