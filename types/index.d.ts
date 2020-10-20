declare module 'sacred-fs' {
  // fs.access(path[, mode], callback)

  export function access (path: string | Buffer, mode?: number): Promise<void>

  // fs.accessSync(path[, mode])

  export function accessSync (path: string | Buffer, mode?: number): Promise<void>

  // fs.appendFile(file, data[, options], callback)

  export function appendFile (file: string | number | Buffer, data: string | Buffer, options?: string | object): Promise<void>

  // fs.appendFileSync(file, data[, options])

  export function appendFileSync (file: string | number | Buffer, data: string | Buffer, options?: string | object): Promise<void>

  // fs.chmod(path, mode, callback)

  export function chmod (path: string | Buffer, mode: string | number): Promise<void>

  // fs.chmodSync(path, mode)

  export function chmodSync (path: string | Buffer, mode: string | number): Promise<void>

  // fs.chown(path, uid, gid, callback)

  export function chown (path: string | Buffer, uid: number, gid: number): Promise<void>

  // fs.chownSync(path, uid, gid)

  export function chownSync (path: string | Buffer, uid: number, gid: number): Promise<void>

  // fs.close(path, uid, gid, callback)

  export function close (fd: number): Promise<void>

  // fs.closeSync(path, uid, gid)

  export function closeSync (fd: number): Promise<void>

  // fs.copyFile(path, mode, callback)

  export function copyFile (src: string | Buffer, dest: string | Buffer, flags?: number): Promise<void>

  // fs.copyFileSync(path, mode)

  export function copyFileSync (src: string | Buffer, dest: string | Buffer, flags?: number): Promise<void>

  // fs.createReadStream(path[, options])

  export function createReadStream (path: string | Buffer, options?: object): Promise<any> // <fs.ReadStream>

  // fs.createWriteStream(path[, options])

  export function createWriteStream (path: string | Buffer, options?: object): Promise<any> // <fs.WriteStream>

  /*
  fs.constants
  */

  // fs.exists(path, callback)

  /*
  *  Deprecated
  */
  export function exists (path: string | Buffer): Promise<any>

  // fs.existsSync(path)

  /*
  *  Deprecated
  */
  export function existsSync (path: string | Buffer): Promise<any>

  // fs.fchmod(fd, mode, callback)

  export function fchmod (fd: number, mode: string | number): Promise<void>

  // fs.fchmodSync(fd, mode)

  export function fchmodSync (fd: number, mode: string | number): Promise<void>

  // fs.fchown(fd, uid, gid, callback)

  export function fchown (fd: number, uid: number, gid: number): Promise<void>

  // fs.fchownSync(fd, uid, gid)

  export function fchownSync (fd: number, uid: number, gid: number): Promise<void>

  // fs.fdatasync(fd, callback)

  export function fdatasync (fd: number): Promise<void>

  // fs.fdatasyncSync(fd)

  export function fdatasyncSync (fd: number): Promise<void>

  // fs.fstat(fd, callback)

  export function fstat (fd: number, options?: object): Promise<any> // <fs.Stats>

  // fs.fstatSync(fd)

  export function fstatSync (fd: number, options?: object): Promise<any> // <fs.Stats>

  // fs.fsync(fd, callback)

  export function fsync (fd: number): Promise<void>

  // fs.fsyncSync(fd)

  export function fsyncSync (fd: number): Promise<void>

  // fs.ftruncate(fd, len, callback)

  export function ftruncate (fd: number, len: number): Promise<void>

  // fs.ftruncateSync(fd, len)

  export function ftruncateSync (fd: number, len: number): Promise<void>

  // fs.futimes(fd, atime, mtime, callback)

  export function futimes (fd: number, atime: number | string | Date, mtime: number | string | Date): Promise<void>

  // fs.futimesSync(fd, atime, mtime)

  export function futimesSync (fd: number, atime: number | string | Date, mtime: number | string | Date): Promise<void>

  // fs.lchmod(path, mode, callback)

  export function lchmod (path: string | Buffer, mode: number): Promise<void>

  // fs.lchmodSync(path, mode)

  export function lchmodSync (path: string | Buffer, mode: number): Promise<void>

  // fs.lchown(path, mode, callback)

  export function lchown (path: string | Buffer, uid: number, gid: number): Promise<void>

  // fs.lchownSync(path, mode)

  export function lchownSync (path: string | Buffer, uid: number, gid: number): Promise<void>

  // fs.link(srcpath, dstpath, callback)

  export function link (srcpath: string | Buffer, dstpath: string | Buffer): Promise<void>

  // fs.linkSync(srcpath, dstpath)

  export function linkSync (srcpath: string | Buffer, dstpath: string | Buffer): Promise<void>

  // fs.lstat(srcpath, dstpath, callback)

  export function lstat (path: string | Buffer, options?: object): Promise<any> // <fs.Stats>

  // fs.lstatSync(srcpath, dstpath)

  export function lstatSync (path: string | Buffer, options?: object): Promise<any> // <fs.Stats>

  // fs.mkdir(path[, mode], callback)

  export function mkdir (path: string | Buffer, options?: object): Promise<void>

  // fs.mkdirSync(path, mode)

  export function mkdirSync (path: string | Buffer, options?: object): Promise<void>

  // fs.mkdtemp(prefix, callback)

  export function mkdtemp (prefix: string | Buffer, options?: object): Promise<void>

  // fs.mkdtempSync(prefix)

  export function mkdtempSync (prefix: string, options?: object): Promise<void>

  // fs.open(path, flags[, mode], callback)

  export function open (path: string | Buffer, flags?: number, mode?: number): Promise<void>

  // fs.openSync(path, flags[, mode])

  export function openSync (path: string | Buffer, flags?: number, mode?: number): Promise<void>

  // fs.read(fd, buffer, offset, length, position)

  export function read (fd: number, buffer: Buffer, offset: number, length: number, position: number): Promise<void>

  // fs.readSync(fd, buffer, offset, length, position)

  export function readSync (fd: number, buffer: Buffer, offset: number, length: number, position: number): Promise<void>

  // fs.readdir(path[, options], callback)

  export function readdir (path: string | Buffer, options?: object): Promise<void>

  // fs.readdirSync(path[, options])

  export function readdirSync (path: string | Buffer, options?: object): Promise<void>

  // fs.readFile(file[, options])

  export function readFile (file: string | number | object | Buffer, options?: string | object): Promise<string | Buffer>

  // fs.readFileSync(file[, options])

  export function readFileSync (file: string | number | object | Buffer, options?: string | object): Promise<string | Buffer>

  // fs.readlink(path[, options])

  export function readlink (path: string | object | Buffer, options?: string | object): Promise<string | Buffer>

  // fs.readlinkSync(path[, options])

  export function readlinkSync (path: string | object | Buffer, options?: string | object): Promise<string | Buffer>

  // fs.realpath(path[, options])

  export function realpath (path: string | Buffer, options?: string | object): Promise<string | Buffer>

  // fs.realpathSync(path[, options])

  export function realpathSync (path: string | Buffer, options?: string | object): Promise<string | Buffer>

  // fs.rename(oldPath, newPath)

  export function rename (oldPath: string | Buffer, newPath: string | Buffer): Promise<void>

  // fs.renameSync(oldPath, newPath)

  export function renameSync (oldPath: string | Buffer, newPath: string | Buffer): Promise<void>

  // fs.realpath(path)

  export function rmdir (path: string | Buffer): Promise<void>

  // fs.rmdirSync(path)

  export function rmdirSync (path: string | Buffer): Promise<void>

  // fs.stat(path)

  export function stat (path: string | Buffer): Promise<any> // <fs.Stats>

  // fs.statSync(path)

  export function statSync (path: string | Buffer): Promise<any> // <fs.Stats>

  // fs.symlink(target, path[, type])

  export function symlink (target: string | Buffer, path: string | Buffer, type: string): Promise<void>

  // fs.symlinkSync(target, path[, type])

  export function symlinkSync (target: string | Buffer, path: string | Buffer, type: string): Promise<void>

  // fs.truncate(path, len, callback)

  export function truncate (path: string | Buffer, len: number): Promise<void>

  // fs.truncateSync(path, len)

  export function truncateSync (path: string | Buffer, len: number): Promise<void>

  // fs.truncate(path, callback)

  export function unlink (path: string | Buffer): Promise<void>

  // fs.unlinkSync(path)

  export function unlinkSync (path: string | Buffer): Promise<void>

  // fs.unwatchFile(filename[, listener])

  export function unwatchFile (filename: string | Buffer, listener?: () => void): Promise<void>

  // fs.utimes(path, atime, mtime, callback)

  export function utimes (path: string | Buffer, atime: number | string | Date, mtime: number | string | Date): Promise<void>

  // fs.utimesSync(path, atime, mtime)

  export function utimesSync (path: string | Buffer, atime: number | string | Date, mtime: number | string | Date): Promise<void>

  // fs.watch(filename[, options][, listener])

  export function watch (filename: string | Buffer, options?: string | object, listener?: () => void): Promise<any> // <fs.FSWatcher>

  // fs.watchFile(filename[, options], listener)

  export function watchFile (filename: string | Buffer, options?: string | object, listener?: () => void): Promise<any> // <fs.StatWatcher>

  // fs.write(fd, buffer, offset, length[, position], callback)
  // fs.write(fd, data[, position[, encoding]], callback)

  export function write (fd: number, buffer: string | object | Buffer, offset?: number, length?: number, position?: number): Promise<void>

  export function write (fd: number, data: string | object, position?: number, encoding?: number): Promise<void>

  // fs.writeFile(file, data[, options], callback)
  // fs.writeFileSync(file, data[, options])

  export function writeFile (file: string, data: string | Buffer, options?: string | object): Promise<void>

  export function writeFileSync (file: string, data: string | Buffer, options?: string | object): Promise<void>

  // fs.writeSync(fd, buffer, offset, length[, position])
  // fs.writeSync(fd, data[, position[, encoding]])

  export function writeSync (fd: number, buffer: string | object | Buffer, offset?: number, length?: number, position?: number): Promise<void>

  export function writeSync (fd: number, data: string | object, position?: number, encoding?: number): Promise<void>

  // File Access Constants

  export const F_OK: number // Flag indicating that the file is visible to the calling process.
  export const R_OK: number // Flag indicating that the file can be read by the calling process.
  export const W_OK: number // Flag indicating that the file can be written by the calling process.
  export const X_OK: number // Flag indicating that the file can be executed by the calling process.

  export const constants: object
}
