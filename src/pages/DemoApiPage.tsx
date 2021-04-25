import React, { useState } from 'react'
import { useApi, useConfig } from '../hooks'
import { Article, Button, Spinner, Card } from '../components'

interface Quote {
  text?: string
  author?: string
}

const DemoApiPage = () => {
  const { quotesApiUrl } = useConfig()
  const { getQuotes } = useApi()
  const [isLoading, setIsLoading] = useState(false)
  const [quotes, setQuotes] = useState([] as Quote[])

  const shuffleItems = () => Math.random() - 0.5

  const handleOnClick = () => {
    setQuotes([])
    setIsLoading(true)

    getQuotes(quotesApiUrl)
      .then((response) => {
        if (response?.data?.length) setQuotes(response.data.sort(shuffleItems))
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <Article title="Demo API Request">
      <p className="mt-5">Asynchronous server request demo.</p>
      <p className="mt-5">
        Click the button to fetch data from {quotesApiUrl}.
      </p>
      {isLoading ? (
        <Spinner isVisible={true} />
      ) : (
        <p className="mt-5 mb-5 text-center">
          <Button onClick={handleOnClick}>
            {quotes?.length ? 'Reload' : 'Load'} Inspirational Quotes
          </Button>
        </p>
      )}

      {quotes.map((quote, key) => (
        <Card
          key={key}
          title={`${quote.author ? quote.author : 'One man once'} said:`}
        >
          {quote.text}
        </Card>
      ))}
    </Article>
  )
}

export default DemoApiPage
