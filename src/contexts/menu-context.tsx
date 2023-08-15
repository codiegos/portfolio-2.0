'use client'
import {
  useState,
  ReactNode,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react'

interface MenuContextProps {
  children: ReactNode
}

interface MenuContextDefault {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const MenuContext = createContext<MenuContextDefault>(
  {} as MenuContextDefault,
)

export const MenuProvider = ({ children }: MenuContextProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  )
}
