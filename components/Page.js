import Head from 'next/head'
import Nav from './Nav'

const Page = ({ children }) => {
    return (
        <>
            <Head>
                <title>SNPS</title>
            </Head>
            <Nav />
            <div className="page-content">{children}</div>
        </>
    )
}

export default Page
