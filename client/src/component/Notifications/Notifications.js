import { store } from 'react-notifications-component';

export const added = () => {
    store.addNotification({
        title: "",
        message: "Added Successful",
        type: "default",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 1000,
          onScreen: true
        }
      });
};

export const removed = () => {
    store.addNotification({
        title: "",
        message: "Removed Successful",
        type: "danger",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 1000,
          onScreen: true
        }
      });
};

export const wrongPassword = () => {
  store.addNotification({
      title: "",
      message: "Password Mismatch",
      type: "danger",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: true
      }
    });
};