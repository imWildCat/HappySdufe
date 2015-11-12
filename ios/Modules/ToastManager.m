//
//  ToastManager.m
//  HappySdufe
//
//  Created by WildCat on 11/7/15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import "ToastManager.h"
#import "AppDelegate.h"
#import <Toast/UIView+Toast.h>

@implementation ToastManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(show:(NSString *)text) {
  dispatch_async(dispatch_get_main_queue(), ^{
    AppDelegate *delegate = [UIApplication sharedApplication].delegate;
    [delegate.rootView makeToast: text];
  });
}

@end
