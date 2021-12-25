import React from "react"
import { App as SendbirdApp } from "sendbird-uikit"
import "sendbird-uikit/dist/index.css"

export default function App() {
  const { APP_ID, USER_ID, NICKNAME, THEME, PROFILE_URL } = {
    APP_ID: "3EC3F745-4ACC-4DBD-99A9-702645ABB82C",
    USER_ID: "untangled-459575",
    NICKNAME: "George",
    THEME: "light",
    PROFILE_URL:
      "https://file-eu-1.sendbird.com/profile_images/12b6008784f04bc8bd57d4d71045e379.png",
  }

  return (
    <div className="customized-app">
      <SendbirdApp
        appId={APP_ID}
        userId={USER_ID}
        profileUrl={PROFILE_URL}
        nickname={NICKNAME}
        theme={THEME}
        useReaction={true}
        useMessageGrouping={true}
      />
    </div>
  )
}
