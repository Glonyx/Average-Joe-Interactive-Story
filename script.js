
window.onload = function () {


    var myStory = {
        // holds story text and choices
        opener: {
            text: `All your life, you lived in dullness and settled for the most comfortable option. You work a nine-to-five corporate job making enough to get by a year, living in a one-bedroom studio with no furniture other than a futon. You’ve decided it’s time for a change, and you go outside for a hike around the very mundane, stale, and boring town of Mungville, where everyone lives the same boring life, seeking only comfort in what is attainable. As you are walking, you end up witnessing a glowing dark portal with an odd heat coming off of its exterior. What do you do?`,
            choice: [["goPortal", "Go into Portal"], ["home", "Go Home"], ["walk", "Continue your walk"]],
        },

        goPortal: {
            text: `As you step through the glistening portal you are swept into a darkened room. On the walls there are torches lighting the mossy walls of the room. On the sides of the room there seems to be a couple of mysterious portals of fluctuating light. At each side of the room there is what seems to be a dark figure. As they step closer to you, you realize what they truly are… You are met with three burly and strong hog riders from the hit game clash of clans.  They start to walk closer to you with a terrible glare in the piggy's eye. They raise their hammers and charge at you. You only have seconds to think of what to do.`,
            choice: [[`stealHog`, `Attempt to Steal a Hog`], [`tryDodge`, `Try To Dodge Them`], [`askHog`, `Ask to be a Hog Rider`]],
        }

        

    }
    var storyList = ["opener"];
    var button1 = document.querySelector('b1')
    var button1elem = document.getElementById('button1').innerText
    var button2elem = document.getElementById('button2').innerText
    var button3elem = document.getElementById('button3').innerText
    console.log(button1elem)
    console.log(button1)
    console.log("Variables Built: 13-21")
    b1.addEventListener("click", function () {
        console.log("Button 1 Clicked")
        storyBuilder(button1elem, myStory.opener.text)
        storyChanger()
    })


    b2.addEventListener("click", function () {
        console.log("Button 2 Clicked")
        storyChanger()
    })


    b3.addEventListener("click", function () {
        console.log("Button 3 Clicked")
        storyChanger()
    })


    function storyBuilder(choice, currentText) {
        console.log(choice)
        console.log(currentText)
        for (var i = 0; i < 5; i++) {
            console.log('Story Build ' + [i])
            console.log(myStory.opener)
            if (myStory.opener.text === currentText) {
                console.log("foundmatch")
                for(var a=0;a<(myStory.opener.choice).length;a++)
                if (myStory.opener.choice[a]===choice){
                    console.log('Choice Found')
                }
                
            }

            else
                console.log('No Match Found')
        }

    }

}
function storyChanger(textOutput) {
    document.getElementById('textArea').innerHTML = textOutput;
}