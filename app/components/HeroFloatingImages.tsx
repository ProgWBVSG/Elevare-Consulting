"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./HeroFloatingImages.module.css";

const PAIRS = [
  [
    { src: "/bg-images/floating_mgmt_1_1779913972553.png", top: "10%", left: "4%" },
    { src: "/bg-images/floating_mgmt_2_1779914053555.png", top: "35%", right: "4%" },
  ],
  [
    { src: "/bg-images/floating_mgmt_3_1779914205544.png", top: "15%", left: "7%" },
    { src: "/bg-images/floating_mgmt_1_1779913972553.png", top: "40%", right: "7%" },
  ]
];

export default function HeroFloatingImages() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % PAIRS.length);
    }, 5000); // Change pair every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      {PAIRS.map((pair, idx) => (
        <div key={idx} className={`${styles.pairWrapper} ${idx === activeIndex ? styles.activePair : ""}`}>
          {pair.map((img, imgIdx) => (
            <div
              key={imgIdx}
              className={styles.imageWrapper}
              style={{ top: img.top, left: img.left, right: img.right }}
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
      ))}
    </div>
  );
}
