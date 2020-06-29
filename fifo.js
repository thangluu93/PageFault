function inputArray(input) {
    let queue = [];

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

    let index = 0; //index of frame
    let frame = [];

    for (let i = 0; i < queue.length; i++) {

        let isExsit = checkExsit(queue[i], frameSlot, frame);
        // console.log(isExsit);
        if (!isExsit) {
            frame[index] = queue[i];
            index = ((index + 1) + frameSlot) % frameSlot; //loop from,
        }
        console.log(frame);
    }
}


function main() {
    let input = '0 1 2 3 0 1 4 0 1 2 3 4';
    console.log(input);
    let frameSlot = 3;
    //Convert string input to array
    let queue = inputArray(input);
    fifo(frameSlot, queue);
}



main();