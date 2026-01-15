"use client";
import React, { useEffect, useState } from 'react';
import styles from './Biography.module.css';

export default function Biography() {
    const [chapters, setChapters] = useState([]);
    const [activeChapter, setActiveChapter] = useState(null);

    useEffect(() => {
        fetch('/api/biography')
            .then(res => res.json())
            .then(data => {
                setChapters(data);
                if (data.length > 0) {
                    setActiveChapter(data[0]);
                }
            });
    }, []);

    if (!activeChapter) return null;

    return (
        <section className={styles.biographySection} id="biography">
            <h2 className={styles.sectionTitle}>Hayatı ve Eserleri</h2>

            <div className={styles.container}>
                {/* Navigation Tabs */}
                <div className={styles.tabs}>
                    {chapters.map(chapter => (
                        <button
                            key={chapter.id}
                            className={`${styles.tabButton} ${activeChapter.id === chapter.id ? styles.active : ''}`}
                            onClick={() => setActiveChapter(chapter)}
                        >
                            {chapter.title}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className={styles.contentArea}>
                    <h3 className={styles.chapterTitle}>{activeChapter.title}</h3>
                    <div className={styles.chapterText}>
                        {activeChapter.content}
                    </div>

                    {/* Featured Quotes */}
                    {activeChapter.quotes && activeChapter.quotes.length > 0 && (
                        <div className={styles.quotesContainer}>
                            {activeChapter.quotes.map((quote, idx) => (
                                <p key={idx} className={styles.quote}>"{quote}"</p>
                            ))}
                        </div>
                    )}

                    {/* Mini Timeline for this chapter */}
                    {activeChapter.keyDates && activeChapter.keyDates.length > 0 && (
                        <div className={styles.keyDates}>
                            <h4 className={styles.keyDatesTitle}>Önemli Tarihler</h4>
                            <div className={styles.timelineGrid}>
                                {activeChapter.keyDates.map((date, idx) => (
                                    <div key={idx} className={styles.dateItem}>
                                        <span className={styles.dateYear}>{date.year}</span>
                                        <span className={styles.dateEvent}>{date.event}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
