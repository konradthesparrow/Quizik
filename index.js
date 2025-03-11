/*const fs = require("fs");
fs.writeFile("message.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});*/
var content = "aaa"
async function upload() {
  const message = 'amogus';
  const content = 'aaaaa';
  const owner = 'konradthesparrow';
  const repo = 'Quizik';
  const path = 'amogus.html';
  const auth = '{MY ACCESS TOKEN HERE}';

  const existingFile = await (await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${auth}`
      }
    }
  )).json();

  await (await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
    {
      method: 'PUT',
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${auth}`
      },
      body: JSON.stringify({
        message: message,
        content: btoa(content),
        sha: existingFile.sha,
      }),
    }
  )).json();
}
