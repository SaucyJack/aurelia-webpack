/// <reference types="aurelia-loader-webpack/src/webpack-hot-interface" />
import { Aurelia } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import * as Bluebird from 'bluebird';

Bluebird.config({ warnings: { wForgottenReturn: false } });

export function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
        .plugin(PLATFORM.moduleName('aurelia-validation'))
        .developmentLogging();
    aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}