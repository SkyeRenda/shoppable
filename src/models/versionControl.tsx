import { ItemModel } from "./itemModel";

class UndoList {
  undoList: Array<ItemModel[]>;

  constructor() {
    this.undoList = [];
  }

  undoAdd(list: ItemModel[]) {
    if (this.undoList.length === 3) {
      this.undoList.shift();
    }
    this.undoList.push(list);
  }

  restoreUndo() {
    return this.undoList.pop();
  }
}
