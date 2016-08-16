
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
      fs.accessSync(path, mode)
      success()
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
      fs.appendFileSync(file, data, options)
      success()
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
  Promise.resolve(fs.chmodSync(path, mode))
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
  Promise.resolve(fs.chownSync(path, uid, gid))
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
  Promise.resolve(fs.closeSync(fd))
)

// fs.createReadStream(path[, options])

export const createReadStream = (path, options) => (
  new Promise((success, failure) => {
    const c = (e, stream) => {
      if (!e) return success(stream)
      failure(e)
    }
    fs.createReadStream(path, (options || c), (options ? c : undefined))
  })
)

// fs.createWriteStream(path[, options])

export const createWriteStream = (path, options) => (
  new Promise((success, failure) => {
    const c = (e, stream) => {
      if (!e) return success(stream)
      failure(e)
    }
    fs.createWriteStream(path, (options || c), (options ? c : undefined))
  })
)

/*
fs.constants
*/

// fs.exists(path, callback)

export const exists = (path) => (
  new Promise((success, failure) => {
    fs.exists(path, (e) => {
      if (!e) return success()
      failure(e)
    })
  })
)

// fs.existsSync(path)

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
  Promise.resolve(fs.fchmodSync(fd, mode))
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
  Promise.resolve(fs.fchownSync(fd, uid, gid))
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

// fs.fchownSync(fd)

export const fdatasyncSync = (fd) => (
  Promise.resolve(fs.fdatasyncSync(fd))
)

// fs.fstat(fd, callback)

export const fstat = (fd) => (
  new Promise((success, failure) => {
    fs.fstat(fd, (e) => {
      if (!e) return success()
      failure(e)
    })
  })
)

// fs.fstatSync(fd)

export const fstatSync = (fd) => (
  Promise.resolve(fs.fstatSync(fd))
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
  Promise.resolve(fs.fsyncSync(fd))
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
  Promise.resolve(fs.ftruncateSync(fd, len))
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
  Promise.resolve(fs.lchmodSync(path, mode))
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
  Promise.resolve(fs.lchownSync(path, uid, gid))
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
  Promise.resolve(fs.linkSync(srcpath, dstpath))
)

// fs.lstat(srcpath, dstpath, callback)

export const lstat = (path) => (
  new Promise((success, failure) => {
    fs.lstat(path, (e) => {
      if (!e) return success()
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
  Promise.resolve(fs.mkdirSync(path, mode))
)

// fs.mkdtemp(prefix, callback)

export const mkdtemp = (prefix) => (
  new Promise((success, failure) => {
    fs.mkdtemp(prefix, (e) => {
      if (!e) return success()
      failure(e)
    })
  })
)

// fs.mkdtempSync(prefix)

export const mkdtempSync = (prefix) => (
  Promise.resolve(fs.mkdtempSync(prefix))
)

// fs.open(path, flags[, mode], callback)

export const open = (path, flags, mode) => (
  new Promise((success, failure) => {
    const c = (e) => {
      if (!e) return success()
      failure(e)
    }
    fs.open(path, flags, (mode || c), (mode ? c : undefined))
  })
)

// fs.openSync(path, flags[, mode])

export const openSync = (path, flags, mode) => (
  Promise.resolve(fs.openSync(path, flags, mode))
)

// fs.read(fd, buffer, offset, length, position)

export const read = (fd, buffer, offset, length, position) => (
  new Promise((success, failure) => {
    fs.read(fd, buffer, offset, length, position, (e) => {
      if (!e) return success()
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
      const d = fs.readFileSync(file, options)
      success(d)
    } catch (e) {
      failure(e)
    }
  })
)

// fs.readlink(path[, options])

export const readlink = (path, options) => (
  new Promise((success, failure) => {
    const c = (e, data) => {
      if (!e) return success(data)
      failure(e)
    }
    fs.readlink(path, (options || c), (options ? c : undefined))
  })
)

// fs.readlinkSync(path[, options])

export const readlinkSync = (path, options) => (
  Promise.resolve(fs.readlinkSync(path, options))
)

// fs.realpath(path[, options])

export const realpath = (path, options) => (
  new Promise((success, failure) => {
    const c = (e, data) => {
      if (!e) return success(data)
      failure(e)
    }
    fs.realpath(path, (options || c), (options ? c : undefined))
  })
)

// fs.realpathSync(path[, options])

export const realpathSync = (path, options) => (
  Promise.resolve(fs.realpathSync(path, options))
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
  Promise.resolve(fs.renameSync(oldPath, newPath))
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
  Promise.resolve(fs.rmdirSync(path))
)

// fs.stat(path)

export const stat = (path) => (
  new Promise((success, failure) => {
    fs.stat(path, (e) => {
      if (!e) return success()
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
  Promise.resolve(fs.truncateSync(path, len))
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
  Promise.resolve(fs.unlinkSync(path))
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
      fs.writeFileSync(file, data, options)
      success()
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
