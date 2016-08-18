/* eslint promise/param-names: 0 */

import fs from 'fs'

// fs.access(path[, mode], callback)

export const access = (path, mode) => (
  new Promise((success, failure) => {
    fs.access(path, mode, (e) => {
      if (!e) return success()
      failure(e)
    })
  })
)

// fs.accessSync(path[, mode])

export const accessSync = (path, mode) => (
  new Promise((success, failure) => {
    try {
      success(
        fs.accessSync(path, mode))
    } catch (e) {
      failure(e)
    }
  })
)

// fs.appendFile(file, data[, options], callback)

export const appendFile = (file, data, options) => (
  new Promise((success, failure) => {
    fs.appendFile(file, data, options, (e) => {
      if (!e) return success()
      failure(e)
    })
  })
)

// fs.appendFileSync(file, data[, options])

export const appendFileSync = (file, data, options) => (
  new Promise((success, failure) => {
    try {
      success(
        fs.appendFileSync(file, data, options))
    } catch (e) {
      failure(e)
    }
  })
)

// fs.chmod(path, mode, callback)

export const chmod = (path, mode) => (
  new Promise((success, failure) => {
    fs.chmod(path, mode, (e) => {
      if (!e) return success()
      failure(e)
    })
  })
)

// fs.chmodSync(path, mode)

export const chmodSync = (path, mode) => (
  new Promise((success, failure) => {
    try {
      success(
        fs.chmodSync(path, mode))
    } catch (e) {
      failure(e)
    }
  })
)

// fs.chown(path, uid, gid, callback)

export const chown = (path, uid, gid) => (
  new Promise((success, failure) => {
    fs.chown(path, uid, gid, (e) => {
      if (!e) return success()
      failure(e)
    })
  })
)

// fs.chownSync(path, uid, gid)

export const chownSync = (path, uid, gid) => (
  new Promise((success, failure) => {
    try {
      success(
        fs.chownSync(path, uid, gid))
    } catch (e) {
      failure(e)
    }
  })
)

// fs.close(path, uid, gid, callback)

export const close = (fd) => (
  new Promise((success, failure) => {
    fs.close(fd, (e) => {
      if (!e) return success()
      failure(e)
    })
  })
)

// fs.closeSync(path, uid, gid)

export const closeSync = (fd) => (
  new Promise((success, failure) => {
    try {
      success(
        fs.closeSync(fd))
    } catch (e) {
      failure(e)
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
 */
export const exists = (path) => (
  new Promise((success) => {
    fs.exists(path, success)
  })
)

// fs.existsSync(path)

/*
 *  Deprecated
 */
export const existsSync = (path) => (
  Promise.resolve(fs.existsSync(path))
)

// fs.fchmod(fd, mode, callback)

export const fchmod = (fd, mode) => (
  new Promise((success, failure) => {
    fs.fchmod(fd, mode, (e) => {
      if (!e) return success()
      failure(e)
    })
  })
)

// fs.fchmodSync(fd, mode)

export const fchmodSync = (fd, mode) => (
  new Promise((success, failure) => {
    try {
      success(
        fs.fchmodSync(fd, mode))
    } catch (e) {
      failure(e)
    }
  })
)

// fs.fchown(fd, uid, gid, callback)

export const fchown = (fd, uid, gid) => (
  new Promise((success, failure) => {
    fs.fchown(fd, uid, gid, (e) => {
      if (!e) return success()
      failure(e)
    })
  })
)

// fs.fchownSync(fd, uid, gid)

export const fchownSync = (fd, uid, gid) => (
  new Promise((success, failure) => {
    try {
      success(
        fs.fchownSync(fd, uid, gid))
    } catch (e) {
      failure(e)
    }
  })
)

// fs.fdatasync(fd, callback)

export const fdatasync = (fd) => (
  new Promise((success, failure) => {
    fs.fdatasync(fd, (e) => {
      if (!e) return success()
      failure(e)
    })
  })
)

// fs.fdatasyncSync(fd)

export const fdatasyncSync = (fd) => (
  new Promise((success, failure) => {
    try {
      success(
        fs.fdatasyncSync(fd))
    } catch (e) {
      failure(e)
    }
  })
)

// fs.fstat(fd, callback)

export const fstat = (fd) => (
  new Promise((success, failure) => {
    fs.fstat(fd, (e, stats) => {
      if (!e) return success(stats)
      failure(e)
    })
  })
)

// fs.fstatSync(fd)

export const fstatSync = (fd) => (
  new Promise((success, failure) => {
    try {
      success(
        fs.fstatSync(fd))
    } catch (e) {
      failure(e)
    }
  })
)

// fs.fsync(fd, callback)

export const fsync = (fd) => (
  new Promise((success, failure) => {
    fs.fsync(fd, (e) => {
      if (!e) return success()
      failure(e)
    })
  })
)

// fs.fsyncSync(fd)

export const fsyncSync = (fd) => (
  new Promise((success, failure) => {
    try {
      success(
        fs.fsyncSync(fd))
    } catch (e) {
      failure(e)
    }
  })
)

// fs.ftruncate(fd, len, callback)

export const ftruncate = (fd, len) => (
  new Promise((success, failure) => {
    fs.ftruncate(fd, len, (e) => {
      if (!e) return success()
      failure(e)
    })
  })
)

// fs.ftruncateSync(fd, len)

export const ftruncateSync = (fd, len) => (
  new Promise((success, failure) => {
    try {
      success(
        fs.ftruncateSync(fd, len))
    } catch (e) {
      failure(e)
    }
  })
)

// fs.futimes(fd, atime, mtime, callback)

export const futimes = (fd, atime, mtime) => (
  new Promise((success, failure) => {
    fs.futimes(fd, atime, mtime, (e) => {
      if (!e) return success()
      failure(e)
    })
  })
)

// fs.futimesSync(fd, atime, mtime)

export const futimesSync = (fd, atime, mtime) => (
  Promise.resolve(fs.futimesSync(fd, atime, mtime))
)

// fs.lchmod(path, mode, callback)

export const lchmod = (path, mode) => (
  new Promise((success, failure) => {
    fs.lchmod(path, mode, (e) => {
      if (!e) return success()
      failure(e)
    })
  })
)

// fs.lchmodSync(path, mode)

export const lchmodSync = (path, mode) => (
  new Promise((success, failure) => {
    try {
      success(
        fs.lchmodSync(path, mode))
    } catch (e) {
      failure(e)
    }
  })
)

// fs.lchown(path, mode, callback)

export const lchown = (path, uid, gid) => (
  new Promise((success, failure) => {
    fs.lchown(path, uid, gid, (e) => {
      if (!e) return success()
      failure(e)
    })
  })
)

// fs.lchownSync(path, mode)

export const lchownSync = (path, uid, gid) => (
  new Promise((success, failure) => {
    try {
      success(
        fs.lchownSync(path, uid, gid))
    } catch (e) {
      failure(e)
    }
  })
)

// fs.link(srcpath, dstpath, callback)

export const link = (srcpath, dstpath) => (
  new Promise((success, failure) => {
    fs.link(srcpath, dstpath, (e) => {
      if (!e) return success()
      failure(e)
    })
  })
)

// fs.linkSync(srcpath, dstpath)

export const linkSync = (srcpath, dstpath) => (
  new Promise((success, failure) => {
    try {
      success(
        fs.linkSync(srcpath, dstpath))
    } catch (e) {
      failure(e)
    }
  })
)

// fs.lstat(srcpath, dstpath, callback)

export const lstat = (path) => (
  new Promise((success, failure) => {
    fs.lstat(path, (e, stats) => {
      if (!e) return success(stats)
      failure(e)
    })
  })
)

// fs.lstatSync(srcpath, dstpath)

export const lstatSync = (path) => (
  Promise.resolve(fs.lstatSync(path))
)

// fs.mkdir(path[, mode], callback)

export const mkdir = (path, mode) => (
  new Promise((success, failure) => {
    fs.mkdir(path, mode, (e) => {
      if (!e) return success()
      failure(e)
    })
  })
)

// fs.mkdirSync(path, mode)

export const mkdirSync = (path, mode) => (
  new Promise((success, failure) => {
    try {
      success(
        fs.mkdirSync(path, mode))
    } catch (e) {
      failure(e)
    }
  })
)

// fs.mkdtemp(prefix, callback)

export const mkdtemp = (prefix) => (
  new Promise((success, failure) => {
    fs.mkdtemp(prefix, (e, folder) => {
      if (!e) return success(folder)
      failure(e)
    })
  })
)

// fs.mkdtempSync(prefix)

export const mkdtempSync = (prefix) => (
  new Promise((success, failure) => {
    try {
      success(
        fs.mkdtempSync(prefix))
    } catch (e) {
      failure(e)
    }
  })
)

// fs.open(path, flags[, mode], callback)

export const open = (path, flags, mode) => (
  new Promise((success, failure) => {
    fs.open(path, flags, mode, (e, fd) => {
      if (!e) return success(fd)
      failure(e)
    })
  })
)

// fs.openSync(path, flags[, mode])

export const openSync = (path, flags, mode) => (
  new Promise((success, failure) => {
    try {
      success(
        fs.openSync(path, flags, mode))
    } catch (e) {
      failure(e)
    }
  })
)

// fs.read(fd, buffer, offset, length, position)

export const read = (fd, buffer, offset, length, position) => (
  new Promise((success, failure) => {
    fs.read(fd, buffer, offset, length, position, (e, bytesRead, buffer) => {
      if (!e) return success({ bytesRead, buffer })
      failure(e)
    })
  })
)

// fs.readSync(fd, buffer, offset, length, position)

export const readSync = (fd, buffer, offset, length, position) => (
  Promise.resolve(fs.readSync(fd, buffer, offset, length, position))
)

// fs.readdir(path[, options], callback)

export const readdir = (path, options) => (
  new Promise((success, failure) => {
    fs.read(path, options, (e) => {
      if (!e) return success()
      failure(e)
    })
  })
)

// fs.readdirSync(path[, options])

export const readdirSync = (path, options) => (
  Promise.resolve(fs.readdirSync(path, options))
)

// fs.readFile(file[, options])

export const readFile = (file, options) => (
  new Promise((success, failure) => {
    fs.readFile(file, options, (e, data) => {
      if (!e) return success(data)
      failure(e)
    })
  })
)

// fs.readFileSync(file[, options])

export const readFileSync = (file, options) => (
  new Promise((success, failure) => {
    try {
      success(
        fs.readFileSync(file, options))
    } catch (e) {
      failure(e)
    }
  })
)

// fs.readlink(path[, options])

export const readlink = (path, options) => (
  new Promise((success, failure) => {
    fs.readlink(path, options, (e, linkString) => {
      if (!e) return success(linkString)
      failure(e)
    })
  })
)

// fs.readlinkSync(path[, options])

export const readlinkSync = (path, options) => (
  new Promise((success, failure) => {
    try {
      success(
        fs.readlinkSync(path, options))
    } catch (e) {
      failure(e)
    }
  })
)

// fs.realpath(path[, options])

export const realpath = (path, options) => (
  new Promise((success, failure) => {
    fs.realpath(path, options, (e, resolvedPath) => {
      if (!e) return success(resolvedPath)
      failure(e)
    })
  })
)

// fs.realpathSync(path[, options])

export const realpathSync = (path, options) => (
  new Promise((success, failure) => {
    try {
      success(
        fs.realpathSync(path, options))
    } catch (e) {
      failure(e)
    }
  })
)

// fs.rename(oldPath, newPath)

export const rename = (oldPath, newPath) => (
  new Promise((success, failure) => {
    fs.rename(oldPath, newPath, (e) => {
      if (!e) return success()
      failure(e)
    })
  })
)

// fs.renameSync(oldPath, newPath)

export const renameSync = (oldPath, newPath) => (
  new Promise((success, failure) => {
    try {
      success(
        fs.renameSync(oldPath, newPath))
    } catch (e) {
      failure(e)
    }
  })
)

// fs.realpath(path)

export const rmdir = (path) => (
  new Promise((success, failure) => {
    fs.rmdir(path, (e) => {
      if (!e) return success()
      failure(e)
    })
  })
)

// fs.rmdirSync(path)

export const rmdirSync = (path) => (
  new Promise((success, failure) => {
    try {
      success(
        fs.rmdirSync(path))
    } catch (e) {
      failure(e)
    }
  })
)

// fs.stat(path)

export const stat = (path) => (
  new Promise((success, failure) => {
    fs.stat(path, (e, stat) => {
      if (!e) return success(stat)
      failure(e)
    })
  })
)

// fs.statSync(path)

export const statSync = (path) => (
  Promise.resolve(fs.statSync(path))
)

// fs.symlink(target, path[, type])

export const symlink = (target, path, type) => (
  new Promise((success, failure) => {
    fs.symlink(target, path, type, (e) => {
      if (!e) return success()
      failure(e)
    })
  })
)

// fs.symlinkSync(target, path[, type])

export const symlinkSync = (target, path, type) => (
  Promise.resolve(fs.symlinkSync(target, path, type))
)

// fs.truncate(path, len, callback)

export const truncate = (path, len) => (
  new Promise((success, failure) => {
    fs.truncate(path, len, (e) => {
      if (!e) return success()
      failure(e)
    })
  })
)

// fs.truncateSync(path, len)

export const truncateSync = (path, len) => (
  new Promise((success, failure) => {
    try {
      success(
        fs.truncateSync(path, len))
    } catch (e) {
      failure(e)
    }
  })
)

// fs.truncate(path, callback)

export const unlink = (path) => (
  new Promise((success, failure) => {
    fs.unlink(path, (e) => {
      if (!e) return success()
      failure(e)
    })
  })
)

// fs.unlinkSync(path)

export const unlinkSync = (path) => (
  new Promise((success, failure) => {
    try {
      success(
        fs.unlinkSync(path))
    } catch (e) {
      failure(e)
    }
  })
)

// fs.unwatchFile(filename[, listener])

export const unwatchFile = (filename, listener) => (
  Promise.resolve(fs.unwatchFile(filename, listener))
)

// fs.utimes(path, atime, mtime, callback)

export const utimes = (path, atime, mtime) => (
  new Promise((success, failure) => {
    fs.utimes(path, atime, mtime, (e) => {
      if (!e) return success()
      failure(e)
    })
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
  new Promise((success, failure) => {
    const c = (e) => {
      if (!e) return success()
      failure(e)
    }
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
  new Promise((success, failure) => {
    fs.writeFile(file, data, options, (e) => {
      if (!e) return success()
      failure(e)
    })
  })
)

export const writeFileSync = (file, data, options) => (
  new Promise((success, failure) => {
    try {
      success(
        fs.writeFileSync(file, data, options))
    } catch (e) {
      failure(e)
    }
  })
)

// fs.writeSync(fd, buffer, offset, length[, position])
// fs.writeSync(fd, data[, position[, encoding]])

export const writeSync = (fd, data, v1, v2, v3) => (
  new Promise((success, failure) => {
    if (data instanceof Buffer) {
      fs.writeSync(fd, data, v1, v2, v3)
    } else {
      fs.writeSync(fd, data, v1, v2)
    }
  })
)

// File Access Constants

export const F_OK = fs.F_OK // Flag indicating that the file is visible to the calling process.
export const R_OK = fs.R_OK // Flag indicating that the file can be read by the calling process.
export const W_OK = fs.W_OK // Flag indicating that the file can be written by the calling process.
export const X_OK = fs.X_OK // Flag indicating that the file can be executed by the calling process.

export const constants = fs.constants
