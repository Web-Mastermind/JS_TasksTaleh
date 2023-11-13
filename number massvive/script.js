let negativeArr = [4, -3, 8, -5, 0, -7, 9, -1];

function numbers(massiv) {
  let negativeNumber = massiv.filter(function(eded) {
    return eded < 0;
  });
  console.log("Negative Numbers:", negativeNumber);
}

numbers(negativeArr);
