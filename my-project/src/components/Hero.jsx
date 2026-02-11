import { useState, useEffect } from 'react';

const roles = ['Web Developer', 'React Enthusiast', 'Problem Solver', 'Tech Explorer'];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = roles[roleIndex];
        let timeout;

        if (!deleting && text.length < current.length) {
            timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 100);
        } else if (!deleting && text.length === current.length) {
            timeout = setTimeout(() => setDeleting(true), 1800);
        } else if (deleting && text.length > 0) {
            timeout = setTimeout(() => setText(text.slice(0, -1)), 60);
        } else if (deleting && text.length === 0) {
            setDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }

        return () => clearTimeout(timeout);
    }, [text, deleting, roleIndex]);

    return (
        <section id="home" className="hero">
            {/* Animated background orbs */}
            <div className="hero__orb hero__orb--1"></div>
            <div className="hero__orb hero__orb--2"></div>
            <div className="hero__orb hero__orb--3"></div>

            <div className="hero__content">
                <p className="hero__greeting">Hello, I'm</p>
                <h1 className="hero__name">T M Nithya</h1>
                <div className="hero__role-wrapper">
                    <span className="hero__role-prefix">I'm a </span>
                    <span className="hero__role">{text}</span>
                    <span className="hero__cursor">|</span>
                </div>
                <p className="hero__description">
                    Passionate about building exceptional digital experiences with modern web technologies.
                    I turn ideas into elegant, functional applications.
                </p>
                <div className="hero__actions">
                    <a href="#projects" className="hero__btn hero__btn--primary">View My Work</a>
                    <a href="#contact" className="hero__btn hero__btn--secondary">Get in Touch</a>
                </div>
            </div>

            <div className="hero__scroll-indicator">
                <div className="hero__scroll-mouse">
                    <div className="hero__scroll-dot"></div>
                </div>
                <span>Scroll Down</span>
            </div>
        </section>
    );
}
