import debug from 'debug'

import {
  exec
} from 'child_process'

const log = debug('@sequencemedia/sacred-fs:build:gulp:pre-commit')

log('`@sequencemedia/sacred-fs` is awake')

const PACKAGE_VERSION_CHANGES = /-+\s+"version":\s"(\d+\.\d+\.\d+)",\s+\++\s+"version":\s"(\d+\.\d+\.\d+)",\s+/s

const HAS_STAGED_CHANGES = /Changes to be committed/s

const NOT_STAGED_CHANGES = /Changes not staged for commit/s

const OPTIONS = {
  maxBuffer: 1024 * 500
}

export function hasPackageVersionChanges () {
  return (
    new Promise((resolve, reject) => {
      exec('git diff HEAD origin/master package.json', OPTIONS, (e, v) => (!e) ? resolve(PACKAGE_VERSION_CHANGES.test(v)) : reject(e))
    })
  )
}

export function notPackageVersionChanges () {
  return (
    new Promise((resolve, reject) => {
      exec('git diff HEAD origin/master package.json', OPTIONS, (e, v) => (!e) ? resolve(PACKAGE_VERSION_CHANGES.test(v) !== true) : reject(e))
    })
  )
}

export function hasStagedChanges () {
  return (
    new Promise((resolve, reject) => {
      exec('git status', OPTIONS, (e, v) => (!e) ? resolve(HAS_STAGED_CHANGES.test(v)) : reject(e))
    })
  )
}

export function notStagedChanges () {
  return (
    new Promise((resolve, reject) => {
      exec('git status', OPTIONS, (e, v) => (!e) ? resolve(NOT_STAGED_CHANGES.test(v)) : reject(e))
    })
  )
}

export function notPushedChanges () {
  return (
    new Promise((resolve, reject) => {
      exec('git log origin/master..HEAD', OPTIONS, (e, v) => (!e) ? resolve(!!v) : reject(e))
    })
  )
}

export function patchPackageVersion () {
  return (
    new Promise((resolve, reject) => {
      exec('npm version patch -m %s -n --no-git-tag-version --no-verify', OPTIONS, (e) => (!e) ? resolve() : reject(e))
    })
  )
}

export function addPackageVersionChanges () {
  return (
    new Promise((resolve, reject) => {
      exec('git add package.json package-lock.json', OPTIONS, (e) => (!e) ? resolve() : reject(e))
    })
  )
}

export default async function preCommit () {
  log('pre-commit')

  try {
    if (await notStagedChanges()) return

    if (await hasStagedChanges()) {
      if (await notPackageVersionChanges()) {
        await patchPackageVersion()
        await addPackageVersionChanges()
      }
    }
  } catch ({ code = 'NONE', message = 'No error message defined' }) {
    log({ code, message })
  }
}
