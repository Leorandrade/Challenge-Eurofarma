import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Em breve..."
            content="" 
          />
          <Post 
            author="Em breve..."
            content="" 
          />
        </main>
      </div>
    </div>
    
  )
}
