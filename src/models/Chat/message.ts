export enum MessageFromTypeEnum {
  USER = "user",
  BOT = "bot",
}

export interface IMessage {
  from: MessageFromTypeEnum;
  message: string;
  date: string;
}
