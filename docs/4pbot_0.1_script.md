# 4Pbot v0.1 Script


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

#### 1.2 Future Features
- crowdsource delay information
- link with news feature about delays

#### 1.3 Proposed Outcomes
- Estimates within 2 accuracy window
- Feedback that this feature helped somebody to plan


### 2.0 Anonymous Complaints
>**Need:** While there are a number of channels for clients to submit complaints or file issues with DSWD, our research suggests that clients are afraid that filing complaints will lead to being unenrolled from 4Ps.

#### 2.1 User Stories
- "As a *client*, when I tell the bot I want to make a complaint, it takes me though steps to submit my complaint. I must enter in my Location, Date, Type(maybe), and a description"
- "As a *client*, when I initiate the steps to file a complaint, I am assured that my information will be anonymous and not shared with DSWD unless I give permission at a later date."
- "As a *DSWD stakeholder*, I can browse through a semi-organised list of aggregated complaints by Barangay, Date, Type and description"

#### 2.2 Future Features
Version 0.1 of this feature will serve to aggregate the complaints into a central place. Further development of this concept may include:
1. establishing a link with DSWD to show the value of data being reported
2. allow a Parent Leader or City Link to initiate an action (with the permission)


#### 2.3 Proposed Outcomes
- __TODO__ What does success for 0.1 look like?
- One goal for this feature could be to establish 4Pbot as a trusted third party which
	- Can better evaluate the effectiveness of programs *govt oriented*
	- Can take action to help resolve issues on behalf of a client *client oriented*
		- Employ/help parent leaders to see and resolve these problems
		- crowdsource advice from a network, such as leveraging the existing Facebook groups
		- Automate the above with AI
- This tool could also serve as a middle ground between not taking action, and filing a full grievance with DSWD
- We're also seeing that updates or resolving issues may have a lot to do with the Parent Leader. How can we either (1) circumvent them, or (2) help them to do their job better?


### 3.0 Payment & Conditions Calculator
*DISCLAIMER: This feature is not all that valid. Our research shows that clients already have a good understanding of the workings of the system, and recieve new information (eg. about the rice subsidy) from the Parent Leader or City Link. We may end up scrapping this feature, but as it is already 50% built, we might go ahead and see how much people will use it. If nothing else, it will serve as a useful introduction to others who are curous about the bot, and flesh out the initial features.*
>**Need:** Clients may be unaware of how much they should be receiving, and what conditions they must meet from 4ps. This tool will ask them a series of questions, and inform them of their expected payout, and


#### 3.1 User Stories
- "As a client, when I ask the bot to calculate my payment, it takes me through a series of questions about my home conditions"
- "As a client, when I finish answering the questions, it reports the expected payment amount, and the conditions I need to meet"
- "As a client, after completing the series of questions, I'm asked 'are you not receiving this amount?', and given some advice or instructions about what to do about it."

#### 3.2 Future Features
- Could potentially link with 2.0

#### 3.3 Proposed Outcomes
- What does success look like?
	- people using this feature
	- people initiating action (or at least clicking 'yes' on 'Are you not receiving this amount?')


### 4.0 4P News
> **Need:** clients may be missing out on top down news from DSWD..

__TODO__ Look more into if people are talking about this on Facebook

Present a news feed with 3 most recent items.
Make a simple website/CMS for someone to type short news summaries.
Crowdsource news somehow?
- could be more for the community aspect, which is already happening on FB. What value can we offer here?

__TODO__ finish


## Script

### Payment Estimator
### Anonymous Complaints
### Payments & Conditions Calculator
### 4P News
