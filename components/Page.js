import Nav from './Nav'

const Page = ({ children }) => {
    return (
        <>
            <Nav />
            <div className="page-content">{children}</div>
        </>
    )
}

export default Page
