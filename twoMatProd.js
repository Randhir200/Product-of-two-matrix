let mat1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let mat2 = [
  [2, 0],
  [1, 2]
];
let [r1, c1, r2, c2] = [mat1.length, mat1[0].length, mat2.length, mat2[0].length];
let newMat = Array.from({length:r1}, ()=>new Array(c2).fill(0)); 
console.log(twoMatrixProd(newMat))
function twoMatrixProd(newMat){
  if(c1!==r2)return 'Multiplication is not possible'
  for(let a=0;a<r1;a++){
    let count = 0
      for(let i=0;i<c2;i++){//0 1
        let sum=0  
        for(let j=0;j<r2;j++){//012, 012
              sum += mat1[a][j]*mat2[j][i]// 0-012 * 012*0
            }
          newMat[a][count] = sum //00, 01 | 10, 11 | 20, 21
          count++
        }
    }
  return newMat
}  