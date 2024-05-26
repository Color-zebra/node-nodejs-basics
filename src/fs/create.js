import fs from "fs/promises";
import path from "path";
import { FS_ERROR_MESSAGE } from "../helpers/messages.js";

const TEXT = "I am fresh and young";
const targetPath = path.join(import.meta.dirname, "files", "fresh.txt");

const create = async () => {
  try {
    await fs.writeFile(targetPath, TEXT, { flag: "wx" });
  } catch (e) {
    if (e.code === "EEXIST") throw new Error(FS_ERROR_MESSAGE);
    throw e;
  }
};

await create();
