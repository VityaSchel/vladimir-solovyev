import Link from 'next/link'
import Button from '@/shared/ui/button'

export default function StartButton() {
  return (
    <Link href='/play'>
      <Button>Начать</Button>
    </Link>
  )
}