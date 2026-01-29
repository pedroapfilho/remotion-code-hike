// Cache Repeated Function Calls
// ❌ Wrong: This approach has performance issues

function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div>
      {projects.map((project) => {
        // slugify() called 100+ times for same project names
        const slug = slugify(project.name);

        return <ProjectCard key={project.id} slug={slug} />;
      })}
    </div>
  );
}
