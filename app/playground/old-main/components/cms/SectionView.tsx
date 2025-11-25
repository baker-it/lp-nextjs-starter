'use client'
import { useSectionView, type SectionViewOptions } from '@/lib/hooks/useSectionView'
import { forwardRef } from 'react'
import cn from 'clsx'
type Props = React.HTMLAttributes<HTMLElement> & { keyName: string; options?: SectionViewOptions; as?: keyof JSX.IntrinsicElements }
const SectionView = forwardRef<HTMLElement, Props>(function SectionView({ keyName, options, as = 'section', className, children, ...rest }, _) {
  const ref = useSectionView(keyName, options)
  const As: any = as
  return (<As ref={ref} className={cn(className)} {...rest}>{children}</As>)
})
export default SectionView
