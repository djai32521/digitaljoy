import SocialLinks from './SocialLinks';

const TopBar = () => {
    return (
        <div style={{
            backgroundColor: '#020c1b',
            padding: '0.5rem 0',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 1001,
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <SocialLinks iconSize={16} style={{ gap: '1rem', marginTop: 0 }} iconColor="#ccd6f6" />
            </div>
        </div>
    );
};

export default TopBar;
