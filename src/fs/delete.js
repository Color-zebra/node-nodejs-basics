import fs from "fs/promises";
import path from "path";
import { throwFsError } from "../helpers/throwFsError.js";

const filePath = path.join(import.meta.dirname, "files", "fileToRemove.txt");

const remove = async () => {
  try {
    await fs.unlink(filePath);
  } catch (e) {
    throwFsError(e);
  }
};

await remove();
