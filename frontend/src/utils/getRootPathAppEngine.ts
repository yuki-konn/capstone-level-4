export function getRootPathAppEngine(): string {
  const domain = window.location.hostname;
  let rootpath: string = "http://localhost:9000";
  const deployedDomain =
    domain === "yuki-konn.github.io" ||
    domain === "d1ionyqc0g9xy7.cloudfront.net";
  if (deployedDomain)
    rootpath = "https://capstone-level-4-050825.uc.r.appspot.com";
  return rootpath;
}
