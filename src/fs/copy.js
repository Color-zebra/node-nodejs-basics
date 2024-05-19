import fs from "fs/promises";

const ERROR_MESSAGE = "FS operation failed";

const copy = async () => {
  try {
    await fs.cp("./src/fs/files/", "./src/fs/files_copy/", {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
  } catch (e) {
    if (e.code === "ENOENT" || e.code === "ERR_FS_CP_EEXIST") {
      console.log(ERROR_MESSAGE);
    } else {
      throw e;
    }
  }
};

await copy();
