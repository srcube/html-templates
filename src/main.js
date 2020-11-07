import './assets/css/reset.css'

import ContainerHtml, { container, mode } from './template/section.js'
import HeaderHtml from '%/demo/demo.js'

const App = document.getElementById('app')

App.innerHTML = ContainerHtml
mode('dark')

const Container = document. getElementById('container')

Container.innerHTML = HeaderHtml