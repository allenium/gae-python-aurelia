# GAE + Python + Aurelia!

http://gaepythonaurelia.appspot.com/

This app uses an Google Application Engine, Python and [Aurelia Framework] (http://github.com/aurelia/framework)

## How to Install

* Download the [Google App Engine SDK for Python] (https://cloud.google.com/appengine/downloads) and install it.
* Change to folder 'app'.
* Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g jspm
  ```
  
* Install the client-side dependencies with jspm:

  ```shell
  jspm install
  ```
  
* Go back to root folder and run server 
  
   ```shell
  app_devserver.py .
  ```
  
* Enjoy it!
