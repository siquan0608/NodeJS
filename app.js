Date.prototype.formatVN = function () {
    return this.getDate() + '/' + (this.getMonth() + 1) + '/' + this.getFullYear();
}
let d = new Date();
console.log(d.formatVN());