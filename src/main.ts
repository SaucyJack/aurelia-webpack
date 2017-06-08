import { Aurelia } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import * as Bluebird from 'bluebird';


Bluebird.config({ warnings: { wForgottenReturn: false } });

export function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging();
    aurelia.start().then(a => {
        a.setRoot(PLATFORM.moduleName('app'));
    });
}