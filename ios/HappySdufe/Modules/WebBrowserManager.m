//
//  WebBrowserManager.m
//  HappySdufe
//
//  Created by WildCat on 11/12/15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import "WebBrowserManager.h"

@implementation WebBrowserManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(open: (NSString*) string) {
  [[UIApplication sharedApplication] openURL: [NSURL URLWithString: string]];
}

@end
