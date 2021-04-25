import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { Article } from '../components'

const NotFoundPage = () => (
  <Article title="Not Found">
    <p className="text-bold">
      <FontAwesomeIcon icon={faExclamationTriangle} size="lg" color="red" />
      &nbsp;This page is not found.
    </p>
    <p className="text-bold mt-4">
      Please add a route to&nbsp;
      <span className="bg-gray-100 p-1 rounded">App.tsx</span> and correspondent
      page to the&nbsp;
      <span className="bg-gray-100 p-1 rounded">./pages</span> folder using the
      following{' '}
      <Link to="/template-page" className="underline">
        template
      </Link>
      .
    </p>
  </Article>
)

export default NotFoundPage
