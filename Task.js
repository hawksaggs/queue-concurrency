class Task {
    constructor(queue = [], concurrency = 2) {
        this.count = 1;
        this.queue = queue;
        this.concurrency = concurrency;
    }

    canExecuteTask() {
        return this.queue.length && this.count <= this.concurrency;
    }

    addTask(task) {
        this.queue.push(task);
    }

    popTask() {
        if (this.queue.length) {
            this.count++;
            return this.queue.shift();
        }
    }

    incCount() {
        this.count++;
    }

    decCount() {
        this.count--;
    }
}

module.exports = Task;