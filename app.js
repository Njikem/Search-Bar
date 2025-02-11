

let availableKeyWords = [

  'HTM',
  'CSS',
  'Easy Tutorials',
  'Web design toturials',
  'JavaScript',
  'Where to learn coding online',
  'Where to learn web design',
  'How to create a website',
];


const resultsBox = document.querySelector('.result-box');

const inputBox = document.getElementById('input-box');

//onkeyup means when you start typing on the search bar this function will be executed

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;

    if(input.length){
        result = availableKeyWords.filter((Keyword) => {
           return Keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result)
    }
     
    display(result);
    

    //if you start typing and there is no suggested key word.  The horizontal line will hide. 
    //This is to hide word when typing on the search bar and nothing pop up
    if(!result.length){
        resultsBox.innerHTML = '';
    }

}


function display(result){
    //Result is an array that contain search key words.
    //map will get each data from the array

    const content = result.map((list) =>{
        //li onclick=selectInput(this). This is use to select only what you are looking for
        return "<li onclick=selectInput(this)>"  + list + "</li>";
    });

    //display the content on the page
    //.join('') is use to remove the comma from the search list
    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}


//This function is use to select only what you are looking for.
function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}





