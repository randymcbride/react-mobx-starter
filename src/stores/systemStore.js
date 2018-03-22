import {observable, action} from 'mobx'

export default class SystemStore {
  @observable loading = false;
  constructor(rootStore){
    this.rootStore = rootStore
    this.toggleLoading = this.toggleLoading.bind(this)
  }
  @action toggleLoading(){
    this.loading = !this.loading
  }
}