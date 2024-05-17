import { PropsWithChildren } from 'react'

type LabelProps = PropsWithChildren<{
  label: string
  isRequired?: boolean
}>

export function Label({ label, isRequired = false, children }: LabelProps) {
  return (
    <label className="mb-2 text-sm w-full font-medium text-gray-700 grid grid-cols-[80px_1fr]">
      <span className="flex items-center h-full">
        <span>{label}</span>
        {isRequired && <span className="ml-1 text-danger-01">*</span>}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  )
}
