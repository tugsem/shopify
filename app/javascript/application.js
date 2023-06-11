// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"
const appElement = document.getElementById('app')
appElement.innerHTML = '<strong>Hello World!</strong>'

module.exports = {
  foo: 'bar'
}