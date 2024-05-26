const PREFIX = "RSS_";

const parseEnv = () => {
  const properEnvVars = Object.entries(process.env).filter(([key]) =>
    key.startsWith(PREFIX)
  );
  const resString = properEnvVars.map((pair) => pair.join("=")).join("; ");
  console.log(resString);
};

parseEnv();
