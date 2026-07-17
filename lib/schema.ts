const siteUrl = 'https://thebeardednotary.com';
const siteName = 'The Bearded Notary';
const logoUrl = `${siteUrl}/icon.png`;

type ListItemInput = {
  name: string;
  url: string;
};

type ArticleSchemaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export function getAbsoluteUrl(path: string) {
  return path.startsWith('http') ? path : `${siteUrl}${path}`;
}

function toIsoDateTime(value: string) {
  if (value.includes('T')) {
    return /(?:Z|[+-]\d{2}:\d{2})$/.test(value) ? value : `${value}Z`;
  }

  return `${value}T00:00:00Z`;
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: logoUrl,
    },
  };
}

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    publisher: {
      '@type': 'Organization',
      name: siteName,
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: logoUrl,
      },
    },
  };
}

export function buildCollectionPageSchema({
  title,
  description,
  path,
  items,
}: {
  title: string;
  description: string;
  path: string;
  items: ListItemInput[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url: getAbsoluteUrl(path),
    isPartOf: {
      '@type': 'WebSite',
      name: siteName,
      url: siteUrl,
    },
    about: {
      '@type': 'Thing',
      name: 'Mobile notary and loan signing agent resources',
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: item.url,
      })),
    },
  };
}

export function buildArticleSchema({
  title,
  description,
  path,
  image,
  datePublished,
  dateModified,
}: ArticleSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    mainEntityOfPage: getAbsoluteUrl(path),
    author: {
      '@type': 'Organization',
      name: siteName,
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: logoUrl,
      },
    },
    ...(datePublished ? { datePublished: toIsoDateTime(datePublished) } : {}),
    ...(dateModified ? { dateModified: toIsoDateTime(dateModified) } : {}),
    ...(image ? { image: getAbsoluteUrl(image) } : {}),
  };
}

export function buildBreadcrumbSchema(items: ListItemInput[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildFaqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function buildItemListSchema({
  title,
  path,
  items,
}: {
  title: string;
  path: string;
  items: ListItemInput[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: title,
    url: getAbsoluteUrl(path),
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}
