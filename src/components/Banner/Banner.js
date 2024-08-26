import styles from "./Banner.module.scss";

function Banner({ title, content, image }) {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <h1>{title}</h1>
        <h2>{content}</h2>
      </div>
      <div className={styles.image}>
        <img src={image} />
      </div>
    </div>
  );
}

export default Banner;
