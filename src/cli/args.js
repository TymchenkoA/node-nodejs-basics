const parseArgs = () => {
    
    const argNames = process.argv.filter((arg) => arg.startsWith('--'));

    const filteredArguments = argNames.map((arg) => {
        const argIndex = process.argv.indexOf(arg);

        if (process.argv[argIndex + 1]) {
            return `${arg.slice(2)} is ${process.argv[argIndex + 1]}`;
        }    
    });

    console.log(filteredArguments .join(", "));
};

parseArgs();
