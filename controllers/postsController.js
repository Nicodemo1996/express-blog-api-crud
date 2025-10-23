const posts = require('../data/posts');

const index = (req, res) => {
  res.json(posts);
};

const show = (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);

  if (!post) {
    return res.status(404).json({ message: 'Post non trovato' });
  }

  res.json(post);
};

module.exports = {
  index,
  show
};
