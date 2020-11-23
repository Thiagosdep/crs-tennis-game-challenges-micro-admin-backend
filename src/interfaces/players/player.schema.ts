import * as mongoose from "mongoose";

export const PlayerSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
    },
    phoneNumber: {
      type: String,
    },
    ranking: String,
    rankingPosition: Number,
    urlPlayerPhoto: String,
  },
  { timestamps: true, collection: "players" },
);
