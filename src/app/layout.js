import Footer from './components/Footer/Footer'
import Navbar from './components/NavBar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ofijan Blog | Ofijan Exams        || Ethiopian exit Exam || 2015 Ethiopian exit Exam | 2016 Ethiopian exit Exam | GAT | Ethiopian NGAT | GRE | SAP ',
  description: 'The Best exam resource on th internet',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
          <div className='wrapper'>
        <Navbar/>
        {children}
        <Footer/>
        </div>
      </div>
      </body>
    </html>
  )
}
