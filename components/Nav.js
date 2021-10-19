import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <div className={styles.navbar}>
            <ul>
                <Link href="/">
                    <a>
                        <li className={styles.logo}>SNPS</li>
                    </a>
                </Link>
            </ul>
        </div>
    )
}

export default Nav
