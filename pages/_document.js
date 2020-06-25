import Document, { Head, Main, NextScript } from 'next/document'

let title 

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const { originalUrl } = ctx.req || {}

    return await Document.getInitialProps(ctx)
  }

  constructor(props) {
    super(props)

    const titleTranslator = {
        '/': 'Jason Bryant | Senior Web Developer, Data Engineer',
        '/about': 'About | Jason Bryant',
        '/rebuild': 'Helping Others Rebuild in the Algarve | Jason Bryant'
      }
    
      title = titleTranslator[props.__NEXT_DATA__.page]

    console.log('PROPS:', props.__NEXT_DATA__.page, title)
  }

  render() {
    return (
      <html>        
        <body>
            <Main />
            <NextScript />
        </body>
      </html>
    )
  }
}
