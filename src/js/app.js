/* VARIABLES AND SELECTORS. */
const addCancelTaskButton = document.querySelector('.addCancel-task-button');
const addIcon = document.querySelector('.add-icon');
const cancelIcon = document.querySelector('.cancel-icon');
const taskForm = document.querySelector('.task-form');
const taskDescriptionInput = document.querySelector('#description');
const addTaskButton = document.querySelector('input[type="submit"]');


/* EVENTS. */
function initEvents() {
   document.addEventListener('DOMContentLoaded', startApp);
   addCancelTaskButton.addEventListener('click', addCancelTaskBtn);
   taskForm.addEventListener('submit', addTask);
};
initEvents();


/* CLASSES. */
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
      }, 1000);
   };
};
const ui = new UI();


/* FUNCTIONS. */
function startApp() {
   ui.showDateInfo();
   
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

function addTask(e) {
   e.preventDefault();

   if(taskDescriptionInput.value === '') {
      ui.showAlertMessage('You should add a Tastk Description', 'error');
      taskDescriptionInput.style.borderBottom = '2px solid #e93595';
   } else {
      ui.showAlertMessage('Task added successfully', 'success');
      
      taskForm.reset();
   };
};
