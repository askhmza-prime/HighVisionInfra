import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  slug: string;
  location: string;
  price: string;
  image: string;
  type: string;
  featured?: boolean;
}

interface ProjectGridProps {
  projects: Project[];
  featuredOnly?: boolean;
}

export default function ProjectGrid({
  projects,
  featuredOnly = false,
}: ProjectGridProps) {
  const displayProjects = featuredOnly
    ? projects.filter((project) => project.featured)
    : projects;

  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
      {displayProjects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          slug={project.slug}
          location={project.location}
          price={project.price}
          image={project.image}
          type={project.type}
        />
      ))}
    </div>
  );
          }
