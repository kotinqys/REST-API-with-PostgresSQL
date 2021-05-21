import db from '../db.js'

class PostController{
    async createPost(req, res){
        const { title,content,userId} = req.body
        const newPost = await db.query('INSERT INTO post(title,content,user_id) VALUES($1, $2, $3) RETURNING *', [title, content,userId])
        res.json(newPost.rows[0])
    }
    async getPosts(req, res){
        const posts= await db.query('SELECT * FROM post')
        res.json(posts.rows)
    }
    async getOnePost(req, res){
        const id = req.query.id
        const post = await db.query('SELECT * FROM post WHERE id = $1', [id])
        res.json(post.rows[0])
    }
    async deletePost(req, res){
        const id = req.params.id
        const post = await db.query('DELETE FROM post WHERE id = $1', [id])
        res.json(post.rows[0])
    }
}

export default new PostController()