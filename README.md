# Sacred FS

All of the methods of the Node package `fs` exposed as Promises.

## Writing a File to the File System

```javascript
import {
  writeFile
} from 'sacred-fs'

const filePath = '/path/to/file.txt'
const fileData = 'Hello, World!'

writeFile(filePath, fileData)
  .then(() => console.log('Written!'))
  .catch((e) => console.error(e))
```

## Reading a File from the File System

```javascript
import {
  readFile
} from 'sacred-fs'

const filePath = '/path/to/file.txt'

readFile(filePath)
  .then((fileData) => console.log('Read!', fileData))
  .catch((e) => console.error(e))
```

## All of the methods of the Node package FS

Methods which do not generate an error are wrapped with `Promise.resolve()`. Otherwise, they are wrapped with `new Promise((resolve, reject) => {})` and invoke `resolve` with the return value, if there is one, or `reject` with any error.

* `access`
* `accessSync`
* `appendFile`
* `appendFileSync`
* `chmod`
* `chmodSync`
* `chown`
* `chownSync`
* `close`
* `closeSync`
* `createReadStream`
* `createWriteStream`
* `exists`
* `existsSync`
* `fchmod`
* `fchmodSync`
* `fchown`
* `fchownSync`
* `fdatasync`
* `fdatasyncSync`
* `fstat`
* `fstatSync`
* `fsync`
* `fsyncSync`
* `ftruncate`
* `ftruncateSync`
* `futimes`
* `futimesSync`
* `lchmod`
* `lchmodSync`
* `lchown`
* `lchownSync`
* `link`
* `linkSync`
* `lstat`
* `lstatSync`
* `mkdir`
* `mkdirSync`
* `mkdtemp`
* `mkdtempSync`
* `open`
* `openSync`
* `read`
* `readSync`
* `readdir`
* `readdirSync`
* `readFile`
* `readFileSync`
* `readlink`
* `readlinkSync`
* `realpath`
* `realpathSync`
* `rename`
* `renameSync`
* `rmdir`
* `rmdirSync`
* `stat`
* `statSync`
* `symlink`
* `symlinkSync`
* `truncate`
* `truncateSync`
* `unlink`
* `unlinkSync`
* `unwatchFile`
* `utimes`
* `utimesSync`
* `watch`
* `watchFile`
* `write`
* `writeFile`
* `writeFileSync`
* `writeSync`
