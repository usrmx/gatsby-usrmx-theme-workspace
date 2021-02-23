import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

import { SiteQueryData, ThemeValue } from "../types";
import { DEFAULT_THEME } from "../constants";

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        defaultImage: image
        twitterUsername
        keywords
      }
    }
  }
`;

interface SEOProps {
  title?: string | null;
  description?: string | null;
  image?: {
    src: string;
    height: string;
    width: string;
  };
  isArticle?: boolean;
  theme?: ThemeValue;
  keywords?: string[];
}

export const SEO = ({
  title = null,
  description = null,
  image: metaImage,
  isArticle = false,
  theme = DEFAULT_THEME,
  keywords,
}: SEOProps) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery<SiteQueryData>(query);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    // defaultImage,
    twitterUsername,
  } = site.siteMetadata;

  const image =
    metaImage && metaImage.src
      ? `${site.siteMetadata.siteUrl}${metaImage.src}`
      : null;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image,
    url: `${siteUrl}${pathname}`,
  };

  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null;

  const keywordsStr = keywords || site.siteMetadata.keywords;

  return (
    <Helmet
      title={seo.title}
      titleTemplate={pathname === "/" ? seo.title : titleTemplate}
    >
      <meta name="description" content={seo.description} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {isArticle && <meta property="og:type" content="website" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="keywords" content={keywordsStr.join(",")} />

      {seo.image && <meta name="image" content={seo.image} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      {metaImage && <meta name="og:image:width" content={metaImage.width} />}
      {metaImage && <meta name="og:image:height" content={metaImage.height} />}

      {/* <Twitter> */}
      {seo.image && <meta name="twitter:card" content="summary" />}
      {twitterUsername && (
        <meta name="twitter:creator" content={`@${twitterUsername}`} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      {/* <Twitter /> */}

      <body className={`${theme}-theme`}></body>
    </Helmet>
  );
};
