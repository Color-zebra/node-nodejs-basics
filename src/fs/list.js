import fs from "fs/promises";
import path from "path";
import { throwFsError } from "../helpers/throwFsError.js";

const dirPath = path.join(import.meta.dirname, "files");

const list = async () => {
  try {
    const res = await fs.readdir(dirPath);
    console.log(res);
  } catch (e) {
    throwFsError(e);
  }
};

await list();
