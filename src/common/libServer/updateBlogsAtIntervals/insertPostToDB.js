import { MongoClient } from 'mongodb'

// insert the document: {writer: string, name: string, generation: number
//                       posts: Array<{id: string, date: string, title: string}>

/**
 * Insert post in the DB
 * type Post = {
 *   id: string,
 *   date: string,
 *   title: string,
 * }
 *
 * insertPostToDB: (mongodbUri: string,
 *                  collection: string,
 *                  writer: string,
 *                  name: string,
 *                  generation: string,
 *                  post: Post) => void
 */
const insertPostToDB = async (mongodbUri, collection,
                              writer, name, generation, post) => {
  const db = await MongoClient.connect(mongodbUri)
  await db.collection(collection).update(
    { writer },
    { $set: { name, generation },
      $push: { posts: post } },
    { upsert: true })
  db.close()
}

export default insertPostToDB
