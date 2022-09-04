let files = [];
for(let i=1;i<=195;i++)
{
  let imageNumber='';
  if(i<10)
  {
     imageNumber='000'+i;
  }
  else if(i>=10 && i<100) 
  {
     imageNumber='00'+i;
  }
  else if(i>=100) 
  {
     imageNumber='0'+i;
  }
  
  let SourceImage=imageNumber+".jpg";
  files.push(SourceImage);
}
function mouseHandler(event) {
    let image = document.getElementById('image');
    let srcName = image.src.split('/');
    srcName = srcName[srcName.length - 1];
    let foundedIndex = files.indexOf(srcName);
    if (event.deltaY < 0) {
        if (foundedIndex !== -1) {
            foundedIndex--;
            foundedIndex = foundedIndex === -1 ? (files.length - 1) : foundedIndex;
        } else {
            alert("Index not found");
        }
    } else {
        if (foundedIndex !== -1) {
            foundedIndex++;
            foundedIndex = foundedIndex === (files.length - 1) ? 0 : foundedIndex;
        } else {
            alert("Index not found");
        }
    }
    localStorage.setItem("photoIndex", foundedIndex.toString());
    image.src = "images/" + files[foundedIndex];
    document.querySelector('h1 span').innerHTML=foundedIndex;
}

function checkLocalStorage() {
    let image = document.getElementById('image');
    let photoIndex = parseInt(localStorage.getItem("photoIndex"));
    if (Number.isInteger(photoIndex) &&
        photoIndex >= 0 &&
        photoIndex < files.length) {
        image.src = "images/" + files[photoIndex];
        document.querySelector('h1 span').innerHTML=photoIndex;
    } else {
        image.src = "images/" + files[0];
        document.querySelector('h1 span').innerHTML=1;
    }
}


document.onwheel = mouseHandler;

window.onload = checkLocalStorage;