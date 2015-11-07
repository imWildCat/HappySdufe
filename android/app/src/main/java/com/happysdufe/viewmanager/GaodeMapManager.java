package com.happysdufe.viewmanager;

import com.amap.api.maps2d.AMap;
import com.amap.api.maps2d.CameraUpdate;
import com.amap.api.maps2d.CameraUpdateFactory;
import com.amap.api.maps2d.MapView;
import com.amap.api.maps2d.model.BitmapDescriptorFactory;
import com.amap.api.maps2d.model.CameraPosition;
import com.amap.api.maps2d.model.LatLng;
import com.amap.api.maps2d.model.Marker;
import com.amap.api.maps2d.model.MarkerOptions;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.ReactProp;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;


public class GaodeMapManager extends SimpleViewManager<MapView> {

    public static final String REACT_CLASS = "MCGaodeMapView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected MapView createViewInstance(ThemedReactContext context) {
        MapView mapView = new MapView(context);
        mapView.onCreate(null);
        AMap aMap = mapView.getMap();
        setUpMap(aMap);
        return mapView;
    }

    private void setUpMap(AMap aMap) {
        aMap.getUiSettings().setCompassEnabled(true);
        aMap.getUiSettings().setScaleControlsEnabled(true);
    }

    private void changeCamera(AMap aMap, CameraUpdate update, AMap.CancelableCallback callback) {
        aMap.animateCamera(update, 1000, callback);
    }

    @ReactProp(name = "region")
    public void setRegion(MapView view, ReadableMap region) {
        double latitude = region.getDouble("latitude");
        double longitude = region.getDouble("longitude");

        changeCamera(view.getMap(), CameraUpdateFactory.newCameraPosition(new CameraPosition(
                new LatLng(latitude, longitude), 17, 0, 30)), null);
    }

    @ReactProp(name = "annotations")
    public void setAnnotations(MapView view, ReadableArray annotations) {

//        // Remove all
//        List<Marker> markers = aMap.getMapScreenMarkers();
//        for (int i = 0; i < markers.size(); i++) {
//            aMap.getMapScreenMarkers().get(i).remove();
//        }
        view.getMap().clear();
        // Add new
        int size = annotations.size();
        for (int i = 0; i < size; i++) {
            ReadableMap annotation = annotations.getMap(i);
            String title = annotation.getString("title");
            double latitude = annotation.getDouble("latitude");
            double longitude = annotation.getDouble("longitude");

            view.getMap().addMarker(new MarkerOptions().position(new LatLng(latitude, longitude))
                    .icon(BitmapDescriptorFactory
                            .defaultMarker(BitmapDescriptorFactory.HUE_RED)).title(title));
        }

    }
}
