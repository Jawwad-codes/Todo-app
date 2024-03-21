
const todo = document.getElementById('todo');
const ul = document.querySelector('ul');
const array =[];
function addTask(){
    if (todo.value.trim() === '') {
        alert('Please enter a task.');
        return; 
    }
   array.push(todo.value)
   console.log(array);
   Render()
}
function Render(){
    ul.innerHTML='';
    for(let i = 0; i < array.length; i++){
    ul.innerHTML +=`<li>${array[i]} <div class="action"> <button id="Edi" onclick ="Edit(${i})">Edit <i class="fa-solid fa-pen-to-square"></i></button>
       <button id="Del" onclick="Delete(${i})">Delete <i class="fa-solid fa-trash"></i></button></li> </br> </div>`;       
    todo.value = '';
    }
}
 function Delete(index){
   console.log(`Deleting ${index}`);
   array.splice(index,1);
   Render()
 }
 function Edit(index){
    array[index] = prompt(`Enter the Updated task`);
    Render();
 }

