package com.happysdufe.module;


import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.happysdufe.MainActivity;

public class ActionSheetModule extends ReactContextBaseJavaModule {

    private static final String MODULE_NAME = "ActionSheetAndroid";

    public ActionSheetModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return MODULE_NAME;
    }

    @ReactMethod
    public void show() {
    }

}
