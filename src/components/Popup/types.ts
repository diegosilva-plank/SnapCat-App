import { PropsWithChildren } from 'react'

export type PopupProps = PropsWithChildren<{
  setVisibility: (value: boolean) => void
}>
