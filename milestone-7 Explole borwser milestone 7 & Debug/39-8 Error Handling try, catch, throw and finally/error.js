function checkAge(){
    const ageField = document.getElementById('inpu');
    const findAge = ageField.value ;
   const errorTag = document.getElementById('error')
    try{

        const age = parseInt(findAge);
        if(isNaN(age)){
            // console.log('age not found',age,findAge);
            throw 'please enter a number'
        }else if(age < 18){
            throw 'baby not alow';
        }
        errorTag.innerHTML = '';
    }
    catch (err){
        console.log('ERROE :' , err);
        errorTag.innerHTML= `Something Wrong`
    }
    
    finally{
        console.log('all done')
    }
    console.log(11111111)
}



