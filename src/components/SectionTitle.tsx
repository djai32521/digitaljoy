import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, id }: { title: string, subtitle?: string, id?: string }) => {
    return (
        <section id={id} style={{ padding: '80px 0 20px 0', backgroundColor: 'white' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 800 }}>{title}</h2>
                    {subtitle && <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>{subtitle}</p>}
                </motion.div>
            </div>
        </section>
    );
};

export default SectionTitle;
