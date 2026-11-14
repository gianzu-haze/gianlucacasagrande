import { Link } from '@tanstack/react-router'

export function NotFoundPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Pagina non trovata</h1>
      <p className="mb-6">La pagina che cerchi non è disponibile.</p>
      <Link to="/" className="underline">
        Torna alla presentazione
      </Link>
    </div>
  )
}
