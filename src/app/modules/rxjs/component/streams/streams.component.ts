import {Component, OnInit} from '@angular/core';
import {combineLatest, concat, forkJoin, map, merge, Observable, share, take, timer, zip} from "rxjs";

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.scss']
})
export class StreamsComponent implements OnInit {

  private emitAt<T>(milliseconds: number, value: T): Observable<T> {
    return timer(milliseconds).pipe(
      map(() => value)
    );
  }

  streamA$: Observable<string> = merge(
    this.emitAt(0, 'A1'),
    this.emitAt(700, 'A2'),
    this.emitAt(1400, 'A3')
  ).pipe(
    share()
  );

  streamB$: Observable<string> = merge(
    this.emitAt(400, 'B1'),
    this.emitAt(1600, 'B2'),
    this.emitAt(2800, 'B3'),
    this.emitAt(3200, 'B4')
  ).pipe(
    share()
  );


  ngOnInit() {


    combineLatest([this.streamA$, this.streamB$]).subscribe({
      next: ([valueA, valueB]) => {
        console.log('CombinedLatest stream: ', valueA, valueB);
      },
      complete: () => {
        console.log('combineLatest completed');
      }
    });

    forkJoin({
      first: this.streamA$,
      second: this.streamB$
    }).subscribe({
      next: result => {
        console.log('ForkJoin stream: ',result);
      },
      complete: () => {
        console.log('forkJoin completed');
      }
    });

    zip(this.streamA$, this.streamB$).subscribe({
      next: ([valueA, valueB]) => {
        console.log('Zip stream: ',valueA, valueB);
      }
    });

    merge(this.streamA$, this.streamB$).subscribe(value => {
      console.log('Merge stream: ',value);
    });

    concat(this.streamA$, this.streamB$).subscribe(value => {
      console.log('Concat stream: ',value);
    });
  }
}
