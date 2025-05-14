export function getRootPathAws(): string {
  const domain = window.location.hostname;
  let rootpath: string = "http://localhost:8000";
  const deployedDomain =
    domain === "yuki-konn.github.io" ||
    domain === "d1ionyqc0g9xy7.cloudfront.net";
  if (deployedDomain)
    rootpath =
      "https://qyxgfxhby4ejikmfmdtzmkjnrq0yazfh.lambda-url.us-east-2.on.aws";

  return rootpath;
}
