var hasNotch = false;
Alloy.CFG.TiDetect = {};

function hasIOSNotch(){
    if ( 
        // iPhone X/Xs/XR
        Ti.Platform.displayCaps.platformWidth === 375 && 
        Ti.Platform.displayCaps.platformHeight === 812 && 
        (Ti.Platform.displayCaps.logicalDensityFactor === 3 || Ti.Platform.displayCaps.logicalDensityFactor === 2)) {
        return true;
    }

    if ( 
        // iPhone XR/XS max
        Ti.Platform.displayCaps.platformWidth === 414 && 
        Ti.Platform.displayCaps.platformHeight === 896 && 
        ( Ti.Platform.displayCaps.logicalDensityFactor === 2 || Ti.Platform.displayCaps.logicalDensityFactor === 3) ) {
        return true;
    }
}

function init(){
    hasNotch = Ti.Platform.osname === 'iphone' && hasIOSNotch();
    Alloy.CFG.TiDetect.statusbarHeight = hasNotch ? 44 : 20;
    Alloy.CFG.TiDetect.hasNotch = hasNotch;
}

init();

// exporting init function. There is no need to call this 
// unless you want to re-evaluate properties. (which shouldn't be needed at all)
module.exports = {
    init: init
};
