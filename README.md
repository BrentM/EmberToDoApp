#Building the Classic ToDo app with Ember

Using this to get started: http://emberjs.com/guides/getting-started/

##WGET all the things!
    wget http://emberjs.com.s3.amazonaws.com/getting-started/style.css
    ...

##Check them in
I'm just checking in everything to keep things simple.

##Handlebars bindattr
The bind-attr in the li element outputs the class value after the : based on the boolean value in isCompleted.
http://emberjs.com/guides/getting-started/displaying-a-models-completeness/


## Remaining Todo Items
The example for adding the "remaining" and "inflection" values to show the number of items remaining is easy to misunderstand. The "remaining" and "inflection" handlers should be at the same level as "actions" in the todos controller and not children of that item.
