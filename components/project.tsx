export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "NUSMART: A System for Managing Academic Research With a Data- driven Text Tagging Approach",
            description: "Capstone Project — A web application that streamlines the management of academic research projects, utilizing a data-driven text tagging approach to enhance organization and retrieval of research materials.",
            tags: ["React", "Tailwind", "Laravel", "MySQL", "Javascript", "Github"],
            link: "research-nulipa.com",
        },
    ]

    return (
        <div>
            <div className="space-y-3 h-fit overflow-y-auto">
                {projects.map((project) => (
                    <a  href={`https://${project.link}`} key={project.link} target="_blank" rel="noopener noreferrer">
                        <div
                            key={project.id}
                            className="bg-muted/50 border border-border rounded p-3 hover:bg-muted transition-colors"
                        >
                            <h3 className="text-sm font-semibold mb-1">{project.title}</h3>
                            <p className="text-xs text-muted-foreground mb-2">{project.description}</p>
                            <div className="flex flex-wrap gap-1">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="bg-primary/20 text-primary px-2 py-0.5 rounded text-xs font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}
