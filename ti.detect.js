var hasNotch = false;
Alloy.CFG.TiDetect = {};

function hasIOSNotch(){
    if ( 
        // iPhone X/Xs
        Ti.Platform.displayCaps.platformWidth === 375 && 
        Ti.Platform.displayCaps.platformHeight === 812 && 
        Ti.Platform.displayCaps.logicalDensityFactor === 3) {
        return true;
    }

    if ( 
        // iPhone XR/XR max
        Ti.Platform.displayCaps.platformWidth === 414 && 
        Ti.Platform.displayCaps.platformHeight === 896 && 
        ( Ti.Platform.displayCaps.logicalDensityFactor === 2 || Ti.Platform.displayCaps.logicalDensityFactor === 3) ) {
        return true;
    }
}

function init(){
    hasNotch = OS_IOS && hasIOSNotch();
    Alloy.CFG.TiDetect.statusbarHeight = hasNotch ? 44 : 20;
    Alloy.CFG.TiDetect.hasNotch = hasNotch;
}

init();
