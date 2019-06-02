import React from 'react'

import { ArticleUI, BodyUI, DateUI, HeaderUI, PageUI, TitleUI } from './Page.css'
import { localDate } from '../../utils'
import RelatedPosts from '../RelatedPosts'
import { TYPES } from '../../constants'

export default React.memo(({ content, date, posts = [], title, type }) => (
  <PageUI>
    <ArticleUI>
      <HeaderUI>
        <TitleUI>{title}</TitleUI>
        {type === TYPES.POST 
          ? <DateUI>{localDate(date)}</DateUI> 
          : null
        }
      </HeaderUI>
      <BodyUI dangerouslySetInnerHTML={{__html: content}} />
      <RelatedPosts posts={posts} />
    </ArticleUI>
  </PageUI>
))
