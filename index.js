const fs = require("fs");

const srcFolder = "./bear-notes/";
const outputFolder = "./boost-notes/";

const createBoostedFile = (fileNameWithExt, fileName, timeNow) => {
  const contents = fs.readFileSync(`${srcFolder}/${fileNameWithExt}`, "utf-8");
  return `createdAt: "${timeNow}"
updatedAt: "${timeNow}"
type: "MARKDOWN_NOTE"
folder: "Bear Exports"
title: "${fileName}"
tags: []
content: '''
${contents}
'''
linesHighlighted: []
isStarred: false
isTrashed: false`;
};

fs.readdir(srcFolder, (error, files) => {
  if ( error ) {
      throw new Error('Error finding bear-notes directory');
  }
  const timeNow = new Date().toISOString();
  
  files.forEach(fileNameWithExt => {
    const fileName = fileNameWithExt.slice(0, fileNameWithExt.lastIndexOf('.'));
    const outputContents = createBoostedFile(fileNameWithExt, fileName, timeNow);
    fs.writeFileSync(`${outputFolder}/${fileName}.cson`, outputContents);
  });
});
