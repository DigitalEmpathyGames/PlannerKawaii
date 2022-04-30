package com.planerkawaii;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

import java.util.Date; // import the LocalDate class
import java.text.SimpleDateFormat;
import java.util.Calendar;

public class ObtenerFecha extends ReactContextBaseJavaModule {
   ObtenerFecha(ReactApplicationContext context) {
       super(context);
   }

   // add to CalendarModule.java
   @Override
   public String getName() {
      return "ObtenerFecha";
   }

   @ReactMethod(isBlockingSynchronousMethod = true)
   public String obtenerFechaActual() {
      Date date = Calendar.getInstance().getTime();
      SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
      return formatter.format(date);
   }
}

