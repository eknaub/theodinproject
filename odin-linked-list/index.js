import { LinkedList } from "./linkedlist.js";

const linked = new LinkedList();

console.log("Append 1 and 2");
linked.append(1);
linked.append(2);
console.log(linked.toString());

console.log("Prepend 3");
linked.prepend(3);
console.log(linked.toString());

console.log("Size");
console.log(linked.size());

console.log("Headnode");
console.log(linked.head());

console.log("Tailnode");
console.log(linked.tail());

console.log("At idx 1");
console.log(linked.at(1));

console.log("pop");
linked.pop();
console.log(linked.toString());

console.log("contains value 3");
console.log(linked.contains(3));
console.log("contains value 4");
console.log(linked.contains(4));

console.log("find value 1 idx");
console.log(linked.find(1));
console.log("find value 4 idx");
console.log(linked.find(4));

console.log("Initial List for Adding");
console.log(linked.toString());
console.log("Add 4 to idx 2");
linked.insertAt(4, 2);
console.log(linked.toString());
console.log("Add 5 to idx 1");
linked.insertAt(5, 1);
console.log(linked.toString());
console.log("Add 6 to idx 0");
linked.insertAt(6, 0);
console.log(linked.toString());

console.log("Initial List for Removing");
console.log(linked.toString());
console.log("Remove idx 4");
linked.removeAt(4);
console.log(linked.toString());
console.log("Remove idx 2");
linked.removeAt(2);
console.log(linked.toString());
console.log("Remove idx 0");
linked.removeAt(0);
console.log(linked.toString());