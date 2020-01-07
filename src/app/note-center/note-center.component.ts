import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Note } from '../note';
import { NoteService } from '../note.service';
    
@Component({
  selector: 'app-note-center',
  templateUrl: './note-center.component.html',
  styleUrls: ['./note-center.component.css'],
  providers: [NoteService,DatePipe]
})
export class NoteCenterComponent implements OnInit {

  notes: Array<Note>;

  selectedNote: Note;
  private hidenewNote:boolean = true;
  // times : Date = new Date();
  // public ntime = this.times.toISOString().substring(0, 10);

  constructor(private _noteService : NoteService) { }

  ngOnInit() {
    this._noteService.getNotes()
    .subscribe(resNoteData => this.notes = resNoteData);
  }

  onSelectNote(note:any){
    this.selectedNote = note;
    this.hidenewNote = true;
    console.log(this.selectedNote);
  }

  onSubmitAddValue(note : Note){
      this._noteService.addNote(note)
      .subscribe(resNewNote => {
        // This code is mainly used for updated notes show in UI 
          this.notes.push(resNewNote);
          this.hidenewNote = true;
          this.selectedNote = resNewNote;
      });
  }

  onUpdateNoteEvent(note : any){
    this._noteService.updateNote(note)
    .subscribe(resUpdateNote => note = resUpdateNote);
    this.selectedNote = null;
  };

  onDeleteNoteEvent(note : any){
      let noteArray = this.notes;
      this._noteService.deleteNote(note)
      .subscribe(resDeletedNote => {
        for(let i=0;i < noteArray.length ; i++){
          if(noteArray[i]._id === note._id)
          {
            noteArray.splice(i,1);
          }
        }
      });
      this.selectedNote = null;
  };

  newNote(){
      this.hidenewNote = false;
  }

}
