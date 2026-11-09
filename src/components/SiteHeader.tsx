import { Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'

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
          Progetti <ArrowUpRight size={15} />
        </Link>
      </nav>
      <span className="header-label">PORTFOLIO / UX · UI</span>
    </header>
  )
}
