import styles from "./button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${styles.button} ${props.className} ui-button`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
};

export default Button;
