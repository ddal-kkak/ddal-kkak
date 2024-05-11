'use client'
import { Button } from '@ddal-kkak/ui/atoms'
import { DEFAULT_ROUTER } from 'constant/route'
import { useRouter } from 'next/navigation'

export default function EditorButtons() {
  const router = useRouter()
  return (
    <div className="space-y-4 w-full">
      <div className="w-full flex gap-4 justify-between">
        <Button size="lg" theme="primary" variant="outline" className="w-full" onClick={() => router.push(DEFAULT_ROUTER.preview.href)}>
          {DEFAULT_ROUTER.preview.title}
        </Button>
        <Button variant="outline" theme="secondary" className="w-full" size="lg">
          배포하기
        </Button>
      </div>
      <Button className="w-full" size="lg">
        저장하기
      </Button>
    </div>
  )
}
