function Pagingation(total,limit, current, data) {
    this.total = calculatorTotalPage(total,limit);
    this.limit = limit;
    this.current = current;
    this.data = data;
}

function calculatorTotalPage(total, limit){
    var x =  total / limit
    var y = Math.round(total/limit)
    if(x > y){
        y ++;
    }else{

    }
    return y
}

exports.Pagingation = Pagingation;