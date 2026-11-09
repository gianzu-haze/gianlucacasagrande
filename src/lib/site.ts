export const site = {
  name: 'Gianluca Casagrande',
  role: 'Junior UX/UI designer',
  description:
    'Il portfolio di Gianluca Casagrande, Junior UX/UI designer. Progetti di interfacce, ricerca e progettazione centrata sulle persone.',
  summary:
    'Trasformo la curiosità in esperienze digitali intuitive, pensate per le persone.',
}
export function pageMeta(title: string, description: string) {
  const fullTitle = `${title} | ${site.name}`
  return {
    meta: [
      { title: fullTitle },
      { name: 'description', content: description },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
    ],
  }
}
