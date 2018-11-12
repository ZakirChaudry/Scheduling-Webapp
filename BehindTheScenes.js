class Task {
    constructor(length, name, category, subtasks) {
        this.length = length;
        this.name = name;
        this.category = category;
        this.subtasks = subtasks;
    }
}

class Day {
    constructor(date, tasks, orderOfTasks) {
        this.date = date;
        this.tasks = tasks;
        this.orderOfTasks = orderOfTasks
    }
}

function getDate() {
    let Date = document.getElementById("dateForm");
    document.getElementById("printout").innerText = Date;
}