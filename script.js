const form = document.querySelector("form");
const tasks = document.querySelector("#input-task");
const categories = document.querySelector("#category");
const taskDiv = document.querySelector(".tasks");


let taskListArray = JSON.parse(localStorage.getItem("mytask")) || [];


function renderTaskToDom(obj){
  const taskCard = document.createElement('div');
    taskCard.className = 'task-card';
    
    taskCard.dataset.id = obj.id;
    taskCard.dataset.category = obj.category.toLowerCase();

    const taskPara = document.createElement('div');
    taskPara.className = 'task';
    
    const cardButtons = document.createElement('div')
    cardButtons.className = 'card-buttons';


    const p = document.createElement('p');
    p.textContent = obj.task;
    

    const categoryDiv = document.createElement('button')
    const editButton = document.createElement('button')
    const deleteButton =document.createElement('button')
    categoryDiv.className = 'category-div';
    categoryDiv.textContent = obj.category;

    editButton.className = 'green';
    editButton.textContent = 'Edit';

    deleteButton.className = 'red';
    deleteButton.textContent = "Delete";
    

    // deleteButton.addEventListener("click", ()=>{
    //   const currentId =  Number(taskCard.dataset.id);
    //   taskListArray = taskListArray.filter((item)=> item.id !== currentId);
    //   localStorage.setItem("mytask", JSON.stringify(taskListArray));
    //   taskCard.remove();
    // })

    taskPara.appendChild(p);
    cardButtons.append(categoryDiv, editButton, deleteButton);
    taskCard.append(taskPara, cardButtons);
    taskDiv.appendChild(taskCard);
}

taskListArray.forEach(savedTask => {
  renderTaskToDom(savedTask);
});

taskDiv.addEventListener("click", (e)=>{
  const taskCard = e.target.closest(".task-card");
  if(!taskCard) return;

  const currentId = Number(taskCard.dataset.id);

  if (e.target.classList.contains("red")) {
     taskListArray = taskListArray.filter(item => item.id !== currentId)
     localStorage.setItem("mytask", JSON.stringify(taskListArray));

     taskCard.remove();
  }

  if (e.target.classList.contains("green")) {
    const taskContainer = taskCard.querySelector(".task");
    const editButton = e.target;

    if (editButton.textContent === "Edit") {
         const activeInput = taskDiv.querySelector(".edit-input");
      if (activeInput) {
        alert("Please save your current active task before editing a new one!");
        return;
      }

      const p = taskContainer.querySelector("p");
      const currentText = p.textContent;
      const newEditInput = document.createElement("input");
      newEditInput.setAttribute("value", currentText);
      newEditInput.type = "text";
      newEditInput.className = "edit-input";
      newEditInput.value = currentText;
      p.replaceWith(newEditInput);
      newEditInput.focus();
      editButton.textContent = "Save";
    }else if(editButton.textContent === "Save"){
      const inputField = taskContainer.querySelector(".edit-input")
             
              // 1. input.value (PROPERTY): 
              //    Refers to the live, current runtime state. If the user edits "Buy Milk" 
              //    to "Buy Bread", input.value outputs "Buy Bread".
              
              // 2. input.getAttribute("value") (ATTRIBUTE): 
              //    Refers strictly to the original HTML layout token setup. Because we never 
              //    explicitly typed 'newEditInput.setAttribute("value", ...)', the HTML markup 
              //    value property doesn't exist, returning null. Even if it did, it would show 
              //    the old text, ignoring anything the user newly typed.
              
            console.log("Live string typed via .value property:", inputField.value);
            console.log("Original HTML static string via .getAttribute():", inputField.getAttribute("value"));

      const updatedText = inputField.value.trim();

      if(updatedText === "") return ;

      const newP = document.createElement("p");
      newP.textContent = updatedText;
      inputField.replaceWith(newP);

      const taskObj = taskListArray.find(item => item.id === currentId);

      if (taskObj) {
        taskObj.task = updatedText;
        localStorage.setItem("mytask", JSON.stringify(taskListArray));
      }
      editButton.textContent = "Edit";
      editButton.className = "green";
    }

  }

})

form.addEventListener("submit",(events)=>{
    events.preventDefault();
    let task = tasks.value;
    let category = categories.value;

    if (task.trim() === "" ) return;

    const newTaskObject = {
      id: Date.now(),
      task,
      category
    }

    taskListArray.push(newTaskObject);
    localStorage.setItem("mytask",JSON.stringify(taskListArray));

    renderTaskToDom(newTaskObject);
    form.reset();
})

const themeBtn = document.querySelector(".theme-toggle");
const themeDiv = document.querySelector(".theme-change");
const savedTheme = localStorage.getItem("appTheme") || "light";

themeDiv.dataset.theme = savedTheme;
updateThemeButton(savedTheme);

themeBtn.addEventListener("click", ()=>{
  const currentTheme = themeDiv.dataset.theme;

  let newTheme = "light";
  if (currentTheme === "light") {
    newTheme = "dark";
  }

  themeDiv.dataset.theme = newTheme;
  themeBtn.setAttribute("aria-label", `Switch to ${newTheme === "light" ? "dark" : "light"} mode`)
  themeBtn.classList.toggle("dark-mode-active", newTheme === "dark");
  updateThemeButton(newTheme);
  localStorage.setItem("appTheme", newTheme);
})

function updateThemeButton(theme){
  if (theme === "dark") {
    themeBtn.textContent = "☀️ Light Mode";
  }else{
    themeBtn.textContent = "🌙 Dark Mode";
  }
}