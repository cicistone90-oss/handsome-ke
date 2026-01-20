import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')?.[1] ?? 'handsome-ke'
const base = process.env.DEPLOY_ENV === 'GH_PAGES' ? `/${repoName}/` : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [vue()],
})
