---
title: "QuickRecord"
summary: "Easily record voice messages for Zachnology Tech Reviews podcast."
date: "Mar 19 2021"
draft: false
tags:
- test
image: "./quickrecord.png"
websiteUrl: ""
repoUrl: "https://github.com/zachnology-com/QuickRecord-app"
---

QuickRecord is a simple app that I developed to allow users to easily record voice messages for the Zachnology Tech Reviews podcast. The app is designed to be user-friendly and straightforward, making it easy for anyone to use.

It's built on Flutter using the Dart programming language, which I chose because of its cross-platform capabilities and ease of use. The interface itself is a webview that loads a Jotform with a voice recording feature. Other than requesting microphone permissions from the system and passing it through to the webview, the app is a simple wrapper around the form along with a basic information and settings menu. Colors in the webview UI are designed to seamlessly match the app's theme, providing a consistent user experience. 

While the Flutter app worked well in testing, I ultimately found it to perform somewhat poorly on older, low-performance Android devices because of the way the Flutter engine renders widgets. The webview also had poor compatibility and could become buggy with Android 12 and later. To address this, I decided to create a native Android app using Kotlin and the Android SDK in late 2021. It looked nearly identical with regards to the UI. The native app was much more lightweight and responsive on lower-end devices, and was significantly more stable on new Android versions. At around the same time, I also created a Windows version of the app using the same Jotform within Nativefier, but it was extremely bloated and slow

Ultimately, I decided to discontinue all QuickRecord apps in favor of a new full-fledged Zachnology Tech Reviews app for Android, which I began developing in early 2022.