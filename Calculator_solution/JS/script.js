function del(){
    let text_input=document.querySelector('#console').value;
    //delete one character
    let updated_text=text_input.substr(0,text_input.length-1);
    document.querySelector('#console').value=updated_text;
}