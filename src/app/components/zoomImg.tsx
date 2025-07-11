'use client';
import '../globals.css';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Picture1 from '../../../public/img1.jpg';
import Picture2 from '../../../public/img3.jpg';
import Picture3 from '../../../public/img2.jpg';
import Picture4 from '../../../public/img6.jpg';
import Picture5 from '../../../public/img7.jpg';
import Picture6 from '../../../public/img5.jpg';
import Picture7 from '../../../public/img4.jpg';

export default function Index() {

    const imgContainer = useRef(null);

    const { scrollYProgress } = useScroll({
        target: imgContainer,
        offset: ['start start', 'end end']
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        { src: Picture1, scale: scale4 },
        { src: Picture2, scale: scale5 },
        { src: Picture3, scale: scale6 },
        { src: Picture4, scale: scale5 },
        { src: Picture5, scale: scale6 },
        { src: Picture6, scale: scale8 },
        { src: Picture7, scale: scale9 }
    ];

    return (
        <div ref={imgContainer} className="imgContainer">
            <div className="sticky">
                {pictures.map(({ src, scale }, index) => (
                    <motion.div key={index} style={{ scale }} className="el">
                        <div className="imageContainer">
                            <Image
                                src={src}
                                fill
                                alt="image"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
