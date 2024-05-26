import fs from "fs/promises";
import path from "path";
import { throwFsError } from "../helpers/throwFsError.js";

const targetFilePath = path.join(
  import.meta.dirname,
  "files",
  "fileToRead.txt"
);

const read = async () => {
  try {
    const res = await fs.readFile(targetFilePath, "utf-8");
    console.log(res);
  } catch (e) {
    throwFsError(e);
  }
};

await read();
