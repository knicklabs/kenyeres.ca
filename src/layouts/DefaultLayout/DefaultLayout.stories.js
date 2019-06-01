import React from 'react'

import { storiesOf } from '@storybook/react'

import DefaultLayout from './DefaultLayout'

const links = [
  {
    active: true,
    title: 'About',
    href: '#',
  },
  {
    title: 'Writing',
    href: '#',
  },
  {
    title: 'Talks',
    href: '#',
  },
  {
    title: 'Open Source',
    href: '#',
  },
  {
    title: 'Contact',
    href: '#'
  }
]

storiesOf('DefaultLayout', module).add('default', () => (
  <DefaultLayout links={links} title="Nickolas Kenyeres" url="#" />
))
