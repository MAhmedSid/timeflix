import { Inter } from 'next/font/google'
import Herosection from './components/Herosection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Herosection title="LET'S WATCH MOVIES TOGETHER" imageUrl="/home.svg" />
    </>
  )
}
