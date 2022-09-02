import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./Note";
import notes from "../notes"

function createNote(note) {
    return (<Note 
    key = {note.key}
        name = {note.title}
        body= {note.content}
    />)
}

function page() {
    return (<div>
        <Header />
        {notes.map(createNote)}
        <Footer />
        </div>
    )
}
export default page;