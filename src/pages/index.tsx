import { Layout } from '@/containers'

export default function Home() {


  return (
    <>
      <Layout>
        <div className='m-10 md:m-20 grid grid-cols-1 lg:grid-cols-2 grid-flow-dense- md:grid-flow-row'>
          <div className='order-2'>
            <div className='w-[60vw] h-[60vw] m-auto md:w-[300px] md:h-[300px] bg-white rounded-lg shadow-xl' />
          </div>
          <div className='text-white w-[70vw] m-auto mb-8'>
            <h1 className='text-6xl  font-bold'>
              Hi,
              <br className='md:hidden' />
              I am Eddy.
            </h1>
            <br />
            <div className=''>
              <h2>I am a Junior Frontend Developer</h2>
              <br />
              <h2>這個網站主要是紀錄所有我想要寫的文章，</h2>
              <h2>將學到的知識用自己的方式寫出來，</h2>
              <h2>把平常的一些想法寫下來，不局限於軟體技術。</h2>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
