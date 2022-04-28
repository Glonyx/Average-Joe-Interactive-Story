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
            text: `Suddenly, the hog riders start to charge at you full speed. You only have moments to think of something to do but you decide that you are going to attempt to steal a hog. You brace for the impact that might soon hit your body but as one of them approaches you, you jump in the air on top of the hog! You stand their grabbing onto the hog rider for dear life as the hog spins and jumps in circles screaming for justice. Eventually, you are able to pull the hog rider off and you take his hammer as he drops it on the floor. You actually did it! You successfully stole a hog from the hog riders and only two of them remain left in the room. In the room two portals emerge from the walls. You look to the right and see another mysteriously dark portal. You hear cries of children and arcade machines through this portal. Additionally, the warm smell of pizza from your favorite pizza place falls adrift in the air surrounding you. To the left there also seems to be another lightly colored portal that seems a little bit less menacing. The portal emanates signs of screaming and music. The silky surface of the portal pulsates with every kick of the bass in the room beyond. Right as you finish examining the cheerful portal you hear the sound of pig squeals as the remaining hog riders start to charge with fury at you and the stolen piggy! `,
            choice: [[`chargeHog`, `Charge at the Remaining Hog Riders`], [`chantingPortal`, `Enter The Portal With Music`], [`pizzaPortal`, `Enter the Portal with the Smell of Pizza`]],
        },

        chargeHog: {
            text: `You charge at the hog riders but you are faced with the blunt impact of a hammer that launches you through the air and off the hog. You land flat on your face right next to another mysteriously dark portal. You hear cries of children and arcade machines through this portal. Additionally, the warm smell of pizza from your favorite pizza place falls adrift in the air surrounding you. To the left there also seems to be another lightly colored portal that seems a little bit less menacing. The portal emanates signs of screaming and music. The silky surface of the portal pulsates with every kick of the bass in the room beyond. The hog riders start to close in on you and the clock is ticking`,
            choice: [[`getRocked`, `Get Up and Fight Back`], ['chantingPortal', 'Enter The Portal With Music'], ['pizzaPortal', 'Enter the Portal with the Smell of Pizza']]
        },

        getRocked: {
            text: 'You attempt to punch one of the pigs but he smacks you so hard you black out and hallucinate being in a weird horse-drawn carriage of prisoners heading for a walled town, and talking something about “Jarl Ulfric” and “The True High King.” You bleed out after. The End',
            choice: []
        },

        chantingPortal: {
            text: `You arrive in a heavily populated open stadium full of bright colors, completely opposite from your life and hometown. Passing through the crowds, you start to get into the groove of the music playing in the background. You also notice that there are several cardboard cutouts of seven handsome and dashing young asian men. All throughout the stadium you repeatedly see the letters “B,” “T,” and “S.” You feel more entranced by the lively tunes being played. What do you do?`,
            choice: [[`enjoyStay`, `Stay and Enjoy the Live Concert`], [`scrambleAround`, `Scramble Around the Stadium`]]
        },

        enjoyStay: {
            text: `You say to yourself, “You know what? I deserve this, I don’t consider my life boring if I’m watching a live concert.” You decided to enjoy your time here, and become more entranced with the BTS performance. As each song from the kpop group is being performed, the crowd becomes more frenzied, and you have the time of your life. Considering all the wasted time you’ve had in your life, you feel an immense urge to do something wild.
                            `,
            choice: [[`runStage`, `Run Up The Stage`], [`getFocus`, `Get Focused and Look For a Way Out`]]
        },

        runStage: {
            text: `All reasoning in your head is lost and let instincts take over. You start charging up at the stage and take hold of one of the microphone and begin to belt out one of their hit songs, "Butter" by BTS. At first the crowd was confused of a middle-aged man that ran up on stage, but as you sang, the crowd went wild and roared with cheers. The security, however, goes up and tries to charge after you, but the band halts them and lets you continue performing. The song ends, the crowd chants "ENCORE! ENCORE! ENCORE!" BTS walks up to you, and decides to give you the offer of a lifetime: Become the next member of BTS, and gain stardom as they go on tour around the world.`,
            choice: [[`acceptOffer`, `Accept the Offer`],[`rejectOffer`, `Refuse the Offer`]]
        },

        acceptOffer: {
            text: `You decide to accept the offer and become the newest member of BTS. They all cheered and welcomed you to their group. Looking back on your journey and life, you have realized that you are no longer the lifeless person you once were, and have become someone that has lived life to its fullest, all thanks to the appearance of the portals. However, your celebration is short-lived as an ominous laugh echoes throughout the stadium while the entire stadium is struck by numerous lightning and enveloped in a thick fog. Among the fog, a mysterious figure then slowly forms and gets closer to you. Towering right in front of you is a complete void of darkness in a figure of a man.`,
            choice: [[`attackFigure`, `Attack the Mysterious Figure`], [`questionFigure`, `Question the Mysterious Figure`]]
        },

        attackFigure: {
            text: `Feeling bold, and knowing that you are no longer the docile man you were, you decided to charge ahead at the mysterious figure bare-handed. Obviously not a well-thought out choice. But brave of you, or maybe stupid? Either way, you are tossed across the stadium with a flick of a finger. You die of internal injuries.`,
            choice: []
        },

        questionFigure: {
            text: `Unknown of who or what it is, you question the mysterious figure, “WHO ARE YOU AND WHAT ARE YOU DOING HERE?” Several voices thunder throughout the stadium all in unison, and answers, “We are a collective mind of numerous lives, experiences, and downfalls. We are the Entity. The portals are not born simply by chance, we in itself give life to the portals through our knowledge and experiences. We too have led the path you’ve taken, and have suffered for it. Our choices alone had left us in eternal confinement.” Learning everything about the portals, you are in disbelief. Does that mean every decision I’ve made so far has led me here? Has everything I’ve done enough?! I don’t know anymore… With all the doubts creeping up on you, the BTS stood by your side to reassure you that you should have no regrets, and to instead, live in the moment. “As our newest member, we’ll do all we can to support you. We can get rid of them and end the portals once and for all. What do you say?”`,
            choice: [[`joinForces`, `Continue`]]
        },

        joinForces: {
            text: `With their encouragement and support, you decided to take on the Entity alongside your newfound allies. However, the true question is how? There are no nearby weapons to fight against them. “HOW ARE WE FIGHTING THEM?” You fearfully asked them. “Have you ever seen the Guardians of the Galaxy movie? We’ll do it the old-fashioned sing-off way.”`,
            choice: [[`badEnding`, `Sing Alongside Them`], [`judgeThem`, `Judge Them`]]
        },

        badEnding: {
            text: `With no other choice, you agree to sing with them, which in itself almost seems futile. But as BTS decided to do a live performance in front of the Entity left him very confused and flabbergasted. I think this will actually work! It’s so dumb that it might actually just work and put him into a state of confusion. You decide to join in with them and sing their hit song “Butter” by BTS, but as soon as you sang, the Entity composed themselves and laughed at your pointless attempts. The Entity grabbed you and warped along with you, and right in front of you, they destroyed the BTS portal, turning everything into dust, destroying that reality completely. “Every single portal here serves as a precursor of what’s to come. Not a single thing from within the portal existed in reality. They only served as an alternate dimension of our own knowledge. It is clear that through it all you are not enough to end the never ending cycle. We suffer constantly in this eternal prison, and in this cruel world, you have seen your journey through, and it is now in your hands to serve the keeper of this world.” You slowly lose identity, only having your experiences to serve remembrance of a life you once had. You are now one with the Entity.`,
            choice: []
        },

        judgeThem: {
            text: `You thought you've suggested the dumbest ideas in life? Wrong. Maybe the BTS wasn't as smart as you've thought them to be. Either way, the plan is as stupid as it gets, and it's pointless to even try and fight against the Entity. You decide to leave the stadium, but before you could get out, the Entity flies towards you and stabs you in the back with their hand, and tosses you off to the side.`,
            choice: []
        },

        rejectOffer: {
            text: `You choose to decline the offer, to which they were fairly disappointed. They did however, wish you all the best in your travels, and that they believe there is great reasoning in your choice. As they’ve come to understand your choice, a portal appears directly in front of them, with a hollow silence, and a faint music box playing from the portal. BTS are fearful of what’s ahead, and question you once more whether you still want to go through with it.`,
            choice: [[`acceptOfferAlt`, `Accept the Offer Instead`], [`ominousPortal`, `Enter the Ominous Portal`]]
        },

        acceptOfferAlt: {
            text: `You decide to accept the offer and become the newest member of BTS. They all cheered and welcomed you to their group. Looking back on your journey and life, you have realized that you are no longer the lifeless person you once were, and have become someone that has lived life to its fullest, all thanks to the appearance of the portals. But you did cower from the one next to you... However, your celebration is short-lived as an ominous laugh echoes throughout the stadium while the entire stadium is struck by numerous lightning and enveloped in a thick fog. Among the fog, a mysterious figure then slowly forms and gets closer to you. Towering right in front of you is a complete void of darkness in a figure of a man.`,
            choice: [[`attackFigure`, `Attack the Mysterious Figure`], [`questionFigure`, `Question the Mysterious Figure`]]
        },

        getFocus: {
            text: `After being sidetracked by the handsome performers and their talents, you decide to focus up and roam around the stadium for a sign of a portal. Walking around, you discover a restroom that seemed out of place. You enter and you notice two people who call themselves “stans,” talking about a unique drink that makes someone become the next BTS member. You also notice that there is a stall which glowed with light, indicating a sign of a portal. But you hear an almost-faint music box playing far away. The tune is awfully familiar.`,
            choice: [[`stealDrink`, `Steal the Drink`], [`pizzaPortal`, `Enter the Ominous Portal`]]
        },

        scrambleAround: {
            text: `As much as you found the flashy decorations and lively music that was playing to be fun, you decided to focus up and continue looking around the stadium for any signs of a portal to get out of here. Walking around, you discover a restroom that seemed out of place. You enter and you notice two people who call themselves “stans,” talking about a unique drink that makes someone become the next BTS member. You also notice that there is a stall which glowed with light, indicating a sign of a portal. But you hear an almost-faint music box playing far away. The tune is awfully familiar.`,
            choice: [[`stealDrink`, `Steal the Drink`], [`ominousPortal`, `Enter the Ominous Portal`]]
        },

        stealDrink: {
            text: `You had a feeling that you needed to take a risk and decide to nab the drink from them and chug it. You felt very dizzy, and everything went black. The next thing you knew when you opened your eyes, you stood beside BTS up on stage, and had the time of your life. You went on tours, became established as a well-known pop star. One day, looking in a mirror, you had lost yourself and had turned into Oli London. You then pass out and end up back in the restroom laying down on the floor, surrounded by EMT. You died of an unknown substance.`,
            choice: []
        },

        ominousPortal: {
            text: `You enter the portal and are placed in a room with two heavy automated doors on each side which look like they were meant for a meat locker. In the center of the Southern wall there seems to be a large desk which has plenty of trash and debris on it. In the corner of the desk there is what seems to be a large mask for a costume. Lastly, centered in the middle of the room there is a large computer with security cam footage from one of the rooms. Lastly, as you look around the room you are faced with a sudden resonance of a telephone ringing on the desk next to the security monitor.`,
            choice: [['explorePizzaPlace', 'Explore the Pizza Place'], ['ignorePhone', 'Ignore the Phone'],]
        },

        pizzaPortal: {
            text: `As you step through the portal your body vaporizes behind you as the view of the room which you were just in becomes increasingly smaller. As you pass through this middle ground between the portal's destination and the room at which you were just in, you start to see the expanding view of what seems to be a dark and dirty room. As the room gets larger and larger, slowly you are warped into that mysterious room. The room has two strong metallic doors on each side which look like they were meant for a meat locker. In the center of the Southern wall there seems to be a large desk which has plenty of trash and debris on it. In the corner of the desk there is what seems to be a large mask for a costume. Lastly, centered in the middle of the room there is a large computer with security cam footage from one of the rooms. This place did not seem to be what the portal made it look like it was going to be. This was not a place of happiness or joy. This was an abandoned building that hadn't been open for years! Lastly, as you look around the room you are faced with a sudden resonance of a telephone ringing on the desk next to the security monitor.`,
            choice: [['explorePizzaPlace', 'Explore the Pizza Place'], ['ignorePhone', 'Ignore the Phone']]
        },

        ignorePhone: {
            text: `	Although the phone keeps ringing, you decide to stop the tone resonating from it. You pick up the phone hastily and then quickly put it right back down where it says. This quickly muted the phone and the room was then silent again as it was when you first arrived. There wasn’t much to do in this place so you decided to just take a seat in the rather beaten up office chair which sat next to the desk full of rubble. As you sit there you then examine the computer that lay on the table. Using the worn down mouse you click through the various different security camera views which you had access to. In one of the rooms there were a couple of animatronics standing on what seemed to be a stage for children shows. So… this was a Chuck Cheeze type of restaurant after all… It surely didn’t seem that way in the condition it was in but it slowly started to make sense. On the other CCTV streams there were rooms filled with balloons, arcade machines, and tables for what looked like a party. You then swiftly click the mouse multiple times and go back to the stage camera, but something wasn’t right… One of the figures on the stage seemed to have disappeared?! This was no ordinary pizza place. There is no way that could have happened. As you flip vigorously through the cameras searching for the figure you find them in a room which seemed to be close to yours on the diagram of the pizza place taped to the peeling wall. The figure, a tall lengthy bear, seemed to be staring right into the camera with its lifeless eyes. It stood there silently watching as if it were alive in some way. 
                        As you continue to stare at the screen in disbelieve you hear footsteps behind you. You slowly turn around to be faced with the Tall bear who stares at you for a second and then starts walking closer… You get smacked up. The End...
                        `,
            choice: []
        },

        explorePizzaPlace: {
            text: `You stare at the phone contemplating if it is worth your time to pick it up but you decide that it is probably a scam call. You decide to go out through the doors and look around the place that you are in. Firstly, before you leave the room, you search the drawers for some sort of flashlight that could help in the pitch black hallway and pizza place that lay beyond the weird mist. Luckily, in the drawer closests to the floor there happens to be a strong fluorescent flashlight which has some battery in it. You take it out of the drawer and continue out of the door facing west. The eeriness of the place starts to set in as you walk down the abandoned hallway with the echoing sound of water dripping from the ceiling. The flashlights shines a bright beacon on the various different rodents and insects that lay on the floor dead. As you continue farther down the hallway you are met with a room to the left. As you walk in you see a strange shadow in the corner. As you shine your flashlight on it you find out it is some sort of figure. You slowly back away while breathing heavily. You bump into the wall in the hallway while backstepping quickly. You stand there frantically breathing while you try to put sense into what you saw. `,
            choice: [['dipOut', 'Dip Out of this Place'], ['goBackIn', 'Return to the Dark Room']],
        },

        goBackIn: {
            text: `You decide to try and examine the room again. You slowly tiptoe back into the room. In the corner where the figure was before there seemed to be only emptiness. Had he moved while I was in the hallway?! You sit there in disbelief as you flash your flashlight as your mind blanks. All of the sudden you hear the noise of gears and electronics behind you as a scary shadow falls among you. You feel the slicing grasp of a hand full of claws as they start to scrap your skin… The End.`,
            choice: [],
        },

        dipOut: {
            text: `You decide to turn around and quickly run back to the room. You stand there frantically breathing in the enclosed jail which you are stranded in. You pick up the rather old phone and quickly dial the phone number that showed up on the display. The phone rings for what seems like forever, until it stops. Someone seemed to have picked up the phone! The caller reponds…… “HELLLLLLLLLLLOOOOOOOO HELLLLLLLLLOOOOOO!!!!!!!!!” The Noise is so jarringly loud that it practically knocks you on the floor. You respond, “Hello, I’m here… What is it that you are calling for?” The caller states, “Hello, I am here to help you survive here. This is not the place that you think it is. These figures are not here to be friendly. They have been known to kill victims they come across. You are their current prey… If you want to survive then you must listen to me. Don’t carve your own path because it will not end well for you. The first thing you're going to want to do is check the security cameras for any incoming threats that could be walking down the hallways. This is a main issue that you may come across in this place… The animatronics tend to move around a bit so I would keep an eye on them.”`,
            choice: [['checkCams', 'Check the Security Cameras'], ['ingnoreCams', 'Dont Check the Cameras']],
        },

        ignoreCams: {
            text: `You decide that you don't really want to check the cameras. Probably not the best decision you could have made but it indeed was quite the decision. As you drop the phone and sit back in the creaky desk chair you hear footsteps down the hall. You get up quickly to look down the hall. As you peak your head around the corner you see a fox starting to run towards you. The sound of gears and gas shocks are heard as he chases down the hallway after you. He slices you with his hook in one hand and you lay there sad. The End.`,
            choice: [],
        },

        checkCams: {
            text: `You decide to follow his advice and you sit down in the creaky office chair that is in front of you. You click the mouse a couple of times and the screen flips to various different CCTV security streams. As you flip to a screen in the middle of what seems to be the hallway leading towards the room you were seated in,  you see a man with dark energy coming off his hands and a dark portal near him. You tell the phone man what you just saw… he says, “Oooooooooooooh, I have heard of that man before. He might try to throw you into that small portal that is following him. If you go in there I can not help you. Phone guy insists, “You are definitely going to need to grab that pocket knife sitting in the drawer also, it might come down to that…” You search through the old desk drawer sitting in front of you and find a rather old and dull pocket knife. The last thing you are going to want to do is grab that mask that is sitting on the desk.” The mask resembles a bear's face which looks almost like a mascot.`,
            choice: [['runAway', 'Run Away in Fear'], ['goodEnding', 'Grab the Knife'], ['wearFreddyMask', 'Put on the Bear Mask']],
        },

        runAway: {
            text: `	Voices start to enter your head as the phone guy relays countless amounts of tips and tricks to you via the rather old phone that seems like it's from the 1980s. As the words spin around your head you decide it's too much for you to handle. You break off into a sprint down the opposite hallway from the dark spirit. You sprint with all your might but you hit something and fall to the ground in an instant. Sitting there dazed you look up with blurry vision to see the dark spirit appear out of wispy shadows. He picks you up by grasping you by the neck and with his other hand he summons a dark portal with the sounds of sorrow and misery. He stares at you one more time and throws you into the portal. The End...`,
            choice: [],
        },

        goodEnding: {
            text: `You decide to take the man's advice and you grab the knife sitting in the drawer. Right as you switch the blade open you hear the sound of footsteps down the hall. The figure peers into the room menacingly with his dark gaze coming from his glowing purple eyes. You stare at him with rage and charge full speed ahead with a knife in hand. As you try to jump and thrust the blade you are hit with a shockwave which flungs you back into the wall and you fell to the floor. As you stare up at the figure clutching your chest he whispers loudly, “You will never return to the world in which you belong. You are stuck here, with me, for eternity!” With that you are filled with rage and you charge once again dodging his grasp. You jump onto the office chair and take a final leap. You thrust the pocket knife into his wispy eye and he falls to the floor screaming in agony. As he falls his eyes lose their light and a portal opens to what seems to be a burning hell. Whatever it was, it was better than being here in this cursed pizza place you thought. With the final remembrance of all which you used to have, you step through the portal of Agony… you return to see your morning coffee cup sitting next to you. You look around in disbelief but it seems that you are in your home sitting on the couch! The End...`,
            choice: [],
        },

        wearFreddyMask: {
            text: `You turn to the side of the room and pick up a large mask that seems to be apart of a mascot suit that seemed to not exist anymore. You put on the crumbling mask and sit in the chair completely still. Down the hall you hear the noise of someone walking down the hallway. The dark spirit reaches your room and peers into the room. You sit their trying hard to breath at the slightest amount possible in order to not draw attention to yourself. The figure stands there menacingly with his dark gaze coming from his glowing purple eyes. As he scans the room he seems to lock eyes with the mascot head which you wore. He starts to walk towards you slowly and picks up the mask of the top of your head. He sees you sitting there frightened and then swiftly slices you down the middle with the power which he holds within him. Turns out eternal beings are not ones that fall for good hide and seek spots. The End...`,
            choice: [],
        },

        tryDodge: {
            text: `You attempt to dodge the hog riders as they charge at you but you are faced with the blunt impact of a hammer that launches you through the air. You land flat on your face right next to another mysteriously dark portal. You hear cries of children and arcade machines through this portal. Additionally, the warm smell of pizza from your favorite pizza place falls adrift in the air surrounding you. To the left there also seems to be another lightly colored portal that seems a little bit less menacing. The portal emanates signs of screaming and music. The silky surface of the portal pulsates with every kick of the bass in the room beyond. The hog riders start to close in on you and the clock is ticking
                `,
            choice: [[`getRocked`, `Get Up and Fight Back`], ['chantingPortal', 'Enter The Portal With Music'], ['pizzaPortal', 'Enter the Portal with the Smell of Pizza']],
        },


        askHog: {
            text: `The Hog Riders laugh and decide to entertain you. They ask what makes you think you are qualified to be a part of the hog riders and have the right to scream their warcries. `,
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
            choice: [[`attackWizard`, `Charge at the Wizard Tower`], ['fleeTheFight','Try to Run Away']]
        },

        fleeTheFight: {
            text: `You decide to try to run away from the firing cannons, archers, and wizards that are hurling magical abilities at you. You sprint away dodging explosions from the left and the right. You hop all the way over to a beach where a small wooden raft is located. Unfortunately for you though you happened to step on a spring trap while running and you are launched all the way into heaven. The End...`,
            choice: []
        },

        attackWizard: {
            text: `Leading an attack on the wizard tower, you destroyed it but were faced with more defenses. However, on your left you notice a run-down hut that should serve as cover. I mean, there could be anything in there... Meanwhile, on your right you notice your ally hog riders continuing their attack on the camp town. They probally will need help, won't they?`,
            choice: [['enterShack', 'Enter the Run-down Shack'], ['assistHogRiders', 'Help the Remaining Hog Riders']]
        },

        assistHogRiders: {
            text: `You decide to continue your charge foward rather than going to the dirty shack. You run over and meet up with your ally hog riders who are pushing closer to the center of the city. Unfortunately, in their paths are some sort of tower spewing out flames that melt anything in its path into ashes and a large automatic crossbow firing bolts from the hog riders’ sides. This won't be the way you die...right?`,
            choice: [['attackXBow', 'Attack the X-Bow'], ['attackInfernoTower', 'Charge for the Inferno Tower'],['goAFK','Screw it and go AFK']]
        },

        goAFK: {
            text: `You give up and decide to stand there and do nothing for the remainder of the time, almost as if your mom told you it's time to eat and you need to pause your online game (which is VERY possible), and eventually get destroyed by an eagle artillery. The End...`,
            choice: []
        },

        attackXBow: {
            text: `You decide to attack the auto crossbow single handedly to prevent casualties, but it turns out that attempting to destroy a crossbow firing hundreds of bolts per minute alone is a poor and not well-thought out decision. You are gunned down within seconds. You need to learn some strategy! The End...`,
            choice: []
        },

        attackInfernoTower: {
            text: `You decide that you wouldn’t go down without a fight and you head to the infernal light which gleams from the tower. You charge to the tower while the melting beam hits your chest. You can feel the molten ray melt your skin but you persevere and start destroying the tower. As you get there you are assisted by other hog riders and you all destroy the tower and it crumbles to the ground. As you reach farther into the base you see what you have been looking for! The town hall… The gleaming building had molten waterfalls on the sides of it and a draw bridge surrounded by a lava moat. As you and the others continue your approach you are blasted away with the punch of a mysterious figure. You and the others fly back into a molten wall besides you. You stand delirious as you look up at the figure. It seemed to be a Barbarian King! The most furious king of them all. Rumor was that he won't stop at anything to protect his town from invaders and that rumor seemed to be holding up even nearing the end. `,
            choice: [['chargeAtHim','Charge at Him by Yourself'],['steamEnding','Team Up and Attack Him Together']]
        },

        chargeAtHim: {
            text: `As your vision clears you decide to charge at the Barbarian King. You dash past the bombs and defenses within your path and stand face to face with him. He exclaims, “You will not take my kingdom without taking me first! Face me you peasant. You are too weak to fight me you will perish like your predecessors!” You charge at him and slash down with your hammer. Turns out it does literally nothing and he slashes you with his sword. You fly twenty feet through the air and land face down on the ground. As you lay there you see the hog riders fight back in retaliation.`,
            choice: [['runFromKing','Try to Run From the King'],['sadEnding','Get Up and Finish the Fight']]
        },
        
        runFromKing: {
            text: `As you stare at your friendly hog riders charging at him with blurry eyes, you stand up and start limping away. There was no way you would die to this King. You hardly even knew what you were even fighting for in the first place! It was not worth your life! You start to limp faster and faster. As you got to about 200 feet away a target seemed to highlight on the ground below you. As you look up you see a rocket slicing down through the air. As it hits the ground it explodes into a thousand pieces and you die in an instant. Eagle Artillery was released last update… The End…`,
            choice: []
        },

        sadEnding: {
            text: `As you lay there bleeding in pain you decide that it's not time to give up! Even though you had just met these hog riders, you could not give up on their goals and ideas so easily. You push through the pain grunting as you muster the strength to stand on your feet. Lastly, you charge at the King who was getting attacked by the Riders and and you slash him with your hammer as he flings his sword in vertical slashes on your friendly hog riders. He takes out a couple of them but not enough to stop your attack. Finally as the King is about to fall he fatally hits you with one of his downward slashes and you fall to the ground in a pool of blood. As your eyes turn to blurry messes you see the king fall to the ground. You did it. You saved the hog riders. You helped their city. You saved their future… You think to yourself of the journey you have been on. At least you die with your final wish… doing something important with your life… The End...`,
            choice: []
        },

        steamEnding: {
            text: `Well charging at him yourself probably wouldn't be the best idea, you think to yourself. Instead you call out to the fellow hog riders surrounding you. You all hundle and plan a simple attack while the Barbarian King fights other soldiers on the field. Once the plan is made you all stand ready for attack. At the call of one you all charge towards him. Your fellow hog riders slash the man with their blunt hammers and the Barbarian King only resists for as long as he stands. After countless blows, he falls to the ground. As he falls you see a portal open which warps you back to your living room. You take off your headset and give the game a great review on steam. The End...`,
            choice: []
        },

        enterShack: {
            text: `You run towards the hut, and entering in, it seems like a rather boring hut. You are met with plenty of weird gardening tools and a weird collection of big hammers. You suddenly see a portal with a delicious aroma of CostCo pizza wafting in the air. You sit there contemplating on if you should succumb to the temptation of pizza or to go back and help your friends. Surely, they wouldn’t want to miss out on the pizza party right? They probally will be fine without your help right?
                        `,
            choice: [['hutPizzaPortal', 'Enter the CostCo Pizza Portal'], ['leaveHut', 'Leave the Hut and go Help']]
        },

        leaveHut: {
            text: `You know what?! You are better than that. You sit there conteplating all of the mistakes you made throughout your life. This was not going to be one of them... You crack open the door loudly and run over and meet up with your ally hog riders who are pushing closer to the center of the city. Unfortunately, in their paths are some sort of tower spewing out flames that melt anything in its path into ashes and a large automatic crossbow firing bolts from the hog riders’ sides. This won't be the way you die...right?`,
            choice: [['attackXBow', 'Attack the X-Bow'], ['attackInfernoTower', 'Charge for the Inferno Tower'],['goAFK','Screw it and go AFK']]
        },

        hutPizzaPortal: {
            text: `Well, they will probally be fine without you... As you step through the portal your body vaporizes behind you as the view of the hut which you were just in becomes increasingly smaller. As you pass through this middle ground between the portal's destination and the room at which you were just in, you start to see the expanding view of what seems to be a dark and dirty room. As the room gets larger and larger, slowly you are warped into that mysterious room. The room has two strong metallic doors on each side which look like they were meant for a meat locker. In the center of the Southern wall there seems to be a large desk which has plenty of trash and debris on it. In the corner of the desk there is what seems to be a large mask for a costume. Lastly, centered in the middle of the room there is a large computer with security cam footage from one of the rooms. This place did not seem to be what the portal made it look like it was going to be. This was not a place of happiness or joy. This was an abandoned building that hadn't been open for years! Lastly, as you look around the room you are faced with a sudden resonance of a telephone ringing on the desk next to the security monitor.`,
            choice: [['explorePizzaPlace', 'Explore the Pizza Place'], ['ignorePhone', 'Ignore the Phone']]
        },

        beHonest: {
            text: `You are honest and forthright, and say, “I really only want to live. I’m nearing my forties and I’ve lived a completely lame life, so it’d be very nice if I still had time.” They are shouting in anger at how pathetic you are to beg for your life. They decide to give you time to run before they come chasing after you and kill you. The End.`,
            choice: []
        },
        goHome: {
            text: `You decide to head home and come to the conclusion that anything other than a boring life just isn’t for you. At the very least you are comfortable with where you are, and that’s okay.`,
            choice: [[`stayHome`, `Decide to Stay Home`], [`youContemplate`, `Go Back to the Portal`]]
        },

        stayHome: {
            text: `You stuck with your decision, it was just the wrong one. You decide to chicken out, and give up on change, like the true coward you are. You go to work, grow old, maidenless, alone, unable to retire, experiencing the unending pain of having lived a boring life.`,
            choice: []
        },

        youContemplate: {
            text: `You’ve come to a realization that avoiding the difficult things in life isn’t good, and it will not satisfy you, and you decide to turn around and go back to the portal. As you get closer, it becomes much more humid and hot. You enter the portal... As you step through the glistening portal you are swept into a darkened room. On the walls there are torches lighting the mossy walls of the room. On the sides of the room there seems to be a couple of mysterious portals of fluctuating light. At each side of the room there is what seems to be a dark figure. As they step closer to you, you realize what they truly are… You are met with three burly and strong hog riders from the hit game clash of clans.  They start to walk closer to you with a terrible glare in the piggy's eye. They raise their hammers and charge at you. You only have seconds to think of what to do.`,
            choice: [[`stealHog`, `Attempt to Steal a Hog`], [`tryDodge`, `Try To Dodge Them`], [`askHog`, `Ask to be a Hog Rider`]]
        },

        continueWalk: {
            text: `You decide to continue on your morning hike. You pass by plenty of  note-worthy pieces of shrubbery and you find yourself back in  Mungville. You continue to keep walking down the road back to your house. You continue walking down a path which you have not taken and find yourself at a split fork. To the left there seems to be one of the same mysterious portals that you saw earlier. This was echoing with the cheers of a crowd. It emanates weird confetti particles every waking moment it still lives. On the other side of the fork, there is what seems to be a more normal road. Although it seems a bit eerie it looks the same as any other road in Mungville. Additionally, there seems to be quite a nice breakfast restaurant on your left which you have heard a great deal about. 
        `,
            choice: [[`chantingPortal`, `Enter the Lively Portal`], [`enterRestaurant`, `Walk Into Restaurant`], [`downRoad`, `Walk Down Road to Go Home`]]
        },

        downRoad: {
            text: `Deciding to continue walking down the normal path was probably a good choice. I mean, who needs an awesome adventure anyway?! Right?!?! Amyway, you continue down the path which seems to start to look familiar as you pass multiple intersections. Finally you reach one of the busiest intersections in town. You look around to see if there are any cars crossing and it seems to be clear. You start to cross the road until suddenly you are struck by a massive lifted bright orange jeep. You lie there regretting the choices you made previously, you should have just lived a life of adventure… `,
            choice: []
        },

        enterRestaurant: {
            text: `You continue into what seems to be a nice restaurant. You walk inside but something is not right. The man at the front desk seems to be standing in what seems to be a cross position or a “T-pose”. You walk up to him and ask him for a table but he only responds with uter random english. It seems that he must has some sort of disability or there is something more serious wrong with him. You continue walking farther into the restaurant to try to find someone else to help you when all of the sudden you step where there seems to be ground to walk but you swiftly clip through the ground. You start tumbling towards what seems to be the sky. You randomly feel suffocation set in and you drift into an unconscious state. You die. What did you think this story production was?! This is clearly on par with cyberpunk 2077 quality. What more did you expect…`,
            choice: []
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


        button.addEventListener("click", function () {
            storyList.push(choice);
            console.log("Your Choice: " + choice)
            choiceBuilder();
            console.log(storyList) //logs choice for debugging in console
            storyBuilder(); //runs create story which alters page. 
            window.scrollTo({ top: 0, behavior: 'smooth' });
            console.log("button clicked")
        });
    }

    function choiceBuilder() {
        console.log("ChoiceBuilder Ran")
        var prevHTML = ""
        for (var i = 1; i < storyList.length; i++) {
            myChoices.innerHTML = (prevHTML + '<br>' + i + " - " + storyList[i])
            prevHTML = myChoices.innerHTML;
            console.log("CHOICE BUILDER TEXT: " + myChoices.innerHTML)
        }
        console.log(prevHTML)
    }

    function storyPlacer(text) {
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
    restart.addEventListener("click", function () {
        location.reload();
        storyList = ["opener"];
        console.log("restarted")
    });



}
