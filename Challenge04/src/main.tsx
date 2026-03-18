import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BooksStackPage from './BookStackPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BooksStackPage />
  </StrictMode>,
)
