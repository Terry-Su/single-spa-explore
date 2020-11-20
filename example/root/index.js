// import * as singleSpa from '../../single-spa-5.8.2-modified/lib/es2015/single-spa.dev.js'
const name = 'root'
const app = () => import('../scene1/exported.js')
const activeWhen = '/'
singleSpa.registerApplication({name, app, activeWhen})
singleSpa.start()