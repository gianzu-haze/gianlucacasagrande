import { useState } from 'react'
import { ArrowLeft, ArrowRight, ImageIcon } from 'lucide-react'

export function ProjectGallery({ images, title }) {
  const [active, setActive] = useState(0)
  const slides = images.length ? images : [null, null, null]
  const image = slides[active]

  return (
    <section className="project-gallery" aria-label={`Foto: ${title}`} aria-roledescription="carosello">
      <div className="gallery-slide" role="group" aria-roledescription="diapositiva" aria-label={`${active + 1} di ${slides.length}`}>
        {image ? (
          <figure>
            <img src={image.src} alt={image.alt} />
            {image.caption && <figcaption>{image.caption}</figcaption>}
          </figure>
        ) : (
          <div className="gallery-placeholder">
            <ImageIcon size={32} strokeWidth={1} aria-hidden="true" />
            <p>Spazio foto {String(active + 1).padStart(2, '0')}</p>
            <span>Le immagini del progetto saranno aggiunte qui.</span>
          </div>
        )}
      </div>
      <div className="gallery-controls">
        <button type="button" aria-label="Foto precedente" disabled={slides.length < 2} onClick={() => setActive((active + slides.length - 1) % slides.length)}>
          <ArrowLeft size={18} aria-hidden="true" />
        </button>
        <span aria-live="polite" aria-atomic="true">
          {active + 1} / {slides.length}{!images.length && ' · Segnaposto'}
        </span>
        <button type="button" aria-label="Foto successiva" disabled={slides.length < 2} onClick={() => setActive((active + 1) % slides.length)}>
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
