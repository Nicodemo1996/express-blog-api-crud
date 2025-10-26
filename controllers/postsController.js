const posts = require('../data/posts');

// 🧩 Milestone 2 – mostra dati in arrivo
// 🧩 Milestone 3 – aggiunge un nuovo post
function store(req, res) {
  console.log("Dati ricevuti:", req.body);

  const { title, content, image, tags } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "title e content sono obbligatori" });
  }

  const newPost = {
    id: posts.length ? Math.max(...posts.map(p => p.id)) + 1 : 1,
    title,
    content,
    image: image || null,
    tags: tags || []
  };

  posts.push(newPost);
  res.status(201).json(newPost);
}

// 🧩 Milestone 4 – aggiornamento (update)
function update(req, res) {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);

  if (!post) {
    return res.status(404).json({ error: "Post non trovato" });
  }

  const { title, content, image, tags } = req.body;
  if (title) post.title = title;
  if (content) post.content = content;
  if (image) post.image = image;
  if (tags) post.tags = tags;

  res.json(post);
}

module.exports = { store, update };
