import ScrollSuave from './modules/scroll-suave.js';
import TabNav from './modules/tab-nav.js';
import Accordion from './modules/accordion.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropdown from './modules/dropdown.js';
import initMenuMobile from './modules/menumobile.js';

import initHorario from './modules/horario.js';
import initFetchAnimais from './modules/fetchanimais.js';
import initFetchBitcoin from './modules/fetchbit.js';
import initAnimacaoScroll from './modules/scroll-animation.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

initDropdown();
initMenuMobile();
initHorario();
initFetchAnimais();
initFetchBitcoin();
initAnimacaoScroll();
