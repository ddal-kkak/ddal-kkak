import { useFormContext } from 'react-hook-form'
import { BlockFieldProps, TextBlockSchema } from '@/schemas/blocks'
import { InputField } from '@/components/ui/field'
import { ColorField } from '@/components/ui/field/color-field'
import { FieldContainer } from './field-container'

type TextFieldProps = BlockFieldProps<typeof TextBlockSchema>

export function TextField({ index }: TextFieldProps) {
  const { register } = useFormContext()

  return (
    <FieldContainer>
      <div className="pb-6 text-headline18">텍스트 블럭</div>

      <InputField label={'텍스트'} isRequired {...register(`dataList.${index}.data.blockData.text`)} />
      <ColorField label={'색상'} {...register(`dataList.${index}.data.blockStyle.color`)} />
      <InputField label={'폰트 크기'} {...register(`dataList.${index}.data.blockStyle.fontSize`)} />
      <InputField label={'폰트 굵기'} {...register(`dataList.${index}.data.blockStyle.fontWeight`)} />
      <InputField label={'행간'} {...register(`dataList.${index}.data.blockStyle.lineHeight`)} />
      <InputField label={'정렬'} {...register(`dataList.${index}.data.blockStyle.textAlign`)} />
      <ColorField label={'배경색'} {...register(`dataList.${index}.data.blockStyle.backgroundColor`)} />
      <InputField label={'정렬'} {...register(`dataList.${index}.data.blockStyle.justifyContent`)} />
      <InputField label={'패딩 좌'} {...register(`dataList.${index}.data.blockStyle.paddingLeft`)} />
      <InputField label={'패딩 우'} {...register(`dataList.${index}.data.blockStyle.paddingRight`)} />
      <InputField label={'패딩 상'} {...register(`dataList.${index}.data.blockStyle.paddingTop`)} />
      <InputField label={'패딩 하'} {...register(`dataList.${index}.data.blockStyle.paddingBottom`)} />
    </FieldContainer>
  )
}
