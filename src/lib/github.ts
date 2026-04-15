import { ProjectMetadata } from './data/projects';

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  forks_count: number;
}

export interface HybridProject extends GitHubRepo {
  customTitle?: string;
  tags: string[];
  liveDemo?: string;
  image?: string;
  featured?: boolean;
}

export async function fetchHybridProjects(): Promise<HybridProject[]> {
  const username = 'Denis-7242';
  const response = await fetch(`https://api.github.com/users/${username}/repos`, {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });

  if (!response.ok) {
    throw new Error('Failed to fetch repositories from GitHub');
  }

  const repos: GitHubRepo[] = await response.json();
  const { projectsMetadata } = await import('../data/projects');

  return repos
    .filter(repo => !repo.forks_count && repo.description) // Exclude forks, include only with descriptions
    .map(repo => {
      const meta = projectsMetadata[repo.name] || {
        repoName: repo.name,
        tags: repo.language ? [repo.language] : ['General'],
      };

      return {
        ...repo,
        customTitle: meta.customTitle || repo.name,
        tags: meta.tags,
        liveDemo: meta.liveDemo,
        image: meta.image,
        featured: meta.featured || false,
      };
    });
}
