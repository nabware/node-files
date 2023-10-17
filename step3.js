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

// if proces.argv.includes('--out')
// get index of out, next index should be path

try {
  new URL(process.argv[3]);
  webCat(process.argv[3]);

} catch (err) {
  const outIndex = process.argv.indexOf('--out');

  if (outIndex !== -1) {
    catWrite(process.argv[3], process.argv[4]);
  }
  else {
    cat(process.argv[2]);
  }
}


/**
 * Takes in a filename and
 *
 */

async function catWrite(path, filename) {
  let contents;

  try {
    contents = await fsP.readFile(filename, "utf8");

  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  try {
    await fsP.writeFile(path, contents, "utf8");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

}

