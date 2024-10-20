import { uiManager } from './layout.js'
import { Task } from './task.js';

export const todoManager = (function (){

    let currentProject = "todo"

    function changeCurrentProject(project) {
        currentProject = project
    }

    function getCurrentProject() {
        return currentProject
    }

    function createNewProject(e, tasks) {
        let newProject = e.target[0].value;

        if (!tasks[newProject]) {
            tasks[newProject] = []
            changeCurrentProject(newProject)
            uiManager.uiRefresh(currentProject, tasks)
        } else {
            changeCurrentProject(newProject)
            uiManager.uiRefresh(currentProject, tasks)
        }
    }

    function createNewTask(e, tasks) {
        console.log(e)
        console.log(Object.keys(e.target))
        for (const key in Object.keys(e.target)) {
            switch (e.target[key].name) {
                case 'title':
                    var title = e.target[key].value
                    break;
                case 'duedate':
                    var duedate = e.target[key].value
                    break;
                case 'priority':
                    var priority = e.target[key].value
                    break;
                case 'project':
                    var project = e.target[key].value
                default:
                    break;
            }
        }
        let task = new Task(title, project)
    }

    function storeTasks(tasks) {

    }

    return { changeCurrentProject, getCurrentProject, createNewProject, createNewTask }
})();