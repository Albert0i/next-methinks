import '@/app/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PostLayout({ children }) {
  return (
    <>
        <Header />
        <div className='h-[calc(100vh-66px)] container mx-auto border border-red-900'>
        { children }
        <Footer />
        </div>
    </>
  )
}
