/// <reference path="../../../node_modules/reflect-metadata/reflect-metadata.d.ts" />
/// <reference path="../../../typings/main.d.ts" />
"use strict";

require("reflect-metadata");

export function HttpDelete() {
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
        //descriptor.enumerable = route;
        Reflect.defineMetadata("Method", 'DELETE', descriptor.value);
        return descriptor;
    };
}