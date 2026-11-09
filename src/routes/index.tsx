import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, ArrowDown, Asterisk } from 'lucide-react'
import { pageMeta } from '../lib/site'
import { ProjectArt } from '../components/ProjectArt'
import { projects } from '../lib/projects'

export const Route = createFileRoute('/')({
  component: PortfolioHome,
  head: () =>
    pageMeta(
      'Junior UX/UI designer',
      'Il portfolio di Gianluca Casagrande: curiosità, progettazione centrata sulle persone e progetti UX/UI.',
    ),
})

function PortfolioHome() {
  return (
    <div className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> JUNIOR UX/UI DESIGNER
          </p>
          <h1>
            Le persone,
            <br />
            al centro.
            <br />
            <span>Le idee,</span> in azione.
          </h1>
          <p className="hero-intro">
            Ciao, sono <strong>Gianluca Casagrande.</strong>
            <br />
            Trasformo la curiosità in esperienze digitali
            <br className="desktop-break" /> intuitive, pensate per le persone.
          </p>
          <Link className="primary-link" to="/projects">
            Esplora i miei progetti <ArrowUpRight size={21} />
          </Link>
          <a className="discover-link" href="#about">
            <ArrowDown size={15} /> Qualcosa su di me
          </a>
        </div>
        <div className="hero-visual">
          <div className="art-top">
            <span>UN PUNTO DI VISTA PERSONALE</span>
            <Asterisk size={22} />
          </div>
          <div
            className="abstract-art"
            role="img"
            aria-label="Composizione astratta temporanea: forme geometriche terracotta, crema e verde oliva"
          >
            <div className="art-circle" />
            <div className="art-arch" />
            <div className="art-ring" />
            <div className="art-bar" />
            <div className="art-small-circle" />
            <svg className="art-spark" viewBox="0 0 100 100" aria-hidden="true">
              <path
                d="M50 0L58 35 85 15 65 43 100 50 65 58 85 85 58 65 50 100 42 65 15 85 35 58 0 50 35 43 15 15 42 35Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="art-bottom">
            <span>Curiosità. Empatia. Progettazione.</span>
            <span>GC — 01</span>
          </div>
          <span className="visual-caption">
            Visual temporaneo · in attesa del mio ritratto
          </span>
        </div>
      </section>
      <div className="discipline-strip">
        <span>UX RESEARCH</span>
        <Asterisk />
        <span>UI DESIGN</span>
        <Asterisk />
        <span>HUMAN-CENTERED DESIGN</span>
        <Asterisk />
        <span>PROTOTYPING</span>
      </div>
      <section id="about" className="about-section">
        <div>
          <p className="eyebrow">01 / MI PRESENTO</p>
          <h2>
            Curioso per natura.
            <br />
            <em>Designer per scelta.</em>
          </h2>
        </div>
        <div className="about-copy">
          <p>
            Mi chiamo Gianluca Casagrande, ho 24 anni e sono laureato in
            Interfacce e Tecnologie della Comunicazione con un forte interesse
            verso la progettazione centrata sull’utente (UX/UI).
          </p>
          <p>
            In questo portfolio racconto i progetti a cui ho preso parte durante
            il mio percorso universitario e non solo. Ogni nuova sfida
            rappresenta un’opportunità di crescita e miglioramento.
          </p>
          <p>
            Per questo mi piace analizzare problemi complessi e trasformarli in
            soluzioni intuitive per i clienti, guidato dalla curiosità e dallo
            stimolo costante di imparare e mettermi alla prova con idee sempre
            nuove.
          </p>
        </div>
      </section>
      <section className="selected-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / UNA SELEZIONE</p>
            <h2>Dalle idee ai progetti.</h2>
          </div>
          <Link to="/projects" className="text-link">
            Tutti i progetti <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="selected-grid">
          {projects.slice(0, 2).map((p) => (
            <Link
              key={p.id}
              to="/projects"
              hash={p.id}
              className="selected-card"
            >
              <ProjectArt kind={p.art} />
              <div className="card-meta">
                <span>{p.category}</span>
                <ArrowUpRight size={21} />
              </div>
              <h3>{p.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
