import { Button } from '@ddal-kkak/ui/atoms'
import React from 'react'

const TmpComponents = [
  { id: 1, type: 'Column', text: '컬럼' },
  { id: 2, type: 'Text', text: '텍스트' },
  { id: 3, type: 'Link', text: '링크' },
  { id: 4, type: 'Image', text: '이미지' },
  { id: 5, type: 'Video', text: '비디오' },
  { id: 6, type: 'Map', text: '지도' },
  { id: 7, type: 'Quote', text: '인용구' },
  { id: 8, type: 'Button', text: '버튼' },
]

export default function EditorComponents() {
  return (
    <ul className="w-full grid grid-cols-2 gap-4">
      {TmpComponents.map((i) => (
        <li key={i.id} className="w-full">
          <Button variant="ghost" className="w-full aspect-square">
            {i.text}
          </Button>
        </li>
      ))}
    </ul>
  )
}
