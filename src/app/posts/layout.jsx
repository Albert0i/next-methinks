import '@/app/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PostLayout({ children }) {
  return (
        <div className="container max-w-4xl px-2 mx-auto">
          <Header />
          <div className='h-[calc(100vh-66px)]'>
            { children }
            <Footer />
          </div>          
        </div>
  )
}
/*
   h-[66px] h-[calc(100vh-66px)]
*/