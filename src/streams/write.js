import { createWriteStream } from "fs";
import { stdin } from "process";
import { getFileDirName } from "../utils/path.js";

const __dirname = getFileDirName(import.meta.url);

const write = async () => {
  const writeStream = createWriteStream(__dirname + "/files/fileToWrite.txt");
  
  stdin.pipe(writeStream);

  console.log(`Please enter content you want to write in 'fileToWrite.txt' file`);
};

await write();
