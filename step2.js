"use strict";

const fsP = require("fs/promises");

/*
  Takes a filepath and prints file contents.
*/
async function cat(path) {
  let contents;

  try {
    contents = await fsP.readFile(path, "utf8");

  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log("file contents: ", contents);
}

/*
  Takes a url and prints response.
*/
async function webCat(url) {
  try {
    const response = await fetch(url);
    console.log(await response.text());

  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

// cat(process.argv[2]);
// webCat(process.argv[2]);

try {
  new URL(process.argv[2]);
  webCat(process.argv[2]);

} catch (err) {
  cat(process.argv[2]);
}
