import HorizonLine from '@/components/ui/HorizonLine'
import EditorButtons from '@/components/editor/EditorButtons'
import EditorComponents from '@/components/editor/EditorComponents'

type EditorLayoutProps = {
  children: React.ReactNode
}

export default function EditorLayout({ children }: EditorLayoutProps) {
  return (
    <div className="w-full py-10 flex gap-5 flex-row-reverse">
      <div className="relative w-full shrink-0 basis-1/4 min-w-60 space-y-10 pl-5">
        <EditorButtons />
        <HorizonLine />
        <EditorComponents />
      </div>
      <div className="w-full basis-3/4 min-h-[70vh]">{children}</div>
    </div>
  )
}
