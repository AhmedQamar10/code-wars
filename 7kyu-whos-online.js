// You have a group chat application, but who is online!?
// You want to show your users which of their friends are online and available to chat!
// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.
// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

const whosOnline = (friends) => {
  let friendList = { online: [], offline: [], away: [] };
  if(friends.length < 1) return {};
  friends.forEach((friend) => {
    if(friend.status === 'online' && friend.lastActivity > 10) friendList.away.push(friend.username);
    else if(friend.status === 'offline') friendList.offline.push(friend.username);
    else if(friend.status === 'online') friendList.online.push(friend.username);
  });
  if(friendList.online.length < 1) delete friendList.online;
  if(friendList.away.length < 1) delete friendList.away;
  return friendList;
};