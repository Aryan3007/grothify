// Meta Tags Optimization for /
// Based on SEO best practices from AboutSEO.md

export const HomeMetaTags = {
  // Title Tag (50-60 characters) - 42 chars
  title: "Grothify | Digital Marketing Agency | Home",
  
  // Meta Description (150-160 characters) - 0 chars
  description: "Discover Grothify and learn how our professional services can help your business grow and succeed.",
  
  // Keywords (focus on long-tail keywords)
  keywords: [
    "grothify",
    "🚀 stay updated!",
    "home page",
    "professional services",
    "best solutions"
  ],
  
  // Open Graph Tags
  openGraph: {
    title: "Grothify | Digital Marketing Agency | Home",
    description: "Professional  services",
    url: "https://grothify.vercel.app//",
    image: "https://grothify.vercel.app//og-image-home.jpg",
    type: "website",
    siteName: "Grothify"
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Grothify | Digital Marketing Agency | Home",
    description: "Professional  services",
    image: "https://grothify.vercel.app//twitter-image-home.jpg"
  },
  
  // Additional SEO Meta Tags
  additional: {
    canonical: "https://grothify.vercel.app//",
    robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    googlebot: "index,follow",
    viewport: "width=device-width, initial-scale=1",
    charset: "utf-8",
    language: "en",
    revisitAfter: "7 days",
    author: "Grothify",
    
    // Page-specific meta tags
    pageType: "homepage",
    wordCount: 234,
    readingTime: "2 min read"
  }
};

// Usage in React component:
// import { HomeMetaTags } from './HomeMetaTags';
// 
// <Head>
//   <title>{HomeMetaTags.title}</title>
//   <meta name="description" content={HomeMetaTags.description} />
//   <meta name="keywords" content={HomeMetaTags.keywords.join(', ')} />
//   {/* Add other meta tags as needed */}
// </Head>