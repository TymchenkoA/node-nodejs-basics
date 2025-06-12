import { createReadStream } from "fs";
import { createHash } from "crypto";
import { getFileDirName } from "../utils/path.js";

const __dirname = getFileDirName(import.meta.url);

const calculateHash = async () => {
  const hash = createHash("sha256");

  const input = createReadStream(
    __dirname + "/files/fileToCalculateHashFor.txt"
  );

  input.on("readable", () => {
    const data = input.read();

    if (data) {
        hash.update(data);
    }
    else {
      console.log(`${hash.digest("hex")}`);
    }
  });
};

await calculateHash();
