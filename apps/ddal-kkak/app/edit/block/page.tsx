import EditorBlocks from '@/components/editor/EditorBlocks'
import EditorButtons from '@/components/editor/EditorButtons'
import EditorComponents from '@/components/editor/EditorComponents'
import HorizonLine from '@/components/ui/HorizonLine'

export default function BlockEditPage() {
  return (
    <div className="w-full flex gap-5 flex-row-reverse">
      <div className="relative w-full shrink-0 basis-1/4 min-w-60 space-y-10 pl-5">
        <EditorButtons />
        <HorizonLine />
        <EditorComponents />
      </div>
      <div className="w-full basis-3/4 min-h-[70vh]">
        <EditorBlocks />
      </div>
    </div>
  )
}
