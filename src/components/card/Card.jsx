import Link from 'next/link';
import styles from './card.module.css';
import Image from 'next/image';

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="main" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 -</span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
        </Link>
        <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt tempora similique distinctio earum ad quo repellendus ratione itaque maiores rerum!</p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;