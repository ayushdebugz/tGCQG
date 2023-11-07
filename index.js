//CODE PROVIDED BY LORD AYUSH JHA @theGeekyChad ©
//YOU CAN FREELY EDIT AND USE THE CODE HEREBY
let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [ // HERE I'VE DEFINED THE QUOTES' LIBRARY.
    '"   When The Going Gets Tough, The Tough Gets Going...   ~ UnKnown   " ',
    '"   Being Rich Is Hard, Being Poor Is Hard: Choose Your Hard...    ~ Ayush Jha   "',
    '"   Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Comply...   ~ Johann Wolfgang Von Goethe   "',
    '"   The Bad News is That The Time Flies. The Good News Is You Are The Pilot...   ~ Michael Altshuler   "',
    '"   An Honest Man Is Always A Child.... ~ Socrates   "',
    '"   The Roots Of Education Are Always Bitter, But The Fruit Is Always Sweet.... ~ Aristotle   "',
    '"   It Is Easier To Build Strong Children, Then To Repair Broken Men .... ~ Frederick Douglass   "',
    '"   Do We Not Realize That Self Respect Comes From Self Reliance.... ~ APJ Abdul Kalam   "',
    '"   You Have To Dream, Before Your Dreams Come True.... ~ APJ Abdul Kalam   "',
    '"   Great Minds Disscuss Ideas; Average Minds Disscuss Events; Small Minds Disscuss People... ~Eleanor Roosevelt   "',
    '"   I Hear And I Forget. I See And I Remember. I Do And I Understand.... ~ Chinese Proverb   "',
    '"   The Pessimist Sees Difficulty In Every Opportunity, The Optimist Sees Opportunity In Every Difficulty.... ~ Winston Churchill   "',
    '"   Tough Times Produces Strong Men, Strong Men Produces Good Time, Good Time Produces Weak Men, Weak Men Produces Tough Times  & Tough Times Gives Strong Men And The Circle Goes ON And ON.... ~ FACT   "',
    '"   Dont Let Yesterday, Take Up Too Much Of Today... ~ Will Rogers   "',
    '"   Early Success Develops Arrogance, Late Success Develops Character .... ~ UnKnown   "',
    '"   The Force From The Outside, Might Break You But The Force From Within Definately Makes You... ~ Experience   "',
    ];
//CODE PROVIDED BY LORD AYUSH JHA @theGeekyChad ©
//YOU CAN FREELY EDIT AND USE THE CODE HEREBY
btn.addEventListener('click', function() {
    var randomQuote = quotes[Math.floor(Math.random()*quotes.length)]
    output.innerHTML = randomQuote;

})

//CODE PROVIDED BY LORD AYUSH JHA @theGeekyChad ©
//YOU CAN FREELY EDIT AND USE THE CODE HEREBY
