export const formatTextToSlug = (text: string) => {
  const newText = text.replace(/\ /g, '-')
  return newText
}
