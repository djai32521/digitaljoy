import { motion } from 'framer-motion';
import { Calendar, User, MapPin, Building2 } from 'lucide-react';

const About = () => {
    const history = [
        { year: '2022', month: '08', event: '(주)디지털조이 설립' },
        { year: '2023', month: '08', event: '생활스포츠매칭플랫폼 "써포츠" 오픈' },
        { year: '2024', month: '04', event: '제 1회 써포츠배 배드민턴 대회 개최' },
        { year: '2025', month: '01', event: '기업부설연구소 및 벤처기업 인증' },
        { year: '2025', month: '06', event: '사무실 성수동 이전' },
    ];

    return (
        <section id="about" style={{ backgroundColor: 'var(--bg-light)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>회사 소개</h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        급변하는 AI/IT 시장에서 독자적인 솔루션과 컨설팅 서비스를 제공하며 고객의 디지털 전환을 선도합니다.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="glass"
                        style={{ padding: '2rem', borderRadius: '16px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
                    >
                        <Building2 className="gradient-text" style={{ marginBottom: '1rem' }} size={32} />
                        <h3 style={{ marginBottom: '1rem' }}>기업 개요</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li style={{ display: 'flex', gap: '10px' }}><MapPin size={18} color="var(--primary)" /> 서울특별시 성동구 성수이로 118</li>
                            <li style={{ display: 'flex', gap: '10px' }}><User size={18} color="var(--primary)" /> 대표자: 성대준</li>
                            <li style={{ display: 'flex', gap: '10px' }}><Calendar size={18} color="var(--primary)" /> 설립일: 2022년 8월 1일</li>
                        </ul>
                    </motion.div>

                    <div id="history" style={{ gridColumn: 'span 2' }}>
                        <h3 style={{ marginBottom: '2rem' }}>주요 연혁</h3>
                        <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid var(--accent)' }}>
                            {history.map((item, index) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    key={index}
                                    style={{ marginBottom: '1.5rem', position: 'relative' }}
                                >
                                    <div style={{
                                        position: 'absolute',
                                        left: '-2.4rem',
                                        top: '5px',
                                        width: '12px',
                                        height: '12px',
                                        borderRadius: '50%',
                                        backgroundColor: 'var(--primary)',
                                        border: '3px solid white'
                                    }} />
                                    <span style={{ fontWeight: 700, color: 'var(--primary)', marginRight: '1rem' }}>{item.year}.{item.month}</span>
                                    <span style={{ color: 'var(--text-main)' }}>{item.event}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;
