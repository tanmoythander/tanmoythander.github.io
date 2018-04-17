!function(){"use strict";function e(e,t,r){t.otherwise(function(e,t){return t.path().length>1?"/404":"/home"}),t.rule(function(e,t){var r=t.path(),n=r.toLowerCase();if(r!==n)return n}),t.when("/services","/services/index"),t.when("/more","/more/index"),e.state("404",{url:"/404",template:'<h1>404 Not Found</h1><a ui-sref="home">Home</a>'}).state("home",{url:"/home",templateUrl:"views/home/home.html",controller:"HomeController"}).state("home.list",{url:"/list",templateUrl:"views/home/home-list.html",controller:"ListController"}).state("home.paragraph",{url:"/paragraph",template:"<p>I could sure use a drink right now. Are you in?</p>"}).state("about",{url:"/about",templateUrl:"views/about/about.html",controller:"AboutController"}).state("exp",{url:"/experiences",templateUrl:"views/exp/exp.html",controller:"ExpController"}).state("expt",{url:"/expertises",templateUrl:"views/expt/expt.html",controller:"ExptController"}).state("portfolio",{url:"/portfolio",templateUrl:"views/portfolio/portfolio.html",controller:"PortfolioController"}).state("contact",{url:"/contact",templateUrl:"views/contact/contact.html",controller:"ContactController"}).state("more",{url:"/more","abstract":!0,template:"<div ui-view></div>"}).state("more.index",{url:"/index",templateUrl:"views/more/more.html",controller:"MoreIndexController"}).state("more.games",{url:"/games",templateUrl:"views/more/games/games.html",controller:"MoreGamesController"}).state("more.2048",{url:"/2048",templateUrl:"views/more/games/2048.html",controller:function(e){e.header=["","","","","","","active"]}}).state("more.towerRush",{url:"/tower-rush",templateUrl:"views/more/games/tower-rush.html",controller:function(e){e.header=["","","","","","","active"]}}).state("review",{url:"/review",templateUrl:"views/review/review.html",controller:"ReviewController"})}function t(e,t,r,n){r.ga("create","UA-78315830-2","auto"),e.$on("$stateChangeSuccess",function(e){r.ga("send","pageview",t.absUrl())})}angular.module("thander",["ui.router","ngStorage","star-rating"]).config(e),e.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],angular.module("thander").run(t),t.$inject=["$rootScope","$location","$window","$localStorage"]}(),function(){"use strict";angular.module("thander").constant("CONSTANTS",{API_URL_LOCAL:"http://localhost:3484",API_URL_CLOUD:"https://thanderbe-zany-squirrel.mybluemix.net"})}(),function(){"use strict";function e(){var e={email:{required:!0,pattern:/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/},password:{required:!0,minlength:8,maxlength:100},name:{required:!0,minlength:3,maxlength:100}},t={email:{required:!0,pattern:/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/},password:{required:!0,minlength:8,maxlength:100}};return{signup:e,login:t}}angular.module("thander").factory("CommonValidation",e),e.$inject=[]}(),function(){"use strict";function e(e,t,r,n){function o(o){var a=t.defer(),i=void 0;return o.addToken&&(i=n.token||void 0),e({async:!0,crossDomain:!0,url:r.API_URL_CLOUD+o.url,method:o.method,params:o.params,data:o.data,headers:{"Content-Type":"application/json","cache-control":"no-cache","x-access-key":i||"NONE"}}).then(function(e){e.config||console.log("Server error occured."),a.resolve(e.data)},function(e){a.reject(e)}),a.promise}var a={make:o};return a}angular.module("thander").factory("Query",["$http","$q","CONSTANTS","$localStorage",e])}(),function(){"use strict";function e(e){function t(t){if(e.performance){var r=Math.round(performance.now());e.ga("send","timing",t,"load",r)}}var r={send:t};return r}angular.module("thander").factory("PageLoad",["$window",e])}(),function(){"use strict";function e(e){function t(e,t){r(t,"error",e.message)}function r(e,t,r){var n=e;n.className=t,n.content=r,"error"===n.className||"warning"===n.className?n.openAlert():(n.openAlert(),n.autoCloseAlert(5e3))}function n(t){if(e.alert){var n=e.alert;e.alert=void 0,setTimeout(function(){r(t,n.className.toString(),n.content)},1e3)}}function o(t,r){e.alert={className:t,content:r}}return{errorHandler:t,showAlert:n,openAlert:r,saveAlert:o}}angular.module("thander").factory("AlertService",e),e.$inject=["$localStorage"]}(),function(){"use strict";function e(){function e(){var e=new Date,t=e.getTimezoneOffset();return t=6e4*t,e.setMilliseconds(e.getMilliseconds()-t),e=e.toISOString().slice(0,19)}function t(e){var t=new Date(e),r=t.getTimezoneOffset();return r=6e4*r,t.setMilliseconds(t.getMilliseconds()-r),t=t.toISOString().slice(0,19)}return{getLocalHTML5String:e,isoToLocalHTML5String:t}}angular.module("thander").factory("LocalDate",e),e.$inject=[]}(),function(){"use strict";function e(e,t,r){e.header=["active","","","",""],r.send(t.absUrl())}angular.module("thander").controller("HomeController",e),e.$inject=["$scope","$location","PageLoad"]}(),function(){"use strict";function e(e){e.dogs=["Bernese","Husky","Goldendoodle"]}angular.module("thander").controller("ListController",e),e.$inject=["$scope"]}(),function(){"use strict";function e(e){e.header=["","active","","",""]}angular.module("thander").controller("AboutController",e),e.$inject=["$scope"]}(),function(){"use strict";function e(e){e.header=["","","active","",""],e.collapsible={groupId:"exp-group",panels:[{id:"exp-1",header:"Associate System Engineer",body:["Quantic Dynamics, Dhaka-1215","A cloud computing company that serves Businesses and Individuals."],link:["https://www.quanticdynamics.com"],list:["Maintaining the distribution server","Designing System Structure","Develop new features and modifications for existing projects","Leading the development team members","Maintaining and reviewing the git repositories"],footer:"April 2017 - Present"},{id:"exp-2",type:"default",header:"Director of IT",body:["Owlette IT Services, Sylhet, Bangladesh","Leading a small team on a variety of development projects and delivering solutions to meet and exceed client’s briefs."],list:["Being first point of call for new and current clients","Outlining and presenting specifications for all web based requirements","Hands on development of all projects from genesis to delivery","Mentoring team members in development and technical progression","Writing multiple code and script and ensuring cross browser compliance","Liaising with SEO developers to ensure all websites contained specific keyword","Troubleshooting and problem solving","Monitoring the overall progression of department and staff"],footer:"July 2016 - Present"},{id:"exp-3",type:"default",header:"Trainer, Web Development",body:["Learning and Earning Development Project, Sherpur, Bangladesh","A continuous government financed project to empower people of remote areas with the knowledge of Information Communication & Technology.","The training duration of the training sessions were 200 hours per batch."],list:["Training the 50 trainees(two individual batches with 25 trainees each) of the project","Arranging the class materials and topics","Arranging tests and analyzing results"],footer:"February 2017 – April 2017"},{id:"exp-4",type:"default",header:"Front-End Web Developer",body:["Ervine Inc, Chicago, USA (via Upwork)","A team for development and maintenance of a multilingual patient management system."],list:["Creating functionality and maintaining behaviour of web pages with AngularJS","Creating single-page web application","Implementing REST API sets on web pages","Uploading projects to FTP server","Diagnosing and rectifying performance issues","Implementing multiple language support on existing websites","Collaborating and assisting other team members"],footer:"October 2016 – February 2017"},{id:"exp-5",type:"default",header:"Microcontroller Programmer",body:["SUST Robotics, SUST, Sylhet-3114","A small beginner team practicing robotics"],list:["Design and Development of Electronic circuits","Programming digital circuits with AVR Microcontrollers","Interfacing electronic modules to hardwares","Monitoring results and fixing hardware and software related issues"],footer:"January 2013 - February 2014"}]}}angular.module("thander").controller("ExpController",e),e.$inject=["$scope"]}(),function(){"use strict";function e(e){e.header=["","","","active",""]}angular.module("thander").controller("ExptController",e),e.$inject=["$scope"]}(),function(){"use strict";function e(e){e.header=["","","","","active",""],e.qd_group=[{src:"images/qd-login-desktop.png",width:"100%"},{src:"images/qd-login-4k.png",width:"100%"},{src:"images/qd-login-laptop.png",width:"300px"},{src:"images/qd-login-tablet-landscape.png",width:"450px"},{src:"images/qd-login-tablet-portrait.png",width:"300px"},{src:"images/qd-dashboard-desktop.png",width:"100%"},{src:"images/qd-dashboard-4k.png",width:"100%"},{src:"images/qd-dashboard-laptop.png",width:"100%"},{src:"images/qd-dashboard-tablet-portrait.png",width:"700px"},{src:"images/qd-dashboard-mobile.png",width:"300px"}],e.angular=[{src:"images/gulp-angular-01.png",size:3},{src:"images/gulp-angular-02.png",size:3},{src:"images/gulp-angular-03.png",size:3},{src:"images/gulp-angular-source.png",size:3}],e.angularTemplate=[{src:"images/template-landing.PNG",size:6},{src:"images/template-body.PNG",size:6}],e.sajhbati=[{src:"images/sajhbati-home.JPG",size:4},{src:"images/sajhbati-add-to-cart.JPG",size:4},{src:"images/sajhbati-cart.JPG",size:4}],e.owlette=[{src:"images/owlette-org.png",size:12}]}angular.module("thander").controller("PortfolioController",e),e.$inject=["$scope"]}(),function(){"use strict";function e(e){e.header=["","","","","","active"]}angular.module("thander").controller("ContactController",e),e.$inject=["$scope"]}(),function(){"use strict";function e(e,t,r,n,o){function a(){e.$storage.alert&&r.showAlert(e.alert),e.rates=["1","2","3","4","5"],e.relations=["Select one","client","colleague","friend","well-wisher","other"],e.$storage.review?e.form={rate:e.$storage.review.rate.toString(),name:e.$storage.review.name,email:e.$storage.review.email,comment:e.$storage.review.comment,relation:e.$storage.review.relation}:(e.form={rate:"5",name:"",email:"",comment:"",relation:"Select one"},e.$storage.review=e.form)}function i(){var t={url:"/review",method:"GET"};n.make(t).then(function(t){"success"===t.state?(l(t.reviews),e.$storage.reviews=t.reviews):e.$storage.reviews?(l(e.$storage.reviews),r.openAlert(e.alert,"warning",t.message)):r.openAlert(e.alert,"error",t.message+", <br>Failed to load review list")})["catch"](function(t){e.$storage.reviews?(l(e.$storage.reviews),r.openAlert(e.alert,"error","Error code: "+t.status+", <br>Data server denied access, <br>submit is disabled")):r.openAlert(e.alert,"error","Error code: "+t.message+", <br>data server denied access, <br>submit is disabled")})}function l(t){var r=0;for(e.reviews=[],r=0;r<t.length;r++){var n={name:t[t.length-(r+1)].name,rate:t[t.length-(r+1)].rate.toString(),comment:t[t.length-(r+1)].comment,relation:t[t.length-(r+1)].relation,date:o.isoToLocalHTML5String(t[t.length-(r+1)].updated_at).slice(0,10)};e.reviews.push(n)}}function s(){if("Select one"===e.form.relation)r.openAlert(e.alert,"error","Please select who you are");else if(parseInt(e.form.rate)===e.$storage.review.rate&&e.form.name===e.$storage.review.name&&e.form.email===e.$storage.review.email&&e.form.comment===e.$storage.review.comment&&e.form.relation===e.$storage.review.relation)r.openAlert(e.alert,"error","Nothing new to update");else{var t={url:"/review",method:"POST",data:{rate:parseInt(e.form.rate),name:e.form.name,comment:e.form.comment,email:e.form.email,relation:e.form.relation}};n.make(t).then(function(t){"success"===t.state?(r.openAlert(e.alert,"success",t.message),e.$storage.review.rate=t.review.rate,e.$storage.review.name=t.review.name,e.$storage.review.email=t.review.email,e.$storage.review.comment=t.review.comment,e.$storage.review.relation=t.review.relation,a(),i()):r.openAlert(e.alert,"error",t.message)})["catch"](function(t){r.openAlert(e.alert,"error",t.message)})}}e.$storage=t,e.alert={},e.header=["","","","","","","active"],e.submitReview=s,a(),i()}angular.module("thander").controller("ReviewController",e),e.$inject=["$scope","$localStorage","AlertService","Query","LocalDate"]}(),function(){"use strict";function e(e){e.header=["","","","","","","active"]}angular.module("thander").controller("ServicesController",e),e.$inject=["$scope"]}(),function(){"use strict";function e(e){e.header=["","","","","","","active"]}angular.module("thander").controller("MoreIndexController",e),e.$inject=["$scope"]}(),function(){"use strict";function e(e){e.header=["","","","","","","active"]}angular.module("thander").controller("MoreGamesController",e),e.$inject=["$scope"]}(),function(){"use strict";function e(){var e={restrict:"E",scope:{menu:"="},templateUrl:"components/directives/header.html"};return e}function t(e,t,r,n){function o(){var r={url:"/review",method:"GET"};t.make(r).then(function(t){a(t.reviews),e.$storage.reviews=t.reviews})["catch"](function(t){a(e.$storage.reviews)})}function a(t){for(var r=0,n=0,o=0;o<t.length;o++)n+=t[o].rate,r++;r&&(n/=r),r=r.toString(),r+="1"===r?" review":" reviews",e.rate=n,e.reviews=r}e.$storage=n,o(),e.clicked=function(){r.go("review")}}angular.module("thander").directive("thanderHeader",e).controller("ThanderHeaderController",t),t.$inject=["$scope","Query","$state","$localStorage"]}(),function(){"use strict";function e(){var e={restrict:"E",templateUrl:"components/directives/footer.html"};return e}angular.module("thander").directive("thanderFooter",e)}(),function(){"use strict";function e(){var e={restrict:"E",scope:{data:"="},templateUrl:"components/directives/collapsible.html"};return e}angular.module("thander").directive("thanderCollapsible",e)}(),function(){"use strict";function e(){var e={restrict:"E",templateUrl:"components/directives/hire.html"};return e}angular.module("thander").directive("thanderHireMe",e)}(),function(){"use strict";function e(){var e={restrict:"E",scope:{src:"=",width:"="},templateUrl:"components/directives/folded-image.html"};return e}angular.module("thander").directive("thanderImg",e)}(),function(){"use strict";function e(){var e={restrict:"E",scope:{panels:"="},templateUrl:"components/directives/photo-row.html"};return e}angular.module("thander").directive("thanderPhotoRow",e)}(),function(){"use strict";function e(){var e={restrict:"E",scope:{group:"="},templateUrl:"components/directives/photo-group.html"};return e}angular.module("thander").directive("thanderPhotoGroup",e)}(),function(){"use strict";function e(){var e={restrict:"E",templateUrl:"components/directives/contact.html"};return e}angular.module("thander").directive("thanderContact",e)}(),function(){"use strict";function e(){var e={restrict:"E",templateUrl:"components/directives/game-2048.html"};return e}angular.module("thander").directive("thanderGame2048",e)}(),function(){"use strict";function e(){var e={restrict:"E",templateUrl:"components/directives/game-tower-rush.html"};return e}angular.module("thander").directive("thanderGameTowerRush",e)}(),function(){"use strict";function e(){return{scope:{name:"=",model:"=",options:"="},restrict:"E",templateUrl:"components/directives/select.html"}}angular.module("thander").directive("thanderSelect",e),e.$inject=[]}(),function(){"use strict";function e(e,t){return{restrict:"EA",scope:{alert:"=thanderAlert"},link:function(r,n){r.alert||(r.alert={}),n.hide(),r.alert.openAlert=function(o){r.alert.closeAlert();var a='<strong ng-click="alert.closeAlert()" class="close" ng-hide="alert.hideClose"><i class="fa fa-times" aria-hidden="true"></i></strong>';switch(n.addClass("alert").addClass("global-font").removeClass("alert-danger alert-success alert-info alert-warning"),r.alert.className){case"error":n.addClass("alert-danger");break;case"success":n.addClass("alert-success");break;case"info":n.addClass("alert-info");break;case"warning":n.addClass("alert-warning");break;default:n.addClass("alert-warning")}if(r.alert.content){var i=a+r.alert.content;n[0].innerHTML=i,t(n)(r),n.show()}o&&e(function(){o()},200)},r.alert.closeAlert=function(t){r.autoClose&&e.cancel(r.autoClose),n.hide(),t&&e(function(){t()},200)},r.alert.autoCloseAlert=function(t,n){r.autoClose&&e.cancel(r.autoClose),r.autoClose=e(function(){r.alert.closeAlert(n)},t)}}}}angular.module("thander").directive("thanderAlert",e),e.$inject=["$timeout","$compile"]}();