import { mkdir, readdir, copyFile } from "fs/promises";
import path from "path";
import { getFileDirName } from "../utils/path.js";

const __dirname = getFileDirName(import.meta.url);
const errorMessage = "FS operation failed";

const copy = async () => {
  const sourceDir = path.join(__dirname, "files");
  const distDir = path.join(__dirname, "files_copy");

  try {
    await mkdir(distDir);

    const filesToCopy = await readdir(sourceDir);

    filesToCopy.map((file) => {
      copyFile(path.join(sourceDir, file), path.join(distDir, file));
    });
    
  } catch (err) {
    throw new Error(errorMessage);
  }
};

await copy();
