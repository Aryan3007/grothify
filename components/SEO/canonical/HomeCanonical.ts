// Canonical URL Configuration for /
// Prevents duplicate content issues as per AboutSEO.md

export const HomeCanonical = {
  // Primary canonical URL
  canonical: "https://grothify.vercel.app//",
  
  // Alternative URLs that should redirect to canonical
  alternativeUrls: [
    "https://grothify.vercel.app///",
    "https://grothify.vercel.app//?utm_source=google",
    "https://grothify.vercel.app//#section",
    "https://grothify.vercel.app//"
  ].filter(url => url !== "https://grothify.vercel.app//"),
  
  // Hreflang for international SEO (if applicable)
  hreflang: [
    {
      lang: "en",
      url: "https://grothify.vercel.app//"
    },
    {
      lang: "x-default",
      url: "https://grothify.vercel.app//"
    }
  ],
  
  // Page variations and their canonical relationships
  pageVariations: {
    mobile: "https://grothify.vercel.app//",
    desktop: "https://grothify.vercel.app//",
    amp: "https://grothify.vercel.app//?amp=1"
  },
  
  // SEO benefits of canonical URLs
  benefits: [
    "Prevents duplicate content penalties",
    "Consolidates link equity to preferred URL",
    "Helps search engines understand preferred version",
    "Improves crawl efficiency",
    "Reduces confusion in search results"
  ],
  
  // Implementation notes
  implementation: {
    htmlTag: '<link rel="canonical" href="https://grothify.vercel.app//" />',
    httpHeader: 'Link: <https://grothify.vercel.app//>; rel="canonical"',
    xmlSitemap: "Include only canonical URLs in sitemap"
  }
};

// React implementation:
// <link rel="canonical" href={HomeCanonical.canonical} />
// 
// Next.js Head component:
// <Head>
//   <link rel="canonical" href={HomeCanonical.canonical} />
//   {HomeCanonical.hreflang.map(lang => (
//     <link key={lang.lang} rel="alternate" hrefLang={lang.lang} href={lang.url} />
//   ))}
// </Head>