class ListBinding {
  constructor(element) {
    this.listElement = element;
    this.textList = [];
  }

  //Makes an <li>text</li> element/tag
  static createListItem(text) {
    const li = document.createElement("li");

    li.textContent = text;

    return li;
  }

  update() {
    //remove all the existing items in the list element <li></li>

    while (this.listElement.firstChild) {
      this.listElement.removeChild(this.listElement.firstChild);
    }
    //add items in <ul></ul> tag with <li></li>
    for (const text of this.textList) {
      this.listElement.appendChild(ListBinding.createListItem(text));
    }
  }

  add(text) {
    this.textList.push(text);
    this.update();
  }

  remove(index) {
    this.textList.splice(index, 1);
    this.update();
  }
}

const myList = document.getElementById("myList");

const listBinding = new ListBinding(myList);
