export const todoManager = (function (){
    
    let currentProject = "todo"

    function changeCurrentProject(project) {
        currentProject = project
    }

    function getCurrentProject() {
        return currentProject
    }

    return { changeCurrentProject, getCurrentProject }
})();