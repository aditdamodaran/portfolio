---
templateKey: 'project-page'
path: /projects/ipos
title: Intel, Intelligent-Point-of-Sale (IPOS)
image: /img/ipos.jpg
imageLarge: false
heading:  
---

During the summer of 2019, I had the privilege of working with the amazing Technology team at Digitas NA in Chicago as a Front-End Software Engineering Intern. During my time at Digitas, I worked on Intel’s “Intelligent Point of Sale (IPOS)” software.

**Note:** The codebase I worked on is proprietary and private, so unfortunately I do not have pictures, but I’m happy to put you in contact with a reference if you’re curious about it!


![IPOS-Standard](/img/ipos-standard.jpg)
<div class="subtitle">This is the legacy “Standard” version of IPOS (I did not work on this version), but it does give you a visual of the application’s content and design.</div>


IPOS is an application you might run into if you’re shopping for a PC at a retail store (like Best Buy, Staples, Walmart, Target, etc.). It ships in ~20 languages to retail stores internationally. I’m borrowing this description from Mark Montri because I think it describes IPOS perfectly:

<div class="quote">
IPOS enables retail shoppers to learn about and explore the capabilities of Intel devices without the pressure of a salesperson. The software, which is installed on thousands of devices in computer showrooms around the world, automatically detects the system specifications of the device and displays this information in an easy-to-understand, interactive experience that educates the shopper. Additionally, a cloud-based admin panel allows retailers to control and modify hundreds of devices at a time, enabling them to customize prices, promotions, and branding. <br><br> &mdash;  Mark Montri, (markmontri.com)
</div>

I worked on the front-end of two of the three version of IPOS:

- **IPOS Gaming**: Which is used for gaming computers running Intel® processors
- **IPOS Chromebook**: Which is used for Chromebook® laptops

Both of these versions rolled out in 2019, so unlike **IPOS Standard** (which has much more legacy code), these two applications use much more up-to-date technologies.

The IPOS team is about 15 strong, and we collaborated primarily on Gitlab and Jira while using Jenkins for continuous integration and deployment. I utilized the [VueJS](https://vuejs.org/) Javascript framework with [Nuxt](https://nuxtjs.org/) to add features to IPOS, [SASS/SCSS](https://sass-lang.com/) for styling/animations, and [Storybook](https://storybook.js.org/) to document any changes I made to Vue components. Some key features I worked on included:

- Adding a subtitle capability to all video players on IPOS, which works smoothly for any of the ~20 languages.
- Adding 3 new templates for OEM Gaming computers (i.e. the HP Omen 15 8th-Gen Intel Core I7 Processor). The three templates had to be re-orderable and repeatable, which was a fun challenge I accomplished using the templates’ JSON properties to correctly place the content and assets.
- Adding transition animations to Chromebook components and layouts

I collaborated with the engineering and QA teams to ensure my code did not create technical debt, met product specs, and was thoroughly documented.