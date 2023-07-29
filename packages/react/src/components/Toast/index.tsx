import { ToastContainer, Label, Description, ToastHeader } from './styles'
import { X } from 'phosphor-react'

export interface ToastProps {
  date: string
}

export function Toast({ date }: ToastProps) {
  return (
    <ToastContainer>
      <ToastHeader>
        <Label>Agendamento realizado</Label>
        <X />
      </ToastHeader>
      <Description>{date || 'Quarta-feira, 23 de Outubro às 16 h'}</Description>
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
