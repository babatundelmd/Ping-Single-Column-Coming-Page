const input = document.querySelector( 'input' );
const button = document.getElementById( 'button' );
const paragraph = document.getElementById( 'validate-email' );



button.addEventListener( 'click', ( e ) =>
{
    // paragraph.innerHTML = input
    if ( e ) {
        console.log( 'Nice!' )
        if ( input.value === 'three' ) {
            input.classList.add( 'input' )
            Validate();
            console.log( input.value )
        }

    }

} );

function Validate ()
{
    paragraph.textContent = 'Please provide a valid email address';
    paragraph.classList.add( 'validate-email' )

}