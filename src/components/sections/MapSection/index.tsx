import styles from "./styles/styles.module.css";
const MapSection = () => {
  return (
    <section className={styles.sectionWraperContainer}>
      <div className={styles.sectionWraper}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121254.05158216297!2d-76.03189100273434!3d8.7652487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5a2f11829afa79%3A0x17f01e3391e9fc3c!2sAlmac%C3%A9n%20Surtillantas!5e1!3m2!1ses-419!2sco!4v1743298058866!5m2!1ses-419!2sco"
          width="800"
          height="600"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
