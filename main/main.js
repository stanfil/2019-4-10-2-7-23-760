module.exports = function main(inputs) {
    let {distance, parkTime} = inputs
    let sum = distance<2?6:distance<8?(6+(distance-2)*0.8):(10.8+(distance-8)*1.2)
    sum += parkTime*0.25
    return Math.round(sum);
};
