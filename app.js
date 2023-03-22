// HAMBUGGER MENU

function myElement(selector) {
  return document.querySelector(selector);
}

const menu = myElement('#hambuger');
const navbar = myElement('.mobile-nav');
const closeNav = myElement('.close-btn');
const choose = myElement('.mobile-nav');

function addMenu(selected) {
  return selected.addEventListener('click', () => navbar.classList.add('nav-toggle'));
}

function removeMenu(selected) {
  return selected.addEventListener('click', () => navbar.classList.remove('nav-toggle'));
}

addMenu(menu);
removeMenu(closeNav);
removeMenu(choose);

// Dynamic speakers
const more = document.querySelector('#more');
const speakers = document.querySelector('.about-head');

const dynamics = [
  {
    image: 'images/image-1.png',
    name: 'Yochai Benkler',
    position: 'Berkman Professor of Enterpreneural Legal Studies',
    duties: 'Benkler studies commons-based peer production, published his seminal book The Wealth of Network in 2016',

  },
  {
    image: 'images/image-2.png',
    name: 'Yochai Benkler',
    position: 'Berkman Professor of Enterpreneural Legal Studies',
    duties: 'Benkler studies commons-based peer production, published his seminal book The Wealth of Network in 2016',

  },
  {
    image: 'images/image-3.png',
    name: 'Yochai Benkler',
    position: 'Berkman Professor of Enterpreneural Legal Studies',
    duties: 'Benkler studies commons-based peer production, published his seminal book The Wealth of Network in 2016',

  },
  {
    image: 'images/image-4.png',
    name: 'Yochai Benkler',
    position: 'Berkman Professor of Enterpreneural Legal Studies',
    duties: 'Benkler studies commons-based peer production, published his seminal book The Wealth of Network in 2016',

  },
  {
    image: 'images/image-5.png',
    name: 'Yochai Benkler',
    position: 'Berkman Professor of Enterpreneural Legal Studies',
    duties: 'Benkler studies commons-based peer production, published his seminal book The Wealth of Network in 2016',

  },
  {
    image: 'images/image-6.png',
    name: 'Yochai Benkler',
    position: 'Berkman Professor of Enterpreneural Legal Studies',
    duties: 'Benkler studies commons-based peer production, published his seminal book The Wealth of Network in 2016',

  },
];

// Dynamic list
more.addEventListener('click', () => {
  for (let i = 0; i < dynamics.length; i += 1) {
    const myGuest = dynamics[i];
    const dig = document.createElement('div');
    dig.classList.add('about-dir');
    dig.innerHTML = `
        <div class="about-box">
          <div class="speaker">
            <div class="image">
              <img src="${myGuest.image}" alt="speaker-image">
            </div>
            <div class="speak">
              <h2>${myGuest.name}</h2>
              <p><em>${myGuest.position}</em></p>
              <div class="line2"></div>
              <p>${myGuest.duties}</p>
            </div>
          </div>
        </div>
      `;
    speakers.appendChild(dig);
  }
});
