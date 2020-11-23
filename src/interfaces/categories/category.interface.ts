import { Document } from "mongoose";

export interface ICategory extends Document {
  readonly category: string;
  description: string;
  events: IEvent[];
  players: IPlayer[];
}

export interface IEvent {
  name: string;
  operation: string;
  value: number;
}

export interface IPlayer extends Document {
  readonly phoneNumber: string;
  readonly email: string;
  name: string;
  ranking: string;
  rankingPosition: number;
  urlPlayerPhoto: string;
}
