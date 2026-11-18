import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ImageIcon, X } from 'lucide-react'

export function ProjectGallery({ images, title }) {
  const [active, setActive] = useState(0)
  const [isFullScreenOpen, setIsFullScreenOpen] = useState(false)
  const lightboxRef = useRef(null)
  const slides = images.length ? images : [null, null, null]
  const image = slides[active]

  useEffect(() => {
    const dialog = lightboxRef.current
    if (!dialog) return

    if (isFullScreenOpen && !dialog.open) {
      dialog.showModal()
    } else if (!isFullScreenOpen && dialog.open) {
      dialog.close()
    }
  }, [isFullScreenOpen])

  return (
    <section className="project-gallery" aria-label={`Foto: ${title}`} aria-roledescription="carosello">
      <div className="gallery-slide" role="group" aria-roledescription="diapositiva" aria-label={`${active + 1} di ${slides.length}`}>
        {image ? (
          <figure>
            <button
              className="gallery-image-button"
              type="button"
              aria-label={`Visualizza a schermo intero: ${image.alt || title}`}
              onClick={() => setIsFullScreenOpen(true)}
            >
              <img src={image.src} alt={image.alt} />
            </button>
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
      <dialog
        ref={lightboxRef}
        className="gallery-lightbox"
        aria-label={`Immagine ingrandita: ${title}`}
        onCancel={(event) => {
          event.preventDefault()
          setIsFullScreenOpen(false)
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setIsFullScreenOpen(false)
          }
        }}
      >
        <button
          className="gallery-lightbox-close"
          type="button"
          aria-label="Chiudi immagine"
          onClick={() => setIsFullScreenOpen(false)}
        >
          <X size={24} aria-hidden="true" />
        </button>
        {image && (
          <figure>
            <img src={image.src} alt={image.alt} />
            {image.caption && <figcaption>{image.caption}</figcaption>}
          </figure>
        )}
      </dialog>
    </section>
  )
}
