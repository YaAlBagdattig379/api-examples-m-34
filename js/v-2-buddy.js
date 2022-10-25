const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddies(data))
}
loadBuddies()
const displayBuddies = data => {
   const buddies = data.results;
   for(const buddy of buddies){
      console.log(buddy.email);
   }
//    console.log(data.results);
}
console.log("hello ! how are you all ?")