import styles from "./tab-content.module.css";
import Select from "../../UI/form/select";
const Description = (props) => {
  return (
    <>
      <p className={styles.paragraph}>
        Springing from Audio-Technica's rich heritage in professional audio, the
        ATH-MSR7 Over-Ear High-Resolution Audio Headphones are designed to
        reproduce HiRes Audio, allowing users to hear music the way it was
        intended. The over-ear headphones are outfitted with exclusive 45 mm
        True Motion Drivers, which utilize lightweight voice coils, a
        custom-mounted printed circuit board and specially designed diaphragm to
        improve transient response and minimize sound distortion for rich,
        detailed audio reproduction.
      </p>
      <div className={styles.pricesContainer}>
        <h3 className={`${styles.price} ui-price`}>$59.99</h3>
        <h3 className={`${styles.prevPrice} ui-price`}>$89.99</h3>
      </div>
      <Select
        label="COLORS"
        onChange={props.onChange}
        options={[
          { id: "black", label: "Black" },
          { id: "brown", label: "Brown" },
        ]}
      />
    </>
  );
};

export default Description;
