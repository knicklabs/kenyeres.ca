import Img from "gatsby-image"
import React from 'react'

import { 
  ArticleUI, 
  BodyUI, 
  DateUI, 
  HeaderUI, 
  ImageUI, 
  ImageWrapperUI,
  PageUI, 
  TitleUI,
  WrapperUI
} from './Page.css'
import { localDate } from '../../utils'
import RelatedPosts from '../RelatedPosts'
import { TYPES } from '../../constants'

export default React.memo(({ content, date, featured_media, posts = [], title, type }) => (
  <PageUI>
    <ArticleUI>
      <HeaderUI>
        <TitleUI>{title}</TitleUI>
        {type === TYPES.POST 
          ? <DateUI>{localDate(date)}</DateUI> 
          : null
        }
      </HeaderUI>
      <WrapperUI>
        <div>
          <BodyUI dangerouslySetInnerHTML={{__html: content}} />
          <RelatedPosts posts={posts} />
        </div>
        {featured_media && (
          <ImageWrapperUI>
            <ImageUI>
              <Img fixed={featured_media.localFile.childImageSharp.fixed} />
            </ImageUI>
          </ImageWrapperUI>
        )}
      </WrapperUI>
    </ArticleUI>
  </PageUI>
))
