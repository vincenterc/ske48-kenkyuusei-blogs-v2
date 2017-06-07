/**
 * Render initial page
 *
 * renderFullPage (html: string, preloadedState: string) => string
 */
const renderFullPage = (html, preloadedState) => (
   `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="/images/favicon.ico">
        <title>SKE48 KENKYUUSEI BLOGS</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="stylesheet" href="/styles/app.css">
      </head>
      <body>
        <div id="root">${html}</div>
        ${
          preloadedState
          ? `
              <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
              </script>
              <script src="/client.js"></script>
            `
          : ''
        }
      </body>
    </html>
  `
)

export default renderFullPage
