function graph(obj){
    this.finish = false;
    this.status = 0;
    if(!finish){
        this.canvas = obj.canvasId;
        this.ctx = this.canvas.getContext('2d');
        this.father = obj.father;
        this.w = this.father.clientWidth;
        this.h =this.father.clientHeight;
        this.lcolor = obj.lcolor 
    }
}