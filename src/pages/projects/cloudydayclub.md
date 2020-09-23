---
templateKey: 'project-page'
path: /projects/cloudydayclub
title: Cloudy Day Club
image: /img/cdc.jpg
imageLarge: true
heading:  
---

[cloudyday.club](https://www.cloudyday.club/)  
[GitHub](https://github.com/aditdamodaran/cloudy-day-club)

I love Spotify, whether we're talking about its desktop app, mobile app, or web player. They're all great feats of engineering and product design. Personally the way I use Spotify at my desk is to have it open on a separate monitor while I work on my laptop. As I worked in various offices throughout college, I noticed a lot of other folks did this too. 

So it got me thinking about whether there was a way to make the interface more visually interesting. I am a huge fan of album art. I've always wanted to have a wall full of vinyl covers of my favorite albums. Thus, I thought an interface that adapted in color to the album art of the song you were listening to would be pretty cool. 

And Spotify somewhat already does this! But it's not a main feature of their application, and probably for good reason. It doesn't scale well. It's a bit flashy, it's not very predictable, and it may not be very accessible for colorblind or visually impaired users. 

But for those who want something a bit more, welcome to Cloudy Day Club. A splash of color while you listen to music to brighten up your cloudy days.

<div class="image-100"></div>

![Brakelights by Omar Apollo](/img/cloudydayclub/brakelights.jpg)
<div class="subtitle image-100">Brakelights by Omar Apollo has a background that is also its dominant color. The interface will feel familiar to Spotify users, but with a bit more vibrancy and interactivity.</div>

<b>Technical Details:</b>

Cloudy Day Club uses OAuth2 to authenticate premium Spotify users, and then gives them access to all of their playlists. It integrates with the Web Player SDK to enable playback in your browser. 

The interface for Cloudy Day Club changes color with the album artwork of each song. This was a technical challenge for security reasons, somewhat surprisingly. Album artwork is served through Content Distribution Networks (CDNs), and as a result cannot be manipulated effectively in the browser due to Cross-Origin Resource Sharing (CORS) policies.  I was using an npm package called “Color Thief” to grab the dominant color of an album’s cover on the application’s front-end, but this was resulting in CORS errors. I learned that I needed to send the URL for the album artwork to the Express/Node backend server (which I did using a library called “axios”), perform the computations there, and then send it back to the frontend.

This posed a second issue, which was performance. I now needed to keep the frontend performative while computing the album artwork’s dominant color (which could take 0.5-1s). I learned patterns for asynchronously calling the backend (using async/await) while updating the app’s frontend separately. Finally, I used animations plugged into React’s lifecycle hooks to make the color transition feel seamless and natural when switching songs. 

Ultimately I was able to create a colorful and bright interface that personalizes itself to users’ playlists. As a core feature of Cloudy Day Club, this was a fun technical challenge that pushed me to think more about the architecture of my application, not blocking the performance of my UI, requests to an external API, data served over a CDN, and security policies surrounding the transfer of such data.

Wanna give it a spin? If you have a Spotify Premium Membership, click the link below to try out Cloudy Day Club. It may take a moment to load since it's hosted on Heroku's free tier.

[cloudy-day-club.herokuapp.com](https://cloudy-day-club.herokuapp.com/)  