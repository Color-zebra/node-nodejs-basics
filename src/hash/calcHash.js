import crypto from "crypto";
import { createReadStream } from "fs";
import path from "path";
import { throwFsError } from "../helpers/throwFsError.js";

const filePath = path.join(
  import.meta.dirname,
  "files",
  "fileToCalculateHashFor.txt"
);

const calculateHash = async () => {
  const hash = crypto.createHash("sha256");
  hash.setEncoding("hex");

  const readStream = createReadStream(filePath);

  readStream.on("end", () => {
    hash.end();
    console.log(hash.read());
  });
  readStream.on("error", (e) => throwFsError(e));

  readStream.pipe(hash);
};

await calculateHash();
