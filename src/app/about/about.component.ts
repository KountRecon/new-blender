import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
// import { AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChild('video')
  public video: ElementRef;

  @ViewChild('canvas')
  public canvas: ElementRef;

  public captures: Array<any>;



  constructor( ) {
    this.captures = [];
  }

  // startUpload(event: FileList) {
  //   // The File object
  //   const file = event.item(0);

  //   // Client-side validation example
  //   if (file.type.split('/')[0] !== 'image') {
  //     console.error('unsupported file type :( ');
  //     return;
  //   }
  //   // The storage path
  //   const path = `test/${new Date().getTime()}_${file.name}`;

  //   // Totally optional metadata
  //   const customMetadata = { app: 'My AngularFire-powered PWA!' };

  //   // The main task
  //   this.task = this.storage.upload(path, file, { customMetadata });
  // }


  public ngOnInit() { }

  // tslint:disable-next-line:use-life-cycle-interface
  public ngAfterViewInit() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          this.video.nativeElement.src = window.URL.createObjectURL(stream);
          this.video.nativeElement.play();
          console.log('codigo ejecutado');
        });
    }
  }
  public capture() {
    const context = this.canvas.nativeElement.getContext('2d').drawImage(this.video.nativeElement, 0, 0, 640, 480);
    this.captures.push(this.canvas.nativeElement.toDataURL('image/png'));
    console.log('codigo ejecutado botton');
  }

}



