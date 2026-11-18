import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowLeft, FileText } from 'lucide-react'
import { projects } from '../lib/projects'
import { renderMarkdown } from '../lib/content'
import { pageMeta } from '../lib/site'
import { ProjectGallery } from '../components/ProjectGallery'

export const Route = createFileRoute('/projects_/$projectId')({
  loader: ({ params }) => {
    const project = projects.find((item) => item.id === params.projectId)
    if (!project) throw notFound()
    return project
  },
  head: ({ loaderData }) =>
    loaderData ? pageMeta(loaderData.title, loaderData.description) : pageMeta('Progetto non trovato', 'Il progetto richiesto non è disponibile.'),
  component: ProjectPage,
})

function ProjectPage() {
  const project = Route.useLoaderData()

  return (
    <article className="page-shell project-page">
      <Link to="/projects" hash={project.id} className="back-link">
        <ArrowLeft size={16} aria-hidden="true" /> Tutti i progetti
      </Link>
      <header className="project-intro">
        <p className="eyebrow">{project.categories.join(' · ')}</p>
        <h1>{project.title}</h1>
      </header>
      <section className="project-story" aria-labelledby="project-description">
        <h2 id="project-description">Descrizione</h2>
        <div>
          {project.paragraph ? (
            <div
              className="prose project-prose"
              dangerouslySetInnerHTML={{
                __html: renderMarkdown(project.paragraph),
              }}
            />
          ) : (
            <p className="pending-note">
              {project.paragraph}
            </p>
          )}
        </div>
      </section>
      {project.images?.length > 0 && (
        <section className="project-story" aria-labelledby="project-photos">
          <h2 id="project-photos">Foto del progetto</h2>
          <ProjectGallery key={project.id} images={project.images} title={project.title} />
        </section>
      )}
      {project.documents?.length > 0 && (
        <section className="project-story" aria-labelledby="project-documents">
          <h2 id="project-documents">Documenti e ricerca</h2>
          <ul className="project-documents">
            {project.documents.map((document) => (
              <li key={document.href}>
                <a className="project-page-link" href={document.href}>
                  <FileText size={18} aria-hidden="true" /> {document.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  )
}
