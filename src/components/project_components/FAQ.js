import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion'


export default function() {
    return(
    <div>
<Accordion className="faq-wrapper">
    <AccordionTab header="What's this site about?">
        <p className="accordion-item">
             <p>The site lets you to use, create, edit and delete random generators and its aim is to help roleplayers and writers with their stories, giving them ideas. The program will pick a random item among the available data. For example, let's say that you have a generator that contains color names: blue, red, green, yellow, black, white, pink and orange. The program automatically picks one value randomly from that list (click the Roll! button to pick a value, or just refresh the page) and whenever you refresh the page another random result is chosen. Everyone can use a generator, even if you're unlogged, but you'll need to be logged in to create and manage your own generators.</p>
            <img src="https://i.postimg.cc/LsCXRKJP/homepage.jpg" alt="Homepage. Below the filters there are individual links that point to the generators"></img>
        </p>
    </AccordionTab>
                
    <AccordionTab header="How do I access a generator?">
        <p className="accordion-item">
            There are several ways to access to a generator in particular. You can search for them, filter them by category by clicking in one of the buttons that are in the middle of the screen, or just click on one of the links below the filters (the row of blue buttons with icons that's in the middle of the screen).
        </p>
    </AccordionTab>
                
    <AccordionTab header="How do I search for items?">
        <p className="accordion-item">
            Just start typing in the search bar and the found coincidences will appear. Click on a result and you'll be redirected to its page. If no results are found you'll be offered the chance of creating a new generator.
            <img src="https://i.postimg.cc/NjY476rb/search.png" alt="Search bar with found results"></img>
            <img src="https://i.postimg.cc/MK15QPXv/resultnotfound.png" alt="Search bar with result not found message"></img>
        </p>
    </AccordionTab>
                
    <AccordionTab header="What does each category mean?">
        <p className="accordion-item">
            <ul>
                    <li>Characters: Contains generators to generate characters. Here you can find tables related to character gender, class, race, hair and eye color, type of hairstyle... even family, number of siblings, personality, background and more. Creatures and animals would fit in this category too. </li>

                    <br></br>

                    <li>Objects: Weapons, armor, enchanted items, healing potions, food and drink, vehicles, spellbooks... all kinds of objects can be found here. This way, you'll know what a character eats, or what's available in a certain store, or what's the loot a character found after winning a tough combat, among others.</li>

                    <br></br>

                    <li>Quests: What's a TTRPG session without an adventure? A novel without a plot? Nothing. Here you can find adventure seeds and plot ideas. When did that event happen? What's the genre of the story? What do the characters have to get for their mysterious patron? If they have to find and object, you could dive in the Objects category and roll in to fin that the object is a treasure. What kind of treasure? A painting, and so on. If the story is science-fiction themed you might want to go to the World tab to keep developing that idea of yours to know what planet did the characters find...</li>

                    <br></br>

                    <li>Skills: What special abilities does your character have? Can they summon a dragon? Use magic spells? Throw fireballs? The Skills tab can show that and more! Spells, gifts from a deity or even ancient techniques of combat find their home here.</li>

                    <br></br>

                    <li>World: Could be the homeland of the characters, or an unexplored planet. Mountains, deserts, forests... all those can be found here. This category allows you to shape the world. How many continents there are? Are there floating islands? What about the government? What's the size of that settlement? You can answer these and many more questions, including everything related to dungeons and even traps.</li>

                    <br></br>

                    <li>Other: Anything that doesn't belong to any of the previous categories. This category can have whatever you want: Colors? Fine. Months of the year? Okay. Heraldic emblems? No problem. A syllable structure generator for a fantasy language? Great. An improvised dice roller with the dice values in (you have to add the modifiers separately!)? Done! Your imagination is the limit with this category!</li>

                    <br></br>

                    <li>Filter All: Resets the filters and allows you to click another category button.</li>
                </ul>
        </p>
    </AccordionTab>
                

    <AccordionTab header="How do I create a generator?">
        <p className="accordion-item">
            You need to be logged in to create a generator. After logging in, you'll see that a couple of new links have appeared at the top of the page. Click on the Create page and choose a name and a category for the generator and enter the values separated by commas (,). Click the Save Generator button. Now it will appear in the homepage, as well as in this Create page.
             <img src="https://i.postimg.cc/6QpfFBcv/create.png" alt="Creation Page"></img>
        </p>
    </AccordionTab>
                
    <AccordionTab header="How do I modify my generator?">
        <p className="accordion-item">
            Log in and go to the Create page. Below the creation form you'll find all the generators. Click on the edit button of the generator you want to modify and scroll up to the form, you'll see that it's filled with that generator's data. Make any changes you need, click save and it's done!
            <img src="https://i.postimg.cc/dVB9Wh2F/edit.png" alt="Form with populated data"></img>
        </p>
    </AccordionTab>
                
    <AccordionTab header="How do I delete my generator?">
        <p className="accordion-item">
            Log in and go to the Create page. Below the creation form you'll find all the generators. Click on the delete button of the generator you want to delete and it will disappear.
        </p>
    </AccordionTab>
                
    <AccordionTab header="How do I log out?">
        <p className="accordion-item">
            Refresh the page.
        </p>
    </AccordionTab>
</Accordion>
    </div>
);
}