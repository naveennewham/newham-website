// Cloudflare caches ccorex.com's HTML (a Cache Rule in the Cloudflare dashboard). Each deploy
// renames the JS files, so cached HTML from the previous deploy would point at files that no
// longer exist. After a production deploy is live, empty the Cloudflare cache.
// Token: Netlify env CLOUDFLARE_PURGE_TOKEN, a Cloudflare API token with only Zone > Cache Purge.
export const onSuccess = async ({ inputs, utils }) => {
  if (process.env.CONTEXT !== 'production') return
  const token = process.env.CLOUDFLARE_PURGE_TOKEN
  if (!token) {
    console.log('purge-cloudflare: CLOUDFLARE_PURGE_TOKEN not set, Cloudflare cache not purged')
    return
  }
  const res = await fetch(`https://api.cloudflare.com/client/v4/zones/${inputs.zoneId}/purge_cache`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ purge_everything: true })
  })
  const body = await res.json().catch(() => ({}))
  // A failed purge must not fail the deploy, which is already live; say so in the build log.
  if (!body.success) utils.status.show({ title: 'Cloudflare cache NOT purged', summary: `HTTP ${res.status}: ${JSON.stringify(body.errors ?? body)}` })
  else console.log('purge-cloudflare: Cloudflare cache purged')
}
