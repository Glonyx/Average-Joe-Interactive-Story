let storyList = ["opener"];
var myStory = {
    // holds story text and choices
    opener: {
        text: `All your life, you lived in dullness and settled for the most comfortable option. You work a nine-to-five corporate job making enough to get by a year, living in a one-bedroom studio with no furniture other than a futon. You’ve decided it’s time for a change, and you go outside for a hike around the very mundane, stale, and boring town of Mungville, where everyone lives the same boring life, seeking only comfort in what is attainable. As you are walking, you end up witnessing a glowing dark portal with an odd heat coming off of its exterior. What do you do?`,
        choice: [["goPortal", "Go into Portal"], ["goHome", "Go Home"], ["walk", "Continue your walk"]],
    },

    goPortal: {
        text: `As you step through the glistening portal you are swept into a darkened room. On the walls there are torches lighting the mossy walls of the room. On the sides of the room there seems to be a couple of mysterious portals of fluctuating light. At each side of the room there is what seems to be a dark figure. As they step closer to you, you realize what they truly are… You are met with three burly and strong hog riders from the hit game clash of clans.  They start to walk closer to you with a terrible glare in the piggy's eye. They raise their hammers and charge at you. You only have seconds to think of what to do.`,
        choice: [[`stealHog`, `Attempt to Steal a Hog`], [`tryDodge`, `Try To Dodge Them`], [`askHog`, `Ask to be a Hog Rider`]],
    },

            stealHog: {
                text:`Suddenly, the hog riders start to charge at you full speed. You only have moments to think of something to do but you decide that you are going to attempt to steal a hog. You brace for the impact that might soon hit your body but as one of them approaches you, you jump in the air on top of the hog! You stand their grabbing onto the hog rider for dear life as the hog spins and jumps in circles screaming for justice. Eventually, you are able to pull the hog rider off and you take his hammer as he drops it on the floor. You actually did it! You successfully stole a hog from the hog riders and only two of them remain left in the room. In the room two portals emerge from the walls. You look to the right and see another mysteriously dark portal. You hear cries of children and arcade machines through this portal. Additionally, the warm smell of pizza from your favorite pizza place falls adrift in the air surrounding you. To the left there also seems to be another lightly colored portal that seems a little bit less menacing. The portal emanates signs of screaming and music. The silky surface of the portal pulsates with every kick of the bass in the room beyond. Right as you finish examining the cheerful portal you hear the sound of pig squeals as the remaining hog riders start to charge with fury at you and the stolen piggy! `,
                choice: [[`chargeHog`, `Charge at the Remaining Hog Riders`], []],
            },

                    chargeHog: {
                        text: `You charge at the hog riders but you are faced with the blunt impact of a hammer that launches you through the air and off the hog. You land flat on your face right next to another mysteriously dark portal. You hear cries of children and arcade machines through this portal. Additionally, the warm smell of pizza from your favorite pizza place falls adrift in the air surrounding you. To the left there also seems to be another lightly colored portal that seems a little bit less menacing. The portal emanates signs of screaming and music. The silky surface of the portal pulsates with every kick of the bass in the room beyond. The hog riders start to close in on you and the clock is ticking`,
                        choice: [[`getRocked`, `Get Up and Fight Back`], []]
                    },

            tryDodge: {
                text:`You attempt to dodge the hog riders as they charge at you but you are faced with the blunt impact of a hammer that launches you through the air. You land flat on your face right next to another mysteriously dark portal. You hear cries of children and arcade machines through this portal. Additionally, the warm smell of pizza from your favorite pizza place falls adrift in the air surrounding you. To the left there also seems to be another lightly colored portal that seems a little bit less menacing. The portal emanates signs of screaming and music. The silky surface of the portal pulsates with every kick of the bass in the room beyond. The hog riders start to close in on you and the clock is ticking
                `,
                choice: [[`getRocked`, `Get Up and Fight Back`], []],
            },

            askHog: {
                text:`The Hog Riders laugh and decide to entertain you. They ask what makes you think you are qualified to be a part of the hog riders and have the right to scream their warcries. `,
                choice: [[], []],
            },

    goHome: {
        text: `You decide to head home and come to the conclusion that anything other than a boring life just isn’t for you. At the very least you are comfortable with where you are, and that’s okay.`,
        choice: [[`stayHome`, `Decide to Stay Home`], [`contemp`, `You Contemplate`]]
    },

    walk: {
        text: `You decide to continue on your morning hike. You pass by plenty of  note-worthy pieces of shrubbery and you find yourself back in  Mungville. You continue to keep walking down the road back to your house. You continue walking down a path which you have not taken and find yourself at a split fork. To the left there seems to be one of the same mysterious portals that you saw earlier. This was echoing with the cheers of a crowd. It emanates weird confetti particles every waking moment it still lives. On the other side of the fork, there is what seems to be a more normal road. Although it seems a bit eerie it looks the same as any other road in Mungville. Additionally, there seems to be quite a nice breakfast restaurant on your left which you have heard a great deal about. 
        `,
        choice: [[`enterBTS`, `Enter the Lively Portal`], [`enterRestaurant`,`Walk Into Restaurant`], [`downRoad`, `Walk Down Road to Go Home`]]
    }

}




window.onload = function () {
    createStory(myStory.opener.text)
var restart = document.getElementById("restart");


function createStory(text) {
    let pageNow = storyList[storyList.length - 1];
    textArea.innerHTML = "";//deletes text area
    buttonArea.innerHTML = "";//deletes button area div
    for (let idea of storyList) {
        addStory(myStory[idea].text)
    }
    for (let idea of myStory[pageNow].choice) {
        createButton(idea[1], idea[0]);
    }
}
    function createButton(btnText, choice) {
        var button = document.createElement("button"); //creates button
        console.log("buttons created")
        button.innerHTML = btnText; //pulls button txt
        buttonArea.appendChild(button);
        console.log(choice) //logs choice for debugging in console
    }
    button.addEventListener("click", function(){
        storyList.push(choice);
        createStory(); //runs create story which alters page. 
    console.log("button clicked")
      });
    

    function addStory(text){
        textArea.innerHTML = text; //Pulls text area of page paragraph and then sets it to the text variable.
        console.log(text)
      }

      restart.addEventListener("click", function(){
        createStory(myStory.opener.text);
        console.log("restarted")
      });
      


}

