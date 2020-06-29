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



function lru(queue, frameSlot) {
    let frame = [];
    let duplicateCount = 0;

    for (let i = 0; i < queue.length; i++) {
        let status = "miss"
        if (checkExsit(queue[i], frameSlot, frame) === false) { // kiểm tra coi có số đó trong frame chưa nếu chưa thì mới chuyển trang
            let indexReplace = checkExsit(queue[i - frameSlot - duplicateCount], frameSlot, frame);  // tìm vị trí sec chuyển trang trong frame;
            frame[indexReplace] = queue[i]; // thay số trong queue vào frame
            duplicateCount = 0;  //restart duplicate
            status = "hit";
            domStep(queue[i], frameSlot, frame, status,indexReplace);
            continue;
        } else {
            domStep(queue[i], frameSlot, frame, status,0);
            duplicateCount++;
        }
        // console.log(queue[i] + '\t' + frame);

    }
}

const main = () => {
    // let input = '7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1';
    // let frameSlot = 3;
    let input = document.getElementById("page").value;
    let frameSlot = document.getElementById("frameSlot").value;
    inputArray(input);
    let queue = inputArray(input);
    lru(queue, frameSlot);

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
