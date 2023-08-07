import '@/app/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PostLayout({ children }) {
  return (
        <div className="max-w-2xl px-2 mx-auto">
          <Header />
          { children }
          <Footer />
        </div>
  )
}
