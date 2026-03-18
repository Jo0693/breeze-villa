import fs from 'fs';
import path from 'path';

type Locale = 'fr' | 'en';

export function getContent<T = Record<string, unknown>>(
  page: string,
  locale: Locale = 'fr'
): T {
  const filePath = path.join(process.cwd(), 'content', `${page}.json`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(raw);
  return data[locale] as T;
}

export function getSeo(page: string, locale: Locale = 'fr') {
  const filePath = path.join(process.cwd(), 'seo-data', `${page}.seo.json`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(raw);
  return data[locale] as {
    title: string;
    description: string;
    keywords: string;
  };
}
