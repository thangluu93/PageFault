function getTypeOfPageReplacement() {
    for (let i = 0; i < document.getElementsByName('typePage').length; i++) {
        if (document.getElementsByName('typePage')[i].checked) {
            return document.getElementsByName('typePage')[i].value
        }
    };
}

function getInput() {
    let type = getTypeOfPageReplacement();
    switch (type) {
        case 'fifo': {
            window.location.href = './fifo.html';
            break;
        }
        case 'clock': {
            window.location.href = './clock.html';
            break;
        }
        case 'lru': {
            window.location.href = './lru.html'
            break;
        }
        case 'optimal': {
            window.location.href = '.optimal.html'
            break;
        }
    }
}
