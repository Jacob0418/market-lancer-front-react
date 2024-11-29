import { App as SendBirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";
import Draggable from "react-draggable";

export default function SendBirdChat() {
  return (
    <div className="App" style={{ height: 600 }}>
      <SendBirdApp
        appId="0F6B0070-9F2D-4B75-A2A1-6E5AF6625473"
        userId="Valier" //Aqui metemos el alias del usuario
      />
    </div>
  );
}
