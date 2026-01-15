"use client";
import React, { useEffect, useState } from 'react';
import styles from './Schools.module.css';

export default function Schools() {
    const [schools, setSchools] = useState([]);
    const [selectedSchool, setSelectedSchool] = useState(null);

    useEffect(() => {
        fetch('/api/schools')
            .then(res => res.json())
            .then(data => setSchools(data));
    }, []);

    return (
        <section className={styles.schoolsSection}>
            <h2 className={styles.sectionTitle}>Eğitim Hayatı</h2>
            <div className={styles.grid}>
                {schools.map((school) => (
                    <div
                        key={school.id}
                        className={`${styles.card} ${selectedSchool === school.id ? styles.active : ''}`}
                        onClick={() => setSelectedSchool(school.id === selectedSchool ? null : school.id)}
                    >
                        <h3 className={styles.schoolName}>{school.name}</h3>
                        <span className={styles.period}>{school.period}</span>
                        <div className={`${styles.details} ${selectedSchool === school.id ? styles.show : ''}`}>
                            <p className={styles.location}>📍 {school.location}</p>
                            <p className={styles.description}>{school.description}</p>
                        </div>
                        <div className={styles.arrow}>{selectedSchool === school.id ? '↑' : '↓'}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
