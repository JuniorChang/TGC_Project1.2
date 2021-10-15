function homestay(){
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
    if (count <=  4) {
        document.getElementById("stayhome").src="../assets/redcross.jpg";
        console.log('Not Eligible');
    } else {
        document.getElementById("stayhome").src="../assets/greentick.jpg"
        console.log("You are Eligible");
    }
    
    
}
