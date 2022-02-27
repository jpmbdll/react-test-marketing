import styles from "./select.module.css";
import { Form } from "react-bootstrap";

const Select = (props) => {
  return (
    <Form.Group
      className="form-group_select"
      controlId={`${props.className} form-group_controlId`}
    >
      <Form.Label className={`${styles.label} form-group_label`}>
        {props.label}
      </Form.Label>
      <Form.Select 
      className={styles.select}
      onChange={props.onChange}>
        {props.options &&
          props.options.map((opt) => {
            return (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            );
          })}
      </Form.Select>
    </Form.Group>
  );
};

export default Select;
