exports.createPost = (req, res, next) => {
    res.render('admin/post/create-post', {
        title: 'Create Post',
    })
}