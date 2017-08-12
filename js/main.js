function _cl(el){
    return document.getElementsByClassName(el);
};
function _id(el){
    return document.getElementById(el);
};
function Marr(numArray) {
  return Math.max.apply(null, numArray);
}
function Minn(numArray){
    return Math.min.apply(Math, numArray);
}
var val = {
    middle: 0
}
var mo = 0;
var gra = 0;
var wid = 0;
var showN = null;
var canvas,ctx,father,w,h,opts,numbers,hLayer, numArray, maxH, ten, maxL, hl, n, min;
var status = 0;
var finish = false;
function build(nums, idCan, fatherCan, cellule){
    if(!finish){
canvas = _id(idCan);
    ctx = canvas.getContext('2d');
    father = _cl(fatherCan);
    w = father[0].clientWidth;
    h = father[0].clientHeight;
    wid = w;
    hid = h;
    opts = {
        yInter: w/nums.length,
        lColor: '#34495e',
        lineWidth: 3,
        background: '#95a5a6',
        font: '30px Arial'
    };
    numbers = opti(nums);
    val.middle = 0;
    canvas.width = w;
    canvas.height = h;
   
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#95a5a6';
};
 ctx.fillStyle = '#fff';
    ctx.fillRect(0,0,w,h);
    if(cellule){
for(var i = 0; i < w/(w/90); i++){
        ctx.moveTo(i*(w/90), 0);
        ctx.lineTo(i*(w/90), h);
        ctx.closePath();
        ctx.stroke();
    };
       for(var i = 0; i < h/(h/90); i++){
        ctx.moveTo(0, i*(w/90));
        ctx.lineTo(w, i*(w/90));
        ctx.closePath();
        ctx.stroke();
    };
    };
        ctx.lineWidth = opts.lineWidth;
        ctx.strokeStyle = '#34495e';
    for(var i = 0; i < numbers.length; i++){
        ctx.beginPath();
        ctx.moveTo(opts.yInter*i, h-numbers[i]);
        ctx.lineTo(opts.yInter*(1+i), h-numbers[i+1]);
        ctx.closePath();
        ctx.stroke();
    };
    finish = true;
    function opti(nums){
        min = Minn(nums)
            if(min < 0){
                min = Number(min)
                min = min*(-1)
                for(var n = 0; n < nums.length; n++){
                    nums[n] = Number(nums[n])
                    nums[n] = min+nums[n]
                }
                min = min*(-1)
            }
        var max = Marr(nums)
            maxL = Math.floor(max).toString().length;
            hl = h.toString().length;
            n = -(maxL-hl);
            ten = Math.pow(10 ,n);
            maxH = h/(max*ten);   
            for(var l = 0; l < nums.length; l++){
                nums[l] = (nums[l]*ten)*maxH;
            };
           return nums;
    };
};
    function show(form){
        if(status == 0){
        mo = _id('mo');
        gra = _id('grap');
        gra.addEventListener('mousemove', function(){mouse1(event);});
        gra.addEventListener('mouseout', function(){mouse2(event);});
        status = 1;
    }
    numbers = showN = _id(form).value.split(' ');
    finish = false;
        build(numbers, 'grap', 'grap', false);
    };
    function mouse1(e){
        build(numbers, 'grap', 'grap', false);
        for(var hj = 0; hj < h; hj++){
            var pixel = ctx.getImageData(e.layerX, hj, 1, 1);
            if(pixel.data[1] != 255 && pixel.data[1] != 255 && pixel.data[1] != 255){
                if(min < 0){
                    hLayer = (((h-hj)/ten)/maxH)+min
                }else{
                    hLayer = ((h-hj)/ten)/maxH;
                }
                ctx.beginPath();
                ctx.moveTo(0,h/2);
                ctx.lineTo(w,h/2);
                ctx.closePath();
                ctx.stroke();
                break;
            }
        }
        mo.innerHTML = 'X '+e.layerX+'Y '+hLayer;
        ctx.beginPath();
        ctx.moveTo(e.layerX,0);
        ctx.lineTo(e.layerX,h);
        ctx.closePath();
        ctx.stroke();
    };
    function mouse2(){
        mo.innerHTML = '';
        build(numbers, 'grap', 'grap', false);
            if(min < 0){
                ctx.beginPath();
                ctx.moveTo(0,((min*(-1))/ten)/maxH)
                ctx.lineTo(w, ((min*(-1))/ten)/maxH)
                ctx.closePath();
                ctx.stroke();
            }else{
                ctx.beginPath();
                ctx.moveTo(0,h/2);
                ctx.lineTo(w,h/2);
                ctx.closePath();
                ctx.stroke();
            }
        
        
    };
 