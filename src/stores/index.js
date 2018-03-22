import SystemStore from './systemStore'

export default class RootStore{
  constructor(){
    this.system = new SystemStore(this)
  }
}