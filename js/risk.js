function countrisk(){
    const inputElems = document.getElementsByTagName("input");
    
    
   
    count = 0
    for ( var i =0; i < inputElems.length; i++) {
        var x = inputElems[i]
        if (x.value == 'yes' && (x.checked ) ) {
            count++;
            // console.log(x.value)
        }
    }
    console.log(count)
    if (count <= 2){
        alert('Stay at home');
    } else if (count > 2 && count < 5){
        alert('Please Visit a Clinic');
    } else {
        alert('Please visit a hospital')
    }
    
}
