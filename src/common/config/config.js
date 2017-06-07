
const dbUsername = process.env.MLAB_SKE48BLOGS_USERNAME
const dbPassword = process.env.MLAB_SKE48BLOGS_PASSWORD
const dbUrl = process.env.MLAB_SKE48BLOGS_URL || 'localhost:27017/ske48blogs'

// 'process.env.WEBSITE_HOSTNAME' is defined by webpack CLI
// to make the browser get this environment variable.
// ('https://vincenter02.herokuapp.com')
const websiteHostname = process.env.WEBSITE_HOSTNAME || 'http://localhost:3001'
export const mongodbUri = dbUsername
                        ? `mongodb://${dbUsername}:${dbPassword}@${dbUrl}`
                        : `mongodb://${dbUrl}`
export const port = process.env.PORT || 3001
export const apiURL = `${websiteHostname}/ske48_kenkyuusei_blogs`
export const pathnamePrefix = '/ske48_kenkyuusei_blogs'
