/*


    CLIENT SCRIPT TYPE

    Scripts that are executed by predefined event triggers 
    in the client-side or browser.

    They can validate user entered data and auto-populate
    fields or sublists at various form events.



    Scripts can be ran on:
    * Most Standard Records
    * Custom Record Types
    * Custom NetSuite pages (e.g. Suitelets)

-                        IMPORTANT:                              -
|    Client Scripts only execute in EDIT mode, if you deploy     |
|    a client script with a pageInit, it won't work when you     |
|    view the form. It executes once you enter Edit Mode.        |
-                                                                -


    The following triggers can run a client script:
    * Loading a form for editing.
    * Entering or changing a value in a field (before and after it's entered).
    * Entering or changing a value in a  field that sources another field.
    * Selecting a line item on a sublist
    * Adding a line item (before and after)
    * Saving a form

*/
