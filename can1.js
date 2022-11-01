
var getvalue=document.getElementsByName('vegItem',)[0];
getvalue.addEventListener('input', function(){
    document.getElementById("vegItem").innerHTML="Your order is- "+this.value;
});
    var getvalue=document.getElementsByName('vegqty',)[0];
getvalue.addEventListener('input', function(){
    document.getElementById("vegqty").innerHTML="quantity- "+this.value;
});
  
var getvalue=document.getElementsByName('nonItem',)[0];
getvalue.addEventListener('input', function(){
    document.getElementById("nonItem").innerHTML="Your order is- "+this.value;
});
    var getvalue=document.getElementsByName('nonqty',)[0];
getvalue.addEventListener('input', function(){
    document.getElementById("nonqty").innerHTML="quantity- "+this.value;
});
  


let pincodes = [1011,1010,1100];
    let pincodeBtn = document.querySelector(".pincode-ckeckr-btn");
    
    pincodeBtn.addEventListener("click", checkpincode);
    
    function checkpincode(){
        let msg = document.querySelector(".msg");
        let pincodeValue = document.querySelector(".pincode").value;
        let value = Number(pincodeValue)
       

           if(pincodes.includes(value)){
            document.querySelector(".pincode-ckeckr-btn").disabled = false;
               let html;
               html = `<h3> valid </h3>`;
               msg.innerHTML = html;
              
               
           }
    else{
        document.querySelector(".pincode-ckeckr-btn").disabled = true;
        let html;
        html = `<h3>InValid</h3>`;
        msg.innerHTML=html;
      
    }

    }
    



