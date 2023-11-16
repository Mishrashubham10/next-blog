import Menu from '@/components/menu/Menu';
import styles from './singlePage.module.css';
import Image from 'next/image';
import Comments from '@/components/comments/Comments';

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Iam a full-stack developer with the knowledge of backend and
            frontend.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Shubham Mishra</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
              adipisci, esse, sint sed tempora doloribus, laudantium maxime a
              excepturi sapiente id maiores eos quia voluptatibus unde quod
              officiis quae ab.
            </p>
            <h2>Lorem ipsum dolor sit.</h2>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
              adipisci, esse, sint sed tempora doloribus, laudantium maxime a
              excepturi sapiente id maiores eos quia voluptatibus unde quod
              officiis quae ab.
            </p>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
              adipisci, esse, sint sed tempora doloribus, laudantium maxime a
              excepturi sapiente id maiores eos quia voluptatibus unde quod
              officiis quae ab.
            </p>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
              adipisci, esse, sint sed tempora doloribus, laudantium maxime a
              excepturi sapiente id maiores eos quia voluptatibus unde quod
              officiis quae ab.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;