import { render } from 'ejs';
import express from 'express';
const { Express } = express;

const app = express();

app.use(express.json())

//set template engine
app.set("view engine", "ejs")

app.listen(process.env.PORT || 3001, ()=>{
    console.log('run on port 3001')
})

import Parser from 'rss-parser';
const parser = new Parser();

app.get('/', renderSearch)


app.get('/search', searchFeed)
// (async () => {

//   let feed = await parser.parseURL('https://thefactfile.org/feed/');
//   console.log(feed.title);

//   feed.items.forEach(item => {
//     console.log(item.title + ':' + item.link)
//   });

// })();


let items = getItems()

async function getItems(){
    let feed = await parser.parseURL('https://thefactfile.org/feed/');
    let items = feed.items;
    return items
}

async function renderSearch(req, res){
    let feed = await parser.parseURL('https://thefactfile.org/feed/');
    const items = feed.items;

    res.render('pages/index', {
        items,
    })
}

function searchFeed(req,res){
    const title = req.body.title
    res.render('/pages/search',{
        items : getTitle(title)
    })
}

function getTitle(title){
    return items.filter((item => item.title.toLowerCase().includes(title.toLowerCase())))
}