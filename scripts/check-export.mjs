import assert from 'node:assert/strict';
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('out');
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map(entry => entry.isDirectory() ? walk(path.join(dir, entry.name)) : path.join(dir, entry.name)));
  return files.flat();
}
const files = (await walk(root)).filter(file => file.endsWith('.html'));
assert(files.length >= 13, 'Expected all portfolio routes and a 404 page');
let references = 0;
for (const file of files) {
  const html = await readFile(file, 'utf8');
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `Expected one h1: ${file}`);
  assert(html.includes('id="main-content"'), `Missing skip-link destination: ${file}`);
  assert(!/hello@example\.com|cv-placeholder\.pdf/.test(html), `Placeholder contact link: ${file}`);
  for (const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)(?:[^" ]*)"/g)) {
    const url = match[1];
    if (url.startsWith('//')) continue;
    const local = path.resolve(root, '.' + decodeURIComponent(url));
    assert(local === root || local.startsWith(root + path.sep), 'Asset outside export');
    const target = url.endsWith('/') ? path.join(local, 'index.html') : local;
    assert((await stat(target).catch(() => null))?.isFile(), `Broken reference ${url} in ${file}`);
    references++;
  }
}
console.log(`Verified ${files.length} exported HTML pages and ${references} internal asset/link references.`);
