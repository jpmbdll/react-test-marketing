import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Toast = () => {
  return (
    <ToastContainer
      position={'top-center'}
      autoClose={3000}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      hideProgressBar={true}
    />
  );
};

export default Toast;
