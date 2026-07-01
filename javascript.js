function calculateLove() {

    let yourName = document.getElementById("yourName").value.trim();
    let loverName = document.getElementById("loverName").value.trim();

    if (yourName === "" || loverName === "") {
        alert("Please enter both names.");
        return;
    }

    // Convert to lowercase for comparison
    let name1 = yourName.toLowerCase();
    let name2 = loverName.toLowerCase();

    // Secret Easter Egg ❤️
    if (
        name1 === "sandip" && name2 === "swara" ||
        name1 === "sandeep" && name2 === "swara" ||
        name2 === "sandip" && name1 === "swara" ||
        name2 === "sandeep" && name1 === "swara"
    ) {
        document.getElementById("result").innerHTML =
            `<h1>❤️ 100% ❤️</h1>
             <p>Perfect Match! Destiny has spoken 💖</p>`;
        return;
    }

    // Deterministic Hash
    let combined = (name1 + name2).split("").sort().join("");

    let hash = 0;

    for (let i = 0; i < combined.length; i++) {
        hash += combined.charCodeAt(i) * (i + 1);
    }

    // Percentage between 35 and 99
    let percentage = (hash % 65) + 35;

    let message = "";

    if (percentage >= 95)
        message = "💍 Soulmates!";
    else if (percentage >= 85)
        message = "❤️ Made for Each Other";
    else if (percentage >= 70)
        message = "😍 Strong Connection";
    else if (percentage >= 55)
        message = "🥰 Good Compatibility";
    else if (percentage >= 40)
        message = "😊 Friendship Can Bloom";
    else
        message = "😂 Opposites Attract?";

    document.getElementById("result").innerHTML =
        `<h1>${percentage}% ❤️</h1>
         <p>${message}</p>`;
}