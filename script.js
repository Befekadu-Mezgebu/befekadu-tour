/****************************************************************
 *  File name: script.js
 *  Instructor: Harri Airaksinen
 *  Date: May 2016
 *     ---------- ---------- ----------------------------
 *  Authors: Befekadu Temere
 *
 ****************************************************************/
$(document)
		.ready(
				function() {
					var dict;
					var churchlist;
					var counter = 0;

					// define paths
					
					
					// list of images to load
					

					//json object to hold names of monolithic churches with their groups
					
					list = [];
					list2 = [];
					list3 = [];
					var path;
					var image1, image2, image3, image4, image5, image6;
				
					for (i = 0; i < list.length; i++) {
						$("#nchurchlist").append(
								'<li id=' + list[i] + '> <a href="#pagefour">'
										+ list[i] + '</a> </li>');
					}
					for (i = 0; i < list2.length; i++) {
						$("#wchurchlist").append(
								'<li id=' + list2[i] + '> <a href="#pagefour">'
										+ list2[i] + '</a> </li>');
					}
					for (i = 0; i < list3.length; i++) {
						$("#echurchlist").append(
								'<li id=' + list3[i] + '> <a href="#pagefour">'
										+ list3[i] + '</a> </li>');
					}

								

					// loader function for the json file
					$.getJSON(path, function(data) {
						dict = data;
					});

					console.log(churchlist);

					var dir = "http://users.metropolia.fi/~befekadt/images/";


					var imagearray = [ image1, image2, image3, image4, image5,
							image6 ];

					// list of churches by group_name

					var x = 0; // swipe show
					$("#images").on("swipeleft", function() {
						if (x == imagearray.length) {
							x = 0;
						}
						$(this).attr("src", imagearray[x]);
						x++;
					});

					function hide(name) {
						$(name).hide();
					}
					$('#try').click(function() {
						hide("#pageone")
					});

					$(".img").on("click", function() {
						$(this).find("img").toggleClass("shrinkToFit");
					});

					
					$("#culture").load($(this).attr("href"));

					$("#shownext").click(function() {
						shownext();
					});

					function shownext() {
						// reset counter if full
						if (counter == dict.sentences.length) {
							counter = 0;
						}
						var i = counter;

						counter++;
					}
				

					// facebook  api for like and share and login functionalities

					function autoResize(id) {
						var newheight;
						var newwidth;

						if (document.getElementById) {
							newheight = document.getElementById(id).contentWindow.document.body.scrollHeight;
							newwidth = document.getElementById(id).contentWindow.document.body.scrollWidth;
						}

						document.getElementById(id).height = (newheight) + "px";
						document.getElementById(id).width = (newwidth) + "px";
					}
					// -->
					function statusChangeCallback(response) {
						console.log('statusChangeCallback');
						console.log(response);
						// The response object is returned with a status field
						// that lets the
						// app know the current login status of the person.
						// Full docs on the response object can be found in the
						// documentation
						// for FB.getLoginStatus().
						if (response.status === 'connected') {
							// Logged into your app and Facebook.
							testAPI();
						} else if (response.status === 'not_authorized') {
							// The person is logged into Facebook, but not your
							// app.
							document.getElementById('status').innerHTML = 'Please log '
									+ 'into this app.';
						} else {
							// The person is not logged into Facebook, so we're
							// not sure if
							// they are logged into this app or not.
							document.getElementById('status').innerHTML = 'Please log '
									+ 'into Facebook.';
						}
					}

					// This function is called when someone finishes with the
					// Login
					// Button. See the onlogin handler attached to it in the
					// sample
					// code below.
					function checkLoginState() {
						FB.getLoginStatus(function(response) {
							statusChangeCallback(response);
						});
					}

					window.fbAsyncInit = function() {
						FB.init({
							appId : '1557898201161879',
							cookie : true, // enable cookies to allow the
							// server to access
							// the session
							xfbml : true, // parse social plugins on this page
							version : 'v2.1' // use version 2.1
						});

						// Now that we've initialized the JavaScript SDK, we
						// call
						// FB.getLoginStatus(). This function gets the state of
						// the
						// person visiting this page and can return one of three states to
						// the callback you provide.  They can be:
						//
						// 1. Logged into your app ('connected')
						// 2. Logged into Facebook, but not your app ('not_authorized')
						// 3. Not logged into Facebook and can't tell if they are logged into
						//    your app or not.
						//
						// These three cases are handled in the callback function.

						FB.getLoginStatus(function(response) {
							statusChangeCallback(response);
						});

					};

					// Load the SDK asynchronously
					(function(d, s, id) {
						var js, fjs = d.getElementsByTagName(s)[0];
						if (d.getElementById(id))
							return;
						js = d.createElement(s);
						js.id = id;
						js.src = "//connect.facebook.net/en_US/sdk.js";
						fjs.parentNode.insertBefore(js, fjs);
					}(document, 'script', 'facebook-jssdk'));

					// Here we run a very simple test of the Graph API after login is
					// successful.  See statusChangeCallback() for when this call is made.
					function testAPI() {
						FB
								.api(
										'/me',
										function(response) {
											console
													.log('Welcome!  Fetching your information.... ');
											console
													.log('Successful login for: '
															+ response.name);
											document.getElementById('status').innerHTML = 'Thanks for logging in, '
													+ response.name + '!';
										});
					}

				});
