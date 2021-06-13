---
templateKey: blog-post
title: The Data Science Log | Part I
date: 2021-04-21T17:33:45.130Z
description: "  "
featuredpost: false
featuredimage: /img/chemex.jpg
tags:
  - Data Science
---
### Logistic (Logit) Regression

https://ml-cheatsheet.readthedocs.io/en/latest/logistic_regression.html 

You're probably familiar with linear regression, in which we fit a straight line to estimate the correlation between an independent variable (X) and dependent variable (Y). More specifically, we find the "best fit" line (by minimizing the sum of the squared residuals).

If you're doing regression, you start with some data.  That data's a bunch of `(x, y)` points in a plane, often it represents something happening in the real world that you've measured.

Then you pick a shape of curve that you think will fit the data.  For many  experiments, it's a straight line.  For others, maybe it's a parabola.   Whatever shape of curve you have, the equation of the curve is going to  have *parameters*.  Those parameters determine the specific curve you're talking about, for example:

- For a line, the parameters are `m` (slope) and `b` (y-intercept) in the equation of a line, `y = mx+b`.
- For a parabola, the parameters are `a`, `b`, and `c` in the equation of a parabola, `y = ax^2 + bx + c`.

Regression just means "picking parameters so that the curve fits the data as  closely [1] as possible."  In 2020, you will probably use some software  package for this.  You will need to read the manual of whatever data  analysis software you are using -- probably either R / Matlab / Numpy /  Sage, or a spreadsheet program.

^^ SIMPLIFY THIS AND BE MORE CLEAR

Logistic Regression is suited for problems in which the dependent variable (Y) is binary. Some examples in the real world where you might see this:

	* Medicine: A patient either may or may not have a medical condition.
	* Politics: A state may be either Republican or Democrat. 
	* Optical Character Recognition (OCR): Is this image of a handwritten character a T or L?
	* And much more (THINK OF MORE?)

In these instances, you can imagine that there's some things that might correlate with the probability of the outcome being either A or B. Experiencing chest pain might indicate you're at a higher risk of a heart attack. The demographics of a state's population might affect the probability it swings either red or blue in an election. A horizontal line at the top of the character probably indicates the handwritten character is a T, rather than an L.

When we perform Logistic Regression, we define a strict probability threshold (i.e. 50%) to classify an outcome as either A or B. For example, if the probability is above or equal to 50%, we'd classify it as A, below 50% and we'd classify it as B. 

Because we're interested that something is either A or B, 1 or 0, we use the Sigmoid Function. (PICTURE). It works well for this type of problem because, well, most of the values on it are either 1 or 0. We call this an "Activation Function" because we use it to map *probabilities* to *predicted values*. 

Similar to Linear Regression, where we fit a straight line to a bunch of points, in Logistic Regression we fit an 'S'-shaped line to a bunch of points, and use it to classify those points as either A or B. 







