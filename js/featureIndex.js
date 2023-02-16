const containerSpeakers = document.querySelector('.containerSF');
const smallDevice = window.matchMedia('(max-width: 767px)');

const speakers = [
  {
    imagen: './img/speaker_01.svg',
    speaker: 'Yomico Moreno',
    descrip: 'Yomico Moreno is an acclaimed tattoo artist based in Venezuela who is known for his surreal and hyperreal style.',
    resumen: 'His artwork has earned him incredible recognition in both the international and Latin American tattoo community.',
  },
  {
    imagen: './img/speaker_02.svg',
    speaker: 'Doctor Woo',
    descrip: 'Known as Dr. Woo, he is undoubtedly one of the best tattoo artists for Hollywood stars.',
    resumen: 'He has been tattooing since the age of 13 and perfected his technique as a black and gray tattooist with a specialty in fine single needle lines at Shamrock Social Club, Los Angeles.',
  },
  {
    imagen: './img/speaker_03.svg',
    speaker: 'Burned data',
    descrip: 'This field has burned-in data where a brief description of the speaker would be entered.',
    resumen: 'This field has burned-in data where a brief summary of the speaker would be entered.',
  },
  {
    imagen: './img/speaker_04.svg',
    speaker: 'Burned data',
    descrip: 'This field has burned-in data where a brief description of the speaker would be entered.',
    resumen: 'This field has burned-in data where a brief summary of the speaker would be entered.',
  },
  {
    imagen: './img/speaker_05.svg',
    speaker: 'Burned data',
    descrip: 'This field has burned-in data where a brief description of the speaker would be entered.',
    resumen: 'This field has burned-in data where a brief summary of the speaker would be entered.',
  },
  {
    imagen: './img/speaker_06.svg',
    speaker: 'Burned data',
    descrip: 'This field has burned-in data where a brief description of the speaker would be entered.',
    resumen: 'This field has burned-in data where a brief summary of the speaker would be entered.',
  },
];

const addSpeaker = (i) => {
  const template = `
  <div class="sectionFeature">
    <img src="${speakers[i].imagen}" alt="Speaker1">
    <div class="infoFeature">
      <h4><b>${speakers[i].speaker}</b></h4>
      <p>${speakers[i].descrip}</p>
      <div class="line" id="lineInfo"></div>
      <small>${speakers[i].resumen}</small>
    </div>
  </div>
`;
  containerSpeakers.innerHTML += template;
};

function handleDeviceChange(e) {
  if (e.matches) {
    containerSpeakers.innerHTML = '';
    for (let i = 0; i < 2; i += 1) {
      addSpeaker(i);
    }
  } else {
    containerSpeakers.innerHTML = '';
    for (let i = 0; i < 6; i += 1) {
      addSpeaker(i);
    }
  }
}

smallDevice.addListener(handleDeviceChange);

// Run it initially
handleDeviceChange(smallDevice);