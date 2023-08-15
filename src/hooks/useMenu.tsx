'use client'
import { MenuContext } from '@/contexts/menu-context'
import { useContext } from 'react'

export function useMenu() {
  const menu = useContext(MenuContext)
  if (menu === undefined) {
    throw new Error('useMenu must be used within a MenuProvider')
  }
  return menu
}
