console.log('Hello Node.js!');
// run "node index.js"

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
    console.log('Guest list for ' + this.name)
   
    this.guestList.forEach((guest) => {
    console.log(guest + ' is attending ' + this.name)
    })
    }
   }
   event.printGuestList();

   const users = [{
    name: 'Andrew Mead',
    age: 27
   },{
    name: 'George Hudson',
    age: 72
   },{
    name: 'Clay Klay',
    age: 45
   }]
   const user = users.find((user) => user.name === 'George Hudson')
   console.log(user) // Will print the second object in the array

   const user = {
    name: 'Andrew',
    age: 27,
    location: 'Philadelphia'
   }
   // The line below uses destructuring
   const { age, location:address } = user
   console.log(age)
   console.log(address)