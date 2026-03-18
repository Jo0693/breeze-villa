/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://breeze-villa.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  exclude: ['/server-sitemap.xml'],
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  additionalPaths: async (config) => {
    const locales = ['fr', 'en'];
    const pages = ['', '/about', '/suites', '/gallery', '/contact', '/around'];
    const paths = [];
    for (const locale of locales) {
      for (const page of pages) {
        paths.push(await config.transform(config, `/${locale}${page}`));
      }
    }
    return paths;
  },
  transform: async (config, path) => {
    let priority = 0.7;
    if (path === '/' || path === '/fr' || path === '/en') priority = 1.0;
    if (path.includes('/suites') || path.includes('/contact')) priority = 0.9;
    if (path.includes('/about') || path.includes('/gallery')) priority = 0.8;

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
