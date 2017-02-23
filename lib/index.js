'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.constants = exports.X_OK = exports.W_OK = exports.R_OK = exports.F_OK = exports.writeSync = exports.writeFileSync = exports.writeFile = exports.write = exports.watchFile = exports.watch = exports.utimesSync = exports.utimes = exports.unwatchFile = exports.unlinkSync = exports.unlink = exports.truncateSync = exports.truncate = exports.symlinkSync = exports.symlink = exports.statSync = exports.stat = exports.rmdirSync = exports.rmdir = exports.renameSync = exports.rename = exports.realpathSync = exports.realpath = exports.readlinkSync = exports.readlink = exports.readFileSync = exports.readFile = exports.readdirSync = exports.readdir = exports.readSync = exports.read = exports.openSync = exports.open = exports.mkdtempSync = exports.mkdtemp = exports.mkdirSync = exports.mkdir = exports.lstatSync = exports.lstat = exports.linkSync = exports.link = exports.lchownSync = exports.lchown = exports.lchmodSync = exports.lchmod = exports.futimesSync = exports.futimes = exports.ftruncateSync = exports.ftruncate = exports.fsyncSync = exports.fsync = exports.fstatSync = exports.fstat = exports.fdatasyncSync = exports.fdatasync = exports.fchownSync = exports.fchown = exports.fchmodSync = exports.fchmod = exports.existsSync = exports.exists = exports.createWriteStream = exports.createReadStream = exports.closeSync = exports.close = exports.chownSync = exports.chown = exports.chmodSync = exports.chmod = exports.appendFileSync = exports.appendFile = exports.accessSync = exports.access = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// fs.access(path[, mode], callback)

var access = exports.access = function access(path, mode) {
  return new Promise(function (resolve, reject) {
    _fs2.default.access(path, mode, function (e) {
      return !e ? resolve() : reject(e);
    });
  });
};

// fs.accessSync(path[, mode])

var accessSync = exports.accessSync = function accessSync(path, mode) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(_fs2.default.accessSync(path, mode));
    } catch (e) {
      reject(e);
    }
  });
};

// fs.appendFile(file, data[, options], callback)

var appendFile = exports.appendFile = function appendFile(file, data, options) {
  return new Promise(function (resolve, reject) {
    _fs2.default.appendFile(file, data, options, function (e) {
      return !e ? resolve() : reject(e);
    });
  });
};

// fs.appendFileSync(file, data[, options])

var appendFileSync = exports.appendFileSync = function appendFileSync(file, data, options) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(_fs2.default.appendFileSync(file, data, options));
    } catch (e) {
      reject(e);
    }
  });
};

// fs.chmod(path, mode, callback)

var chmod = exports.chmod = function chmod(path, mode) {
  return new Promise(function (resolve, reject) {
    _fs2.default.chmod(path, mode, function (e) {
      return !e ? resolve() : reject(e);
    });
  });
};

// fs.chmodSync(path, mode)

var chmodSync = exports.chmodSync = function chmodSync(path, mode) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(_fs2.default.chmodSync(path, mode));
    } catch (e) {
      reject(e);
    }
  });
};

// fs.chown(path, uid, gid, callback)

var chown = exports.chown = function chown(path, uid, gid) {
  return new Promise(function (resolve, reject) {
    _fs2.default.chown(path, uid, gid, function (e) {
      return !e ? resolve() : reject(e);
    });
  });
};

// fs.chownSync(path, uid, gid)

var chownSync = exports.chownSync = function chownSync(path, uid, gid) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(_fs2.default.chownSync(path, uid, gid));
    } catch (e) {
      reject(e);
    }
  });
};

// fs.close(path, uid, gid, callback)

var close = exports.close = function close(fd) {
  return new Promise(function (resolve, reject) {
    _fs2.default.close(fd, function (e) {
      return !e ? resolve() : reject(e);
    });
  });
};

// fs.closeSync(path, uid, gid)

var closeSync = exports.closeSync = function closeSync(fd) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(_fs2.default.closeSync(fd));
    } catch (e) {
      reject(e);
    }
  });
};

// fs.createReadStream(path[, options])

var createReadStream = exports.createReadStream = function createReadStream(path, options) {
  return Promise.resolve(_fs2.default.createReadStream(path, options));
};

// fs.createWriteStream(path[, options])

var createWriteStream = exports.createWriteStream = function createWriteStream(path, options) {
  return Promise.resolve(_fs2.default.createWriteStream(path, options));
};

/*
fs.constants
*/

// fs.exists(path, callback)

/*
 *  Deprecated
 */
var exists = exports.exists = function exists(path) {
  return new Promise(function (resolve) {
    _fs2.default.exists(path, resolve);
  });
};

// fs.existsSync(path)

/*
 *  Deprecated
 */
var existsSync = exports.existsSync = function existsSync(path) {
  return Promise.resolve(_fs2.default.existsSync(path));
};

// fs.fchmod(fd, mode, callback)

var fchmod = exports.fchmod = function fchmod(fd, mode) {
  return new Promise(function (resolve, reject) {
    _fs2.default.fchmod(fd, mode, function (e) {
      return !e ? resolve() : reject(e);
    });
  });
};

// fs.fchmodSync(fd, mode)

var fchmodSync = exports.fchmodSync = function fchmodSync(fd, mode) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(_fs2.default.fchmodSync(fd, mode));
    } catch (e) {
      reject(e);
    }
  });
};

// fs.fchown(fd, uid, gid, callback)

var fchown = exports.fchown = function fchown(fd, uid, gid) {
  return new Promise(function (resolve, reject) {
    _fs2.default.fchown(fd, uid, gid, function (e) {
      return !e ? resolve() : reject(e);
    });
  });
};

// fs.fchownSync(fd, uid, gid)

var fchownSync = exports.fchownSync = function fchownSync(fd, uid, gid) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(_fs2.default.fchownSync(fd, uid, gid));
    } catch (e) {
      reject(e);
    }
  });
};

// fs.fdatasync(fd, callback)

var fdatasync = exports.fdatasync = function fdatasync(fd) {
  return new Promise(function (resolve, reject) {
    _fs2.default.fdatasync(fd, function (e) {
      return !e ? resolve() : reject(e);
    });
  });
};

// fs.fdatasyncSync(fd)

var fdatasyncSync = exports.fdatasyncSync = function fdatasyncSync(fd) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(_fs2.default.fdatasyncSync(fd));
    } catch (e) {
      reject(e);
    }
  });
};

// fs.fstat(fd, callback)

var fstat = exports.fstat = function fstat(fd) {
  return new Promise(function (resolve, reject) {
    _fs2.default.fstat(fd, function (e, stats) {
      return !e ? resolve(stats) : reject(e);
    });
  });
};

// fs.fstatSync(fd)

var fstatSync = exports.fstatSync = function fstatSync(fd) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(_fs2.default.fstatSync(fd));
    } catch (e) {
      reject(e);
    }
  });
};

// fs.fsync(fd, callback)

var fsync = exports.fsync = function fsync(fd) {
  return new Promise(function (resolve, reject) {
    _fs2.default.fsync(fd, function (e) {
      return !e ? resolve() : reject(e);
    });
  });
};

// fs.fsyncSync(fd)

var fsyncSync = exports.fsyncSync = function fsyncSync(fd) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(_fs2.default.fsyncSync(fd));
    } catch (e) {
      reject(e);
    }
  });
};

// fs.ftruncate(fd, len, callback)

var ftruncate = exports.ftruncate = function ftruncate(fd, len) {
  return new Promise(function (resolve, reject) {
    _fs2.default.ftruncate(fd, len, function (e) {
      return !e ? resolve() : reject(e);
    });
  });
};

// fs.ftruncateSync(fd, len)

var ftruncateSync = exports.ftruncateSync = function ftruncateSync(fd, len) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(_fs2.default.ftruncateSync(fd, len));
    } catch (e) {
      reject(e);
    }
  });
};

// fs.futimes(fd, atime, mtime, callback)

var futimes = exports.futimes = function futimes(fd, atime, mtime) {
  return new Promise(function (resolve, reject) {
    _fs2.default.futimes(fd, atime, mtime, function (e) {
      return !e ? resolve() : reject(e);
    });
  });
};

// fs.futimesSync(fd, atime, mtime)

var futimesSync = exports.futimesSync = function futimesSync(fd, atime, mtime) {
  return Promise.resolve(_fs2.default.futimesSync(fd, atime, mtime));
};

// fs.lchmod(path, mode, callback)

var lchmod = exports.lchmod = function lchmod(path, mode) {
  return new Promise(function (resolve, reject) {
    _fs2.default.lchmod(path, mode, function (e) {
      return !e ? resolve() : reject(e);
    });
  });
};

// fs.lchmodSync(path, mode)

var lchmodSync = exports.lchmodSync = function lchmodSync(path, mode) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(_fs2.default.lchmodSync(path, mode));
    } catch (e) {
      reject(e);
    }
  });
};

// fs.lchown(path, mode, callback)

var lchown = exports.lchown = function lchown(path, uid, gid) {
  return new Promise(function (resolve, reject) {
    _fs2.default.lchown(path, uid, gid, function (e) {
      return !e ? resolve() : reject(e);
    });
  });
};

// fs.lchownSync(path, mode)

var lchownSync = exports.lchownSync = function lchownSync(path, uid, gid) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(_fs2.default.lchownSync(path, uid, gid));
    } catch (e) {
      reject(e);
    }
  });
};

// fs.link(srcpath, dstpath, callback)

var link = exports.link = function link(srcpath, dstpath) {
  return new Promise(function (resolve, reject) {
    _fs2.default.link(srcpath, dstpath, function (e) {
      return !e ? resolve() : reject(e);
    });
  });
};

// fs.linkSync(srcpath, dstpath)

var linkSync = exports.linkSync = function linkSync(srcpath, dstpath) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(_fs2.default.linkSync(srcpath, dstpath));
    } catch (e) {
      reject(e);
    }
  });
};

// fs.lstat(srcpath, dstpath, callback)

var lstat = exports.lstat = function lstat(path) {
  return new Promise(function (resolve, reject) {
    _fs2.default.lstat(path, function (e, stats) {
      return !e ? resolve(stats) : reject(e);
    });
  });
};

// fs.lstatSync(srcpath, dstpath)

var lstatSync = exports.lstatSync = function lstatSync(path) {
  return Promise.resolve(_fs2.default.lstatSync(path));
};

// fs.mkdir(path[, mode], callback)

var mkdir = exports.mkdir = function mkdir(path, mode) {
  return new Promise(function (resolve, reject) {
    _fs2.default.mkdir(path, mode, function (e) {
      return !e ? resolve() : reject(e);
    });
  });
};

// fs.mkdirSync(path, mode)

var mkdirSync = exports.mkdirSync = function mkdirSync(path, mode) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(_fs2.default.mkdirSync(path, mode));
    } catch (e) {
      reject(e);
    }
  });
};

// fs.mkdtemp(prefix, callback)

var mkdtemp = exports.mkdtemp = function mkdtemp(prefix) {
  return new Promise(function (resolve, reject) {
    _fs2.default.mkdtemp(prefix, function (e, folder) {
      return !e ? resolve(folder) : reject(e);
    });
  });
};

// fs.mkdtempSync(prefix)

var mkdtempSync = exports.mkdtempSync = function mkdtempSync(prefix) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(_fs2.default.mkdtempSync(prefix));
    } catch (e) {
      reject(e);
    }
  });
};

// fs.open(path, flags[, mode], callback)

var open = exports.open = function open(path, flags, mode) {
  return new Promise(function (resolve, reject) {
    _fs2.default.open(path, flags, mode, function (e, fd) {
      return !e ? resolve(fd) : reject(e);
    });
  });
};

// fs.openSync(path, flags[, mode])

var openSync = exports.openSync = function openSync(path, flags, mode) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(_fs2.default.openSync(path, flags, mode));
    } catch (e) {
      reject(e);
    }
  });
};

// fs.read(fd, buffer, offset, length, position)

var read = exports.read = function read(fd, buffer, offset, length, position) {
  return new Promise(function (resolve, reject) {
    _fs2.default.read(fd, buffer, offset, length, position, function (e, bytesRead, buffer) {
      return !e ? resolve({ bytesRead: bytesRead, buffer: buffer }) : reject(e);
    });
  });
};

// fs.readSync(fd, buffer, offset, length, position)

var readSync = exports.readSync = function readSync(fd, buffer, offset, length, position) {
  return Promise.resolve(_fs2.default.readSync(fd, buffer, offset, length, position));
};

// fs.readdir(path[, options], callback)

var readdir = exports.readdir = function readdir(path, options) {
  return new Promise(function (resolve, reject) {
    _fs2.default.read(path, options, function (e) {
      return !e ? resolve() : reject(e);
    });
  });
};

// fs.readdirSync(path[, options])

var readdirSync = exports.readdirSync = function readdirSync(path, options) {
  return Promise.resolve(_fs2.default.readdirSync(path, options));
};

// fs.readFile(file[, options])

var readFile = exports.readFile = function readFile(file, options) {
  return new Promise(function (resolve, reject) {
    _fs2.default.readFile(file, options, function (e, data) {
      return !e ? resolve(data) : reject(e);
    });
  });
};

// fs.readFileSync(file[, options])

var readFileSync = exports.readFileSync = function readFileSync(file, options) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(_fs2.default.readFileSync(file, options));
    } catch (e) {
      reject(e);
    }
  });
};

// fs.readlink(path[, options])

var readlink = exports.readlink = function readlink(path, options) {
  return new Promise(function (resolve, reject) {
    _fs2.default.readlink(path, options, function (e, linkString) {
      return !e ? resolve(linkString) : reject(e);
    });
  });
};

// fs.readlinkSync(path[, options])

var readlinkSync = exports.readlinkSync = function readlinkSync(path, options) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(_fs2.default.readlinkSync(path, options));
    } catch (e) {
      reject(e);
    }
  });
};

// fs.realpath(path[, options])

var realpath = exports.realpath = function realpath(path, options) {
  return new Promise(function (resolve, reject) {
    _fs2.default.realpath(path, options, function (e, resolvedPath) {
      return !e ? resolve(resolvedPath) : reject(e);
    });
  });
};

// fs.realpathSync(path[, options])

var realpathSync = exports.realpathSync = function realpathSync(path, options) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(_fs2.default.realpathSync(path, options));
    } catch (e) {
      reject(e);
    }
  });
};

// fs.rename(oldPath, newPath)

var rename = exports.rename = function rename(oldPath, newPath) {
  return new Promise(function (resolve, reject) {
    _fs2.default.rename(oldPath, newPath, function (e) {
      return !e ? resolve() : reject(e);
    });
  });
};

// fs.renameSync(oldPath, newPath)

var renameSync = exports.renameSync = function renameSync(oldPath, newPath) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(_fs2.default.renameSync(oldPath, newPath));
    } catch (e) {
      reject(e);
    }
  });
};

// fs.realpath(path)

var rmdir = exports.rmdir = function rmdir(path) {
  return new Promise(function (resolve, reject) {
    _fs2.default.rmdir(path, function (e) {
      return !e ? resolve() : reject(e);
    });
  });
};

// fs.rmdirSync(path)

var rmdirSync = exports.rmdirSync = function rmdirSync(path) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(_fs2.default.rmdirSync(path));
    } catch (e) {
      reject(e);
    }
  });
};

// fs.stat(path)

var stat = exports.stat = function stat(path) {
  return new Promise(function (resolve, reject) {
    _fs2.default.stat(path, function (e, stat) {
      return !e ? resolve(stat) : reject(e);
    });
  });
};

// fs.statSync(path)

var statSync = exports.statSync = function statSync(path) {
  return Promise.resolve(_fs2.default.statSync(path));
};

// fs.symlink(target, path[, type])

var symlink = exports.symlink = function symlink(target, path, type) {
  return new Promise(function (resolve, reject) {
    _fs2.default.symlink(target, path, type, function (e) {
      return !e ? resolve() : reject(e);
    });
  });
};

// fs.symlinkSync(target, path[, type])

var symlinkSync = exports.symlinkSync = function symlinkSync(target, path, type) {
  return Promise.resolve(_fs2.default.symlinkSync(target, path, type));
};

// fs.truncate(path, len, callback)

var truncate = exports.truncate = function truncate(path, len) {
  return new Promise(function (resolve, reject) {
    _fs2.default.truncate(path, len, function (e) {
      return !e ? resolve() : reject(e);
    });
  });
};

// fs.truncateSync(path, len)

var truncateSync = exports.truncateSync = function truncateSync(path, len) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(_fs2.default.truncateSync(path, len));
    } catch (e) {
      reject(e);
    }
  });
};

// fs.truncate(path, callback)

var unlink = exports.unlink = function unlink(path) {
  return new Promise(function (resolve, reject) {
    _fs2.default.unlink(path, function (e) {
      return !e ? resolve() : reject(e);
    });
  });
};

// fs.unlinkSync(path)

var unlinkSync = exports.unlinkSync = function unlinkSync(path) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(_fs2.default.unlinkSync(path));
    } catch (e) {
      reject(e);
    }
  });
};

// fs.unwatchFile(filename[, listener])

var unwatchFile = exports.unwatchFile = function unwatchFile(filename, listener) {
  return Promise.resolve(_fs2.default.unwatchFile(filename, listener));
};

// fs.utimes(path, atime, mtime, callback)

var utimes = exports.utimes = function utimes(path, atime, mtime) {
  return new Promise(function (resolve, reject) {
    _fs2.default.utimes(path, atime, mtime, function (e) {
      return !e ? resolve() : reject(e);
    });
  });
};

// fs.utimesSync(path, atime, mtime)

var utimesSync = exports.utimesSync = function utimesSync(path, atime, mtime) {
  return Promise.resolve(_fs2.default.utimesSync(path, atime, mtime));
};

// fs.watch(filename[, options][, listener])

var watch = exports.watch = function watch(filename, options, listener) {
  return Promise.resolve(_fs2.default.watch(filename, options, listener));
};

// fs.watchFile(filename[, options], listener)

var watchFile = exports.watchFile = function watchFile(filename, options, listener) {
  return Promise.resolve(_fs2.default.watchFile(filename, options, listener));
};

// fs.write(fd, buffer, offset, length[, position], callback)
// fs.write(fd, data[, position[, encoding]], callback)

var write = exports.write = function write(fd, data, v1, v2, v3) {
  return new Promise(function (resolve, reject) {
    var c = function c(e) {
      return !e ? resolve() : reject(e);
    };
    if (data instanceof Buffer) {
      _fs2.default.write(fd, data, v1, v2, v3, c);
    } else {
      _fs2.default.write(fd, data, v1, v2, c);
    }
  });
};

// fs.writeFile(file, data[, options], callback)
// fs.writeFileSync(file, data[, options])

var writeFile = exports.writeFile = function writeFile(file, data, options) {
  return new Promise(function (resolve, reject) {
    _fs2.default.writeFile(file, data, options, function (e) {
      return !e ? resolve() : reject(e);
    });
  });
};

var writeFileSync = exports.writeFileSync = function writeFileSync(file, data, options) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(_fs2.default.writeFileSync(file, data, options));
    } catch (e) {
      reject(e);
    }
  });
};

// fs.writeSync(fd, buffer, offset, length[, position])
// fs.writeSync(fd, data[, position[, encoding]])

var writeSync = exports.writeSync = function writeSync(fd, data, v1, v2, v3) {
  return new Promise(function (resolve, reject) {
    if (data instanceof Buffer) {
      _fs2.default.writeSync(fd, data, v1, v2, v3);
    } else {
      _fs2.default.writeSync(fd, data, v1, v2);
    }
  });
};

// File Access Constants

var F_OK = exports.F_OK = _fs2.default.F_OK; // Flag indicating that the file is visible to the calling process.
var R_OK = exports.R_OK = _fs2.default.R_OK; // Flag indicating that the file can be read by the calling process.
var W_OK = exports.W_OK = _fs2.default.W_OK; // Flag indicating that the file can be written by the calling process.
var X_OK = exports.X_OK = _fs2.default.X_OK; // Flag indicating that the file can be executed by the calling process.

var constants = exports.constants = _fs2.default.constants;