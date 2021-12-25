import React from "react"
import { App as SendbirdApp } from "sendbird-uikit"
import "sendbird-uikit/dist/index.css"

export default function App() {
  const { APP_ID, USER_ID, NICKNAME, THEME } = {
    APP_ID: "2D7B4CDB-932F-4082-9B09-A1153792DC8D",
    USER_ID: "sendbirdian-200720",
    NICKNAME: "Sendbirdian84",
    THEME: "light",
  }

  return (
    <div className="customized-app">
      <SendbirdApp
        appId={APP_ID}
        userId={USER_ID}
        nickname={NICKNAME}
        theme={THEME}
        useReaction={true}
        useMessageGrouping={true}
      />
    </div>
  )
}
