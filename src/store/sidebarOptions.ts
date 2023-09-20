import { NavOptions, navOptionsArray } from "@constants";
import { action, computed, makeObservable, observable } from "mobx";

export class SidebarOptions {
  _itemSelected = NavOptions.ABOUT_ME;

  constructor() {
    makeObservable(this, {
      _itemSelected: observable,
      itemSelected: computed,
      onSwipedRight: action,
      onSwipedLeft: action,
    });
  }

  get itemSelected(){
    return this._itemSelected;
  }

  set itemSelected(newItemSelected: string) {
    this._itemSelected = newItemSelected;
  }

  onSwipedRight() {
    const currentIndex = navOptionsArray.indexOf(this._itemSelected);
    if (currentIndex > 0) {
      this._itemSelected = navOptionsArray[currentIndex - 1];
    }
  }

  onSwipedLeft() {
    const currentIndex = navOptionsArray.indexOf(this._itemSelected);
    if (currentIndex < navOptionsArray.length - 1) {
      this._itemSelected = navOptionsArray[currentIndex + 1];
    }
  }
}

const sidebarOptions = new SidebarOptions();

export default sidebarOptions;