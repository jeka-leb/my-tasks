(function ($) {
  $.fn.myPlugin = function () {
    let data;
    const $list = $(".list");
    const $input = $("#add-input");
    const $add = $("#add-submit");
    const $searchInput = $("#search-input");
    let todos = [{
        text: "Buy milk",
        done: false
      },
      {
        text: "Play with dog",
        done: true
      }
    ];

    function loadSaveTask() {
      const data = localStorage.getItem('filteredTask');
      if (data) {
        const tasks = JSON.parse(data);
        renderList(tasks);
        todos = tasks
      } else {
        renderList(todos)
      }
    }

    $input.change(function (e) {
      data = $(e.target).val();
    })

    $add.on('click', function (e) {
      e.preventDefault();
      if (!data) {
        return
      }
      changeState(data);
      renderList(todos)
    })

    $list.on('click', '.item-text', function (e) {
      $(e.target).toggleClass('done');
      if ($(e.target).hasClass('done')) {
        todos.find(el => el.text == $(e.target).text()).done = true
      } else {
        todos.find(el => el.text == $(e.target).text()).done = false
      }
    })

    $list.on('click', '.item-remove', function (e) {
      let ind = todos.findIndex(el => el.text == $(e.target).prev().text());
      todos.splice(ind, 1);
      $(e.target).parent().remove();
    })

    $searchInput.on('keyup', (e) => {
      let text = $(e.currentTarget).val().toLowerCase();
      let newTodos = todos.filter(el => {
        return el.text.toLowerCase().indexOf(text) >= 0
      });
      renderList(newTodos);
      taskToLocal(newTodos)
    })

    function taskToLocal(arr) {
      if (arr.length) {
        localStorage.setItem('filteredTask', JSON.stringify(arr))
      }
    }

    function renderList(arr) {
      let newLine = '';
      arr.forEach((el) => {
        newLine += `
        <li class="item">
           <span class="item-text ${el.done ? "done" : ''}">${el.text}</span>
           <button class="item-remove">Remove</button>
        </li>`;
      })
      $list.html(newLine);
    }

    function changeState(text, done = false) {
      return todos.push({
        text,
        done: done
      })
    }
    loadSaveTask();
  };
})(jQuery);

$(document).myPlugin();