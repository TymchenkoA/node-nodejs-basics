import { spawn } from "child_process";
import path from "path";
import { stdin, stdout } from "process";
import { getFileDirName } from "../utils/path.js";

const __dirname = getFileDirName(import.meta.url);

const spawnChildProcess = async (args) => {
  const childProcess = spawn("node", [
    path.join(__dirname, "files", "script.js"),
    ...args,
  ]);

  stdin.pipe(childProcess.stdin);

  childProcess.stdout.pipe(stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["--arg1", "--arg2"]);
