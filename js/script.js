import ScrollSuave from './modules/scroll-suave.js';
import TabNav from './modules/tab-nav.js';
import Accordion from './modules/accordion.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import DropdownMenu from './modules/dropdown.js';
import MenuMobile from './modules/menumobile.js';

import initHorario from './modules/horario.js';
import fetchAnimais from './modules/fetchanimais.js';
import fetchBit from './modules/fetchbit.js';
import ScrollAnima from './modules/scroll-anima.js';

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

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdownmenu = new DropdownMenu('[data-dropdown]');
dropdownmenu.init();

const menumobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menumobile.init();

initHorario();
fetchAnimais('../../animais.json', '.numeros-grid');
fetchBit('https://blockchain.info/ticker', '.btc-preco');
