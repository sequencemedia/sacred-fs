import fs from 'fs'

// fs.access(path[, mode], callback)

export function access (path, mode) {
  return (
    new Promise((resolve, reject) => {
      fs.access(path, mode, (e) => (!e) ? resolve() : reject(e))
    })
  )
}

// fs.accessSync(path[, mode])

export function accessSync (path, mode) {
  return (
    new Promise((resolve, reject) => {
      try {
        resolve(
          fs.accessSync(path, mode))
      } catch (e) {
        reject(e)
      }
    })
  )
}

// fs.appendFile(file, data[, options], callback)

export function appendFile (file, data, options) {
  return (
    new Promise((resolve, reject) => {
      fs.appendFile(file, data, options, (e) => (!e) ? resolve() : reject(e))
    })
  )
}

// fs.appendFileSync(file, data[, options])

export function appendFileSync (file, data, options) {
  return (
    new Promise((resolve, reject) => {
      try {
        resolve(
          fs.appendFileSync(file, data, options))
      } catch (e) {
        reject(e)
      }
    })
  )
}

// fs.chmod(path, mode, callback)

export function chmod (path, mode) {
  return (
    new Promise((resolve, reject) => {
      fs.chmod(path, mode, (e) => (!e) ? resolve() : reject(e))
    })
  )
}

// fs.chmodSync(path, mode)

export function chmodSync (path, mode) {
  return (
    new Promise((resolve, reject) => {
      try {
        resolve(
          fs.chmodSync(path, mode))
      } catch (e) {
        reject(e)
      }
    })
  )
}

// fs.chown(path, uid, gid, callback)

export function chown (path, uid, gid) {
  return (
    new Promise((resolve, reject) => {
      fs.chown(path, uid, gid, (e) => (!e) ? resolve() : reject(e))
    })
  )
}

// fs.chownSync(path, uid, gid)

export function chownSync (path, uid, gid) {
  return (
    new Promise((resolve, reject) => {
      try {
        resolve(
          fs.chownSync(path, uid, gid))
      } catch (e) {
        reject(e)
      }
    })
  )
}

// fs.close(path, uid, gid, callback)

export function close (fd) {
  return (
    new Promise((resolve, reject) => {
      fs.close(fd, (e) => (!e) ? resolve() : reject(e))
    })
  )
}

// fs.closeSync(path, uid, gid)

export function closeSync (fd) {
  return (
    new Promise((resolve, reject) => {
      try {
        resolve(
          fs.closeSync(fd))
      } catch (e) {
        reject(e)
      }
    })
  )
}

// fs.copyFile(path, mode, callback)

export function copyFile (src, dest, flags) {
  return (
    new Promise((resolve, reject) => {
      fs.copyFile(src, dest, flags, (e) => (!e) ? resolve() : reject(e))
    })
  )
}

// fs.copyFileSync(path, mode)

export function copyFileSync (src, dest, flags) {
  return (
    new Promise((resolve, reject) => {
      try {
        resolve(
          fs.copyFileSync(src, dest, flags))
      } catch (e) {
        reject(e)
      }
    })
  )
}

// fs.createReadStream(path[, options])

export function createReadStream (path, options) {
  return (
    Promise.resolve(fs.createReadStream(path, options))
  )
}

// fs.createWriteStream(path[, options])

export function createWriteStream (path, options) {
  return (
    Promise.resolve(fs.createWriteStream(path, options))
  )
}

/*
fs.constants
*/

// fs.exists(path, callback)

/*
 *  Deprecated
 */ /*
export function exists (path) {
  return (
    new Promise((resolve) => {
      fs.exists(path, resolve)
    })
  )
} */

// fs.existsSync(path)

/*
 *  Deprecated
 */ /*
export function existsSync (path) {
  return (
    Promise.resolve(fs.existsSync(path))
  )
} */

// fs.fchmod(fd, mode, callback)

export function fchmod (fd, mode) {
  return (
    new Promise((resolve, reject) => {
      fs.fchmod(fd, mode, (e) => (!e) ? resolve() : reject(e))
    })
  )
}

// fs.fchmodSync(fd, mode)

export function fchmodSync (fd, mode) {
  return (
    new Promise((resolve, reject) => {
      try {
        resolve(
          fs.fchmodSync(fd, mode))
      } catch (e) {
        reject(e)
      }
    })
  )
}

// fs.fchown(fd, uid, gid, callback)

export function fchown (fd, uid, gid) {
  return (
    new Promise((resolve, reject) => {
      fs.fchown(fd, uid, gid, (e) => (!e) ? resolve() : reject(e))
    })
  )
}

// fs.fchownSync(fd, uid, gid)

export function fchownSync (fd, uid, gid) {
  return (
    new Promise((resolve, reject) => {
      try {
        resolve(
          fs.fchownSync(fd, uid, gid))
      } catch (e) {
        reject(e)
      }
    })
  )
}

// fs.fdatasync(fd, callback)

export function fdatasync (fd) {
  return (
    new Promise((resolve, reject) => {
      fs.fdatasync(fd, (e) => (!e) ? resolve() : reject(e))
    })
  )
}

// fs.fdatasyncSync(fd)

export function fdatasyncSync (fd) {
  return (
    new Promise((resolve, reject) => {
      try {
        resolve(
          fs.fdatasyncSync(fd))
      } catch (e) {
        reject(e)
      }
    })
  )
}

// fs.fstat(fd, callback)

export function fstat (fd) {
  return (
    new Promise((resolve, reject) => {
      fs.fstat(fd, (e, stats) => (!e) ? resolve(stats) : reject(e))
    })
  )
}

// fs.fstatSync(fd)

export function fstatSync (fd) {
  return (
    new Promise((resolve, reject) => {
      try {
        resolve(
          fs.fstatSync(fd))
      } catch (e) {
        reject(e)
      }
    })
  )
}

// fs.fsync(fd, callback)

export function fsync (fd) {
  return (
    new Promise((resolve, reject) => {
      fs.fsync(fd, (e) => (!e) ? resolve() : reject(e))
    })
  )
}

// fs.fsyncSync(fd)

export function fsyncSync (fd) {
  return (
    new Promise((resolve, reject) => {
      try {
        resolve(
          fs.fsyncSync(fd))
      } catch (e) {
        reject(e)
      }
    })
  )
}

// fs.ftruncate(fd, len, callback)

export function ftruncate (fd, len) {
  return (
    new Promise((resolve, reject) => {
      fs.ftruncate(fd, len, (e) => (!e) ? resolve() : reject(e))
    })
  )
}

// fs.ftruncateSync(fd, len)

export function ftruncateSync (fd, len) {
  return (
    new Promise((resolve, reject) => {
      try {
        resolve(
          fs.ftruncateSync(fd, len))
      } catch (e) {
        reject(e)
      }
    })
  )
}

// fs.futimes(fd, atime, mtime, callback)

export function futimes (fd, atime, mtime) {
  return (
    new Promise((resolve, reject) => {
      fs.futimes(fd, atime, mtime, (e) => (!e) ? resolve() : reject(e))
    })
  )
}

// fs.futimesSync(fd, atime, mtime)

export function futimesSync (fd, atime, mtime) {
  return (
    Promise.resolve(fs.futimesSync(fd, atime, mtime))
  )
}

// fs.lchmod(path, mode, callback)

/*
 *  Deprecated
 */ /*
export function lchmod (path, mode) {
  return (
    new Promise((resolve, reject) => {
      fs.lchmod(path, mode, (e) => (!e) ? resolve() : reject(e))
    })
  )
} */

// fs.lchmodSync(path, mode)

/*
 *  Deprecated
 */ /*
export function lchmodSync (path, mode) {
  return (
    new Promise((resolve, reject) => {
      try {
        resolve(
          fs.lchmodSync(path, mode))
      } catch (e) {
        reject(e)
      }
    })
  )
} */

// fs.lchown(path, mode, callback)

export function lchown (path, uid, gid) {
  return (
    new Promise((resolve, reject) => {
      fs.lchown(path, uid, gid, (e) => (!e) ? resolve() : reject(e))
    })
  )
}

// fs.lchownSync(path, mode)

export function lchownSync (path, uid, gid) {
  return (
    new Promise((resolve, reject) => {
      try {
        resolve(
          fs.lchownSync(path, uid, gid))
      } catch (e) {
        reject(e)
      }
    })
  )
}

// fs.link(srcpath, dstpath, callback)

export function link (srcpath, dstpath) {
  return (
    new Promise((resolve, reject) => {
      fs.link(srcpath, dstpath, (e) => (!e) ? resolve() : reject(e))
    })
  )
}

// fs.linkSync(srcpath, dstpath)

export function linkSync (srcpath, dstpath) {
  return (
    new Promise((resolve, reject) => {
      try {
        resolve(
          fs.linkSync(srcpath, dstpath))
      } catch (e) {
        reject(e)
      }
    })
  )
}

// fs.lstat(srcpath, dstpath, callback)

export function lstat (path) {
  return (
    new Promise((resolve, reject) => {
      fs.lstat(path, (e, stats) => (!e) ? resolve(stats) : reject(e))
    })
  )
}

// fs.lstatSync(srcpath, dstpath)

export function lstatSync (path) {
  return (
    Promise.resolve(fs.lstatSync(path))
  )
}

// fs.mkdir(path[, mode], callback)

export function mkdir (path, mode) {
  return (
    new Promise((resolve, reject) => {
      fs.mkdir(path, mode, (e) => (!e) ? resolve() : reject(e))
    })
  )
}

// fs.mkdirSync(path, mode)

export function mkdirSync (path, mode) {
  return (
    new Promise((resolve, reject) => {
      try {
        resolve(
          fs.mkdirSync(path, mode))
      } catch (e) {
        reject(e)
      }
    })
  )
}

// fs.mkdtemp(prefix, callback)

export function mkdtemp (prefix, options) {
  return (
    new Promise((resolve, reject) => {
      fs.mkdtemp(prefix, options, (e, folder) => (!e) ? resolve(folder) : reject(e))
    })
  )
}

// fs.mkdtempSync(prefix)

export function mkdtempSync (prefix, options) {
  return (
    new Promise((resolve, reject) => {
      try {
        resolve(
          fs.mkdtempSync(prefix, options))
      } catch (e) {
        reject(e)
      }
    })
  )
}

// fs.open(path, flags[, mode], callback)

export function open (path, flags, mode) {
  return (
    new Promise((resolve, reject) => {
      fs.open(path, flags, mode, (e, fd) => (!e) ? resolve(fd) : reject(e))
    })
  )
}

// fs.openSync(path, flags[, mode])

export function openSync (path, flags, mode) {
  return (
    new Promise((resolve, reject) => {
      try {
        resolve(
          fs.openSync(path, flags, mode))
      } catch (e) {
        reject(e)
      }
    })
  )
}

// fs.read(fd, buffer, offset, length, position)

export function read (fd, buffer, offset, length, position) {
  return (
    new Promise((resolve, reject) => {
      fs.read(fd, buffer, offset, length, position, (e, bytesRead, buffer) => (!e) ? resolve({ bytesRead, buffer }) : reject(e))
    })
  )
}

// fs.readSync(fd, buffer, offset, length, position)

export function readSync (fd, buffer, offset, length, position) {
  return (
    Promise.resolve(fs.readSync(fd, buffer, offset, length, position))
  )
}

// fs.readdir(path[, options], callback)

export function readdir (path, options) {
  return (
    new Promise((resolve, reject) => {
      fs.readdir(path, options, (e, files) => (!e) ? resolve(files) : reject(e))
    })
  )
}

// fs.readdirSync(path[, options])

export function readdirSync (path, options) {
  return (
    Promise.resolve(fs.readdirSync(path, options))
  )
}

// fs.readFile(file[, options])

export function readFile (file, options) {
  return (
    new Promise((resolve, reject) => {
      fs.readFile(file, options, (e, data) => (!e) ? resolve(data) : reject(e))
    })
  )
}

// fs.readFileSync(file[, options])

export function readFileSync (file, options) {
  return (
    new Promise((resolve, reject) => {
      try {
        resolve(
          fs.readFileSync(file, options))
      } catch (e) {
        reject(e)
      }
    })
  )
}

// fs.readlink(path[, options])

export function readlink (path, options) {
  return (
    new Promise((resolve, reject) => {
      fs.readlink(path, options, (e, linkString) => (!e) ? resolve(linkString) : reject(e))
    })
  )
}

// fs.readlinkSync(path[, options])

export function readlinkSync (path, options) {
  return (
    new Promise((resolve, reject) => {
      try {
        resolve(
          fs.readlinkSync(path, options))
      } catch (e) {
        reject(e)
      }
    })
  )
}

// fs.realpath(path[, options])

export function realpath (path, options) {
  return (
    new Promise((resolve, reject) => {
      fs.realpath(path, options, (e, resolvedPath) => (!e) ? resolve(resolvedPath) : reject(e))
    })
  )
}

// fs.realpathSync(path[, options])

export function realpathSync (path, options) {
  return (
    new Promise((resolve, reject) => {
      try {
        resolve(
          fs.realpathSync(path, options))
      } catch (e) {
        reject(e)
      }
    })
  )
}

// fs.rename(oldPath, newPath)

export function rename (oldPath, newPath) {
  return (
    new Promise((resolve, reject) => {
      fs.rename(oldPath, newPath, (e) => (!e) ? resolve() : reject(e))
    })
  )
}

// fs.renameSync(oldPath, newPath)

export function renameSync (oldPath, newPath) {
  return (
    new Promise((resolve, reject) => {
      try {
        resolve(
          fs.renameSync(oldPath, newPath))
      } catch (e) {
        reject(e)
      }
    })
  )
}

// fs.realpath(path)

export function rmdir (path) {
  return (
    new Promise((resolve, reject) => {
      fs.rmdir(path, (e) => (!e) ? resolve() : reject(e))
    })
  )
}

// fs.rmdirSync(path)

export function rmdirSync (path) {
  return (
    new Promise((resolve, reject) => {
      try {
        resolve(
          fs.rmdirSync(path))
      } catch (e) {
        reject(e)
      }
    })
  )
}

// fs.stat(path)

export function stat (path) {
  return (
    new Promise((resolve, reject) => {
      fs.stat(path, (e, stat) => (!e) ? resolve(stat) : reject(e))
    })
  )
}

// fs.statSync(path)

export function statSync (path) {
  return (
    Promise.resolve(fs.statSync(path))
  )
}

// fs.symlink(target, path[, type])

export function symlink (target, path, type) {
  return (
    new Promise((resolve, reject) => {
      fs.symlink(target, path, type, (e) => (!e) ? resolve() : reject(e))
    })
  )
}

// fs.symlinkSync(target, path[, type])

export function symlinkSync (target, path, type) {
  return (
    Promise.resolve(fs.symlinkSync(target, path, type))
  )
}

// fs.truncate(path, len, callback)

export function truncate (path, len) {
  return (
    new Promise((resolve, reject) => {
      fs.truncate(path, len, (e) => (!e) ? resolve() : reject(e))
    })
  )
}

// fs.truncateSync(path, len)

export function truncateSync (path, len) {
  return (
    new Promise((resolve, reject) => {
      try {
        resolve(
          fs.truncateSync(path, len))
      } catch (e) {
        reject(e)
      }
    })
  )
}

// fs.truncate(path, callback)

export function unlink (path) {
  return (
    new Promise((resolve, reject) => {
      fs.unlink(path, (e) => (!e) ? resolve() : reject(e))
    })
  )
}

// fs.unlinkSync(path)

export function unlinkSync (path) {
  return (
    new Promise((resolve, reject) => {
      try {
        resolve(
          fs.unlinkSync(path))
      } catch (e) {
        reject(e)
      }
    })
  )
}

// fs.unwatchFile(filename[, listener])

export function unwatchFile (filename, listener) {
  return (
    Promise.resolve(fs.unwatchFile(filename, listener))
  )
}

// fs.utimes(path, atime, mtime, callback)

export function utimes (path, atime, mtime) {
  return (
    new Promise((resolve, reject) => {
      fs.utimes(path, atime, mtime, (e) => (!e) ? resolve() : reject(e))
    })
  )
}

// fs.utimesSync(path, atime, mtime)

export function utimesSync (path, atime, mtime) {
  return (
    Promise.resolve(fs.utimesSync(path, atime, mtime))
  )
}

// fs.watch(filename[, options][, listener])

export function watch (filename, options, listener) {
  return (
    Promise.resolve(fs.watch(filename, options, listener))
  )
}

// fs.watchFile(filename[, options], listener)

export function watchFile (filename, options, listener) {
  return (
    Promise.resolve(fs.watchFile(filename, options, listener))
  )
}

// fs.write(fd, buffer, offset, length[, position], callback)
// fs.write(fd, data[, position[, encoding]], callback)

export function write (fd, data, v1, v2, v3) {
  return (
    new Promise((resolve, reject) => {
      function c (e) { return (!e) ? resolve() : reject(e) }
      if (data instanceof Buffer) {
        fs.write(fd, data, v1, v2, v3, c)
      } else {
        fs.write(fd, data, v1, v2, c)
      }
    })
  )
}

// fs.writeFile(file, data[, options], callback)
// fs.writeFileSync(file, data[, options])

export function writeFile (file, data, options) {
  return (
    new Promise((resolve, reject) => {
      fs.writeFile(file, data, options, (e) => (!e) ? resolve() : reject(e))
    })
  )
}

export function writeFileSync (file, data, options) {
  return (
    new Promise((resolve, reject) => {
      try {
        resolve(
          fs.writeFileSync(file, data, options))
      } catch (e) {
        reject(e)
      }
    })
  )
}

// fs.writeSync(fd, buffer, offset, length[, position])
// fs.writeSync(fd, data[, position[, encoding]])

export function writeSync (fd, data, v1, v2, v3) {
  return (
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
}

// File Access Constants

export const F_OK = fs.F_OK // Flag indicating that the file is visible to the calling process.
export const R_OK = fs.R_OK // Flag indicating that the file can be read by the calling process.
export const W_OK = fs.W_OK // Flag indicating that the file can be written by the calling process.
export const X_OK = fs.X_OK // Flag indicating that the file can be executed by the calling process.

export const constants = fs.constants
