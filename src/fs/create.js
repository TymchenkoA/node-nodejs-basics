import { writeFile } from "fs/promises";
import path from "path";
import { getFileDirName } from "../utils/path.js";

const __dirname = getFileDirName(import.meta.url);
const content = "I am fresh and young";
const errorMessage = "FS operation failed";

const create = async () => {
  try {
    await writeFile(path.join(__dirname, "files", "fresh.txt"), content, {
      flag: "wx",
    });
    
  } catch (err) {
    throw new Error(errorMessage);
  }
};

await create();
