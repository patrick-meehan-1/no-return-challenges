function scramble() {
    const words = [
        "Abandon", "Ability", "Absence", "Academy", "Account", "Accuse",
        "Achieve", "Acquire", "Address", "Adjust", "Advice", "Aerobic", "Affair",
        "Against", "Aircraft", "Alchemy", "Alert", "Algebra", "Alien", "Allege",
        "Amazing", "Ambition", "Analyze", "Ancient", "Anger", "Announce",
        "Anonymous", "Answer", "Anxiety", "Apology", "Appetite", "Approve",
        "Aquarium", "Architect", "Ardent", "Argument", "Arrest", "Arrival",
        "Article", "Ascend", "Aspect", "Assault", "Assert", "Athlete",
        "Atmosphere", "Attempt", "Attract", "Auction", "Avenue", "Awesome",
        "Balance", "Bamboo", "Barbecue", "Barge", "Barrel", "Battery", "Beacon",
        "Bedroom", "Beginning", "Behave", "Belief", "Beneath", "Benefit",
        "Beside", "Between", "Beyond", "Bicycle", "Biology", "Bishop", "Blanket",
        "Blessing", "Boast", "Boundary", "Bravery", "Breath", "Brilliant",
        "Broadcast", "Bubble", "Bucket", "Buddy", "Builder", "Burden",
        "Butterfly", "Cabinet", "Calculate", "Camera", "Campaign", "Capability",
        "Captain", "Capture", "Carbon", "Category", "Celebrate", "Ceremony",
        "Champion", "Character", "Charity", "Cheese", "Chemical", "Chief",
        "Childhood", "Choice", "Chorus", "Cinnamon", "Circus", "Civil",
        "Clarify", "Classic", "Climate", "Clinic", "Clumsy", "Coconut",
        "Collect", "Colony", "Combine", "Comfort", "Command", "Comment",
        "Community", "Compact", "Complain", "Complete", "Compose", "Concern",
        "Concert", "Confirm", "Conflict", "Congress", "Connect", "Consider",
        "Consume", "Contrast", "Convince", "Corridor", "Courage", "Coverage",
        "Create", "Crimson", "Criterion", "Crystal", "Curious", "Currency",
        "Cylinder", "Dancing", "Database", "Deadline", "Debatable", "Debut",
        "Decade", "Decline", "Decorate", "Dedicate", "Defend", "Definite",
        "Delegation", "Delicate", "Deliver", "Demand", "Demonstrate", "Denial",
        "Depict", "Deputy", "Derive", "Descend", "Describe", "Design",
        "Detection", "Develop", "Diagnose", "Diamond", "Dictate", "Dilemma",
        "Dimension", "Diplomat", "Directory", "Disagree", "Discover", "Dismiss",
        "Display", "Distance", "Divert", "Document", "Dominate", "Dread",
        "Dynamic", "Earnest", "Earthquake", "Eclipse", "Ecology", "Economy",
        "Educate", "Effort", "Elastic", "Elbow", "Elegant", "Element", "Embrace",
        "Emergency", "Emotion", "Emperor", "Emphasis", "Encounter", "Endure",
        "Enforce", "Engage", "Enjoy", "Enormous", "Entertain", "Envelope",
        "Envision", "Episode", "Equator", "Escalate", "Essence", "Estimate",
        "Evaluate", "Evening", "Evoke", "Examine", "Example", "Exchange",
        "Exercise", "Exhaust", "Exhibit", "Exile", "Expand", "Expect", "Explore",
        "Express", "Extend", "Extract", "Fabric", "Fantastic", "Farmer",
        "Fashion", "Feasible", "Federation", "Fertility", "Festival", "Fiction",
        "Filter", "Finance", "Fireplace", "Flame", "Flexible", "Flourish",
        "Fluid", "Foam", "Forecast", "Foremost", "Formal", "Fortunate",
        "Forward", "Fragile", "Freight", "Friction", "Frontier", "Fulfill",
        "Furniture", "Gallery", "Garden", "Gazebo", "Generate", "Genuine",
        "Gesture", "Glance", "Glitter", "Gorgeous", "Govern", "Graduate",
        "Gravity", "Graze", "Grief", "Grove", "Guarantee", "Guard", "Guidance",
        "Guilty", "Habitat", "Hammer", "Harbor", "Harmony", "Haste", "Hazard",
        "Headline", "Healthy", "Heaven", "Heritage", "Hesitate", "Highlight",
        "Holiday", "Homage", "Honest", "Horror", "Hospital", "Humble", "Hunter",
        "Hurry", "Hydrogen", "Hypothesis", "Iceberg", "Icon", "Ignite",
        "Illuminate", "Illusion", "Illustrate", "Immense", "Impact", "Imperial",
        "Implement", "Imply", "Import", "Improve", "Include", "Independence",
        "Indicate", "Individual", "Industry", "Infant", "Infinite", "Inform",
        "Ingredient", "Inhabit", "Inherit", "Initial", "Innocent", "Inspire",
        "Integrate", "Intense", "Interpret", "Introduce", "Invent",
        "Investigate", "Involve", "Isolate", "Jewel", "Journey", "Justice",
        "Keen", "Kettle", "Keyboard", "Kick", "Kingdom", "Knowledge",
        "Laboratory", "Lament", "Landscape", "Latitude", "Laugh", "Legend",
        "Liberty", "Lighthouse", "Limit", "Linen", "Listen", "Lively", "Lunar",
        "Machine", "Maintain", "Majestic", "Mankind", "Mansion", "Marble",
        "Market", "Masterpiece", "Meadow", "Measure", "Medieval", "Melody",
        "Memorable", "Menu", "Merchant", "Merit", "Method", "Midnight",
        "Migrate", "Military", "Minimum", "Mischief", "Mobile", "Modest",
        "Moment", "Morning", "Mosaic", "Motion", "Mysterious", "Navigate",
        "Nebula", "Negotiate", "Noble", "Nominate", "Nostalgia", "Notable",
        "Novel", "oble", "Nurture", "Observe", "Obstacle", "Occasion", "Occupy",
        "Ocean", "Official", "Ominous", "Operate", "Opulent", "Orchestra",
        "Organic", "Ornament", "Outlook", "Overture", "Pacific", "Palette",
        "Parade", "Parallel", "Passionate", "Patience", "Pattern", "Peaceful",
        "Peculiar", "Perceive", "Perfect", "Peril", "Permanent", "Persuade",
        "Pessimist", "Petal", "Phoenix", "Pioneer", "Placid", "Planet",
        "Platinum", "Pleasant", "Pleasure", "Plunge", "Pocket", "Polish",
        "Portrait", "Position", "Possible", "Powerful", "Precaution", "Prelude",
        "Preserve", "Prevail", "Primary", "Proclaim", "Produce", "Profound",
        "Progress", "Project", "Promise", "Prosper", "Protect", "Protest",
        "Provide", "Prudent", "Puzzle", "Qualify", "Quality", "Quench",
        "Question", "Quiet", "Quiver", "Radiant", "Rainbow", "Rapture",
        "Realize", "Rebel", "Receive", "Recognition", "Recycle", "Reflect",
        "Refresh", "Rejoice", "Relax", "Reliable", "Remarkable", "Remember",
        "Renew", "Renowned", "Repair", "Replenish", "Represent", "Request",
        "Rescue", "Research", "Reside", "Resilient", "Resolve", "Resource",
        "Respect", "Restore", "Result", "Revive", "Rhythm", "Ribbon", "Riddle",
        "Rigorous", "Ripple", "Romantic", "Rubble", "Rumble", "Satisfy",
        "Sculpture", "Search", "Secret", "Secure", "Sensation", "Serene",
        "Shadow", "Shimmer", "Shiver", "Silence", "Silver", "Simplify", "Sketch",
        "Smile", "Soothe", "Sparkle", "Spectacle", "Spirit", "Splendid",
        "Splurge", "Sprout", "Square", "Starry", "Steady", "Stimulate", "Strive",
        "Sublime", "Success", "Suffice", "Suggest", "Summit", "Superb", "Surge",
        "Surpass", "Survive", "Suspense", "Symphony", "Synthesize", "Tangible",
        "Telescope", "Temperance", "Texture", "Thankful", "Thrive", "Tranquil",
        "Treasure", "Tribute", "Triumph", "Twinkle", "Ultimate", "Universe",
        "Uplift", "Valiant", "Valor", "Venture", "Veranda", "Vibrant", "Victory",
        "Vigilant", "Vintage", "Virtue", "Vision", "Vivid", "Volcano", "Voyage",
        "Wander", "Warmth", "Waterfall", "Whisper", "Wholesome", "Wonder",
        "Worship", "Worthy", "Yearn", "Yield", "Zenith"
    ]

    let count = 0;
    let score = 0;

    while (count < 10) {

        const nameLabel = document.createElement("label");
        nameLabel.textContent = "Enter your Name:";

        const name = document.createElement("input");
        name.type = "text"; // Corrected from inputField.type


        // Now you can append nameLabel and name to the document or another HTML element
        document.body.appendChild(nameLabel);
        document.body.appendChild(name);


    }




}