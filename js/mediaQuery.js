const navbar = document.querySelector('.toolbar');
const smallDevice = window.matchMedia('(max-width: 767px)');

const navMobile = `
<nav>
  <button type="button" class="hamburguer">&#9776;</button>
</nav>
`;

const navDesktop = `
<div class="top">
  <a href="https://www.facebook.com/E3Expo/"><img src="img/facebook.svg" alt="facebook"></a>
  <a href="https://twitter.com/e3"><img src="img/twitter.svg" alt="twitter"></a>
  <a class="linkTop" href="">English</a>
  <a class="linkTop" href="">My Page</a>
  <a class="linkTop" href="">Logout</a>
</div>
`;

function handleDeviceChange(e) {
  if (e.matches) {
    navbar.innerHTML = navMobile;
  } else {
    navbar.innerHTML = navDesktop;
  }
}

smallDevice.addListener(handleDeviceChange);

// Run it initially
handleDeviceChange(smallDevice);