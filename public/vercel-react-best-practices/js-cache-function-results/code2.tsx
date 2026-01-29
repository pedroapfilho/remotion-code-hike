// Cache Repeated Function Calls
// ✅ Right: Compute expensive function once per unique input, reuse cached result

// Module-level cache
const slugifyCache = new Map<string, string>();

function cachedSlugify(text: string): string {
  if (slugifyCache.has(text)) {
    return slugifyCache.get(text)!;
  }
  const result = slugify(text);
  slugifyCache.set(text, result);
  return result;
}

function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div>
      {projects.map((project) => {
        // Computed only once per unique project name
        const slug = cachedSlugify(project.name);

        return <ProjectCard key={project.id} slug={slug} />;
      })}
    </div>
  );
}
