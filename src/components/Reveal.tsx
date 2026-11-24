import type { ElementType, ReactNode } from 'react';
import { useReveal } from '../hooks';

interface RevealProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

export default function Reveal({ as: Tag = 'div', className = '', children }: RevealProps) {
  const [ref, inView] = useReveal<HTMLElement>();
  return (
    <Tag ref={ref} className={`reveal ${inView ? 'in' : ''} ${className}`}>
      {children}
    </Tag>
  );
}
