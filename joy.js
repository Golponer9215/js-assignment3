// Initial list of members
// let adashe = [
//     { name: "Joseph Adams", amount: 1000 }
//   ];
  
//   // Add a new member using push
//   function addMember(name, amount) {
//     adashe.push({ name, amount });
//   }
  
//   // Add members
//   addMember("Gotom Golpwana", 400);
//   addMember("Nenpez Enrit", 400);
//   addMember("Pascal Gontin", 400);
//   addMember("Feduwa Isaac", 400);
//   addMember("Toms Jana", 400);
//   addMember("Tamie Pure", 400);
  
//   console.log("AFTER ADDING NEW MEMBERS", adashe);
  
//   // Convert name to lowercase for consistent comparison
//   function getMember(name) {
//     return adashe.find(member => member.name.toLowerCase() === name.toLowerCase());
//   }
  
//   // Deposit money to a member
//   function deposit(name, amount) {
//     const member = getMember(name);
//     if (member) {
//       member.amount += amount;
//     } else {
//       console.log("Member not found.");
//     }
//   }
  
//   // Perform deposits
//   deposit("Nenpez Enrit", 500);
//   deposit("Gotom Golpwana", 9000);
//   deposit("Tamie Pure", 700);
//   deposit("Pascal Gontin", 600);
  
//   console.log("AFTER DEPOSITING", adashe);
  
//   // Withdraw money from a member
//   function withdraw(name, amount) {
//     const member = getMember(name);
//     if (member) {
//       if (member.amount >= amount) {
//         member.amount -= amount;
//       } else {
//         console.log("Insufficient funds.");
//       }
//     } else {
//       console.log("Member not found.");
//     }
//   }
  
//   // Perform withdrawals
//   withdraw("Gotom Golpwana", 1200);
//   withdraw("Tamie Pure", 500);
//   withdraw("Joseph Adams", 150);
  
//   console.log("AFTER WITHDRAWAL", adashe);
  
//   // Remove a member by using pop (alternative technique)
//   function removeMember(name) {
//     const lowerName = name.toLowerCase();
//     for (let i = adashe.length - 1; i >= 0; i--) {
//       if (adashe[i].name.toLowerCase() === lowerName) {
//         adashe.splice(i, 1); // simulate pop for a specific index
//         break;
//       }
//     }
//   }
  
//   // Remove a member
//   removeMember("Toms Jana");
  
//   console.log("AFTER REMOVING A MEMBER", adashe);
  
//   // Just to show we can get a member
//   const nenpez = getMember("Nenpez Enrit");
//   console.log("GET MEMBER:", nenpez);

  // abject metthods
  // assign
// let user ={name""}




  Object.assign()
  let obj1={name:"test"}
  let obj2={track:"web3"}
  let obj3={mode:"game"}
  
  console.log(Object.assign());
  
