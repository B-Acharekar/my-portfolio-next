import { client } from '@/sanity/lib/client';
import ProjectCard from '@/components/ProjectCard';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Project = {
    _id: string;
    title: string;
    description: string;
    tech: string[];
    githubUrl: string;
    liveUrl?: string;
    image: SanityImageSource;
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
        <section className="px-6 md:px-16 py-20 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-900 dark:text-white transition-colors duration-300">
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
