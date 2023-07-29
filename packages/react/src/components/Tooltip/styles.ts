import { styled } from '../../styles'
import { Text } from '../Text'

export const TooltipContainer = styled('div', {
  padding: '$3 $4',
  borderRadius: '$x',
  backgroundColor: '$gray900',
  width: '$48',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',

  svg: {
    position: 'absolute',
    bottom: -8,
  },
})

export const Label = styled(Text, {
  color: '$gray100',
  fontWeight: '$regular',
})
