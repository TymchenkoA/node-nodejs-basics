import { rename } from "fs/promises";
import path from "path";
import { getFileDirName } from "../utils/path.js";

const __dirname = getFileDirName(import.meta.url);
const errorMessage = "FS operation failed";

const renameFile = async () => {
  try {
    await rename(
      path.join(__dirname, "files", "wrongFilename.txt"),
      path.join(__dirname, "files", "properFilename.md")
    );
    
  } catch (err) {
    throw new Error(errorMessage);
  }
};

await renameFile();
