const allBooks = [
    {
        title : "Harry Potter and the philosopher's stone ",
        author : "JK Rowling",
        image: 'https://m.media-amazon.com/images/I/81m1s4wIPML._AC_UF1000,1000_QL80_.jpg',
        alreadyRead : true

    },
    {
        title : "The seven sisters ",
        author : "Lucinda Riley",
        image: 'https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529003451.jpg',
        alreadyRead : false
    }
]


for (let book of allBooks){
    const section = document.body.firstElementChild;
    const bookDiv = document.createElement('div');
    const title = document.createTextNode('Title:'+ book['title']);
    const author = document.createTextNode('Author: '+book['author']);
    bookDiv.append(title);
    bookDiv.append(author);
    
    const image = document.createElement('img');
    image.setAttribute("src", book['image']);
    image.style.width = "100px";
    image.style.heigth = "300px";
    bookDiv.append (image);


    section.append(bookDiv);

    if (book['alreadyRead'] === true){
        bookDiv.style.color = 'red';
    }

}

