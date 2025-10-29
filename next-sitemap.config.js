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
  transform: async (config, path) => {
    // Custom priority for different pages
    let priority = 0.7;
    if (path === '/') priority = 1.0;
    if (path === '/suites' || path === '/contact') priority = 0.9;
    if (path === '/about' || path === '/gallery') priority = 0.8;

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
