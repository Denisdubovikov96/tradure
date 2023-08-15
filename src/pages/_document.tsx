import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='scroll-smooth'>
        <div id='portal' className=''/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
