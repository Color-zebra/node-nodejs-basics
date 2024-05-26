import fs from "fs";
import path from "path";

const filePath = path.join(import.meta.dirname, "files", "fileToRead.txt");

const read = async () => {
  const readStream = fs.createReadStream(filePath, "utf-8");
  readStream.on("data", (chunk) => process.stdout.write(chunk));
  readStream.on("end", () => process.stdout.write("\n"));
};

await read();
