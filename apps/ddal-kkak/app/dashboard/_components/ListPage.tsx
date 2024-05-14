'use client'
import Container from '@/components/layout/Container'
import { Button } from '@ddal-kkak/ui/atoms'
import dayjs from 'dayjs'

const data = [
  {
    id: 1,
    title: '치킨 할인 페이지',
    slug: 'chicken-discount',
    status: 'DRAFT',
    uiJson: {},
    metaTagList: [
      {
        property: 'og:title',
        content: '치킨 할인 페이지',
      },
      {
        property: 'og:description',
        content: '치킨 할인 페이지에 오신 것을 환영합니다.',
      },
    ],
  },
  {
    id: 2,
    title: '치킨 할인 페이지222',
    slug: 'chicken-discount222',
    status: 'DRAFT',
    uiJson: {},
    metaTagList: [
      {
        property: 'og:title',
        content: '치킨 할인 페이지',
      },
      {
        property: 'og:description',
        content: '치킨 할인 페이지에 오신 것을 환영합니다.',
      },
    ],
  },
]

export default function ListPage() {
  return (
    <Container title="대쉬보드">
      <ul className="w-full flex gap-8 flex-col">
        {data.map((item, idx) => (
          <li key={item.id}>
            <div className="w-full max-w-screen-lg min-h-36 rounded border border-neutral-200 flex justify-between">
              <div className="flex-grow flex">
                <div className="h-full aspect-video flex items-center justify-center bg-neutral-100">이미지</div>
                <div className="text-body14 flex-grow flex flex-col gap-4 p-6">
                  <h2 className="text-title15">{item.title}</h2>
                  <div className="flex flex-col gap-2">
                    <p className="text-neutral-400">{item.slug}</p>
                    <p className="text-body12">{dayjs().format('YYYY-MM-DD')}생성</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-6 items-end">
                <div className="flex items-center gap-4">
                  <button>토클</button>
                  <Button variant="solid">편집하기</Button>
                </div>
                <Button variant="ghost">웹사이트 방문하기</Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Button theme="primary" variant="outline" className="absolute top-10 right-0">
        새로운 페이지 만들기 +
      </Button>
    </Container>
  )
}
