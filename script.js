// Scroll to Opportunities section
function scrollToOpportunities() {
    const section = document.getElementById("opportunities");

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// Scroll to Roadmaps section
function scrollToRoadmaps() {
    const section = document.getElementById("roadmaps");

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
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

    if (!input) return;

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
        "\n\nOfficial opportunity links will be added soon."
    );
}


// Login button
function showLogin() {
    alert("Student login will be added soon. 🔐");
}


// Resume button
function showResumeMessage() {
    alert("Resume builder will be added soon. 📄");
}


// Open external link
function openLink(url) {
    window.open(url, "_blank");
}


// EXPLORE BUTTON
function exploreCareerHub() {
    const section = document.getElementById("opportunities");

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    } else {
        alert("Opportunities section not found.");
    }
}
