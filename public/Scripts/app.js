/* app.js
Students's name: Arish Qureshi
StudentID: 301176321
Date: 24 June, 2022
*/

/*IIFE*/

(function()
{
    function Start()
    {
        console.log("App started...");

        let deleteButtons=document.querySelectorAll('.btn-danger')

        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/book-list');
                }
            });
        }
    }
    window.addEventListener("load", Start);
})();