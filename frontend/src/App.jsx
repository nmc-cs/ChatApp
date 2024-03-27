// imports auth page and chats page
import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = useState(undefined);
  // if no user render authpage
  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    // create chatspage
    return <ChatsPage user={user} />;
  }
}

export default App;
