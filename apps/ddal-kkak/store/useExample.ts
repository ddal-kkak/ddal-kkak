import { create } from 'zustand'

export type initialType = {
  text: string
  value: string
}
interface useExampleType {
  state: initialType
  setState: (x: initialType) => void
  resetState: () => void
}

export const INITIAL_VALUE = {
  text: '예시',
  value: 'example',
}

const useExample = create<useExampleType>((set) => ({
  state: INITIAL_VALUE,
  setState: (item) => set(() => ({ state: item })),
  resetState: () => set(() => ({ state: INITIAL_VALUE })),
}))

export default useExample
