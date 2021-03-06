import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head
          title='Mihai Moraru - Full-Stack Developer'
          url='https://mihaimoraru.com'
        >
          <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet' />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
          <link href='https://fonts.googleapis.com/css?family=Roboto+Condensed:700' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css?family=Chakra+Petch:500' rel='stylesheet' />
          <link href="https://fonts.googleapis.com/css?family=Titillium+Web:600" rel="stylesheet" />
          <meta content='width=device-width, initial-scale=1' name='viewport' />
          <link rel='icon' href='/static/favicon.ico' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
