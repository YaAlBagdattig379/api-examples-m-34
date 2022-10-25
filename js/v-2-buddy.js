const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddies(data))
}
loadBuddies()
const displayBuddies = buddies => {
   console.log(buddies);
}
console.log("hello ! how are you all ?")