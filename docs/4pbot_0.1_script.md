# 4Pbot v0.1 Script


## Overview
The purpose of this document is to provide a starting point for the implementation of 4pbot 0.1. This document will serve to outline the basic features, commands and responses of the bot, to aid with translation from English into Tagalog and Cebuano.


## Functional Requirements

### 1.0
**Need:** from our research, we have found that clients often don't know when the next payment will be, or understant when it should be (scheduling + delays)



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


### 3.0 Payment & Conditions Calculator
*DISCLAIMER: This feature is not all that valid. Our research shows that clients already have a good understanding of the workings of the system, and recieve new information (eg. about the rice subsidy) from the Parent Leader or City Link. We may end up scrapping this feature, but as it is already 50% built, we might go ahead and see how much people will use it. If nothing else, it will serve as a useful introduction to others who are curous about the bot, and flesh out the initial features.*
>**Need:** Clients may be unaware of how much they should be receiving, and what conditions they must meet from 4ps. This tool will ask them a series of questions, and inform them of their expected payout, and


#### 3.1 User Stories
- "As a client, when I ask the bot to calculate my payment, it takes me through a series of questions about my home conditions"
- "As a client, after completing the series of questions, I'm asked 'are you not receiving this amount?', and given some advice or instructions about what to do about it."

## Scope
- This version of the bot will be implemented for Facebook messenger only
- This version of the bot will be available in English, Cebuano and Tagalog


## Assumptions
- This bot will work on FB free data (big one)
- Users can submit their location data over FB Free data
- User will be able to select the language when they first start the bot


## Script


### 1.0
### 2.0
### 3.0
### 4.0
