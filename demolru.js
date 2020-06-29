function inputArray(input) {
    queue = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i]==='-1') {
            break;
        }
        if (input[i] != ' ' && input[i] != ',') {
            queue.push(parseInt(input[i]));
        }
    }
    return queue;
}

function checkExsit(queueInput, frameSlot,  frame) {
    //check exsit
    for (let j = 0; j < frameSlot; j++) {
        if (frame[j] === queueInput) {
            return j;  //duplicate
        }
    }
    return false; //no duplicate
}



function lru(queue, frameSlot) {
    let frame=[];
    let duplicateCount=0;
   for (let i =0;i<queue.length;i++){
       if (checkExsit(queue[i],frameSlot,frame)===false) { // kiểm tra coi có số đó trong frame chưa nếu chưa thì mới chuyển trang
            indexReplace=checkExsit(queue[i-frameSlot-duplicateCount],frameSlot,frame);  // tìm vị trí sec chuyển trang trong frame;
            frame[indexReplace]=queue[i]; // thay số trong queue vào frame
            duplicateCount=0;  //restart duplicate
       }else{
           duplicateCount++;
       }
       console.log(queue[i]+'  '+frame);
   }
}

const main = () => {
    let input = '2 3 2 1 5 2 4 5 3 2 5 2';
    let queue;
    let frameSlot = 3;
     inputArray(input);
    queue = inputArray(input);
    lru(queue, frameSlot);

}

main();