//
//  ToastManager.m
//  HappySdufe
//
//  Created by WildCat on 11/7/15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import "ToastManager.h"

@implementation ToastManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(show:(NSString *)text) {
  NSLog(@"%@" ,text);
}

@end
