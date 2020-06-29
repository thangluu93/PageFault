function inputArray(input) {
    let queue = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '-1') {
            break;
        }
        if (input[i] != ' ' && input[i] != ',') {
            queue.push(parseInt(input[i]));
        }
    }
    return queue;
}

function checkExsit(queueInput, frameSlot, frame) {
    //check exsit
    for (let j = 0; j < frameSlot; j++) {
        if (frame[j] === queueInput) {
            return j;  //duplicate
        }
    }
    return false; //no duplicate
}

function findDuplicateInFuture(queueInput, queue, i) {
    i = i + 1
    for (i; i < queue.length; i++) {
        if (queueInput === queue[i]) {
            return i;
        }
    }
    return null;
}



function optimal(queue, frameSlot) {

    let frame = [];
    let test = [];
    for (let i = 0; i < queue.length; i++) {
        let index = findDuplicateInFuture(queue[i], queue, i);
        let page = new Page();
        page.number = queue[i];
        page.index = index;
        let indexOfExsit = checkExsit(queue[i], frameSlot, frame);
        if (indexOfExsit != false) {
            frame[indexOfExsit] = page;
            console.log('indexOfExsit: ' + indexOfExsit);
        } else {

            let maxIndex = frame[0].index;
            for (let j = 0; j < frameSlot - 1; j++) {
                if (frame[j].index < frame[j + 1].index) {
                    maxIndex = frame[j + 1].index;
                }
            }
            frame[maxIndex] = page;
        }
        console.log(frame);

    }
}

class Page {
    number;
    index;

    constructor(number, index) {
        number = this.number;
        index = this.index;
    }
}
const main = () => {
    let input = '7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1';
    let queue;
    let frameSlot = 3;
    inputArray(input);
    queue = inputArray(input);
    optimal(queue, frameSlot);

}

main();
