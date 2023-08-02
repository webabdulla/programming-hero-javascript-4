
const sectionStrose = () =>{
    const input = document.getElementById('input-id');
    const inputId = input.value;

    const value = document.getElementById('value-id');
    const valueId = value.value;

    const student = {
        name: 'abdullah',
        roll : 18,
        class : 10,
        school : 'mithapukur govt school',
    }
    
    sessionStorage.setItem (inputId,valueId,student);

    input.value = "";
    value.value = "";

}