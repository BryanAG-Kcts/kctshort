import { ShortInput } from '@/components/shortInput/shortForm'
import { ShowOutput } from '@/components/showOutput/showOutput'
export default function Home () {
  return (
    <>
      <h1 className='text-3xl font-semibold'>Kctshort</h1>
      <ShortInput />
      <ShowOutput />
    </>
  )
}
