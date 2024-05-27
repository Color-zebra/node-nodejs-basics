import os from "os";
import path from "path";
import workerThreads from "worker_threads";

const INITIAL_NUMBER = 10;
const pathToWorkerFile = path.join(import.meta.dirname, "worker.js");

const performCalculations = async () => {
  const totalCPUCores = os.cpus();
  const resultPromises = totalCPUCores.map((_, index) => {
    const promise = new Promise((res) => {
      let data = null;

      const worker = new workerThreads.Worker(pathToWorkerFile, {
        workerData: INITIAL_NUMBER + index,
      });

      worker.on("message", (result) => (data = result));
      worker.on("exit", () =>
        res({
          status: "resolved",
          data,
        })
      );
      worker.on("error", () =>
        res({
          status: "error",
          data: null,
        })
      );
    });
    return promise;
  });

  const res = await Promise.all(resultPromises);

  console.log(res);
};

await performCalculations();
