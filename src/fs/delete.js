import { unlink } from "fs/promises";
import path from "path";
import { getFileDirName } from "../utils/path.js";

const __dirname = getFileDirName(import.meta.url);
const errorMessage = "FS operation failed";

const remove = async () => {
  try {
    await unlink(path.join(__dirname, "files", "fileToRemove.txt"));
    
  } catch (err) {
    throw new Error(errorMessage);
  }
};

await remove();
