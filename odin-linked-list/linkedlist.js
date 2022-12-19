class Node {
  constructor(value) {
    this.nextNode = null;
    this.value = value || null;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
    this.length = 0;
  }

  append(value) {
    let newNode = new Node(value);
    let temp = this.headNode;

    if(temp === null) {
      this.headNode = newNode;  
    }
    else {
      while(temp.nextNode != null) {
        temp = temp.nextNode;
      }
      
      temp.nextNode = newNode;
    }

    this.length++;
  }

  prepend(value) {
    let newNode = new Node(value);
    let temp = this.headNode;

    if(temp === null) {
      this.headNode = newNode;
    }
    else {
      this.headNode = newNode;
      newNode.nextNode = temp;
    }
    
    this.length++;
  }

  size() {
    return this.length;
  }

  head() {
    return this.headNode;
  }
  
  tail() {
    let temp = this.headNode;

    while(temp.nextNode != null) {
      temp = temp.nextNode;
    }
    
    return temp;
  }

  at(index) {
    let temp = this.headNode;

    for(let i = 0; i < index; i++) {
      temp = temp.nextNode;
    }

    return temp;
  }

  pop() {
    let secondLastElem = this.at(this.length-2);
    secondLastElem.nextNode = null;
    this.length--;
  }

  contains(value) {
    let temp = this.headNode;

    while(temp.nextNode != null) {
      if(temp.value === value) {
        return true;
      }
      temp = temp.nextNode;
    }
    
    return false;
  }

  find(value) {
    let temp = this.headNode;
    let idx = 0;
    while(temp.nextNode != null) {
      if(temp.value === value) {
        return idx;
      }
      temp = temp.nextNode;
      idx++;
    }
    
    if(temp.value === value) {
      return idx;
    }

    return null;
  }

  toString() {
    let temp = this.headNode;
    let string = "";

    while(temp != null) {
      string += `( ${temp.value} ) => `;
      temp = temp.nextNode;
    }
    string += `(null)`;
    return string;
  }
  
  insertAt(value, index) {
    let curr = this.headNode;
    let prev = null;
    if(index > this.length - 1) return null;
    if(index === 0) {
      this.prepend(value);
      return;
    }

    for(let i = 0; i < index; i++) {
      prev = curr;
      curr = curr.nextNode;
    }

    let newNode = new Node(value);
    newNode.nextNode = curr;
    prev.nextNode = newNode;
    this.length++;
  }

  removeAt(index) {
    let curr = this.headNode;
    let prev = null;
    if(index > this.length - 1) return null;
    if(index === 0) {
      this.headNode = curr.nextNode;
      return;
    }

    for(let i = 0; i < index; i++) {
      prev = curr;
      curr = curr.nextNode;
    }
    prev.nextNode = curr.nextNode;
    this.length--;
  }
}