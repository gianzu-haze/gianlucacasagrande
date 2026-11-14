export function chronologicalEntries(entries) {
  return [...entries].sort(
    (a, b) =>
      Number(!b.endDate) - Number(!a.endDate) ||
      b.startDate.localeCompare(a.startDate) ||
      (b.endDate ?? '').localeCompare(a.endDate ?? '') ||
      a._meta.path.localeCompare(b._meta.path),
  )
}

export function newestPosts(posts) {
  return [...posts].sort(
    (a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug),
  )
}

export function formatDate(value) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${value}T00:00:00Z`))
}
