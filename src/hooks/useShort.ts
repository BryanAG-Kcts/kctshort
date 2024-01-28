import { useState } from 'react'
import { isValidUrl } from './constants'
import { IShort } from '@/components/context/constants'

export const useShort = () : IShort => {
  const [shortUrl, setShortUrl] = useState<string>('')

  const handleSubmitToShort = (url : string) => {
    const isUrl = isValidUrl(url)
    if (!isUrl) return

    console.log('bien')
    setShortUrl(url)
  }

  return {
    shortUrl,
    handleSubmitToShort,
    setShortUrl
  }
}
