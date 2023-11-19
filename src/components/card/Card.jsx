import Link from 'next/link';
import styles from './card.module.css';
import Image from 'next/image';

const Card = ({key, post}) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="main" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 -</span>
          <span className={styles.category}>{post.category}</span>
        </div>
        <Link href="/">
        <h1>{post.title}</h1>
        </Link>
        <p className={styles.desc}>{post.desc}</p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;