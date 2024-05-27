import workerThreads from "worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  const input = workerThreads.workerData;
  const res = nthFibonacci(input);
  workerThreads.parentPort.postMessage(res);
};

sendResult();
