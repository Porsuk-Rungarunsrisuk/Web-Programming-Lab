function doIt()
{
    // Variables for HTML element DOM references.
    var num1Ref, num2Ref, answerRef; 
    
    // Variables declarations.
    var num1, num2, answer, num3; //add num3
    
    // Get references to DOM elements.
    num1Ref = document.getElementById("num1");
    num2Ref = document.getElementById("num2");
    answerRef = document.getElementById("answer");
    num3Ref = document.getElementById("num3"); //add num3Ref

    // Convert strings to numbers, e.g., "21" to 21.
    num1 = Number(num1Ref.value);
    num2 = Number(num2Ref.value);
    num3 = Number(num3Ref.value); //add num3
    
    // Perform addition operation then assignment operation
    answer = num1 + num2 + num3; 

    // Update "answer" label DOM to show result using "innerText" property. innerText is a property of label tag.
    answerRef.innerText = answer;
    
    if (answer >= 0)
    {
        // Value of answer is positive.
        // Set the class of the answer label to "positive".
        answerRef.className = "positive";
    }
    else
    {
        // Value of answer is not positive, i.e., negative.
        // Set the class of the answer label to "negative".
        answerRef.className = "negative";
    }

    //isEvenOdd
    label = document.getElementById("EvenOdd"); //add label
    if (answer%2 == 0){
        label.innerText = "(Even)";
        label.className = "even";
    }
    else{
        label.innerText = "(Odd)";
        label.className = "odd";
    }

}
// new function for subtraction
function doIt2()
{
    // Variables for HTML element DOM references.
    var num1Ref, num2Ref, answerRef; 
    
    // Variables declarations.
    var num1, num2, answer, num3; //add num3
    
    // Get references to DOM elements.
    num1Ref = document.getElementById("num1s");
    num2Ref = document.getElementById("num2s");
    answerRef = document.getElementById("answer2");
    num3Ref = document.getElementById("num3s"); //add num3Ref

    // Convert strings to numbers, e.g., "21" to 21.
    num1 = Number(num1Ref.value);
    num2 = Number(num2Ref.value);
    num3 = Number(num3Ref.value); //add num3
    
    // Perform addition operation then assignment operation
    answer = num1 - num2 - num3; 

    // Update "answer" label DOM to show result using "innerText" property. innerText is a property of label tag.
    answerRef.innerText = answer;
    
    if (answer >= 0)
    {
        // Value of answer is positive.
        // Set the class of the answer label to "positive".
        answerRef.className = "positive";
    }
    else
    {
        // Value of answer is not positive, i.e., negative.
        // Set the class of the answer label to "negative".
        answerRef.className = "negative";
    }

    //isEvenOdd
    label = document.getElementById("EvenOdd2"); //add label
    if (answer%2 == 0){
        label.innerText = "(Even)";
        label.className = "even";
    }
    else{
        label.innerText = "(Odd)";
        label.className = "odd";
    }

}
    
    
    
