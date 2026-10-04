import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string;
}

const defaultMetadata = {
  title: 'Socialtechs | Digital Marketing, SEO & Website Development Agency',
  description: 'Socialtechs is India\'s leading digital marketing and web development agency based in Greater Noida, Delhi NCR. We deliver high-ROI SEO, Google & Meta Ads, modern React web apps, social media marketing, and brand identity.',
  keywords: 'digital marketing agency, digital marketing company greater noida, seo services delhi ncr, website development company, react web development, performance marketing, google ads management, meta ads agency, social media marketing, branding and logo design, e-commerce solutions, socialtechs, kunal bhati',
  url: 'https://socialtechs.in'
};

export const SEO: React.FC<SEOProps> = ({ title, description, canonical, keywords }) => {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = title 
      ? `${title} | Socialtechs` 
      : defaultMetadata.title;
    
    const pageDescription = description || defaultMetadata.description;
    const pageKeywords = keywords || defaultMetadata.keywords;
    const currentUrl = canonical || `${defaultMetadata.url}${location.pathname}`;

    // Update document title
    document.title = pageTitle;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', pageDescription);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', pageKeywords);
    }

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', currentUrl);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', pageDescription);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', currentUrl);

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', pageTitle);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', pageDescription);

  }, [title, description, canonical, keywords, location]);

  return null;
};

export default SEO;
