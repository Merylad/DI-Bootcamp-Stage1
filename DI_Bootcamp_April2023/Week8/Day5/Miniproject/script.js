const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

function displayRobot(array){
    const section = document.querySelector('#container');
    section.innerHTML = ''; 

    array.forEach((element)=>{
        
        const div = document.createElement('div');
        div.setAttribute('class', 'divrobot');
        const img = document.createElement('img');
        img.setAttribute('src', element.image);
        img.setAttribute('class', 'robotimg');
        const p1 = document.createElement('p');
        const name = document.createTextNode(element.name);
        p1.setAttribute('class', 'name');
        p1.appendChild(name);
        const p2 = document.createElement('p');
        const mail = document.createTextNode(element.email); 
        p2.setAttribute('class', 'mail')
        p2.appendChild(mail);
        div.appendChild(img);
        div.appendChild(p1);
        div.appendChild(p2);
        section.appendChild(div);
    
})
};

let input = document.querySelector('#inputsearchbar');

input.addEventListener('input', getResults);

let filterArray;

function getResults(event){
    
    filterArray = robots.filter((element)=>element.name.toLowerCase().includes(event.target.value.toLowerCase()) ||element.email.toLowerCase().includes(event.target.value.toLowerCase())  );
    console.log(event.target.value)
    console.log(filterArray);
    displayRobot(filterArray);
}

displayRobot(robots)
