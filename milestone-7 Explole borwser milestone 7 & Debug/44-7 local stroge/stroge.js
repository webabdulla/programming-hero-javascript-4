let localStore = () =>{
    const input =document.getElementById('input')
    const id = input.value

    const valueInput = document.getElementById('value')
    const value = valueInput.value;

    if(id && value){
    localStorage.setItem(id,value);
}
    input.value = "";
    valueInput.value = "";

}