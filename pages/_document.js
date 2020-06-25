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
        <Head>            
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Lora:400,700|Raleway:300,400,500|Mrs+Saint+Delafield|Oswald:400,500,600,700|Montserrat:400,500,600,700,800,900" rel="stylesheet"
          key="fonts" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
          <meta name="google" value="notranslate" key="google" />
        </Head>
        
        <body>
            <Main />
            <NextScript />
        </body>
      </html>
    )
  }
}
