import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import ProjectCard from '@/components/ProjectCard';

type Project = {
    _id: string;
    title: string;
    description: string;
    tech: string[];
    githubUrl: string;
    liveUrl?: string;
    image: any;
};

export default async function ProjectsSection() {
    const query = `*[_type == "project"] | order(_createdAt desc){
    _id,
    title,
    description,
    tech,
    githubUrl,
    liveUrl,
    image
  }`;

    const projects: Project[] = await client.fetch(query);

    return (
        <section className="px-6 md:px-16 py-20 bg-gray-50 dark:bg-gray-950">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-violet-600 text-center md:text-left">
                    Projects
                </h2>

                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard key={project._id} {...project} delay={index * 0.1} />
                    ))}
                </div>

            </div>
        </section>
    );
}
