/* eslint promise/param-names: 0 */

import fs from 'fs'

// fs.access(path[, mode], callback)

export const access = (path, mode) => (
  new Promise((success, failure) => {
    const c = (e) => {
      if (!e) return success()
      failure(e)
    }
    fs.access(path, (mode || c), (mode ? c : undefined))
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
    const c = (e) => {
      if (!e) return success()
      failure(e)
    }
    fs.appendFile(file, data, (options || c), (options ? c : undefined))
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
    const c = (e) => {
      if (!e) return success()
      failure(e)
    }
    fs.mkdir(path, (mode || c), (mode ? c : undefined))
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
    const c = (e, fd) => {
      if (!e) return success(fd)
      failure(e)
    }
    fs.open(path, flags, (mode || c), (mode ? c : undefined))
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
    const c = (e) => {
      if (!e) return success()
      failure(e)
    }
    fs.read(path, (options || c), (options ? c : undefined))
  })
)

// fs.readdirSync(path[, options])

export const readdirSync = (path, options) => (
  Promise.resolve(fs.readdirSync(path, options))
)

// fs.readFile(file[, options])

export const readFile = (file, options) => (
  new Promise((success, failure) => {
    const c = (e, data) => {
      if (!e) return success(data)
      failure(e)
    }
    fs.readFile(file, (options || c), (options ? c : undefined))
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
    const c = (e, linkString) => {
      if (!e) return success(linkString)
      failure(e)
    }
    fs.readlink(path, (options || c), (options ? c : undefined))
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
    const c = (e, resolvedPath) => {
      if (!e) return success(resolvedPath)
      failure(e)
    }
    fs.realpath(path, (options || c), (options ? c : undefined))
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
    const c = (e) => {
      if (!e) return success()
      failure(e)
    }
    fs.symlink(target, path, type || c, type ? c : undefined)
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
  Promise.resolve(fs.watch(filename, options || listener, (options) ? listener : undefined))
)

// fs.watchFile(filename[, options], listener)

export const watchFile = (filename, options, listener) => (
  Promise.resolve(fs.watchFile(filename, options || listener))
)

// fs.write(fd, buffer, offset, length[, position], callback)
// fs.write(fd, data[, position[, encoding]], callback)

export const write = (fd, data, v1, v2, v3) => (
  new Promise((success, failure) => {
    const b1 = isNaN(v1)
    const b2 = isNaN(v2)
    const b3 = isNaN(v3)
    const c = (e) => {
      if (!e) return success()
      failure(e)
    }
    if (data instanceof Buffer) {
      fs.write(fd, data, v1, v2, (b3 ? v3 : c), (b3 ? c : undefined))
    } else {
      fs.write(fd, data, (b1 ? v1 : b2 ? v2 : c), (b1 ? b2 ? v2 : c : b2 ? c : undefined))
    }
  })
)

// fs.writeFile(file, data[, options], callback)
// fs.writeFileSync(file, data[, options])

export const writeFile = (file, data, options) => (
  new Promise((success, failure) => {
    const c = (e) => {
      if (!e) return success()
      failure(e)
    }
    fs.writeFile(file, data, (options || c), (options ? c : undefined))
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
    const b1 = isNaN(v1)
    const b2 = isNaN(v2)
    const b3 = isNaN(v3)
    if (data instanceof Buffer) {
      fs.writeSync(fd, data, v1, v2, (b3 ? v3 : undefined))
    } else {
      fs.writeSync(fd, data, (b1 ? v1 : b2 ? v2 : undefined), (b1 ? b2 ? v2 : undefined : undefined))
    }
  })
)

// File Access Constants

export const F_OK = fs.F_OK // Flag indicating that the file is visible to the calling process.
export const R_OK = fs.R_OK // Flag indicating that the file can be read by the calling process.
export const W_OK = fs.W_OK // Flag indicating that the file can be written by the calling process.
export const X_OK = fs.X_OK // Flag indicating that the file can be executed by the calling process.

export const constants = fs.constants

/*
// File Open Constants

export const O_RDONLY = fs.O_RDONLY // Flag indicating to open a file for read-only access.
export const O_WRONLY = fs.O_WRONLY // Flag indicating to open a file for write-only access.
export const O_RDWR = fs.O_RDWR // Flag indicating to open a file for read-write access.
export const O_CREAT = fs.O_CREAT // Flag indicating to create the file if it does not already exist.
export const O_EXCL = fs.O_EXCL // Flag indicating that opening a file should fail if the O_CREAT flag is set and the file already exists.
export const O_NOCTTY = fs.O_NOCTTY // Flag indicating that if path identifies a terminal device, opening the path shall not cause that terminal to become the controlling terminal for the process (if the process does not already have one).
export const O_TRUNC = fs.O_TRUNC // Flag indicating that if the file exists and is a regular file, and the file is opened successfully for write access, its length shall be truncated to zero.
export const O_APPEND = fs.O_APPEND // Flag indicating that data will be appended to the end of the file.
export const O_DIRECTORY = fs.O_DIRECTORY // Flag indicating that the open should fail if the path is not a directory.
export const O_NOATIME = fs.O_DIRECTORY // Flag indicating reading accesses to the file system will no longer result in an update to the atime information associated with the file. This flag is available on Linux operating systems only.
export const O_NOFOLLOW = fs.O_NOFOLLOW // Flag indicating that the open should fail if the path is a symbolic link.
export const O_SYNC = fs.O_SYNC // Flag indicating that the file is opened for synchronous I/O.
export const O_SYMLINK = fs.O_SYMLINK // Flag indicating to open the symbolic link itself rather than the resource it is pointing to.
export const O_DIRECT = fs.O_DIRECT // When set, an attempt will be made to minimize caching effects of file I/O.
export const O_NONBLOCK = fs.O_NONBLOCK // Flag indicating to open the file in nonblocking mode when possible.

// File Type Constants

export const S_IFMT = fs.S_IFMT // Bit mask used to extract the file type code.
export const S_IFREG = fs.S_IFREG // File type constant for a regular file.
export const S_IFDIR = fs.S_IFDIR // File type constant for a directory.
export const S_IFCHR = fs.S_IFCHR // File type constant for a character-oriented device file.
export const S_IFBLK = fs.S_IFBLK // File type constant for a block-oriented device file.
export const S_IFIFO = fs.S_IFIFO // File type constant for a FIFO/pipe.
export const S_IFLNK = fs.S_IFLNK // File type constant for a symbolic link.
export const S_IFSOCK = fs.S_IFSOCK // File type constant for a socket.

// File Mode Constants

export const S_IRWXU = fs.S_IRWXU // File mode indicating readable, writable and executable by owner.
export const S_IRUSR = fs.S_IRUSR // File mode indicating readable by owner.
export const S_IWUSR = fs.S_IWUSR // File mode indicating writable by owner.
export const S_IXUSR = fs.S_IXUSR // File mode indicating executable by owner.
export const S_IRWXG = fs.S_IRWXG // File mode indicating readable, writable and executable by group.
export const S_IRGRP = fs.S_IRGRP // File mode indicating readable by group.
export const S_IWGRP = fs.S_IWGRP // File mode indicating writable by group.
export const S_IXGRP = fs.S_IXGRP // File mode indicating executable by group.
export const S_IRWXO = fs.S_IRWXO // File mode indicating readable, writable and executable by others.
export const S_IROTH = fs.S_IROTH // File mode indicating readable by others.
export const S_IWOTH = fs.S_IWOTH // File mode indicating writable by others.
export const S_IXOTH = fs.S_IXOTH // File mode indicating executable by others.
*/

