'use client'

import { useContext } from 'react'
import { shortContext } from '../context/constants'

export const ShowOutput = () => {
  const { shortUrl } = useContext(shortContext)

  return (
    <>
      {shortUrl && <output>{shortUrl}</output>}
    </>
  )
}
