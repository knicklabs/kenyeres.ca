export const localDate = d => new Date(Date.parse(d)).toLocaleString("en-US", {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})
