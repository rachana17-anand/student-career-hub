// ============================================
// EXPLORE OPPORTUNITIES
// ============================================

function exploreOpportunities() {

    // Scroll to the opportunities section
    const section = document.getElementById("opportunities");

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// ============================================
// OPEN SPECIFIC OPPORTUNITY
// ============================================

function openOpportunities(type) {

    if (type === "internships") {

        alert(
            "🎓 Internships\n\n" +
            "Here you can find internship opportunities " +
            "for engineering students."
        );

    }

    else if (type === "jobs") {

        alert(
            "💼 Jobs\n\n" +
            "Here you can find entry-level engineering jobs."
        );

    }

    else if (type === "learning") {

        alert(
            "📚 Learning\n\n" +
            "Here you can find courses and learning resources."
        );

    }

}


// ============================================
// CAREER PATH
// ============================================

function showCareer(career) {

    alert(
        "🚀 " + career +
        "\n\n" +
        "A complete career roadmap for " +
        career +
        " can be added here."
    );

}


// ============================================
// RESOURCES
// ============================================

function showResource(resource) {

    alert(
        "📚 " + resource +
        "\n\n" +
        "This feature can be connected to a " +
        "dedicated page."
    );

}


// ============================================
// LOGIN
// ============================================

function openLogin() {

    alert(
        "🔐 Student Login\n\n" +
        "Login functionality can be connected " +
        "to Firebase or a backend later."
    );

}
