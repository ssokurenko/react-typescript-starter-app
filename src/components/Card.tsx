import React, { ReactNode } from 'react'

interface Props {
  title?: ReactNode
  children?: ReactNode
}

const Card = (props: Props) => {
  const { title, children } = props
  return (
    <section className="flex items-center justify-center bg-white">
      <div className="w-full rounded-md shadow-md p-4">
        {title ? (
          <h3 className="font-semibold text-lg tracking-wide">{title}</h3>
        ) : null}
        <div className="my-1">{children}</div>
      </div>
    </section>
  )
}

export default Card
