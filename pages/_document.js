import Document, { Head, Main, NextScript } from 'next/document'
import { StyleSheetServer } from 'aphrodite'

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const { html, css } = StyleSheetServer.renderStatic(() => renderPage())
    return { ...html, css }
  }

  render() {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui' />
          <meta name='theme-color' content='#673ab7' />
          <link rel='manifest' href='static/manifest.json' />
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css' />
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css' />
          <link rel='stylesheet' href='https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Cousine' />
          <title> Ademola Adegbuyi's Portfolio </title>
          <style dangerouslySetInnerHTML={{ __html: this.props.css.content }} />
        </Head>
        <body style={{ fontFamily: 'Cousine, sans-serif', backgroundColor: '#000', color: '#fff' }}>
          <Main />
          <script src='https://unpkg.com/scrollreveal@3.3.2/dist/scrollreveal.min.js'></script>
          <NextScript />
        </body>
      </html>
    )
  }
}
