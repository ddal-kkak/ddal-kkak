import { FieldContainer } from '@/components/block-field/field-container'
import { useFormContext } from 'react-hook-form'
import { ColorField, InputField } from '@/components/ui/field'

type SpacerFieldProps = {
  index: number
}

export function SpacerField({ index }: SpacerFieldProps) {
  const { register } = useFormContext()

  return (
    <FieldContainer>
      <div className="pb-6 text-headline18">여백 블럭</div>
      <InputField label={'높이'} isRequired {...register(`dataList.${index}.data.blockStyle.height`)} />

      <ColorField label={'배경색'} isRequired {...register(`dataList.${index}.data.blockStyle.backgroundColor`)} />
    </FieldContainer>
  )
}
