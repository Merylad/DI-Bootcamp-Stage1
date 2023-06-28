// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)

//Create a method called watch() which displays a string as follows:
//“uploader parameter watched all time parameter of title parameter!”

class Video {
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch(){
        return `${this.uploader} watched all ${this.time} seconds of ${this.title}`;
    };
};

const video1 = new Video ('cat dancing', 'John', '20');
const video2 = new Video ('dog dancing', 'Emma', '30');

console.log(video1.watch());
console.log(video2.watch());

// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)

const arrayVideo = [
    {title: 'monkey climbing', uploader: 'John', time: '10'}, 
    {title: 'baby dancing', uploader: 'Chloe', time: '50'}, 
    {title: 'make up tutorial', uploader: 'Julie', time: '180'},
    {title: 'video game', uploader: 'Marc', time: '300'},
    {title: 'horse race', uploader: 'Daniel', time: '60'}];

let allVideos = []
arrayVideo.forEach(function(element,index){
    allVideos.push( new Video (element.title, element.uploader, element.time));
})

allVideos.forEach((element)=> console.log(element.watch()));






