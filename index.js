document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('add-todo');
  var input = form.querySelector('input');
  var toDoList = document.getElementById('todo-list');
  var li = document.createElement('li');
  var button = document.createElement('button');
   button.textContent = taskText;
  var isDone = false;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var taskText = input.value.trim();
     if (taskText === '') {
      return;
    }
    button.addEventListener('click', function() {
      if (isDone) {
        li.remove();
      } else {
        button.style.textDecoration = 'line-through';
        isDone = true;
      }
    });

     li.appendChild(button);
     toDoList.appendChild(li);

    input.value = ''; // Clear input after adding
  });
});



//list and input field are empty when page loads
//typed item should apper in the input field afer pressing enter or clicking add button
//functionality must be attached to a form submit even