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
        <body>
            <Main />
            <NextScript />
        </body>
      </html>
    )
  }
}
