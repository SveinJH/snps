import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <Link href="/">
                    <a>
                        <li className={styles.logo}>SNPS</li>
                    </a>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
