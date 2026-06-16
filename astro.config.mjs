import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// TODO: 上线前把 site 改成正式域名，sitemap.xml / 结构化数据里的绝对地址都依赖这个配置
export default defineConfig({
  site: 'https://oceanwang66888-star.github.io/senjing-park',
  base: '',
  integrations: [tailwind(), sitemap()],
  output: 'static',
});
