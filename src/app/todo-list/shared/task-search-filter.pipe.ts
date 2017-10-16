import { Pipe, PipeTransform } from '@angular/core';

import { Task } from './task.model';

@Pipe({ name: 'taskSearchFilter' })
export class TaskSearchFilterPipe implements PipeTransform {
    transform(taskList: Task[], query: string): Task[] {
        return query ?
            taskList.filter(task => task.desc.toLowerCase().indexOf(query.toLowerCase()) !== -1) :
            taskList;
    }
}
