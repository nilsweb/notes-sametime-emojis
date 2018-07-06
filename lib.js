const fs = require('fs')
const path = require('path')



const deleteDirRecursive = (directory) => {
  if (!fs.existsSync(directory)) return
  fs.readdirSync(directory)
    .map(file => path.join(directory, file))
    .forEach(newPath => {
      if (fs.lstatSync(newPath).isDirectory())
        deleteDirRecursive(newPath)
      else
        fs.unlinkSync(newPath)
    })
  fs.rmdirSync(directory)
}



module.exports = {
  deleteDirRecursive,
}

