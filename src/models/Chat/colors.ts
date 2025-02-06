export enum ChatItemTypeColorEnum {
  FONT_COLOR = "fontColor",
  MESSAGE_BACKGROUND_COLOR = "messageBackgroundColor",
  CHAT_BACKGROUND_COLOR = "chatBackgroundColor",
}

export interface IChatColors {
  fontColor: string;
  messageBackgroundColor: string;
}
