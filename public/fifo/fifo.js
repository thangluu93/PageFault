function getQueueInput() {
    return document.getElementById('queueInput').value;
}

function getFrameSlot() {
    return document.getElementById('frameSlot').value
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


function checkExsit(queue, frameSlot, frame) {
    //check exist in frame
    for (let j = 0; j < frameSlot; j++) {
        if (queue === frame[j]) {
            return true;
        }
    };
    return false;
}


function fifo(frameSlot, queue) {

    index = 0; //index of frame
    let frame = [];

    for (let i = 0; i < queue.length; i++) {

        isExsit = checkExsit(queue[i], frameSlot, frame);
        // console.log(isExsit);
        if (!isExsit) {
            frame[index] = queue[i];
            index = ((index + 1) + frameSlot) % frameSlot; //loop from,
        }
        console.log(frame);
    }
}

function createBoxQueue(queue) {
    for (let i = 0; i < queue.length; i++) {
        let queueBox = document.createElement('div');
        queueBox.className = "queueBox";
        document.getElementById('queueBoxes').appendChild(queueBox);
    }
}


function main() {
    console.log('main');
    let input = '0 1 2 3 0 1 4 0 1 2 3 4';
    let frameSlot = parseInt(getFrameSlot());
    //Convert string input to array
    let queue = inputArray(input);
    createBoxQueue(queue);
    // fifo(frameSlot, queue);
}
