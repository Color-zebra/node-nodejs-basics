import stream from "stream";
import { throwFsError } from "../helpers/throwFsError.js";

const transform = async () => {
  const transformStream = new stream.Transform({
    transform(chunk, _, cb) {
      const transformedChunk = chunk
        .toString()
        .trim()
        .split("")
        .reverse()
        .join("");
      cb(null, `${transformedChunk}\r\n`);
    },
  });

  console.log("Wait for user input");

  process.stdin
    .pipe(transformStream)
    .on("error", (e) => throwFsError(e))
    .pipe(process.stdout);
};

await transform();
