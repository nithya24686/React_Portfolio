const projects = [
    {
        title: 'Portfolio Website',
        description: 'A modern, responsive portfolio built with React and Vite showcasing my work and skills.',
        tags: ['React', 'CSS', 'Vite'],
        color: '#7c3aed',
    },
    {
        title: 'Weather App',
        description: 'Real-time weather application using API integration with beautiful UI and location-based search.',
        tags: ['JavaScript', 'API', 'CSS'],
        color: '#3b82f6',
    },
    {
        title: 'Task Manager',
        description: 'A full-featured task management app with CRUD operations, filters, and persistent storage.',
        tags: ['React', 'Node.js', 'MongoDB'],
        color: '#06b6d4',
    },
    {
        title: 'E-Commerce UI',
        description: 'A sleek e-commerce frontend with product listings, cart functionality, and responsive design.',
        tags: ['React', 'CSS', 'JavaScript'],
        color: '#8b5cf6',
    },
];

export default function Projects() {
    return (
        <section id="projects">
            <div className="section-container">
                <h2 className="section-title">My Projects</h2>
                <p className="section-subtitle">Some of my recent work</p>

                <div className="projects__grid">
                    {projects.map((project) => (
                        <div
                            className="projects__card"
                            key={project.title}
                            style={{ '--card-accent': project.color }}
                        >
                            <div className="projects__card-header">
                                <div className="projects__card-icon">📁</div>
                                <div className="projects__card-links">
                                    <span className="projects__link" title="View Code">↗</span>
                                </div>
                            </div>
                            <h3 className="projects__card-title">{project.title}</h3>
                            <p className="projects__card-desc">{project.description}</p>
                            <div className="projects__tags">
                                {project.tags.map((tag) => (
                                    <span className="projects__tag" key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
