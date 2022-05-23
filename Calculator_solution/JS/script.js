//function to delete only one character
function del(){
    let text_input=document.querySelector('#console').value;
    //delete one character
    let updated_text=text_input.substr(0,text_input.length-1);
    document.querySelector('#console').value=updated_text;
}
const styleSheetLinks=document.querySelectorAll("link");
console.log(styleSheetLinks);
//changing theme based on the value of the theme
function changeTheme(themeValue){
    if(themeValue==1){
        styleSheetLinks[2].setAttribute('href',"");
    }
    else{
        console.log("Reached here");
        styleSheetLinks[2].setAttribute('href',`Styles/theme_${themeValue}.css`);
    }
}