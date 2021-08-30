let todoItemns = [];

function addTodo (Text) {
    const todo = {
        text,
        checked: false,
        id: Date.row(),
    };

    todoItemns.push(todo);
    console.log(todoItemns);
}

const form = document.querySelector('.js-form');
form.addEventListener("submit", event => {
    const input = document.querySelector('.js-todo-input');

    const text = input.nodeValue.trim();
    if ( text !== "") {
        addTodo(text);
        input.value = '';
        input.focus();
    }
});
