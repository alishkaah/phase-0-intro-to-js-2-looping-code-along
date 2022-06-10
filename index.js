// Code your solutions in this file
function writeCards(arr,event){
    const newArray= [];
    for (let i=0 ;i< arr.length ; i++){
       // newArray[i] = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`;
       newArray.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)

        console.log(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
    }
    return newArray
}
writeCards(["Guadalupe", "Ollie","Aki"], "surprise");

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer);
        integer--;
    }
}
countDown(10);