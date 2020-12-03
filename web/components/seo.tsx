import { Helmet } from 'react-helmet';
import { MetaHTMLAttributes } from 'react';

interface SEOProps {
  lang?: string
  description?: string
  meta?: Array<MetaHTMLAttributes<HTMLMetaElement>>
  title?: string
  author?: string
}

const SEO = ({
  description = '', lang = 'en', meta = [], title = '', author = '',
}: SEOProps): JSX.Element => {
  const defaultMeta: Array<MetaHTMLAttributes<HTMLMetaElement>> = [
    {
      name: 'description',
      content: description,
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:creator',
      content: author,
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: description,
    },
  ];

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      meta={defaultMeta.concat(meta)}
    />
  );
};

export default SEO;
