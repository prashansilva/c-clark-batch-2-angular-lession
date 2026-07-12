import {Component, OnInit} from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  first,
  from,
  fromEvent,
  interval,
  map,
  Observable,
  of,
  scan,
  take,
  takeUntil,
  takeWhile,
  timer
} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  public number = 10;
  public numbers: number[] = [];
  public numberWhile: number[] = [];
  public numbers$ = new Observable<number>( ( sub ) => {
    sub.next( 10 );
    sub.next( 20 );
    sub.next( 50 );
    sub.next( 30 );
    sub.next( 30 );
    sub.next( 40 );
    sub.next( 30 );
    sub.next( 40 );
    sub.next( 60 );
    sub.next( 70 );
    sub.complete();
  });

  name = new FormControl('');


  public marks$ = new Observable<Mark>( ( sub ) => {
    sub.next( { value: 20, subject: 'Maths'} );
    sub.next( { value: 40, subject: 'English'} );
    sub.next( { value: 40, subject: 'Science'} );
    sub.next( { value: 20, subject: 'History'} );
    sub.complete();
  });

  constructor() {


  }

  ngOnInit(): void {
    of( 10, 20, 30 ).subscribe( ( val: number ) => {
      console.log( val );
      // this.numbers.push( val );
    })

    from( [ 10, 20, 30 ] ).subscribe( ( val: number ) => {
      console.log( val );
      // this.numbers.push( val );
    })

    // interval( 2000).subscribe( ( val: number ) => {
    //   console.log( val );
    //   this.number = this.number + 10;
    //   this.numbers.push( this.number  );
    // })

    timer( 2000 ).subscribe( ( val: number ) => {
      // this.numbers.push( this.number  );
    })


    const button = document.getElementById("save");
    if( button ) {
      fromEvent( button, "click" ).subscribe( ( event ) => {
        console.log( event );
      });
    }


    this.numbers$.pipe(
      map( value => {
        return this.createObject( value)
      })
    ).subscribe( ( val: any ) => {
      console.log( val)
    })


    this.numbers$.pipe(
      map<number, Mark >( value => {
        return this.createObject( value)
      })
    ).subscribe( ( val: any ) => {
      console.log( val)
    })


    this.numbers$.pipe(
      scan( ( total, val: any ) => total + val, 100)
    ).subscribe( ( val: any ) => {
      console.log( val)
    })


    this.numbers$.pipe(
      filter( ( val: any ) => val < 50)
    ).subscribe( ( val: any ) => {
      this.numbers.push( val  )
    })

    this.numbers$.pipe(
      take( 3 )
    ).subscribe( ( val: any ) => {
      // this.numbers.push( val  )
    })

    this.numbers$.pipe(
      takeWhile( ( val: any ) => val < 50)
    ).subscribe( ( val: any ) => {
      this.numberWhile.push( val  )
    })

    this.marks$.pipe(
      first( mark => mark.value > 40 )
    ).subscribe( ( val: any ) => {
      console.log( val )
    })

    this.numbers$.pipe(
      distinctUntilChanged()
    ).subscribe( ( val: any ) => {
      console.log( val )
    })

    this.name.valueChanges.pipe(
      debounceTime( 1000 )
    ).subscribe( ( val: any ) => {
      console.log( val )
    })

  }


  public createObject( value: number ): Mark  {
    return {
      value : value,
      subject: 'Maths'
    }
  }

}

export interface Mark {
  value: number;
  subject: string;
}
