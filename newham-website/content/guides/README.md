<!-- Not a guide (no front matter, so it is ignored). -->
Guides live here as Markdown with YAML front matter. Markaiting adds them through
pull requests after the owner approves the draft; they appear at /guides/<slug>,
on the Guides page and in the sitemap. Front matter:

    ---
    title: How MEP contractors price a tender BOQ
    description: One-sentence summary for search results (≤ 155 characters).
    slug: price-tender-boq
    date: 2026-10-20
    updated: 2026-10-20          # optional
    author: Newham team
    author_role: Estimating specialists   # optional
    keywords: [boq pricing, mep estimating]
    related: /talent-outsourcing  # optional
    faq:                          # optional, also published as FAQ structured data
      - q: …
        a: …
    draft: false                  # true keeps it off the site
    ---
