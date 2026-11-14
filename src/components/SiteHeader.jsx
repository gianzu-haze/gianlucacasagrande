import { Link } from '@tanstack/react-router'

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" to="/" aria-label="Gianluca Casagrande, home">
        gc<span>.</span>
      </Link>
      <nav aria-label="Navigazione principale">
        <Link
          to="/"
          activeOptions={{ exact: true }}
          activeProps={{ className: 'current' }}
        >
          Presentazione
        </Link>
        <Link to="/projects" activeProps={{ className: 'current' }}>
          Progetti
        </Link>
        <span className="nav-divider" aria-hidden="true" />
        <a href="#contatti">Contatti</a>
      </nav>
      <span className="header-label">PORTFOLIO</span>
    </header>
  )
}
