---
layout: base
title: Projects
permalink: /projects/
---
## Projects
My projects span a wide range of topics, technologies, and audiences.

### Locus Tempus
{% include image.html filename="locus-tempus.png" caption="The user interface of Locus Tempus" %}
{% include project-link.html url="https://locustempus.ctl.columbia.edu" text="Site" %} {% include project-link.html url="https://github.com/ccnmtl/locustempus" text="Repository" %}

{% include pills.html items="Python, Django, Django Rest Framework, MyPy, TypeScript, React, Webpack, Cypress, LTI" %}

I am the lead developer of Locus Tempus, a platform for any instructor at
Columbia University to create map-based assignments for their students. The
site is built with Python and Django. TypeScript and React is used to implement
interactive mapping environments. It integrates with Columbia's learning
management system via LTI to authenticate users and route them to their course
spaces. It uses Mapbox and DeckGL, a WebGL-powered framework for visualizing
data layers on maps.

### Fernande Brielh Decruck
{% include image.html filename="fbd.png" caption="The homepage for Fernande Breilh Decruck" %}
{% include project-link.html url="https://fernandedecruck.com" text="Site" %} {% include project-link.html url="https://fernandedecruck.fr" text="French Site" %} {% include project-link.html url="https://github.com/nbuonin/decruck-wagtail" text="Repository" %}

{% include pills.html items="Python, Django, Wagtail CMS, JavaScript, Webpack, PayPal, Docker" %}

The site for Fernande Brielh Decruck is a multi-lingual Django site build using
the [Wagtail CMS](https://wagtail.io/) framework. The site features a faceted
search interface for the catalog of Decruck's works. It also includes a
storefront for selling digital downloads of musical scores, with payments
handled via a PayPal integration.


### Stats Interactives
{% include image.html filename="stats-interactives.png" caption="A simulation of the linear regression model." %}
{% include project-link.html url="https://stats-interactives.ctl.columbia.edu" text="Site" %} {% include project-link.html url="https://github.com/ccnmtl/stats-interactives" text="Repository" %}

{% include pills.html items="React, Single Page App, Webpack, Cypress" %}

Stats Interactives is a single page React application that simulates various
statistic theorems, built for graduate students in the School of International
and Public Affairs. Because the users are not math or science majors, a key
objective of this project was to build an engaging experience, and yet not
gloss over important details of the theorems. My favorite of the bunch are the
spinning graphs of the [Linear Regression Model](https://stats-interactives.ctl.columbia.edu/linear-regression-model).

### Eureka
{% include image.html filename="eureka.png" caption="A photo of a Bach cello suite provided the perfect cover image for Eureka's homepage" %}
{% include project-link.html url="https://eureka.ctl.columbia.edu" text="Site" %} {% include project-link.html url="https://github.com/ccnmtl/eureka" text="Repository" %}

{% include pills.html items="Python, Django, Wagtail CMS, Webpack, Cypress" %}

Eureka is a digital guidebook for using improvisation in the ear training
classroom. It was built using Django and Wagtail CMS. The scope of the content
was the largest challenge with this site. To facilitate the content entry, I
wrote a management command to scaffold approximately 300 pages for for the
content editors.

### Project OHCOE
{% include image.html filename="ohcoe.png" caption="SVG hearts were used to show a student's progress" %}
{% include project-link.html url="https://ohcoe.ctl.columbia.edu" text="Site" %} {% include project-link.html url="https://github.com/ccnmtl/ohcoe" text="Repository" %}

{% include pills.html items="Hugo, JavaScript, Webpack, Cypress" %}

Project OHCOE is a site that teaches dental students how to intervene if they
suspect that their patients have an opioid problem. I built this project with
Hugo, a static site generator written in Go. It also features a number of
assessments written in JavaScript, as well as custom Google Analytic events to
capture video analytics.

### Tensor Flock
{% include project-link.html url="https://github.com/laurenarnett/TensorFlock" text="Repository" %}

{% include pills.html items="OCaml, C, Bash, DroneCI, Docker" %}

TensorFlock is a class project from 2018. Working among a team of four, we
designed a language that would typecheck the size of tensors at compile time,
and implemented a compiler for it in OCaml. My contributions to the project
consisted of writing the testing framework, running a continuous integration
server, and implemting the lambda lifter.

### Chelsea Symphony
{% include image.html filename="tcs.png" caption="The Chelsea Symphony" %}
{% include project-link.html url="https://chelseasymphony.org" text="Site" %} {% include project-link.html url="https://github.com/nbuonin/chelsea-symphony" text="Repository" %}

{% include pills.html items="Python, Django, JavaScript, Webpack, Docker, CircleCI" %}

I have build two generations of websites for The Chelsea Symphony. The first
version was a Drupal 7 site. A few years later, I migrated the site to Wagtail
CMS in order to give the content editors a better experience. Key to this
migration was a migration management command I wrote to read data off of an API
endpoint on the Drupal site. Working in Django also gave me the opportunity to
correctly model the data, which facilitated a more flexible editing experience.
