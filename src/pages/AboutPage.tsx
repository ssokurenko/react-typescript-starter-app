import React from 'react'
import { Article } from '../components'

const AboutPage = () => (
  <Article title="About">
    <p className="text-bold">
      Generate an application using&nbsp;
      <a
        href="https://github.com/ssokurenko/react-typescript-starter-app/generate"
        className="underline"
      >
        the template on Github
      </a>
      , or fork&nbsp;
      <a
        href="https://github.com/ssokurenko/react-typescript-starter-app"
        className="underline"
      >
        the repo
      </a>
      .
    </p>
  </Article>
)

export default AboutPage
