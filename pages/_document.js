import Document, { Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const { originalUrl } = ctx.req || {}
  
    return await Document.getInitialProps(ctx)
  }

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <html>
        <Head>
            <script type="text/javascript" async="" src="http://localhost:3000/assets/js/geolocation.js"></script>
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Lora:400,700|Raleway:300,400,500|Mrs+Saint+Delafield|Oswald:400,500,600,700|Montserrat:400,500,600,700,800,900" rel="stylesheet"
            />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="google" value="notranslate" />
        </Head>

        <body>
            <Main />
            <NextScript />
        </body>
      </html>
    )
  }
}
