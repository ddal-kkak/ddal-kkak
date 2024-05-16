'use client'
import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button, Input } from '@ddal-kkak/ui/atoms'
import { PageSchema } from '@/schemas/editor'
import { PageType } from '@/types/pages'

type PageSchemaType = z.infer<typeof PageSchema>

type Props = {
  data: PageType | undefined
}

export default function TestForm({ data }: Props) {
  console.log(data)
  const method = useForm<PageSchemaType>({
    resolver: zodResolver(PageSchema),
  })
  const { register, control } = method

  const { fields, append } = useFieldArray({
    control,
    name: 'metaTagList',
  })

  const handleSubmit = (data: PageSchemaType) => {
    console.log(data)
  }

  return (
    <>
      <Button
        type={'button'}
        onClick={() =>
          append({
            property: '',
            content: '',
          })
        }
      >
        추가
      </Button>
      <form {...method} onSubmit={method.handleSubmit(handleSubmit)} className={'flex flex-col'}>
        <label htmlFor="">
          title
          <Input type="text" {...register('info.title')} />
        </label>
        <label>
          slug
          <Input type="text" {...register('info.slug')} />
        </label>
        <label>
          meta
          <Input type="text" {...register(`metaTagList.0.property`)} />
        </label>
        <label htmlFor="">
          content
          <Input type="text" {...register(`metaTagList.0.content`)} />
        </label>
        {fields.map((field, index) => (
          <>
            <label>
              meta
              <Input type="text" key={field.id} {...register(`metaTagList.${index + 1}.property`)} />
            </label>
            <label htmlFor="">
              content
              <Input type="text" key={field.id} {...register(`metaTagList.${index + 1}.content`)} />
            </label>
          </>
        ))}
        <Button>제출</Button>
      </form>
    </>
  )
}
