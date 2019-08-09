/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.arr = [];
    this.min = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.arr.push(x);
    let min = this.getMin();
    if(min === undefined){
        this.min.push(x);
    }else{
        this.min.push(Math.min(x, min))
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.min.pop();
    return this.arr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr[this.arr.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length-1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */