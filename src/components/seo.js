import React from "react"
import Helmet from "react-helmet"

const getSrc = image => {
  if (!image) {
    return ''
  }
  if (typeof image === 'string') {
    return image
  }
  return image.source_url
}

export default React.memo(({
  lang = 'en',
  yoast_wpseo_title: title,
  yoast_wpseo_metadesc: metaDescription,
  yoast_wpseo_canonical: canonical,
  yoast_wpseo_twitter_title: twitterTitle,
  yoast_wpseo_twitter_description: twitterDescription,
  yoast_wpseo_twitter_image: twitterImage,
  twitterType = 'summary',
  yoast_wpseo_facebook_title: facebookTitle,
  yoast_wpseo_facebook_description: facebookDescription,
  yoast_wpseo_facebook_image: facebookImage,
  facebookType = 'website',
  meta = [],
}) => (
  <Helmet
    htmlAttributes={{
      lang,
    }}
    title={title}
    meta={[
      {
        name: 'canonical',
        content: canonical,
      },
      {
        name: 'description',
        content: metaDescription,
      },
      {
        name: 'og:title',
        content: facebookTitle,
      },
      {
        name: 'og:description',
        content: facebookDescription,
      },
      {
        name: 'og:image',
        content: getSrc(facebookImage),
      },
      {
        name: 'og:type',
        content: facebookType,
      },
      {
        name: 'twitter:card',
        content: twitterType,
      },
      {
        name: 'twitter:title',
        content: twitterTitle,
      },
      {
        name: 'twitter:description',
        content: twitterDescription,
      },
      {
        name: 'twitter:image',
        content: getSrc(twitterImage),
      }
    ].concat(meta).filter(({ content }) => !!content)}
  />
))
