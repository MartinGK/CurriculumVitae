import { NavOptions, NavOption } from "@constants";
import { action, computed, makeObservable, observable } from "mobx";

export class SidebarOptions {
  _itemSelected: NavOption = NavOptions.first;

  constructor() {
    makeObservable(this, {
      _itemSelected: observable,
      itemSelected: computed,
      onSwipedRight: action,
      onSwipedLeft: action,
    });
  }

  get itemSelected() {
    return this._itemSelected;
  }

  set itemSelected(newItemSelected: NavOption) {
    this._itemSelected = newItemSelected;
  }

  onSwipedRight() {
    if (this._itemSelected.position > 0) {
      this._itemSelected = NavOptions.getOptionByPosition(this._itemSelected.position - 1);
    }
  }

  onSwipedLeft() {
    if (this._itemSelected.position < Object.keys(NavOptions).length - 1) {
      this._itemSelected = NavOptions.getOptionByPosition(this._itemSelected.position + 1);
    }
  }
}

const sidebarOptions = new SidebarOptions();

export default sidebarOptions;