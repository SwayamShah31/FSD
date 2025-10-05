// Initial vote counts
const votes = {
  JavaScript: 0,
  Python: 0,
  'C++': 0,
  Java: 0
};

// Function called when user votes
function vote(language) {
  votes[language]++;
  updateVotes();
}

// Function to update displayed votes
function updateVotes() {
  document.getElementById('jsVotes').textContent = votes.JavaScript;
  document.getElementById('pyVotes').textContent = votes.Python;
  document.getElementById('cppVotes').textContent = votes['C++'];
  document.getElementById('javaVotes').textContent = votes.Java;
}

// Simulate random real-time votes every 2 seconds
setInterval(() => {
  const keys = Object.keys(votes);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  votes[randomKey]++;
  updateVotes();
}, 2000);
