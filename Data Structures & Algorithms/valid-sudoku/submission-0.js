class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i<board.length; i++){
            let hash = {};
        for (let j = 0; j<board.length; j++){
            let val = board[i][j]
            if(val == '.'){
                continue;
            }
            else{
                if (!hash[val]){
                    hash[val] = true
                }
                else{
                    return false
                }
            
            }
            
        }
}

    for(let i = 0; i< board.length; i++){
        let hash = {};
        for (let j = 0; j < board.length; j++ ){
            let val = board[j][i];
            if ( val == '.'){
                continue
            }
            else{
               if(!hash[val]){
                   hash[val] = true;
               }
               else{
                   return false
               }
            }
        }
    }
    
    for (let blockrow = 0; blockrow< 3; blockrow++){
        for (let blockcol = 0 ; blockcol<3; blockcol++){
            let hash = {};
            for (let r = 0; r < 3; r++){
                for (let c = 0; c < 3; c++){
                    let val = board[blockrow * 3 + r][blockcol * 3 + c]
                    
                    if(val == '.'){
                        continue;
                    }
                    else{
                        if (!hash[val]) {
                            hash[val] = true;
                        }
                        else {
                            return false;
                      }
                    }
                }
            }
        }
    }
return true
    }
}
