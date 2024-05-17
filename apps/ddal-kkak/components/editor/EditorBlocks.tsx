'use client'
import { usePage } from '@/hooks/pages'
import { PageType } from '@/types/pages'
import { FieldArrayWithId, FieldValues, FormProvider, useFieldArray, UseFieldArrayAppend, useForm, UseFormReturn } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PageSchema } from '@/schemas/editor'
import { z } from 'zod'
import { Button, Input } from '@ddal-kkak/ui/atoms'
import { SpacerField } from '@/components/block-field'
import { TextField } from '@/components/block-field/text-field'
import { ImageField } from '@/components/ui/field'
import FieldContainer from '@/app/edit/_components/FieldContainer'
import LabelTag from '@/app/edit/_components/LabelTag'

type EditorBlocksProps = {
  methods: any
  handleSubmit: (data: Form) => void
}

type Form = z.infer<typeof PageSchema>

export default function EditorBlocks({ methods, handleSubmit }: EditorBlocksProps) {
  const { fields } = useFieldArray({
    control: methods.control,
    name: 'dataList',
  })

  // console.log(methods.formState.errors);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <Button type={'submit'}>제출</Button>
        <div className={'space-y-4'}>
          <FieldContainer>
            <LabelTag label="제목">
              <Input {...methods.register('info.title')} />
            </LabelTag>

            <LabelTag label="주소">
              <Input {...methods.register('info.slug')} />
            </LabelTag>
          </FieldContainer>
          <FieldContainer>
            <LabelTag label="타이틀">
              <Input {...methods.register('metaTagList.0.property')} type={'hidden'} defaultValue={'og:title'} />
              <Input {...methods.register('metaTagList.0.content')} />
            </LabelTag>

            <LabelTag label="설명">
              <Input {...methods.register('metaTagList.1.property')} type={'hidden'} defaultValue={'og:description'} />
              <Input {...methods.register('metaTagList.1.content')} />
            </LabelTag>
            <LabelTag label="이미지">
              <Input {...methods.register('metaTagList.2.property')} type={'hidden'} defaultValue={'og:image'} />
              <Input {...methods.register('metaTagList.2.content')} />
            </LabelTag>
          </FieldContainer>
        </div>

        {/* TODO: array 에 추가되는 방식 */}
        {fields.map((field, index) => getFieldComponent(field, index))}
      </form>
    </FormProvider>
  )
}

function getFieldComponent(field: any, index: number) {
  switch (field.name) {
    case 'TextBlock':
      return <TextField {...field.data} index={index} key={field.id} />
    case 'SpacerBlock':
      return <SpacerField {...field.data} index={index} key={field.id} />
    case 'ImageBlock':
      return <ImageField index={index} key={field.id} />
    case 'VideoBlock':
    // return <VideoBlock />;
    default:
      return null
  }
}
