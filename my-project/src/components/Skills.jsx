const skills = [
    { name: 'HTML5', level: 90, icon: '🌐' },
    { name: 'CSS3', level: 85, icon: '🎨' },
    { name: 'JavaScript', level: 80, icon: '⚡' },
    { name: 'React', level: 75, icon: '⚛️' },
    { name: 'Python', level: 70, icon: '🐍' },
    { name: 'Git & GitHub', level: 75, icon: '🔧' },
    { name: 'Node.js', level: 65, icon: '🟢' },
    { name: 'SQL', level: 70, icon: '🗃️' },
];

export default function Skills() {
    return (
        <section id="skills">
            <div className="section-container">
                <h2 className="section-title">My Skills</h2>
                <p className="section-subtitle">Technologies I work with</p>

                <div className="skills__grid">
                    {skills.map((skill) => (
                        <div className="skills__card" key={skill.name}>
                            <div className="skills__icon">{skill.icon}</div>
                            <h3 className="skills__name">{skill.name}</h3>
                            <div className="skills__bar-bg">
                                <div
                                    className="skills__bar-fill"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                            <span className="skills__level">{skill.level}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
