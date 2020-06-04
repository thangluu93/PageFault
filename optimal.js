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

function findDuplicateInFuture(queueInput,queue,i){
    for( i+1;i<queue.length;i++){
        if (queueInput===queue[i]) {
            return i;
        }
    }
}



function optimal(queue, frameSlot) {
   page=new Page();
    let frame=[];
    for (let i=0;i<queue.length;i++){
        
        page.number=queue[i];
        page.index =findDuplicateInFuture(queue[i],queue,i);
        console.log(page);
    }
}

class Page {
   number;
   index;

    constructor(number,index){
        number=this.number;
        index=this.index;
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
