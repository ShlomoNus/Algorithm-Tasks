function solution(N,K) {
    if (K ==0) return N -1;
    let rounds = 1;
    let chips =2;
    while(true){
        if(N == 2)return rounds;
         if(N%2 !=0){
            N-=1;
            chips+=1;
            rounds +=1;
        }else {

            if(K == 0){
                rounds = rounds +(N-2);
                return rounds;
            
            }else{

                N= N/2;
                K-=1;
                rounds +=1;
                chips= chips*2;
            }
        }
        
    }
    
}

