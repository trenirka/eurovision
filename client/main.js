import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import 'bootstrap';
import popper from 'popper.js';

Router.configure({
  layoutTemplate: 'main'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/udelezenci', function () {
  this.render('udelezenci');
});
