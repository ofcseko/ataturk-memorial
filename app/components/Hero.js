'use client';

import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const quotes = [
    "Gelecek, gençlerin, gençler ise öğretmenlerin eseridir.",
    "Hayatta en hakiki mürşit ilimdir.",
    "Yurtta sulh, cihanda sulh.",
    "Egemenlik, kayıtsız şartsız milletindir.",
    "Beni görmek demek mutlaka yüzümü görmek demek değildir. Benim fikirlerimi, benim duygularımı anlıyorsanız ve hissediyorsanız bu kafidir.",
    "Bir ulus, sımsıkı birbirine bağlı olmayı bildikçe yeryüzünde onu dağıtabilecek bir güç düşünülemez.",
    "Öğretmenler; Yeni nesli, Cumhuriyetin fedakâr öğretmen ve eğitimcilerini, sizler yetiştireceksiniz ve yeni nesil, sizin eseriniz olacaktır.",
    "Ey yükselen yeni nesil! İstikbal sizsiniz. Cumhuriyeti biz kurduk, onu yükseltecek ve yaşatacak sizsiniz."
];

const backgroundImages = [
    "/images/bg.png",
    "/images/bg2.png",
    "/images/bg3.png",
    "/images/bg4.png",
    "/images/bg5.png",
    "/images/bg6.png"
];

export default function Hero() {
    const [quote, setQuote] = useState("");
    const [currentBgIndex, setCurrentBgIndex] = useState(0);

    useEffect(() => {
        // Randomize starting image
        setCurrentBgIndex(Math.floor(Math.random() * backgroundImages.length));

        // Random quote logic
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomQuote);

        // Slideshow logic
        const interval = setInterval(() => {
            setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 7000); // 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.hero}>
            {/* Background Slideshow */}
            <div className={styles.slideshow}>
                {backgroundImages.map((src, index) => (
                    <div
                        key={index}
                        className={`${styles.slide} ${index === currentBgIndex ? styles.active : ''}`}
                        style={{ backgroundImage: `url(${src})` }}
                    />
                ))}
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.content}>
                <h1 className={styles.title}>Bir Liderin İzinde</h1>
                <p className={styles.subtitle}>
                    {quote || "..."}
                </p>

            </div>
        </section>
    );
}
