import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-neutral-200 text:black dark:bg-neutral-900 dark:text-white" >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
