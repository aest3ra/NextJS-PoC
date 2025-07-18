import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Next.js CVE-2025-29927 PoC</h1>
            <p className={styles.description}>
                This page is a proof-of-concept for the Next.js middleware bypass vulnerability.
            </p>

            <div className={styles.grid}>
                <Link href="/admin" className={styles.card}>
                    <h2>
                        Go to Admin Page <span>-&gt;</span>
                    </h2>
                    <p>This should be blocked by middleware and redirect you to the homepage.</p>
                </Link>
            </div>
        </main>
    )
}
