import styles from "./Main.module.scss";
import ContentSlider from "./component/contentSlider/ContentSlider";
import HeaderSlider from "./component/headerSlider/HeaderSlider";

const Main = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.headerSection}>
          <HeaderSlider />
        </div>
        <div className={styles.content}>
          <div className={styles.divider}></div>
          <div className={styles.bodySection}>
            <ContentSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
