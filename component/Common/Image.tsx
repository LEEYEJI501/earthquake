import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Image.module.css";

type props = {
    src: string;
    alt: string;
    fallbackSrc: string;
    width: any;
    height: any;
}

export default function Img(props: props) {
    const [src, setSrc] = useState(props.src);
    const onError = () => setSrc("/images/cutePotato.jpg");

    return (
        <>
            <Image
                className={styles.image}
                src={src} alt={props.alt}
                onError={onError}
                width={props.width}
                height={props.height}
            />
            <div>{props.src}</div>
        </>
    );
}