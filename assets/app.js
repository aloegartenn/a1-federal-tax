let sum = +prompt(`Сумма доходов в год`);
sum = sum - 12550;
let tax;
if(sum <= 9950){
     tax = sum * 0.1;
}

else if(sum > 9950 && sum <= 40525){
    tax = 9950 * 0.1 + ((sum - 9950) * 0.12);
}

else if(sum > 40525 && sum <= 86375){
    tax = 9950 * 0.1 + ((sum - 9950) * 0.12) + ((sum-40525) * 0.22);
}

else if(sum > 86375 && sum <= 164925){
    tax = 9950 * 0.1 + ((sum - 9950) * 0.12) + ((sum-40525) * 0.22) + ((sum - 86375 ) * 0.24);
}

else if(sum > 164925 && sum <= 209425){
    tax = 9950 * 0.1 + ((sum - 9950) * 0.12) + ((sum-40525) * 0.22) + ((sum - 86375 ) * 0.24) + ((sum - 164925) * 0.32);
}

else if(sum > 209425 && sum <= 523600){
    tax = 9950 * 0.1 + ((sum - 9950) * 0.12) + ((sum-40525) * 0.22) + ((sum - 86375 ) * 0.24) + ((sum - 164925) * 0.32) + ((sum - 209425) * 0.35);
}
else if (sum > 523600){
    tax = 9950 * 0.1 + ((sum - 9950) * 0.12) + ((sum-40525) * 0.22) ((sum - 86375 ) * 0.24) + ((sum - 164925) * 0.32) + ((sum - 209425) * 0.35) + ((sum - 523600) * 0.37);
}

let results = sum - tax;
results = Math.round(results);
tax = Math.round(tax);
console.log(`сумма налогов${tax}, чистый доход${results}`)

