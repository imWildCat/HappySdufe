//
//  ProgressHUDManager.m
//  HappySdufe
//
//  Created by WildCat on 11/12/15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import "ProgressHUDManager.h"
#import <KVNProgress/KVNProgress.h>

@implementation ProgressHUDManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(show) {  
  dispatch_async(dispatch_get_main_queue(), ^{
    [KVNProgress show];
  });
}

RCT_EXPORT_METHOD(hide) {
  dispatch_async(dispatch_get_main_queue(), ^{
    [KVNProgress dismiss];
  });
}

@end
