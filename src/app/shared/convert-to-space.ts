import { PipeTransform } from '@angular/core';
import { from, pipe } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'convertToSpace'
})
export class ConvertToSpacePipe implements PipeTransform {
    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }

}