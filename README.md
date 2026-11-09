# Gianluca Casagrande — Portfolio

Portfolio in italiano di Gianluca Casagrande, Junior UX/UI designer. La pagina iniziale presenta Gianluca e il suo approccio; la pagina `/projects` raccoglie nove progetti, con filtri per ambito e schede espandibili.

Realizzato con React 19, TypeScript, TanStack Start e Router, Vite, Tailwind CSS e Lucide. La pubblicazione usa l’adapter Netlify per TanStack Start. Non richiede un database né variabili d’ambiente.

## Sviluppo locale

Usare Node.js 22.13+ o 24 e pnpm:

```sh
pnpm install
pnpm dev
```

Il server di sviluppo è disponibile sulla porta 3000. Per l’emulazione Netlify usare `netlify dev --port 8889`.

## Personalizzazione

Il testo personale è in `src/routes/index.tsx`, i metadati in `src/lib/site.ts` e la raccolta progetti in `src/lib/projects.ts`. Il visual astratto della presentazione è temporaneo e può essere sostituito con un ritratto. Le copertine create in `src/components/ProjectArt.tsx` sono illustrazioni, non schermate reali. I titoli sono quelli forniti da Gianluca; i case study completi e i link possono essere aggiunti quando disponibili, senza inventare risultati o dettagli.
