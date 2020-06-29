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
    console.log("page\tframe");

    for (let i = 0; i < queue.length; i++) {
        let status = 'miss'
        let isExsit = checkExsit(queue[i], frameSlot, frame);
        // console.log(isExsit);
        if (!isExsit) {
            frame[index] = queue[i];
            status = 'hit';
            domStep(queue[i], frameSlot, frame, status, index);
            index = ((index + 1) + frameSlot) % frameSlot; //loop from,
            continue;
        }
        domStep(queue[i], frameSlot, frame, status, index);
        // console.log(queue[i] + '\t' + frame);
    }
}


function main() {
    // let input = '0 1 2 3 0 1 4 0 1 2 3 4';
    let input = document.getElementById("page").value;
    let frameSlot = document.getElementById("frameSlot").value;
    console.log(frameSlot);

    //Convert string input to array
    let queue = inputArray(input);
    // console.log('INPUT: ' + input + '\n');
    fifo(frameSlot, queue);
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
    }
    let statusCell = document.createElement("td");
    statusCell.style.background = "rgb(0,255,0)"
    let statusText = document.createTextNode(status);
    statusCell.appendChild(statusText);
    row.appendChild(statusCell)
    tblBody.appendChild(row);
    tbl.appendChild(tblBody);
    tbl.setAttribute("border", "1");
}

// main();