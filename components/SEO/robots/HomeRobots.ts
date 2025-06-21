// Robots Directives for /
// Page-specific SEO directives based on AboutSEO.md

export const HomeRobotsDirectives = {
  // Meta robots tag for this page
  metaRobots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  
  // Detailed directives
  directives: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    maxSnippet: -1,
    maxImagePreview: "large",
    maxVideoPreview: -1
  },
  
  // Page-specific considerations
  pageAnalysis: {
    pageType: "homepage",
    contentQuality: "needs improvement",
    wordCount: 234,
    hasImages: true,
    hasHeadings: true,
    indexRecommendation: "index"
  },
  
  // SEO recommendations for this page
  recommendations: [
    "Add more content - pages with less than 300 words may not rank well",
    "Add ALT text to all images for better accessibility and SEO",
    
    "Add a compelling meta description",
    "Ensure page loads quickly for better user experience",
    "Add structured data markup for rich results",
    "Optimize for mobile devices",
    "Include relevant internal and external links"
  ].filter(Boolean)
};

// Implementation:
// <meta name="robots" content={HomeRobotsDirectives.metaRobots} />