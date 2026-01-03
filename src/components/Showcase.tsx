import { ExternalLink } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Showcase = () => {
    const showcases = [
        {
            title: "삼호건축기와 홈페이지",
            url: "https://djai32521.github.io/samhogiwa/",
            description: "전통과 현대가 어우러진 건축 기와 전문 기업 홈페이지입니다."
        },
        {
            title: "금호출판사 홈페이지",
            url: "https://djai32521.github.io/kumhobook/",
            description: "다양한 도서를 출판하는 금호출판사의 공식 웹사이트입니다."
        },
        {
            title: "AI Gallery Showcase",
            url: "https://djai32521.github.io/ai-gallery/",
            description: "AI로 생성된 독창적인 예술 작품들을 전시하는 갤러리입니다."
        },
        {
            title: "2026년 AI 연하장",
            url: "https://djai32521.github.io/newyear/",
            description: "AI 기술을 활용하여 제작한 2026년 신년 연하장입니다."
        }
    ];

    return (
        <section id="showcase" style={{ padding: '5rem 0', backgroundColor: '#f8f9fa' }}>
            <div className="container">
                <SectionTitle
                    id="showcase-title"
                    title="Showcase"
                    subtitle="디지털조이가 제작한 다양한 웹사이트와 프로젝트를 만나보세요."
                />

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    marginTop: '3rem'
                }}>
                    {showcases.map((item, index) => (
                        <div key={index} className="glass" style={{
                            padding: '2rem',
                            borderRadius: '16px',
                            backgroundColor: 'white',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            transition: 'transform 0.3s ease',
                            border: '1px solid rgba(0,0,0,0.05)'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#0A192F', fontWeight: 700 }}>
                                    {item.title}
                                </h3>
                                <p style={{ color: '#666', marginBottom: '2rem', lineHeight: 1.6 }}>
                                    {item.description}
                                </p>
                            </div>
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    textDecoration: 'none'
                                }}
                            >
                                방문하기 <ExternalLink size={16} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Showcase;
