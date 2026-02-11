import { useState } from 'react';

const contactInfo = [
    { icon: '📧', label: 'Email', value: 'nithya@example.com' },
    { icon: '📍', label: 'Location', value: 'India' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/nithya' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/nithya' },
];

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact">
            <div className="section-container">
                <h2 className="section-title">Get in Touch</h2>
                <p className="section-subtitle">I'd love to hear from you</p>

                <div className="contact__grid">
                    <div className="contact__info">
                        <h3 className="contact__info-title">Let's Talk</h3>
                        <p className="contact__info-text">
                            Feel free to reach out for collaborations, opportunities, or just to say hello!
                        </p>
                        <div className="contact__details">
                            {contactInfo.map((item) => (
                                <div className="contact__detail" key={item.label}>
                                    <span className="contact__detail-icon">{item.icon}</span>
                                    <div>
                                        <strong>{item.label}</strong>
                                        <p>{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <form className="contact__form" onSubmit={handleSubmit}>
                        <div className="contact__field">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="contact__field">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="contact__field">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="5"
                                value={form.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="contact__submit">
                            {submitted ? '✓ Message Sent!' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
