import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { CommonService } from '../common/common.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

import 'firebase/storage';

@Injectable()
export class UploaderService {

  storeRef: firebase.storage.Reference;
  uid: string;

  constructor(public _cs: CommonService,
    private spinnerService: Ng4LoadingSpinnerService) {
    this.storeRef = firebase.storage().ref();
    const user: any = this._cs.getUser();
    this.uid = user.uid;
  }


  upload(file) {
    this.spinnerService.show();
    const fileRef = this.storeRef.child(`/images/${this.uid}/${file.name}`);
    const uploadTask = fileRef.put(file);
    return new Promise((resolve, reject) => {
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          // console.log(snapshot);
        }, (error) => reject(error),
        () => {
          const fileurl = uploadTask.snapshot.downloadURL;
          // console.log(fileurl);
          this.spinnerService.hide();
          resolve(fileurl);
        });
    });
  }

  uploadMultiple(file) {
    const promise = [];
    for (let index = 0; index < file.length; index++) {
      const element = file[index];
      promise.push(this.upload(element));
    }
    return Promise.all(promise);
  }

}
