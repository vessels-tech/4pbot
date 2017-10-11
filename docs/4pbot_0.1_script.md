# 4Pbot v0.1 Feature Specification


## Overview
The purpose of this document is to provide a starting point for the implementation of 4pbot 0.1. This document will serve to outline the basic features, commands and responses of the bot, to aid with translation from English into Tagalog and Cebuano.

## Scope
- This version of the bot will be implemented for Facebook messenger only
- This version of the bot will be available in English, Cebuano and Tagalog

## Assumptions
- This bot will work on FB free data (big one)
- Users can submit their location data over FB Free data
- User will be able to select the language when they first start the bot
- Payment information for each barangay is available somewhere
- We can map a user's postcode with a barangay


## Functional Requirements

### 1.0 Payment Estimator
>**Need:** from our research, we have found that clients often don't know when the next payment will be, or understand when it should be (scheduling + delays).

#### 1.1 User Stories
- "As a *client*, when I ask the bot for a payment estimate, it asks for my location, and then tells me when the next payment is scheduled, and estimates if there is a delay"
- "As an administrator, I have some interface to enter in scheduled and delayed payment dates for a barangay"

#### 1.2 Outcomes
- Estimates within 2 accuracy window
- Feedback that this feature helped somebody to plan
-
#### 1.3 Future Features
- crowdsource delay information
- link with news feature about delays
- push updates when delay information changes


### 2.0 Anonymous Complaints
>**Need:** While there are a number of channels for clients to submit complaints or file issues with DSWD, our research suggests that clients are afraid that filing complaints will lead to being unenrolled from 4Ps.

#### 2.1 User Stories
- "As a *client*, when I tell the bot I want to make a complaint, it takes me though steps to submit my complaint. I must enter in my Location, Date, Type(maybe), and a description"
- "As a *client*, when I initiate the steps to file a complaint, I am assured that my information will be anonymous and not shared with DSWD unless I give permission at a later date."
- "As a *DSWD stakeholder*, I can browse through a semi-organised list of aggregated complaints by Barangay, Date, Type and description"

#### 2.2 Outcomes
- __TODO__ What does success for 0.1 look like?
- People use this to let us know of problems
- One goal for this feature could be to establish 4Pbot as a trusted third party which
	- Can better evaluate the effectiveness of programs *govt oriented*
	- Can take action to help resolve issues on behalf of a client *client oriented*
		- Employ/help parent leaders to see and resolve these problems
		- crowdsource advice from a network, such as leveraging the existing Facebook groups
		- Automate the above with AI
- This tool could also serve as a middle ground between not taking action, and filing a full grievance with DSWD
- We're also seeing that updates or resolving issues may have a lot to do with the Parent Leader. How can we either (1) circumvent them, or (2) help them to do their job better?

#### 2.3 Future Features
Version 0.1 of this feature will serve to aggregate the complaints into a central place. Further development of this concept may include:
1. establishing a link with DSWD to show the value of data being reported
2. allow a Parent Leader or City Link to initiate an action (with the permission)
3. Crowdsource advice from other users anonymously

### 3.0 Payment & Conditions Calculator
*DISCLAIMER: This feature is not all that valid. Our research shows that clients already have a good understanding of the workings of the system, and recieve new information (eg. about the rice subsidy) from the Parent Leader or City Link. We may end up scrapping this feature, but as it is already 50% built, we might go ahead and see how much people will use it. If nothing else, it will serve as a useful introduction to others who are curous about the bot, and flesh out the initial features.*
>**Need:** Clients may be unaware of how much they should be receiving, and what conditions they must meet from 4ps. This tool will ask them a series of questions, and inform them of their expected payout, and

#### 3.1 User Stories
- "As a client, when I ask the bot to calculate my payment, it takes me through a series of questions about my home conditions"
- "As a client, when I finish answering the questions, it reports the expected payment amount, and the conditions I need to meet"
- "As a client, after completing the series of questions, I'm asked 'are you not receiving this amount?', and given some advice or instructions about what to do about it."

#### 3.2 Outcomes
- What does success look like?
	- people using this feature
	- people initiating action (or at least clicking 'yes' on 'Are you not receiving this amount?')

#### 3.3 Future Features
- Could potentially link with 2.0

### 4.0 4P News
> **Need:** clients may be missing out on top down news from DSWD, or other happenings in the 4Ps program. People are currently sharing news and information on Facebook (we think), but they may benefit from a more structured way of communicating / receiving news.

**note** we can use a google sheets zapier integration for this! Don't have to even worry about database or apis!

#### 4.1 User Stories
- "As a client, when I ask the bot for the recent news, I am presented with 3 short (twitter length) highlights on what's been happening relevant to 4Ps clients"
- "As client, stories that are over 2 weeks old are no longer relevant or useful to me."
- "As a client, when I view a news story, these news stories are in Tagalog only."
- "As an administrator I have a basic console to add and remove stories from this interface."

### 4.2 Outcomes
- Clients read this news, and gain a better understanding of current affairs relevant to them
- Clients will want more local news where possible
- Clients will want to contribute their own stories

### 4.3 Future Features
- Better CMS than just GraphCool console
- Support for Tagalog, English and Cebuano
- Allow users to submit and upvote/downvote - similar to hacker news maybe.


### Notes:
- could be more for the community aspect, which is already happening on FB. What value can we offer here?



## Script

### Introduction

- Hi, {{first name}}! I'm 4Pbot.

I'm here to help you with your questions and problems with the 4Ps.

- I'm currently a work in progress, so please be patient with me. I'm also looking for any feedback you have along the way.
- For starters, can you please share your phone number with me? It will help me to get in touch later on.
- What you've entered does not look like a number. Please try again.
- Thanks!


#### Menu
- Here's some of the things you can ask me:  

**Title:** When is my next payout?
**Subtitle:** I can estimate when your next payout is. I can also see if there are any delays.
**Button Name:** When is my payout?

**Title:** I'd like to report a problem.
**Subtitle:** Having trouble receiving your payout? Or are you not getting paid enough?
**Button Name:** Make a secret report

**Title:** Help me calculate my payout.
**Subtitle:** Calculate your payout, and what conditions you need to meet.
**Button Name:** Calculate my payout.

**Title:** What's the latest 4Ps news?
**Subtitle:** I can tell you the latest happenings with the 4ps and DSWD.
**Button Name:** 4Ps news

**Title:** 4Pbot feedback
**Subtitle:** Have I been helpful at all? Let me know.
**Button Name:** Leave feedback

### Payment Estimator

- Sure, I can help with that.
- I should let you know I'm still learning this feature, so my estimates may be a little wrong.
- Make sure to check with your parent leader about the payout day as well.  
- Where do you live?  
- The next scheduled payout for _barangay_ is between _date_1_ and _date_2_. However, it looks like payments might be delayed by up to _delay_time_
- menu

### Report a problem
- Sure, I can help with that.
- Just to let you know, any complaints you make are private, and your personal information won't be shared with DSWD unless you give us permission.

- What type of problem are you having?
  - not receiving correct payment
	- less than 3 of my children are enrolled
  - details have not been updated
  - other

- Where do you live?
- Tell us a few details about what the problem is.
- Thanks!


### Payments & Conditions Calculator
- I can help you to estimate your 4Ps payment. Just answer these few questions!
- Are you pregnant or expecting a baby?
- How many children do you have from ages 0-5?
- How many children in your household are in elementary school?
- How many children in your household are in high school?
- Thanks! That's all we need to know.


### 4P News
- These are the latest 3 stories I have about 4Ps.
- menu

### Feedback
>This section will also be triggered by a push notification to the test users after a while.

- How would you rate your experience with 4PBot?
- How could I be improved?
- What are some other features you would like me to have?
- Thanks!


### Notes:
- Try and be personal, and colloquial where possible. Make sure that this could be understood by just about anybody (even a kid maybe!)
- Going to try and keep everything 1st person - I, Me, My
