import fs from "fs";
import path from "path";
import { throwFsError } from "../helpers/throwFsError.js";

const targetFilePath = path.join(
  import.meta.dirname,
  "files",
  "fileToWrite.txt"
);

const write = async () => {
  const writeStream = fs.createWriteStream(targetFilePath);
  writeStream.on("error", (e) => throwFsError(e));
  process.stdin.on("data", (data) => {
    writeStream.write(data);
    fs.appendFile(targetFilePath, "", "utf-8", () => {});
  });
  console.log("waiting for user input");
};

await write();
