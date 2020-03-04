
btnSubmit.onclick=function(){
  let income = inptEnterIncome.value;
  let newIncome = parseInt(income)
  
  if (newIncome < 30000)
      lblHere.value = `With your income of $${newIncome}, you are in a tax bracket of 8%`
    else if (newIncome > 30000 && newIncome < 99999)
      lblHere.value = `With your income of $${newIncome}, you are in a tax bracket of 15%`
    else if (newIncome > 99999)
      lblHere.value = `With your income of $${newIncome}, you are in a tax bracket of 25%`
    else 
        lblHere.value = 'I do not know your income.'
}




btnReset.onclick=function(){
   lblHere.value = 'Let us play again!'
    inptEnterIncome.value = ' '
}
