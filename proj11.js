//let xhr = new XMLHttpRequest();
//xhr.open('GET','https://api.scripture.api.bible/v1/bibles', async);

fetch('https://api.bible.berinaniesh.xyz/verses?translation=KJV&book=Ephesians&ch=2&startverse=8&endverse=9',{
})
.then(response => response.json())
//.then(data => console.log(data[0].verse))
.then(data => document.getElementById("verse").innerHTML = ' "' + data[0].verse + ' ' + data[1].verse + '" ' + data[0].book_name + ' ' + data[0].chapter + ':' + data[0].verse_number)
.catch(error => console.error(error));

