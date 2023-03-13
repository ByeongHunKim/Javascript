// before - normal function
let calculateVolume = function(a,b,c){
    let volume = a * b * c;
    return volume;
}

let result = calculateVolume(1,2,3);
console.log('result',result)

// after - arrow function
let calculateVolumeV2 = (a,b,c) => {
    let volume = a * b * c;
    return volume;
}

let resultV2 = calculateVolumeV2(1,2,3);
console.log('resultV2',resultV2);

// 기타 - 구문이 하나일 경우
let calculateVolumeV3 = (a,b,c) => a*b*c;

// 기타 - parameter가 하나인 경우
let calulate = value => value + 10
