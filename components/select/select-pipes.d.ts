import { PipeTransform } from '@angular/core';
export declare class HighlightPipe implements PipeTransform {
    transform(value: any, query: string): any;
}
export declare function stripTags(input: string): string;
