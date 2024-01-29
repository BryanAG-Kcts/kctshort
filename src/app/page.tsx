import { ShortInput } from '@/components/shortInput/shortForm'
import { ShowOutput } from '@/components/showOutput/showOutput'
export default function Home () {
  return (
    <main className='boxCol items-center max-w-3xl w-full'>
      <h1 className='text-5xl md:text-6xl font-semibold text-white'>Kctshort</h1>
      <ShortInput />
      <ShowOutput />
      <p className='text-white'>Las url caducan luego de 5 horas</p>
    </main>
  )
}
