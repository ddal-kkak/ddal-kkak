import { SpacerField } from '@/components/block-field'
import { TextField } from '@/components/block-field/text-field'
import { ImageField } from '@/components/ui/field'

export default function getFieldComponent(field: any, index: number) {
  switch (field.name) {
    case 'TextBlock':
      return <TextField {...field.data} index={index} key={index} />
    case 'SpacerBlock':
      return <SpacerField {...field.data} index={index} key={index} />
    case 'ImageBlock':
      return <ImageField index={index} key={index} />
    // case 'VideoBlock':
    // return <VideoBlock />;
    default:
      return <></>
  }
}
