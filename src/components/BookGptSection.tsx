import { motion } from 'framer-motion';
import { MessageSquareText, Search, GraduationCap, ShieldCheck, BookOpenCheck } from 'lucide-react';

const BookGptSection = () => {
    const features = [
        {
            icon: <MessageSquareText size={24} />,
            title: 'AI 대화형 도서 탐색',
            desc: '책의 내용을 학습한 AI와 자연스럽게 대화하며 필요한 지식을 즉시 탐색합니다.'
        },
        {
            icon: <Search size={24} />,
            title: 'RAG 기반 정밀 응답',
            desc: '검색 증강 생성(RAG) 기술을 통해 출처가 명확하고 신뢰할 수 있는 정보를 제공합니다.'
        },
        {
            icon: <GraduationCap size={24} />,
            title: '지능형 문제 생성',
            desc: '도서 내용을 바탕으로 시험 대비 기출 문제와 맞춤형 학습 리포트를 자동 생성합니다.'
        },
        {
            icon: <ShieldCheck size={24} />,
            title: '저작권 보호 솔루션',
            desc: '출판사와 정식 라이선스 계약을 통해 저작권을 보호하며 투명한 지식 생태계를 구축합니다.'
        }
    ];

    // Placeholder images representing the dynamic nature of BookGPT
    const displayImages = [
        'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800'
    ];

    return (
        <section id="book-gpt" style={{ backgroundColor: '#fff', padding: '60px 0', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>

                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                            <div style={{ padding: '8px', backgroundColor: '#4F46E5', color: 'white', borderRadius: '10px' }}>
                                <BookOpenCheck size={22} />
                            </div>
                            <span style={{ color: '#4F46E5', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '1px' }}>AI CHATBOOK</span>
                        </div>

                        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1.5rem' }}>
                            지식의 가치를 깨우는 <br />
                            <span className="gradient-text">살아있는 책</span>, BookGPT
                        </h2>

                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
                            BookGPT는 LLM과 RAG 기술을 결합하여 정적인 도서를 동적인 지식 데이터로 전환합니다.
                            이제 책은 단순히 읽는 대상이 아니라, 당신의 질문에 답하는 지능형 파트너가 됩니다.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
                            {features.map((f, i) => (
                                <div key={i}>
                                    <div style={{ color: '#4F46E5', marginBottom: '0.6rem' }}>{f.icon}</div>
                                    <h4 style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>{f.title}</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{f.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div style={{
                            padding: '1.5rem',
                            backgroundColor: '#F3F4F6',
                            borderRadius: '16px',
                            borderLeft: '4px solid #4F46E5'
                        }}>
                            <p style={{ fontSize: '0.9rem', color: '#374151', fontStyle: 'italic' }}>
                                "전통적인 종이책 시장을 넘어, 휴머노이드 로봇에 지식을 공급하는 API 생태계까지 - BookGPT가 그 중심에 서겠습니다."
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Visual representation */}
                    <div style={{ position: 'relative' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    gridRow: 'span 2',
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                                }}
                            >
                                <img src={displayImages[0]} alt="Library" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                style={{
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                                }}
                            >
                                <img src={displayImages[1]} alt="AI Interaction" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                style={{
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                                }}
                            >
                                <img src={displayImages[2]} alt="Learning" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </motion.div>
                        </div>

                        {/* Abstract Tech Overlay */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '80%',
                            height: '80%',
                            backgroundColor: 'rgba(79, 70, 229, 0.05)',
                            filter: 'blur(60px)',
                            borderRadius: '50%',
                            zIndex: -1
                        }} />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BookGptSection;
