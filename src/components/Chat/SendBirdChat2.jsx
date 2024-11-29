import { App as SendBirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";

export default function Chat2() {
  return (
    <div className="App" style={{ height: 600 }}>
      <SendBirdApp
        appId="0F6B0070-9F2D-4B75-A2A1-6E5AF6625473"
        userId="Valier"
      />
    </div>
  );
}
