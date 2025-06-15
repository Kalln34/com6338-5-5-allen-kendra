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

