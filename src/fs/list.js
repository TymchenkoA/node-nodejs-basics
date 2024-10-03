import { readdir } from "fs/promises";
import path from "path";
import { getFileDirName } from "../utils/path.js";

const __dirname = getFileDirName(import.meta.url);
const errorMessage = "FS operation failed";

const list = async () => {
  try {
    const filesList = await readdir(path.join(__dirname, "files"));
    console.log(filesList);
    
  } catch (err) {
    throw new Error(errorMessage);
  }
};

await list();
