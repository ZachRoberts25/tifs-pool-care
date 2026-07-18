// Build-time prerenderer: renders every route to static HTML in dist/ with
// per-page title, meta description, canonical, OG tags, and JSON-LD.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'

const { render, pageMeta, SITE } = await import(
  new URL('../dist-ssr/entry-prerender.js', import.meta.url).href
)

const distDir = join(process.cwd(), 'dist')
const template = readFileSync(join(distDir, 'index.html'), 'utf8')

// Replace exactly one occurrence with a literal string, failing loudly if the
// pattern is missing so a template change can never silently ship wrong tags.
function sub(html, regex, replacement) {
  const match = regex.exec(html)
  if (!match) throw new Error(`prerender: pattern not found in template: ${regex}`)
  return html.slice(0, match.index) + replacement + html.slice(match.index + match[0].length)
}

for (const meta of pageMeta) {
  const url = meta.path === '/' ? `${SITE}/` : `${SITE}${meta.path}`
  let html = template

  const replacements = [
    [/<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`],
    [/<meta name="description" content="[^"]*"/, `<meta name="description" content="${meta.description}"`],
    [/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${url}"`],
    [/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${meta.title}"`],
    [/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${meta.description}"`],
    [/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${url}"`],
    [/<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${meta.title}"`],
    [/<meta name="twitter:description" content="[^"]*"/, `<meta name="twitter:description" content="${meta.description}"`],
  ]
  for (const [regex, replacement] of replacements) {
    html = sub(html, regex, replacement)
  }

  if (meta.schema?.length) {
    const jsonLd = meta.schema
      .map((s) => `    <script type="application/ld+json">${JSON.stringify(s)}</script>`)
      .join('\n')
    html = sub(html, /<\/head>/, `${jsonLd}\n  </head>`)
  }

  const appHtml = await render(meta.path)
  html = sub(html, /<div id="root"><\/div>/, `<div id="root">${appHtml}</div>`)

  const outFile =
    meta.path === '/' ? join(distDir, 'index.html') : join(distDir, meta.path.slice(1), 'index.html')
  mkdirSync(dirname(outFile), { recursive: true })
  writeFileSync(outFile, html)
  console.log(`prerendered ${meta.path}`)
}

console.log(`prerender: ${pageMeta.length} routes written`)
