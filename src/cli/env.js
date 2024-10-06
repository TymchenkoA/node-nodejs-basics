const parseEnv = () => {
    const filteredKeys = Object.keys(process.env).filter((key) => key.startsWith('RSS_'));

    const filteredVariables = filteredKeys.map((key) => `${key}=${process.env[key]}`);

    console.log(filteredVariables.join("; "));
};

parseEnv();
