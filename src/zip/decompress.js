import fs from "fs";
import stream from "stream";
import path from "path";
import zlib from "zlib";
import { throwFsError } from "../helpers/throwFsError.js";

const inputPath = path.join(import.meta.dirname, "files", "archive.gz");
const outputPath = path.join(
  import.meta.dirname,
  "files",
  "fileToCompressTest.txt"
);
const decompress = async () => {
  const readStream = fs.createReadStream(inputPath);
  const writeStream = fs.createWriteStream(outputPath);
  const decompressStream = zlib.createUnzip();

  stream.pipeline(readStream, decompressStream, writeStream, async (e) => {
    if (e) {
      fs.unlink(outputPath, () => throwFsError(e));
    }
  });
};

await decompress();
