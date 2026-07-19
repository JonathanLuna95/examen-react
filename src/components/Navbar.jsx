import './Navbar.css';

function Navbar({ totalJugadores }){
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <span className="navbar-brand">FINAL 2026</span>
                <div className="navbar-counter">
                    <span className="counter-badge">{totalJugadores} JUGADORES</span>
                </div>
            </div>
            <div className="navbar-multicolor-line"></div>
        </nav>
    );
}

export default Navbar;