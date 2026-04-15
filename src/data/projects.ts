export interface ProjectMetadata {
  repoName: string;
  customTitle?: string;
  tags: string[];
  liveDemo?: string;
  image?: string;
  featured?: boolean;
}

export const projectsMetadata: Record<string, ProjectMetadata> = {
  // Example: 'my-cool-repo': {
  //   repoName: 'my-cool-repo',
  //   customTitle: 'Cool Project Title',
  //   tags: ['Full Stack', 'AI'],
  //   liveDemo: 'https://demo.com',
  //   image: '/projects/cool.png',
  //   featured: true,
  // },
};
