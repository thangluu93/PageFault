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
    return null; //no duplicate
}



function clock(queue, frameSlot) {
    let status = [];
    let frame = [];
    let statusIndex = 0;
    let indexOfDuplicatate;

    //create status
    for (let i = 0; i < frameSlot; i++) {
        status[i] = 0;
    }

    for (let i = 0; i < queue.length; i++) {
        let noti = "miss"
        //check exsit
        let indexOfDuplicatate = checkExsit(queue[i], frameSlot, frame);
        if (indexOfDuplicatate === null) {  //no duplicate
            if (status[statusIndex] === 0) {
                frame[statusIndex] = queue[i];
                noti = "hit"
                domStep(queue[i], frameSlot, frame, noti, statusIndex);
               
                statusIndex = ((statusIndex + 1) + frameSlot) % frameSlot;
                domStatus(status, statusIndex, frameSlot);
                console.log(queue[i] + '\t' + frame + '\t' + status + '\t' + statusIndex);
                continue;
            } else {
                status[statusIndex] = 0;
                statusIndex = ((statusIndex + 1) + frameSlot) % frameSlot;
                frame[statusIndex] = queue[i];
                noti = "hit"
                domStep(queue[i], frameSlot, frame, noti, statusIndex);
                
                statusIndex = ((statusIndex + 1) + frameSlot) % frameSlot;
                domStatus(status, statusIndex, frameSlot);
                console.log(queue[i] + '\t' + frame + '\t' + status + '\t' + statusIndex);
                continue;
            }
        } else {  //duplicate
            domStep(queue[i], frameSlot, frame, noti, 0);
            status[indexOfDuplicatate] = 1;
            domStatus(status, statusIndex, frameSlot);
            console.log(queue[i] + '\t' + frame + '\t' + status + '\t' + statusIndex);
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
    console.log("INPUT: " + input);
    console.log('queue\tframe\tstatus\tstatus');

    clock(queue, frameSlot);
}

function domStep(queue, frameSlot, frame, status, index) {
    let tbl = document.getElementsByTagName("table")[0];
    let tblBody = document.createElement("tbody");
    let row = document.createElement("tr");

    let queueCell = document.createElement("td");
    queueCell.style.background = "rgb(255,0,0)"
    let queueText = document.createTextNode(queue);
    queueCell.appendChild(queueText);
    row.appendChild(queueCell);

    for (var j = 0; j < frameSlot; j++) {
        let cellFrame = document.createElement("td");
        let frameText = document.createTextNode(frame[j]);
        if (j === index && status === "hit") {
            cellFrame.style.background = "rgb(0,0,255)"
        }
        cellFrame.appendChild(frameText);
        row.appendChild(cellFrame);
    };

    let statusCell = document.createElement("td");
    statusCell.style.background = "rgb(50,50,50)"
    let statusText = document.createTextNode(status);
    statusCell.appendChild(statusText);
    row.appendChild(statusCell)
    tblBody.appendChild(row);
    tbl.appendChild(tblBody);
    tbl.setAttribute("border", "1");
}

function domStatus(status, statusIndex, frameSlot) {
    let tbl = document.getElementsByTagName("table")[1];
    let tblBody = document.createElement("tbody");
    let row = document.createElement("tr");
    for (var j = 0; j < frameSlot; j++) {
        let cellStatus = document.createElement("td");
        let statusText = document.createTextNode(status[j]);
        if (j === statusIndex ) {
            cellStatus.style.background = "rgba(50,50,50,0.5)"
        }
        cellStatus.appendChild(statusText);
        row.appendChild(cellStatus);
    };
    tblBody.appendChild(row);
    tbl.appendChild(tblBody);
    tbl.setAttribute("border", "1");
}

// main();
