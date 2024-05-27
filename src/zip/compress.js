import fs from "fs";
import stream from "stream";
import path from "path";
import zlib from "zlib";
import { throwFsError } from "../helpers/throwFsError.js";

const inputPath = path.join(import.meta.dirname, "files", "fileToCompress.txt");
const outputPath = path.join(import.meta.dirname, "files", "archive.gz");

const compress = async () => {
  const readStream = fs.createReadStream(inputPath);
  const writeStream = fs.createWriteStream(outputPath);
  const archiveStream = zlib.createGzip();

  stream.pipeline(readStream, archiveStream, writeStream, (e) => {
    if (e) {
      fs.unlink(outputPath, () => throwFsError(e));
    }
  });
};

await compress();
