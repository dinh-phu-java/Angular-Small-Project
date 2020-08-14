import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnDestroy {
  user: {id: number, name: string};

  constructor(private route:ActivatedRoute) { }

 
  pramSubscription:Subscription;

  ngOnInit() {
    this.user={
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
    }

    this.pramSubscription= this.route.params.subscribe(
      (params:Params)=>{
        this.user.id=params['id'];
        this.user.name=params['name'];
      }
    )

  }

  ngOnDestroy(): void {
    this.pramSubscription.unsubscribe();
  }

}
