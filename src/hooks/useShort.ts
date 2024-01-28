import { useState } from 'react'
import { isValidUrl } from './constants'
import { IShort } from '@/components/context/constants'
import { post } from '@/constants/fetch/post'

export const useShort = () : IShort => {
  const [shortUrl, setShortUrl] = useState<string>('')

  const handleSubmitToShort = async (url : string) => {
    const isUrl = isValidUrl(url)
    if (!isUrl) return

    const urlQuery = await post('http://https://kctshort-fzzcu7fjb-bryanag-kcts-projects.vercel.app/URL', { url })

    if (!urlQuery.urlShorted) {
      setShortUrl('Algo ha fallado')
      return
    }
    const { urlShorted } = urlQuery
    setShortUrl(urlShorted)
  }

  return {
    shortUrl,
    handleSubmitToShort,
    setShortUrl
  }
}
