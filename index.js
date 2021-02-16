const core = require("@actions/core");

try {
  const shortSha = process.env["GITHUB_SHA"].slice(0, 8);
  const sanitizedBranchName = process.env["GITHUB_REF"].split("refs/heads/")[1].replace("/", "-");

  core.setOutput("docker-sanitized-branch-name", sanitizedBranchName);
  core.setOutput("docker-sanitized-branch-name-sha", `${sanitizedBranchName}-${shortSha}`);

} catch (error) {
  core.setFailed(error.message);
}
