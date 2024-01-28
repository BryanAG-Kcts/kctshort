export const post = async (url : string, body : object) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }

  try {
    const response = await fetch(url, options)
    const data = await response.json()

    return data
  } catch (error) {
    return {}
  }
}
