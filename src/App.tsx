import { Header } from "./components/Header.tsx"
import { Post, PostType } from "./components/Post.tsx"
import { Sidebar } from "./components/Sidebar.tsx"

import styles from './App.module.css'

import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/gabriielsl.png",
      name: "Gabriel Lima",
      role: "Web Developer",
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2025-01-28 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/erickwendel.png",
      name: "Erick Wendel",
      role: "Full Stack Developer",
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2025-01-10 20:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          { posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          }) }
        </main>
      </div>
    </div>
  )
}