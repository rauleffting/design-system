import { Label, TooltipContainer } from './styles'

export interface TooltipProps {
  date: string
  availability: string
}

export function Tooltip({ date, availability }: TooltipProps) {
  return (
    <TooltipContainer>
      <Label>
        {date || '21 de Outubro'} - {availability || 'Disponível'}
      </Label>
      <svg
        width="17"
        height="8"
        viewBox="0 0 17 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.5 8L16.5 0L0.5 0L8.5 8Z" fill="#121214" />
      </svg>
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'
