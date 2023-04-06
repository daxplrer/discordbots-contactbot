const fs = require("fs");
function exist(thefile) {
  return new Promise((resolve) => {
    fs.access(thefile, fs.constants.F_OK, (err) => {
      if (err) {
        // File does not exist or is not accessible
        resolve(false);
      } else {
        // File exists and is accessible
        resolve(true);
      }
    });
  });
};
export const datadefind = {
  startpath: "./",
  cachesrc: "/cache/src/",
  userid: this.startpath + this.cachesrc + "/userids/",
  report: this.startpath + this.cachesrc + "/submits/",
};

export const fileMgr = {
  createFile: function(thedata, file) {
    return new Promise((resolve, reject) => {
      exist(file, (result) => {
        if (result) {
          reject(`${file} already exists`);
        } else {
fs.writeFile(file, thedata, (err) => {
  if (err) throw err;
  console.log("File created successfully!");
});
          resolve(`${file} created successfully`);
        }
      });
    });
  },
  readFile: function readFile(filepath) {
  return new Promise((resolve, reject) => {
    exists(filepath, (result) => {
      if (result) {
        fs.readFile(filepath, "utf8", (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      } else {
        reject("File cannot be read.");
      }
    });
  });
},
  itemExist: function
}