import fs from "fs/promises";
import path from "path";
import { FS_ERROR_MESSAGE } from "../helpers/messages.js";

const pathFrom = path.join(import.meta.dirname, "files");
const pathTo = path.join(import.meta.dirname, "files_copy");

const copy = async () => {
  try {
    await fs.cp(pathFrom, pathTo, {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
  } catch (e) {
    if (e.code === "ENOENT" || e.code === "ERR_FS_CP_EEXIST") {
      throw new Error(FS_ERROR_MESSAGE);
    }
    throw e;
  }
};

await copy();
