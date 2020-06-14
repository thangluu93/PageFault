function getQueueInput() {
    return document.getElementById('queueInput').value;
}

function getFrameSlot() {
    return document.getElementById('frameSlot').value
}

function getTypeOfPageReplacement() {
    return document.getElementById('typePage');
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
    console.log(type);
    switch (this.type) {
        case 'fifo':{
                window.location.href = './fifo/fifo.html';
                break;
            }
        case 'clock':{
            break;
        }

    }


}