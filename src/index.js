import './styles/style.scss';
function importAll (r) {
  r.keys().forEach(r);
}

importAll(require.context('./assets/favicons', true, /\.(svg|png|ico|xml|json|webmanifest)$/))
