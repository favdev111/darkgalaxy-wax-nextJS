const initialState = {
    pageItems: {
        androids: [
            {
                id: 'kred',
                race: 'androids',
                src: '../../../static/img/Cards/Androids/Cred.png',
                title: 'Kred',
                description: 'Kred has no contact with a new culture when not at war. He gathers intelligence and prepares alternate battle plans based on the intelligence received. He will lead any attack ordered',
            },
            {
                id: 'olgoks',
                race: 'androids',
                src: '../../../static/img/Cards/Androids/Olgoks.png',
                title: 'Olgoks',
                description: 'The Olgoks class have more personality than basics as they are allowed non-battle contact with other races. Olgoks\' programming makes him a relaxing conversationalist.',
            },
            {
                id: 'skroku',
                race: 'androids',
                src: '../../../static/img/Cards/Androids/Skroku.png',
                title: 'Skroku',
                description: 'Programmed to learn and appreciate the nuances of new cultures they encounter, Scrok’u is always a new race’s first contact with the Guq’uk. Unlike Tenzuls, he recognizes the value of captured fighters and overrides Tenzuls\' tendency to exterminate rather than imprison.',
            },
            {
                id: 'tenzuls',
                race: 'androids',
                src: '../../../static/img/Cards/Androids/Tenzuls.png',
                title: 'Tenzuls',
                description: 'Tenzuls appears charming and debonair when not in battle, but his programming renders him a deadly, take no prisoners fighter in combat.',
            },
            {
                id: 'vephrail',
                race: 'androids',
                src: '../../../static/img/Cards/Androids/Vephraill.png',
                title: 'Vephrail',
                description: 'Vephrail controls the AI. He has been the master AI for centuries. Should anything happen to him, the central processing system will create a new AI in minutes. He appears warm and welcoming in interactions with non-Guq’uk, but it is always clear that he has the upper hand. Renowned for his cunning and strategy, he leads the Guq\'uk to the far reaches of the galaxy in search of ever improving technologies for his race',
            },
            {
                id: 'bheve',
                race: 'androids',
                src: '../../../static/img/Cards/Androids/Bheve.png',
                title: 'Bheve',
                description: 'Bheve is a basic worker droid. Basics typically have no personality. They exist to fight and work. Other than battle, they have no contact with other races.',
            },
            {
                id: 7,
                race: 'androids',
                src: '../../../static/img/Cards/Androids/Bonshir.png',
                title: 'Bonshir',
                description: 'The Bonsir is a warrior, sleek, fast and deadly. Its built in positronic lances are able to pierce through almost anything, and its state of the art servos give his droid lighting fast reflexes and the ability to run at speeds only imagines by most bi-pedal species.',
            },
            {
                id: 8,
                race: 'androids',
                src: '../../../static/img/Cards/Androids/Guldark.png',
                title: 'Guldark',
                description: 'At 9 feet tall the Guldark model are the bouncers of the Guq\'uk race. Built and programmed to serve and protect they are hired by high level dignitaries of every race and breed to be body guards. Generally kind in nature, their programming leaves to margin for error as any perceived threat to its master will be met with deadly consequences.',
            },
            {
                id: 9,
                race: 'androids',
                src: '../../../static/img/Cards/Androids/Kuldoqui.png',
                title: 'Kuldoqui',
                description: 'Rarely seen, the Kuldoqui do not rely on ships to travel the worlds, they are self contained and have the unique ability to traverse space using its propulsion lances. Originally designed as a weapon, the Kuldoqui is now more of a stealth agent being able to remain hidden above a planets atmosphere collecting intelligence data for the Guq\'uk.',
            },
            {
                id: 10,
                race: 'androids',
                src: '../../../static/img/Cards/Androids/Shehan.png',
                title: 'Shehan',
                description: 'The Shehan were created purely to inhabit the planet Mazod where its inhabitants live underground. Its snake like appearance allow it to burrow deep into the ground, striking its victims almost undetected.',
            }
        ],
        humanity: [
            {
                id: 'carson',
                race: 'humanity',
                src: '../../../static/img/Cards/Humanity/Carson.png',
                title: 'Josephine Carson',
                description: ' Carson, 28, excels in astrophysics and tactics. Like Garcia she was firecly determined to rule the galaxy however after a few short skirmishes she quickly realised that it takes more than a blaster and a bad attitude to climb to the top.',
            },
            {
                id: 'facundo',
                race: 'humanity',
                src: '../../../static/img/Cards/Humanity/Facundo.png',
                title: 'Luana Facundo',
                description: 'Facundo, 40, rose quickly through the ranks of her peers due to above-average intelligence. In Portuguese, Luana means “lion,” and Facundo means “eloquent,” and she possesses both of these traits in abundance. She is well respected by her inferiors and superiors alike.',
            },
            {
                id: 'garcia',
                race: 'humanity',
                src: '../../../static/img/Cards/Humanity/Garcia.png',
                title: 'John Garcia',
                description: 'Garcia, 20 years old, is a freshed faced noob with a gun, full of confidence with a distinct lack of real work experience. Despite less than stellar academics, he reads people well and is a first-rate athlete. Like all 20 somthings he is determined to rule the galaxy one day and is eger to get out there and start shooting!',
            },
            {
                id: 'gluck',
                race: 'humanity',
                src: '../../../static/img/Cards/Humanity/Gluck.png',
                title: 'Levi Gluck',
                description: 'Gluck, 45, represents the voice of reason. He prefers negotiating and stealth tactics to open confrontation. We has a quick witt and often finds himself talking his way out of confrontation rather than resorting to his trusty sidearm.',
            },
            {
                id: 'mesbah',
                race: 'humanity',
                src: '../../../static/img/Cards/Humanity/Mesbah.png',
                title: 'Saeeda Mesbah',
                description: ' Mesbah, 57, guides and controls her reports with a calm demeanour and a steady hand. More often than not, she leads them to a conclusion rather than ordering it upon them. Through her many hard battled years she comands a small army and prefers to think through problems and solutions deliberately and slowly, seeing options others do not see or dismiss without sufficient consideration rather than simply ordering her well trained mercinaries into battle.',
            },
            {
                id: 'pai',
                race: 'humanity',
                src: '../../../static/img/Cards/Humanity/Pai.png',
                title: 'Damini Pai',
                description: 'Pai, 32, is fearless and possesses a warrior’s spirit. Her father is a politician, but she refuses his offers of more lucrative and safer jobs, preferring her bounty hunter lifestyle and trips around different planets looking for reward.',
            },
            {
                id: 'fox',
                race: 'humanity',
                src: '../../../static/img/Cards/Humanity/Fox.png',
                title: 'Eloise Fox',
                description: 'Eloise, 27, she\'s smart, sexy, sassy and deadly! Eloise was aways a loner, kept to herself and always like to do things on her own. This led her to the edge of the galaxy where laws are almost non-existant and anything goes. It\s here she learnt that laws and rules are just there to be broken.',
            },
            {
                id: 'umbra',
                race: 'humanity',
                src: '../../../static/img/Cards/Humanity/Umbra.png',
                title: 'Marcus Umbra',
                description: 'Marcus, 30, Like Eloise, Marcus preferes to stay on the fringe, on the outside, on the edge where most of the action is. He\'s a bounty hunter and loves the thrill of the chase and the spoils of a capture. He has an on again - off again relationship with Eloise which has been going on for some time and whilst they appear to be perfect for each other it rarely lasts more than a couple of months.',
            },
            {
                id: 'mcgowen',
                race: 'humanity',
                src: '../../../static/img/Cards/Humanity/McGowen.png',
                title: 'Wraith McGowen',
                description: 'Wraith, 36, As a young child Wraith had a fascination with electricity. He loved watching the lightning arc across the twin spires of the capital building on his home planet. In his later years he performed many experiments and perfected what he called the "power glove", his weapon of choice in a fight.',
            },
            {
                id: 'donovan',
                race: 'humanity',
                src: '../../../static/img/Cards/Humanity/Donovan.png',
                title: 'Jacob Donovan',
                description: 'Jacob, 37, grew up on Earth in a small town in Ireland, he studied hard in school and worked through a masters in engineering. He was so skilled in his craft that he built his own companion attack droid 1313. It may look harmless but with 2 isotronic lances it can cut through almost any hardened armour.',
            }
        ],
        creatures: [
            {
                id: 'asger',
                race: 'creatures',
                src: '../../../static/img/Cards/Creatures/Asger.png',
                title: 'Asger',
                description: 'Fierce in a fight, Asger is a simple creature with little ambition. He will not advance beyond a basic fighter but will serve well those that lead him.',
            },
            {
                id: 'erico',
                race: 'creatures',
                src: '../../../static/img/Cards/Creatures/Erico.png',
                title: 'Erico',
                description: 'Eikir’s son, Erico, follows his father’s chosen path without question. While it appears to others that he lacks motivation, he learns everything he can and tries to build a loyal following among the younger Kulze. He aspires to be as powerful as his father.',
            },
            {
                id: 'hillevi',
                race: 'creatures',
                src: '../../../static/img/Cards/Creatures/Hillevi.png',
                title: 'Hillevi',
                description: 'Hillevi is one of the few female Kulze that you will find in the midst of a fight. Most female Kulze are diplomats or spies/assassins. Hillevi has above average strength for a Kulze and is one of the top Kulze scouts. Eirik favors her, but Uffe and Viggo silently despise her as she is both cunning and fierce and will stop at nothing to get what she wants.',
            },
            {
                id: 'elrik',
                race: 'creatures',
                src: '../../../static/img/Cards/Creatures/Marshal.png',
                title: 'Elrik',
                description: 'Eirik, approaching 200 years old, has led the successful conquest of 5 worlds. As a strong leader of his people, he is the top Kulze, as the race reveres its leaders. His skills at both negotiation and military statergy earn him the respect of all his peers and well placed in his position as leader of his race.',
            },
            {
                id: 'uffe',
                race: 'creatures',
                src: '../../../static/img/Cards/Creatures/Ulffe.png',
                title: 'Uffe',
                description: 'Uffe, slightly younger than Field Marshall Eirik, has been second in command for 4 of Eirik’s 5 victories. Uffe represents Eirik’s reckless side and always recommends aggression before a negotiation. Uffe chafes at having to wait and never accompanies diplomatic teams. He skillfully deploys fighters in battle and is a leader for Eirik on the battlefield.',
            },
            {
                id: 'viggo',
                race: 'creatures',
                src: '../../../static/img/Cards/Creatures/Viggo.png',
                title: 'Viggo',
                description: 'Viggo, at 100, is a battle hardned fighter of the Kulze. He has an ability to provide top-notch intelligence to Uffe during a battle. He despises Eirik as weak and slow and hopes that Uffe will succeed Eirik, as this provides his best path to eventually becoming a strong leader or his people.',
            },
            {
                id: 'conju',
                race: 'creatures',
                src: '../../../static/img/Cards/Creatures/Conju.png',
                title: 'Conju',
                description: 'A dark multi-limbed species who\'s sole purpose is the acquisition of assets, gold, gems, property, anything of value and they will stop at nothing to acquire as much as they can. They are tough, fast and ruthless, often seen on the battlefield wielding dual sub-neutronium blasters and a pair of battle axes.',
            },
            {
                id: 'nuldark',
                race: 'creatures',
                src: '../../../static/img/Cards/Creatures/Nuldark.png',
                title: 'Nuldark',
                description: 'The Nuldark are mystics of the Kulze, they channel the dark energy of the universe and have honed their craft so well they they rarely need to raise a weapon in combat. From channeling dark energy to extract the life force of it\'s foe or conjuring souls of the dead to fight, these creatures are ones to steer clear of.',
            },
            {
                id: 'skree',
                race: 'creatures',
                src: '../../../static/img/Cards/Creatures/Skree.png',
                title: 'Skree',
                description: 'Another multi-limbed species, the Skree love to fight. Their solid build and 4 arms give them the strength to hold the largest of weapons giving them the advantage over lesser bi-pedal species. If there is a fight to be had then the Skree will usually be found lurking somewhere about looking to get in on the action.',
            },
            {
                id: 'torlak',
                race: 'creatures',
                src: '../../../static/img/Cards/Creatures/Torlak.png',
                title: 'Torlak',
                description: 'A warrior class, the Torlak are more primitive than most races. They are hunter-gatherers and often travel with their pets for company. Whilst not being very technologically advanced they have honed their fighting skills and are fast and powerful in a fight.',
            }
        ],
        luma: [
            {
                id: 'awen',
                race: 'luma',
                src: '../../../static/img/Cards/Luma/Awen.png',
                title: 'Awen',
                description: 'At 24 years old, Awen is a beautiful person both inside and out, her pale blue skin and strikingly brilliant eyes, long flowing dark black hair and elegant robes make Awen a desired after creature in the galaxy. She is well educated in all things Jujari and a student of Master So-Elku. She is well versed in the Unity and her abilities are growing stronger each day.',
            },
            {
                id: 'piper',
                race: 'luma',
                src: '../../../static/img/Cards/Luma/Piper.png',
                title: 'Piper',
                description: 'Just a small child of 9 years old who always knew she was special, her stuffed corgachirp "Talisman" never leaves her side and is her trusty companion throughout her many journeys in the galaxy. She is just discovering her life and the meaning to the strange things she feels and abilities that randomly manifest themselves when Talisman is not around. After the loss of both her father and mother, she now lives and trains with Awen. Piper has wispy blonde hair and a freckled-faced. She usually wears a puffy winter jacket, tights and oversized snow boots and wears a backpack to keep her holopad in.',
            },
            {
                id: 'so-elku',
                race: 'luma',
                src: '../../../static/img/Cards/Luma/So-Elku.png',
                title: 'Master So-Elku',
                description: 'So-Elku is the grand master of the Luma, his green and black robes brushing the floor. Tall. He has a bald pate but still wears some dark hair tied to the sides and back of his head. The wrap-around connected to a thin chinstrap of beard hair that rose over his top lip in sharp angles and left his chin bare. He had dark penetrating eyes and the wrinkles to reinforce the years of intellectual and mystical mastery of the Luma traditions. As the Grand Master of the Luma, he is the embodiment of their legacy and the director of their future.',
            },
            {
                id: 'stone',
                race: 'luma',
                src: '../../../static/img/Cards/Luma/Valerie_Stone.png',
                title: 'Valerie Stone',
                description: 'Valerie is 31 years old, mother to Piper and Daughter of Elder Willowood. She is a tall elegant woman with captivating beauty. Although now the wife of a senator, Valerie did spend some time in the military and was formidable in battle. Although she is part of the Order, she has no abilities in the Unity as it seems to have skipped over a generation.',
            },
            {
                id: 'willowood',
                race: 'luma',
                src: '../../../static/img/Cards/Luma/Willowood.png',
                title: 'Elder Willowood',
                description: 'An old woman wearing Luma robes, a dozen bangles and just as many necklaces, each abound with gold and colorful stones. Ageing blue eyes radiating more brilliantly than the stones she wears, topping off with a mass of wirey grey hair looking like it had been charged with an energy pack.',
            },
            {
                id: 'neevis',
                race: 'luma',
                src: '../../../static/img/Cards/Luma/Neevis.png',
                title: 'Elder Neevis',
                description: 'Neevis isn\'t liked by many, his demeaner and the way he carries himself comes across as un-trustworthy and a bit of a snake. He has little black beady eyes and spikey hair',
            },
            {
                id: 'matteo',
                race: 'luma',
                src: '../../../static/img/Cards/Luma/Matteo.png',
                title: 'Matteo',
                description: 'Awen\'s co-worker and friend, they went through the academy together and both studied Jujari culture and law. A tall man with short hair and dressed in typical Luma robes. He always had a thing for Awen, but she put him in the "friend" box quite early. Quite skilled in combat but much prefers diplomacy in light of a battle.',
            },
            {
                id: 'toochu',
                race: 'luma',
                src: '../../../static/img/Cards/Luma/Toochu.png',
                title: 'Elder Toochu',
                description: 'A frail old man with a liver spotted bald pate and white wisps of hair over his ears to match. A dotting grandfather type, wise in the ways of the Unity. Despite his appearance he is quite skilled in the art of combat both in the physical world and the spiritual world and is a formidable adversary in any battle.',
            },
        ],
        dread: [
            {
                id: 1,
                race: 'dread',
                src: '../../../static/img/Cards/Dread/Gluttony.png',
                title: 'Gluttony',
                description: 'Gluttony was the first "Planet Killer" creature to emerge from the other side, it\'s size is greater than a small planet and has only ever been seen in open space. It appears above a planet and then begins to tear the entire planet apart consuming everything both inside and out.',
            },
            {
                id: 2,
                race: 'dread',
                src: '../../../static/img/Cards/Dread/Shambling_King.png',
                title: 'Shambling King',
                description: 'It is called a king from the crown on it\'s head, it struggles being in our reality with unusual movements but lives for the blood of a human. It is like an addictive drug which pulls it from it\'s own reality into ours.',
            },
            {
                id: 3,
                race: 'dread',
                src: '../../../static/img/Cards/Dread/The_Chosen.png',
                title: 'The Chosen',
                description: 'A tall creature with horns like an elk, shrouded in heavy robes and faceless. They are called the chosen as they command a god like demeanor that draws people to worship them. They are however ruthless killers and will tear people apart with just a thought to get what they want.',
            },
            {
                id: 4,
                race: 'dread',
                src: '../../../static/img/Cards/Dread/The_Darkness.png',
                title: 'The Darkness',
                description: 'Ripped from another dimension this creature knows only darkness. It\'s world has no sun and it has evolved to be as black as night making it almost impossible to see in the dark. It is a flesh eater and will devour any prey it gets it\'s claws into. A fierce stealthy fighter and should be avoided at all costs.',
            },
            {
                id: 5,
                race: 'dread',
                src: '../../../static/img/Cards/Dread/The_Faceless.png',
                title: 'The Faceless',
                description: 'They are called the Faceless as no one has ever actually seen their true form, they appear in a silver body with tendrils protruding from their back like an octopus. The tendrils wrap around their prey and extract the life force from them leave their victim an empty shell.',
            },
            {
                id: 6,
                race: 'dread',
                src: '../../../static/img/Cards/Dread/The_Follower.png',
                title: 'The Follower',
                description: 'The Follower is a slow moving creature but with powerful claws and razor sharp nails. Due to the horns on their head some have speculated that they may be a cousin of The Chosen.',
            },
            {
                id: 7,
                race: 'dread',
                src: '../../../static/img/Cards/Dread/The_Mother.png',
                title: 'The Mother',
                description: 'The Mother was the second "Planet Killer" discovered. A spider like creature that drifts through space piercing planets with it needle and drinking the contents of worlds, leaving them dead to whoever may have inhabited them. She earnt her name by the way she wraps around a planet with her legs in a motherly embrace before devouring it.',
            },
            {
                id: 8,
                race: 'dread',
                src: '../../../static/img/Cards/Dread/The_Siren.png',
                title: 'The Siren',
                description: 'Her call can be heard across star systems, the sweet sound of the siren\'s song draws it prey close, as it\'s victim comes into the Siren\'s embrace it\'s fleshy skirt will with teeth envelopes it\'s next meal and slowly digests them in painful agony.',
            },
            {
                id: 9,
                race: 'dread',
                src: '../../../static/img/Cards/Dread/The_Undying.png',
                title: 'The Undying',
                description: 'The Undying are a shapeless form of gelatinous material. No one has ever been able to communicate with them as they have no discernable features however they appear through fischer\'s in the fabric of space, envelope and consume everything they touch before retreating back to where they came from.',
            },
            {
                id: 10,
                race: 'dread',
                src: '../../../static/img/Cards/Dread/The_Wandering_God.png',
                title: 'The Wandering God',
                description: 'A uniquely unusual half animal half creature character who appear to have evolved over millennia from what Humans would call a "Pegasus". It has the ability to omit a ultrasonic pitch that essentially turns it\'s recipients brain to mush.',
            }            
        ],
        jujari: [
            {
                id: 'rohoar',
                race: 'jujari',
                src: '../../../static/img/Cards/Jujari/Rohoar.png',
                title: 'Rohoar',
                description: 'Rohoar is the Blood Wolf, Standing almost 8ft tall and twice as wide as a human, the blood wolf wears a crimson sash across of his tawny chest and a wide leather belt around his waist, on it hangs a holstered blaster and a ceremonial curved Kiltari long sword. The fur on his shoulder matted down with a thick red fluid, blood from the daily executions.'
            }
        ],
        artifacts: [
            {
                id: 'abundance-amulet',
                race: 'artifacts',
                src: '../../../static/img/Cards/Artifacts/Amulet_of_Abundance_Web.png',
                title: 'Amulet of Abundance',
                description: 'It was discovered on a remote moon of the Kulze planet Garu. It is rumoured to be an ancient amulet, lost 500 years ago when being transported back to the homeworld. The Kulze transport crashed on-route and was only found some 50 years ago. It gives the target creature you control +3 attack until end of turn.',
            },
            {
                id: 'life-elixer',
                race: 'artifacts',
                src: '../../../static/img/Cards/Artifacts/Elixir_of_Life_Web.png',
                title: 'Elixer of Life',
                description: 'This card sill revive the last dead card from the graveyard. One of the most sought after prizes of the galaxy, the Elixer of Life has the power to restore life itself! Given to any creature within 2 hours of being killed, it will draw back the soul of that creature and bring them back to life.',
            },
            {
                id: 'feletus-incantation',
                race: 'artifacts',
                src: '../../../static/img/Cards/Artifacts/Feletus_Incantation_Web.png',
                title: 'Feletus Incantation',
                description: 'Creates a bolt of frost energy that stops the target attack ability for 1 turn. A page torn from the Texts of the Prophet and lost in the jungles of Rumeria, rediscovered 1 parsec ago by a band of roaming Kulze.',
            },
            {
                id: 'orion-oblisk',
                race: 'artifacts',
                src: '../../../static/img/Cards/Artifacts/Oblisk_of_Orion_Web.png',
                title: 'Oblisk of Orion',
                description: 'Increases the the target card attack for 2 turns. The great Oblisks\' were found within the Orion Belt of a small desolate moon. Their origin remains a great mystery with writtings on them from no known species. Those that channel thier power are given increased strength.',
            },
            {
                id: 'omebus-orb',
                race: 'artifacts',
                src: '../../../static/img/Cards/Artifacts/Omebus_Orb_Web.png',
                title: 'Omebus Orb',
                description: '+2 health / +2 attack to selected target . The Omebus Orb was discovered around 2000 years ago burried in the dunes of Plaxera. It was found during a human expedition looking for a new planet to colonize.',
            },
            {
                id: 'shadow-cane',
                race: 'artifacts',
                src: '../../../static/img/Cards/Artifacts/Shadow_Cane_Web.png',
                title: 'Shadow Cane',
                description: 'Immediatley destroy the target creature. The shadow cane was once owned by the dark king Nocterie, he was a master of dark magic and regulally wielded it\'s power to destroy entire civiliations in his pursuit of money and power.',
            },
            {
                id: 'persecution-skull',
                race: 'artifacts',
                src: '../../../static/img/Cards/Artifacts/Skull_of_Persecution_Web.png',
                title: 'Skull of Persecution',
                description: 'Deal random damage HP if opponent has more than 5 life. The Skull of Persecution is an ancient relic of the mystic wars which raged many planets 10,000 years ago. This skull if rumoured to be the skull of the great king Armedia of the Locturn people.',
            },
            {
                id: 'luitera-sword',
                race: 'artifacts',
                src: '../../../static/img/Cards/Artifacts/Sword_of_Luitera_Web.png',
                title: 'Sword of Luitera',
                description: 'Deal 1 damage to all enemy creatures on the board. The mighty Sword of Luitera was forged in the waters of Luitera by the Luma order. The order enchanted this sword with the ability to inflict damage on multiple enemies at the same time.',
            },
            {
                id: 'prophet-texts',
                race: 'artifacts',
                src: '../../../static/img/Cards/Artifacts/Texts_of_the_Prophet_Web.png',
                title: 'Texts of the Prophet',
                description: 'You gain 8 life points. This book of texts is the last remnants of the Milorian people. Over a mellenia, they discovered the sacred words and incantation to bring real power to those that recited thier words.',
            }
        ]
    },
    isLightbox: false,
    currentImg: '',
    currentType: '',
    displayMode: '',
    lightboxItem: null,
    selectorItems: [
        {
            id: 1,
            race: 'Androids',
            description: 'The Guq’uk evolved from a single AI into an independent being many hundreds of years ago.',
            src: '../../../static/img/Cards/Androids/Cred.png',
            link: '/characters#androids',
            display: true
        },
        {
            id: 2,
            race: 'Humanity',
            description: 'Humanity - the race that strives to withstand against other races.',
            src: '../../../static/img/Cards/Humanity/Facundo.png',
            link: '/characters#humanity',
            display: false
        },
        {
            id: 3,
            race: 'Creatures',
            description: 'The Kulze - large, menacing and a danger to all that meet them.',
            src: '../../../static/img/Cards/Creatures/Asger.png',
            link: '/characters#creatures',
            display: false
        },
        {
            id: 4,
            race: 'Luma',
            description: 'The Order of the Luma – a group of personalities whose power is connected to their feelings',
            src: '../../../static/img/Cards/Luma/Awen.png',
            link: '/characters#luma',
            display: false
        },
        {
            id: 5,
            race: 'Dread',
            description: 'The Dread - from multiple other dimensions, feared by all other races.',
            src: '../../../static/img/Cards/Dread/The_Faceless.png',
            link: '/characters#dread',
            display: false
        },
        {
            id: 6,
            race: 'Jujari',
            description: 'Description of a vigorous, animalistic race of Jujari',
            src: '../../../static/img/Cards/Jujari/Rohoar.png',
            link: '/characters#jujari',
            display: false
        }
    ],
    currentSelectorItem: null
};

const artPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_LIGHTBOX': {
            return {
                ...state,
                isLightbox: true
            }
        }
        case 'CLOSE_LIGHTBOX': {
            return {
                ...state,
                isLightbox: false
            }
        }
        case 'SET_LIGHTBOX_ITEM': {
            return {
                ...state,
                lightboxItem: action.lightboxItem
            }
        }
        case 'UNSET_LIGHTBOX_ITEM': {
            return {
                ...state,
                lightboxItem: null
            }
        }
        case 'SET_SELECTOR_ITEM': {
            const stateCopy = {...state};
            const selectorItemsCopy = [...stateCopy.selectorItems];
            selectorItemsCopy.find(item => item.id === action.id).display = true;
            return stateCopy;
        }
        case 'UNSET_SELECTOR_ITEM': {
            const stateCopy = {...state};
            const selectorItemsCopy = [...stateCopy.selectorItems];
            selectorItemsCopy.find(item => item.display === true).display = false;
            return stateCopy;
        }
        default: {
            return state;
        }
    }
};

export default artPageReducer;