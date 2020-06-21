---
templateKey: 'project-page'
path: /projects/statepartisanship
title: Visualizing U.S. State Legislature Partisanship
image: /img/statepartisanship.jpg
imageLarge: false
heading:  
---

<div class="quote">
How do you effectively convey complex panel time-series data in a static image?
</div>

**A seemingly simple question with a fun, but complex solution.**

For a research paper I worked on with peers in the UChicago Econ/Data Science major, we wanted to analyze the correlation between flips in state legislatures (following Congressional / Governorship elections) and the average income in that state controlling for industry and education level.

In simpler terms, do changes in your local government have a real impact on your income? Politicians often campaign on bringing more jobs to their economy, but how do wages fare?

Part of the difficulty with something like this is visualizing the data on a map. Here’s what it looks like tabulated:

<div class="image-100"></div>

![State Partisanship Panel Data](/img/statepartisanship/tabulateddata.jpg)
<div class="subtitle image-100">That’s a lot right? Where do we even begin? Some states are red/blue the entire time. Others like Alabama are red some of the time, but blue the other half. And states like New Hampshire and Minnesota are flipping back and forth. How do we convey this kind of data quickly?</div>

I started with weighting each year using a power formula to give greater weight to the most recent years (indicating how a state has progressed). 2000 became year 0, 2001 became year 1, and so on and so forth until 2019 (year 19). Then, I raised that number to the power of 2.5. This gives us increasingly big numbers as we progress down the line! Then we can multiply each of these values by the composition of the state legislature: -1 for Republican, 0 for Split, and +1 for Democratic. Summing the result, we get a weighted number that tells us how the state has progressed over time.


![R Code](/img/statepartisanship/rcode.jpg)
<div class="subtitle">Ooh, R code!</div>

I created a dummy variable to check if a state’s legislature always belonged to one party–these states are darkly colored correspondingly. Everything else (except Nebraska) is placed on a gradient scale where the aforementioned weights determine political party progression. The graph clearly depicts which states have remained the same since 2000, and the party movement of the other states.

Here’s what the final visual looked like when we merged the data!

<div class="image-100"></div>

![Final State Political Control](/img/statepartisanship/statepoliticalcontrol.jpg)

# Conclusion

Ultimately we did not find a meaningful correlation between party flips in state legislatures and wages for that state’s constituents. It is interesting though in the visualization to see the U.S. becoming increasingly polarizeed, with a much redder South and Midwest and a much bluer West and Northeast. It’s also curious to see traditional Presidential election “swing states” like Florida as starkly Republican at the state legislature level, but this is indeed [supported by the data](https://ballotpedia.org/Party_control_of_Florida_state_government) and suggests lower down-ballot voter participation.

This project forced me to learn more about R and good data visualization. I can check that my results are correct by just overlaying the two right graphs below. Thus we have visualized a LOT of geographically diverse data in an easily digestible way. And our data makes intuitive sense when cross-referencing our tabulated data.

<div class="image-third"></div>

![Not Unified to Unified](/img/statepartisanship/nu2u1.jpg)

<div class="image-third"></div>

![Not Unified to Unified Democrat](/img/statepartisanship/nu2u2.jpg)

<div class="image-third"></div>

![Not Unified to Unified Republican](/img/statepartisanship/nu2u3.jpg)
