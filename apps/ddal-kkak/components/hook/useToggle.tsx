import { useState, useCallback } from 'react'
import { cn } from '@ddal-kkak/shared'

interface ToggleButtonProps {
  on: boolean
  toggle: () => void
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: 'w-10 h-5',
  md: 'w-12 h-6',
  lg: 'w-14 h-7',
}

const knobSizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
}

const ToggleComponent: React.FC<ToggleButtonProps> = ({ on, toggle, size = 'md' }) => {
  return (
    <div
      onClick={toggle}
      className={cn('flex items-center rounded-full p-1 cursor-pointer transition-all', sizeClasses[size], {
        'bg-green-500': on,
        'bg-gray-300': !on,
      })}
    >
      <div
        className={cn('bg-white rounded-full shadow-md transform transition-all', knobSizeClasses[size], {
          'translate-x-full': on,
          'translate-x-0': !on,
        })}
      />
    </div>
  )
}

function useToggleButton(initial: boolean = false) {
  const [isToggleActive, setIsToggleActive] = useState<boolean>(initial)

  const handleToggle = useCallback(() => {
    setIsToggleActive((prevState) => !prevState)
  }, [])

  const ToggleButton: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => <ToggleComponent on={isToggleActive} toggle={handleToggle} size={size} />

  return { ToggleButton, isToggleActive, setIsToggleActive }
}

export default useToggleButton
