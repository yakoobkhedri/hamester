// tabs

let tab = Array.from(document.querySelectorAll('.nav-tabs > li'));
let tabContent = Array.from(document.querySelectorAll('.tab-content > div'));


tab.forEach((item) => {
    item.addEventListener('click', function() {
      tab.forEach((items) => {items.classList.remove('active')});
        item.classList.add('active');
        let tabId = item.dataset.id;
        tabContent.forEach((content) => {
            let contentId = content.dataset.id;
            if (tabId === contentId) {
                content.classList.add('active');
            } else {
              content.classList.remove('active');
            }
        })
    })
  })