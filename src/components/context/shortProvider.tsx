'use client'
import React, { ReactNode } from 'react'
import { shortContext } from './constants'
import { useShort } from '@/hooks/useShort'

export const ShortProvider = ({ children } : {children : ReactNode}) => {
  return (
    <shortContext.Provider value={useShort()}>
      {children}
    </shortContext.Provider>
  )
}
