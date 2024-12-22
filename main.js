const getComputerChoice = () =>{
let cpuChoice = Math.round(Math.random() * 3);
if (cpuChoice === '1'){
    return 'rock';
}else if (cpuChoice === 2){
    return 'paper';
}else if (cpuChoice === 3){
    return 'scissors';
}else{
    console.log('Error in getComputerChoice() function');
}
}

