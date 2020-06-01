function inputArray(input) {
    queue = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] != ' ' && queue[i] != ',') {
            queue.push(parseInt(input[i]));
        }
    }
    return queue;

}

function checkExsit(queueInput, frameSlot,  frame) {
    //check exsit
    for (let j = 0; j < frameSlot; j++) {
        if (frame[j] === queueInput) {
            return j;
        }
    }
    return null;

}



function clock(queue, frameSlot) {
    let status = [];
    let frame = [];
    let statusIndex = 0;
    let indexOfDuplicatate

    //create status
    for (let i = 0; i < frameSlot; i++) {
        status[i] = 0;
    }

    for (let i = 0; i < queue.length; i++) {
        //check exsit
        indexOfDuplicatate = checkExsit(queue[i], frameSlot, frame);
        if (indexOfDuplicatate === null) {
            if (status[statusIndex] === 0) {
                frame[statusIndex] = queue[i];
                statusIndex = ((statusIndex + 1) + frameSlot) % frameSlot;
                console.log(frame + '     ' + status + '      ' + statusIndex);
                continue;
            } else {
                status[statusIndex] = 0;
                statusIndex = ((statusIndex + 1) + frameSlot) % frameSlot;
                frame[statusIndex] = queue[i];
                statusIndex = ((statusIndex + 1) + frameSlot) % frameSlot;
                console.log(frame + '     ' + status + '      ' + statusIndex);
                continue;
            }
        }else{
            frame[indexOfDuplicatate]=1;
            continue;

        }
    }
}

const main = () => {
    let input = '7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1';
    let queue;
    let frameSlot = 3;
    inputArray(input);
    queue = inputArray(input);
    clock(queue, frameSlot);

}

main();
