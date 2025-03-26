declare module 'lucide-react' {
  import { ComponentType, SVGProps } from 'react'

  export interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: number | string
    absoluteStrokeWidth?: boolean
    color?: string
    strokeWidth?: number
    className?: string
  }

  export type LucideIcon = ComponentType<LucideProps>

  export const Github: LucideIcon
  export const Linkedin: LucideIcon
  export const Mail: LucideIcon
  export const MapPin: LucideIcon
  export const Phone: LucideIcon
  export const Globe: LucideIcon
  export const ExternalLink: LucideIcon
  export const Lock: LucideIcon
  export const Download: LucideIcon
} 