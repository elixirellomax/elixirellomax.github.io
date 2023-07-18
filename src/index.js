import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom"
import "./index.css"

import * as blogging from "./blogging"

import { PageNotFound } from "./PageNotFound"
import { Table } from "./Table"
import { Users } from "./Users"

let authService = {
  isAuthenticated: false,
  authenticate: function () {
    this.isAuthenticated = true
    return Promise.resolve()
  },
  logout: function () {
    this.isAuthenticated = false
    return Promise.resolve()
  },
}

function UserAlbums({ blogging: { userAlbums } }) {
  const { id } = useParams()

  const [albums, setAlbums] = useState([])

  function fetchUserAlbums() {
    console.log(this)
    userAlbums(id).then(setAlbums)
  }

  useEffect(fetchUserAlbums, [])

  return (
    <div className="p-32">
      <h2 className="text-2xl font-medium">User {id} Albums </h2>
      <h4 className="mb-4">User has {albums.length} albums</h4>
      <Table columns={["id", "title", "photos"]} items={albums} />
    </div>
  )
}

function UserPosts({ blogging: { userPosts } }) {
  const { id } = useParams()

  const [posts, setPosts] = useState([])

  function fetchUserPosts() {
    console.log(this)
    userPosts(id).then(setPosts)
  }

  useEffect(fetchUserPosts, [])

  return (
    <div className="p-32">
      <h2 className="text-2xl font-medium">User {id} Posts </h2>
      <h4 className="mb-4">User has {posts.length} posts</h4>
      <Table columns={["id", "title", "body"]} items={posts} />
    </div>
  )
}

function AlbumPhotos({ blogging: { albumPhotos } }) {
  const { id } = useParams()

  const [photos, setPhotos] = useState([])

  function fetchAlbumPhotos() {
    console.log(this)
    albumPhotos(id).then(setPhotos)
  }

  useEffect(fetchAlbumPhotos, [])

  return (
    <div className="p-32">
      <h2 className="text-2xl font-medium">Album {id} </h2>
      <h4 className="mb-4">Album has {photos.length} photos</h4>
      <div className="flex flex-row flex-wrap justify-center">
        {photos.map((photo) => (
          <div className="p-2  hover:scale-125 border-b-0 border-l-0">
            <img className="rounded-full" src={photo.thumbnailUrl} alt="d" />
          </div>
        ))}
      </div>
    </div>
  )
}

const root = document.getElementById("root")

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/users" element={<Users blogging={blogging} />} />
      <Route path="/users/:id/posts" element={<UserPosts blogging={blogging} />} />
      <Route path="/users/:id/albums" element={<UserAlbums blogging={blogging} />} />
      <Route path="/albums/:id/photos" element={<AlbumPhotos blogging={blogging} />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
)
