import { styled } from '../../styles'
import { Text } from '../Text'

export const ToastContainer = styled('div', {
  padding: '$3 $5',
  width: '$90',
  minHeight: '$20',
  borderRadius: '$sm',
  background: '$gray600',
})

export const ToastHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  svg: {
    color: '$gray200',
    height: '$5',
    width: '$5',
    cursor: 'pointer',
  },
})

export const Label = styled(Text, {
  color: '$white',
  fontWeight: '$bold',

  defaultVariants: {
    size: 'xl',
  },
})

export const Description = styled(Text, {
  color: '$gray200',
  fontWeight: '$regular',

  defaultVariants: {
    size: 'sm',
  },
})
