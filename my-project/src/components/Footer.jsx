export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__brand">
                    <span className="footer__logo">
                        <span className="footer__logo-accent">N</span>ithya
                    </span>
                    <p className="footer__tagline">Building the future, one line at a time.</p>
                </div>
                <div className="footer__links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="footer__divider"></div>
                <p className="footer__copy">
                    © {new Date().getFullYear()} T M Nithya. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
