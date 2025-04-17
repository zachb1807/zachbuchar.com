---
title: "TeamCheck"
summary: "Improved attendance management dashboard for TeamSnap"
date: "May 20 2024"
draft: false
tags:
- test
image: "./teamcheck.png"
websiteUrl: https://teamcheck.netlify.app
repoUrl: https://github.com/zachb1807/teamcheck-web
---


While assistant coaching for a local running club in Chicago, part of my responsibilities included managing attendance for the team's practices. We used TeamSnap for this because roster was already imported on this platform and it integrated well with the other administrative aspects. After several weeks of use, the UX flaws of the TeamSnap app's attendance interface became very apparent.

## TeamSnap Flaws
The list of practice dates is nearly impossible to effectively organize. Items can only be sorted alphabetically by the title of the attendance event. So "Thursday 4/11" and "Friday 4/12" would be in completely different locations in the list, and it had no search capabilities.

After selecting an event, you're presented with the list of players. Next to their name, each player has 3 attendance state buttons for "Absent" "Not Marked", and "Present". The players can only be sorted alphabetically by last name and is not searchable. The issue is that, when asked their name, most kids will default to telling their *first* name. This leaves the user to either find the first name in an unsorted list or re-prompt the player for their last name.

The interface was not free from technical bugs either. The most notable of these was that the app would sometimes return to the event list if the phone screen fell asleep due to inactivity, requiring the user to navigate back to the correct date.

## Meet TeamCheck
To address the issues with TeamSnap, I decided to create an entirely new app solely for attendance that connects to the TeamSnap API. This allows the user to seamlessly transition to the new interface without any data migration and ensures all changes are synced back to the original TeamSnap account. Instead of creating native Android and iOS apps, I made TeamCheck a web application that could be installed as a PWA to ensure cross-platform flexibility and compatibility.

TeamCheck builds upon the existing TeamSnap attendance system by adding numerous useful features to streamline the attendance-taking process. Upon logging in with their TeamSnap account and selecting a team, the user is presented with their event list, complete with a search bar and edit timestamps.

Within each event, the attendance roster is designed to mimic the original TeamSnap UI for familiarity. It adds essential features, like search, filter, sort, which allow coaches to quickly find players.

## Conclusion
TeamCheck makes taking attendance so much easier for coaches by fixing the biggest problems with the TeamSnap interface. With its simple design, powerful search and sorting tools, and smooth integration with the TeamSnap API, it saves time and cuts down on headaches. By focusing on what coaches actually need and making it work on any device, TeamCheck helps you spend less time dealing with tech and more time helping your team thrive.

