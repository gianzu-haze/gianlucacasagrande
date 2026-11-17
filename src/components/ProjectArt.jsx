import {
  Asterisk,
  MapPin,
  Sun,
  Utensils,
  ArrowUpRight,
  Circle,
  Layers,
} from 'lucide-react'

export function ProjectArt({ kind }) {
  return (
    <div className={`project-art preview-${kind}`} aria-hidden="true">
      {kind === 'dashboard' ? (
        <div className="mini-dashboard">
          <img src="APPA.jpg"></img>
        </div>
      ) : kind === 'map' ? (
        <div className="map-art">
          <img src="IGG.jpg"></img>
        </div>
      ) : kind === 'weather' ? (
        <div className="symbol-art">
          <img src="Meteotrentino.png"></img>
        </div>
      ) : kind === 'type' ? (
        <div className="banca-art">
          <img src="Banca_reale.png"></img>
        </div>
      ) : kind === 'recipe' ? (
        <div className="symbol-art">
          <img src="Poison.jpg"></img>
        </div>
      ) : kind === 'beam' ? (
        <div className="BEAM-art">
          <img src="BEAM.png"></img>
        </div>
      ) : kind === 'poke' ? (
        <div className="symbol-art">
          <img src="Pokemon.jpg"></img>
        </div>
      ) : kind === 'ready' ? (
        <div className="symbol-art">
          <img src="AllReady.png"></img>
        </div>
      ) : (
        <div className="MEM-art">
          <img src="MEM.png"></img>
        </div>
      )}
    </div>
  )
}
