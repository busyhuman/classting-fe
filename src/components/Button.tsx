import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  style?: 'primary' | 'secondary'
  onClick?: () => void
}
export default function Button({
  children,
  size = 'md',
  style = 'primary',
  onClick,
}: Props) {
  const _style = style === 'primary' ? 'bg-blue-400' : 'bg-green-400'
  const _size =
    size === 'md' ? 'w-20 h-8' : size === 'lg' ? 'w-24 h-12' : 'w-16 h-4'
  return (
    <button
      type="button"
      className={`rounded text-sm text-white hover:opacity-90 ${_style} ${_size}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
