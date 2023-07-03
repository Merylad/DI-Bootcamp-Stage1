// 🌟 Exercise 1 : HTML Form

// ?name=john&comments=hello+how+r+u
// sent to the server via the url

// 🌟 Exercise 2 : HTML Form #2

//the data in sent in the network/payload
// name: john
// comments: hello

// 🌟 Exercise 3 : JSON Mario

const marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  }

  const marioStr = JSON.stringify(marioGame, null, 2);
  console.log(marioStr) //the nested obj is also converted

//   marioStr = {
//     "detail": "An amazing game!",
//     "characters": {
//       "mario": {
//         "description": "Small and jumpy. Likes princesses.",
//         "height": 10,
//         "weight": 3,
//         "speed": 12
//       },
//       "bowser": {
//         "description": "Big and green, Hates princesses.",
//         "height": 16,
//         "weight": 6,
//         "speed": 4
//       },
//       "princessPeach": {
//         "description": "Beautiful princess.",
//         "height": 12,
//         "weight": 2,
//         "speed": 2
//       }
//     }
//   }