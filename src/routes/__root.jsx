import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { SiteHeader } from '../components/SiteHeader'
import { NotFoundPage } from '../components/NotFoundPage'
import { site } from '../lib/site'

import '../styles.css'

const siteName = site.name
const siteDescription = site.description

export const Route = createRootRoute({
  notFoundComponent: NotFoundPage,
  head: () => ({
    links: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: siteName,
      },
      {
        name: 'description',
        content: siteDescription,
      },
      {
        property: 'og:title',
        content: siteName,
      },
      {
        property: 'og:description',
        content: siteDescription,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }) {
  return (
    <html lang="it">
      <head>
        <HeadContent />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:bg-white focus:p-4"
        >
          Vai al contenuto
        </a>
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <footer id="contatti" className="site-footer" tabIndex={-1} aria-label="Contatti">
          <a className="footer-name" href="/">
            Gianluca Casagrande<span>Junior UX/UI designer</span>
          </a>
          <span className="contatti"><strong>Contatti:</strong>
            <br />Cellulare: +39 366 731 5303
            <br />E-mail: gianzcasagrande@gmail.com
            <br />LinkedIn: <a href="https://www.linkedin.com/in/gianluca-casagrande-775572403/">Gianluca Casagrande</a>
          </span>
          <span>© {new Date().getFullYear()}</span>
        </footer>
        <Scripts />
      </body>
    </html>
  )
}
