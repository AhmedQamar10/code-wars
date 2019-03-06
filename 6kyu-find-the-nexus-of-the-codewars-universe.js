// Complete the method that takes a hash/object/directory/association list of users, and find the nexus: the user whose rank is the closest is equal to his honor. Return the rank of this user. For each user, the key is the rank and the value is the honor.
// If nobody has an exact rank/honor match, return the rank of the user who comes closest.
// If there are several users who come closest, return the one with the lowest rank (numeric value).
// The hash will not necessarily contain consecutive rank numbers; return the best match from the ranks provided.

function nexus(users) {
  let ranks = Object.keys(users).map(r => Number(r));
  let honor = Object.values(users);
  let lowestRank = Math.max(...ranks);
  let lowestVar = Math.max(...honor);

  for(let i = 0; i < ranks.length; i++) {
    if(ranks[i] === honor[i]) return ranks[i];

    let isVarLower = Math.abs(ranks[i] - honor[i]) < lowestVar;
    if(isVarLower) {
      lowestRank = ranks[i];
      lowestVar = Math.abs(ranks[i] - honor[i]);
    }
  }
  return lowestRank;
}