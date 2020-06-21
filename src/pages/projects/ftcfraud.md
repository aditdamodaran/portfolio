---
templateKey: 'project-page'
path: /projects/ftcfraud
title: FTC Fradulent Marketing Analysis
image: /img/ftcfraud.jpg
imageLarge: false
heading:  
---

*Please note: I worked on this project during a two month period as a Research Assistant for Empirical Marketing Professor Anita Rao at the University of Chicago Booth School of Business, but unfortunately due to time constraints with my class schedule, part-time internship, and extracurricular commitments I was unable to finish the project.*

[Here is a link to the GitHub repo](https://github.com/aditdamodaran/FTC-Fradulent-Marketing-Analysis-of-User-Pathways) containing the code I used to parse user web-browsing data.

<div class="quote">Firms sometimes make selective or deceptive claims. Such claims can have negative consequences for consumers, especially if consumers are not fully informed and the claims are hard to verify. This paper aims to measure the decline in demand that a firm making such claims faces when caught.
<br><br> &mdash; Rao, Wang |  <i>Demand for ‘Healthy’ Products: False Claims and FTC Regulation</i></div>

In 2011, [the Federal Trade Commission (FTC) went after 10 companies purporting to sell “acai-berry weight-loss supplements” that could help consumers lose weight rapidly](https://www.ftc.gov/news-events/press-releases/2011/04/ftc-seeks-halt-10-operators-fake-news-sites-making-deceptive). While the FDA does not regulate supplement marketing, the FTC based its sting operation around “fake news websites” these companies created that mimicked real news media outlets. These fake news websites contained affiliate links redirecting to the weight loss supplement websites. The redirects deceived consumers into thinking that the weight loss supplements were supported and tested by mainstream news outlets.


![FTC Fraud Example](/img/ftc/example.jpg)
<div class="subtitle">Here’s an excerpt from the Investigator Testimony of FTC vs. Ambervine LLC.. The document is about 20 pages long. I had to go through 10 lawsuits, which resulted in about 200 pages of reading + exhibits, in each case I jotted the fake news domain URLs to check for in my Python scripts.</div>

The research was aimed at understanding how effective the sting operation was at protecting consumers against fraudlent marketing companies. To do so, we used Nielsen Data that contained monthly user browsing histories across hundreds of devices accessing these fake news websites.

User browsing history files (~2GB each) are large and difficult to work with. I created several Python scripts to help me with the process, and gained proficiency using [Python’s Pandas](https://pandas.pydata.org/) library.

I also used [Bloomberg Law](https://essential.bna.com/login/signin?msg=deny&url=https%3A%2F%2Fwsauth.bna.com%2Fwsauth%2Fblawauth%3Ftarget%3Dhttps%253A%252F%252Fwww.bloomberglaw.com%252Fstart%26v%3D0.724.1&authenDec=-203) to research each of the 10 lawsuits in-depth to understand which fake news domains I needed to be on the lookout for. During this time, I was curious about the prospect of Law School and had taken the LSAT, so I found reading court document briefs to be rather fun.

![FTC Fraud URLs](/img/ftc/urls.jpg)
<div class="subtitle">Just a small snippet of the URLs I gathered from the court case documents. There were nearly 600+ overall at the end of my research.</div>

[Here’s the full list of everything I found!](https://github.com/aditdamodaran/FTC-Fradulent-Marketing-Analysis-of-User-Pathways/blob/master/csv/input/fake_news_domains_extended_list.csv)

I didn’t commit the raw data .CSV to the GitHub because of its sheer size (2GB) and because it is proprietary to Nielsen, but [you can see the parsed data here if you’re interested for January 2011](https://github.com/aditdamodaran/FTC-Fradulent-Marketing-Analysis-of-User-Pathways/tree/master/csv/output/1_2011).

[Here’s the link to that GitHub again if you’re curious to see some of the code](https://github.com/aditdamodaran/FTC-Fradulent-Marketing-Analysis-of-User-Pathways). My biggest takeaways from this project were learning how to work with large datasets, quickly reading court case briefs for important information (think Mike Ross from Suits USA), and creating an infrastructure to parse those datasets into meaningful analysis.

