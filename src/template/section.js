import ContainerHtml from './section.html'
import './section.css'

export function mode(mode) {
  const container = document.getElementById('container')

  if (mode == 'light') container.className = 'light'
  else if (mode == 'dark') container.className = 'dark'
  else container.className = 'filling'
}

export default ContainerHtml