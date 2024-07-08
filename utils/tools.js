export function isset(val) {
  return typeof val !== 'undefined' && val !== null && val !== '' && val !== {}
}

export function generateFile(file) {
  const fileLink = document.createElement('a')

  fileLink.href = file.filepath
  fileLink.setAttribute('download', file.filename)
  fileLink.setAttribute('target', '_blank')
  document.body.appendChild(fileLink)

  fileLink.click()
}
