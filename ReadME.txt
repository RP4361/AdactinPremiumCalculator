Thanks a lot for giving me the oppurtunity to work on a demo for Adactin.


Below are the salients regarding this poc -

1.  Angular version 13 is used along with bootstrap, rxjs and ngx-slider.

2.  I have used Reactive forms module for building the form which greatly enhances 
    the overall control on the code and validation.

3.  A separate module "userpremium" has been created and is used to develop the requirement.
    This helps in creating a separate boundary for a specific feature.
    Please take a look at the module folder in file explorer.

4.  I have almost everywhere used 'Types' instead of using 'any' everywhere.
    This allows to take advantage of Type Checking which angular provides which I think 
    is very helpful when we work on large projects to prevent runtime errors and 
    better code understandibility.

5.  Source Data has been modelled and mocked within the application which is retrieved via a Service.
    We can definitely make use of a webapi and some data persistance like Sql Server but 
    for sake of completing this within time I have used mock data for now.
    Please take a look at 'occupationmockdata.ts' and 'occupationmodel.ts'.
    
6.  I have used a service called as 'occupationdata.service.ts' to retrieve the data.
    The advantage of using a service is that we have DeCoupled the application data retrieval
    from data manipulation and showcasing.
    We can at any point of time Swap the current model from an api call as i have created a
    Strongly Typed Observable and hence we will just have to make change in the service layer.

7.  I have tried to implement the validation as much as possible.
    Please feel free to try out the app.

8.  For sake of performance I have stressed more on overall architecture and code quality of the app.
    I can definitely work more on design part as i think design, look and feel can definitely be
    improved from current standard.

9.  SUMMARY -
        - App has been provided with 4 inputs :
            * Name
            * Date of Birth
            * Occupation
            * Coverage Amount
        - Finally an yearly Premium is getting calculated and displayed.
        - User has to key in all the mandatory fields above.
        - User can reset the input values at any point of time.
        DEFAULTS -: 
            a)  I am calculating Age automatically based upon the DOB entered above.
            b)  Since in real world no one will be putting in a A$0 fro coverage Amount
                hence I am defaulting Coverage Amount as A$5000.
                The maximum Coverage Amount is set as A$1 Million.
                We can alter this functionality in case we need it.

        - GitHub Link :
            https://github.com/RP4361/AdactinPremiumCalculator.git
            Branch : master
            Angular version 13
            Please perform an npm install and npm run start.

            I will also attach a word document to provide some excerpts of the poc.


I again thanks Adactin for providing me this oppurtunity to write some code.

Thanks and Regards,
Rishabh
    
