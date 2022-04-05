window.onload = function(){

const myStory = { 
    // holds story text and choices
    opener: {
        text: `All your life, you lived in dullness and settled for the most comfortable option. You work a nine-to-five corporate job making enough to get by a year, living in a one-bedroom studio with no furniture other than a futon. You’ve decided it’s time for a change, and you go outside for a hike around the very mundane, stale, and boring town of Mungville, where everyone lives the same boring life, seeking only comfort in what is attainable. As you are walking, you end up witnessing a glowing dark portal with an odd heat coming off of its exterior. What do you do?`,
        choice: [["goPortal","Go into Portal"],["home","Go Home"],["walk","Continue your walk"]],
    },

}
var storyList =[];
var button1 = document.getElementById('1Watcher')
var button1elem = document.getElementById('button1').innerText
var button2elem = document.getElementById('button2').innerText
var button3elem = document.getElementById('button3').innerText
console.log(button1elem)

button1.addEventListener("click", storyTeller(button1elem));


function storyTeller(input){
input.append(storyList)
}

}