import imageUrlBuilder from '@sanity/image-url'
import client from '../client'
import Post from '../components/Post'
import styles from '../styles/Posts.module.css'

const builder = imageUrlBuilder(client)

export const urlFor = source => builder.image(source)

export const getStaticProps = async () => {
    const posts = await client.fetch(
        '*[_type == "post"] | order(_createdAt desc)',
    )

    return {
        props: { posts },
    }
}

const PostsPage = ({ posts }) => {
    return (
        <div>
            <section className={styles.posts}>
                {posts.map(post => (
                    <Post key={post._id} post={post} />
                ))}
            </section>
        </div>
    )
}

export default PostsPage
