import Navbar from './Header'
import Footer from './Footer'
import { Figtree } from 'next/font/google'
import classNames from 'classnames'

const figtree = Figtree({ subsets: ['latin'], weight: ["400", "600", "700"] })

type Props = {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className={classNames(figtree.className, 'flex flex-col min-h-screen relative')}>
            <header className='max-h-[100px] h-full relative z-[1000]'>
                <Navbar />
            </header>
            <main className='flex-grow'>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout