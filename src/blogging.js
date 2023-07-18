const endpoint = "https://jsonplaceholder.typicode.com"

function allPosts() {
  return fetch(`${endpoint}/posts`).then((r) => r.json())
}

function allUsers() {
  return fetch(`${endpoint}/users`).then((r) => r.json())
}

function getPost(id) {
  return getPostById(id)
    .then((post) => Promise.all([post, getPostComments(id)]))
    .then(([post, comments]) => Promise.all([post, comments, getUser(post.userId)]))
    .then(([post, comments, user]) => ({ ...post, comments: comments, user: user }))
}

function getPostById(id) {
  return fetch(`${endpoint}/posts/${id}`).then((r) => r.json())
}

function getPostComments(id) {
  return fetch(`${endpoint}/posts/${id}/comments`).then((r) => r.json())
}

function getUser(id) {
  return fetch(`${endpoint}/users/${id}`).then((r) => r.json())
}

function userPosts(id) {
  return fetch(`${endpoint}/users/${id}/posts`).then((r) => r.json())
}

function userAlbums(id) {
  return fetch(`${endpoint}/users/${id}/albums`).then((r) => r.json())
}
function albumPhotos(id) {
  return fetch(`${endpoint}/albums/${id}/photos`).then((r) => r.json())
}

export default { allPosts, allUsers, getPost, userPosts, userAlbums, albumPhotos }
