# Task_List_React-redux_practice

Реализуйте приложение «Список задач», которое умеет две вещи:

* Добавлять задачи в список
* Удалять задачи из списка
* Задача должна добавляться в начало списка, то есть сверху.

`src/index.jsx`
Оберните компонент приложения в провайдер и добавьте результат в переменную dom.

`src/actions/index.js`
Реализуйте необходимые действия.

`src/reducers/index.js`
Реализуйте необходимую логику.

`src/components/App.jsx`
Реализуйте компонент <App>.

### HTML
Начальный
```
<div class="col-5">
  <form action="" class="form-inline">
    <div class="form-group mx-sm-3">
      <input type="text" required value="">
    </div>
    <button type="submit" class="btn btn-primary btn-sm">Add</button>
  </form>
</div>
```
HTML после добавления двух задач
```
<div class="col-5">
  <form action="" class="form-inline">
    <div class="form-group mx-sm-3">
      <input type="text" required value="">
    </div>
    <button type="submit" class="btn btn-primary btn-sm">Add</button>
  </form>
  <div class="mt-3">
    <ul class="list-group">
      <li class="list-group-item d-flex">
        <span class="mr-auto">second Task!</span>
        <button type="button" class="close">
          <span>&times;</span>
        </button>
      </li>
      <li class="list-group-item d-flex">
        <span class="mr-auto">first Task!</span>
        <button type="button" class="close">
          <span>&times;</span>
        </button>
      </li>
    </ul>
  </div>
</div>
```
Подсказки:
* connect()
