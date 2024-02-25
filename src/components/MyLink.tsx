import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  children: ReactNode
  to: string
  size?: 'sm' | 'md' | 'lg'
  style?: 'primary' | 'secondary'
}
export default function MyLink({
  children,
  to = '',
  size = 'md',
  style = 'primary',
}: Props) {
  const _style = style === 'primary' ? 'bg-blue-400' : 'bg-green-400'
  const _size =
    size === 'md' ? 'w-20 h-8' : size === 'lg' ? 'w-24 h-12' : 'w-16 h-4'
  return (
    <Link
      type="button"
      className={`flex justify-center items-center rounded text-sm text-white hover:opacity-90 ${_style} ${_size}`}
      to={to}
    >
      {children}
    </Link>
  )
}
