'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Gallery.module.css';

const images = [
    '/gallery/photo-1.jpg',
    '/gallery/photo-2.jpg',
    '/gallery/photo-3.jpg',
    '/gallery/photo-4.jpg',
    '/gallery/photo-5.jpg',
    '/gallery/photo-6.jpg',
    '/gallery/photo-7.jpg',
    '/gallery/photo-8.jpg',
    '/gallery/photo-9.jpg',
    '/gallery/photo-10.jpg',
    '/gallery/photo-11.jpg',
    '/gallery/photo-12.jpg',
    '/gallery/photo-13.jpg',
    '/gallery/photo-14.jpg',
    '/gallery/photo-15.jpg',
    '/gallery/photo-16.jpg',
    '/gallery/photo-17.jpg',
    '/gallery/photo-18.jpg',
    '/gallery/photo-19.jpg',
    '/gallery/photo-20.jpg',
    '/gallery/photo-21.jpg',
    '/gallery/photo-22.jpg',
    '/gallery/photo-23.jpg',
    '/gallery/photo-24.jpg',
    '/gallery/photo-25.jpg',
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    const openImage = (src) => {
        setSelectedImage(src);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    const closeImage = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    return (
        <section className={styles.gallerySection}>
            <div className="container">
                <h2 className={styles.title}>Fotoğraflar</h2>
                <div className={styles.galleryGrid}>
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className={styles.imageContainer}
                            onClick={() => openImage(src)}
                        >
                            <Image
                                src={src}
                                alt={`Atatürk Fotoğrafı ${index + 1}`}
                                width={400} // Base width for optimization, styles will handle responsive sizing
                                height={500} // Aspect ratio approximation
                                className={styles.image}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div className={styles.overlay} onClick={closeImage}>
                    <button className={styles.closeButton} onClick={closeImage}>&times;</button>
                    <div className={styles.fullImageContainer} onClick={(e) => e.stopPropagation()}>
                        {/* stopPropagation so clicking the image itself doesn't close it immediately, 
                though usually clicking outside (overlay) closes it. 
                User asked "click on photo -> full screen". 
                Usually clicking again closes or clicking X closes.
                I will make the overlay click close it.
             */}
                        <img
                            src={selectedImage}
                            alt="Tam Ekran Görünüm"
                            className={styles.fullImage}
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
