let persons = [
{
  id: 5429,
  first_name: "Columbus",
  last_name: "Lakin",
  username: "columbus.lakin",
  email: "columbus.lakin@email.com",
  avatar: "https://robohash.org/repellendusquisquamofficiis.png?size=300x300&set=set1",
  gender: "Female"
},
{
  id: 3142,
  first_name: "Kristle",
  last_name: "Nienow",
  username: "kristle.nienow",
  email: "kristle.nienow@email.com",
  avatar: "https://robohash.org/repellatesteos.png?size=300x300&set=set1",
  gender: "Female"
},
{
  id: 831,
  first_name: "Sally",
  last_name: "Ondricka",
  "username": "sally.ondricka",
  email: "sally.ondricka@email.com",
  avatar: "https://robohash.org/veniamnatuscumque.png?size=300x300&set=set1",
  gender: "Genderfluid"
}
]

const controller = 
{
    persons: (req, res) => {	
           res.render('index', { data: persons });
      },

      matchById: (req, res) => {	
          const id = req.params.id;
    let matchById = "";
        
          for (let i = 0 ; i < persons.length ; i++ ){
              if ( persons[i].id == id ){
                  matchById = persons[i];
                  break;
              }
          }

          res.render('matchById',{ data : matchById });
      }
}

module.exports = controller;
