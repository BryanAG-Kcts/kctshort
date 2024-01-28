'use client'
import { FormEvent, useContext } from 'react'
import { ShortButton } from './shortInput'
import { shortContext } from '../context/constants'
export const ShortInput = () => {
  const { handleSubmitToShort } = useContext(shortContext)

  const getUrlInput = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const url = e.currentTarget.urlToShort.value
    handleSubmitToShort(url)
  }

  return (
    <form onSubmit={getUrlInput} className='boxCol w-full'>
      <ShortButton />
    </form>
  )
}
