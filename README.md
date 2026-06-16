# 贵州森境自然教育公园 · 官网项目骨架

基于 Astro（静态站点生成器）+ Tailwind CSS 的官网骨架，针对 GEO（生成式引擎优化）设计。
战略方案、三线运营方案、蝴蝶产业方案、簸箕宴系列方案）。

## 目录结构

```
官网项目/
├── astro.config.mjs        # 站点配置（site 域名、sitemap、tailwind 集成）
├── tailwind.config.cjs
├── tsconfig.json
├── package.json
├── public/
│   ├── robots.txt          # 放行 GPTBot/ClaudeBot/PerplexityBot/百度/字节蜘蛛
│   └── llms.txt            # 给 LLM 看的站点说明书
└── src/
    ├── data/
    │   └── site.ts          # 全站统一的品牌/联系信息单一数据源（NAP 信息）
    ├── layouts/
    │   └── BaseLayout.astro # 公共 HTML 骨架 + SEO meta + 默认 LocalBusiness JSON-LD
    ├── components/
    │   ├── Header.astro
    │   ├── Footer.astro
    │   └── JsonLd.astro     # 注入任意 schema.org 结构化数据
    ├── content/
    │   ├── config.ts        # FAQ 内容集合的 schema 定义
    │   └── faq/              # FAQ 初稿，按分类拆成 6 个 Markdown 文件（共约30个问答）
    │       ├── 01-basic-info.md
    │       ├── 02-nature-education.md
    │       ├── 03-team-building.md
    │       ├── 04-wedding.md
    │       ├── 05-cuisine.md
    │       └── 06-research-and-about.md
    └── pages/
        ├── index.astro
        ├── faq.astro          # 自动从 content/faq/*.md 生成页面正文 + FAQPage JSON-LD
        ├── about.astro
        ├── contact.astro
        ├── nature-education/
        ├── team-building/
        ├── wedding/
        ├── cuisine/
        ├── park-guide/
        ├── tickets/
        └── news/
```

## 怎么跑起来

```bash
npm install
npm run dev      # 本地预览 http://localhost:4321
npm run build    # 输出纯静态 HTML 到 dist/，可直接部署到任意静态托管
```

## 上线前必须做的事（按优先级）

1. **补齐 `src/data/site.ts` 里的 TODO**：客服电话、详细地址/坐标、统一社会信用代码、Logo、企业微信/抖音/小红书账号链接。这个文件是全站唯一信息源，改这一处全站生效。
2. **统一品牌名写法**：资料里"鑫鸿彬"和"鑫宏彬"两种写法混用，对外必须只用一个，否则用户和 AI 引擎会认为是两个不同的地方。
3. **完成 ICP 备案**，再绑定域名上线（大陆服务器/CDN 强制要求）。
4. **把 `astro.config.mjs` 和 `public/robots.txt` 里的占位域名 `senjing-naturepark.com` 换成正式域名**。
5. **`src/pages/team-building/cases.astro`、`src/pages/about.astro` 资质部分、`src/pages/park-guide/index.astro` 地图**里标了 TODO 的地方，等真实素材/案例/资质到位后替换。
6. **联系表单**目前是纯前端 `<form>`，没有接后端，需要接一个轻量提交通道（腾讯问卷/Serverless 接口/第三方表单服务），上线前必须打通，否则用户填了表单也提交不出去。

## FAQ 内容怎么维护

`src/content/faq/*.md` 每个文件对应一个分类，正文格式固定为：

```markdown
### 完整问句

答案内容，2-4句完整、独立成段的陈述句。
```

`faq.astro` 会自动解析这个格式，同时生成页面正文和 `FAQPage` JSON-LD 结构化数据——**新增问答只需要按格式加到对应分类文件里，不需要改代码**。

## GEO 关键设计点（已落地在骨架里）

- 全站纯静态 HTML（Astro 默认输出，无客户端渲染依赖）
- 每页 `BaseLayout` 自动注入 `TouristAttraction`/`LocalBusiness` 结构化数据
- FAQ 页自动生成 `FAQPage` JSON-LD
- 课程页（`nature-education/courses.astro`）注入 `Service`/`ItemList` 结构化数据
- `robots.txt` 显式放行主流 AI 爬虫
- `llms.txt` 提供站点速览
- 关键事实（地址/车程/价格/开放时间）在首屏和页面正文里都用独立短句呈现，方便 AI 摘要抽取
