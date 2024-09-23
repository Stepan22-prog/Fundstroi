import BaseHelpers from './helpers/BaseHelpers.js';

BaseHelpers.checkWebpSupport();

//spoilers
import * as modules from './modules/modules';
modules.spollers();

//menu
modules.menuInit();

//popup
import PopupManager from './modules/PopupManager';
new PopupManager();

//validation
import './libs/jquery.maskedinput.min';
jQuery(function ($) {
  $("#telephone").mask("+38 (999) 999-9999");
  $("#popup-telephone").mask("+38 (999) 999-9999");
});

//catalog
import './modules/dynamicCatalog.js';

//tabs
modules.tabs();

//gallery
import './modules/galleryManager';

//form handler
import './modules/formHandler.js';
