import childProcess from "child_process";
import path from "path";

const childProcessFilePath = path.join(
  import.meta.dirname,
  "files",
  "script.js"
);

const spawnChildProcess = async (args) => {
  const child = childProcess.spawn(`node`, [childProcessFilePath, ...args]);
  process.stdin.on("data", (data) => child.stdin.write(data));
  child.stdout.on("data", (data) => process.stdout.write(data.toString()));
  child.on("exit", () => process.exit());
};

// Put your arguments in function call to test this functionality

spawnChildProcess(["firstArg", "secondArg", "thirdArg"]);
