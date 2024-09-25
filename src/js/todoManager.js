import { uiManager } from './layout.js'

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
        } else {
            changeCurrentProject(newProject)
            uiManager.uiRefresh(currentProject, tasks)
        }


    }

    return { changeCurrentProject, getCurrentProject, createNewProject }
})();