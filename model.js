"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTask = addTask;
exports.completeTask = completeTask;
exports.filterByStatus = filterByStatus;
exports.deleteTask = deleteTask;
let nextId = 1;
// 3. addTask operation
function addTask(tasks, title) {
    const newTask = { id: nextId++, title, status: "todo" };
    return [...tasks, newTask];
}
// 4. completeTask operation
function completeTask(tasks, id) {
    return tasks.map((t) => (t.id === id ? { ...t, status: "done" } : t));
}
// 5. filterByStatus operation
function filterByStatus(tasks, status) {
    return tasks.filter((t) => t.status === status);
}
// 6. Custom Operation (Required for originality)
function deleteTask(tasks, id) {
    return tasks.filter((t) => t.id !== id);
}
//# sourceMappingURL=model.js.map