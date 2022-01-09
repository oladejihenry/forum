exports.getIndex = (req, res, next) => {
    res.render('admin/home', {
        title: 'Admin Page',
    })
}

exports.createBlogPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;

    res.status(201).json({
        message: 'Post created successfully!',
        post: {id: new Date().toISOString(), title: title, content: content}
    });
}