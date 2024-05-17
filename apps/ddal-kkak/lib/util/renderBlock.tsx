import { SpacerBlock, TextBlock } from '@/app/_components/blocks'
import { ImageBlock } from '@/app/_components/blocks/image'
import VideoBlock from '@/app/_components/blocks/video'
import { ImageBlockSchema, SpacerBlockSchema, TextBlockSchema, VideoBlockSchema } from '@/schemas/blocks'
import React from 'react'
import { z } from 'zod'

type ImageBlockData = z.infer<typeof ImageBlockSchema>
type TextBlockData = z.infer<typeof TextBlockSchema>
type VideoBlockData = z.infer<typeof VideoBlockSchema>
type SpacerBlockData = z.infer<typeof SpacerBlockSchema>

type BlockData = ImageBlockData | TextBlockData | VideoBlockData | SpacerBlockData

const renderBlock = (block: BlockData): JSX.Element => {
  switch (block.name) {
    case 'ImageBlock':
      const imgBlock = block as ImageBlockData
      return <ImageBlock blockData={imgBlock.data.blockData} blockStyle={imgBlock.data.blockStyle} />
    case 'TextBlock':
      const textBlock = block as TextBlockData
      return <TextBlock blockData={textBlock.data.blockData} blockStyle={textBlock.data.blockStyle} />
    case 'VideoBlock':
      const videoBlock = block as VideoBlockData
      return <VideoBlock blockData={videoBlock.data.blockData} blockStyle={videoBlock.data.blockStyle} />
    case 'SpacerBlock':
      const spacerBlock = block as SpacerBlockData
      return <SpacerBlock blockStyle={spacerBlock.data.blockStyle} />
    default:
      return <React.Fragment />
  }
}

export default renderBlock
