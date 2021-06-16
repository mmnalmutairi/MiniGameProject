

// 42 Movie 

const randomMovies = [

    {
        Movie: "The Walking Dead",
        Hint: 'The zombies, referred to as "walkers", shamble towards living humans and other creatures to eat them; they are attracted to noise, such as gunshots, and to different scents, e.g. humans.'
    },
    {
        Movie: "Breaking Bad",
        Hint: 'A meek high school chemistry teacher who transforms into a ruthless player in the local methamphetamine drug trade, driven by a desire to financially provide for his family after being diagnosed with terminal lung cancer.'
    },
    {
        Movie: "Sherlock Holmes",
        Hint: 'Referring to himself as a "consulting detective" in the stories, known for his proficiency with observation, deduction, forensic science, and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard.'
    },
    {
        Movie: "House",
        Hint: 'Often clashes with his fellow physicians, including his own diagnostic team, because many of his hypotheses about patients illnesses are based on subtle or controversial insights. His flouting of hospital rules and procedures frequently leads him into conflict with his boss, hospital administrator and Dean of Medicine.'
    },
    {
        Movie: "Man of a steel",
        Hint: 'Clark learns about the source of his abilities and his real home when he enters a Kryptonian ship in the Artic. However, an old enemy follows him to Earth in search of a codex and brings destruction.'
    },
    {
        Movie: "Venom",
        Hint: 'While trying to take down Carlton, the CEO of Life Foundation, Eddie, a journalist, investigates experiments of human trials. Unwittingly, he gets merged with a symbiotic alien with lethal abilities.'
    },
    {
        Movie: "The Mechanic",
        Hint: 'Arthur, a cold-blooded killer, mercilessly kills anyone he is paid to murder. When his best friend Harry is murdered, he sets out to avenge his death with Harrys son in tow.'
    },
    {
        Movie: "IT",
        Hint: 'Seven helpless and bullied children are forced to face their worst nightmares, a shape-shifting clown, reappears. The clown, an ancient evil torments children before feeding on them.'
    },
    {
        Movie: "Jumanji",
        Hint: 'Two children come across a magical board game. While playing it, they meet Alan, a man who was trapped in the game, and attempt to free him while facing different kinds of danger.'
    },
    {
        Movie: "Black Widow",
        Hint: 'At birth given to the KGB, which grooms her to become its ultimate operative. When the U.S.S.R. breaks up, the government tries to kill her as the action moves to present-day New York, where she is a freelance operative.'
    },
    {
        Movie: "Titanic",
        Hint: 'Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.'
    },
    {
        Movie: "Inception",
        Hint: 'Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobbs criminal history as payment for performing on his sick competitors son.'
    },
    {
        Movie: "Dunkirk",
        Hint: 'During World War II, soldiers from the British Empire, Belgium and France try to evacuate from a town during a arduous battle with German forces.'
    },
    {
        Movie: "Peaky Blinder",
        Hint: 'A dangerous man, leads a gang based in Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities.'
    },
    {
        Movie: "The revenant",
        Hint: 'A legendary frontiersman, is severely injured in a bear attack and is abandoned by his hunting crew. He uses his skills to survive and take revenge on his companion who betrayed him.'
    },
    {
        Movie: "Suicide Squad",
        Hint: 'Amanda Waller assembles a team of imprisoned supervillains to execute dangerous black ops missions. When an ancient witch threatens to destroy mankind, the squad is sent to stop her.'
    },
    {
        Movie: "The Meg",
        Hint: 'When the members of an underwater research facility are under threat owing to a 75-foot prehistoric shark, Jonas Taylor, a deep-sea diver, is hired to save them.'
    },
    {
        Movie: "Taken",
        Hint: 'An ex-Secret Service agents teenage daughter is abducted by human traffickers while on a trip to Paris. With almost no information on her whereabouts, he travels to Paris to find and save her.'
    },
    {
        Movie: "The Grey",
        Hint: 'A wolf hunter, is one of the eight survivors of a plane crash. He must fight off a pack of hungry wolves, mortal injuries and the icy elements to get himself and the survivors back to safety.'
    },
    {
        Movie: "Men in Black",
        Hint: 'Is a scum-fighting super-agents; their latest mission is to save the world from a total intergalactic disaster.'
    },
    {
        Movie: "Harry Potter",
        Hint: 'An eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.'
    },
    {
        Movie: "The Silence of the lambs",
        Hint: 'An FBI agent, seeks help from Hannibal Lecter, a psychopathic serial killer and former psychiatrist, in order to apprehend another serial killer who has been claiming female victims.'
    },
    {
        Movie: "Rush Hour",
        Hint: 'When a Chinese consuls young daughter is kidnapped, Hong Kong Detective Lee must team up with Carter, a loud-mouthed LA detective. Distinctive work styles and cultural differences pose hiccups.'
    },
    {
        Movie: "Mr bean",
        Hint: 'A lazy security guard, is sent to the United States to bring a valued painting to a museum in Los Angeles. The mishaps in his journey lead to comical adventures.'
    },
    {
        Movie: "The Mask",
        Hint: 'A meek bank employee, turns into an eccentric and maniacal green-skinned superhero who can bend reality, after wearing a wooden mask that was created by Loki, the Norse god of mischief.'
    },
    {
        Movie: "Mission Impossible",
        Hint: 'An American special agent, struggles to prove his innocence and catch the real culprit when he is falsely accused of murdering his entire team.'
    },
    {
        Movie: "Dr Strange",
        Hint: 'A famous neurosurgeon, loses the ability to use his hands. He goes to visit the mysterious Ancient One to heal himself and becomes a great sorcerer under her tutelage.'
    },
    {
        Movie: "Mulan",
        Hint: 'She is distraught to learn that her weak father must join the army to fight the invading Huns. Unwilling to endanger his life, she disguises herself as a man and joins the army in his place.'
    },
    {
        Movie: "Mad Max",
        Hint: 'A drifter and survivor, unwillingly joins Imperator Furiosa, a rebel warrior, in a quest to overthrow a tyrant who controls the lands water supply.'
    },
    {
        Movie: "London Has Fallen",
        Hint: 'A Secret Service agent, must find a way to escape with his team when Barkawi, a terrorist, attacks all the world leaders attending the funeral of the British Prime Minister, James Wilson.'
    },
    {
        Movie: "John Wick",
        Hint: 'A killer searching for the men who broke into his home, stole his vintage car and killed his puppy, which was a last gift to him from his recently deceased wife.'
    },
    {
        Movie: "The Mummy",
        Hint: 'After Sergeant Nick and Corporal Chris call an air strike on an enemy stronghold, they stumble upon the tomb of Princess Ahmanet. The princess is set free and Nick has to fight for his life.'
    },
    {
        Movie: "Jack Reacher",
        Hint: 'When a former US Army sniper, James Barr, is accused of killing five people, a former Military Police officer, takes it upon himself to investigate the case.'
    },
    {
        Movie: "The Witcher",
        Hint: 'A solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.'
    },
    {
        Movie: "Split",
        Hint: 'who is suffering from dissociative identity disorder and has 23 alter egos, kidnaps three teenagers. They must figure out his friendly personas before he unleashes his 24th personality.'
    },
    {
        Movie: "Glass",
        Hint: 'A group of armed men intervene. Now locked in a mental facility with Elijah, the two find their superhuman abilities being questioned by Ellie, a secretive psychiatrist.'
    },
    {
        Movie: "Unbreakable",
        Hint: 'A security guard, survives a fatal train accident, only to be tracked down by a man named Elijah Price, who claims that David is blessed with superhuman abilities.'
    },
    {
        Movie: "Safe House",
        Hint: 'A CIA agent, is tasked with looking after a criminal, locked in a safe house. But when the safe house is attacked, Matt escapes with the criminal in tow.'
    },
    {
        Movie: "Maleficent",
        Hint: 'Is a kind-hearted fairy, who is deceived by the love of her life, Stefan. Soon, she places a curse on his daughter, Aurora, in order to exact revenge.'
    },
    {
        Movie: "Alice in Wonderland",
        Hint: 'A 19 years old, follows a rabbit in a blue coat to a magical wonderland from her dreams where she is reunited with her friends who make her realise her true destiny.'
    },
    {
        Movie: "Corpse Bride",
        Hint: 'When Victor is practising his wedding vows in the woods, he accidentally gets married to a skeleton-like creature called Emily who whisks him off to the land of the dead.'
    },
    {
        Movie: "Salt",
        Hint: 'CIA agent life takes an ugly turn when she is accused of planning the assassination of the Russian president. However, she flees and sets out to prove her innocence.'
    }
]

export default randomMovies;
