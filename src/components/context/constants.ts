import { createContext } from 'react'

export interface IShort {
    shortUrl : string,
    handleSubmitToShort : (url : string) => void,
    setShortUrl : (url : string) => void,
}

export const shortContext = createContext({} as IShort)
