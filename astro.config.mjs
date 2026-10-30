import { defineConfig } from 'astro/config';

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserSite = repo.endsWith('.github.io');

// GitHub Pages 项目页会挂在 /仓库名 下；用户页（用户名.github.io）则是根路径
const base =
  process.env.BASE_PATH ?? (repo && !isUserSite ? `/${repo}/` : '/');

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://example.com',
  base,
  output: 'static',
  build: { format: 'directory' },
});
