import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, ArrowDown } from 'lucide-react'
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
            JUNIOR UX/UI DESIGNER
          </p>
          <h1>
            Research first,
            <br />
            <span>Design later.</span>
          </h1>
          <p className="hero-intro">
            Mi chiamo <strong>Gianluca Casagrande.</strong>
            <span className="hero-intro-followup">
              Unisco psicologia, design e informatica
              <br /> per creare interfacce chiare, efficaci e centrate sulle
              persone
            </span>
          </p>
          <Link className="primary-link" to="/projects">
            Esplora i miei progetti <ArrowUpRight size={21} />
          </Link>
        </div>
        <div className="hero-visual">
          <img
            className="profile-picture"
            src="/Images/profile_pic.png"
            role="img"
            aria-label="Foto di Gianluca Casagrande, Junior UX/UI designer"
          />
          <div className="art-bottom">
            <span>Gianluca Casagrande</span>
          </div>
          <span className="visual-caption">
            Designer UX/UI
          </span>
        </div>
      </section>
      <div className="discipline-heading">
        <h2>
          Positions I'm looking for...
        </h2>
      </div>
      <div className="discipline-strip">
        <span><strong>UI/UX designer</strong></span>
        <span className="discipline-divider" aria-hidden="true" />
        <span><strong>Application specialist</strong></span>
        <span className="discipline-divider" aria-hidden="true" />
        <span><strong>Frontend developer</strong></span>
        <span className="discipline-divider" aria-hidden="true" />
        <span><strong>Technical support</strong></span>
      </div>
      <section id="about" className="about-section">
        <div>
          <p className="eyebrow">01 / MI PRESENTO</p>
          <h2>
            Based in Trento
            <br />
            <em>Dove tutto è iniziato</em>
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
      <section id="skills" className="about-section">
        <div>
          <p className="eyebrow">02 / LE MIE COMPETENZE</p>
          <h2>
            Ciò che so fare
            <br />
            <em>E ciò che devo imparare</em>
          </h2>
        </div>
        <div className="about-copy">
          <p>
            <strong>Design e prototipazione:</strong> Figma e Canva per la
            realizzazione di prototipi e le relative presentazioni, poi Miro,
            MindMeister e altri tool per la pianificazione e l’organizzazione di
            gruppo.
          </p>
          <br/>
          <p>
            <strong>Frontend e sviluppo:</strong> HTML, CSS, JavaScript, VueJS,
            Bootstrap e Material Design sono gli strumenti di cui ho basi più
            solide. Ho inoltre sperimentato l’uso di Python, SQLite e Google
            Firebase nello sviluppo di progetti mirati. Imparare a utilizzare
            questi strumenti con un obiettivo preciso e una scadenza di
            rispettare mi ha aiutato a sviluppare capacità di adattamento e
            apprendimento.
          </p>
          <br/>
          <p>
            <strong>Hobby e multimedia:</strong> CapCut e basi di Adobe
            Photoshop e Lightroom.
          </p>
          <br/>
          <p>
            <strong>Produttività:</strong> Ottima padronanza del pacchetto
            Microsoft Office, della suite Google e del sistema operativo
            Windows.
          </p>
          <br/>
          <p>
            <strong>Lingue:</strong> Italiano - madrelingua, Inglese - B2,<br/>
            Spagnolo - A1 (conseguito al fine della laurea triennale).
          </p>
          <br/>
          <p>
            <strong>In approfondimento:</strong> SQL
          </p>
          
        </div>
      </section>
      <section className="selected-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / I PROGETTI PIÙ INTERESSANTI</p>
            <h2>Collaborazioni con aziende</h2>
          </div>
          <Link to="/projects" className="text-link">
            Tutti i progetti <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="selected-grid">
          {projects.slice(0, 3).map((p) => (
            <Link
              key={p.id}
              to="/projects/$projectId"
              params={{ projectId: p.id }}
              className="selected-card"
            >
              <ProjectArt kind={p.art} />
              <div className="card-meta">
                <span>{p.categories.join(' · ')}</span>
                <ArrowUpRight size={21} />
              </div>
              <h3><strong>{p.title}</strong></h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
