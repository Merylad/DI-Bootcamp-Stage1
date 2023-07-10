const largeNumber = 356;

function getTime(){
    const currentDate = new Date();
    const options = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short'
      };
      return currentDate.toLocaleString('en-US', options);
}

module.exports = {
    largeNumber,
    getTime,
}