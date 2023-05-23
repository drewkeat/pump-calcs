import fs from "fs/promises"
import path from "path"

const dbPath = path.join(process.cwd(),'dbTmp')

const getCollection= async (collectionName) => await fs.readFile(path.join(dbPath, `${collectionName}.json`)).then(data => JSON.parse(data))

const writeCollection = async (collectionName, data) => {
  await fs.writeFile(path.join(dbPath, `${collectionName}.json`), JSON.stringify(data))
  return await getCollection(collectionName)
}

export {getCollection, writeCollection}
