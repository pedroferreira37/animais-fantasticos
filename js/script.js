import ScrollSuave from './modules/scroll-suave.js';
import TabNav from './modules/tab-nav.js';
import Accordion from './modules/accordion.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
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

initModal();
initTooltip();
initDropdown();
initMenuMobile();
initHorario();
initFetchAnimais();
initFetchBitcoin();
initAnimacaoScroll();
