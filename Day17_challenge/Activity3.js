// Task 5

class Queue {
    constructor() {
        this.list = [];
    }

    Enqueue(value) {
        this.list.push(value);
    }

    Dequeue() {
        if (this.list.length === 0) {
            console.log("The Queue is empty");
            return null;
        } else {
            return this.list.shift();
        }
    }

    Front() {
        if (this.list.length === 0) {
            return null;
        } else {
            return this.list[0];
        }
    }

    display() {
        console.log(this.list.join(' -> '));
    }

    isEmpty() {
        return this.list.length === 0;
    }
}

const que = new Queue();
que.Enqueue(7);
que.Enqueue(3);
que.Enqueue(5);
console.log(que.Front()); 
que.Dequeue();
console.log(que.Front()); 

// Task 6

class Job {
    constructor() {
        this.q = new Queue();
    }

    addJob(job) {
        this.q.Enqueue(job);
        console.log(`New job "${job}" is added to the queue.`);
    }

    process() {
        if (this.q.isEmpty()) {
            console.log("No jobs to process");
        } else {
            const pro = this.q.Dequeue();
            console.log(`Current Processing Job: "${pro}"`);
        }
    }

    displayJobs() {
        if (this.q.isEmpty()) {
            console.log("The printer queue is empty");
        } else {
            console.log("Current printer queue:");
            this.q.display();
        }
    }
}

const pro = new Job();
pro.addJob("planning");
pro.addJob("designing");
pro.addJob("execution");
pro.addJob("deployment");
pro.process(); 
pro.displayJobs(); 
