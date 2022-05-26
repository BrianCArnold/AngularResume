import { SkillTag } from "./SkillTag";

export interface ISkillCheckItem{
  value: SkillTag;
  name: string;
  isSelected: boolean;
  isClosed: boolean;
  children: ISkillCheckItem[];
}

export class SkillCheckItem implements ISkillCheckItem {
  constructor(_value: SkillTag, _name: string, _isSelected: boolean = true, _isClosed: boolean = false, _children: ISkillCheckItem[] = []) {
    this.value = _value;
    this.name = _name;
    this.children = _children || [];
    this.isClosed = _isClosed;
    this.isSelected = _isSelected;
  }
  value: SkillTag;
  name: string;
  private _isSelected: boolean;
  get isSelected(): boolean{
    if (this.children.length > 0) {
      return this.children.map(c => c.isSelected).reduce((p,v) => p && v);
    }
    else {
      return this._isSelected;
    }
  }
  set isSelected(v: boolean) {
    if (this.children.length > 0) {
      for (var i = 0; i < this.children.length; i++){
          this.children[i].isSelected = v;
      }
    }
    else {
      this._isSelected = v;
    }
  }
  isClosed: boolean;
  children: ISkillCheckItem[];
}
