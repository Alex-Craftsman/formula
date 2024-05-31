import packageInfo from './package.json' assert { type: 'json' };

console.log('');
console.log('');
console.log('| Package | Version |');
console.log('| ------ | ------ |');
console.log('| ***Production dependencies*** |');

for (const dependency in packageInfo.dependencies) {
  if (dependency === 'api.feathers') {
    console.log(
      `| [${dependency}](${packageInfo.dependencies[dependency]
      }) | ${packageInfo.dependencies[dependency]
        .split('-')
        .slice(-1)[0]
        .replace('.tgz', '')} |`,
    );
  } else {
    console.log(
      `| [${dependency}](https://npmjs.com/package/${dependency}) | ${packageInfo.dependencies[dependency]} |`,
    );
  }
}

console.log('| ***Development dependencies*** |');

for (const dependency in packageInfo.devDependencies) {
  console.log(
    `| [${dependency}](https://npmjs.com/package/${dependency}) | ${packageInfo.devDependencies[dependency]} |`,
  );
}
