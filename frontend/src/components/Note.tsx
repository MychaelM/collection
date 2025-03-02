import React from 'react'
import '../styles/Note.css'
import { Note as NoteType } from '../types'

type Props = { note: NoteType, onDelete: (id: number) => void }
export const Note = ({note, onDelete}: Props) => {
  const formattedDate = new Date(note.created_at).toLocaleDateString('en-US')

  return <div className="note-container">
    <p className="note-title">{note.title}</p>
    <p className="note-content">{note.content}</p>
    <p className="note-date">{formattedDate}</p>
    <button className="delete-button" onClick={() => onDelete(note.id)}>Delete</button>
  </div>
}