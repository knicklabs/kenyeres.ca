export const localDate = d => new Date(d).toLocaleString("en-US", {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})
