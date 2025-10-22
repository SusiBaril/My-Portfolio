export default function Certificates() {
    const certificates = [
      {
        id: 1,
        title: "IC3 GS6 Digital Literacy Certification Level 1",
        issuer: "Certiport",
        date: "2024",
      },
      {
        id: 2,
        title: "Information Technology Specialist in Software Development",
        issuer: "Certiport",
        date: "2025",
      },
    ]
  
    return (
      <div>
        <div className="space-y-3 h-fit overflow-y-auto">
          {certificates.map((cert) => (
            <div key={cert.id} className="bg-muted/50 border border-border rounded p-3 hover:bg-muted transition-colors">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm text-foreground">{cert.title}</h3>
                  <p className="text-xs text-primary font-medium">{cert.issuer}</p>
                </div>
                <span className="text-xs text-muted-foreground bg-background px-2 py-1 rounded whitespace-nowrap">
                  {cert.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  