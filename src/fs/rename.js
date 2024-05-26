import fs from "fs";
import path from "path";
import { throwFsError } from "../helpers/throwFsError.js";

const oldPath = path.join(import.meta.dirname, "files", "wrongFilename.txt");
const newPath = path.join(import.meta.dirname, "files", "properFilename.md");

// it's looks better in callback style (IMHO)
const rename = async () => {
  fs.access(newPath, (e) => {
    if (!e) throwFsError(e); // no error means that file already exist
    fs.rename(oldPath, newPath, (e) => {
      throwFsError(e);
    });
  });
};

await rename();
