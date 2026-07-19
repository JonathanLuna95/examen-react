import './Header.css';

function Header(){
    return (
        <header className="header-hero">
            <div className="hero-team-side side-argentina"></div>
            <div className="hero-team-side side-espana"></div>
            
            <div className="header-content">
                <span className="hero-top-tag">FINAL · MUNDIAL 2026</span>
                <h1 className="hero-main-title">
                    <span className="team-arg">ARGENTINA</span>
                    <span className="vs-badge">VS</span>
                    <span className="team-esp">ESPAÑA</span>
                </h1>
                <h2 className="hero-highlight-text">LA GRAN FINAL</h2>
                <p className="header-subtitle">Los 52 protagonistas que buscarán alcanzar la gloria.</p>
            </div>
        </header>
    );
}

export default Header;