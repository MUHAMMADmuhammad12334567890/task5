const things_to_note = [
  {
    text: "Закончит 5 таск",
    done: false,
  },

  {
    text: "Перейти на таски 2 дня",
    done: false,
  },

  {
    text: "не ленится ",
    done: false,
  },
  {
    text: "учится хорошо",
    done: false,
  },
  {
    text: "старатся",
    done: false,
  },
];

// Вызовы и создание тегов
const div = document.createElement("div");
const input = document.createElement("input");
const div3 = document.getElementById("list");
const button = document.createElement("button");
const div5 = document.createElement("div");
const total = document.createElement("div");

// добавление тега form изменение кода по заданиею
const form = document.createElement('form')
const inputSubmit = document.createElement("input");





// Присвоение классов
button.className = "button_Class";
div3.className = "class_list";
div.className = "div";
div5.className = "list_class";
total.className = "total";
inputSubmit.className = 'button_Class'

// Вложение тегов
// div.append(input, button); //  старая ыерсия кода с кнопками закоментированно
div.append(form)
input.type = 'text'
inputSubmit.type = 'submit'
inputSubmit.value = 'Отправить'
form.append(input, inputSubmit)
div3.append(div);
document.body.append(div5);
document.body.append(total);

// предаем текст
// button.textContent = "Отправит";

// оснаваня кнопка добавление новых заметок заданных пользователем при каждом нажатие вызывает функцию добавление и обновляет список
inputSubmit.addEventListener("click", (e) => {
  e.preventDefault()
  if (input.value === "") return;

  render(things_to_note);

  addTodo(input.value);
  input.value = "";
});





function render(arg) {
  div5.innerHTML = ""; // сбрасывает содержимое тека див при каждом вызове функии
  for (let i = 0; i < arg.length; i++) {
// создаю теги в нутри функии 
    const text = document.createElement("p");
    const btn = document.createElement("button");
    const radioBtn = document.createElement("input");


    btn.textContent = "x"; 

    // прида классы
    radioBtn.type = "checkbox";
    text.className = "text_class";
    btn.className = "btn_class";

    text.textContent = arg[i].text; //при каждой итарации будет добавлят значения ключа text в тег p

    //настраиваю теги кнопки создаваемые функией 
    text.appendChild(btn);
    div5.append(text);
    text.prepend(radioBtn);
    // кнопка отметки выполненых дел
    radioBtn.addEventListener("click", (e) => {
      if (radioBtn.checked === true) {
        text.className = "radio_button";
        btn.className = "btn_none";
        checkTodo(i);
      }
      if (radioBtn.checked === false) {
        text.className = "none";
        btn.className = "btn_class";
        checkTod(i)
      }
      // функции для отметки выполненных дела каждый раз при использование кнопки выполненых дел переводит дела true else  false
function checkTodo(id) {
  things_to_note[id].done = true;
}

function checkTod(id) {
  things_to_note[id].done =  false;
}
      
    });

    //кнопка для удаление 
    btn.addEventListener("click", (e) => {
      remove(i);
    });
  }
}

// функция для удаление будет удалят по указонному индексу каждый раз при нажатие кнопка для удаление
function remove(id) {
  things_to_note.splice(id, 1);
  render(things_to_note);
}
remove();

// функция для добавление в массив значение заданным пользователем 
function addTodo(text) {
  things_to_note.push({
    text: text,
    done: false,
  });
  render(things_to_note);
}




