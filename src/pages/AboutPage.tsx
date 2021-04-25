import React from 'react'
import { Article } from '../components'

const AboutPage = () => (
  <Article title="About" className="text-xl">
    <p className="mt-4">
      Production and pet project ready starter front-end web application.
    </p>
    <h2 className="mt-6 text-2xl">Live demo</h2>
    <ul className="mt-4 ml-5 list-disc">
      <li>
        <a href="https://rtsa.netlify.app/">RTSA.netlify.app</a>
      </li>
    </ul>
    <h2 className="mt-6 text-2xl">The app includes</h2>
    <ul className="mt-4 ml-5 list-disc">
      <li>
        <a href="https://reactjs.org/">React</a>
        &nbsp;app, generated using the&nbsp;
        <a href="https://create-react-app.dev/docs/adding-typescript/">
          TypeScript template
        </a>
      </li>
      <li>
        Configuration override with&nbsp;
        <a href="https://www.npmjs.com/package/@craco/craco">CRACO</a>
      </li>
      <li>
        Styling by&nbsp;
        <a href="https://tailwindcss.com/docs">Tailwind CSS</a>
      </li>
      <li>
        Icons by&nbsp;
        <a href="https://fontawesome.com/icons?d=gallery&p=2&m=free">
          Font Awesome
        </a>
      </li>
      <li>
        Network requests by&nbsp;
        <a href="https://www.npmjs.com/package/axios">Axios</a>&nbsp;(Promise
        based HTTP client)
      </li>
      <li>
        Basic custom layout components: Header, Article, Footer, Card, Button,
        etc.
      </li>
    </ul>
    <h2 className="mt-6 text-2xl">Getting started</h2>
    <ul className="mt-4 ml-5 list-disc">
      <li>
        Generate a repository using&nbsp;
        <a href="https://github.com/ssokurenko/react-typescript-starter-app/generate">
          the template on Github
        </a>
        , or fork&nbsp;
        <a href="https://github.com/ssokurenko/react-typescript-starter-app">
          the repo
        </a>
      </li>
      <li>
        Clone the repository to your machine, or just&nbsp;
        <a href="https://github.com/ssokurenko/react-typescript-starter-app/archive/refs/heads/main.zip">
          download the latest codebase
        </a>
      </li>
      <li>
        Run&nbsp;
        <pre className="bg-gray-100 p-1 rounded inline-block">npm install</pre>
        &nbsp; to fetch required packages and&nbsp;
        <pre className="bg-gray-100 p-1 rounded inline-block">npm start</pre>
        &nbsp; to run the application on localhost
      </li>
    </ul>
  </Article>
)

export default AboutPage
