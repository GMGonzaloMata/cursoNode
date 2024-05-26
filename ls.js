const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

async function ls (directory) {
  let files
  try {
    files = await fs.readdir(directory)
  } catch (err) {
    console.error(pc.red(`❌ Error al leer el directorio: ${directory}`, err))
    process.exit(1)
  }

  const filePromises = files.map(async file => {
    const filePath = path.join(directory, file)
    let stats
    try {
      stats = await fs.stat(filePath)
    } catch (err) {
      console.error(`Error al leer el archivo: ${filePath}`)
      console.error(err) // Imprime el error real
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size
    const fileModified = stats.mtime.toString()

    return `${pc.bgMagenta(fileType)} ${pc.blue(file.padEnd(20))} ${pc.green(fileSize.toString().padStart(20))} ${pc.yellow(fileModified)}`
  })

  const filesInfo = await Promise.all(filePromises)
  filesInfo.forEach(fileInfo => console.log(fileInfo))
}

const folder = process.argv[2] ?? '.'
ls(folder)
