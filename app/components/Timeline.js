"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from './Timeline.module.css';

export default function Timeline() {
    const [events, setEvents] = useState([]);
    const observerRef = useRef(null);

    useEffect(() => {
        fetch('/api/biography')
            .then(res => res.json())
            .then(data => setEvents(data));
    }, []);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                }
            });
        }, { threshold: 0.2 });

        const elements = document.querySelectorAll(`.${styles.event}`);
        elements.forEach(el => observerRef.current.observe(el));

        return () => observerRef.current?.disconnect();
    }, [events]);

    return (
        <section className={styles.timelineSection}>
            <h2 className={styles.sectionTitle}>Hayatı ve Mücadelesi</h2>
            <div className={styles.timeline}>
                {events.map((event, index) => (
                    <div key={index} className={styles.event}>
                        <div className={styles.eventDot}></div>
                        <div className={styles.eventContent}>
                            <div className={styles.eventHeader}>
                                <span className={styles.year}>{event.year}</span>
                                <h3 className={styles.title}>{event.title}</h3>
                            </div>
                            <p className={styles.description}>{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
