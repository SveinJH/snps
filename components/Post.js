import { useRouter } from 'next/router'
import { urlFor } from '../pages'
import { getNorwegianDateString } from '../utils/utils'
import styles from '../styles/Post.module.css'

const Post = ({ post }) => {
    const { image, slug, tags, title, videoLength } = post
    const router = useRouter()

    return (
        <div className={styles.post}>
            <div className={styles.image}>
                <img src={urlFor(image).width(350).url()} alt="" />
                <span id={styles.length}>{videoLength} minutt</span>
            </div>
            <div className={styles.content}>
                <div className={styles.createdAt}>
                    {getNorwegianDateString(post._createdAt)}
                </div>
                <div className={styles.tags}>
                    {tags.map(tag => (
                        <span key={tag} className="tag">
                            {tag}
                        </span>
                    ))}
                </div>
                <h3>{title}</h3>
                <button onClick={() => router.push(`/posts/${slug.current}`)}>
                    Se mer
                </button>
            </div>
        </div>
    )
}

export default Post
