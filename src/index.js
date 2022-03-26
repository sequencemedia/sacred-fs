import fs from 'fs'

// fs.access(path[, mode], callback)

export const access = (path, mode) => (
  new Promise((resolve, reject) => {
    fs.access(path, mode, (e) => (!e) ? resolve() : reject(e))
  })
)

// fs.accessSync(path[, mode])

export const accessSync = (path, mode) => (
  new Promise((resolve, reject) => {
    try {
      resolve(
        fs.accessSync(path, mode))
    } catch (e) {
      reject(e)
    }
  })
)

// fs.appendFile(file, data[, options], callback)

export const appendFile = (file, data, options) => (
  new Promise((resolve, reject) => {
    fs.appendFile(file, data, options, (e) => (!e) ? resolve() : reject(e))
  })
)

// fs.appendFileSync(file, data[, options])

export const appendFileSync = (file, data, options) => (
  new Promise((resolve, reject) => {
    try {
      resolve(
        fs.appendFileSync(file, data, options))
    } catch (e) {
      reject(e)
    }
  })
)

// fs.chmod(path, mode, callback)

export const chmod = (path, mode) => (
  new Promise((resolve, reject) => {
    fs.chmod(path, mode, (e) => (!e) ? resolve() : reject(e))
  })
)

// fs.chmodSync(path, mode)

export const chmodSync = (path, mode) => (
  new Promise((resolve, reject) => {
    try {
      resolve(
        fs.chmodSync(path, mode))
    } catch (e) {
      reject(e)
    }
  })
)

// fs.chown(path, uid, gid, callback)

export const chown = (path, uid, gid) => (
  new Promise((resolve, reject) => {
    fs.chown(path, uid, gid, (e) => (!e) ? resolve() : reject(e))
  })
)

// fs.chownSync(path, uid, gid)

export const chownSync = (path, uid, gid) => (
  new Promise((resolve, reject) => {
    try {
      resolve(
        fs.chownSync(path, uid, gid))
    } catch (e) {
      reject(e)
    }
  })
)

// fs.close(path, uid, gid, callback)

export const close = (fd) => (
  new Promise((resolve, reject) => {
    fs.close(fd, (e) => (!e) ? resolve() : reject(e))
  })
)

// fs.closeSync(path, uid, gid)

export const closeSync = (fd) => (
  new Promise((resolve, reject) => {
    try {
      resolve(
        fs.closeSync(fd))
    } catch (e) {
      reject(e)
    }
  })
)

// fs.copyFile(path, mode, callback)

export const copyFile = (src, dest, flags) => (
  new Promise((resolve, reject) => {
    fs.copyFile(src, dest, flags, (e) => (!e) ? resolve() : reject(e))
  })
)

// fs.copyFileSync(path, mode)

export const copyFileSync = (src, dest, flags) => (
  new Promise((resolve, reject) => {
    try {
      resolve(
        fs.copyFileSync(src, dest, flags))
    } catch (e) {
      reject(e)
    }
  })
)

// fs.createReadStream(path[, options])

export const createReadStream = (path, options) => (
  Promise.resolve(fs.createReadStream(path, options))
)

// fs.createWriteStream(path[, options])

export const createWriteStream = (path, options) => (
  Promise.resolve(fs.createWriteStream(path, options))
)

/*
fs.constants
*/

// fs.exists(path, callback)

/*
 *  Deprecated
 */ /*
export const exists = (path) => (
  new Promise((resolve) => {
    fs.exists(path, resolve)
  })
) */

// fs.existsSync(path)

/*
 *  Deprecated
 */ /*
export const existsSync = (path) => (
  Promise.resolve(fs.existsSync(path))
) */

// fs.fchmod(fd, mode, callback)

export const fchmod = (fd, mode) => (
  new Promise((resolve, reject) => {
    fs.fchmod(fd, mode, (e) => (!e) ? resolve() : reject(e))
  })
)

// fs.fchmodSync(fd, mode)

export const fchmodSync = (fd, mode) => (
  new Promise((resolve, reject) => {
    try {
      resolve(
        fs.fchmodSync(fd, mode))
    } catch (e) {
      reject(e)
    }
  })
)

// fs.fchown(fd, uid, gid, callback)

export const fchown = (fd, uid, gid) => (
  new Promise((resolve, reject) => {
    fs.fchown(fd, uid, gid, (e) => (!e) ? resolve() : reject(e))
  })
)

// fs.fchownSync(fd, uid, gid)

export const fchownSync = (fd, uid, gid) => (
  new Promise((resolve, reject) => {
    try {
      resolve(
        fs.fchownSync(fd, uid, gid))
    } catch (e) {
      reject(e)
    }
  })
)

// fs.fdatasync(fd, callback)

export const fdatasync = (fd) => (
  new Promise((resolve, reject) => {
    fs.fdatasync(fd, (e) => (!e) ? resolve() : reject(e))
  })
)

// fs.fdatasyncSync(fd)

export const fdatasyncSync = (fd) => (
  new Promise((resolve, reject) => {
    try {
      resolve(
        fs.fdatasyncSync(fd))
    } catch (e) {
      reject(e)
    }
  })
)

// fs.fstat(fd, callback)

export const fstat = (fd) => (
  new Promise((resolve, reject) => {
    fs.fstat(fd, (e, stats) => (!e) ? resolve(stats) : reject(e))
  })
)

// fs.fstatSync(fd)

export const fstatSync = (fd) => (
  new Promise((resolve, reject) => {
    try {
      resolve(
        fs.fstatSync(fd))
    } catch (e) {
      reject(e)
    }
  })
)

// fs.fsync(fd, callback)

export const fsync = (fd) => (
  new Promise((resolve, reject) => {
    fs.fsync(fd, (e) => (!e) ? resolve() : reject(e))
  })
)

// fs.fsyncSync(fd)

export const fsyncSync = (fd) => (
  new Promise((resolve, reject) => {
    try {
      resolve(
        fs.fsyncSync(fd))
    } catch (e) {
      reject(e)
    }
  })
)

// fs.ftruncate(fd, len, callback)

export const ftruncate = (fd, len) => (
  new Promise((resolve, reject) => {
    fs.ftruncate(fd, len, (e) => (!e) ? resolve() : reject(e))
  })
)

// fs.ftruncateSync(fd, len)

export const ftruncateSync = (fd, len) => (
  new Promise((resolve, reject) => {
    try {
      resolve(
        fs.ftruncateSync(fd, len))
    } catch (e) {
      reject(e)
    }
  })
)

// fs.futimes(fd, atime, mtime, callback)

export const futimes = (fd, atime, mtime) => (
  new Promise((resolve, reject) => {
    fs.futimes(fd, atime, mtime, (e) => (!e) ? resolve() : reject(e))
  })
)

// fs.futimesSync(fd, atime, mtime)

export const futimesSync = (fd, atime, mtime) => (
  Promise.resolve(fs.futimesSync(fd, atime, mtime))
)

// fs.lchmod(path, mode, callback)

/*
 *  Deprecated
 */ /*
export const lchmod = (path, mode) => (
  new Promise((resolve, reject) => {
    fs.lchmod(path, mode, (e) => (!e) ? resolve() : reject(e))
  })
) */

// fs.lchmodSync(path, mode)

/*
 *  Deprecated
 */ /*
export const lchmodSync = (path, mode) => (
  new Promise((resolve, reject) => {
    try {
      resolve(
        fs.lchmodSync(path, mode))
    } catch (e) {
      reject(e)
    }
  })
) */

// fs.lchown(path, mode, callback)

export const lchown = (path, uid, gid) => (
  new Promise((resolve, reject) => {
    fs.lchown(path, uid, gid, (e) => (!e) ? resolve() : reject(e))
  })
)

// fs.lchownSync(path, mode)

export const lchownSync = (path, uid, gid) => (
  new Promise((resolve, reject) => {
    try {
      resolve(
        fs.lchownSync(path, uid, gid))
    } catch (e) {
      reject(e)
    }
  })
)

// fs.link(srcpath, dstpath, callback)

export const link = (srcpath, dstpath) => (
  new Promise((resolve, reject) => {
    fs.link(srcpath, dstpath, (e) => (!e) ? resolve() : reject(e))
  })
)

// fs.linkSync(srcpath, dstpath)

export const linkSync = (srcpath, dstpath) => (
  new Promise((resolve, reject) => {
    try {
      resolve(
        fs.linkSync(srcpath, dstpath))
    } catch (e) {
      reject(e)
    }
  })
)

// fs.lstat(srcpath, dstpath, callback)

export const lstat = (path) => (
  new Promise((resolve, reject) => {
    fs.lstat(path, (e, stats) => (!e) ? resolve(stats) : reject(e))
  })
)

// fs.lstatSync(srcpath, dstpath)

export const lstatSync = (path) => (
  Promise.resolve(fs.lstatSync(path))
)

// fs.mkdir(path[, mode], callback)

export const mkdir = (path, mode) => (
  new Promise((resolve, reject) => {
    fs.mkdir(path, mode, (e) => (!e) ? resolve() : reject(e))
  })
)

// fs.mkdirSync(path, mode)

export const mkdirSync = (path, mode) => (
  new Promise((resolve, reject) => {
    try {
      resolve(
        fs.mkdirSync(path, mode))
    } catch (e) {
      reject(e)
    }
  })
)

// fs.mkdtemp(prefix, callback)

export const mkdtemp = (prefix, options) => (
  new Promise((resolve, reject) => {
    fs.mkdtemp(prefix, options, (e, folder) => (!e) ? resolve(folder) : reject(e))
  })
)

// fs.mkdtempSync(prefix)

export const mkdtempSync = (prefix, options) => (
  new Promise((resolve, reject) => {
    try {
      resolve(
        fs.mkdtempSync(prefix, options))
    } catch (e) {
      reject(e)
    }
  })
)

// fs.open(path, flags[, mode], callback)

export const open = (path, flags, mode) => (
  new Promise((resolve, reject) => {
    fs.open(path, flags, mode, (e, fd) => (!e) ? resolve(fd) : reject(e))
  })
)

// fs.openSync(path, flags[, mode])

export const openSync = (path, flags, mode) => (
  new Promise((resolve, reject) => {
    try {
      resolve(
        fs.openSync(path, flags, mode))
    } catch (e) {
      reject(e)
    }
  })
)

// fs.read(fd, buffer, offset, length, position)

export const read = (fd, buffer, offset, length, position) => (
  new Promise((resolve, reject) => {
    fs.read(fd, buffer, offset, length, position, (e, bytesRead, buffer) => (!e) ? resolve({ bytesRead, buffer }) : reject(e))
  })
)

// fs.readSync(fd, buffer, offset, length, position)

export const readSync = (fd, buffer, offset, length, position) => (
  Promise.resolve(fs.readSync(fd, buffer, offset, length, position))
)

// fs.readdir(path[, options], callback)

export const readdir = (path, options) => (
  new Promise((resolve, reject) => {
    fs.readdir(path, options, (e, files) => (!e) ? resolve(files) : reject(e))
  })
)

// fs.readdirSync(path[, options])

export const readdirSync = (path, options) => (
  Promise.resolve(fs.readdirSync(path, options))
)

// fs.readFile(file[, options])

export const readFile = (file, options) => (
  new Promise((resolve, reject) => {
    fs.readFile(file, options, (e, data) => (!e) ? resolve(data) : reject(e))
  })
)

// fs.readFileSync(file[, options])

export const readFileSync = (file, options) => (
  new Promise((resolve, reject) => {
    try {
      resolve(
        fs.readFileSync(file, options))
    } catch (e) {
      reject(e)
    }
  })
)

// fs.readlink(path[, options])

export const readlink = (path, options) => (
  new Promise((resolve, reject) => {
    fs.readlink(path, options, (e, linkString) => (!e) ? resolve(linkString) : reject(e))
  })
)

// fs.readlinkSync(path[, options])

export const readlinkSync = (path, options) => (
  new Promise((resolve, reject) => {
    try {
      resolve(
        fs.readlinkSync(path, options))
    } catch (e) {
      reject(e)
    }
  })
)

// fs.realpath(path[, options])

export const realpath = (path, options) => (
  new Promise((resolve, reject) => {
    fs.realpath(path, options, (e, resolvedPath) => (!e) ? resolve(resolvedPath) : reject(e))
  })
)

// fs.realpathSync(path[, options])

export const realpathSync = (path, options) => (
  new Promise((resolve, reject) => {
    try {
      resolve(
        fs.realpathSync(path, options))
    } catch (e) {
      reject(e)
    }
  })
)

// fs.rename(oldPath, newPath)

export const rename = (oldPath, newPath) => (
  new Promise((resolve, reject) => {
    fs.rename(oldPath, newPath, (e) => (!e) ? resolve() : reject(e))
  })
)

// fs.renameSync(oldPath, newPath)

export const renameSync = (oldPath, newPath) => (
  new Promise((resolve, reject) => {
    try {
      resolve(
        fs.renameSync(oldPath, newPath))
    } catch (e) {
      reject(e)
    }
  })
)

// fs.realpath(path)

export const rmdir = (path) => (
  new Promise((resolve, reject) => {
    fs.rmdir(path, (e) => (!e) ? resolve() : reject(e))
  })
)

// fs.rmdirSync(path)

export const rmdirSync = (path) => (
  new Promise((resolve, reject) => {
    try {
      resolve(
        fs.rmdirSync(path))
    } catch (e) {
      reject(e)
    }
  })
)

// fs.stat(path)

export const stat = (path) => (
  new Promise((resolve, reject) => {
    fs.stat(path, (e, stat) => (!e) ? resolve(stat) : reject(e))
  })
)

// fs.statSync(path)

export const statSync = (path) => (
  Promise.resolve(fs.statSync(path))
)

// fs.symlink(target, path[, type])

export const symlink = (target, path, type) => (
  new Promise((resolve, reject) => {
    fs.symlink(target, path, type, (e) => (!e) ? resolve() : reject(e))
  })
)

// fs.symlinkSync(target, path[, type])

export const symlinkSync = (target, path, type) => (
  Promise.resolve(fs.symlinkSync(target, path, type))
)

// fs.truncate(path, len, callback)

export const truncate = (path, len) => (
  new Promise((resolve, reject) => {
    fs.truncate(path, len, (e) => (!e) ? resolve() : reject(e))
  })
)

// fs.truncateSync(path, len)

export const truncateSync = (path, len) => (
  new Promise((resolve, reject) => {
    try {
      resolve(
        fs.truncateSync(path, len))
    } catch (e) {
      reject(e)
    }
  })
)

// fs.truncate(path, callback)

export const unlink = (path) => (
  new Promise((resolve, reject) => {
    fs.unlink(path, (e) => (!e) ? resolve() : reject(e))
  })
)

// fs.unlinkSync(path)

export const unlinkSync = (path) => (
  new Promise((resolve, reject) => {
    try {
      resolve(
        fs.unlinkSync(path))
    } catch (e) {
      reject(e)
    }
  })
)

// fs.unwatchFile(filename[, listener])

export const unwatchFile = (filename, listener) => (
  Promise.resolve(fs.unwatchFile(filename, listener))
)

// fs.utimes(path, atime, mtime, callback)

export const utimes = (path, atime, mtime) => (
  new Promise((resolve, reject) => {
    fs.utimes(path, atime, mtime, (e) => (!e) ? resolve() : reject(e))
  })
)

// fs.utimesSync(path, atime, mtime)

export const utimesSync = (path, atime, mtime) => (
  Promise.resolve(fs.utimesSync(path, atime, mtime))
)

// fs.watch(filename[, options][, listener])

export const watch = (filename, options, listener) => (
  Promise.resolve(fs.watch(filename, options, listener))
)

// fs.watchFile(filename[, options], listener)

export const watchFile = (filename, options, listener) => (
  Promise.resolve(fs.watchFile(filename, options, listener))
)

// fs.write(fd, buffer, offset, length[, position], callback)
// fs.write(fd, data[, position[, encoding]], callback)

export const write = (fd, data, v1, v2, v3) => (
  new Promise((resolve, reject) => {
    const c = (e) => (!e) ? resolve() : reject(e)
    if (data instanceof Buffer) {
      fs.write(fd, data, v1, v2, v3, c)
    } else {
      fs.write(fd, data, v1, v2, c)
    }
  })
)

// fs.writeFile(file, data[, options], callback)
// fs.writeFileSync(file, data[, options])

export const writeFile = (file, data, options) => (
  new Promise((resolve, reject) => {
    fs.writeFile(file, data, options, (e) => (!e) ? resolve() : reject(e))
  })
)

export const writeFileSync = (file, data, options) => (
  new Promise((resolve, reject) => {
    try {
      resolve(
        fs.writeFileSync(file, data, options))
    } catch (e) {
      reject(e)
    }
  })
)

// fs.writeSync(fd, buffer, offset, length[, position])
// fs.writeSync(fd, data[, position[, encoding]])

export const writeSync = (fd, data, v1, v2, v3) => (
  new Promise((resolve, reject) => {
    try {
      if (data instanceof Buffer) {
        resolve(
          fs.writeSync(fd, data, v1, v2, v3))
      } else {
        resolve(
          fs.writeSync(fd, data, v1, v2))
      }
    } catch (e) {
      reject(e)
    }
  })
)

// File Access Constants

export const F_OK = fs.F_OK // Flag indicating that the file is visible to the calling process.
export const R_OK = fs.R_OK // Flag indicating that the file can be read by the calling process.
export const W_OK = fs.W_OK // Flag indicating that the file can be written by the calling process.
export const X_OK = fs.X_OK // Flag indicating that the file can be executed by the calling process.

export const constants = fs.constants
