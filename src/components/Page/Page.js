import React from 'react'

import { ArticleUI, BodyUI, HeaderUI, PageUI, TitleUI } from './Page.css'

export default React.memo(({ content, title }) => (
  <PageUI>
    <ArticleUI>
      <HeaderUI>
        <TitleUI>{title}</TitleUI>
      </HeaderUI>
      <BodyUI dangerouslySetInnerHTML={{__html: content}} />
    </ArticleUI>
  </PageUI>
))
