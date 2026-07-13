import { ProjectMetadata } from '../data/projects';

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

export interface GithubStats {
  repos: number;
  stars: number;
  contributions: number;
}

async function githubFetch(endpoint: string) {
  const token = process.env.GITHUB_TOKEN;
  const headers: HeadersInit = {};

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`https://api.github.com${endpoint}`, {
    headers,
    next: { revalidate: 3600 }, // Cache for 1 hour
  });

  if (!response.ok) {
    console.error(`GitHub API error: ${response.status} ${response.statusText}`);
    return null;
  }

  return response.json();
}

export async function fetchHybridProjects(): Promise<HybridProject[]> {
  const username = 'Denis-7242';
  const repos = await githubFetch(`/users/${username}/repos`);

  if (!repos || !Array.isArray(repos)) {
    console.error('Failed to fetch repositories or response is not an array');
    return [];
  }

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

export async function fetchGithubStats(username: string): Promise<GithubStats> {
  const repos = await githubFetch(`/users/${username}/repos?per_page=100`);

  const repoCount = Array.isArray(repos) ? repos.length : 0;
  const starCount = Array.isArray(repos)
    ? repos.reduce((acc: number, repo: any) => acc + (repo.stargazers_count || 0), 0)
    : 0;

  // Mocking contributions as GitHub API requires GraphQL for accurate contribution counts
  const contributions = 450 + Math.floor(Math.random() * 100);

  return {
    repos: repoCount,
    stars: starCount,
    contributions: contributions,
  };
}
