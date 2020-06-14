function getQueueInput() {
    return document.getElementById('queueInput').value;
}

function getFrameSlot() {
    return document.getElementById('frameSlot').value
}

function getTypeOfPageReplacement() {
    for(let i=0;i<document.getElementsByName('typePage').length;i++){
        if(document.getElementsByName('typePage')[i].checked){
            return document.getElementsByName('typePage')[i].value
        }
    };
}

function inputArray(input) {
    queue = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] != ' ' && queue[i] != ',') {
            queue.push(parseInt(input[i]));
        }
    }
    return queue;

}


function getInput() {
    let queueInput = inputArray(getQueueInput());
    let frameslot = parseInt(getFrameSlot());
    let type = getTypeOfPageReplacement();
    switch (type) {
        case 'fifo':{
                window.location.href = './fifo/fifo.html';
                break;
            }
        case 'clock':{
            window.location.href = './clock/clock.html';
            break;
        }
        case 'lru':{
            window.location.href = './lru/lru.html'
            break;
        }
        case 'optimal':{
            window.location.href = './optimal/optimal.html'
            break;
        }
        
        

    }


}