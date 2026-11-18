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
          <img src="/Images/APPA.jpg"></img>
        </div>
      ) : kind === 'map' ? (
        <div className="map-art">
          <img src="/Images/IGG.jpg"></img>
        </div>
      ) : kind === 'weather' ? (
        <div className="symbol-art">
          <img src="/Images/Meteotrentino.png"></img>
        </div>
      ) : kind === 'type' ? (
        <div className="banca-art">
          <img src="/Images/Banca_reale.png"></img>
        </div>
      ) : kind === 'recipe' ? (
        <div className="symbol-art">
          <img src="/Images/Poison.jpg"></img>
        </div>
      ) : kind === 'beam' ? (
        <div className="BEAM-art">
          <img src="/Images/BEAM.png"></img>
        </div>
      ) : kind === 'poke' ? (
        <div className="symbol-art">
          <img src="/Images/Pokemon.jpg"></img>
        </div>
      ) : kind === 'ready' ? (
        <div className="symbol-art">
          <img src="/Images/AllReady.png"></img>
        </div>
      ) : (
        <div className="MEM-art">
          <img src="/Images/MEM.png"></img>
        </div>
      )}
    </div>
  )
}
