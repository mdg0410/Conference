const navbar = document.querySelector('.toolbar');
const smallDevice = window.matchMedia('(max-width: 767px)');

const navMobile = ``;

const navDesktop = ``;

function handleDeviceChange(e) {
  if (e.matches) {
    navbar.innerHTML = '';
  } else {
    navbar.textContent = 'Mobile';
  }
}

smallDevice.addListener(handleDeviceChange);

// Run it initially
handleDeviceChange(smallDevice);