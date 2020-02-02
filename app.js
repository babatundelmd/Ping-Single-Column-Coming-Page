const input = document.querySelector( 'input' );
const button = document.getElementById( 'button' );
const paragraph = document.getElementById( 'validate-email' );

function isEmailValid ( email )
{
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test( email )
}

function Validate ()
{
    paragraph.textContent = 'Please provide a valid email address';
    paragraph.classList.add( 'validate-email' )

}

button.addEventListener( 'click', ( e ) =>
{
    if ( e ) {
        if ( !isEmailValid( input.value ) ) {
            input.classList.add( 'input' )
            Validate();
        } else {
            return removeValidate();
        }

    }

} );


function removeValidate ()
{

    input.addEventListener( 'change', ( e ) =>
    {
        e.target.classList.remove( 'input' )

    } )

}