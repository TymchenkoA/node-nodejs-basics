import { readFile } from "fs/promises";
import path from "path";
import { getFileDirName } from "../utils/path.js";

const __dirname = getFileDirName(import.meta.url);
const errorMessage = "FS operation failed";

const read = async () => {
  try {
    const content = await readFile(
      path.join(__dirname, "files", "fileToRead.txt"),
      { encoding: "utf8" }
    );
    
    console.log(content);

  } catch (err) {
    throw new Error(errorMessage);
  }
};

await read();
