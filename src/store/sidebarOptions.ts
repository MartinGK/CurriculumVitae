import { NavOptions, navOptionsArray } from "@constants";
import { makeAutoObservable } from "mobx";

export class SidebarOptions {
    itemSelected = NavOptions.ABOUT_ME;
  
    constructor() {
      makeAutoObservable(this);
    }
  
    setItemSelected(newItemSelected: string) {
      this.itemSelected = newItemSelected;
    }
  
    onSwipedRight() {
      const currentIndex = navOptionsArray.indexOf(this.itemSelected);
      if (currentIndex > 0) {
        this.itemSelected = navOptionsArray[currentIndex - 1];
      }
    }
  
    onSwipedLeft() {
      const currentIndex = navOptionsArray.indexOf(this.itemSelected);
      if (currentIndex < navOptionsArray.length - 1) {
        this.itemSelected = navOptionsArray[currentIndex + 1];
      }
    }
  }