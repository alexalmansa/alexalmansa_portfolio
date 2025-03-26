declare module 'class-variance-authority' {
  export type VariantProps<T extends (...args: any) => any> = Parameters<T>[0]

  export function cva<T extends Record<string, any>>(
    base?: string | string[],
    config?: {
      variants?: {
        [key: string]: {
          [key: string]: string | string[]
        }
      }
      defaultVariants?: {
        [key: string]: string
      }
      compoundVariants?: Array<T & { class: string | string[] }>
    }
  ): (props?: T) => string

  export type ClassValue = string | number | boolean | undefined | null | ClassValue[]
  export type ClassProp = { class?: string; className?: string }
  export type ClassDictionary = Record<string, any>
} 