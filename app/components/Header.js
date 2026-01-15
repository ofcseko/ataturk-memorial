import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className="container">
                <nav className={styles.nav}>
                    <div className={styles.logo}>Atatürk</div>

                    <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menüyü Aç/Kapa">
                        <span className={`${styles.bar} ${isMenuOpen ? styles.active : ''}`}></span>
                        <span className={`${styles.bar} ${isMenuOpen ? styles.active : ''}`}></span>
                        <span className={`${styles.bar} ${isMenuOpen ? styles.active : ''}`}></span>
                    </button>

                    <ul className={`${styles.links} ${isMenuOpen ? styles.active : ''}`}>
                        <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Ana Sayfa</Link></li>
                        <li><Link href="#biography" onClick={() => setIsMenuOpen(false)}>Hayatı</Link></li>
                        <li><Link href="#schools" onClick={() => setIsMenuOpen(false)}>Okulları</Link></li>
                        <li><Link href="#gallery" onClick={() => setIsMenuOpen(false)}>Fotoğraflar</Link></li>
                        <li><Link href="#tributes" onClick={() => setIsMenuOpen(false)}>Yazılanlar</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
