var xmlrpc  = require('xmlrpc');
var fs      = require('fs');
var http    = require('http');
var https   = require('https');
var request = require('request');

var apiUrl  = 'https://api.blog.naver.com/xmlrpc';  // 블로그 api url
var naverId = "test";                             // 네이버 아이디
var apiKey  = "블로그 api암호";   // 블로그 api 암호

var client = xmlrpc.createSecureClient('https://api.blog.naver.com/xmlrpc'); // https
var content =  '<p style="text-align: center;">오늘 참 화창한 날씨네요.</p>' + '\n' + '<p style="text-align: center;">쿄쿄쿄</p>' + '\n' +  '<p style="text-align: center;">바로!!!!!!!!!</p>';

var post = {};
post['title']       = ' 안녕하세요 방가워요???';
post['description'] = content;
post['categories']  = '테스트';

var params = [apiKey, naverId, apiKey, post, true];
//var params1 = [apiKey, naverId, apiKey];

client.methodCall('metaWeblog.newPost', params, function (error, data) {
    console.log('>>> data <<< '     + data);
    console.log('>>> error <<< '    + error);
});
