document.addEventListener("DOMContentLoaded", () => {
  const subjects = [
    { name: "Object Oriented Software Engineering", code: "CCS356" },
    { name: "Introduction to Industrial Engineering", code: "OIE351" },
    { name: "Data Warehousing", code: "CCS341" },
    { name: "Network Security", code: "CCS354" },
    { name: "Multimedia and Animation", code: "CCS352" },
    { name: "3D Printing and Design", code: "CCS331" },
    { name: "Mobile Application Development Lab", code: "IT3681" },
  ];

  const cardContainer = document.getElementById("subject-cards");
  const searchInput = document.getElementById("search");

  function displaySubjects(filter = "") {
    cardContainer.innerHTML = ""; // Clear previous cards
    const filteredSubjects = subjects.filter(
      (subject) =>
        subject.name.toLowerCase().includes(filter.toLowerCase()) ||
        subject.code.toLowerCase().includes(filter.toLowerCase())
    );

    filteredSubjects.forEach((subject) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h2>${subject.name}</h2>
        <p>Code: ${subject.code}</p>
        <button onclick="redirectToSubject('${subject.code}')">View Resources</button>
      `;
      cardContainer.appendChild(card);
    });
  }

  // Function to redirect to a specific subject page
  window.redirectToSubject = (code) => {
    window.location.href = `subject.html?code=${code}`;
  };

  // Filter subjects on search
  searchInput.addEventListener("input", (e) => displaySubjects(e.target.value));

  // Initial Display
  displaySubjects();
});
