package com.happysdufe;

import android.app.Application;
import android.content.Context;

public class HappySdufeApplication extends Application {

    private static Context context;

    public void onCreate(){
        super.onCreate();
        HappySdufeApplication.context = getApplicationContext();

    }

    public static Context getAppContext() {
        return HappySdufeApplication.context;
    }
}
