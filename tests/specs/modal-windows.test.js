const chai = require( "chai" );
const chaiWebdriver = require( "chai-webdriverio" ).default;
chai.use( chaiWebdriver( browser ) );
const { expect } = chai;

const {
    sendCommand,
    vorple
} = require( "../utility" );

const closeModals = () => {
    browser.execute( () => window.vex.closeAll() );
    vorple( "layout", "unblock" );
    browser.click( "body" );
    browser.pause( 2000 );  // wait for the fade out animation to finish
};

describe( "Modal Windows", () => {
    describe( "Opening", () => {
        it( "succeeds", () => {
            sendCommand( "unittest show modal" );
            browser.waitForExist( ".vex-dialog-message" );
            expect( ".vex-dialog-message" ).to.have.text( "Test" );
            closeModals();
        } );
    });

    describe( "Empty modals", () => {
        it( "are created and have the correct content", () => {
            sendCommand( "unittest create empty modal" );
            browser.waitForExist( ".vex-dialog-message" );
            expect( ".vex-dialog-message" ).to.have.text( "Test2" );
            closeModals();
        });
    });
});