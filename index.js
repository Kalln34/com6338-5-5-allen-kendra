document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('add-todo');
  var input = form.querySelector('input');
  var todoList = document.getElementById('todo-list');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var taskText = input.value.trim(); 

    if (taskText === '') {
      return; 
    }

    var li = document.createElement('li');
    var button = document.createElement('button');
    button.textContent = taskText;

    var isDone = false;

    button.addEventListener('click', function() {
      if (isDone) {
        li.remove(); 
      } else {
        button.style.textDecoration = 'line-through';
        isDone = true;
      }
    });

    li.appendChild(button);
    todoList.appendChild(li);

    input.value = '';
  });
});



//list and input field are empty when page loads
//typed item should apper in the input field afer pressing enter or clicking add button
//functionality must be attached to a form submit event
//add todo item - item must be a button element in an li
//item clicked in todo list to mark as done - use strikethrough to represent done
//done item is removed from list