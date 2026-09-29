// Scroll to opportunities
function scrollToOpportunities() {

    document.getElementById("opportunities").scrollIntoView({
        behavior: "smooth"
    });

}


// Scroll to roadmaps
function scrollToRoadmaps() {

    document.getElementById("roadmaps").scrollIntoView({
        behavior: "smooth"
    });

}


// Open a particular opportunity section
function showSection(sectionName) {

    const section = document.getElementById(sectionName);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// Search cards
function searchCards(inputId, cardClass) {

    const input = document.getElementById(inputId);

    const searchText = input.value.toLowerCase();

    const cards = document.getElementsByClassName(cardClass);


    for (let i = 0; i < cards.length; i++) {

        const cardText = cards[i].innerText.toLowerCase();

        if (cardText.includes(searchText)) {

            cards[i].style.display = "block";

        } else {

            cards[i].style.display = "none";

        }

    }

}


// Opportunity button
function viewOpportunity(name) {

    alert(
        name +
        "\n\nThe next version of CareerHub will connect this button to the official opportunity page."
    );

}


// Login button
function showLogin() {

    alert(
        "Student login will be added in the next version. 🔐"
    );

}


// Resume button
function showResumeMessage() {

    alert(
        "Resume builder will be added soon. 📄"
    );

}


// Open GitHub / LinkedIn
function openLink(url) {

    window.open(url, "_blank");

}
