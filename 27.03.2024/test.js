import {getpost} from './get-post-service.js'

const allpostsurl='https://jsonplaceholder.typicode.com/posts'

export const posts=await getpost(allpostsurl)