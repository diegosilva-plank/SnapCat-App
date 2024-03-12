import { Font } from 'hooks/useCustomFonts/types'

export type ButtonProps = {
  backgroundColor?: string
  color?: string
  hasShadow?: boolean
  isBold?: boolean
  text: string
  onClick: () => void
  font?: Font
  height?: number
  width?: number
}
