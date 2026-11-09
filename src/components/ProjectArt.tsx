import {
  Asterisk,
  MapPin,
  Sun,
  Utensils,
  ArrowUpRight,
  Circle,
  Layers,
} from 'lucide-react'

export function ProjectArt({ kind }: { kind: string }) {
  return (
    <div className={`project-art preview-${kind}`} aria-hidden="true">
      {kind === 'dashboard' ? (
        <div className="mini-dashboard">
          <div className="mini-sidebar">
            <span className="mini-logo">a.</span>
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="mini-content">
            <div className="mini-top">
              APPA <span>Panoramica ambientale</span>
            </div>
            <div className="mini-stats">
              <i />
              <i />
              <i />
            </div>
            <div className="mini-chart">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="mini-lines">
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      ) : kind === 'map' ? (
        <div className="map-art">
          <div className="map-road road-one" />
          <div className="map-road road-two" />
          <div className="map-water" />
          <MapPin className="map-pin pin-one" size={40} />
          <MapPin className="map-pin pin-two" size={29} />
          <span className="map-label">Esplorare. Annotare.</span>
        </div>
      ) : kind === 'weather' ? (
        <div className="symbol-art">
          <Sun size={85} strokeWidth={1.2} />
          <span>Meteotrentino</span>
          <small>Un nuovo punto di vista.</small>
        </div>
      ) : kind === 'type' ? (
        <div className="symbol-art">
          <ArrowUpRight size={100} strokeWidth={1.2} />
          <span>Il prossimo passo.</span>
        </div>
      ) : kind === 'recipe' ? (
        <div className="symbol-art">
          <Utensils size={70} strokeWidth={1.2} />
          <span>Pick your poison</span>
          <small>Un ingrediente di imprevedibilità.</small>
        </div>
      ) : kind === 'beam' ? (
        <div className="symbol-art">
          <Asterisk size={95} strokeWidth={1.2} />
          <span>B.E.A.M</span>
        </div>
      ) : kind === 'poke' ? (
        <div className="symbol-art">
          <Circle size={90} strokeWidth={1.5} />
          <span>PokéSite</span>
        </div>
      ) : kind === 'ready' ? (
        <div className="symbol-art">
          <Layers size={75} strokeWidth={1.2} />
          <span>AllReady</span>
        </div>
      ) : (
        <div className="symbol-art research-type">
          <span>
            Tra muri
            <br />e materassi.
          </span>
          <small>Osservare per comprendere.</small>
        </div>
      )}
    </div>
  )
}
