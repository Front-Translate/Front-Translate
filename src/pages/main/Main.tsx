import styles from "./Main.module.scss";
import ContentSlider from "./component/slider/Slider";

const Main = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.headerSection}>
            <ContentSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
