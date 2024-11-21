import express from 'express'

app.get('/posts', async (req, res) => {
    const post = await getTodosPosts();
    res.status(200).json(posts);
});