import { useContext } from "react";

import { Context } from "./functions/context";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

import "./app.css";
import { initializeApp } from "firebase/app";
import { config } from "./Config/config";

initializeApp(config.firebaseConfig);

function App() {
  const { user } = useContext(Context);

  if (user) {
    return <ChatsPage />;
  } else {
    return <AuthPage />;
  }
}

export default App;
