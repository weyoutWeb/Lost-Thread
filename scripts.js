document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript Loaded!");

  // 🔍 SEARCH SYSTEM
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  const searchResults = document.getElementById("search-results");

  // List of searchable content (Logs, Threads, Users)
// List of searchable content (Logs, Threads, Users, and Hidden Pages)
const searchableItems = [
  // 🔹 Standard Logs
  { name: "Log #001 - Has Anyone Actually Crossed Over?", link: "log-001-crossing-over.html" },
  { name: "Log #002 - The Mannequins Move", link: "log-002-mannequins-move.html" },
  { name: "Log #003 - Rituals That Work?", link: "log-003-rituals-that-work.html" },
  { name: "Log #004 - Exit 1313 - It’s Gone Again", link: "log-004-exit-1313-gone-again.html" },
  { name: "Log #005 - Handoff Ritual", link: "log-005-handoff-ritual-page1.html" },
  { name: "Log #006 - Handoff Variance", link: "log-006-handoff-variance.html" },
  { name: "Log #007 - Missing Archives", link: "log-007-missing-archives.html" },
  { name: "Log #008 - Bastion's Final Message", link: "log-008-bastion-final-message.html" },
  { name: "Log #009 - Bastion's Dream Message", link: "log-009-bastion-dream-message-page1.html" },
  { name: "Log #010 - Bastion's Hidden Clue", link: "log-010-bastion-hidden-clue-page1.html" },
  { name: "Log #011 - Bastion's Scheduled Message", link: "log-011-bastion-scheduled-message.html" },
  { name: "Log #012 - The Vanishing Post", link: "log-012-the-vanishing-post.html" },
  { name: "Log #013 - Dreamed of a Place", link: "log-013-dreamed-of-a-place.html" },
  { name: "Log #014 - Whispering Signal", link: "log-014-whispering-signal.html" },
  { name: "Log #015 - Forgotten Text", link: "log-015-forgotten-text.html" },
  { name: "Log #016 - Mid-Ritual Abandonment", link: "log-016-mid-ritual-abandonment-page1.html" },
  { name: "Log #017 - Weird Road Missing", link: "log-017-weird-road-missing.html" },
  { name: "Log #018 - Deleted User Messages", link: "log-018-deleted-user-messages.html" },
  { name: "Log #019 - The Vanishing Post", link: "log-019-the-vanishing-post.html" },
  { name: "Log #020 - Where did Exit 1313 go?", link: "log-020-exit-1313-page1.html" },
  { name: "Log #021 - [404 ERROR] User Does Not Exist", link: "log-21[404 ERROR]-User-does-not-exist.html" },

  // 🔹 Users
  { name: "User - Vesper", link: "vesper.html" },
  { name: "User - Bastion", link: "bastion.html" },
  { name: "User - Wonderkid17", link: "wonderkid17.html" },
  { name: "User - Looking-Lady", link: "lookinglady.html" },

  // 🔹 Unanswered Threads
  { name: "Thread - Where did Exit 1313 go?", link: "thread.html" },
  { name: "Thread - Erased messages still appearing?", link: "thread.html" },

  // ✅ Hidden Page for Rue.exe
  { name: "Rue.exe", link: "rue.exe.html" }
  
];

function performSearch(event) {
  const query = searchInput.value.toLowerCase().trim();
  searchResults.innerHTML = ""; // Clear previous results

  console.log("🔍 Searching for:", query); // Debugging Log

  if (query === "") {
      searchResults.style.display = "none";
      return;
  }

  // Filter matching items (excluding Rue.exe from results)
  const matches = searchableItems.filter(item => 
      item.name.toLowerCase().includes(query) && item.name !== "rue.exe"
  );

  if (matches.length > 0) {
      searchResults.style.display = "block";
      matches.forEach(match => {
          const resultItem = document.createElement("div");
          resultItem.classList.add("search-result-item");
          resultItem.innerHTML = `<a href="${match.link}">${match.name}</a>`;
          searchResults.appendChild(resultItem);
      });
  } else {
      searchResults.style.display = "block";
      searchResults.innerHTML = "<p>No results found.</p>";
  }

  // ✅ If user presses "Enter" and searches "Rue.exe", redirect instantly
  if (event && event.key === "Enter" && query === "rue.exe") {
      console.log("🚀 Redirecting to Rue.exe...");
      window.location.href = "rue.exe.html";
  }
}

// Attach search listeners
searchButton.addEventListener("click", performSearch);
searchInput.addEventListener("keyup", performSearch);

// Allow "Enter" key to trigger search (and Rue.exe redirect)
searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
      performSearch(event);
  }
});

  // 🔐 LOGIN SYSTEM
  const accounts = {
      "Vesper": "Hawthorne",
      "Bastion": "Rebecca",
      "Alice": "Wonderland"
  };

  function handleLogin(event) {
      event.preventDefault();

      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();

      console.log("Username entered:", username);
      console.log("Password entered:", password);

      if (accounts[username] && accounts[username] === password) {
          alert("Login successful!");
          window.location.href = "account.html";
      } else {
          alert("Invalid username or password. Please try again.");
      }
  }

  // 🗨️ COMMENT REPLY SYSTEM
  document.querySelectorAll(".reply-button").forEach(button => {
      button.addEventListener("click", function () {
          let commentID = this.getAttribute("data-comment");
          let replyBox = document.createElement("div");
          replyBox.classList.add("comment", "reply");
          replyBox.innerHTML = `
              <img src="avatars/anonymous.png" class="avatar">
              <div class="comment-text">
                  <span class="username">🔺 Anonymous:</span> <span class="timestamp">Just now</span>
                  <p>${prompt("Enter your reply:")}</p>
              </div>`;
          document.getElementById(commentID).after(replyBox);
      });
  });

  // ⏬ SHOW MORE REPLIES FUNCTION
  document.querySelectorAll(".show-replies").forEach(button => {
      button.addEventListener("click", function () {
          const replies = this.previousElementSibling;
          if (replies.classList.contains("hidden")) {
              replies.classList.remove("hidden");
              this.textContent = "Show Less Replies";
          } else {
              replies.classList.add("hidden");
              this.textContent = "Show More Replies";
          }
      });
  });

  console.log("All functions loaded successfully.");
});document.addEventListener("DOMContentLoaded", function () {
  let visitCount = localStorage.getItem("rueVisit") || 0;
  visitCount++;
  localStorage.setItem("rueVisit", visitCount);

  // Infinite scrolling effect
  function addInfiniteText() {
      const container = document.querySelector(".infinite-text");
      for (let i = 0; i < 50; i++) {
          let newText = document.createElement("p");
          newText.classList.add("glitch-text");
          newText.innerText = `"Must I show you again?"`;
          container.appendChild(newText);
      }
  }
  addInfiniteText();

  // Highlight text changes
  document.body.addEventListener("mouseup", function () {
      const selectedText = window.getSelection().toString();
      if (selectedText) {
          const glitchMessages = [
              "You weren’t supposed to come back.",
              "She remembers.",
              "Look behind you.",
              "This is not the first time."
          ];
          let randomGlitch = glitchMessages[Math.floor(Math.random() * glitchMessages.length)];
          alert(randomGlitch); // Display a quick glitch message
      }
  });

  // Whispering sound effect after 33 seconds
  setTimeout(() => {
      let audio = new Audio("whisper.mp3"); // Ensure you have a file named whisper.mp3
      audio.volume = 0.3;
      audio.play();
  }, 33000);

  // Auto-refresh after 66 seconds with new text
  setTimeout(() => {
      localStorage.setItem("rueRefresh", "true");
      location.reload();
  }, 66000);

  // After refresh, add new text
  if (localStorage.getItem("rueRefresh") === "true") {
      let newLine = document.createElement("p");
      newLine.classList.add("glitch-text");
      newLine.innerText = `"Defying odds as always."`;
      document.querySelector(".infinite-text").appendChild(newLine);
      localStorage.removeItem("rueRefresh");
  }

  // After 3 visits, show access log prompt
  if (visitCount >= 3) {
      setTimeout(() => {
          let choice = prompt("[ACCESS LOGS?] (Y/N)").toUpperCase();
          if (choice === "Y") {
              document.body.innerHTML = "<h1>[DATA CORRUPTED] YOU WERE NOT MEANT TO SEE THIS.</h1>";
          } else if (choice === "N") {
              alert("More distortions appear.");
              let newDistortion = document.createElement("p");
              newDistortion.classList.add("glitch-text");
              newDistortion.innerText = `"Try again. Try again. Try again."`;
              document.querySelector(".infinite-text").appendChild(newDistortion);
          }
      }, 5000);
  }
});function performSearch() {
  const query = searchInput.value.toLowerCase().trim();
  searchResults.innerHTML = ""; // Clear previous results

  if (query === "") {
      searchResults.style.display = "none";
      return;
  }

  console.log("🔍 Searching for:", query); // Debugging log

  // Filter matching items
  const matches = searchableItems.filter(item => item.name.toLowerCase().includes(query));

  if (matches.length > 0) {
      searchResults.style.display = "block";  // ✅ Ensure it's visible

      matches.forEach(match => {
          const resultItem = document.createElement("div");
          resultItem.classList.add("search-result-item");
          resultItem.innerHTML = `<a href="${match.link}">${match.name}</a>`;
          searchResults.appendChild(resultItem);
      });

      // 🔥 If user searches "Rue.exe", redirect instantly
      if (query === "rue.exe") {
          console.log("Redirecting to Rue.exe...");
          window.location.href = "rue.exe.html";
      }
  } else {
      searchResults.style.display = "block"; // ✅ Ensure no results message is visible
      searchResults.innerHTML = "<p>No results found.</p>";
  }
}document.addEventListener("DOMContentLoaded", function () {
  console.log("Rue.exe Loaded...");

  let visitCount = localStorage.getItem("rueVisit") || 0;
  visitCount++;
  localStorage.setItem("rueVisit", visitCount);

  // ✅ Infinite Scrolling
  function addInfiniteText() {
      const container = document.querySelector(".infinite-text");
      for (let i = 0; i < 50; i++) {
          let newText = document.createElement("p");
          newText.classList.add("glitch-text");
          newText.innerText = `"Must I show you again?"`;
          container.appendChild(newText);
      }
  }
  addInfiniteText();

  // ✅ Text Highlight Glitch Effect
  document.body.addEventListener("mouseup", function () {
      const selectedText = window.getSelection().toString();
      if (selectedText) {
          const glitchMessages = [
              "You weren’t supposed to come back.",
              "She remembers.",
              "Look behind you.",
              "This is not the first time."
          ];
          let randomGlitch = glitchMessages[Math.floor(Math.random() * glitchMessages.length)];
          console.log("Glitch effect triggered:", randomGlitch);
          alert(randomGlitch);
      }
  });

  // ✅ Whispering Sound After 33 Seconds
  setTimeout(() => {
      let audio = new Audio("whisper.mp3");
      audio.volume = 0.3;
      audio.play();
  }, 33000);

  // ✅ Auto-Refresh After 66 Seconds
  setTimeout(() => {
      localStorage.setItem("rueRefresh", "true");
      location.reload();
  }, 66000);

  // ✅ Add New Text on Refresh
  if (localStorage.getItem("rueRefresh") === "true") {
      let newLine = document.createElement("p");
      newLine.classList.add("glitch-text");
      newLine.innerText = `"Defying odds as always."`;
      document.querySelector(".infinite-text").appendChild(newLine);
      localStorage.removeItem("rueRefresh");
  }

  // ✅ After 3 Visits, Show Access Log Prompt
  if (visitCount >= 3) {
      setTimeout(() => {
          let choice = prompt("[ACCESS LOGS?] (Y/N)").toUpperCase();
          if (choice === "Y") {
              document.body.innerHTML = "<h1>[DATA CORRUPTED] YOU WERE NOT MEANT TO SEE THIS.</h1>";
          } else if (choice === "N") {
              alert("More distortions appear.");
              let newDistortion = document.createElement("p");
              newDistortion.classList.add("glitch-text");
              newDistortion.innerText = `"Try again. Try again. Try again."`;
              document.querySelector(".infinite-text").appendChild(newDistortion);
          }
      }, 5000);
  }
});if (query === "rue.exe") {
  window.location.href = "/rue.exe.html"; // Make sure this file exists in the right place
}document.addEventListener("DOMContentLoaded", function () {
    console.log("User profile script loaded.");

    // Simulating 'glitched' last seen timestamps
    const lastSeenElement = document.getElementById("last-seen");
    const lastSeenGlitches = [
        "2 days ago",
        "Last month",
        "Unknown",
        "Never",
        "Loading..."
    ];

    let currentIndex = 0;
    setInterval(() => {
        lastSeenElement.textContent = lastSeenGlitches[currentIndex];
        currentIndex = (currentIndex + 1) % lastSeenGlitches.length;
    }, 5000);

    // Reveal hidden message when user hovers over bio
    document.getElementById("user-bio").addEventListener("mouseover", function () {
        document.getElementById("hidden-message").style.display = "block";
    });
});document.addEventListener("DOMContentLoaded", function() {
    const glitchElements = document.querySelectorAll(".glitch-effect");

    function randomGlitchToggle() {
        glitchElements.forEach(el => {
            if (Math.random() > 0.5) {
                el.classList.add("glitch-effect");
            } else {
                el.classList.remove("glitch-effect");
            }
        });
    }

    setInterval(randomGlitchToggle, Math.random() * (5000 - 2000) + 2000); // Every 2-5 seconds
});
setTimeout(() => {
    let comment = document.createElement("div");
    comment.classList.add("forum-comment");
    
    // Create LostTransmission message
    let message = document.createElement("p");
    message.innerHTML = `<strong>LostTransmission:</strong> "She said too much."`;
    
    // Create secret message container
    let secretMessage = document.createElement("p");
    secretMessage.classList.add("secret-glitch-text");
    
    comment.appendChild(message);
    comment.appendChild(secretMessage);
    document.body.appendChild(comment);

    // Secret message reveal effect
    let hiddenText = "wafsA euR"; // "Rue Asfaw" backward
    let displayedText = "";
    let index = 0;

    function revealText() {
        if (index < hiddenText.length) {
            let randomGlitchChar = ["#", "@", "%", "&", "?", "!", "~", "╳", "∆"][Math.floor(Math.random() * 8)];
            displayedText += Math.random() > 0.5 ? hiddenText[index] : randomGlitchChar; // 50% chance to glitch
            secretMessage.innerText = displayedText;

            index++;
            setTimeout(revealText, Math.random() * (250 - 100) + 100); // Random delay between 100ms - 250ms
        } else {
            secretMessage.innerText = hiddenText; // Set final text
        }
    }

    setTimeout(revealText, 2000); // Delay the reveal by 2 seconds
}, 10000); // Appears after 10 seconds