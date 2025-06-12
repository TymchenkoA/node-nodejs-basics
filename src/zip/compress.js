import { createWriteStream, createReadStream } from "fs";
import { createGzip } from "zlib";
import { pipeline } from "stream";
import { getFileDirName } from "../utils/path.js";

const __dirname = getFileDirName(import.meta.url);

const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream(__dirname + "/files/fileToCompress.txt");
  const destination = createWriteStream(__dirname + "/files/archive.gz");

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
  });
};

await compress();
