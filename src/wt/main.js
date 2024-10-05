import { Worker } from "worker_threads";
import os from "os";
import { getFileDirName } from "../utils/path.js";

const __dirname = getFileDirName(import.meta.url);

const performCalculations = async () => {
  const numberOfWorkers = os.cpus().length;

  const runService = (workerData) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(__dirname + "/worker.js", { workerData });

      worker.on("message", resolve);

      worker.on("error", reject);
    });
  };

  const run = async (times) => {
    const tasks = [];

    for (let number = 10; number < times + 10; number++) {
      tasks.push(runService(number));
    }

    const results = await Promise.allSettled(tasks);

    const finalResults = results.map((result) => {
      if (result.status === "fulfilled") {
        return { status: "resolved", data: result.value };
      } else {
        return { status: "error", data: null };
      }
    });

    console.log(finalResults);
  };

  run(numberOfWorkers);
};

await performCalculations();
