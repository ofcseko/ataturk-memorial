"use client";
import React, { useEffect, useState } from 'react';
import styles from './PersonalLife.module.css';

export default function PersonalLife() {
    const [data, setData] = useState({ features: [], intellectual: [] });

    useEffect(() => {
        fetch('/api/personal')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return (
        <section className={styles.personalSection}>
            <h2 className={styles.sectionTitle}>Kişisel ve Fikri Hayatı</h2>

            <div className={styles.grid}>
                {/* Physical Features & Personal Stories */}
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Özellikleri ve Anılar</h3>
                    {data.features.map((item, index) => (
                        <div key={index} className={styles.item}>
                            <span className={styles.itemTitle}>{item.title}</span>
                            <p className={styles.itemDescription}>{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Intellectual Life */}
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Fikir Dünyası</h3>
                    {data.intellectual.map((item, index) => (
                        <div key={index} className={styles.item}>
                            <span className={styles.itemTitle}>{item.title}</span>
                            <p className={styles.itemDescription}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
