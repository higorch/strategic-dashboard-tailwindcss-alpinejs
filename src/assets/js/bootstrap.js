// REQUIRED IMPORTS
import { computePosition, autoUpdate, flip } from "@floating-ui/dom";
window.computePosition = computePosition;
window.flip = flip;
window.autoUpdate = autoUpdate;

import Alpine from 'alpinejs';
window.Alpine = Alpine;
Alpine.start();

import 'simplebar';
import 'simplebar/dist/simplebar.css';

import '@fortawesome/fontawesome-free/css/all.min.css';

import '../css/style.css'

import '../js/modal';
import '../js/dropdown';

// OPTIONAL IMPORTS
import '../js/diagram';