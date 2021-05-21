import { Router } from 'express'
import PostController from '../controllers/post.controller.js'

const router = new Router()

router.post('/posts', PostController.createPost)
router.get('/posts', PostController.getPosts)
router.get('/post', PostController.getOnePost)
router.delete('/post/:id', PostController.deletePost)

export default router;