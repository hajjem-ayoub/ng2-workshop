import {PipeTransform, Pipe} from '@angular/core';

@Pipe({
    name:'image'
})
export class ImagePipeTransform implements PipeTransform{
    transform(value: string){
        if(value){
            return `content/images/food/${value}.jpg`;
        }
        else{
            return "content/images/food/404.png";
        }
    }
} 