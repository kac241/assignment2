function validateForm() {
	
    var firstName = document.forms["myForm"]["firstname"].value;
    var lastName = document.forms["myForm"]["lastname"].value;
    var message = document.forms["myForm"]["message"].value;
    var subject = document.forms["myForm"]["subject"].value;
    
    var error = false;
    var errorMessage = "";
    
    function hasNumbers(t)
    {
        return /\d/.test(t);
    }
    
 

    
    if(hasNumbers(firstName))
    {
        errorMessage = errorMessage + "Your First Name may not contain numbers\n";
        error = true;
    } 
    else if(firstName == ""){
        errorMessage = errorMessage + "Your First Name cannot be blank\n";
        error = true;
    }
    else if(firstName.length < 2)
    {
        errorMessage = errorMessage + "Your first name must be at least 2 characters long.\n";     
    }
    
    if(hasNumbers(lastName))
    {
        errorMessage = errorMessage + "Your Last Name may not contain numbers\n";
        error = true;
    }
    else if(lastName == ""){
        errorMessage = errorMessage + "Your Last Name cannot be blank\n";
        error = true;
    }
    else if(lastName.length < 2)
    {
    	errorMessage = errorMessage + "Your last name must be at least 2 characters long.\n";        
    }
    
    if(subject == ""){
        errorMessage = errorMessage + "Your Subject cannot be blank\n";
        error = true;
    }
    else if(subject.length < 2)
    {
    	errorMessage = errorMessage + "Your subject line is too short.\n";
    }
    
    if(message == ""){
        errorMessage = errorMessage + "Your Message cannot be blank\n";
        error = true;
    }
    else if(message.length < 2)
    {
    	errorMessage = errorMessage + "Your message is too short!\n";
    }
    
    if(error == true){
    	alert(errorMessage);
    	return false;
    }
    else if(error == false)
    {
    	alert ("Submitted the following: \n\nName: "+firstName+" "+lastName+"\n\nSubject: "+subject+"\n\nMessage: "+message);
    	return true;
    }   
    
    
}