import { Transform, pipeline } from "stream";
import { stdin, stdout } from "process";
import os from "os";

const transform = async () => {
    
  const reversedInput = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split("").reverse().join("") + os.EOL);
    },
  });

  pipeline(stdin, reversedInput, stdout);

  console.log("Please enter content you want to reverse");
};

await transform();
