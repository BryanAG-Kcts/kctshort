export const isValidUrl = (url : string) => {
  try {
    const isUrl = new URL(url)
    return Boolean(isUrl)
  } catch (e) {
    return false
  }
}
