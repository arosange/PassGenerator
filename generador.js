document.getElementById("generate-btn").addEventListener("click", function(){


    const inputValue= document.getElementById("length").value;

    let password="";
    for (var i = 0; i < inputValue; i++) {
        let number= Math.random();
        number=Math.floor(number*10);
    
        let letters= ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
        let lettersIndex= Math.floor(Math.random() * letters.length);
        
        let upperCaseLetter= letters[lettersIndex].toUpperCase();
    
        let specialCharacters=[ ".", ",", "!", "?", ";", ":", "'", "\"", "(", ")", "[", "]", "{", "}", "-", "–", "—", "§"];
        let charactersIndex= Math.floor(Math.random() * specialCharacters.length);
        
    
        let all= [number,letters[lettersIndex],upperCaseLetter,specialCharacters[charactersIndex]];
        //console.log(all);
        let allIndex= Math.floor(Math.random() * all.length);
        //console.log(all[allIndex]);
      

      if (i>3) {
        password=password+all[allIndex];
      }
      else{
        password=password+all[i];
      }
           
      }
      password=password.split('').sort(() => Math.random() - 0.5).join('');



      var passwordBox = document.getElementById("input-container");

     
      var existingInput = passwordBox.querySelector('input');
      if (existingInput) {
          passwordBox.removeChild(existingInput);
      }
      
  
      var input = document.createElement("input");
      input.value = password; 
      console.log(input.value);
      
      
      passwordBox.appendChild(input);
    
      input.readOnly = true; 
      input.focus();

});





/*Necesito que al tocar el boton segun la cantidad de letras seleccionas me genere con todas las variables una palabra 

1. saber la cantidad de caracteres !
2. formar la palabra !
3. debe ser caracteres random!
4.contener todos los caracteres  

  <input type="text" id="password" readonly>
*/

/*
document.getElementById("generate-btn").addEventListener("click", function(){
  

    const inputValue= document.getElementById("length").value;

    let password="";
    for (var i = 0; i < inputValue; i++) {
        let number= Math.random();
        number=Math.floor(number*10);
    
        let letters= ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
        let lettersIndex= Math.floor(Math.random() * letters.length);
        
        let upperCaseLetter= letters[lettersIndex].toUpperCase();
    
        let specialCharacters=[ ".", ",", "!", "?", ";", ":", "'", "\"", "(", ")", "[", "]", "{", "}", "-", "–", "—", "§"];
        let charactersIndex= Math.floor(Math.random() * specialCharacters.length);
        
    
        let all= [number,letters[lettersIndex],upperCaseLetter,specialCharacters[charactersIndex]];
        //console.log(all);
        let allIndex= Math.floor(Math.random() * all.length);
        //console.log(all[allIndex]);
      

      if (i>3) {
        password=password+all[allIndex];
      }
      else{
        password=password+all[i];
      }
           
      }
      password=password.split('').sort(() => Math.random() - 0.5).join('');



      let passwordBox= document.getElementById("input-container");
      let input=document.createElement("input");
     

      input.value=password;
    
      passwordBox.appendChild(input);

      



}); */




