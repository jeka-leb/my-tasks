const data = [{
    "folder": true,
    "title": "Grow",
    "children": [{
        "title": "logo.png"
      },
      {
        "folder": true,
        "title": "English",
        "children": [{
          "title": "Present_Perfect.txt"
        }]
      }
    ]
  },
  {
    "folder": true,
    "title": "Soft",
    "children": [{
        "folder": true,
        "title": "NVIDIA",
        "children": null
      },
      {
        "title": "nvm-setup.exe"
      },
      {
        "title": "node.exe"
      }
    ]
  },
  {
    "folder": true,
    "title": "Doc",
    "children": [{
      "title": "project_info.txt"
    }]
  },
  {
    "title": "credentials.txt"
  }
];

const rootNode = document.getElementById('root');

function renderTree(data) {
  let strHtml = '<ul class="hid">';
  if (!Array.isArray(data)) {
    strHtml += '<li class="empty-line"> Folder is empty </li>'
  } else {
    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      if (item.folder) {
        strHtml += `<li class="folder "><i class="material-icons file">folder</i>${item.title}</li>`
        if (item.hasOwnProperty('children')) {
          strHtml += renderTree(item.children)
        }
      } else {
        strHtml += `<li class="file changeable" data-id="${i + 1}">
        <i class="material-icons">insert_drive_file</i>${item.title}</li>`
      }
    }
  }
  return strHtml + '</ul>'
}
rootNode.innerHTML = renderTree(data);
document.querySelector("#root > ul").style.display = 'block';

let elements = [...document.getElementsByClassName('folder')];
elements.forEach(el => {
  el.addEventListener('click', function () {
    if (el.nextElementSibling.getElementsByTagName('li').length) {
      el.nextElementSibling.classList.toggle('hid')
      if (!el.nextElementSibling.classList.contains('hid')) {
        el.firstElementChild.textContent = 'folder_open'
      } else {
        el.firstElementChild.textContent = 'folder'
      }
    }
  })
})

let menuHtml = `<div class="context-menu" id="context-menu"><ul class="context-menu__item">
<li class="context-menu__items" data-action="Rename"> Rename </li>
<li class="context-menu__items" data-action="Delete"> Delete item </li></ul></div>`
document.body.insertAdjacentHTML('beforeend', menuHtml);

let itemClassName = 'changeable';
let itemInContext;
let menu = document.getElementById('context-menu');
let menuItems = menu.querySelectorAll(".context-menu__items");
let menuState = 0;
let active = "context-menu--active";

function toggleMenuOn() {
  if (menuState !== 1) {
    menuState = 1;
    menu.classList.add(active);
  }
}

function toggleMenuOff() {
  if (menuState !== 0) {
    menuState = 0;
    menu.classList.remove(active)
    if (itemInContext) {
      itemInContext.classList.remove('itemFocus');
    }
  }
}

function clickInsideElement(e, className) {
  let el = e.target;
  if (el.classList.contains(className)) {
    return el;
  } else {
    while (el === el.parentNode) {
      if (el.classList && el.classList.contains(className)) {
        return el;
      }
    }
  }
  if (itemInContext) {
    itemInContext.classList.remove('itemFocus');
  }
  return false;
}

function contextListener() {
  document.addEventListener('contextmenu', function (e) {
    itemInContext = clickInsideElement(e, itemClassName)
    if (itemInContext) {
      itemInContext.classList.add('itemFocus');
      e.preventDefault();
      toggleMenuOn();
      positionMenu(e)
    } else {
      toggleMenuOff();
      itemInContext = null;

    }
  })
}

function menuItemListener(element) {
  toggleMenuOff();
  if (element.getAttribute("data-action") === 'Rename') {
    let afterPoint = itemInContext.lastChild.textContent;
    let positionPoint = afterPoint.indexOf('.');
    itemInContext.insertAdjacentHTML('afterend', `<input type="text" value="${afterPoint}" 
    id="focused" class="inputClicked">`);
    let someInput = document.getElementById('focused');
    someInput.focus()
    someInput.setSelectionRange(0, positionPoint);
    someInput.addEventListener('click', () => {
      itemInContext.lastChild.textContent = someInput.value;
      someInput.remove();
    })
  }
  if (element.getAttribute("data-action") === 'Delete') {
    if (itemInContext.parentElement.children.length === 1) {
      itemInContext.outerHTML = '<li class="empty-line"> Folder is empty </li>'
    }
    itemInContext.remove();
  }
}

function clickListener() {
  document.addEventListener("click", function (e) {
    let clickEl = clickInsideElement(e, "context-menu__items");
    if (clickEl) {
      e.preventDefault();
      menuItemListener(clickEl);
    } else {
      toggleMenuOff();
    }
  });
}

function getPosition(e) {
  let posx = 0;
  let posy = 0;
  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx = e.clientX + document.body.scrollLeft +
      document.documentElement.scrollLeft;
    posy = e.clientY + document.body.scrollTop +
      document.documentElement.scrollTop;
  }
  return {
    x: posx,
    y: posy
  }
}

let menuPosition;
let menuPositionX;
let menuPositionY;
let menuWidth;
let menuHeight;
let windowWidth;
let windowHeight;
let clickCoords;
let clickCoordsX;
let clickCoordsY;

function positionMenu(e) {
  clickCoords = getPosition(e);
  clickCoordsX = clickCoords.x;
  clickCoordsY = clickCoords.y;
  menuWidth = menu.offsetWidth + 4;
  menuHeight = menu.offsetHeight + 4;
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  if (windowWidth - clickCoordsX < menuWidth) {
    menu.style.left = windowWidth - menuWidth + "px";
  } else {
    menu.style.left = clickCoordsX + "px";
  }
  if (windowHeight - clickCoordsY < menuHeight) {
    menu.style.top = windowHeight - menuHeight + "px";
  } else {
    menu.style.top = clickCoordsY + "px";
  }
}

function resizeListener() {
  window.onresize = function () {
    toggleMenuOff();
  };
}
clickListener()
contextListener();
resizeListener()