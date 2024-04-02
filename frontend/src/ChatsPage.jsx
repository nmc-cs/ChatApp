import React from "react";

import {
  PrettyChatWindow,
  // these 3 imports are for react-chat-engne-advanced
  //   MultiChatSocket,
  //   MultiChatWindow,
  //   useMultiChatLogic,
} from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  // code for react-chat-engine-advanced
  //   const chatProps = useMultiChatLogic(
  //     "30e87589-14c5-4ade-b38d-29cd1dda5458",
  //     props.user.username,
  //     props.user.secret
  //   );
  return (
    <div style={{ height: "100vh" }}>
      {/* code for react-chat-engine-advanced */}
      {/* <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} /> */}
      <PrettyChatWindow
        projectId="30e87589-14c5-4ade-b38d-29cd1dda5458"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
