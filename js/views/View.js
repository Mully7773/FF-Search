export default class View {
  #data;

  _clear() {
    this._parentElement.innerHTML = "";
  }
}
