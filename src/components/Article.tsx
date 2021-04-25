import React, { ReactNode } from 'react'

interface Props {
  title?: ReactNode
  children?: ReactNode
}

const Article = (props: Props) => {
  const { title, children } = props
  return (
    <div className="container mx-auto px-4 mt-6 mb-6">
      <article className="container mx-auto px-4" style={{ minHeight: '70vh' }}>
        {title ? <h1 className="text-4xl mt-6">{title}</h1> : null}
        <div className="mt-6 mb-6">{children}</div>
      </article>
    </div>
  )
}

export default Article
