const parseArgs = () => {
  const cmdArgs = process.argv.slice(2);
  const argPairs = [];
  for (let i = 0; i < cmdArgs.length; i++) {
    let key = cmdArgs[i++].slice(2);
    let value = cmdArgs[i];
    argPairs.push(`${key} is ${value}`);
  }
  const resString = argPairs.join(", ");
  console.log(resString);
};

parseArgs();
