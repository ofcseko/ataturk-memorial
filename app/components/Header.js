import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <nav className={styles.nav}>
                    <div className={styles.logo}>Atatürk</div>
                    <ul className={styles.links}>
                        <li><Link href="/">Ana Sayfa</Link></li>
                        <li><Link href="#biography">Hayatı</Link></li>
                        <li><Link href="#schools">Okulları</Link></li>
                        <li><Link href="#gallery">Fotoğraflar</Link></li>
                        <li><Link href="#tributes">Yazılanlar</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
