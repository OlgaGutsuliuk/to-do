import React, { Component } from "react";
import Filter from "./components/Filter/Filter";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import ToDoList from "./components/TodoList/ToDoList";

export default class App extends Component {
  idx = 100;
  state = {
    todoData: [
      this.createItem("Drink Coffee"),
      this.createItem("Make Awesome App"),
      this.createItem("Have a lunch"),
      this.createItem("Have a dinner")
    ],
    findWord: "",
    filter: 'active'
  };

  createItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.idx++
    };
  }

  deletList = (id) => {
    this.setState(({ todoData }) => {
      let i = todoData.findIndex((el) => el.id === id);
      const newArr = [...todoData.slice(0, i), ...todoData.slice(i + 1)];
      return {
        todoData: newArr
      };
    });
  };

  addText = (text) => {
    let newState = this.createItem(text);
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newState];
      return {
        todoData: newArr
      };
    });
  };
  onTogleAll = (arr, id, nameTogle) => {
    let i = arr.findIndex((el) => el.id === id);
    const oldObj = arr[i];
    const newObj = { ...oldObj, [nameTogle]: !oldObj.nameTogle };
    return [...arr.slice(0, i), newObj, ...arr.slice(i + 1)];
  };

  onTogleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.onTogleAll(todoData, id, "done")
      };
    });
  };

  onTogleImportent = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.onTogleAll(todoData, id, "important")
      };
    });
  };

  filterWord = (items, list) => {
    if (list.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(list.toLowerCase()) > -1;
    });
  };
  searchWord = (findWord) => {
    this.setState({ findWord });
  };

  filterList = (items, filter) => {
    switch (filter) {
      case 'all':
        return items
      case 'active':
        return items.filter(item => !item.done)
       case 'done':
        return items.filter(item => item.done)
      default: return items
    }
    

}
  clickActive = (filter) => {
   this.setState({filter})
}

  render() {
    const { todoData, findWord, filter } = this.state;
    const allState = this.filterList(this.filterWord(todoData, findWord), filter);
    const done = todoData.filter((el) => el.done).length;
    const todo = todoData.length - done;
    return (
      <div>
        <Header toDo={todo} done={done} />
        <Search searchWord={this.searchWord} />
        <Filter filter={filter} clickActive={this.clickActive}/>
        <ToDoList
          todoData={allState}
          deletList={this.deletList}
          onTogleDone={this.onTogleDone}
          onTogleImportent={this.onTogleImportent}
        />
        <Form addText={this.addText} />
      </div>
    );
  }
}
