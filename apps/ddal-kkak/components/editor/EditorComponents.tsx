'use client'
import { Button } from '@ddal-kkak/ui/atoms'
import { blockDefaultValue } from 'constant/defaultBlock'
import React from 'react'
import { useFieldArray, UseFormReturn } from 'react-hook-form'

const { SPACER, TEXT, IMAGE, VIDEO } = blockDefaultValue

const BlockAddButtonList = [
  { id: 1, type: 'TextBlock', text: '텍스트', defaultValue: SPACER },
  { id: 2, type: 'SpacerBlock', text: '여백', defaultValue: TEXT },
  { id: 3, type: 'ImageBlock', text: '이미지', defaultValue: IMAGE },
  { id: 4, type: 'VideoBlock', text: '비디오', defaultValue: VIDEO },
]

type EditorComponentsProps = {
  methods: any
}

export default function EditorComponents({ methods }: EditorComponentsProps) {
  const { append } = useFieldArray({
    control: methods.control,
    name: 'dataList',
  })
  return (
    <ul className="w-full grid grid-cols-2 gap-4">
      {BlockAddButtonList.map((buttonInfo) => (
        <li key={buttonInfo.id} className="w-full">
          <Button type={'button'} variant="ghost" className="w-full aspect-square" onClick={() => append(buttonInfo.defaultValue)}>
            {buttonInfo.text}
          </Button>
        </li>
      ))}
    </ul>
  )
}
