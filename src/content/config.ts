import { defineCollection, z } from 'astro:content';

// FAQ 内容集合：每个分类一个 Markdown 文件，正文里用 "### 问句" + 紧跟一段答案 的格式书写。
// 这样渲染出来的 HTML 标题就是完整问句（h3），对 GEO/AI 摘要抓取最友好。
const faq = defineCollection({
  type: 'content',
  schema: z.object({
    category: z.string(),
    order: z.number(),
  }),
});

export const collections = { faq };
