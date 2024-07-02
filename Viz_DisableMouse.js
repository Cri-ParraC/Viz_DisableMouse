//=============================================================================
// Viz_DisableMouse.js [MZ] (v1.0.2)
//=============================================================================

/*:
 * @target MZ
 * @plugindesc [MZ] (v1.0.2) Deshabilita el control con mouse y táctil.
 * @author Vizcacha
 * @url https://github.com/Cri-ParraC/Viz_DisableMouse
 * @help Viz_DisableMouse.js [MZ] (v1.0.2)
 * ----------------------------------------------------------------------------
 * Plugin sencillo para RPG Maker MZ que deshabilita el control con mouse y
 * táctil.
 * 
 * También oculta el cursor del mouse tras un periodo corto de inactividad.
 */

(() => {
  "use strict";

  console.info("Viz_DisableMouse.js [MZ] (v1.0.2)");

  window.Imported ||= {};
  Imported.Viz_DisableMouse = 1.0;

  let timeout;

  function hideCursor() {
    document.body.style.cursor = 'none';
  }

  function showCursor() {
    document.body.style.cursor = 'default';
  }

  function resetTimer() {
    clearTimeout(timeout);
    showCursor();
    timeout = setTimeout(hideCursor, 2000);
  }

  document.addEventListener('mousemove', resetTimer);
  document.addEventListener('mousedown', resetTimer);
  document.addEventListener('touchstart', resetTimer);

  resetTimer();

  //-----------------------------------------------------------------------------
  // TouchInput
  //-----------------------------------------------------------------------------

  // TouchInput._setupEventHandlers

  TouchInput._setupEventHandlers = function () { };

})();