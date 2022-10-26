const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddies(data))
}
loadBuddies()
const displayBuddies = data => {
   const buddies = data.results;
   const div = document.getElementById("buddies")
   for(const buddy of buddies){
      const p = document.createElement("p");
      console.log(buddy.name);
      // name are set dynamically 
      p.innerText = `name : ${buddy.name.title} ${buddy.name.last} ${buddy.name.first}  email : ${buddy.email}`
      div.appendChild(p);
   }
   // console.log(buddies.results);
}
// console.log("hello ! how are you all ?")