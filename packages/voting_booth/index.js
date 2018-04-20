function VotingBooth() {
  this.candidates = {};
}

VotingBooth.prototype.castVote = function(candidateName) {
// assumed input always valid candidate, a string
  if(this.candidates[candidateName]) {
    this.candidates[candidateName]++;
  } else {
    this.candidates[candidateName] = 1;
  }
};
// output: none

VotingBooth.prototype.getWinningCandidates = function() {
  const result = [];
  const sortedByVotes = Object.entries(this.candidates).sort((a, b) => b[1] - a[1]);
  for(let tuple of sortedByVotes) {
    if(tuple[1] === sortedByVotes[0][1]) {
      result.push(tuple[0]);
    }
  }

  return result.sort();
};
// output: an array

const votingBooth = new VotingBooth();

votingBooth.castVote('Alice');
votingBooth.castVote('Trudy');
votingBooth.castVote('Trudy');
votingBooth.castVote('Bob');
votingBooth.castVote('Alice');
votingBooth.castVote('Charlie');
votingBooth.castVote('Charlie');
votingBooth.castVote('Dave');

const result = votingBooth.getWinningCandidates();

console.log(JSON.stringify(result));