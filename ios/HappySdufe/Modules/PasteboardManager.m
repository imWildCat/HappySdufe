//
//  PasteboardManager.m
//  HappySdufe
//
//  Created by WildCat on 11/12/15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import "PasteboardManager.h"

@implementation PasteboardManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(set: (NSString*) string) {
  UIPasteboard *pasteboard = [UIPasteboard generalPasteboard];
  pasteboard.string = string;
}

@end
