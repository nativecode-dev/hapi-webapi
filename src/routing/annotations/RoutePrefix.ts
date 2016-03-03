/// <reference path="../../../node_modules/reflect-metadata/reflect-metadata.d.ts" />
"use strict";

function RoutePrefix(prefix: string) {
    return function(target: Function) {
        Reflect.defineMetadata("RoutePrefix", prefix, target);
        //Reflect.defineMetadata("RoutePrefix", prefix, RoutePrefix, "method");
        //Reflect.defineMetadata("routeprefix", prefix, target, null);
        
        //console.log('Register RoutePrefix for service: "/' + prefix + '"');
        //console.log("Target: ", target);
    }
}