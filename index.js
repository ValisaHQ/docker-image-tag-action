const core = require("@actions/core");

try {
  const registryBase = core.getInput("docker-registry-base-name");
  const repoName = process.env["GITHUB_REPOSITORY"].split('/')[1];
  const shortSha = process.env["GITHUB_SHA"].slice(0, 8);
  const sanitizedBranchName = process.env["GITHUB_REF"].split("refs/heads/")[1].replace("/", "-")
  const dockerImageName = `${registryBase}/${repoName}`

  core.setOutput("docker-image-branch", `${dockerImageName}:${sanitizedBranchName}`)
  core.setOutput("docker-image-branch-sha", `${dockerImageName}:${sanitizedBranchName}-${shortSha}`)
} catch (error) {
  core.setFailed(error.message);
}