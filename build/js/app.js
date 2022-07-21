const addCancelTaskButton=document.querySelector(".addCancel-task-button"),addIcon=document.querySelector(".add-icon"),cancelIcon=document.querySelector(".cancel-icon"),taskForm=document.querySelector(".task-form"),taskDescriptionInput=document.querySelector("#description"),addTaskButton=document.querySelector('input[type="submit"]'),taskList=document.querySelector(".tasks-list");function initEvents(){document.addEventListener("DOMContentLoaded",startApp),addCancelTaskButton.addEventListener("click",addCancelTaskBtn),taskForm.addEventListener("submit",addTask)}initEvents();class Task{constructor(){this.tasks=[]}tasksList(e){this.tasks=[...this.tasks,e],ui.deletePreviousChild(),ui.showTasksList(this.tasks)}deleteTask(e){this.tasks=this.tasks.filter((s=>s.id!==e)),this.numberTasks(),ui.deletePreviousChild(),ui.showTasksList(this.tasks)}numberTasks(){const e=this.tasks.length;ui.showNumberTasksInfo(e),overflowProperty(e>0?"add":"remove")}}class UI{showDateInfo(){const e=new Date,s=document.querySelector(".date-info"),t=setDay(e.getDay()),a=e.getDate(),n=document.createElement("p");n.classList.add("day"),n.innerHTML=`\n         ${t}, <span class="number-day">${a}th</span>\n      `;const o=document.createElement("p");o.textContent=setMonth(e.getMonth()),o.classList.add("month"),s.appendChild(n),s.appendChild(o)}showNumberTasksInfo(e=0){document.querySelector(".tasks-info").textContent=`${e} tasks`}showAlertMessage(e,s){const t=document.createElement("div");t.classList.add("alert-message-container");const a=document.createElement("p");a.textContent=e,a.classList.add("alert-message"),t.appendChild(a),"error"===s?t.classList.add("alert-message-error"):"success"===s&&t.classList.add("alert-message-success");0===document.querySelectorAll(".alert-message-container").length&&taskForm.appendChild(t),setTimeout((()=>{t.remove()}),1400)}showTasksList(e){e.forEach((e=>{const{taskDescription:s,id:t}=e,a=document.createElement("li");a.classList.add("task-item"),a.setAttribute("data-id",t),a.innerHTML=`\n            <input type="checkbox" class="check-task">\n            \n            <span class="task-description">${s}</span>\n            \n            <button class="delete-task-button" onclick="deleteTask(${t})">\n               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="delete-task-icon"><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"/></svg>\n            </button>\n         `,taskList.appendChild(a)}))}deletePreviousChild(){for(;taskList.firstChild;)taskList.removeChild(taskList.firstChild)}}const ui=new UI;function startApp(){ui.showDateInfo(),ui.showNumberTasksInfo(),addIcon.classList.add("show-icon"),cancelIcon.classList.add("hidden-icon"),taskDescriptionInput.addEventListener("keyup",(()=>{""===taskDescriptionInput.value?taskDescriptionInput.style.borderBottom="2px solid #e93595":taskDescriptionInput.style.borderBottom="2px solid #323249"}))}function setDay(e){switch(e){case 0:return"Sunday";case 1:return"Monday";case 2:return"Tuesday";case 3:return"Wednesday";case 4:return"Thursday";case 5:return"Friday";case 6:return"Saturday"}}function setMonth(e){switch(e){case 0:return"January";case 1:return"Febrary";case 2:return"March";case 3:return"April";case 4:return"May";case 5:return"June";case 6:return"July";case 7:return"August";case 8:return"September";case 9:return"October";case 10:return"November";case 11:return"December"}}function addCancelTaskBtn(){const e=document.querySelector(".add-task-container");e.classList.toggle("showAdd-task-container"),e.classList.contains("showAdd-task-container")?(addIcon.classList.remove("show-icon"),addIcon.classList.add("hidden-icon"),cancelIcon.classList.add("show-icon"),cancelIcon.classList.remove("hidden-icon")):(cancelIcon.classList.remove("show-icon"),cancelIcon.classList.add("hidden-icon"),addIcon.classList.remove("hidden-icon"),addIcon.classList.add("show-icon"))}let task=new Task;function addTask(e){e.preventDefault(),""===taskDescriptionInput.value?(ui.showAlertMessage("You should add a Task Description","error"),taskDescriptionInput.style.borderBottom="2px solid #e93595"):(ui.showAlertMessage("Task added successfully","success"),newTask={taskDescription:taskDescriptionInput.value,id:Date.now()},task.tasksList(newTask),task.numberTasks(),taskForm.reset())}function deleteTask(e){task.deleteTask(e)}function overflowProperty(e){const s=document.querySelector(".main-container");"add"===e?s.style.overflow="hidden":"remove"===e&&s.style.removeProperty("overflow")}
//# sourceMappingURL=app.js.map
