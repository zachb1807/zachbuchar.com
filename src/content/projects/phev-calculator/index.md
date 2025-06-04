---
title: "PHEV Calculator"
summary: "A simple app to calculate the most cost-effective way to use your plug-in hybrid vehicle."
date: "Mar 21 2022"
draft: false
tags:
- test
image: "./phev-calculator.png"
websiteUrl: "https://phev-calculator.web.app/"
repoUrl: "https://github.com/zachb1807/PHEV-Calculator"
---

The PHEV Calculator is a simple app that helps you determine the most cost-effective way to use your plug-in hybrid electric vehicle (PHEV). It allows you to input various parameters such as vehicle model, fuel prices, and electricity prices. The app then calculates how much it would cost to drive a certain distance on electric vs. gas, taking into account factors like battery capacity, electric range, and fuel efficiency. 

The app is made with static HTML, CSS (including Tailwind), and JavaScript, and is hosted on Firebase. It is designed to be user-friendly and accessible, making it easy for anyone to use. The app is also responsive, ensuring that it works well on both desktop and mobile devices. It has a PWA (Progressive Web App) feature, allowing users to install it on their devices for easy access. 

Every vehicle model has its battery capcity, gas MPG, and electric range stored in a JSON file on Firebase that the app uses. The main issue with this is that the database must be updated manually when new models are released, since data sources for alternative fuel ratings (especially battery capacity) are limited. Even manually retrieving the data is labor-intensive as it requires identifying all new PHEV models and using multiple sources to find the correct data.

I have since moved on from this project and have no plans to update it, but it is still available on its website and GitHub repository for anyone who wants to use it or build upon it.