import { PostModel } from '../models/PostModel.js';

export const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const createPost = async (req, res) => {
    try {
        const newPost = req.body;

        const post = new PostModel(newPost);
        await post.save();

        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const updatePost = async (req, res) => {
    try {
        const updatePost = req.body;

        const post = await PostModel.findOneAndUpdate(
            { _id: updatePost._id },
            updatePost,
            { new: true }
        );
        console.log(updatePost)

        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const deletePost = async (req, res) => {
    try {
        const deletePost = req.body;
        const post = await PostModel.deleteOne({ _id: deletePost._id });
        console.log(post)
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
