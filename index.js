document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('add-todo');
  var input = form.querySelector('input');
  var todoList = document.getElementById('todo-list');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    var taskText = input.value.trim(); // Remove spaces before/after

    if (taskText === '') {
      return; // Don't add empty or space-only todos
    }

    var li = document.createElement('li');
    var button = document.createElement('button');
    button.textContent = taskText;

    // Track strike-through state
    var isDone = false;

    button.addEventListener('click', function() {
      if (isDone) {
        li.remove(); // Remove if already done
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
//functionality must be attached to a form submit even