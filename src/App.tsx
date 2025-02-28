import { ToastContainer } from "react-toastify";
import { Router } from "./navigation/routes";

function App() {
  return (
    <>
      <Router />
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        theme="colored"
      />
    </>
  );
}

export default App;
