/* VARIABLES AND SELECTORS. */
const addCancelTaskButton = document.querySelector('.addCancel-task-button');
const addIcon = document.querySelector('.add-icon');
const cancelIcon = document.querySelector('.cancel-icon');
const taskForm = document.querySelector('.task-form');
const taskDescriptionInput = document.querySelector('#description');
const addTaskButton = document.querySelector('input[type="submit"]');
const taskList = document.querySelector('.tasks-list');

/* EVENTS. */
function initEvents() {
   document.addEventListener('DOMContentLoaded', startApp);
   addCancelTaskButton.addEventListener('click', addCancelTaskBtn);
   taskForm.addEventListener('submit', addTask);
};
initEvents();


/* CLASSES. */
class Task {
   constructor() {
      this.tasks = [];
   };

   tasksList(task) {
      this.tasks = [...this.tasks, task];
   
      ui.deletePreviousChild();
      ui.showTasksList(this.tasks);
   };

   numberTasks() {
      const numberTasks = this.tasks.length;
      
      ui.showNumberTasksInfo(numberTasks);
   };
};


class UI {
   showDateInfo() {
      const date = new Date();
            
      const dateInfo = document.querySelector('.date-info');

      const nameDay = setDay(date.getDay());
      const numberDay = date.getDate();
      const day = document.createElement('p');
      day.classList.add('day');
      day.innerHTML = `
         ${nameDay}, <span class="number-day">${numberDay}th</span>
      `;
      
      const month = document.createElement('p');
      month.textContent = setMonth(date.getMonth());
      month.classList.add('month');

      dateInfo.appendChild(day);
      dateInfo.appendChild(month);
   };

   showNumberTasksInfo(numberTasks = 0) {
      document.querySelector('.tasks-info').textContent = `${numberTasks} tasks`;
   };

   showAlertMessage(messageContent, typeMessage) {
      const alertMessageContainer = document.createElement('div');
      alertMessageContainer.classList.add('alert-message-container');

      const alertMessage = document.createElement('p');
      alertMessage.textContent = messageContent;
      alertMessage.classList.add('alert-message');
      
      alertMessageContainer.appendChild(alertMessage);

      taskForm.appendChild(alertMessageContainer);
      
      if(typeMessage === 'error') {
         alertMessageContainer.classList.add('alert-message-error');
      } else if(typeMessage === 'success') {
         alertMessageContainer.classList.add('alert-message-success');
      };

      setTimeout(() => {
         alertMessageContainer.remove();
      }, 1400);
   };

   showTasksList(tasks) {
      tasks.forEach((task) => {
         const { taskDescription } = task;

         const taskItem = document.createElement('li');
         taskItem.classList.add('task-item');
         taskItem.innerHTML = `
            <input type="checkbox" class="check-task">
            
            <span class="task-description">${taskDescription}</span>
            
            <button class="delete-task-button">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="delete-task-icon"><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"/></svg>
            </button>
         `;
         
         taskList.appendChild(taskItem);
      });
   };

   deletePreviousChild() {
      while(taskList.firstChild) {
         taskList.removeChild(taskList.firstChild);
      };
   };
};
const ui = new UI();


/* FUNCTIONS. */
function startApp() {
   ui.showDateInfo();
   ui.showNumberTasksInfo();
   
   addIcon.classList.add('show-icon');
   cancelIcon.classList.add('hidden-icon');

   taskDescriptionInput.addEventListener('keyup', () => {
      if(taskDescriptionInput.value === '') {
         taskDescriptionInput.style.borderBottom = '2px solid #e93595';
      } else {
         taskDescriptionInput.style.borderBottom = '2px solid #323249';
      };
   });
};

function setDay(day) {
   switch (day) {
      case 0 :
         return 'Sunday';
         break;
      case 1 :
         return 'Monday';
         break;
      case 2 :
         return 'Tuesday';
         break;
      case 3:
         return 'Wednesday'
         break;
      case 4:
         return 'Thursday'
         break;
      case 5:
         return 'Friday'
         break;
      case 3:
         return 'Saturday'
         break;
   
      default:
         break;
   };
};

function setMonth(month) {
   switch (month) {
      case 0:
         return 'January';
         break;
      case 1:
         return 'Febrary';
         break;
      case 2:
         return 'March';
         break;
      case 3:
         return 'April';
         break;
      case 4:
         return 'May';
         break;
      case 5:
         return 'June';
         break;
      case 6:
         return 'July';
         break;
      case 7:
         return 'August';
         break;
      case 8:
         return 'September';
         break;
      case 9:
         return 'October';
         break;
      case 10:
         return 'November';
         break;
      case 11:
         return 'December';
         break;
   
      default:
         break;
   };
};

function addCancelTaskBtn() {
   const addTaskContainer = document.querySelector('.add-task-container');
   addTaskContainer.classList.toggle('showAdd-task-container');

    
   if(addTaskContainer.classList.contains('showAdd-task-container')) {
      addIcon.classList.remove('show-icon');
      addIcon.classList.add('hidden-icon');
      cancelIcon.classList.add('show-icon');
      cancelIcon.classList.remove('hidden-icon');
   } else {
      cancelIcon.classList.remove('show-icon');
      cancelIcon.classList.add('hidden-icon');
      addIcon.classList.remove('hidden-icon');
      addIcon.classList.add('show-icon');
   };
};

let task = new Task();
function addTask(e) {
   e.preventDefault();

   if(taskDescriptionInput.value === '') {
      ui.showAlertMessage('You should add a Tastk Description', 'error');
      taskDescriptionInput.style.borderBottom = '2px solid #e93595';
   } else {
      ui.showAlertMessage('Task added successfully', 'success');
      
      newTask = {
         taskDescription : taskDescriptionInput.value,
         id : Date.now(),
      };

      task.tasksList(newTask);
      task.numberTasks();

      taskForm.reset();
   };
};
