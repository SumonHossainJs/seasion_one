import { Inter } from 'next/font/google'
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import AuthProvider from '@/components/AuthProvider/AuthProvider';
import { ThemeProvider } from './Context/ThemeContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js Portfolio app ',
  description: 'Al hamdulilha this is my firstime working on a Next.js app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className='container'>
              <Navbar/>
              {children}
              <Footer/>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
