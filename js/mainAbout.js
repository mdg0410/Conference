const sidebar = document.querySelector('.sidebar');
const footer = document.querySelector('.infoRegister');
const smallDevice = window.matchMedia('(min-width: 768px)');

document.querySelector('.hamburguer').addEventListener('click', () => {
  sidebar.style.left = '0';
});
document.querySelector('#closeMenu').addEventListener('click', () => {
  sidebar.style.left = '100%';
});
document.querySelector('.menu-items').addEventListener('click', () => {
  sidebar.style.left = '100%';
});

function handleDeviceChange(e) {
  if (e.matches) {
    footer.innerHTML = '';
    footer.innerHTML = `
      <p>2023 Creative Design Ecuador. Some Rights Reserved.</p>
      <p>Sold and fulfilled by FastSpring - an authorized reseller. Bright Market (dba FastSpring), 801 Garden St., Santa Barbara, CA 93101, is the authorized reseller of our products and services on PrivacyPolicies.com</p>
    `;
  } else {
    footer.innerHTML = '';
    footer.innerHTML = `
    <p>2023 Creative Design Ecuador<br>Some Rights Reserved.</p>
    `;
  }
}

smallDevice.addListener(handleDeviceChange);

// Run it initially
handleDeviceChange(smallDevice);