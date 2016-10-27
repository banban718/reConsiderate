# reConsiderate - Gives users a second chance

DubHacks2016!!

## Purpose

ReConsiderate is a Google Extension that aimed to reduce online harassment. 

ReConsiderate analyzes text that user input (via email, social media, etc) and when the message seems to carry a negative connotation toward others, a message will pop up to remind the user to reflect on the meaning of the message and whether this is the message that they would like to be delivered. 

<a href="https://cloud.google.com/natural-language/">Google Cloud Natural Language API</a> is used to evaluate the structure and meaning of the text that user inputted and it will provide a sentiment score between the range of -1.0 and 1.0. 

<img src="http://images.flatworldknowledge.com/wrenchorgcomm-27115/wrenchorgcomm-27115-fig094.jpg">

Sentiment score near the -1.0 range indicates text that may deliver negative (harassment, hurtful, harmful, etc.) feelings toward their audience while sentiment score near the 1.0 range reflects texts that create positive (excitement, joy, etc.) meanings. 

When ReConsiderate detects texts with sentiment score near -1.0, it will create an alert (via message) for the user to confirm whether this is the type of message that they would like to be delivered. 

ReConsiderate acts as a mediator by delivering positives notes that will allow the user to reflect on the text that was inputted. Overtime, this will hopefully change the way user interacts via social media as ReConsiderate is perpetually running in the background, analyzing the text that user inputted and moreover providing a feedback based on sentiment scores in hope of reducing the amount of cyber harassment that is happening. 


## Team Members

Our team is comprised of:

- [@midoriww](https://github.com/midoriww) - UWB Software Engineering Student (Midori Williams)
- [@jwcruz8482](https://github.com/jcruz8482) - UW Computer Engineering Student (Jeremy Cruz)
- [@beckychan92](https://github.com/beckychan92) - UC Berkeley (Becky Chan)
- [@Azoni](https://github.com/azoni) - UWT Student (Charlton Smith)
- [@NeelMohapatra](https://github.com/NeelMohapatra) - UW CS (Swojit Mohapatra)

## Technologies
<img src="https://www.twilio.com/blog/wp-content/uploads/2013/04/01-digital_google_cloud_platform_logo_lockup-01-1.png">

<a href="https://cloud.google.com/natural-language/">Google Cloud Natural Language API</a>

## Chrome Extension Icon
<img src="http://blog.draperinc.com/wp-content/uploads/2016/04/Thinking_Face_Emoji.png" width="40" height="40">
