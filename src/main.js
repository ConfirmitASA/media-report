require('./main.css');
import MDHierarchy from "./hierarchy/hierarchy";
import TransformMenuAt from "./navigation/menu-transformer";
import SideNav from './side-nav/side-nav';

window.Reportal = window.Reportal || {};
window.Reportal.TransformMenuAt = TransformMenuAt;
window.Reportal.SideNav = SideNav;
window.Reportal.hierarchyUpgrade = MDHierarchy.upgrade;
