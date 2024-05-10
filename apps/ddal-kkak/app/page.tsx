import { Button } from '@ddal-kkak/ui/atoms'
import Link from 'next/link'
import Menu from '@/components/layout/Menu'
import IconClickFill from '@/components/ui/icons/IconClickFill'

export default function Page(): JSX.Element {
  const menu = Menu()
  return (
    <section className="w-full grow max-w-screen-xl px-10 py-40 flex items-center flex-col gap-6 justify-center mx-auto">
      <div className="text-headline30 flex gap-2 items-center">
        딸깍으로 세상을 평정해보세요 <IconClickFill />
      </div>
      <Link href={menu.edit.href}>
        <Button size="xl" className="tracking-wider">
          마케팅페이지 딸깍 하러가기
        </Button>
      </Link>
    </section>
  )
}
