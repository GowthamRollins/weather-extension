$(document).ready(function(){
    if($(".checkbox").click(function(){
        console.log('insidde click',this);
        this.remove(); 
    }));
})