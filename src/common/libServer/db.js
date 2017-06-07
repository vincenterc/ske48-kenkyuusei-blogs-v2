import { MongoClient } from 'mongodb'

import { mongodbUri } from '../config/index'

const collection = 'blogs'

/**
 * Get the writers by generation
 * type Member = {
 *   id: string,
 *   jpnName: string,
 *   engName: string,
 * }
 * getMembersDB: (generation: number) => Promise<Array<Member>>
 */
const getMembersDB = async (generation) => {
  const db = await MongoClient.connect(mongodbUri)
  const col = db.collection(collection)

  // members = Array<{ writer: sting, name: string }>
  const members = await col.find({ generation }, { _id: 0, generation: 0, posts: 0 })
                           .sort({ writer: 1 })
                           .toArray()
  db.close()

  // membersHandled: Array<{ id: string, jpnName: string, engName: string }>
  const membersHandled = members.map((value) => {
    const valueHandled = {}
    valueHandled.id = value.writer
    valueHandled.jpnName = value.name
    const tempEngName = value.writer.toUpperCase()
    const tempEngNameArray = tempEngName.split('_')
    valueHandled.engName = `${tempEngNameArray[1]} ${tempEngNameArray[0]}`
    return valueHandled
  })
  return membersHandled
}

/**
 * Get postListInfo by writer
 * type Post = {
 *   id: string,
 *   date: string,
 *   title: string,
 * }
 * type PostListInfo: {
 *   writer: string,
 *   name: string,
 *   postList: Array<Post>
 * }
 * getPostListInfoDB: (writer: string) => Promise<PostListInfo>
 */
const getPostListInfoDB = async (writer) => {
  const db = await MongoClient.connect(mongodbUri)
  const col = db.collection(collection)

  const results = await col.aggregate([
    { $match: { writer } },
    { $unwind: '$posts' },
    { $sort: { 'posts.id': -1 } },
    { $group: {
      _id: '$_id',
      writer: { $first: '$writer' },
      name: { $first: '$name' },
      postList: { $push: '$posts' },
    } },
  ]).toArray()

  // postListInfo: { writer: string, name: string
  //                 postList: Array<{id: sting, date: string, title: string }>
  const postListInfo = results[0]
  db.close()
  return postListInfo
}

export {
  getMembersDB,
  getPostListInfoDB,
}
