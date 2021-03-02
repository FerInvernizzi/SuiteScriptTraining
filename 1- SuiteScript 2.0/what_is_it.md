# SuiteScript 2.0

## What is it?

SuiteScript is an **API** that offers a variety of options for _enhancing and extending_ NetSuite.
It can customize the behaviour of the page, create custom workflows,
schedule tasks and much more.

## SuiteScript 2.0 Script Types and Entry Points

While utilizing SuiteScript, you'll eventually have to decide between a handfull of **Script Types**.
These let you determine when and how are your events gonna trigger, whether they trigger in the
clients browser or in the server or even what is the script trying to accomplish in the first place.

- **Client Scripts** are designed for scripts that should run in the browser.

- **Scheduled Scripts** are for server-side scripts that should run at a specific time or on a recurring schedule.

- **RESTlet Scripts** are for server-side scripts that should execute when called over HTTP by an application external to NetSuite.

Each of these, include one or more **Entry Points**, exclusive to that type. They represent the point in time in
which the system grants control of the NetSuite app to our script. When you include entry points in your scripts,
you are telling the system to do something when that entry point is invoked. This "something" actions are called
**Entry Point Functions**.

Entry points are basically the types of events able to trigger your script, for example, in Client Script Type's
this events can happen anytime during a browser session. Two of them are _fieldChanged_, which represents a change to the value of a field and _pageInit_, which represents the loading of a page. In comparison, a Scheduled Script Type has only one
entry point, called _execute_, representing the point at which a schedule executes the script or a user acts manually to execute the script.

## Modules

SuiteScript has a **Modular Architecture**
