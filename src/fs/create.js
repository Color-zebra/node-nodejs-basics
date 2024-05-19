import fs from "fs/promises";

const TEXT = "I am fresh and young";
const ERROR_MESSAGE = "FS operation failed";

const create = async () => {
  try {
    await fs.writeFile("./src/fs/files/fresh.txt", TEXT, { flag: "wx" });
  } catch (e) {
    if (e.code === "EEXIST") {
      console.log(ERROR_MESSAGE);
    } else {
      throw e;
    }
  }
};

await create();
