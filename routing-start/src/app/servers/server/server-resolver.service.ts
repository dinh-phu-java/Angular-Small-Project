import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ServersService } from '../servers.service';
import { Injectable } from '@angular/core';

interface Server{
    id:number;
    name:string;
    status:string;
}

@Injectable({providedIn:'root'})
export class ServerResolver implements Resolve<{id:number,name:string,status:string}>{
    constructor(private serverService:ServersService){}
    resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<Server> | Promise<Server> | Server  {
        
        return this.serverService.getServer(+route.params['id']);
    }
    
    // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): { id: number; name: string; status: string; } | import("rxjs").Observable<{ id: number; name: string; status: string; }> | Promise<{ id: number; name: string; status: string; }> {
    //     throw new Error("Method not implemented.");
    // }
    


}