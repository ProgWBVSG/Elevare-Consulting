"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./HeroFloatingImages.module.css";

const IMAGES = [
  { src: "/bg-images/floating_mgmt_1_1779913972553.png", top: "15%", left: "10%" },
  { src: "/bg-images/floating_mgmt_2_1779914053555.png", top: "50%", left: "80%" },
  { src: "/bg-images/floating_mgmt_3_1779914205544.png", top: "70%", left: "15%" },
];

export default function HeroFloatingImages() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % IMAGES.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      {IMAGES.map((img, idx) => (
        <div
          key={idx}
          className={`${styles.imageWrapper} ${idx === activeIndex ? styles.active : ""}`}
          style={{ top: img.top, left: img.left }}
        >
          <Image
            src={img.src}
            alt="Consulting Background"
            fill
            className={styles.image}
            priority={true}
          />
        </div>
      ))}
    </div>
  );
}
