// index.js
const { exec } = require('child_process');

module.exports = {
  onPostBuild: () => {
    console.log("About to run exec")
    exec('npm run test-unit', (error, stdout, stderr) => {
      console.log("Inside exec callback")
      if (error) {
        console.error(`error: ${error.message}`);
        return;
      }

      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }

      console.log(`stdout:\n${stdout}`);
    });
    console.log("After run exec")
  },
}
