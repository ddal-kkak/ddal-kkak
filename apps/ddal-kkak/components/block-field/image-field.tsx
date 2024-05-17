import { FieldContainer } from '@/components/block-field'
import { InputField } from '@/components/ui/field/input-field'
import { useFormContext } from 'react-hook-form'
import { ColorField } from '@/components/ui/field/color-field'

export function ImageField({ index }: { index: number }) {
  const { register } = useFormContext()
  return (
    <FieldContainer>
      <div className="pb-6 text-headline18">이미지 블럭</div>
      <InputField label={'이미지 url'} isRequired {...register(`dataList.${index}.data.blockData.src`)} />
      <InputField label={'대체 메시지'} isRequired {...register(`dataList.${index}.data.blockData.alt`)} />

      <InputField label={'너비'} {...register(`dataList.${index}.data.blockStyle.width`)} />

      <ColorField label={'배경색'} {...register(`dataList.${index}.data.blockStyle.backgroundColor`)} />

      <InputField label={'정렬'} {...register(`dataList.${index}.data.blockStyle.justifyContent`)} />
      <InputField label={'패딩 좌'} {...register(`dataList.${index}.data.blockStyle.paddingLeft`)} />
      <InputField label={'패딩 우'} {...register(`dataList.${index}.data.blockStyle.paddingRight`)} />
      <InputField label={'패딩 상'} {...register(`dataList.${index}.data.blockStyle.paddingTop`)} />
      <InputField label={'패딩 하'} {...register(`dataList.${index}.data.blockStyle.paddingBottom`)} />
    </FieldContainer>
  )
}
