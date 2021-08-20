const baconContainer = document.querySelector('.js-bacon')
const moreBaconBtn = baconContainer?.querySelector('button')

const cloneElement = (element) => {
  const clone = element.cloneNode(true)
  element.parentNode.appendChild(clone)
}

const createMoreBacon = () => {
  moreBaconBtn.addEventListener('click', () => {
    const bacon = baconContainer.querySelector('img')
    cloneElement(bacon)
  })
}

if (baconContainer && moreBaconBtn) {
  createMoreBacon()
}
