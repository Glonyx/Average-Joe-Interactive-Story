window.onload = function () {
var myStory = {
    // holds story text and choices
    opener: {
        text: `All your life, you lived in dullness and settled for the most comfortable option. You work a nine-to-five corporate job making enough to get by a year, living in a one-bedroom studio with no furniture other than a futon. You’ve decided it’s time for a change, and you go outside for a hike around the very mundane, stale, and boring town of Mungville, where everyone lives the same boring life, seeking only comfort in what is attainable. As you are walking, you end up witnessing a glowing dark portal with an odd heat coming off of its exterior. What do you do?`,
        choice: [["goPortal", "Go into Portal"], ["goHome", "Go Home"], ["continueWalk", "Continue your walk"]],
    },

    goPortal: {
        text: `As you step through the glistening portal you are swept into a darkened room. On the walls there are torches lighting the mossy walls of the room. On the sides of the room there seems to be a couple of mysterious portals of fluctuating light. At each side of the room there is what seems to be a dark figure. As they step closer to you, you realize what they truly are… You are met with three burly and strong hog riders from the hit game clash of clans.  They start to walk closer to you with a terrible glare in the piggy's eye. They raise their hammers and charge at you. You only have seconds to think of what to do.`,
        choice: [[`stealHog`, `Attempt to Steal a Hog`], [`tryDodge`, `Try To Dodge Them`], [`askHog`, `Ask to be a Hog Rider`]],
    },

            stealHog: {
                text:`Suddenly, the hog riders start to charge at you full speed. You only have moments to think of something to do but you decide that you are going to attempt to steal a hog. You brace for the impact that might soon hit your body but as one of them approaches you, you jump in the air on top of the hog! You stand their grabbing onto the hog rider for dear life as the hog spins and jumps in circles screaming for justice. Eventually, you are able to pull the hog rider off and you take his hammer as he drops it on the floor. You actually did it! You successfully stole a hog from the hog riders and only two of them remain left in the room. In the room two portals emerge from the walls. You look to the right and see another mysteriously dark portal. You hear cries of children and arcade machines through this portal. Additionally, the warm smell of pizza from your favorite pizza place falls adrift in the air surrounding you. To the left there also seems to be another lightly colored portal that seems a little bit less menacing. The portal emanates signs of screaming and music. The silky surface of the portal pulsates with every kick of the bass in the room beyond. Right as you finish examining the cheerful portal you hear the sound of pig squeals as the remaining hog riders start to charge with fury at you and the stolen piggy! `,
                choice: [[`chargeHog`, `Charge at the Remaining Hog Riders`], [`chantingPortal`, `Enter The Portal With Music`], [`pizzaPortal`, `Enter the Portal with the Smell of Pizza`]],
            },

                    chargeHog: {
                        text: `You charge at the hog riders but you are faced with the blunt impact of a hammer that launches you through the air and off the hog. You land flat on your face right next to another mysteriously dark portal. You hear cries of children and arcade machines through this portal. Additionally, the warm smell of pizza from your favorite pizza place falls adrift in the air surrounding you. To the left there also seems to be another lightly colored portal that seems a little bit less menacing. The portal emanates signs of screaming and music. The silky surface of the portal pulsates with every kick of the bass in the room beyond. The hog riders start to close in on you and the clock is ticking`,
                        choice: [[`getRocked`, `Get Up and Fight Back`], []]
                    },
                    
                        getRocked: {
                            text: 'You attempt to punch one of the pigs but he smacks you so hard you black out and hallucinate being in a weird horse-drawn carriage of prisoners heading for a walled town, and talking something about “Jarl Ulfric” and “The True High King.” You bleed out after. The End',
                            choice: []
                        },
                        
                    chantingPortal: {
                        text: `You arrive in a heavily populated open stadium full of bright colors, completely opposite from your life and hometown. Passing through the crowds, you start to get into the groove of the music playing in the background. You also notice that there are several cardboard cutouts of seven handsome and dashing young asian men. All throughout the stadium you repeatedly see the letters “B,” “T,” and “S.” You feel more entranced by the lively tunes being played. What do you do?`,
                        choice: [[`stayEnjoy`, `Stay and Enjoy the Live Concert`], [`scrambleAround`, `Scramble Around the Stadium`]]
                    },
                        
                        stayEnjoy: {
                            text: `You say to yourself, “You know what? I deserve this, I don’t consider my life boring if I’m watching a live concert.” You decided to enjoy your time here, and become more entranced with the BTS performance. As each song from the kpop group is being performed, the crowd becomes more frenzied, and you have the time of your life. Considering all the wasted time you’ve had in your life, you feel an immense urge to do something wild.
                            `,
                            choice: [[`runStage`, `Run Up The Stage`], [`getFocus`, `Get Focused and Look For a Way Out`]]
                        },

                            // runStage: {
                            //     text: `All reasoning in your head is lost and let instincts take over. You start charging up at the stage and take hold of one of the microphone and begin to belt out one of their hit songs, "Butter" by BTS. At first the crowd was confused of a middle-aged man that ran up on stage, but as you sang, the crowd went wild and roared with cheers. The security, however, goes up and tries to charge after you, but `,
                            //     choice: [[]]
                            // },

                    pizzaPortal: {
                        text: `As you step through the portal your body vaporizes behind you as the view of the room which you were just in becomes increasingly smaller. As you pass through this middle ground between the portal's destination and the room at which you were just in, you start to see the expanding view of what seems to be a dark and dirty room. As the room gets larger and larger, slowly you are warped into that mysterious room. The room has two strong metallic doors on each side which look like they were meant for a meat locker. In the center of the Southern wall there seems to be a large desk which has plenty of trash and debris on it. In the corner of the desk there is what seems to be a large mask for a costume. Lastly, centered in the middle of the room there is a large computer with security cam footage from one of the rooms. This place did not seem to be what the portal made it look like it was going to be. This was not a place of happiness or joy. This was an abandoned building that hadn't been open for years! Lastly, as you look around the room you are faced with a sudden resonance of a telephone ringing on the desk next to the security monitor.`,
                        choice: [['explorePizzaPlace', 'Explore the Pizza Place'],['ignorePhone','Ignore the Phone'],]
                    },

                        explorePizzaPlace: {
                            text:`You stare at the phone contemplating if it is worth your time to pick it up but you decide that it is probably a scam call. You decide to go out through the doors and look around the place that you are in. Firstly, before you leave the room, you search the drawers for some sort of flashlight that could help in the pitch black hallway and pizza place that lay beyond the weird mist. Luckily, in the drawer closests to the floor there happens to be a strong fluorescent flashlight which has some battery in it. You take it out of the drawer and continue out of the door facing west. The eeriness of the place starts to set in as you walk down the abandoned hallway with the echoing sound of water dripping from the ceiling. The flashlights shines a bright beacon on the various different rodents and insects that lay on the floor dead. As you continue farther down the hallway you are met with a room to the left. As you walk in you see a strange shadow in the corner. As you shine your flashlight on it you find out it is some sort of figure. You slowly back away while breathing heavily. You bump into the wall in the hallway while backstepping quickly. You stand there frantically breathing while you try to put sense into what you saw. `,
                            choice: [['dipOut','Dip Out of This Place'],['goBackIn','Return to the Dark Room']],
                        },

                        goBackIn: {
                            text:`You decide to try and examine the room again. You slowly tiptoe back into the room. In the corner where the figure was before there seemed to be only emptiness. Had he moved while I was in the hallway?! You sit there in disbelief as you flash your flashlight as your mind blanks. All of the sudden you hear the noise of gears and electronics behind you as a scary shadow falls among you. You feel the slicing grasp of a hand full of claws as they start to scrap your skin… The End.`,
                            choice: [],
                        },

                            dipOut: {
                                text:`You decide to turn around and quickly run back to the room. You stand there frantically breathing in the enclosed jail which you are stranded in. You pick up the rather old phone and quickly dial the phone number that showed up on the display. The phone rings for what seems like forever, until it stops. Someone seemed to have picked up the phone! The caller reponds…… “HELLLLLLLLLLLOOOOOOOO HELLLLLLLLLOOOOOO!!!!!!!!!” The Noise is so jarringly loud that it practically knocks you on the floor. You respond, “Hello, I’m here… What is it that you are calling for?” The caller states, “Hello, I am here to help you survive here. This is not the place that you think it is. These figures are not here to be friendly. They have been known to kill victims they come across. You are their current prey… If you want to survive then you must listen to me. Don’t carve your own path because it will not end well for you. The first thing you're going to want to do is check the security cameras for any incoming threats that could be walking down the hallways. This is a main issue that you may come across in this place… The animatronics tend to move around a bit so I would keep an eye on them.”`,
                                choice: [['checkCams','Check the Security Cameras'],['ingnoreCams','Dont Check the Cameras']],
                            },

                            ignoreCams: {
                                text:`You decide that you don't really want to check the cameras. Probably not the best decision you could have made but it indeed was quite the decision. As you drop the phone and sit back in the creaky desk chair you hear footsteps down the hall. You get up quickly to look down the hall. As you peak your head around the corner you see a fox starting to run towards you. The sound of gears and gas shocks are heard as he chases down the hallway after you. He slices you with his hook in one hand and you lay there sad. The End.`,
                                choice: [],
                            },

                            checkCams: {
                                text:`You decide to follow his advice and you sit down in the creaky office chair that is in front of you. You click the mouse a couple of times and the screen flips to various different CCTV security streams. As you flip to a screen in the middle of what seems to be the hallway leading towards the room you were seated in,  you see a man with dark energy coming off his hands and a dark portal near him. You tell the phone man what you just saw… he says, “Oooooooooooooh, I have heard of that man before. He might try to throw you into that small portal that is following him. If you go in there I can not help you. Phone guy insists, “You are definitely going to need to grab that pocket knife sitting in the drawer also, it might come down to that…” You search through the old desk drawer sitting in front of you and find a rather old and dull pocket knife. The last thing you are going to want to do is grab that mask that is sitting on the desk.” The mask resembles a bear's face which looks almost like a mascot.`,
                                choice: [['runAway','Run Away in Fear'],[''],[]],
                            },

            tryDodge: {
                text:`You attempt to dodge the hog riders as they charge at you but you are faced with the blunt impact of a hammer that launches you through the air. You land flat on your face right next to another mysteriously dark portal. You hear cries of children and arcade machines through this portal. Additionally, the warm smell of pizza from your favorite pizza place falls adrift in the air surrounding you. To the left there also seems to be another lightly colored portal that seems a little bit less menacing. The portal emanates signs of screaming and music. The silky surface of the portal pulsates with every kick of the bass in the room beyond. The hog riders start to close in on you and the clock is ticking
                `,
                choice: [[`getRocked`, `Get Up and Fight Back`], ['pizzaPortal','Enter the Portal with the Smell of Pizza']],
            },


            askHog: {
                text:`The Hog Riders laugh and decide to entertain you. They ask what makes you think you are qualified to be a part of the hog riders and have the right to scream their warcries. `,
                choice: [[`youPander`, `You Pander to Them`], [`beHonest`, `Keep it Real With Them`]],
            },

                youPander: {
                    text: `You decide to pander to them, and say “Your strong and powerful voices are enough to bring fear into your enemies, and the swiftness of how you all charge to prioritize your enemy’s major defenses shows the valor that proves worthiness in riding hogs. I want to learn from all of you, and prove that I am worth something instead of living a dull life.”
                    `,
                    choice: [[`succeedCont`, `Continue `]]
                },
                
                    succeedCont: {
                        text: `Turns out that was the right thing to say because they smile at you with pride and accept your request to join them. COntent and happy, the hog riders work together to summon a portal with bright light emanating from it. The portal seems to glow with the colors of emerald green, golden yellow, and elixir purple. There are what seem to be the emanating sounds of a striving village. The hog riders continue through the portal slowly disintegrating into the world beyond. One of them gestures for you to walk through and you do as he pleases. You walk through and you are met with beautiful villages and defensive buildings on wonderfully groomed checkerboard patterned plains. The hog riders lead you to what seems to be a camp where many other odd magical creatures sit. There are a couple of unintelligent humanoid figures carrying sword with blonde beards and there are plenty of small skeleton-like figures carrying ticking bombs! You see a nice piece of meat cooking in the center of the camp and you head for it as your stomach grumbles. Right as you are about the tear of a tender piece of meat you are met with a dense fog. You cannot see anything in the misty gust but then it slowly clears to reveal another differently shaped village. You somehow are floating in the clouds above the village which gives you a perfect view of the odd shaped design it had. You sit there contemplating what is going on but then you are dropped out of the cloud and on to the plains. You and the other hog riders you were with tell you the task at hand, destroy the village… Right as you look around to see what is going on you are met with cannons, archers, and wizards hurling  balls of fire and arrows in your direction. The hog riders scream, “HOOOOOOOOOOOOOOOOG RIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIDA!!!!” They charge for the archer tower while you stand frozen trying to muster the strength to head to your death…
                        `,
                        choice: [[``, ``], []]
                    },

                beHonest: {
                    text: `You are honest and forthright, and say, “I really only want to live. I’m nearing my forties and I’ve lived a completely lame life, so it’d be very nice if I still had time.” They are shouting in anger at how pathetic you are to beg for your life. They decide to give you time to run before they come chasing after you and kill you. The End.`,
                    choice: []
                },
    goHome: {
        text: `You decide to head home and come to the conclusion that anything other than a boring life just isn’t for you. At the very least you are comfortable with where you are, and that’s okay.`,
        choice: [[`stayHome`, `Decide to Stay Home`], [`youContemplate`, `You Contemplate`]]
    },
    
    youContemplate: {
        text: `You’ve come to a realization that avoiding the difficult things in life isn’t good, and it will not satisfy you, and you decide to turn around and go back to the portal. As you get closer, it becomes much more humid and hot. You enter the portal... As you step through the glistening portal you are swept into a darkened room. On the walls there are torches lighting the mossy walls of the room. On the sides of the room there seems to be a couple of mysterious portals of fluctuating light. At each side of the room there is what seems to be a dark figure. As they step closer to you, you realize what they truly are… You are met with three burly and strong hog riders from the hit game clash of clans.  They start to walk closer to you with a terrible glare in the piggy's eye. They raise their hammers and charge at you. You only have seconds to think of what to do.`,
        choice: [[`stealHog`, `Attempt to Steal a Hog`], [`tryDodge`, `Try To Dodge Them`], [`askHog`, `Ask to be a Hog Rider`]]
    },

    continueWalk: {
        text: `You decide to continue on your morning hike. You pass by plenty of  note-worthy pieces of shrubbery and you find yourself back in  Mungville. You continue to keep walking down the road back to your house. You continue walking down a path which you have not taken and find yourself at a split fork. To the left there seems to be one of the same mysterious portals that you saw earlier. This was echoing with the cheers of a crowd. It emanates weird confetti particles every waking moment it still lives. On the other side of the fork, there is what seems to be a more normal road. Although it seems a bit eerie it looks the same as any other road in Mungville. Additionally, there seems to be quite a nice breakfast restaurant on your left which you have heard a great deal about. 
        `,
        choice: [[`enterBTS`, `Enter the Lively Portal`], [`enterRestaurant`,`Walk Into Restaurant`], [`downRoad`, `Walk Down Road to Go Home`]]
    }

}

let storyList = ["opener"];
    storyBuilder(myStory.opener.text)
var restart = document.getElementById("restart");


function buttonBuilder(btnText, choice) {
    let button = document.createElement("button"); //creates button
    console.log("buttons created")
    button.innerHTML = btnText; //Sets button Text on all buttons
    buttonArea.appendChild(button);


    button.addEventListener("click", function(){
        storyList.push(choice);
        console.log("Your Choice: " + choice)
        choiceBuilder();
        console.log(storyList) //logs choice for debugging in console
        storyBuilder(); //runs create story which alters page. 
        window.scrollTo({top: 0, behavior: 'smooth'});
    console.log("button clicked")
      });
}

function choiceBuilder(){
    console.log("ChoiceBuilder Ran")
    var prevHTML = ""
    for(var i = 1; i<storyList.length; i++){
        myChoices.innerHTML = (prevHTML + '<br>' + i + " - " + storyList[i])
        prevHTML = myChoices.innerHTML;
        console.log("CHOICE BUILDER TEXT: " + myChoices.innerHTML)
    }
    console.log(prevHTML)
}

  function storyPlacer(text){
    textArea.innerHTML = text;
console.log("Text Built: storyPlacer Complete");
  }

function storyBuilder(text) {
    let currentPage = storyList[storyList.length - 1];
    textArea.innerHTML = "";//deletes text area
    buttonArea.innerHTML = "";//deletes button area div
    for (let num of storyList) {
        storyPlacer(myStory[num].text)
    }
    for (let num of myStory[currentPage].choice) {
        buttonBuilder(num[1], num[0]);
    }
    console.log("storyBuilder Complete");
}
var restart = document.getElementById("restart")
      restart.addEventListener("click", function(){
        location.reload();
        storyList = ["opener"];
        console.log("restarted")
      });
      


    }
