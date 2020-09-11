const Task = require('./Task');

//const queue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
 const queue = [1, 2, 3, 4, 5];

const task = new Task(queue);
let index = 1;

function executeTask() {
    console.log('Task concurrency: ' + task.count);
    while(task.canExecuteTask()) {
        const currentTask = task.popTask();
        setTimeout(function () {
            console.log(currentTask);
            task.decCount();
            executeTask();
        }, index * 100);
        index++;
    }
}
setTimeout(function () {
    task.addTask(100);
    task.addTask(101);
    task.addTask(102);
    task.addTask(103);
    task.addTask(104);
    task.addTask(105);
    task.addTask(106);
    task.addTask(107);
}, 2 * 1000);
executeTask();


