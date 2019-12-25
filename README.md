# <a href="mitcheisenstat.com">mitcheisenstat.com</a>

This is the source code behind the website <a href="mitcheisenstat.com">mitcheisenstat.com</a>. The website is built on the React framework.

The website is hosted on an AWS s3 bucket.

The only part of the website requiring an API is the <a href=mitcheisenstat.com/contact>Contact Me</a> page. Since I wanted to host the website in a static fashion, I use the Amazon API Gateway service to act as my backend for the app.

Once the user presses the submit button, a POST request is sent to my Amazon API Gateway which triggers a lambda function. The lambda function uses Amazon Simple Email Service to send an automated email to my account to notify me that I have a new contact request.