// fetchVersions.mjs

/* !IMPORTANT: VERSION-FETCHING WONT WORK WITH EXTERNAL REPO, BECAUSE OF DATENSCHUTZ */


import { exec } from 'child_process';
import { writeFile } from 'fs/promises';
import semver from 'semver';

const packages = [
  // '@shield/base-components',
  '@shield/hukde-components',
  '@shield/huk24-components',
  '@shield/vrk-components',
  '@shield/themes',
  '@shield/css-framework',
  '@shield/angular'
];

async function fetchPackageVersions(packageName) {
  return new Promise((resolve, reject) => {
    exec(`npm view ${packageName} versions --json`, (error, stdout, stderr) => {
      if (error) {
        reject(`Error fetching versions for ${packageName}: ${error.message}`);
        return;
      }
      if (stderr) {
        reject(`Error: ${stderr}`);
        return;
      }
      const versions = JSON.parse(stdout);
      const stableVersions = versions.filter(version => semver.prerelease(version) === null).reverse();
      resolve({ packageName, versions: stableVersions });
    });
  });
}

async function fetchAllVersions() {
  const results = await Promise.all(packages.map(fetchPackageVersions));
  const versionData = Object.fromEntries(results.map(result => [result.packageName, result.versions]));
  try {
    await writeFile('package-versions.json', JSON.stringify(versionData, null, 2));
    console.log('Stable versions written to package-versions.json');
    console.log(Object.fromEntries(
      Object.entries(versionData).map(([key, value]) => [key, value[0]])
    ))
  } catch (writeError) {
    console.error(`Error writing file: ${writeError.message}`);
  }
}

fetchAllVersions().catch(console.error);
