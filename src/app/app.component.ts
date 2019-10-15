import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ngxMasonryExample';
  name = 'Angular';
  swipeFiles = [];
  swipeFilesOrig = [
    {
      id: 'KD7Rzxvybz7PXxrAWq8x',
      imageHeight: 768,
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myswipefile-dev.appspot.com/o/4YbvpywBzFSbHXsGJedy9L4lPqi2%2FswipeFiles%2F1571100704733_cute-cat-captions-1563551865.jpg?alt=media&token=38fb5631-375f-498b-b89e-75b983623ccf',
      imageWidth: 768
    },
    {
      id: 'aEJoMmyyhNn3oJawjFBV',
      imageHeight: 416,
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myswipefile-dev.appspot.com/o/4YbvpywBzFSbHXsGJedy9L4lPqi2%2FswipeFiles%2F1570650920354_BBR4tJL.jfif?alt=media&token=da6f1c5e-1baa-4bd4-b508-40694e1e3fa5',
      imageWidth: 624
    },
    {
      id: 'Y7kGhk3cuXETwvB3ktZL',
      imageHeight: 416,
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myswipefile-dev.appspot.com/o/4YbvpywBzFSbHXsGJedy9L4lPqi2%2FswipeFiles%2F1570650875213_BBR4rwz.jfif?alt=media&token=70d5d16b-96dd-4b10-8feb-5432ff8771df',
      imageWidth: 554
    }
  ];
  updateMasonryLayout;

  ngOnInit() {
    this.getSwipeFiles();
  }

  getSwipeFiles() {
    this.swipeFiles = [];
    // this.swipeFiles = this.swipeFilesOrig;
    setTimeout(() => {
      this.swipeFiles = this.swipeFilesOrig;
    }, 1000);
  }

  onRefresh() {
    console.log('click');
    this.getSwipeFiles();
  }
}
