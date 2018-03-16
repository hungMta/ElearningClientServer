function Pagingation(total,limit, current, data) {
    this.total = calculatorTotalPage(total,limit);
    this.limit = limit;
    this.current = setCurrent(current);
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

function setCurrent(current){
    if(current){
        return current
    }else{
        return 1
    }
}

exports.Pagingation = Pagingation;