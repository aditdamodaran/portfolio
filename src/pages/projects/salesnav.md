---
templateKey: 'project-page'
path: /projects/salesnav
title: Sales Navigator
image: /img/cvsalesnavblue.jpg
imageLarge: false
heading: 
---

LinkedIn describes Sales Navigator as “a leading social selling tool that enables sales professionals to build and nurture customer relationships and attain increased sales performance.” Sales Navigator is a paid-subscription service so let me try to explain its functionality.

SalesNav enables you to select criteria (i.e. geography, education, former employment, title, size of company, etc.) for individuals whose profile you may be interested in. Once you have set your criteria, you can save them as a “search filter”, and LinkedIn will return the results of everyone who fits those criteria and is at least a 3rd degree connection. These results are paginated, and a brief summary of their profile is displayed. You can click through the pages and view all profiles returned from the search. If your search filter is too broad (anything that returns +1000 results), LinkedIn will cut you off after 1000 profiles (40 pages of results). Those 40 pages contain the most relevant profiles given your search criteria. Here’s what the interface looks like: 

![Sales Nav Interface](/img/salesnav/interface.jpg)
<div class="subtitle">The Sales Navigator interface.</div>

Chicago Ventures as an early-stage tech venture capital firm has many use cases for Sales Navigator, including compiling contacts for its current portfolio companies to reach out to. It also intended to use SalesNav to find leads on startups outside its more immediate purview in Chicago. The only issue is that the process of manually reviewing ~1000 results for any given filter can get very tedious, and the task of copying and pasting relevant information (first name, last name, title, company, location, etc.) for each of those profiles is time-consuming. VC’s are strapped for time, and this process could easily be automated.

I used Python and Selenium to do so. Here’s the “Person” object I used for each profile, where you can see what relevant information I sought to collect (I later also added in profile URL links).

<div class="image-50"></div>

![Person Object](/img/salesnav/personobject.jpg)
<div class="subtitle image-50">Note: While I am the sole author of this codebase, I intend to keep it private for the benefit of Chicago Ventures. Message me if you’d like to know how it works in greater detail.</div>

The most helpful breakthrough in the process came from my Intro. to Data Engineering class, and it was really cool to see synergy between my internship and academic curriculum.

Initially I was attempting to use a “for-loop” over all the profiles on any given page. This often failed because profiles loaded in asynchronously, and therefore the script would misinterpret how many profiles it needed to scrape based on the page’s HTML/XML data on page load. The script’s accuracy was somewhere between 70-80%, which was dismal.

In class we learned how to use **iterators**, which is a way of interacting with countably “infinite” data. Processing the data element-by-element instead of as an array of a pre-determined length gave me the flexibility to wait for all profiles on a page to load before scraping. This process, wrapped in a try/except loop, brought the script’s accuracy to 100% (although it slowed the script down slightly as it waited for LinkedIn to make the requisite calls to its database).

The script was placed behind a GUI, created with [Kivy](https://kivy.org/#home).

<div class="image-50"></div>

![Interface of App](/img/salesnav/salesnavinterface.jpg)
<div class="subtitle image-50">A snippet of the GUI interface. I tried to keep it simple and intuitive.</div>


Here’s what its output would look like:

<div class="image-50"></div>

![Output](/img/salesnav/csvoutput.jpg)
<div class="subtitle image-50">Sensitive info is blurred.</div>

This reduced a process that could manually take an hour or more to a matter of minutes (the script could go through ~1000 profiles or 40 pages in 8-10 minutes). The longest part of the project was creating a GUI that enabled the user to input their LinkedIn credentials and walk them through how to use the script. I would optimize this in the future using Electron or Flask — I picked Kivy for ease-of-use, but it ultimately became unwieldy when I attempted to package and ship the application. The final deliverable was a desktop application.