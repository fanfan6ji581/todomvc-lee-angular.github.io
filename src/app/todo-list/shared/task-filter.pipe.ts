import { Pipe, PipeTransform } from '@angular/core';

import { Task } from './task.model';

@Pipe({ name: 'taskFilter' })
export class TaskFilterPipe implements PipeTransform {
    transform(taskList: Task[], filter: string): Task[] {
        if (filter === 'active') {
            return taskList.filter(task => !task.isCompleted);
        } else if (filter === 'completed') {
            return taskList.filter(task => {
                return task.isCompleted;
            });
        } else {
            return taskList;
        }
    }
}
