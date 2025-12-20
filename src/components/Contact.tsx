import { Phone, Printer, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" style={{ backgroundColor: '#0A192F', color: 'white' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>협력 및 문의</h2>
                        <p style={{ color: '#8892B0', marginBottom: '2.5rem' }}>
                            디지털조이와 함께 혁신적인 미래를 만들어갈 파트너를 기다립니다.<br />
                            궁금하신 점이 있다면 언제든 연락주세요.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ padding: '10px', backgroundColor: 'rgba(0,169,206,0.1)', borderRadius: '10px' }}>
                                    <Phone size={20} color="var(--primary)" />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.9rem', color: '#8892B0' }}>전화번호</p>
                                    <p style={{ fontWeight: 600 }}>010-5132-3252</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ padding: '10px', backgroundColor: 'rgba(0,169,206,0.1)', borderRadius: '10px' }}>
                                    <Printer size={20} color="var(--primary)" />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.9rem', color: '#8892B0' }}>팩스번호</p>
                                    <p style={{ fontWeight: 600 }}>0504-378-3252</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ padding: '10px', backgroundColor: 'rgba(0,169,206,0.1)', borderRadius: '10px' }}>
                                    <MapPin size={20} color="var(--primary)" />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.9rem', color: '#8892B0' }}>주소</p>
                                    <p style={{ fontWeight: 600 }}>서울특별시 성동구 성수이로 118, 성수아카데미타워 724호</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass" style={{ padding: '3rem', borderRadius: '24px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 500 }}>성함</label>
                                <input type="text" placeholder="홍길동" style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 500 }}>이메일</label>
                                <input type="email" placeholder="example@digitaljoy.co.kr" style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 500 }}>문의 내용</label>
                                <textarea rows={4} placeholder="문의하실 내용을 입력해주세요." style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white' }}></textarea>
                            </div>
                            <button className="btn-primary" type="button" style={{ width: '100%', justifyContent: 'center' }}>문의 보내기</button>
                        </form>
                    </div>
                </div>

                <div style={{ marginTop: '8rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', color: '#8892B0', fontSize: '0.9rem' }}>
                    <p>© 2025 (주)디지털조이. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
