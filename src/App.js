import React from 'react';
import Caroussel from './Caroussel';
import Navbar from './Navbar';
import ReactGA from 'react-ga';



const App = () => {
   // ReactGA.initialize('UA-273634836-2');
  const flashcards = [
    { question: "What happens when magnesium burns in air?", answer: "It forms magnesium oxide and produces heat and light."},
    { question: "What is produced when coal burns in air?", answer: "It produces carbon dioxide, heat, and light."},
    { question: "What are the three different zones of a flame?", answer: "The dark zone, luminous zone, and non-luminous zone."},
    { question: "What is the impact of an increased percentage of carbon dioxide in the air?", answer: "It is linked to global warming."},
    { question: "What do oxides of sulphur and nitrogen produced by the burning of coal, diesel, and petrol cause?", answer: "Acid rain, which is harmful to crops, buildings, and soil."},
    { question: "What are some fuels used for various purposes at home, in industry, and for running automobiles?", answer: "Wood, coal, charcoal, petrol, diesel, compressed natural gas (CNG), etc."},
    { question: "What is the difference between the burning of a candle and the burning of a fuel like coal?", answer: "The burning of a candle produces a flame, whereas coal does not produce a flame."},
    { question: "What is combustion?", answer: "A chemical process in which a substance reacts with oxygen to give off heat."},
    { question: "Name some examples of combustible materials.", answer: "Wood, paper, straw, charcoal, matchsticks, and kerosene oil."},
    { question: "Name some examples of non-combustible materials.", answer: "Iron nails, stone, and glass."},
    { question: "What are substances that burn in air called?", answer: "Combustible"},
    { question: "What is given out during the process of combustion?", answer: "Heat and light are given out during combustion."},
    { question: "What is ignition temperature?", answer: "The lowest temperature at which a combustible substance catches fire."},
    { question: "What is the characteristic of inflammable substances regarding their ignition temperature?", answer: "Inflammable substances have a very low ignition temperature."},
    { question: "How can fire be controlled?", answer: "Fire can be controlled by removing one or more requirements essential for producing fire."},
    { question: "What is commonly used to control fires?", answer: "Water is commonly used to control fires."},
    { question: "Can water be used to control fires involving electrical equipment or oils?", answer: "No, water cannot be used to control fires involving electrical equipment or oils."},
    { question: "What are the various types of combustion?", answer: "Rapid combustion, spontaneous combustion, explosion, etc."},
    { question: "What are the characteristics of an ideal fuel?", answer: "Cheap, readily available, readily combustible, easy to transport. High calorific value, doesn't produce polluting gases or residues."},
    { question: "How is fuel efficiency expressed?", answer: "Fuel efficiency is expressed in terms of its calorific value, in units of kilojoule per kg."},
    { question: "What are unburnt carbon particles in the air?", answer: "Dangerous pollutants causing respiratory problems."},
    { question: "How is food broken down in our body?", answer: "Food is broken down in our body by a reaction with oxygen, and energy is produced."},
    { question: "What is necessary for combustion to occur?", answer: "Air is necessary for combustion to occur."},
    { question: "Describe the burning of a candle when air can enter the chimney from below.", answer: "When air can enter the chimney from below, the candle burns freely."},
    { question: "What happens when air does not enter the chimney from below during the burning of a candle?", answer: "When air does not enter the chimney from below, the flame flickers and produces smoke."},
    { question: "What happens when air is not available during the burning of a candle?", answer: "When air is not available, the flame finally gets extinguished."},
    { question: "How are heat and light produced in the sun?", answer: "Heat and light in the sun are produced by nuclear reactions."},
    { question: "What can happen during extreme heat of summer?", answer: "During extreme heat of summer, dry grass can catch fire."},{ question: "What can happen when a fire spreads from grass to trees during extreme heat?", answer: "When a fire spreads from grass to trees, the whole forest can soon be on fire, and it becomes very difficult to control such fires."},{ question: "What temperature is necessary for a combustible substance to catch fire or burn?", answer: "A combustible substance cannot catch fire or burn as long as its temperature is lower than its ignition temperature."},{ question: "Give an example of a cooking oil catching fire when a frying pan is kept for long on a burning stove.", answer: "Cooking oil can catch fire when a frying pan is kept for long on a burning stove."},{ question: "Do kerosene oil and wood catch fire on their own at room temperature?", answer: "No, kerosene oil and wood do not catch fire on their own at room temperature."},{ question: "What happens when kerosene oil is heated a little?", answer: "When kerosene oil is heated a little, it will catch fire."},{ question: "What does it indicate if the ignition temperature of kerosene oil is lower than that of wood?", answer: "If the ignition temperature of kerosene oil is lower, it indicates that kerosene oil can catch fire at a lower temperature compared to wood."},{ question: "Is it important to take special care in storing kerosene oil?", answer: "Yes, it is essential to take special care in storing kerosene oil due to its lower ignition temperature."},{ question: "What needs to happen for a substance to burn?", answer: "For a substance to burn, it needs to reach its ignition temperature."},{ question: "Describe the observation made in Activity 4.4 with the two paper cups and candle heat.", answer: "When both the paper cups are heated separately with a candle, it can be observed what happens to the cup with water and the cup without water."},{ question: "How old is the history of the matchstick?", answer: "The history of the matchstick is more than five thousand years old."},{ question: "What were the early matches made of in ancient Egypt?", answer: "Early matches in ancient Egypt were made of small pieces of pinewood dipped in sulphur."},{ question: "What is the modern safety match made of?", answer: "The modern safety match is made of a mixture of antimony trisulphide, potassium chlorate, glue, and starch."},{ question: "Why was white phosphorus dangerous in the manufacturing and use of matches?", answer: "White phosphorus was dangerous both for the workers involved in the manufacturing of matches and for the users."},{ question: "What does the head of a safety match contain today?", answer: "The head of a safety match contains antimony trisulphide and potassium chlorate, along with powdered glass and a little red phosphorus."},{ question: "What happens when a match is struck against the rubbing surface?", answer: "When a match is struck against the rubbing surface, some red phosphorus gets converted into white phosphorus, which reacts with potassium chlorate to produce enough heat to ignite antimony trisulphide and start combustion."},{ question: "Why does a matchstick not catch fire on its own at room temperature?", answer: "A matchstick does not catch fire on its own at room temperature because its ignition temperature is higher than room temperature."},{ question: "Why does a matchstick start burning when rubbed on the side of a matchbox?", answer: "When a matchstick is rubbed on the side of a matchbox, the friction generates enough heat to convert some red phosphorus into white phosphorus, which initiates the combustion of the matchstick."},{ question: "Can a paper cup boil water without burning?", answer: "Yes, if we continue heating the paper cup, we can even boil water in the paper cup without burning it."},{ question: "Why does a paper cup filled with water not burn?", answer: "In the presence of water, the ignition temperature of paper is not reached, so it does not burn."},{ question: "What are substances called that have very low ignition temperature and can easily catch fire with a flame?", answer: "Substances that have very low ignition temperature and can easily catch fire with a flame are called inflammable substances."},{ question: "Give examples of inflammable substances.", answer: "Examples of inflammable substances are petrol, alcohol, and Liquified Petroleum Gas (LPG)."},{ question: "How do firemen extinguish fires?", answer: "Firemen extinguish fires by throwing water under pressure."},{ question: "What should you do if a fire breaks out in your house or neighborhood?", answer: "If a fire breaks out in your house or neighborhood, the first thing to do is to call the fire service."},{ question: "What is the role of water in extinguishing fires?", answer: "Water cools the combustible material, bringing its temperature below its ignition temperature, which prevents the fire from spreading. Water vapors also surround the combustible material, helping to cut off the supply of air and extinguish the fire."},{ question: "What are the three essential requirements for producing fire?", answer: "The three essential requirements for producing fire are fuel, air (to supply oxygen), and heat (to raise the temperature of the fuel beyond the ignition temperature)."},{ question: "How can fire be controlled?", answer: "Fire can be controlled by removing one or more of the requirements for producing fire (fuel, air, or heat). Fire extinguishers are used for this purpose."},{ question: "Why is water not suitable for fires involving electrical equipment and inflammable materials like petrol?", answer: "Water may conduct electricity and harm those trying to extinguish the fire. It is also not effective for fires involving oil and petrol as water sinks below the oil and the fire continues to burn on top."},{ question: "What is the best extinguisher for fires involving electrical equipment and inflammable materials?", answer: "Carbon dioxide (CO2) is the best extinguisher for fires involving electrical equipment and inflammable materials. CO2 covers the fire like a blanket, cutting off the contact between fuel and oxygen."},{ question: "How is carbon dioxide obtained for fire extinguishing?", answer: "Carbon dioxide can be stored at high pressure as a liquid in cylinders. When released, it expands and cools down, forming a blanket around the fire and bringing down the temperature of the fuel."},{ question: "Which chemicals are used to obtain carbon dioxide for fire extinguishing?", answer: "Another way to obtain carbon dioxide is by releasing a lot of dry powder of chemicals like sodium bicarbonate (baking soda) or potassium bicarbonate. These chemicals give off CO2 near the fire."},{ question: "What is rapid combustion?", answer: "Rapid combustion is a type of combustion that occurs when a substance burns rapidly, producing heat and light."},{ question: "Give an example of a substance that burns in air at room temperature.", answer: "Phosphorus"},{ question: "What is spontaneous combustion?", answer: "Spontaneous combustion is a type of combustion in which a material suddenly bursts into flames without any apparent cause."},{ question: "What are some examples of spontaneous combustion?", answer: "Examples of spontaneous combustion include coal dust fires in coal mines and forest fires caused by heat or lightning."},{ question: "How are most forest fires caused?", answer: "Most forest fires are caused by the carelessness of human beings, such as leaving campfires unextinguished."},{ question: "What is an explosion?", answer: "An explosion is a sudden reaction that produces heat, light, sound, and the liberation of a large amount of gas."},{ question: "What happens when a cracker is ignited?", answer: "When a cracker is ignited, a sudden reaction takes place, releasing heat, light, sound, and a large amount of gas."},{ question: "What precaution should be taken with campfires in forests?", answer: "Campfires should be completely extinguished before leaving a forest to prevent the risk of fires."},{ question: "Why does charcoal not produce a flame?", answer: "Charcoal does not vaporize during burning, so it does not produce a flame."},{ question: "What could be the cause of the flame produced when the vapors of wax come out of a glass tube?", answer: "The vapors of wax coming out of the glass tube are likely the cause of the flame produced."},{ question: "What happens when a clean glass plate/slide is introduced into the luminous zone of a steady candle flame?", answer: "A circular blackish ring is formed on the glass plate/slide, indicating the deposition of unburnt carbon particles present in the luminous zone of the flame."},{ question: "What happens when a thin long copper wire is held just inside the non-luminous zone of a flame for about 30 seconds?", answer: "The portion of the copper wire just outside the flame gets red hot."},{ question: "What is the purpose of a goldsmith blowing through a metallic pipe?", answer: "The purpose of blowing through a metallic pipe is to increase the temperature of the flame and work with the metal at a more malleable state."},{ question: "What does the observation of the blackish ring and red hot portion of the copper wire placed in a flame reveal about different zones of the flame?", answer: "The blackish ring indicates the presence of unburnt carbon in the luminous zone, while the red hot portion of the copper wire indicates a high temperature in the non-luminous zone of the flame."},{ question: "What causes a flame to be produced during burning?", answer: "Substances that vaporize during burning give flames."},{ question: "Give examples of substances that produce flames during burning.", answer: "Examples include kerosene oil and molten wax, which rise through the wick, vaporize, and form flames."},{ question: "What are fuels and what are the characteristics of a good fuel?", answer: "Fuels are substances that provide heat energy for domestic and industrial purposes. A good fuel is readily available, cheap, burns easily in air at a moderate rate, produces a large amount of heat, and does not leave behind any undesirable substances."},{ question: "Is there an ideal fuel?", answer: "No, there is no fuel that can be considered as an ideal fuel. We should look for a fuel that fulfills most of the requirements for a particular use."},{ question: "How can fuels be classified based on their state?", answer: "Fuels can be classified as solid, liquid, and gaseous fuels."},{ question: "Provide examples of solid fuels, liquid fuels, and gaseous fuels.", answer: "Solid Fuels: CoalLiquid Fuels: Kerosene oilGaseous Fuels: Natural gas"},{ question: "What is fuel efficiency?", answer: "Fuel efficiency refers to the ability of a fuel to produce the desired amount of heat energy. It is measured by the amount of heat energy produced on complete combustion of 1 kg of the fuel, known as its calorific value."},{ question: "If given the choice between boiling water using cow dung, coal, and LPG as fuel, which fuel would you prefer? Give your reason.", answer: "I would prefer LPG as the fuel for boiling water. It is because LPG is a clean-burning fuel that produces a high amount of heat energy. It is convenient to use, does not produce much smoke or residue, and is readily available in a controlled and safe form."},{ question: "Do cow dung, coal, and LPG produce the same amount of heat?", answer: "No, cow dung, coal, and LPG do not produce the same amount of heat. They have different calorific values, with LPG generally having a higher calorific value compared to cow dung and coal."},{ question: "Why do goldsmiths use the outermost zone of a flame when melting gold and silver?", answer: "Goldsmiths use the outermost zone of a flame because it is the hottest part of the flame. By directing the outermost zone of the flame onto the gold or silver, they can achieve higher temperatures required for melting the metals."},{ question: "What are the different zones of a candle flame?", answer: "The different zones of a candle flame are:1. Outer zone of complete combustion (blue)2. Middle zone of partial combustion (yellow)3. Innermost zone of unburnt wax vapors (black)"},{ question: "What is the hottest part of a candle flame?", answer: "The hottest part of a candle flame is the outer zone of complete combustion (blue zone)."},{ question: "Why is burning coal in a closed room dangerous?", answer: "Burning coal in a closed room is dangerous because it produces carbon monoxide gas, which is very poisonous. Accumulation of carbon monoxide in a closed space can lead to suffocation and even death."},{ question: "What are the harmful effects of burning wood as a fuel?", answer: "Burning wood as a fuel releases a lot of smoke, which is harmful to human beings. It can cause respiratory problems. Additionally, using wood as fuel leads to deforestation, resulting in the loss of useful substances provided by trees and environmental harm."},{ question: "Why is wood still used as a fuel in many rural areas?", answer: "Wood is still used as a fuel in many rural areas because of its easy availability and low cost. In these regions, alternatives like coal or LPG may not be as accessible or affordable."},{ question: "What are the pollutants produced by the incomplete combustion of fuels?", answer: "Incomplete combustion of fuels produces two main pollutants:1. Fine particles: These particles can cause respiratory diseases such as asthma.2. Carbon monoxide gas: This gas is highly poisonous and can be lethal if inhaled in high concentrations.''"},{ question: "Why is it important to consider the cost of fuels?", answer: "Fuels differ in their cost, and considering the cost is important for economic reasons. Some fuels may be cheaper than others, and choosing cost-effective fuels can help reduce expenses for domestic and industrial purposes."},{ question: "Why is it necessary to look for a fuel that fulfills most of the requirements for a particular use?", answer: "It is necessary to look for a fuel that fulfills most of the requirements for a particular use to ensure efficiency, effectiveness, and safety in utilizing the fuel. Different applications may have specific needs, and selecting a fuel that meets those requirements optimizes performance."},{ question: "What are the dangers of carbon monoxide gas produced by fuels?", answer: "Carbon monoxide gas is highly poisonous and can cause severe health issues or even death if inhaled in high concentrations. It is important to ensure proper ventilation when using fuels that produce carbon monoxide to prevent its accumulation in closed spaces."},{ question: "How is the calorific value of a fuel expressed?", answer: "The calorific value of a fuel is expressed in a unit, which measures the amount of heat energy produced on complete combustion of 1 kg of the fuel."},{ question: "Why is the outermost zone of a flame used by goldsmiths for melting gold and silver?", answer: "Goldsmiths use the outermost zone of a flame for melting gold and silver because it is the hottest part of the flame. The high temperature in this zone aids in melting the metals efficiently."},{ question: "What are the harmful effects of increasing fuel consumption on the environment?", answer: "Increased fuel consumption has harmful effects on the environment, including the release of unburnt carbon, carbon dioxide (contributing to global warming), sulphur dioxide (causing acid rain), and gaseous oxides of nitrogen."},{ question: "How does the release of unburnt carbon from carbon fuels impact the environment?", answer: "Carbon fuels like wood, coal, and petroleum release unburnt carbon, which contributes to air pollution and can have detrimental effects on air quality and human health."},{ question: "What is the main greenhouse gas released during the combustion of most fuels?", answer: "The combustion of most fuels releases carbon dioxide (CO2) into the environment. Increased concentration of carbon dioxide in the air is believed to cause global warming."},{ question: "What is global warming and what are its consequences?", answer: "Global warming is the rise in temperature of the Earth's atmosphere. Consequences of global warming include the melting of polar glaciers, rising sea levels, and increased frequency and severity of floods in coastal areas."},{ question: "How does burning coal and diesel contribute to environmental pollution?", answer: "Burning coal and diesel releases sulphur dioxide (SO2) gas, which is suffocating and corrosive. Petrol engines give off gaseous oxides of nitrogen (NOx). These pollutants dissolve in rainwater and form acids, leading to the phenomenon known as acid rain. Acid rain is harmful to crops, buildings, and soil."},{ question: "Why is the use of diesel and petrol being replaced by CNG (Compressed Natural Gas) in automobiles?", answer: "The use of diesel and petrol is being replaced by CNG in automobiles because CNG produces harmful by-products in significantly smaller amounts compared to diesel and petrol. CNG is considered a cleaner fuel with lower emissions."},{ question: "How is the calorific value of a fuel expressed?", answer: "The calorific value of a fuel is expressed in a unit called kilojoule per kilogram (kJ/kg)."}
  ];  
  const flashcards2 = [
    {question: 'China', answer: 'Beijing'},
    {question: 'Japan', answer: 'Tokyo'},
    {question: 'Germany', answer: 'Berlin'},
    {question: 'France', answer: 'Paris'},
    {question: 'Italy', answer: 'Rome'},
    {question: 'South Korea', answer: 'Seoul'},
    {question: 'Australia', answer: 'Canberra'},
    {question: 'Russia', answer: 'Moscow'},
    {question: 'Spain', answer: 'Madrid'},
    {question: 'Mexico', answer: 'Mexico City'},
    {question: 'Indonesia', answer: 'Jakarta'},
    {question: 'Netherlands', answer: 'Amsterdam'},
    {question: 'Saudi Arabia', answer: 'Riyadh'},
    {question: 'Sweden', answer: 'Stockholm'},
    {question: 'Poland', answer: 'Warsaw'},
    {question: 'Belgium', answer: 'Brussels'},
    {question: 'Thailand', answer: 'Bangkok'},
    {question: 'Austria', answer: 'Vienna'},
    {question: 'Norway', answer: 'Oslo'},
    {question: 'Denmark', answer: 'Copenhagen'},
    {question: 'Philippines', answer: 'Manila'},
    {question: 'Finland', answer: 'Helsinki'},
    {question: 'Pakistan', answer: 'Islamabad'},
    {question: 'Chile', answer: 'Santiago'},
    {question: 'Ireland', answer: 'Dublin'},
    {question: 'Bangladesh', answer: 'Dhaka'}
    // {question: 'Portugal', answer: 'Lisbon'},
    // {question: 'Vietnam', answer: 'Hanoi'},
    // {question: 'Peru', answer: 'Lima'},
    // {question: 'Czech Republic', answer: 'Prague'},
    // {question: 'Romania', answer: 'Bucharest'},
    // {question: 'New Zealand', answer: 'Wellington'},
    // {question: 'Iraq', answer: 'Baghdad'},
    // {question: 'Greece', answer: 'Athens'},
    // {question: 'Algeria', answer: 'Algiers'},
    // {question: 'Qatar', answer: 'Doha'},
    // {question: 'Kazakhstan', answer: 'Nur-Sultan'},
    // {question: 'Hungary', answer: 'Budapest'},
    // {question: 'Kuwait', answer: 'Kuwait City'},
    // {question: 'Ukraine', answer: 'Kyiv'},
    // {question: 'Morocco', answer: 'Rabat'},
    // {question: 'Angola', answer: 'Luanda'},
    // {question: 'Ecuador', answer: 'Quito'},
    // {question: 'Puerto Rico', answer: 'San Juan'},
    // {question: 'Slovakia', answer: 'Bratislava'},
    // {question: 'Kenya', answer: 'Nairobi'},
    // {question: 'Sri Lanka', answer: 'Sri Jayawardenepura Kotte'},
    // {question: 'Ethiopia', answer: 'Addis Ababa'},
    // {question: 'Dominican Republic', answer: 'Santo Domingo'},
    // {question: 'Myanmar (Burma)', answer: 'Naypyidaw'},
    // {question: 'Uzbekistan', answer: 'Tashkent'},
    // {question: 'Luxembourg', answer: 'Luxembourg City'},
    // {question: 'Panama', answer: 'Panama City'},
    // {question: 'Ghana', answer: 'Accra'},
    // {question: 'Bulgaria', answer: 'Sofia'},
    // {question: 'Croatia', answer: 'Zagreb'},
    // {question: 'Tanzania', answer: 'Dodoma'},
    // {question: 'Lebanon', answer: 'Beirut'},
    // {question: 'Serbia', answer: 'Belgrade'},
    // {question: 'Costa Rica', answer: 'San José'},
    // {question: 'Tunisia', answer: 'Tunis'},
    // {question: 'Uruguay', answer: 'Montevideo'},
    // {question: 'Azerbaijan', answer: 'Baku'},
    // {question: 'Slovenia', answer: 'Ljubljana'},
    // {question: 'Lithuania', answer: 'Vilnius'},
    // {question: 'Jordan', answer: 'Amman'},
    // {question: 'Latvia', answer: 'Riga'},
    // {question: 'Oman', answer: 'Muscat'},
    // {question: 'Cameroon', answer: 'Yaoundé'},
    // {question: 'Honduras', answer: 'Tegucigalpa'},
    // {question: 'Sudan', answer: 'Khartoum'},
    // {question: 'Bahrain', answer: 'Manama'},
    // {question: 'Democratic Republic of the Congo', answer: 'Kinshasa'},
    // {question: 'El Salvador', answer: 'San Salvador'},
    // {question: 'Zimbabwe', answer: 'Harare'},
    // {question: 'Paraguay', answer: 'Asunción'},
    // {question: 'Uganda', answer: 'Kampala'},
    // {question: 'Estonia', answer: 'Tallinn'},
    // {question: 'Malta', answer: 'Valletta'},
    // {question: 'Cyprus', answer: 'Nicosia'}
  ];
    return (
    <>
      <Navbar />
      <div className="app">
        <h1> &nbsp; </h1>
        <Caroussel flashcards={flashcards2}/>
      </div>
    </>
  );
};

export default App;