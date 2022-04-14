const menuNav = document.querySelector('.headline-nav');
const menuBtn = document.querySelector('.bars-menu');
const body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
  menuNav.classList.toggle('active');
  body.classList.toggle('overflow-disabled');
});

// Dynamic featured speakers
const speakers = [
  {
    speaker_image: {
      speaker_bihind: './img/bgphoto.jpg',
      speaker_orgin: './img/antonioguterres.jpg',
    },
    speaker_description: {
      s_name: 'Antonio Guterres',
      role: 'General secretary, UN',
      s_paragraph: 'A member of the Portuguese Socialist Party, Guterres served as prime minister of Portugal from 1995 to 2002.',
    },
  },
  {
    speaker_image: {
      speaker_bihind: './img/bgphoto.jpg',
      speaker_orgin: './img/hepaulkagame.jpg',
    },
    speaker_description: {
      s_name: 'HE Paul Kagame',
      role: 'President, Republic of Rwanda',
      s_paragraph: 'Paul Kagame is a Rwandan politician and former military leader. He is the sixth and current president of Rwanda.',
    },
  },
  {
    speaker_image: {
      speaker_bihind: './img/bgphoto.jpg',
      speaker_orgin: './img/oprah.jpg',
    },
    speaker_description: {
      s_name: 'Oprah Winfrey',
      role: 'American Host',
      s_paragraph: 'Oprah Gail Winfrey is an American talk show host, television producer, actress, author, and philanthropist.',
    },
  },
  {
    speaker_image: {
      speaker_bihind: './img/bgphoto.jpg',
      speaker_orgin: './img/alsisi.jpg',
    },
    speaker_description: {
      s_name: 'Abdel Fattah',
      role: 'President, Egypt',
      s_paragraph: 'retired military officer and Egyptian politician who has served as the sixth and current president of Egypt.',
    },
  },
  {
    speaker_image: {
      speaker_bihind: './img/bgphoto.jpg',
      speaker_orgin: './img/emmanuelmacron.jpg',
    },
    speaker_description: {
      s_name: 'Emmanuel Macron',
      role: 'President, France',
      s_paragraph: 'French politician who has been serving as the president of France since 14 May 2017.',
    },
  },
  {
    speaker_image: {
      speaker_bihind: './img/bgphoto.jpg',
      speaker_orgin: './img/elizabethwarren.jpg',
    },
    speaker_description: {
      s_name: 'Elizabeth Warren',
      role: 'Member of the United States Senate',
      s_paragraph: 'American politician and former law professor who is the senior United States senator from Massachusetts.',
    },
  },
];

const speakerSection = document.querySelector('.speakers-section');

const h3 = document.createElement('h3');
h3.textContent = 'Featured speakers';
speakerSection.appendChild(h3);

const firstHr = document.createElement('hr');
firstHr.classList.add('line');
speakerSection.appendChild(firstHr);

const speakersWrapper = document.createElement('div');
speakersWrapper.classList.add('speakers-wrapper');
speakerSection.appendChild(speakersWrapper);

for (let i = 0; i < speakers.length; i += 1) {
  const speakerCard = document.createElement('article');
  speakerCard.classList.add('speaker-card');
  speakersWrapper.appendChild(speakerCard);

  const speakerImage = document.createElement('div');
  speakerImage.classList.add('speaker-image');
  speakerCard.appendChild(speakerImage);

  const speakerBihind = document.createElement('img');
  speakerBihind.classList.add('speaker-bihind');
  speakerBihind.src = speakers[i].speaker_image.speaker_bihind;
  speakerImage.appendChild(speakerBihind);

  const speakerOrgin = document.createElement('img');
  speakerOrgin.classList.add('speaker-orgin');
  speakerOrgin.src = speakers[i].speaker_image.speaker_orgin;
  speakerImage.appendChild(speakerOrgin);

  const speakerDescription = document.createElement('div');
  speakerDescription.classList.add('speaker-description');
  speakerCard.appendChild(speakerDescription);
  const descH5 = document.createElement('h5');
  descH5.innerHTML = speakers[i].speaker_description.s_name;
  speakerDescription.appendChild(descH5);

  const descH6 = document.createElement('h6');
  descH6.innerHTML = speakers[i].speaker_description.role;
  speakerDescription.appendChild(descH6);

  const secondHr = document.createElement('hr');
  secondHr.classList.add('small-line');
  speakerDescription.appendChild(secondHr);

  const paragraph = document.createElement('p');
  paragraph.innerHTML = speakers[i].speaker_description.s_paragraph;
  speakerDescription.appendChild(paragraph);
}

const moreBtn = document.createElement('button');
moreBtn.classList.add('more-btn');
moreBtn.textContent = 'More';
speakerSection.appendChild(moreBtn);

const cardSpeaker = document.getElementsByClassName('speaker-card');
cardSpeaker[2].classList.add('disabled');
cardSpeaker[3].classList.add('disabled');
cardSpeaker[4].classList.add('disabled');
cardSpeaker[5].classList.add('disabled');

const btnMore = document.querySelector('.more-btn');
btnMore.addEventListener('click', () => {
  btnMore.classList.toggle('disabled');
  cardSpeaker[2].classList.toggle('disabled');
  cardSpeaker[3].classList.toggle('disabled');
  cardSpeaker[4].classList.toggle('disabled');
  cardSpeaker[5].classList.toggle('disabled');
});