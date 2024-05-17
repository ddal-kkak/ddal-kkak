import { forwardRef } from 'react'
import { Label } from '@/components/ui/field/label'
import { Input } from '@ddal-kkak/ui/atoms'

type InputFieldProps = {
  label: string
  isRequired?: boolean
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(function ({ label, isRequired, ...rest }, ref) {
  return (
    <Label label={label} isRequired={isRequired}>
      <Input ref={ref} size={'sm'} {...rest} />
    </Label>
  )
})
