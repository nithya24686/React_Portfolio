const stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '5+', label: 'Technologies' },
    { number: '2+', label: 'Years Learning' },
];

export default function About() {
    return (
        <section id="about">
            <div className="section-container">
                <h2 className="section-title">About Me</h2>
                <p className="section-subtitle">Get to know me better</p>

                <div className="about__grid">
                    <div className="about__text-card">
                        <div className="about__avatar">
                            <div className="about__avatar-placeholder">TN</div>
                        </div>
                        <h3 className="about__headline">A passionate learner &amp; developer</h3>
                        <p className="about__bio">
                            I'm <strong>T M Nithya</strong>, a dedicated computer science student with a strong
                            passion for web development and modern technologies. I love creating beautiful,
                            user-friendly applications that solve real-world problems.
                        </p>
                        <p className="about__bio">
                            My journey in tech has been driven by curiosity and a desire to continuously learn
                            and grow. I enjoy working with React, JavaScript, and exploring new frameworks and tools
                            that push the boundaries of what's possible on the web.
                        </p>
                        <p className="about__bio">
                            When I'm not coding, you can find me exploring new technologies, contributing to
                            open-source projects, or learning about the latest trends in software development.
                        </p>
                    </div>

                    <div className="about__stats">
                        {stats.map((stat) => (
                            <div className="about__stat-card" key={stat.label}>
                                <span className="about__stat-number">{stat.number}</span>
                                <span className="about__stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
