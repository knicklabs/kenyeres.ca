import React from 'react'

import { 
  CardUI, 
  CardDescriptionUI,
  CardDetailUI,
  CardLinkUI, 
  CardMetaUI,
  CardMetaItemUI,
  CardTitleUI, 
  RelatedPostsUI, 
  RelatedPostUI 
} from './RelatedPosts.css'
import { 
  CalendarIcon, 
  CodeIcon,
  LinkIcon, 
  LocationIcon,
  SlidesIcon,
  VideoIcon 
} from '../Icon'
import { localDate } from '../../utils'
import { TYPES } from '../../constants'

// Our ACF field uses 'mm/dd/yyyy' format and we
// want to switch to 'yyyy-dd-mm'
const reformatDate = date => {
  const parts = date.split('/')
  return `${parts[2]}-${parts[1]}-${parts[0]}`
}

const linkIcon = type => {
  switch (type) {
    case 'code':
      return <CodeIcon />
    case 'event':
      return <LinkIcon />
    case 'slides':
      return <SlidesIcon />
    case 'video':
      return <VideoIcon />
    default:
      return null
  }
}

const linkText = type => {
  switch (type) {
    case 'code':
      return 'Download Sample Code'
    case 'event':
      return 'View Event Details'
    case 'slides':
      return 'View Slides'
    case 'video':
      return 'Watch Video'
    default:
      return ''
  }
}

const renderLink = (link, type) => {
  if (!link) {
    return null
  }

  return (
    <CardMetaItemUI>
      <CardDetailUI>
        {linkIcon(type)}
        <a href={link}>{linkText(type)}</a>
      </CardDetailUI>
    </CardMetaItemUI>
  )
}

const renderItem = post => post.title

const renderPost = post => (
  <CardUI>
    <CardLinkUI to={post.path}>
      {post.title}
    </CardLinkUI>
  </CardUI>
)

const renderTalk = post => (
  <CardUI>
    <CardTitleUI>{post.title}</CardTitleUI>
    <CardMetaUI>
      <CardMetaItemUI>
        <CalendarIcon /> <CardDetailUI>{localDate(reformatDate(post.acf.date))}</CardDetailUI>
      </CardMetaItemUI>
      <CardMetaItemUI>
        <LocationIcon /> <CardDetailUI>{post.acf.location}</CardDetailUI>
      </CardMetaItemUI>
    </CardMetaUI>
    <CardDescriptionUI dangerouslySetInnerHTML={{__html: post.acf.description}} />
    <div>
      {renderLink(post.acf.event_url, 'event')}
      {renderLink(post.acf.video_url, 'video')}
      {renderLink(post.acf.slides_url, 'slides')}
      {renderLink(post.acf.sample_code_url, 'code')}
    </div>
  </CardUI>
)

const renderRelatedPost = post => {
  let result
  switch (post.type) {
    case TYPES.POST:
      result = renderPost(post)
      break
    case TYPES.TALK:
      result = renderTalk(post)
      break
    default:
      result = renderItem(post)
      break
  }
  return <RelatedPostUI key={post.wordpress_id}>{result}</RelatedPostUI>
}

export default React.memo(({posts = []}) => {
  if (!posts.length) {
    return null
  }

  return (
    <RelatedPostsUI>
      {posts.map(post => renderRelatedPost(post))}
    </RelatedPostsUI>
  )
})
