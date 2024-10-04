import { createWriteStream, createReadStream } from "fs";
import { createUnzip } from "zlib";
import { pipeline } from "stream";
import { getFileDirName } from "../utils/path.js";

const __dirname = getFileDirName(import.meta.url);

const decompress = async () => {
  const unzip = createUnzip();
  const source = createReadStream(__dirname + "/files/archive.gz");
  const destination = createWriteStream(__dirname + "/files/fileToCompress.txt");

  pipeline(source, unzip, destination, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
  });
};

await decompress();
