let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
  button.addEventListener('click', (e) => {
    let btnVal = button.dataset.val;
    try {
      if (btnVal == '=') {
        if(string === "") return;
        string = String(eval(string));
        input.value = string;
      } 
      else if (btnVal == 'AC') {
        string = "";
        input.value = string;
      } 
      else if (btnVal == 'DE') {
        string = string.toString().substring(0, string.length - 1);
        input.value = string;
      } 
      else {
        string += btnVal;
        input.value = string;
      }
    } catch (err) {
      input.value = "Error";
      string = "";
    }
  });
});
