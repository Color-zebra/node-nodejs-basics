import { FS_ERROR_MESSAGE } from "./messages.js";

export const throwFsError = (e) => {
  if (e.code === "ENOENT") throw new Error(FS_ERROR_MESSAGE);
  throw e;
};
