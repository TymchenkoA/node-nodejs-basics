import { createReadStream } from "fs";
import os from "os";
import { stdout } from "process";
import { getFileDirName } from "../utils/path.js";

const __dirname = getFileDirName(import.meta.url);

const read = async () => {
  let data = "";
  
  const readStream = createReadStream(__dirname + "/files/fileToRead.txt", {
    encoding: "utf8",
  });

  readStream.on("data", (chunk) => {
    data += chunk;
  });

  readStream.on("end", () => {
    stdout.write(`${data}${os.EOL}`);
  });
};

await read();
