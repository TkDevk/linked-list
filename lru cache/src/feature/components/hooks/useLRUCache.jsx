class LRUCache{
    constructor(capactity){
        this.capactity=capactity;
        this.cache={};
        this.head=null;
        this.tail=null;
    }
    // Need to set and get data
    put(key,value){
        if(cache[key]){
            this.cache[key].value=value;
            //move it to the front
        }else{
            if(Object.keys(this.cache).length===this.length){

            }
        }
    }


}

//https://www.youtube.com/watch?v=4dO29k0qVU4