import Head from 'next/head'
import client from '../../client'
import styles from '../../styles/SinglePost.module.css'
import { getNorwegianDateString } from '../../utils/utils'

export const getStaticPaths = async () => {
    const posts = await client.fetch('*[_type == "post"]')

    const paths = posts.map(post => ({
        params: { slug: `${post.slug}` },
    }))

    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps = async ({ params }) => {
    try {
        const post = await client.fetch(
            `*[slug.current == "${params.slug}"][0]`,
        )
        return {
            props: { post: post || null },
        }
    } catch (err) {}
}

const PostPage = ({ post }) => {
    if (!post) {
        return <div>Loading...</div>
    }

    const { _createdAt, tags, title, video } = post

    return (
        <>
            <Head>
                <title>SNPS | {title}</title>
            </Head>
            <article className={styles.post}>
                <div>
                    {video?.url && (
                        <video controls>
                            <source src={video.url} />
                            Nettleseren din støtter ikke denne videoen.
                        </video>
                    )}
                </div>
                <div className={styles.content}>
                    <div className={styles.date}>
                        {getNorwegianDateString(_createdAt)}
                    </div>
                    <h3>{title}</h3>
                    <div className={styles.tags}>
                        {tags.map(tag => (
                            <span key={tag} className="tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </article>
        </>
    )
}

export default PostPage
