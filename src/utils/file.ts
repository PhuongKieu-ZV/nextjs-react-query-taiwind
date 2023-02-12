/* eslint-disable no-unused-vars */
declare global {
  interface Navigator {
    msSaveBlob?: (blob: any, defaultName?: string) => boolean
  }
}

export function saveBlob(
  data: Blob,
  filename: string,
  mime = 'application/octet-stream'
) {
  const blob = new Blob([data], { type: mime })
  if (typeof window.navigator.msSaveBlob !== 'undefined') {
    // IE workaround for "HTML7007: One or more blob URLs were
    // revoked by closing the blob for which they were created.
    // These URLs will no longer resolve as the data backing
    // the URL has been freed."
    window.navigator.msSaveBlob(blob, filename)
  } else {
    const blobURL = window.URL.createObjectURL(blob)
    const tempLink = document.createElement('a')
    tempLink.style.display = 'none'
    tempLink.href = blobURL
    tempLink.setAttribute('download', filename)

    // Safari thinks _blank anchor are pop ups. We only want to set _blank
    // target if the browser does not support the HTML5 download attribute.
    // This allows you to download files in desktop safari if pop up blocking
    // is enabled.
    if (typeof tempLink.download === 'undefined') {
      tempLink.setAttribute('target', '_blank')
    }

    document.body.appendChild(tempLink)
    tempLink.click()
    document.body.removeChild(tempLink)
    window.URL.revokeObjectURL(blobURL)
  }
}

export const downloadFile = (file: string) => {
  const fileName = file.substr(file.lastIndexOf('/') + 1)
  const element = document.createElement('a')
  element.setAttribute('href', file)
  element.setAttribute('download', fileName)

  element.style.display = 'none'

  document.body.appendChild(element)

  element.click()
  document.body.removeChild(element)
}

export function getUrlImageFromBlob(imageBlob: Blob) {
  const urlCreator = window.URL || window.webkitURL
  const srcImage = urlCreator.createObjectURL(imageBlob)
  return srcImage
}
