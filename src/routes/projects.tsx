import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowLeft, Plus } from 'lucide-react'
import { pageMeta } from '../lib/site'
import { projects } from '../lib/projects'
import { ProjectArt } from '../components/ProjectArt'

export const Route = createFileRoute('/projects')({
  component: Projects,
  head: () =>
    pageMeta(
      'Progetti',
      'Esplora i progetti di UX/UI design, sviluppo e ricerca di Gianluca Casagrande.',
    ),
})
function Projects() {
  const [filter, setFilter] = useState('Tutti')
  const visible = projects.filter(
    (p) => filter === 'Tutti' || p.category === filter,
  )
  return (
    <div className="page-shell projects-page">
      <Link to="/" className="back-link">
        <ArrowLeft size={16} /> Torna alla presentazione
      </Link>
      <section className="projects-intro">
        <p className="eyebrow">IL MIO PERCORSO, PROGETTO DOPO PROGETTO</p>
        <h1>
          Idee da esplorare.
          <br />
          <em>Progetti da raccontare.</em>
        </h1>
        <p>
          Una raccolta di esperienze tra università e nuove sfide.
          <br />
          Dalla ricerca alle interfacce, sempre partendo dalle persone.
        </p>
      </section>
      <div className="filter-bar">
        <div className="filters" aria-label="Filtra i progetti">
          {['Tutti', 'UX/UI Design', 'Sviluppo', 'Ricerca'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={filter === f ? 'active' : ''}
            >
              {f}
            </button>
          ))}
        </div>
        <span aria-live="polite">
          {String(visible.length).padStart(2, '0')} progetti
        </span>
      </div>
      <div className="projects-grid">
        {visible.map((p) => (
          <article className="project-card" key={p.id} id={p.id}>
            <ProjectArt kind={p.art} />
            <div className="card-meta">
              <span>{p.category}</span>
              <span>{String(projects.indexOf(p) + 1).padStart(2, '0')}</span>
            </div>
            <h2>{p.title}</h2>
            <details>
              <summary>
                Scopri il progetto <Plus size={18} />
              </summary>
              <div className="project-details">
                <p>{p.description}</p>
                <p className="pending-note">
                  Il racconto completo del progetto è in preparazione.
                </p>
              </div>
            </details>
          </article>
        ))}
      </div>
      <p className="cover-note">
        Le copertine sono composizioni illustrative e non schermate dei
        progetti.
      </p>
    </div>
  )
}
