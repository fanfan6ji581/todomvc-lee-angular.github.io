import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../shared/task.model';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {

  @Input() task: Task;
  tasksCollection: AngularFirestoreCollection<Task>;

  constructor(private db: AngularFirestore) {
    this.tasksCollection = db.collection('tasks');
  }

  ngOnInit() {
  }

  onDeleteTask() {
    const taskRef = this.tasksCollection.doc(this.task.id);
    taskRef.delete();
  }

  onUpdateTask() {
    const taskRef = this.tasksCollection.doc(this.task.id);
    taskRef.update(this.task);
  }

}
