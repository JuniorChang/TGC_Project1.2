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
        document.getElementById("riskPic").src="../assets/danger_green.jpg";
        console.log('Stay at home');
    } else if (count > 2 && count < 5){
        document.getElementById("riskPic").src="../assets/danger_yellow.jpg";
        console.log('Visit a Clinic');
    } else {
        document.getElementById("riskPic").src="../assets/danger_red.jpg";
        console.log('Visit a hospital');
        alert("Please Visit a hospital!");
    }
    
}
